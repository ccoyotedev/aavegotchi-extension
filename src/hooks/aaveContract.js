import { useState, useEffect } from 'react';
import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';
const diamondAbi = require('../abi/diamond.json');

const aavegotchiAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d';

const useAaveContract = () => {
  const [ account, setAccount ] = useState('');
  const [ contract, setContract ] = useState(null);
  const [ gotchis, setGotchis ] = useState([]);

  const getAavegotchiSVG = async (tokenId, contract) => {
    const svg = await contract?.methods.getAavegotchiSvg(tokenId).call();
    return svg;
  };

  const getAavegotchiCollaterals = async (contract) => {
    const collateral = await contract?.methods.getCollateralInfo().call();
    return collateral;
  };

  const getAllAavegotchiSVGs = async (gotchis, contract) => {
    const collaterals = await getAavegotchiCollaterals(contract);
    return Promise.all(gotchis.map(async gotchi => {
      const svg = await getAavegotchiSVG(gotchi.tokenId, contract);
      const collateral = collaterals.find(item => item["collateralType"] === gotchi.collateralAddress);
      const collateralInfo = collateral["collateralTypeInfo"];
      const collateralColors = {
        cheekColor: collateralInfo["cheekColor"],
        primaryColor: collateralInfo["primaryColor"],
        secondaryColor: collateralInfo["secondaryColor"],
      }

      return {
        ...gotchi,
        svg,
        collateralColors,
      }
    }))
  }

  const handlePet = async (tokenIds) => {
    if (account) {
      const interact = await contract?.methods.interact(tokenIds).send({ from: account });
      updateGotchis(contract, account);
      return interact;
    }
  }

  const loadBlockchainData = async() => {
    const provider = createMetaMaskProvider()
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    console.log('account: ', accounts[0]);
    const aaveContract = new web3.eth.Contract(diamondAbi, aavegotchiAddress);
    setContract(aaveContract);
    updateGotchis(aaveContract, accounts[0]);
    return;
  };

  const updateGotchis = async (aaveContract, address) => {
    const contractGotchis = await aaveContract.methods.allAavegotchisOfOwner(address).call();
  
    const updatedGotchis = contractGotchis.map((gotchi) => {
      const modifiedNumericTraits = gotchi['modifiedNumericTraits'];
      const numericTraits = gotchi['numericTraits'];
      return (
        {
          tokenId: parseInt(gotchi['tokenId']),
          name: gotchi['name'],
          status: parseInt(gotchi['status']),
          numericTraits: {
            energy: parseInt(numericTraits[0]),
            aggression: parseInt(numericTraits[1]),
            spookiness: parseInt(numericTraits[2]),
            brainSize: parseInt(numericTraits[3]),
            eyeShape: parseInt(numericTraits[4]),
            eyeColor: parseInt(numericTraits[5]),
          },
          modifiedNumericTraits: {
            energy: parseInt(modifiedNumericTraits[0]),
            aggression: parseInt(modifiedNumericTraits[1]),
            spookiness: parseInt(modifiedNumericTraits[2]),
            brainSize: parseInt(modifiedNumericTraits[3]),
            eyeShape: parseInt(modifiedNumericTraits[4]),
            eyeColor: parseInt(modifiedNumericTraits[5]),
          },
          kinship: parseInt(gotchi['kinship']),
          lastInteracted: parseInt(gotchi['lastInteracted']),
          level: parseInt(gotchi['level']),
          modifiedRarityScore: parseInt(gotchi['modifiedRarityScore']),
          baseRarityScore: parseInt(gotchi['baseRarityScore']),
          haunt: parseInt(gotchi['hauntId']),
          collateralAddress: gotchi['collateral'],
        }
      );
    });
    const gotchisWithSVGs = await getAllAavegotchiSVGs(updatedGotchis, aaveContract);
    setGotchis(gotchisWithSVGs);
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return {
    account,
    contract,
    gotchis,
    handlePet,
  };
};

export default useAaveContract;