const DEFAULT_CAMPAIGN_STATE = {
  currentStep : 0,
  campaignProcess : {
    steps : [{
      title : 'Basics',
      description : 'Here you can start your WeiFund campaign. Fill out your basic campaign information below.',
      stepId : 'campaign-step-1'
    }, {
      title : 'Details',
      description : 'Here you can fill out your projects story, images and videos.',
      stepId : 'campaign-step-2'
    }, {
      title : 'Tokens',
      description : 'Here you can deploy tokens and token dispersal controllers.',
      stepId : 'campaign-step-3'
    },{
      title : 'Checkout',
      description : 'Here you can review the transactions that will be made in order to setup your campaign on WeiFund.',
      stepId : 'campaign-step-4'
    },{
      title : 'Receipt',
      description : '',
      stepId : 'campaign-step-5'
    }]
  },
  newCampaign : {
    name: undefined,
    expiry: {
      unix : undefined,
      local : undefined
    },
    beneficiary: undefined,
    fundingGoal: undefined,
    contributionEndpoint: {
      active : false,
      address : undefined
    },
    operatorPersona : undefined,
    websiteUrl : undefined,
    bannerImage : undefined,
    profileImage : undefined,
    videoUrl : undefined,
    description : undefined,
    projectDetails : undefined,
    createStandardToken : true,
    createTokenController : true,
    autoDispersal : false,
    initialTokenAmount : undefined,
    initialTokenPrice : undefined,
    TransactionOrders : [{
      item : 'WeiFund Campaign',
      gasCostInWei : 240000
    }, {
      item : 'WeiHash Registration',
      gasCostInWei : 240000
    }, {
      item : 'Campaign Contribution Endpoint',
      gasCostInWei : 100000
    }, {
      item : 'Operator Persona',
      gasCostInWei : 100000
    }, {
      item : 'Custom Standard Token',
      gasCostInWei : 100000
    }, {
      item : 'Custom Token Controller',
      gasCostInWei : 100000
    }]
  }
}

export default function CAMPAIGN(state = DEFAULT_CAMPAIGN_STATE, action){
  switch(action.type){
    case 'CURRENT_STEP':
      return {
        ...state,
        currentStep : action.currentStep
      };
    case 'UPDATE_CAMPAIGN':
      return {
        ...state,
        newCampaign : action.newCampaign
      };
    default:
      return state;
  }
}
