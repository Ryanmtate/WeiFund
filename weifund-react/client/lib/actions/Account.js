import { web3 } from './Providers';
import async from 'async';

function accountsRequest(){
  let Accounts = [];
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((error, accounts) => {
      if(error){reject(error)}
      async.forEach(accounts, (account, cb) => {
        web3.eth.getBalance(account, (error, balance) => {
          if(error){reject(error)}
          var Account = new Object({
            address : account,
            balance : web3.fromWei(balance, 'ether').toString()
          });
          Accounts.push(Account);
          cb();
        });
      }, (error) => {
        if(error){reject(error)}
        resolve(Accounts);
      });
    });
  });
}

export function getAccounts(){
  return {
    types : ['GET_ACCOUNTS_REQUEST', 'GET_ACCOUNTS_SUCCESS', 'GET_ACCOUNTS_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {
        accountsRequest().then((Accounts) => {
          resolve(Accounts);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  }
}

export function selectAccount(selectedAccount){
  return {
    types : ['SELECT_ACCOUNT_REQUEST', 'SELECT_ACCOUNT_SUCCESS', 'SELECT_ACCOUNT_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {
        web3.eth.defaultAccount = selectedAccount.address;
        if(!web3.eth.defaultAccount || web3.eth.defaultAccount != selectedAccount.address){
          reject("Could not set default account");
        } else {
          resolve({address : web3.eth.defaultAccount, balance : selectedAccount.balance});
        }
      });
    }
  }
}

export function getBalance(){
  return {
    types : ['BALANCE_REQUEST', 'BALANCE_SUCCESS', 'BALANCE_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {
        resolve(0);
      });
    }
  }
}
