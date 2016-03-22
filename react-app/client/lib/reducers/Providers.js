// Predefined PROVIDERS state variables

const DEFAULT_STATE = {
  pending : true,
  ethereumProvider : "http://localhost:8545", // http://104.236.65.136:8545/
  ipfsProvider : "localhost:5001" // 104.131.53.68:5001
};


export default function PROVIDERS(state = DEFAULT_STATE, action){
  switch(action.type){
    case 'PROVIDERS_REQUEST':
      return {
        ...state,
        pending: true
      };
    case 'PROVIDERS_SUCCESS':
      console.log(action.result)
      return {
        ...state,
        pending : action.result.pending,
        ethereumProvider : action.result.ethereumProvider,
        ipfsProvider : action.result.ipfsProvider
      };
    case 'PROVIDERS_FAILURE':
      return {
        ...state,
        error : action.error,
        ethereumProvider : undefined,
        ipfsProvider : undefined,
        pending: true
      };
    default:
      return state;
  }
}
