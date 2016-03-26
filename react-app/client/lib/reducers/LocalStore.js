// Predefined PROVIDERS state variables

const DEFAULT_LOCAL_STORE = {
  lastSaved : undefined
};


export default function LOCAL_STORE(state = DEFAULT_LOCAL_STORE, action){
  switch(action.type){
    case 'UPDATE_LOCAL_STORE':
      return {
        ...state,
        lastSaved : action.lastSaved
      };
    case 'GET_LOCAL_STORE':
      return {
        ...action.state
      };
    default:
      return state;
  }
}
