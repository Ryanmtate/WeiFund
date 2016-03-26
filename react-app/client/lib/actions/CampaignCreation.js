export function currentStep(step){
  return {
    type : 'CURRENT_STEP',
    currentStep : step
  }
}

export function updateCampaignProcess(campaign){
  return {
    type : 'UPDATE_CAMPAIGN',
    newCampaign : campaign
  }
}
