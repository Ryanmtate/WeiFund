import Promise from 'bluebird';
import Web3 from 'web3';
let web3;

function SetupEthereumProvider(ethereumProvider){
  return new Promise((resolve, reject) => {
    if(typeof web3 !== 'undefined'){
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider(ethereumProvider));
    }

    web3.eth.getAccounts((error, result) => {
      if(error){reject(error)}
      resolve(web3.currentProvider.host);
    });

  });
}

export default function PROVIDERS(ethereumProvider, ipfsProvider){
  // Testing PROVIDERS REQUEST CALL
  /*
  This action will fetch the local providers upon call (metamask, then localhost);
  return if the connection is open/available. If not, will throw and error, and ask to
  connect to third party host.

  result will update our state, and consequently our UI.
  */
  return {
    types : ['PROVIDERS_REQUEST', 'PROVIDERS_SUCCESS', 'PROVIDERS_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {
        let Providers = {
          pending : true,
          ethereumProvider : "",
          ipfsProvider : ""
        };

        SetupEthereumProvider(ethereumProvider).then((currentProvider) => {
          Providers.ethereumProvider = currentProvider;
          Providers.pending = false;
          resolve(Providers);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  }
}
