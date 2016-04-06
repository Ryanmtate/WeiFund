const DEFAULT_ACCOUNT_STATE = {
  accounts : [],
  selectedAccount : undefined,
  error : undefined
};


export default function ACCOUNT(state = DEFAULT_ACCOUNT_STATE, action){
  switch(action.type){
    case 'GET_ACCOUNTS_REQUEST':
      return {
        ...state,
        accounts : []
      };
    case 'GET_ACCOUNTS_SUCCESS':
      return {
        ...state,
        accounts : action.result
      };
    case 'GET_ACCOUNTS_FAILURE':
      return {
        ...state,
        error : action.error
      };
    case 'SELECT_ACCOUNT_REQUEST':
      return {
        ...state,
        selectedAccount : undefined
      };
    case 'SELECT_ACCOUNT_SUCCESS':
      return {
        ...state,
        selectedAccount : action.result
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
