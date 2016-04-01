const DEFAULT_ACCOUNT_STATE = {
  accounts : undefined,
  selectedAccount : undefined,
  error : undefined
}


export default function ACCOUNT(state = DEFAULT_ACCOUNT_STATE, action){
  switch(action.type){
    case 'GET_ACCOUNTS_REQUEST':
      return {
        ...state,
        accounts : undefined,
        error : undefined
      };
    case 'GET_ACCOUNTS_SUCCESS':
      return {
        ...state,
        accounts : action.result,
        error : undefined
      };
    case 'GET_ACCOUNTS_FAILURE':
      return {
        ...state,
        accounts : undefined,
        error : action.error
      };
    case 'SELECT_ACCOUNT_REQUEST':
      return {
        ...state,
        selectedAccount : undefined,
        error : undefined
      };
    case 'SELECT_ACCOUNT_SUCCESS':
      return {
        ...state,
        selectedAccount : action.result,
        error : undefined
      };
    case 'SELECT_ACCOUNT_FAILURE':
      return {
        ...state,
        selectedAccount : undefined,
        error : action.error
      };
    default:
      return state;
  }
}
