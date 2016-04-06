// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"totalCampaigns","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"totalRefunded","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"beneficiaryOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"operators","outputs":[{"name":"numCampaigns","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"campaigns","outputs":[{"name":"name","type":"string"},{"name":"owner","type":"address"},{"name":"beneficiary","type":"address"},{"name":"config","type":"address"},{"name":"paidOut","type":"bool"},{"name":"expiry","type":"uint256"},{"name":"fundingGoal","type":"uint256"},{"name":"amountRaised","type":"uint256"},{"name":"created","type":"uint256"},{"name":"numContributions","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_beneficiary","type":"address"},{"name":"_fundingGoal","type":"uint256"},{"name":"_expiry","type":"uint256"},{"name":"_config","type":"address"}],"name":"newCampaign","outputs":[{"name":"campaignID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"amountRaisedBy","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"isSuccess","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"numCampaigns","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributor","type":"address"},{"name":"_contributionIndex","type":"uint256"}],"name":"contributionID","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"createdAt","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"isRefunded","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"isPaidOut","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_owner","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"contributionID","type":"uint256"}],"name":"refund","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_beneficiary","type":"address"}],"name":"contribute","outputs":[{"name":"contributionID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"}],"name":"totalCampaignsBy","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_operator","type":"address"},{"name":"_campaignIndex","type":"uint256"}],"name":"operatorCampaignID","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"fundingGoalOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributor","type":"address"}],"name":"isContributor","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributor","type":"address"}],"name":"totalContributionsBy","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"expiryOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"},{"name":"_contributionID","type":"uint256"}],"name":"contributionAt","outputs":[{"name":"contributor","type":"address"},{"name":"beneficiary","type":"address"},{"name":"amountContributed","type":"uint256"},{"name":"refunded","type":"bool"},{"name":"created","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"totalContributions","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"payout","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"configOf","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_campaignID","type":"uint256"}],"name":"hasFailed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":true,"name":"_owner","type":"address"}],"name":"CampaignCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":true,"name":"_contributor","type":"address"},{"indexed":false,"name":"_amountContributed","type":"uint256"}],"name":"Contributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":true,"name":"_contributor","type":"address"},{"indexed":false,"name":"_amountRefunded","type":"uint256"}],"name":"Refunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_campaignID","type":"uint256"},{"indexed":true,"name":"_beneficiary","type":"address"},{"indexed":false,"name":"_amountPaid","type":"uint256"}],"name":"PaidOut","type":"event"}],
    binary: "60606040526001600060005055610fa28061001a6000396000f36060604052361561015e5760e060020a600035046302932f5681146101605780630fa7b7b314610176578063124cfc8c1461019557806313e7c9d8146101c1578063141961bc146101d95780631c9ad79d146102405780632308a41c146102b35780632451a899146102d25780632c0f7b6f146102ff578063473f01171461030857806350a1676e1461035557806354fd4d501461037457806355866c8d1461037d578063569eaf61146103a45780635a5d096c146103ce5780635af36e3e1461040757806360b0b0f0146104295780636352211e1461045e578063726d50ee1461048657806382afd23b146104ac5780638859c6d6146104bd578063964fad94146104f85780639eda7d2314610517578063a90d3cda1461057b578063baef73e9146105b2578063cbff69db146105d1578063d4d7012814610648578063e115234314610667578063edc2ee4e14610684578063f41e3494146106ac575b005b6001545b60408051918252519081900360200190f35b61016460043560008181526002602052604081208180610815856106b3565b6106fa600435600081815260026020819052604090912090810154600160a060020a0316905b50919050565b61016460043560036020526000908152604090205481565b61071760043560026020819052600091825260409091206004810154600382015492820154600883015460058401546006850154600186015460078701549697600160a060020a0391821697958216969181169560a060020a90910460ff1694919392918a565b6040805160206004803580820135601f810184900484028501840190955284845261016494919360249390929184019190819084018382808284375094965050933593505060443591505060643560843560006000600060006000871115806102a95750428611155b15610a4457610002565b61016460043560008181526002602052604090206006810154906101bb565b6101646004355b600081815260026020526040812060058101546006820154106101bb57600191506101bb565b61016460015481565b6101646004356024356044356000838152600260209081526040808320600160a060020a0386168452600a8101909252822080548490811015610002575082525060209020015492915050565b61016460043560008181526002602052604090206007810154906101bb565b61016460005481565b61016460043560008181526002602052604081206008810154829081141561087b57610874565b6101646004355b6000818152600260205260409020600381015460a060020a900460ff16906101bb565b61016460043560243560008281526002602052604081206001810154600160a060020a0390811690841614156104f157600191506104f1565b61015e60043560243560008281526002602052604081209080610dee856106b3565b6101646004356024356000828152600260205260408120600481015482904211806104545750346000145b15610c4257610002565b6106fa60043560008181526002602052604090206001810154600160a060020a0316906101bb565b610164600435600160a060020a03811660009081526003602052604090208054906101bb565b6101646004356000610a11826102d9565b610164600435602435600160a060020a03821660009081526003602090815260408083208484526001810190925290912054905b5092915050565b61016460043560008181526002602052604090206005810154906101bb565b6101646004356024356000828152600260209081526040808320600160a060020a0385168452600a81019092528220805460098301918491829081101561000257509052602080842054845252604082206002015482146104f157600191506104f1565b6101646004356024356000828152600260209081526040808320600160a060020a0385168452600a810190925290912054906104f1565b61016460043560008181526002602052604090206004810154906101bb565b60048035600090815260026020818152604080842060243585526009018252928390208054600182015493820154600383015492909601548551600160a060020a03928316815294909116928401929092528284019490945260ff9390931660608201526080810192909252519081900360a00190f35b61016460043560008181526002602052604090206008810154906101bb565b61015e60043560008181526002602052604090206108ba826102d9565b6106fa60043560008181526002602052604090206003810154600160a060020a0316906101bb565b6101646004355b60008181526002602052604081206004810154421180156106db575060058101546006820154105b80156106ec57506006810154600090115b156101bb57600191506101bb565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018b600160a060020a031681526020018a600160a060020a0316815260200189600160a060020a0316815260200188815260200187815260200186815260200185815260200184815260200183815260200182810382528c8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156107f15780601f106107c6576101008083540402835291602001916107f1565b820191906000526020600020905b8154815290600101906020018083116107d457829003601f168201915b50509b50505050505050505050505060405180910390f35b8193505b505050919050565b1515610824576000935061080d565b5060005b600883015481101561080957600081815260098401602052604090206003015460ff166001141561086757604060009081209082905260020154909101905b600101610828565b600192505b5050919050565b5060005b600882015481101561086f57600081815260098301602052604090206003015460ff166001146108b25760009250610874565b60010161087f565b15806108d15750600381015460a060020a900460ff165b156108db57610002565b60405160028201546006830154600160a060020a039190911691600081818185876185025a03f15050505060038101805474ff0000000000000000000000000000000000000000191660a060020a1790556040805160068301548152905133600160a060020a03169184917f452cb25970cfe5ad31830fa6a9e619730ca09a0c34ef250fac183f1f519691f69181900360200190a36000600160a060020a03168160030160009054906101000a9004600160a060020a0316600160a060020a0316141515610a0d578060030160009054906101000a9004600160a060020a0316600160a060020a0316635aa6cf978383600601600050546040518360e060020a02815260040180838152602001828152602001925050506000604051808303816000876161da5a03f115610002575050505b5050565b158015610a245750610a22826103ab565b155b8015610a365750610a34826106b3565b155b15610a3f575060015b919050565b600180548082018255600081815260026020818152604083208e51815482865294839020959a509098508895841615610100026000190190931691909104601f908101829004840193918e0190839010610ac157805160ff19168380011785555b50610af19291505b80821115610c3e5760008155600101610aad565b82800160010185558215610aa5579182015b82811115610aa5578251826000505591602001919060010190610ad3565b505050506001818101805473ffffffffffffffffffffffffffffffffffffffff199081163390811790925560028401805482168a1790556005840188905560048401879055426007850155600384810180549092168717909155600160a060020a0391909116600081815260209283526040808220805480870182558084529581019094528082208790555192939286917f633109eec20320eded000fc1e2634211aa7e92ba3f5b15faf6dcdafca05094e491a36003830154600160a060020a0316600014610c32576040805160038501547f6dca35da0000000000000000000000000000000000000000000000000000000082526004820187905233600160a060020a039081166024840152604483018b90529251921691636dca35da91606481810192600092909190829003018183876161da5a03f115610002575050505b50505095945050505050565b5090565b50600881018054600181810190925560008181526009840160209081526040808320600281018054340190819055868201805473ffffffffffffffffffffffffffffffffffffffff199081168c17909155825416339081178355426004840155600689018054909201909155600160a060020a03168452600a87019092529091208054938401808255929550909290918281838015829011610cf757818360005260206000209182019101610cf79190610aad565b50505091909060005260206000209001600050849055506040805160068401548152905133600160a060020a03169187917fb2ed2e021651f85a4754a44651fc09ac5141bc0329ce4dfe8dd712a5d04a8b399181900360200190a36003820154600160a060020a0316600014610de6576040805160038401547f0508ed900000000000000000000000000000000000000000000000000000000082526004820188905233600160a060020a03908116602484015287811660448401523460648401529251921691630508ed9091608480820192600092909190829003018183876161da5a03f115610002575050505b505092915050565b1515610df957610002565b33600160a060020a03166000908152600a8401602052604081208054600986019291908790811015610002575081526020808220870154825291909152604081206002810154909350111580610e535750600382015460ff165b15610e5d57610002565b5080546001820154600160a060020a039182169116600014610e8957506001810154600160a060020a03165b6002820154604051600160a060020a0383169160009182818181858883f15050505060038301805460ff191660011790556002830154604080519182525187917f7ca5472b7ea78c2c0141c5a12ee6d170cf4ce8ed06be3d22c8252ddfc7a6a2c4919081900360200190a36003830154600160a060020a0316600014610f9b578260030160009054906101000a9004600160a060020a0316600160a060020a031663e796a6eb868460000160009054906101000a9004600160a060020a031685600201600050546040518460e060020a0281526004018084815260200183600160a060020a0316815260200182815260200193505050506000604051808303816000876161da5a03f115610002575050505b505050505056",
    unlinked_binary: "60606040526001600060005055610fa28061001a6000396000f36060604052361561015e5760e060020a600035046302932f5681146101605780630fa7b7b314610176578063124cfc8c1461019557806313e7c9d8146101c1578063141961bc146101d95780631c9ad79d146102405780632308a41c146102b35780632451a899146102d25780632c0f7b6f146102ff578063473f01171461030857806350a1676e1461035557806354fd4d501461037457806355866c8d1461037d578063569eaf61146103a45780635a5d096c146103ce5780635af36e3e1461040757806360b0b0f0146104295780636352211e1461045e578063726d50ee1461048657806382afd23b146104ac5780638859c6d6146104bd578063964fad94146104f85780639eda7d2314610517578063a90d3cda1461057b578063baef73e9146105b2578063cbff69db146105d1578063d4d7012814610648578063e115234314610667578063edc2ee4e14610684578063f41e3494146106ac575b005b6001545b60408051918252519081900360200190f35b61016460043560008181526002602052604081208180610815856106b3565b6106fa600435600081815260026020819052604090912090810154600160a060020a0316905b50919050565b61016460043560036020526000908152604090205481565b61071760043560026020819052600091825260409091206004810154600382015492820154600883015460058401546006850154600186015460078701549697600160a060020a0391821697958216969181169560a060020a90910460ff1694919392918a565b6040805160206004803580820135601f810184900484028501840190955284845261016494919360249390929184019190819084018382808284375094965050933593505060443591505060643560843560006000600060006000871115806102a95750428611155b15610a4457610002565b61016460043560008181526002602052604090206006810154906101bb565b6101646004355b600081815260026020526040812060058101546006820154106101bb57600191506101bb565b61016460015481565b6101646004356024356044356000838152600260209081526040808320600160a060020a0386168452600a8101909252822080548490811015610002575082525060209020015492915050565b61016460043560008181526002602052604090206007810154906101bb565b61016460005481565b61016460043560008181526002602052604081206008810154829081141561087b57610874565b6101646004355b6000818152600260205260409020600381015460a060020a900460ff16906101bb565b61016460043560243560008281526002602052604081206001810154600160a060020a0390811690841614156104f157600191506104f1565b61015e60043560243560008281526002602052604081209080610dee856106b3565b6101646004356024356000828152600260205260408120600481015482904211806104545750346000145b15610c4257610002565b6106fa60043560008181526002602052604090206001810154600160a060020a0316906101bb565b610164600435600160a060020a03811660009081526003602052604090208054906101bb565b6101646004356000610a11826102d9565b610164600435602435600160a060020a03821660009081526003602090815260408083208484526001810190925290912054905b5092915050565b61016460043560008181526002602052604090206005810154906101bb565b6101646004356024356000828152600260209081526040808320600160a060020a0385168452600a81019092528220805460098301918491829081101561000257509052602080842054845252604082206002015482146104f157600191506104f1565b6101646004356024356000828152600260209081526040808320600160a060020a0385168452600a810190925290912054906104f1565b61016460043560008181526002602052604090206004810154906101bb565b60048035600090815260026020818152604080842060243585526009018252928390208054600182015493820154600383015492909601548551600160a060020a03928316815294909116928401929092528284019490945260ff9390931660608201526080810192909252519081900360a00190f35b61016460043560008181526002602052604090206008810154906101bb565b61015e60043560008181526002602052604090206108ba826102d9565b6106fa60043560008181526002602052604090206003810154600160a060020a0316906101bb565b6101646004355b60008181526002602052604081206004810154421180156106db575060058101546006820154105b80156106ec57506006810154600090115b156101bb57600191506101bb565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018b600160a060020a031681526020018a600160a060020a0316815260200189600160a060020a0316815260200188815260200187815260200186815260200185815260200184815260200183815260200182810382528c8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156107f15780601f106107c6576101008083540402835291602001916107f1565b820191906000526020600020905b8154815290600101906020018083116107d457829003601f168201915b50509b50505050505050505050505060405180910390f35b8193505b505050919050565b1515610824576000935061080d565b5060005b600883015481101561080957600081815260098401602052604090206003015460ff166001141561086757604060009081209082905260020154909101905b600101610828565b600192505b5050919050565b5060005b600882015481101561086f57600081815260098301602052604090206003015460ff166001146108b25760009250610874565b60010161087f565b15806108d15750600381015460a060020a900460ff165b156108db57610002565b60405160028201546006830154600160a060020a039190911691600081818185876185025a03f15050505060038101805474ff0000000000000000000000000000000000000000191660a060020a1790556040805160068301548152905133600160a060020a03169184917f452cb25970cfe5ad31830fa6a9e619730ca09a0c34ef250fac183f1f519691f69181900360200190a36000600160a060020a03168160030160009054906101000a9004600160a060020a0316600160a060020a0316141515610a0d578060030160009054906101000a9004600160a060020a0316600160a060020a0316635aa6cf978383600601600050546040518360e060020a02815260040180838152602001828152602001925050506000604051808303816000876161da5a03f115610002575050505b5050565b158015610a245750610a22826103ab565b155b8015610a365750610a34826106b3565b155b15610a3f575060015b919050565b600180548082018255600081815260026020818152604083208e51815482865294839020959a509098508895841615610100026000190190931691909104601f908101829004840193918e0190839010610ac157805160ff19168380011785555b50610af19291505b80821115610c3e5760008155600101610aad565b82800160010185558215610aa5579182015b82811115610aa5578251826000505591602001919060010190610ad3565b505050506001818101805473ffffffffffffffffffffffffffffffffffffffff199081163390811790925560028401805482168a1790556005840188905560048401879055426007850155600384810180549092168717909155600160a060020a0391909116600081815260209283526040808220805480870182558084529581019094528082208790555192939286917f633109eec20320eded000fc1e2634211aa7e92ba3f5b15faf6dcdafca05094e491a36003830154600160a060020a0316600014610c32576040805160038501547f6dca35da0000000000000000000000000000000000000000000000000000000082526004820187905233600160a060020a039081166024840152604483018b90529251921691636dca35da91606481810192600092909190829003018183876161da5a03f115610002575050505b50505095945050505050565b5090565b50600881018054600181810190925560008181526009840160209081526040808320600281018054340190819055868201805473ffffffffffffffffffffffffffffffffffffffff199081168c17909155825416339081178355426004840155600689018054909201909155600160a060020a03168452600a87019092529091208054938401808255929550909290918281838015829011610cf757818360005260206000209182019101610cf79190610aad565b50505091909060005260206000209001600050849055506040805160068401548152905133600160a060020a03169187917fb2ed2e021651f85a4754a44651fc09ac5141bc0329ce4dfe8dd712a5d04a8b399181900360200190a36003820154600160a060020a0316600014610de6576040805160038401547f0508ed900000000000000000000000000000000000000000000000000000000082526004820188905233600160a060020a03908116602484015287811660448401523460648401529251921691630508ed9091608480820192600092909190829003018183876161da5a03f115610002575050505b505092915050565b1515610df957610002565b33600160a060020a03166000908152600a8401602052604081208054600986019291908790811015610002575081526020808220870154825291909152604081206002810154909350111580610e535750600382015460ff165b15610e5d57610002565b5080546001820154600160a060020a039182169116600014610e8957506001810154600160a060020a03165b6002820154604051600160a060020a0383169160009182818181858883f15050505060038301805460ff191660011790556002830154604080519182525187917f7ca5472b7ea78c2c0141c5a12ee6d170cf4ce8ed06be3d22c8252ddfc7a6a2c4919081900360200190a36003830154600160a060020a0316600014610f9b578260030160009054906101000a9004600160a060020a0316600160a060020a031663e796a6eb868460000160009054906101000a9004600160a060020a031685600201600050546040518460e060020a0281526004018084815260200183600160a060020a0316815260200182815260200193505050506000604051808303816000876161da5a03f115610002575050505b505050505056",
    address: "",
    generated_with: "2.0.6",
    contract_name: "WeiFund"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFund error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("WeiFund error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFund error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("WeiFund error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.WeiFund = Contract;
  }

})();