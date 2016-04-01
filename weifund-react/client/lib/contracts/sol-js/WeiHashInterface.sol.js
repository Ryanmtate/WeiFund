// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_hash","type":"bytes"}],"name":"register","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"hashOf","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"unregister","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":false,"name":"_owner","type":"address"}],"name":"HashRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":false,"name":"_owner","type":"address"}],"name":"HashDeregistered","type":"event"}],
    binary: "606060405260b58060106000396000f3606060405260e060020a6000350463765718d78114602e5780637e551b75146075578063a02b161e1460b1575b005b602060248035600481810135601f810185900490940260809081016040526060858152602c9583359593946044949293920191819083828082843750505050505050505050565b60806040526000606090815260206080908152600060a0819052819060c0908290808381848160046003f1509050509250505060405180910390f35b602c56",
    unlinked_binary: "606060405260b58060106000396000f3606060405260e060020a6000350463765718d78114602e5780637e551b75146075578063a02b161e1460b1575b005b602060248035600481810135601f810185900490940260809081016040526060858152602c9583359593946044949293920191819083828082843750505050505050505050565b60806040526000606090815260206080908152600060a0819052819060c0908290808381848160046003f1509050509250505060405180910390f35b602c56",
    address: "",
    generated_with: "2.0.6",
    contract_name: "WeiHashInterface"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("WeiHashInterface error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("WeiHashInterface error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiHashInterface error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiHashInterface error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.WeiHashInterface = Contract;
  }

})();
