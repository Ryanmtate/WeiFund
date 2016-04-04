// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hashes","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_hash","type":"bytes"}],"name":"unregister","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_hash","type":"bytes"}],"name":"register","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"hashOf","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"constant":true,"inputs":[],"name":"weifundAddr","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"unregister","outputs":[],"type":"function"},{"inputs":[{"name":"_weifundAddr","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":false,"name":"_owner","type":"address"}],"name":"HashRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":false,"name":"_owner","type":"address"}],"name":"HashDeregistered","type":"event"}],
    binary: "60606040526040516020806105bd83395060806040525160018054600160a060020a03191682178155600255506105838061003a6000396000f3606060405236156100615760e060020a6000350463501895ae811461006357806354fd4d50146100ce57806362d7216c146100d7578063765718d7146101855780637e551b751461023357806390cf9517146102a9578063a02b161e146102bb575b005b6000602081815260043582526040918290208054835160026001831615610100026000190190921691909104601f81018490048402820184019094528381526102c09390928301828280156103885780601f1061035d57610100808354040283529160200191610388565b61032e60025481565b60408051602060248035600481810135601f81018590048502860185019096528585526100619581359591946044949293909201918190840183828082843750506040805160015460e260020a631697425b0282529881018a905233600160a060020a0390811660248301529151969890911696635a5d096c96828201965060209550935090839003019050816000876161da5a03f115610002575050604051511515905061047857610002565b60408051602060248035600481810135601f81018590048502860185019096528585526100619581359591946044949293909201918190840183828082843750506040805160015460e260020a631697425b0282529881018a905233600160a060020a0390811660248301529151969890911696635a5d096c96828201965060209550935090839003019050816000876161da5a03f115610002575050604051511515905061039057610002565b6102c0600435604080516020818101835260008083528481528082528390208054845160026001831615610100026000190190921691909104601f8101849004840282018401909552848152929390918301828280156105775780601f1061054c57610100808354040283529160200191610577565b610340600154600160a060020a031681565b610061565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b505050505081565b60008281526020818152604082208351815482855293839020919360026001821615610100026000190190911604601f9081018490048301939192918601908390106103ff57805160ff19168380011785555b5061042f9291505b8082111561047457600081556001016103eb565b828001600101855582156103e3579182015b828111156103e3578251826000505591602001919060010190610411565b50506040805133600160a060020a03168152905183917f107d92b3e3a72e9681f85b90d0e8acea28199137097b741426be31d1b24d32d4919081900360200190a25050565b5090565b60008281526020818152604082208351815482855293839020919360026001821615610100026000190190911604601f9081018490048301939192918601908390106104d757805160ff19168380011785555b506105079291506103eb565b828001600101855582156104cb579182015b828111156104cb5782518260005055916020019190600101906104e9565b50506040805133600160a060020a03168152905183917f4e30db74b4c48c3f52128dab9919b2db8cb5ddb1183aa76cdf9427acbfcfb363919081900360200190a25050565b820191906000526020600020905b81548152906001019060200180831161055a57829003601f168201915b5050505050905091905056",
    unlinked_binary: "60606040526040516020806105bd83395060806040525160018054600160a060020a03191682178155600255506105838061003a6000396000f3606060405236156100615760e060020a6000350463501895ae811461006357806354fd4d50146100ce57806362d7216c146100d7578063765718d7146101855780637e551b751461023357806390cf9517146102a9578063a02b161e146102bb575b005b6000602081815260043582526040918290208054835160026001831615610100026000190190921691909104601f81018490048402820184019094528381526102c09390928301828280156103885780601f1061035d57610100808354040283529160200191610388565b61032e60025481565b60408051602060248035600481810135601f81018590048502860185019096528585526100619581359591946044949293909201918190840183828082843750506040805160015460e260020a631697425b0282529881018a905233600160a060020a0390811660248301529151969890911696635a5d096c96828201965060209550935090839003019050816000876161da5a03f115610002575050604051511515905061047857610002565b60408051602060248035600481810135601f81018590048502860185019096528585526100619581359591946044949293909201918190840183828082843750506040805160015460e260020a631697425b0282529881018a905233600160a060020a0390811660248301529151969890911696635a5d096c96828201965060209550935090839003019050816000876161da5a03f115610002575050604051511515905061039057610002565b6102c0600435604080516020818101835260008083528481528082528390208054845160026001831615610100026000190190921691909104601f8101849004840282018401909552848152929390918301828280156105775780601f1061054c57610100808354040283529160200191610577565b610340600154600160a060020a031681565b610061565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b505050505081565b60008281526020818152604082208351815482855293839020919360026001821615610100026000190190911604601f9081018490048301939192918601908390106103ff57805160ff19168380011785555b5061042f9291505b8082111561047457600081556001016103eb565b828001600101855582156103e3579182015b828111156103e3578251826000505591602001919060010190610411565b50506040805133600160a060020a03168152905183917f107d92b3e3a72e9681f85b90d0e8acea28199137097b741426be31d1b24d32d4919081900360200190a25050565b5090565b60008281526020818152604082208351815482855293839020919360026001821615610100026000190190911604601f9081018490048301939192918601908390106104d757805160ff19168380011785555b506105079291506103eb565b828001600101855582156104cb579182015b828111156104cb5782518260005055916020019190600101906104e9565b50506040805133600160a060020a03168152905183917f4e30db74b4c48c3f52128dab9919b2db8cb5ddb1183aa76cdf9427acbfcfb363919081900360200190a25050565b820191906000526020600020905b81548152906001019060200180831161055a57829003601f168201915b5050505050905091905056",
    address: "",
    generated_with: "2.0.6",
    contract_name: "WeiHash"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("WeiHash error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("WeiHash error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiHash error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiHash error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.WeiHash = Contract;
  }

})();
