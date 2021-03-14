import { useState, useEffect } from 'react';
import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';
const diamondAbi = require('../abi/diamond.json');

const aavegotchiAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d';

const useAaveContract = () => {
  const [ account, setAccount ] = useState('');
  const [ contract, setContract ] = useState(null);
  const [ gotchis, setGotchis ] = useState();
  const [ selectedGotchi, setSelectedGotchi ] = useState();

  const getAavegotchiSVG = async (tokenId, contract) => {
    const svg = await contract?.methods.getAavegotchiSvg(tokenId).call();
    return svg;
  };

  const getAllAavegotchiSVGs = async (gotchis, contract) => {
    return Promise.all(gotchis.map(async gotchi => {
      const svg = await getAavegotchiSVG(gotchi.tokenId, contract);
      return {
        ...gotchi,
        svg,
      }}))
  }

  const handlePet = async (tokenId) => {
    const interact = await contract?.methods.interact(tokenId).send();
    return interact;
  }

  const loadBlockchainData = async() => {
    const provider = createMetaMaskProvider()
    const web3 = new Web3(provider);
    console.log(web3, provider);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const aaveContract = new web3.eth.Contract(diamondAbi, aavegotchiAddress);
    setContract(aaveContract);
    const gotchis = await aaveContract.methods.allAavegotchisOfOwner(accounts[0]).call();
    const updatedGotchis = gotchis.map((gotchi) => {
      const numericTraits = gotchi['modifiedNumericTraits'];

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
          kinship: parseInt(gotchi['kinship']),
          lastInteracted: parseInt(gotchi['lastInteracted']),
          level: parseInt(gotchi['level']),
          rarityScore: parseInt(gotchi['modifiedRarityScore']),
        }
      );
    });
  
    const gotchisWithSVGs = await getAllAavegotchiSVGs(updatedGotchis, aaveContract);
    setGotchis(gotchisWithSVGs);
    setSelectedGotchi(gotchisWithSVGs[0]);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return {
    account,
    contract,
    gotchis,
    selectedGotchi,
    handlePet,
  };
};

export default useAaveContract;