// Initial PROVIDERS state variables

const DEFAULT_PROVIDER_STATE = {
  ipfsProviderPending : true,
  ipfsProviderConnected : "localhost:5001", // 104.131.53.68:5001
  ipfsProviderError : undefined,

  ethereumProviderPending : true,
  ethereumProviderConnected : "http://localhost:8545", // http://104.236.65.136:8545/
  ethereumProviderError : undefined
};


export default function PROVIDERS(state = DEFAULT_PROVIDER_STATE, action){
  switch(action.type){
    case 'ETHEREUM_PROVIDER_REQUEST':
      return {
        ...state,
        ethereumProviderPending: true,
        ethereumProviderError : undefined,
        ethereumProviderConnected : undefined
      };
    case 'ETHEREUM_PROVIDER_SUCCESS':
      return {
        ...state,
        ethereumProviderConnected : action.result.ethereumProvider,
        ethereumProviderPending: false,
        ethereumProviderError : undefined
      };
    case 'ETHEREUM_PROVIDER_FAILURE':
      return {
        ...state,
        ethereumProviderError : action.error,
        ethereumProviderConnected : undefined,
        ethereumProviderPending: true
      };
    case 'IPFS_PROVIDER_REQUEST':
      return {
        ...state,
        ipfsProviderPending: true,
        ipfsProviderError : undefined,
        ipfsProviderConnected : undefined
      };
    case 'IPFS_PROVIDER_SUCCESS':
      return {
        ...state,
        ipfsProviderConnected : action.result.ipfsProvider,
        ipfsProviderError : undefined,
        ipfsProviderPending: false
      };
    case 'IPFS_PROVIDER_FAILURE':
      return {
        ...state,
        ipfsProviderError : action.error,
        ipfsProviderConnected : undefined,
        ipfsProviderPending: true
      };
    default:
      return state;
  }
}
