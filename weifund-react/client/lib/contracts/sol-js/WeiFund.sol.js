// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"totalCampaigns","outputs":[{"name":"_numCampaigns","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"totalRefunded","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"beneficiaryOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_beneficiary","type":"address"},{"name":"_fundingGoal","type":"uint256"},{"name":"_expiry","type":"uint256"},{"name":"_config","type":"address"}],"name":"newCampaign","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"amountRaisedBy","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"isSuccess","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"refund","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"},{"name":"_userCampaignID","type":"uint256"}],"name":"userCampaignID","outputs":[{"name":"_campaignID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributorID","type":"uint256"}],"name":"contributorAt","outputs":[{"name":"_contributor","type":"address"},{"name":"_beneficiary","type":"address"},{"name":"_amountContributed","type":"uint256"},{"name":"_refunded","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"createdAt","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"isRefunded","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"isPaidOut","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_owner","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_beneficiary","type":"address"}],"name":"contribute","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributor","type":"address"}],"name":"contributorID","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"totalContributors","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"fundingGoalOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributor","type":"address"}],"name":"isContributor","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"expiryOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"totalUserCampaigns","outputs":[{"name":"_numCampaigns","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"payout","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"configOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"hasFailed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_campaignID","type":"uint256"}],"name":"CampaignCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_contributor","type":"address"},{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":false,"name":"_amountContributed","type":"uint256"}],"name":"Contributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_beneficiary","type":"address"},{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":false,"name":"_amountPaid","type":"uint256"}],"name":"PaidOut","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_contributor","type":"address"},{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":false,"name":"_amountRefunded","type":"uint256"}],"name":"Refunded","type":"event"}],
    binary: "60606040526101a2806100126000396000f36060604052361561011c5760e060020a600035046302932f56811461011e5780630fa7b7b31461012b578063124cfc8c146101385780631c9ad79d146101435780632308a41c1461012b5780632451a8991461012b578063278ecde1146101845780632d9e84b41461011e5780633db7e3471461018957806350a1676e1461012b57806355866c8d1461012b578063569eaf611461012b5780635a5d096c1461011e57806360b0b0f0146101845780636352211e14610138578063850595c11461011e57806388e951dd1461012b578063964fad941461012b5780639eda7d231461011e578063baef73e91461012b578063dd8d1cef1461012b578063e115234314610184578063edc2ee4e14610138578063f41e34941461012b575b005b60005b6060908152602090f35b6101216004355b50600090565b610121600435610132565b60206004803580820135601f81018490049093026080908101604052606084815261011c946024939192918401918190838280828437505050505050505050565b61011c565b60006060818152608082815260a083905260c092909252f3",
    unlinked_binary: "60606040526101a2806100126000396000f36060604052361561011c5760e060020a600035046302932f56811461011e5780630fa7b7b31461012b578063124cfc8c146101385780631c9ad79d146101435780632308a41c1461012b5780632451a8991461012b578063278ecde1146101845780632d9e84b41461011e5780633db7e3471461018957806350a1676e1461012b57806355866c8d1461012b578063569eaf611461012b5780635a5d096c1461011e57806360b0b0f0146101845780636352211e14610138578063850595c11461011e57806388e951dd1461012b578063964fad941461012b5780639eda7d231461011e578063baef73e91461012b578063dd8d1cef1461012b578063e115234314610184578063edc2ee4e14610138578063f41e34941461012b575b005b60005b6060908152602090f35b6101216004355b50600090565b610121600435610132565b60206004803580820135601f81018490049093026080908101604052606084815261011c946024939192918401918190838280828437505050505050505050565b61011c565b60006060818152608082815260a083905260c092909252f3",
    address: "0x67bda418c291f30c3527a1fb0793645c6071d764",
    generated_with: "2.0.6",
    contract_name: "WeiFund"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFund error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFund error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFund error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFund error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.WeiFund = Contract;
  }

})();
