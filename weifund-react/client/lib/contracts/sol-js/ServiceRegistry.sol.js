// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"_service","type":"address"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"services","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_service","type":"address"}],"name":"isService","outputs":[{"name":"","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_service","type":"address"},{"indexed":false,"name":"_sender","type":"address"}],"name":"ServiceAdded","type":"event"}],
    binary: "606060405260be8060106000396000f3606060405260e060020a600035046314afd79e8114602e5780636d966d01146054578063e9d8dbfd146074575b005b60a1600435600160a060020a03808216600090815260208190526040902054165b919050565b60a1600435600060208190529081526040902054600160a060020a031681565b600160a060020a0360043581811660009081526020819052604081205460b493168114604f57506001604f565b600160a060020a03166060908152602090f35b6060908152602090f3",
    unlinked_binary: "606060405260be8060106000396000f3606060405260e060020a600035046314afd79e8114602e5780636d966d01146054578063e9d8dbfd146074575b005b60a1600435600160a060020a03808216600090815260208190526040902054165b919050565b60a1600435600060208190529081526040902054600160a060020a031681565b600160a060020a0360043581811660009081526020819052604081205460b493168114604f57506001604f565b600160a060020a03166060908152602090f35b6060908152602090f3",
    address: "",
    generated_with: "2.0.6",
    contract_name: "ServiceRegistry"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ServiceRegistry error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("ServiceRegistry error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ServiceRegistry error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ServiceRegistry error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ServiceRegistry = Contract;
  }

})();
