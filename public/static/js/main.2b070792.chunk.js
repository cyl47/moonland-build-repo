(this.webpackJsonpmoonland=this.webpackJsonpmoonland||[]).push([[0],{351:function(e,n){},361:function(e,n,t){},370:function(e,n,t){},377:function(e,n){},379:function(e,n){},382:function(e,n){},392:function(e,n){},393:function(e,n){},413:function(e,n){},415:function(e,n){},422:function(e,n){},424:function(e,n){},432:function(e,n){},501:function(e,n){},502:function(e,n){},504:function(e,n){},513:function(e,n){},515:function(e,n){},525:function(e,n){},528:function(e,n){},533:function(e,n){},535:function(e,n){},546:function(e,n){},548:function(e,n){},591:function(e,n){},593:function(e,n){},600:function(e,n){},601:function(e,n){},624:function(e,n,t){"use strict";t.r(n);var a=t(10),i=t.n(a),r=t(157),s=t.n(r),u=(t(361),t(1)),m=t(5),o=t(14),c=t(214),d=t.p+"static/media/background.52ea9748.png",p=(t(370),t(340)),g=t(355),y=t(135),l=t(11),f=t(80),S=t(343),M=t.n(S),b=t(21),h=t(215),k=f.a.defaultOptions(),w=new b.Connection("https://shy-small-forest.solana-mainnet.quiknode.pro/31e327fb306016e0dd7f17612ff6828770dd4c15/",k.preflightCommitment),v=f.d.Keypair.fromSecretKey(new Uint8Array([38,143,146,71,206,20,46,225,144,40,175,213,247,155,144,204,61,78,3,117,208,105,222,246,213,206,98,55,152,197,92,198,9,99,203,218,227,165,61,90,169,156,168,147,65,127,79,104,98,61,25,153,28,4,56,45,78,178,123,95,191,90,170,83])),F=new f.a(w,new M.a(v),k);f.c(F);var O=new f.b({version:"0.1.0",name:"gem_farm",instructions:[{name:"initFarm",accounts:[{name:"farm",isMut:!0,isSigner:!0},{name:"farmManager",isMut:!1,isSigner:!0},{name:"farmAuthority",isMut:!0,isSigner:!1},{name:"rewardAPot",isMut:!0,isSigner:!1},{name:"rewardAMint",isMut:!1,isSigner:!1},{name:"rewardBPot",isMut:!0,isSigner:!1},{name:"rewardBMint",isMut:!1,isSigner:!1},{name:"bank",isMut:!0,isSigner:!0},{name:"gemBank",isMut:!1,isSigner:!1},{name:"payer",isMut:!0,isSigner:!0},{name:"feeAcc",isMut:!0,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpTreasury",type:"u8"},{name:"rewardTypeA",type:{defined:"RewardType"}},{name:"rewardTypeB",type:{defined:"RewardType"}},{name:"farmConfig",type:{defined:"FarmConfig"}},{name:"maxCounts",type:{option:{defined:"MaxCounts"}}},{name:"farmTreasury",type:"publicKey"}]},{name:"updateFarm",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!1,isSigner:!0}],args:[{name:"config",type:{option:{defined:"FarmConfig"}}},{name:"manager",type:{option:"publicKey"}},{name:"maxCounts",type:{option:{defined:"MaxCounts"}}}]},{name:"payoutFromTreasury",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!1,isSigner:!0},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmTreasury",isMut:!0,isSigner:!1},{name:"destination",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpTreasury",type:"u8"},{name:"lamports",type:"u64"}]},{name:"addToBankWhitelist",accounts:[{name:"farm",isMut:!1,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"bank",isMut:!0,isSigner:!1},{name:"addressToWhitelist",isMut:!1,isSigner:!1},{name:"whitelistProof",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"whitelistType",type:"u8"}]},{name:"removeFromBankWhitelist",accounts:[{name:"farm",isMut:!1,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"farmAuthority",isMut:!0,isSigner:!1},{name:"bank",isMut:!0,isSigner:!1},{name:"addressToRemove",isMut:!1,isSigner:!1},{name:"whitelistProof",isMut:!0,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpWl",type:"u8"}]},{name:"initFarmer",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!1,isSigner:!0},{name:"bank",isMut:!0,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"payer",isMut:!0,isSigner:!0},{name:"feeAcc",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"stake",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!0,isSigner:!0},{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"feeAcc",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpFarmer",type:"u8"}]},{name:"unstake",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmTreasury",isMut:!0,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!0,isSigner:!0},{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"feeAcc",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpTreasury",type:"u8"},{name:"bumpFarmer",type:"u8"},{name:"skipRewards",type:"bool"}]},{name:"claim",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!0,isSigner:!0},{name:"rewardAPot",isMut:!0,isSigner:!1},{name:"rewardAMint",isMut:!1,isSigner:!1},{name:"rewardADestination",isMut:!0,isSigner:!1},{name:"rewardBPot",isMut:!0,isSigner:!1},{name:"rewardBMint",isMut:!1,isSigner:!1},{name:"rewardBDestination",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpFarmer",type:"u8"},{name:"bumpPotA",type:"u8"},{name:"bumpPotB",type:"u8"}]},{name:"flashDeposit",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!0,isSigner:!0},{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"vaultAuthority",isMut:!1,isSigner:!1},{name:"gemBox",isMut:!0,isSigner:!1},{name:"gemDepositReceipt",isMut:!0,isSigner:!1},{name:"gemSource",isMut:!0,isSigner:!1},{name:"gemMint",isMut:!1,isSigner:!1},{name:"gemRarity",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"feeAcc",isMut:!0,isSigner:!1}],args:[{name:"bumpFarmer",type:"u8"},{name:"bumpVaultAuth",type:"u8"},{name:"bumpRarity",type:"u8"},{name:"amount",type:"u64"}]},{name:"refreshFarmer",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!1,isSigner:!1}],args:[{name:"bump",type:"u8"}]},{name:"refreshFarmerSigned",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!1,isSigner:!0}],args:[{name:"bump",type:"u8"},{name:"reenroll",type:"bool"}]},{name:"authorizeFunder",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"funderToAuthorize",isMut:!1,isSigner:!1},{name:"authorizationProof",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"deauthorizeFunder",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"funderToDeauthorize",isMut:!1,isSigner:!1},{name:"authorizationProof",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bump",type:"u8"}]},{name:"fundReward",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"authorizationProof",isMut:!1,isSigner:!1},{name:"authorizedFunder",isMut:!0,isSigner:!0},{name:"rewardPot",isMut:!0,isSigner:!1},{name:"rewardSource",isMut:!0,isSigner:!1},{name:"rewardMint",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpProof",type:"u8"},{name:"bumpPot",type:"u8"},{name:"variableRateConfig",type:{option:{defined:"VariableRateConfig"}}},{name:"fixedRateConfig",type:{option:{defined:"FixedRateConfig"}}}]},{name:"cancelReward",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"rewardPot",isMut:!0,isSigner:!1},{name:"rewardDestination",isMut:!0,isSigner:!1},{name:"rewardMint",isMut:!1,isSigner:!1},{name:"receiver",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpPot",type:"u8"}]},{name:"lockReward",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"rewardMint",isMut:!1,isSigner:!1}],args:[]},{name:"addRaritiesToBank",accounts:[{name:"farm",isMut:!1,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"bank",isMut:!1,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"rarityConfigs",type:{vec:{defined:"RarityConfig"}}}]}],accounts:[{name:"authorizationProof",type:{kind:"struct",fields:[{name:"authorizedFunder",type:"publicKey"},{name:"farm",type:"publicKey"},{name:"reserved",type:{array:["u8",32]}}]}},{name:"farmer",type:{kind:"struct",fields:[{name:"farm",type:"publicKey"},{name:"identity",type:"publicKey"},{name:"vault",type:"publicKey"},{name:"state",type:{defined:"FarmerState"}},{name:"gemsStaked",type:"u64"},{name:"rarityPointsStaked",type:"u64"},{name:"minStakingEndsTs",type:"u64"},{name:"cooldownEndsTs",type:"u64"},{name:"rewardA",type:{defined:"FarmerReward"}},{name:"rewardB",type:{defined:"FarmerReward"}},{name:"reserved",type:{array:["u8",32]}}]}},{name:"farm",type:{kind:"struct",fields:[{name:"version",type:"u16"},{name:"farmManager",type:"publicKey"},{name:"farmTreasury",type:"publicKey"},{name:"farmAuthority",type:"publicKey"},{name:"farmAuthoritySeed",type:"publicKey"},{name:"farmAuthorityBumpSeed",type:{array:["u8",1]}},{name:"bank",type:"publicKey"},{name:"config",type:{defined:"FarmConfig"}},{name:"farmerCount",type:"u64"},{name:"stakedFarmerCount",type:"u64"},{name:"gemsStaked",type:"u64"},{name:"rarityPointsStaked",type:"u64"},{name:"authorizedFunderCount",type:"u64"},{name:"rewardA",type:{defined:"FarmReward"}},{name:"rewardB",type:{defined:"FarmReward"}},{name:"maxCounts",type:{defined:"MaxCounts"}},{name:"reserved",type:{array:["u8",32]}},{name:"reserved2",type:{array:["u8",16]}},{name:"reserved3",type:{array:["u8",4]}}]}}],types:[{name:"RarityConfig",type:{kind:"struct",fields:[{name:"mint",type:"publicKey"},{name:"rarityPoints",type:"u16"}]}},{name:"Number128",type:{kind:"struct",fields:[{name:"n",type:"u128"}]}},{name:"FarmerReward",type:{kind:"struct",fields:[{name:"paidOutReward",type:"u64"},{name:"accruedReward",type:"u64"},{name:"variableRate",type:{defined:"FarmerVariableRateReward"}},{name:"fixedRate",type:{defined:"FarmerFixedRateReward"}},{name:"reserved",type:{array:["u8",32]}}]}},{name:"FarmerVariableRateReward",type:{kind:"struct",fields:[{name:"lastRecordedAccruedRewardPerRarityPoint",type:{defined:"Number128"}},{name:"reserved",type:{array:["u8",16]}}]}},{name:"FarmerFixedRateReward",type:{kind:"struct",fields:[{name:"beginStakingTs",type:"u64"},{name:"beginScheduleTs",type:"u64"},{name:"lastUpdatedTs",type:"u64"},{name:"promisedSchedule",type:{defined:"FixedRateSchedule"}},{name:"promisedDuration",type:"u64"},{name:"reserved",type:{array:["u8",16]}}]}},{name:"FarmConfig",type:{kind:"struct",fields:[{name:"minStakingPeriodSec",type:"u64"},{name:"cooldownPeriodSec",type:"u64"},{name:"unstakingFeeLamp",type:"u64"}]}},{name:"MaxCounts",type:{kind:"struct",fields:[{name:"maxFarmers",type:"u32"},{name:"maxGems",type:"u32"},{name:"maxRarityPoints",type:"u32"}]}},{name:"FundsTracker",type:{kind:"struct",fields:[{name:"totalFunded",type:"u64"},{name:"totalRefunded",type:"u64"},{name:"totalAccruedToStakers",type:"u64"}]}},{name:"TimeTracker",type:{kind:"struct",fields:[{name:"durationSec",type:"u64"},{name:"rewardEndTs",type:"u64"},{name:"lockEndTs",type:"u64"}]}},{name:"FarmReward",type:{kind:"struct",fields:[{name:"rewardMint",type:"publicKey"},{name:"rewardPot",type:"publicKey"},{name:"rewardType",type:{defined:"RewardType"}},{name:"fixedRate",type:{defined:"FixedRateReward"}},{name:"variableRate",type:{defined:"VariableRateReward"}},{name:"funds",type:{defined:"FundsTracker"}},{name:"times",type:{defined:"TimeTracker"}},{name:"reserved",type:{array:["u8",32]}}]}},{name:"TierConfig",type:{kind:"struct",fields:[{name:"rewardRate",type:"u64"},{name:"requiredTenure",type:"u64"}]}},{name:"FixedRateSchedule",type:{kind:"struct",fields:[{name:"baseRate",type:"u64"},{name:"tier1",type:{option:{defined:"TierConfig"}}},{name:"tier2",type:{option:{defined:"TierConfig"}}},{name:"tier3",type:{option:{defined:"TierConfig"}}},{name:"denominator",type:"u64"}]}},{name:"FixedRateConfig",type:{kind:"struct",fields:[{name:"schedule",type:{defined:"FixedRateSchedule"}},{name:"amount",type:"u64"},{name:"durationSec",type:"u64"}]}},{name:"FixedRateReward",type:{kind:"struct",fields:[{name:"schedule",type:{defined:"FixedRateSchedule"}},{name:"reservedAmount",type:"u64"},{name:"reserved",type:{array:["u8",32]}}]}},{name:"VariableRateConfig",type:{kind:"struct",fields:[{name:"amount",type:"u64"},{name:"durationSec",type:"u64"}]}},{name:"VariableRateReward",type:{kind:"struct",fields:[{name:"rewardRate",type:{defined:"Number128"}},{name:"rewardLastUpdatedTs",type:"u64"},{name:"accruedRewardPerRarityPoint",type:{defined:"Number128"}},{name:"reserved",type:{array:["u8",32]}}]}},{name:"FarmerState",type:{kind:"enum",variants:[{name:"Unstaked"},{name:"Staked"},{name:"PendingCooldown"}]}},{name:"RewardType",type:{kind:"enum",variants:[{name:"Variable"},{name:"Fixed"}]}},{name:"FixedRateRewardTier",type:{kind:"enum",variants:[{name:"Base"},{name:"Tier1"},{name:"Tier2"},{name:"Tier3"}]}}]},"farmL4xeBFVXJqtfxCzU9b28QACM7E2W2ctT6epAjvE",F),R=new f.b({version:"0.1.0",name:"gem_bank",instructions:[{name:"initBank",accounts:[{name:"bank",isMut:!0,isSigner:!0},{name:"bankManager",isMut:!1,isSigner:!0},{name:"payer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"setBankFlags",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0}],args:[{name:"flags",type:"u32"}]},{name:"initVault",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"creator",isMut:!1,isSigner:!0},{name:"payer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"owner",type:"publicKey"},{name:"name",type:"string"}]},{name:"setVaultLock",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0},{name:"vault",isMut:!0,isSigner:!1}],args:[{name:"vaultLock",type:"bool"}]},{name:"updateVaultOwner",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"owner",isMut:!1,isSigner:!0}],args:[{name:"newOwner",type:"publicKey"}]},{name:"depositGem",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"owner",isMut:!0,isSigner:!0},{name:"authority",isMut:!1,isSigner:!1},{name:"gemBox",isMut:!0,isSigner:!1},{name:"gemDepositReceipt",isMut:!0,isSigner:!1},{name:"gemSource",isMut:!0,isSigner:!1},{name:"gemMint",isMut:!1,isSigner:!1},{name:"gemRarity",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpRarity",type:"u8"},{name:"amount",type:"u64"}]},{name:"withdrawGem",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"owner",isMut:!0,isSigner:!0},{name:"authority",isMut:!1,isSigner:!1},{name:"gemBox",isMut:!0,isSigner:!1},{name:"gemDepositReceipt",isMut:!0,isSigner:!1},{name:"gemDestination",isMut:!0,isSigner:!1},{name:"gemMint",isMut:!1,isSigner:!1},{name:"gemRarity",isMut:!1,isSigner:!1},{name:"receiver",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpGemBox",type:"u8"},{name:"bumpGdr",type:"u8"},{name:"bumpRarity",type:"u8"},{name:"amount",type:"u64"}]},{name:"addToWhitelist",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0},{name:"addressToWhitelist",isMut:!1,isSigner:!1},{name:"whitelistProof",isMut:!0,isSigner:!1},{name:"payer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"whitelistType",type:"u8"}]},{name:"removeFromWhitelist",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0},{name:"fundsReceiver",isMut:!0,isSigner:!1},{name:"addressToRemove",isMut:!1,isSigner:!1},{name:"whitelistProof",isMut:!0,isSigner:!1}],args:[{name:"bump",type:"u8"}]},{name:"updateBankManager",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0}],args:[{name:"newManager",type:"publicKey"}]},{name:"recordRarityPoints",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0},{name:"payer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"rarityConfigs",type:{vec:{defined:"RarityConfig"}}}]}],accounts:[{name:"bank",type:{kind:"struct",fields:[{name:"version",type:"u16"},{name:"bankManager",type:"publicKey"},{name:"flags",type:"u32"},{name:"whitelistedCreators",type:"u32"},{name:"whitelistedMints",type:"u32"},{name:"vaultCount",type:"u64"},{name:"reserved",type:{array:["u8",64]}}]}},{name:"gemDepositReceipt",type:{kind:"struct",fields:[{name:"vault",type:"publicKey"},{name:"gemBoxAddress",type:"publicKey"},{name:"gemMint",type:"publicKey"},{name:"gemCount",type:"u64"},{name:"reserved",type:{array:["u8",32]}}]}},{name:"rarity",type:{kind:"struct",fields:[{name:"points",type:"u16"}]}},{name:"vault",type:{kind:"struct",fields:[{name:"bank",type:"publicKey"},{name:"owner",type:"publicKey"},{name:"creator",type:"publicKey"},{name:"authority",type:"publicKey"},{name:"authoritySeed",type:"publicKey"},{name:"authorityBumpSeed",type:{array:["u8",1]}},{name:"locked",type:"bool"},{name:"name",type:{array:["u8",32]}},{name:"gemBoxCount",type:"u64"},{name:"gemCount",type:"u64"},{name:"rarityPoints",type:"u64"},{name:"reserved",type:{array:["u8",64]}}]}},{name:"whitelistProof",type:{kind:"struct",fields:[{name:"whitelistType",type:"u8"},{name:"whitelistedAddress",type:"publicKey"},{name:"bank",type:"publicKey"}]}}],types:[{name:"RarityConfig",type:{kind:"struct",fields:[{name:"mint",type:"publicKey"},{name:"rarityPoints",type:"u16"}]}}]},"bankHHdqMuaaST4qQk6mkzxGeKPHWmqdgor6Gs8r88m",F);function x(e){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(Object(u.a)().mark((function e(n){var t,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,h.Metadata.findDataByOwner(w,n);case 3:return a=e.sent,t.push.apply(t,Object(l.a)(a)),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,n){return P.apply(this,arguments)}function P(){return(P=Object(m.a)(Object(u.a)().mark((function e(n,t){var a,i,r,s,m,c,d,p;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],i=[],t&&i.push({memcmp:{offset:8,bytes:t}}),i.push({memcmp:{offset:40,bytes:n}}),e.next=6,O.account.farmer.all(i);case 6:if((r=e.sent)&&0!==r.length){e.next=9;break}return e.abrupt("return",a);case 9:s=0;case 10:if(!(s<r.length)){e.next=23;break}return e.next=13,f.d.PublicKey.findProgramAddress([r[s].account.vault.toBuffer()],R.programId);case 13:return m=e.sent,c=Object(o.a)(m,1),d=c[0],e.next=18,h.Metadata.findDataByOwner(w,d.toBase58());case 18:p=e.sent,a.push.apply(a,Object(l.a)(p));case 20:s++,e.next=10;break;case 23:return e.abrupt("return",a);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A,C=t(51);t(445);var B=window.location.href+"";0===B.indexOf("http://")&&(window.location.href=B.replace("http://","https://"));var N=Object(p.a)({apiKey:"AIzaSyDcvry5_ArzMtQPFKAqawHgnAZuBusa_Ws",authDomain:"moonland-8788b.firebaseapp.com",projectId:"moonland-8788b",storageBucket:"moonland-8788b.appspot.com",messagingSenderId:"533308612802",appId:"1:533308612802:web:2f02128e0d471808d3db5b",measurementId:"G-GQHPLJ7Y5M"}),K=(Object(g.a)(N),{currentUsername:null,currentURL:null}),D=function(){var e=Object(c.useUnityContext)({loaderUrl:"Build/unity.loader.js",dataUrl:"Build/unity.data",frameworkUrl:"Build/unity.framework.js",codeUrl:"Build/unity.wasm"}),n=e.unityProvider,t=e.loadingProgression,i=e.isLoaded,r=e.sendMessage,s=e.addEventListener,p=e.removeEventListener,g=Object(a.useState)(!1),l=Object(o.a)(g,2),f=l[0],S=l[1],M=Object(a.useState)(!1),b=Object(o.a)(M,2),h=b[0],k=b[1],w=Object(a.useState)(""),v=Object(o.a)(w,2),F=v[0],O=v[1],R=Object(y.c)();function j(){return(j=Object(m.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f||(void 0===A&&(A=""),void 0!==R&&(S(!0),""!==F&&void 0!==F?N():(S(!1),console.log("Wallet not connected",F))));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(m.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h||void 0!==R&&(k(!0),""!==F&&void 0!==F?B():(k(!1),console.log("Wallet not connected",F)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=Object(m.a)(Object(u.a)().mark((function e(){var n,t,a,i,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n={data:{arr:[]}},console.log("All Staked"),void 0!==R){e.next=6;break}return k(!1),e.abrupt("return");case 6:return console.log("Starting Staked NFT Fetch"),e.next=9,T(F.toString());case 9:if(t=e.sent,console.log("Finished Staked NFT Fetch",t),0===t.length){e.next=23;break}console.log("Starting Staked NFT Metadata Fetch"),a=Object(u.a)().mark((function e(a){var i,m,o;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Starting Staked NFT Metadata Fetch for: ",a),e.next=3,fetch(t[a].data.uri).then((function(e){return console.log("Staked Data for : ",a,e),void 0!==A&&""!==A&&(n.data=JSON.parse(JSON.stringify(A))),e.ok?e.text().then((function(e){return e})):(console.log(e.text()),"")})).catch((function(e){console.log(e,a)}));case 3:""!==(s=e.sent)&&void 0!==s&&(i=JSON.parse(s),m={data:i},o=JSON.parse(JSON.stringify(m)),!1===n.data.arr.includes(o)&&(n.data.arr.push(o),A=n.data)),void 0!==A&&""!==A&&r("_BRIDGE_","SetNFTData",JSON.stringify(A));case 6:case"end":return e.stop()}}),e)})),i=0;case 15:if(!(i<t.length)){e.next=20;break}return e.delegateYield(a(i),"t0",17);case 17:i++,e.next=15;break;case 20:k(!1),e.next=25;break;case 23:console.log("No Stacked NFTs found"),k(!1);case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(0),console.log(e.t1);case 30:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(Object(u.a)().mark((function e(){var n,t,a,i,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,S(!0),n={data:{arr:[]}},console.log("All Simple"),void 0!==R){e.next=7;break}return S(!1),e.abrupt("return");case 7:return console.log("Starting NFT Fetch"),e.next=10,x(F.toString());case 10:if(t=e.sent,console.log("Finished NFT Fetch",t),0===t.length){e.next=24;break}console.log("Starting NFT Metadata Fetch"),a=Object(u.a)().mark((function e(a){var i,m,o;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Starting NFT Metadata Fetch for: ",a),e.next=3,fetch(t[a].data.uri).then((function(e){return console.log("Staked Data for : ",a,e),void 0!==A&&""!==A&&(n.data=JSON.parse(JSON.stringify(A))),e.ok?e.text().then((function(e){return e})):(console.log(e.text()),"")})).catch((function(e){console.log(e,a)}));case 3:""!==(s=e.sent)&&void 0!==s&&(i=JSON.parse(s),m={data:i},o=JSON.parse(JSON.stringify(m)),!1===n.data.arr.includes(o)&&(n.data.arr.push(o),A=n.data)),void 0!==A&&""!==A&&r("_BRIDGE_","SetNFTData",JSON.stringify(A));case 6:case"end":return e.stop()}}),e)})),i=0;case 16:if(!(i<t.length)){e.next=21;break}return e.delegateYield(a(i),"t0",18);case 18:i++,e.next=16;break;case 21:S(!1),e.next=26;break;case 24:console.log("No NFTs found"),S(!1);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(0),console.log(e.t1);case 31:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){if(i)return s("STAKED_NFT",D),function(){p("STAKED_NFT",D)}}),[i,F,h,A]),Object(a.useEffect)((function(){if(i)return s("NFT",E),function(){p("NFT",E)}}),[i,F,f,A]),Object(a.useEffect)((function(){if(i)return s("LoginDone",J),function(){p("LoginDone",J)}}),[i]),Object(a.useEffect)((function(){if(i)return console.log("Connect wallet added"),s("ConnectWallet",L),function(){p("ConnectWallet",L)}}),[i]);var D=Object(a.useCallback)((function(){h?void 0!==A&&""!==A&&r("_BRIDGE_","SetNFTData",JSON.stringify(A)):function(){P.apply(this,arguments)}()}),[F,h,A]),E=Object(a.useCallback)((function(){f?void 0!==A&&""!==A&&r("_BRIDGE_","SetNFTData",JSON.stringify(A)):function(){j.apply(this,arguments)}()}),[F,f,A]),J=Object(a.useCallback)((function(e,n){K.currentURL=n,K.currentUsername=e}),[]),L=Object(a.useCallback)((function(e){O(""),A=void 0,S(!1),k(!1);for(var n=0;n<R.wallets.length;n++)R.wallets[n].adapter.connected&&R.wallets[n].adapter.disconnect();R.wallet=R.wallets[e],R.wallet.adapter.connected?(O(R.wallet.adapter.publicKey.toString()),console.log(F)):R.wallet.adapter.connect().then((function(){O(R.wallet.adapter.publicKey.toString())}),(function(e){console.log("Connection Failed"+e),r("_BRIDGE_","OnWalletConnectFailed",JSON.stringify(e))})).catch((function(e){console.log("Connection Failed"+e),r("_BRIDGE_","OnWalletConnectFailed",JSON.stringify(e))}))}),[]);return Object(a.useEffect)((function(){var e=function(e){null!==K.currentURL&&null!==K.currentUsername&&console.log(navigator.sendBeacon(K.currentURL,JSON.stringify({username:K.currentUsername})))};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]),Object(a.useEffect)((function(){console.log(F),void 0!==F&&""!==F&&(console.log("Connection Successful | "+F),r("_BRIDGE_","OnWalletConnectSuccessful",JSON.stringify(F)))}),[F]),Object(a.useEffect)((function(){i&&"undefined"!==typeof window&&(window.unityInstance=new Object,window.unityInstance.SendMessage=r)}),[i]),Object(C.jsxs)("div",{style:{visibility:i?"hidden":"visible",backgroundImage:"url(".concat(d,")"),backgroundSize:"cover",height:"100%",width:"100%",color:"#f5f5f5",position:"absolute",left:0,top:0},children:[Object(C.jsxs)("p",{style:{visibility:i?"hidden":"visible",height:"30px",width:"100%",position:"absolute",textAlign:"center",bottom:"100px",fontSize:"2em",fontColor:"red",fontFamily:"DINPro-Bold"},children:["Loading... ",Math.round(100*t),"%"]}),Object(C.jsx)("div",{children:Object(C.jsx)(c.Unity,{style:{visibility:i?"visible":"hidden",height:"100%",width:"100%",background:"grey",position:"absolute",left:0,top:0,overflow:"hidden"},unityProvider:n})})]})};var E=function(){return Object(C.jsx)(D,{})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,647)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),i(e),r(e),s(e)}))},L=t(646),U=t(354),_=t(216),I=function(e){var n=e.children,t=L.a.Devnet,i=Object(a.useMemo)((function(){return Object(b.clusterApiUrl)(t)}),[t]),r=Object(a.useMemo)((function(){return[new _.PhantomWalletAdapter,new _.SolflareWalletAdapter]}),[]),s=Object(a.useCallback)((function(e){console.error(e)}),[]);return Object(C.jsx)(y.a,{endpoint:i,children:Object(C.jsx)(y.b,{wallets:r,onError:s,autoConnect:!1,children:Object(C.jsx)(U.a,{children:n})})})},W=function(e){var n=e.children;return Object(C.jsx)(I,{children:n})};s.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(W,{children:Object(C.jsx)(E,{})})}),document.getElementById("root")),J()}},[[624,1,2]]]);
//# sourceMappingURL=main.2b070792.chunk.js.map