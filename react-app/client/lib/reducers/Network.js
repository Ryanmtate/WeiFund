// Predefined NETWORK state variables

const STATE = {
  pending : true,
  error : undefined,
  status : undefined
};


export default function NETWORK(state = STATE, action){
  switch(action.type){
    case 'NETWORK_REQUEST':
      return {
        ...state,
        pending: true
      };
    case 'NETWORK_SUCCESS':
      return {
        ...state,
        status : action.result,
        pending: false
      };
    case 'NETWORK_FAILURE':
      return {
        ...state,
        error : action.error,
        status : undefined,
        pending: true
      };
    default:
      return state;
  }
}
