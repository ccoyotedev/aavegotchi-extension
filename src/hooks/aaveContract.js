import { useState, useEffect } from 'react';
import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';
const diamondAbi = require('../abi/diamond.json');

const aavegotchiAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d';

const useAaveContract = () => {
  const [ account, setAccount ] = useState('');
  const [ contract, setContract ] = useState(null);
  const [ gotchis, setGotchis ] = useState();
  const [ gotchiSVG, setGotchiSVG ] = useState();
  const [ selectedGotchi, setSelectedGotchi ] = useState();

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
    setGotchis(updatedGotchis);
    setSelectedGotchi(updatedGotchis[0]);
  };

  useEffect(() => {
    const setAavegotchiSVG = async (tokenId) => {
      const svg = await contract?.methods.getAavegotchiSvg(tokenId).call();
      setGotchiSVG(svg);
    };

    if (selectedGotchi) {
      setAavegotchiSVG(selectedGotchi.tokenId);
    }
  }, [ selectedGotchi, contract ]);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return {
    account,
    contract,
    gotchis,
    gotchiSVG,
    selectedGotchi,
  };
};

export default useAaveContract;