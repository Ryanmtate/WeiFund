// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":true,"name":"_owner","type":"address"}],"name":"CampaignCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":true,"name":"_contributor","type":"address"},{"indexed":false,"name":"_amountContributed","type":"uint256"}],"name":"Contributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":true,"name":"_contributor","type":"address"},{"indexed":false,"name":"_amountRefunded","type":"uint256"}],"name":"Refunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":true,"name":"_beneficiary","type":"address"},{"indexed":false,"name":"_amountPaid","type":"uint256"}],"name":"PaidOut","type":"event"}],
    binary: "606060405260068060106000396000f3606060405200",
    unlinked_binary: "606060405260068060106000396000f3606060405200",
    address: "",
    generated_with: "2.0.6",
    contract_name: "WeiFundInterface"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFundInterface error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("WeiFundInterface error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFundInterface error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFundInterface error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.WeiFundInterface = Contract;
  }

})();
