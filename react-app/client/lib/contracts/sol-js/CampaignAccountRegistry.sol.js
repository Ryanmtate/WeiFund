// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"weifund","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"accountOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"campaignOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"toCampaign","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"accounts","outputs":[{"name":"","type":"address"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_campaignID","type":"uint256"},{"indexed":false,"name":"_account","type":"address"}],"name":"AccountRegistered","type":"event"}],
    binary: "606060405260ec8060106000396000f3606060405260e060020a60003504637cec2e15811460425780638f4e4321146053578063a36f259d146076578063ecf8c3d1146098578063f2a40db81460af575b005b60cf600054600160a060020a031681565b60cf600435600081815260016020526040902054600160a060020a03165b919050565b60e2600435600160a060020a0381166000908152600260205260409020546071565b60e260043560026020526000908152604090205481565b60cf600435600160205260009081526040902054600160a060020a031681565b600160a060020a03166060908152602090f35b6060908152602090f3",
    unlinked_binary: "606060405260ec8060106000396000f3606060405260e060020a60003504637cec2e15811460425780638f4e4321146053578063a36f259d146076578063ecf8c3d1146098578063f2a40db81460af575b005b60cf600054600160a060020a031681565b60cf600435600081815260016020526040902054600160a060020a03165b919050565b60e2600435600160a060020a0381166000908152600260205260409020546071565b60e260043560026020526000908152604090205481565b60cf600435600160205260009081526040902054600160a060020a031681565b600160a060020a03166060908152602090f35b6060908152602090f3",
    address: "",
    generated_with: "2.0.6",
    contract_name: "CampaignAccountRegistry"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("CampaignAccountRegistry error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("CampaignAccountRegistry error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("CampaignAccountRegistry error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("CampaignAccountRegistry error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.CampaignAccountRegistry = Contract;
  }

})();
