// Note:
// The following solidity files must be present in client/lib/contracts/solidity
// to be deployed by ContractManager.js

var ContractsConfig = {
  deploy : [
    'PersonaRegistry',
    'WeiAccounts',
    'WeiFund_Token_Factory',
    'WeiFund',
    'WeiHash'
  ]
};

module.exports = ContractsConfig;
