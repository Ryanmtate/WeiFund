// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributor","type":"address"},{"name":"_beneficiary","type":"address"},{"name":"_amountContributed","type":"uint256"}],"name":"contribute","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_amountPaid","type":"uint256"}],"name":"payout","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_fundingGoal","type":"uint256"}],"name":"newCampaign","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributor","type":"address"},{"name":"_amountRefunded","type":"uint256"}],"name":"refund","outputs":[],"type":"function"}],
    binary: "6060604052603c8060106000396000f3606060405260e060020a60003504630508ed90811460385780635aa6cf971460385780636dca35da146038578063e796a6eb146038575b005b603656",
    unlinked_binary: "6060604052603c8060106000396000f3606060405260e060020a60003504630508ed90811460385780635aa6cf971460385780636dca35da146038578063e796a6eb146038575b005b603656",
    address: "0x3856408fa73db46950c2ed56eed9abe3e14bad8c",
    generated_with: "2.0.6",
    contract_name: "WeiFundConfig"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFundConfig error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("WeiFundConfig error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFundConfig error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFundConfig error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.WeiFundConfig = Contract;
  }

})();
