// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"campaignID","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"weifund","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"_weifund","type":"address"},{"name":"_campaignID","type":"uint256"}],"type":"constructor"}],
    binary: "6060604081815280610267833960a090525160805160008054600160a060020a031916909217825560015561022e90819061003990396000f36060604052361561002a5760e060020a600035046349ed2fa981146101945780637cec2e151461019d575b6101af600080546001547f2451a899000000000000000000000000000000000000000000000000000000006060908152606491909152600160a060020a0390911691632451a89991608491602091906024908290876161da5a03f11561000257505060405151905080610108575060408051600080546001547f569eaf6100000000000000000000000000000000000000000000000000000000845260048401529251600160a060020a03939093169263569eaf619260248181019360209392839003909101908290876161da5a03f1156100025750506040515190505b8061017e575060408051600080546001547ff41e349400000000000000000000000000000000000000000000000000000000845260048401529251600160a060020a03939093169263f41e34949260248181019360209392839003909101908290876161da5a03f1156100025750506040515190505b8061018a575060003411155b156101b157610002565b61022460015481565b610224600054600160a060020a031681565b005b604080516000546001547f60b0b0f0000000000000000000000000000000000000000000000000000000008352600483015233600160a060020a03908116602484015292519216916360b0b0f09134916044808301926020929190829003018185886185025a03f1156100025750505050565b6060908152602090f3",
    unlinked_binary: "6060604081815280610267833960a090525160805160008054600160a060020a031916909217825560015561022e90819061003990396000f36060604052361561002a5760e060020a600035046349ed2fa981146101945780637cec2e151461019d575b6101af600080546001547f2451a899000000000000000000000000000000000000000000000000000000006060908152606491909152600160a060020a0390911691632451a89991608491602091906024908290876161da5a03f11561000257505060405151905080610108575060408051600080546001547f569eaf6100000000000000000000000000000000000000000000000000000000845260048401529251600160a060020a03939093169263569eaf619260248181019360209392839003909101908290876161da5a03f1156100025750506040515190505b8061017e575060408051600080546001547ff41e349400000000000000000000000000000000000000000000000000000000845260048401529251600160a060020a03939093169263f41e34949260248181019360209392839003909101908290876161da5a03f1156100025750506040515190505b8061018a575060003411155b156101b157610002565b61022460015481565b610224600054600160a060020a031681565b005b604080516000546001547f60b0b0f0000000000000000000000000000000000000000000000000000000008352600483015233600160a060020a03908116602484015292519216916360b0b0f09134916044808301926020929190829003018185886185025a03f1156100025750505050565b6060908152602090f3",
    address: "0x868f98a3f9af1c99c9abc8bc966c2d6d0218d394",
    generated_with: "2.0.6",
    contract_name: "CampaignAccount"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("CampaignAccount error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("CampaignAccount error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("CampaignAccount error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("CampaignAccount error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.CampaignAccount = Contract;
  }

})();
