export function Settings(view){
  return {
    type : 'SETTINGS_VIEW',
    settingsView : view
  }
}

export function Body(view){
  return {
    type : 'BODY_VIEW',
    bodyView : view
  }
}
