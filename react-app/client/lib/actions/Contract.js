import async from 'async';
import contracts from '../contracts/compiled/contracts.json!';
import Pudding from 'ether-pudding';
import PuddingLoader from 'ether-pudding/loader';
import * as WeiFund from '../contracts/sol-js/WeiFund.sol.js';
import { web3 } from './Providers';

export function Contracts(){
  return {
    types : ['CONTRACT_PROVIDER_REQUEST', 'CONTRACT_PROVIDER_SUCCESS', 'CONTRACT_PROVIDER_FAILURE'],
    promise : () => {
      return new Promise((resolve, reject) => {

        Pudding.setWeb3(web3);
        WeiFund.load(Pudding);

        let weifund = WeiFund.at(WeiFund.default.deployed_address);

        // Temp data; for testing...
        // let campaign = {
        //   name : 'test',
        //   beneficiary : '0x34a4d6c830193f0244364a1711b182868c9feda9',
        //   fundingGoal : 50000,
        //   expiry : 12121121,
        //   config : '0xac1e83c2982987b95cabef86ee14b14a77a468fa'
        // };
        //
        // let { name, beneficiary, fundingGoal, expiry, config } = campaign;
        //
        console.log(weifund);

        // weifund.new().then((weifund) => {
        //   console.log(weifund);
        // }).catch((error) => {
        //   console.log(error);
        // });

      });
    }
  }
}
