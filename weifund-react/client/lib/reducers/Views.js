// Predefined PROVIDERS state variables

const DEFAULT_VIEW_STATE = {
  settingsView : undefined,
  bodyView : 'discover'
};


export default function VIEWS(state = DEFAULT_VIEW_STATE, action){
  switch(action.type){
    case 'SETTINGS_VIEW':
      return {
        ...state,
        settingsView : action.settingsView
      };
    case 'BODY_VIEW':
      return {
        ...state,
        bodyView : action.bodyView
      };
    default:
      return state;
  }
}
