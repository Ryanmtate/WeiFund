import ipfs from 'ipfs-js';
import Web3 from 'web3';
export var web3;


function SetupEthereumProvider(ethereumProvider){
  return new Promise((resolve, reject) => {


    if(window.web3){
      web3 = new Web3(window.web3.currentProvider);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider(ethereumProvider));
    };

    web3.eth.getAccounts((error, result) => {
      if(error){reject(error)}

      if(web3.currentProvider.readable){
        resolve('MetaMask');
      } else {
        resolve(web3.currentProvider.host);
      };

    });

  });
}

function SetupIPFSProvider(ipfsProvider){
  return new Promise((resolve, reject) => {
    let p = ipfsProvider.split(":");
    ipfs.setProvider({host: p[0], port: p[1]});
    let t = 'Test';
    ipfs.add(t, (error, hash) => {
      if(error){reject(error)}
      ipfs.cat(hash, (error, buffer) => {
        if(error){reject(error)}
        if(buffer.toString() != t){
          reject("error with ipfs");
        }

        resolve(ipfsProvider);
      });
    });
  });
}

export function Ethereum(ethereumProvider){
  return {
    types : ['ETHEREUM_PROVIDER_REQUEST', 'ETHEREUM_PROVIDER_SUCCESS', 'ETHEREUM_PROVIDER_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {
        SetupEthereumProvider(ethereumProvider).then((ethereumProviderSet) => {
          resolve(ethereumProviderSet);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  }
}

export function IPFS(ipfsProvider){
  return {
    types : ['IPFS_PROVIDER_REQUEST', 'IPFS_PROVIDER_SUCCESS', 'IPFS_PROVIDER_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {
        SetupIPFSProvider(ipfsProvider).then((ipfsProviderSet) => {
          resolve(ipfsProviderSet);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  }
}

export function Setup(){
  return {
    type : 'SETUP_SUCCESS',
    pending : false
  }
}
