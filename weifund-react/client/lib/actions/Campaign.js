import contracts from '../contracts/compiled/contracts.json!';
import Pudding from 'ether-pudding';
import PuddingLoader from 'ether-pudding/loader';
import * as WeiFundContracts from '../contracts/sol-js/index';
import { web3 } from './Providers';



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

export function newCampaign(campaign, account){
  return {
    types : ['NEW_CAMPAIGN_REQUEST', 'NEW_CAMPAIGN_SUCCESS', 'NEW_CAMPAIGN_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {
        var CampaignRegistration = new Object();
        var Receipt = new Object();
        var Standard_Token = WeiFundContracts.Standard_Token;
        var WeiControllerFactory = WeiFundContracts.WeiControllerFactory;
        var CampaignAccountFactory = WeiFundContracts.CampaignAccountFactory;
        var PersonaRegistry = WeiFundContracts.PersonaRegistry;
        var WeiFundTokenFactory = WeiFundContracts.WeiFundTokenFactory;
        var WeiFund = WeiFundContracts.WeiFund;

        var WeiControllerAddress;
        var campaignID;

        var SendFrom = {from: account.address, gas:4712388};

        web3.eth.defaultAccount = account.address;
        Pudding.setWeb3(web3);
        Standard_Token.load(Pudding);
        WeiControllerFactory.load(Pudding);
        CampaignAccountFactory.load(Pudding);
        WeiFund.load(Pudding);

        let {
          initialTokenAmount,
          initialTokenPrice,
          autoDispersal,
          name,
          beneficiary,
          fundingGoal,
          expiry } = campaign;

        Standard_Token.new(initialTokenAmount, SendFrom).then((_Standard_Token) => {
          Standard_Token = _Standard_Token;
          return SaveTransactionReceipt(Standard_Token.contract.transactionHash, 'Standard_Token', Receipt);
        }).then((Receipt) => {
          console.log(Receipt);
          return WeiControllerFactory.at(contracts['WeiControllerFactory'].address);
        }).then((_WeiControllerFactory) => {
          WeiControllerFactory = _WeiControllerFactory;
          return WeiControllerFactory.newWeiController(account.address, Standard_Token.address, initialTokenPrice, autoDispersal);
        }).then((txhash) => {
          return SaveTransactionReceipt(txhash, 'newWeiController', Receipt);
        }).then((Receipt) => {
          console.log(Receipt);
          WeiControllerAddress = Receipt['newWeiController'].logs[0].topics[1].replace('000000000000000000000000', '');
          return WeiFund.at(contracts['WeiFund'].address);
        }).then((_WeiFund) => {
          WeiFund = _WeiFund;
          return WeiFund.newCampaign(name, beneficiary, fundingGoal, expiry.unix, WeiControllerAddress);

        }).then((txhash) => {
          // let { abi, address } = contracts['WeiFund'];
          // var filter = web3.eth.contract(abi).at(address).CampaignCreated({ _owner: web3.eth.defaultAccount }, (error, result) => {
          //   if(error){reject(error)}
          //   console.log(result);
          //   resolve(result);
          // });


          // var filterCampaignCreated = web3.eth.filter({
          //   'max' : 100,
          //   'address' : WeiFund.address,
          //   'topics' : [ `0x${web3.sha3('CampaignCreated(uint256,address)')}`, '_campaignID', '_owner' ]
          // });
          //
          // filterCampaignCreated.watch((error, result) => {
          //   if(error){reject(error)}
          //   console.log(result);
          //   resolve(result);
          // });


          return SaveTransactionReceipt(txhash, 'newCampaign', Receipt);
        }).then((Receipt) => {
          console.log(Receipt);

          return WeiFund.numCampaigns.call();
        }).then((numCampaigns) => {
          console.log(numCampaigns.toNumber())
          campaignID = numCampaigns.toNumber(); // might need to -1 from this.
          // still a terrible way to do this in production; the event should be filtered;
          // lets test.

          return CampaignAccountFactory.at(contracts['CampaignAccountFactory'].address);
        }).then((_CampaignAccountFactory) => {
          CampaignAccountFactory = _CampaignAccountFactory;
          return CampaignAccountFactory.newCampaignAccount(campaignID);
        }).then((txhash) => {
          return SaveTransactionReceipt(txhash, 'newCampaignAccount', Receipt);
        }).then((Receipt) => {
          console.log(Receipt);
          resolve(Receipt);
        }).catch((error) => {
          console.log(error);
          reject(error);
        });
      });
    }
  }
}


// Utilities functions below


function SaveTransactionReceipt(txhash, receiptName, Receipt){
  return new Promise((resolve, reject) => {
    web3.eth.getTransactionReceipt(txhash, (error, receipt) => {
      if(error){reject(error)}
      Receipt[receiptName] = receipt;
      resolve(Receipt);
    });
  })
}
