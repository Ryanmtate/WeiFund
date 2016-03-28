// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"ipfsHash","type":"bytes"}],"name":"setPersonaAttributes","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"previousPublishedVersion","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ipfsAttributeLookup","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"constant":true,"inputs":[{"name":"personaAddress","type":"address"}],"name":"getPersonaAttributes","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"inputs":[{"name":"_previousPublishedVersion","type":"address"}],"type":"constructor"}],
    binary: "6060604052604051602080610354833950608060405251600160008190558054600160a060020a03191682179055506103188061003c6000396000f3606060405260e060020a60003504631b6caad9811461004757806354fd4d50146101005780636104464f14610109578063884179d81461011b57806397df212b14610183575b005b60206004803580820135601f8101849004909302608090810160405260608481526100459460249391929184019181908382808284375094965050505050505033600160a060020a03166000908152600260208181526040832084518154828652948390209194600181161561010002600019011693909304601f90810192909204810192916080908390106102a857805160ff19168380011785555b506102d89291505b808211156102dd57600081556001016100ec565b6101fd60005481565b6101fd600154600160a060020a031681565b6102076004356002602081815260009283526040928390208054600181161561010002600019011692909204601f81018290049091026080908101909352606081815292828280156102a05780601f10610275576101008083540402835291602001916102a0565b61020760043560006060818152600160a060020a038316825260026020818152604093849020805460a0601f6000196101006001851615020190921694909404908101839004909202830190945260808181529293918282801561030c5780601f106102e15761010080835404028352916020019161030c565b6060908152602090f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102675780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b820191906000526020600020905b81548152906001019060200180831161028357829003601f168201915b505050505081565b828001600101855582156100e4579182015b828111156100e45782518260005055916020019190600101906102ba565b505050565b5090565b820191906000526020600020905b8154815290600101906020018083116102ef57829003601f168201915b5050505050905091905056",
    unlinked_binary: "6060604052604051602080610354833950608060405251600160008190558054600160a060020a03191682179055506103188061003c6000396000f3606060405260e060020a60003504631b6caad9811461004757806354fd4d50146101005780636104464f14610109578063884179d81461011b57806397df212b14610183575b005b60206004803580820135601f8101849004909302608090810160405260608481526100459460249391929184019181908382808284375094965050505050505033600160a060020a03166000908152600260208181526040832084518154828652948390209194600181161561010002600019011693909304601f90810192909204810192916080908390106102a857805160ff19168380011785555b506102d89291505b808211156102dd57600081556001016100ec565b6101fd60005481565b6101fd600154600160a060020a031681565b6102076004356002602081815260009283526040928390208054600181161561010002600019011692909204601f81018290049091026080908101909352606081815292828280156102a05780601f10610275576101008083540402835291602001916102a0565b61020760043560006060818152600160a060020a038316825260026020818152604093849020805460a0601f6000196101006001851615020190921694909404908101839004909202830190945260808181529293918282801561030c5780601f106102e15761010080835404028352916020019161030c565b6060908152602090f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102675780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b820191906000526020600020905b81548152906001019060200180831161028357829003601f168201915b505050505081565b828001600101855582156100e4579182015b828111156100e45782518260005055916020019190600101906102ba565b505050565b5090565b820191906000526020600020905b8154815290600101906020018083116102ef57829003601f168201915b5050505050905091905056",
    address: "0x09f026a490e2a6083662c44801ffd40e67aa6dba",
    generated_with: "2.0.6",
    contract_name: "PersonaRegistry"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("PersonaRegistry error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("PersonaRegistry error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("PersonaRegistry error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("PersonaRegistry error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.PersonaRegistry = Contract;
  }

})();
