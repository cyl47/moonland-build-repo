(this.webpackJsonpmoonland=this.webpackJsonpmoonland||[]).push([[0],{138:function(e,n,t){},162:function(e,n){},165:function(e,n){},183:function(e,n){},184:function(e,n){},208:function(e,n,t){},239:function(e,n,t){"use strict";t.r(n);var a=t(22),i=t.n(a),r=t(124),s=t.n(r),u=(t(138),t(1)),m=t(2),o=t(14),c=t(90),d=t.n(c),p=t.p+"static/media/background.a27c9d14.png",g=t(70),y=t.n(g),l=t(6),f=t(77),S=(t(208),t(127)),M=t(131),b=t(9),w=t(32),h=t(129),k=t.n(h),v=t(130),R=w.a.defaultOptions(),T=new l.Connection("https://api.mainnet-beta.solana.com",R.preflightCommitment),O=w.d.Keypair.fromSecretKey(new Uint8Array([38,143,146,71,206,20,46,225,144,40,175,213,247,155,144,204,61,78,3,117,208,105,222,246,213,206,98,55,152,197,92,198,9,99,203,218,227,165,61,90,169,156,168,147,65,127,79,104,98,61,25,153,28,4,56,45,78,178,123,95,191,90,170,83])),P=new w.a(T,new k.a(O),R);w.c(P);var x=new w.b({version:"0.1.0",name:"gem_farm",instructions:[{name:"initFarm",accounts:[{name:"farm",isMut:!0,isSigner:!0},{name:"farmManager",isMut:!1,isSigner:!0},{name:"farmAuthority",isMut:!0,isSigner:!1},{name:"rewardAPot",isMut:!0,isSigner:!1},{name:"rewardAMint",isMut:!1,isSigner:!1},{name:"rewardBPot",isMut:!0,isSigner:!1},{name:"rewardBMint",isMut:!1,isSigner:!1},{name:"bank",isMut:!0,isSigner:!0},{name:"gemBank",isMut:!1,isSigner:!1},{name:"payer",isMut:!0,isSigner:!0},{name:"feeAcc",isMut:!0,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpTreasury",type:"u8"},{name:"rewardTypeA",type:{defined:"RewardType"}},{name:"rewardTypeB",type:{defined:"RewardType"}},{name:"farmConfig",type:{defined:"FarmConfig"}},{name:"maxCounts",type:{option:{defined:"MaxCounts"}}},{name:"farmTreasury",type:"publicKey"}]},{name:"updateFarm",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!1,isSigner:!0}],args:[{name:"config",type:{option:{defined:"FarmConfig"}}},{name:"manager",type:{option:"publicKey"}},{name:"maxCounts",type:{option:{defined:"MaxCounts"}}}]},{name:"payoutFromTreasury",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!1,isSigner:!0},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmTreasury",isMut:!0,isSigner:!1},{name:"destination",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpTreasury",type:"u8"},{name:"lamports",type:"u64"}]},{name:"addToBankWhitelist",accounts:[{name:"farm",isMut:!1,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"bank",isMut:!0,isSigner:!1},{name:"addressToWhitelist",isMut:!1,isSigner:!1},{name:"whitelistProof",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"whitelistType",type:"u8"}]},{name:"removeFromBankWhitelist",accounts:[{name:"farm",isMut:!1,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"farmAuthority",isMut:!0,isSigner:!1},{name:"bank",isMut:!0,isSigner:!1},{name:"addressToRemove",isMut:!1,isSigner:!1},{name:"whitelistProof",isMut:!0,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpWl",type:"u8"}]},{name:"initFarmer",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!1,isSigner:!0},{name:"bank",isMut:!0,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"payer",isMut:!0,isSigner:!0},{name:"feeAcc",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"stake",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!0,isSigner:!0},{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"feeAcc",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpFarmer",type:"u8"}]},{name:"unstake",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmTreasury",isMut:!0,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!0,isSigner:!0},{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"feeAcc",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpTreasury",type:"u8"},{name:"bumpFarmer",type:"u8"},{name:"skipRewards",type:"bool"}]},{name:"claim",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!0,isSigner:!0},{name:"rewardAPot",isMut:!0,isSigner:!1},{name:"rewardAMint",isMut:!1,isSigner:!1},{name:"rewardADestination",isMut:!0,isSigner:!1},{name:"rewardBPot",isMut:!0,isSigner:!1},{name:"rewardBMint",isMut:!1,isSigner:!1},{name:"rewardBDestination",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpFarmer",type:"u8"},{name:"bumpPotA",type:"u8"},{name:"bumpPotB",type:"u8"}]},{name:"flashDeposit",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!0,isSigner:!0},{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"vaultAuthority",isMut:!1,isSigner:!1},{name:"gemBox",isMut:!0,isSigner:!1},{name:"gemDepositReceipt",isMut:!0,isSigner:!1},{name:"gemSource",isMut:!0,isSigner:!1},{name:"gemMint",isMut:!1,isSigner:!1},{name:"gemRarity",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"feeAcc",isMut:!0,isSigner:!1}],args:[{name:"bumpFarmer",type:"u8"},{name:"bumpVaultAuth",type:"u8"},{name:"bumpRarity",type:"u8"},{name:"amount",type:"u64"}]},{name:"refreshFarmer",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!1,isSigner:!1}],args:[{name:"bump",type:"u8"}]},{name:"refreshFarmerSigned",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmer",isMut:!0,isSigner:!1},{name:"identity",isMut:!1,isSigner:!0}],args:[{name:"bump",type:"u8"},{name:"reenroll",type:"bool"}]},{name:"authorizeFunder",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"funderToAuthorize",isMut:!1,isSigner:!1},{name:"authorizationProof",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"deauthorizeFunder",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"funderToDeauthorize",isMut:!1,isSigner:!1},{name:"authorizationProof",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bump",type:"u8"}]},{name:"fundReward",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"authorizationProof",isMut:!1,isSigner:!1},{name:"authorizedFunder",isMut:!0,isSigner:!0},{name:"rewardPot",isMut:!0,isSigner:!1},{name:"rewardSource",isMut:!0,isSigner:!1},{name:"rewardMint",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpProof",type:"u8"},{name:"bumpPot",type:"u8"},{name:"variableRateConfig",type:{option:{defined:"VariableRateConfig"}}},{name:"fixedRateConfig",type:{option:{defined:"FixedRateConfig"}}}]},{name:"cancelReward",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"rewardPot",isMut:!0,isSigner:!1},{name:"rewardDestination",isMut:!0,isSigner:!1},{name:"rewardMint",isMut:!1,isSigner:!1},{name:"receiver",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpPot",type:"u8"}]},{name:"lockReward",accounts:[{name:"farm",isMut:!0,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"rewardMint",isMut:!1,isSigner:!1}],args:[]},{name:"addRaritiesToBank",accounts:[{name:"farm",isMut:!1,isSigner:!1},{name:"farmManager",isMut:!0,isSigner:!0},{name:"farmAuthority",isMut:!1,isSigner:!1},{name:"bank",isMut:!1,isSigner:!1},{name:"gemBank",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"rarityConfigs",type:{vec:{defined:"RarityConfig"}}}]}],accounts:[{name:"authorizationProof",type:{kind:"struct",fields:[{name:"authorizedFunder",type:"publicKey"},{name:"farm",type:"publicKey"},{name:"reserved",type:{array:["u8",32]}}]}},{name:"farmer",type:{kind:"struct",fields:[{name:"farm",type:"publicKey"},{name:"identity",type:"publicKey"},{name:"vault",type:"publicKey"},{name:"state",type:{defined:"FarmerState"}},{name:"gemsStaked",type:"u64"},{name:"rarityPointsStaked",type:"u64"},{name:"minStakingEndsTs",type:"u64"},{name:"cooldownEndsTs",type:"u64"},{name:"rewardA",type:{defined:"FarmerReward"}},{name:"rewardB",type:{defined:"FarmerReward"}},{name:"reserved",type:{array:["u8",32]}}]}},{name:"farm",type:{kind:"struct",fields:[{name:"version",type:"u16"},{name:"farmManager",type:"publicKey"},{name:"farmTreasury",type:"publicKey"},{name:"farmAuthority",type:"publicKey"},{name:"farmAuthoritySeed",type:"publicKey"},{name:"farmAuthorityBumpSeed",type:{array:["u8",1]}},{name:"bank",type:"publicKey"},{name:"config",type:{defined:"FarmConfig"}},{name:"farmerCount",type:"u64"},{name:"stakedFarmerCount",type:"u64"},{name:"gemsStaked",type:"u64"},{name:"rarityPointsStaked",type:"u64"},{name:"authorizedFunderCount",type:"u64"},{name:"rewardA",type:{defined:"FarmReward"}},{name:"rewardB",type:{defined:"FarmReward"}},{name:"maxCounts",type:{defined:"MaxCounts"}},{name:"reserved",type:{array:["u8",32]}},{name:"reserved2",type:{array:["u8",16]}},{name:"reserved3",type:{array:["u8",4]}}]}}],types:[{name:"RarityConfig",type:{kind:"struct",fields:[{name:"mint",type:"publicKey"},{name:"rarityPoints",type:"u16"}]}},{name:"Number128",type:{kind:"struct",fields:[{name:"n",type:"u128"}]}},{name:"FarmerReward",type:{kind:"struct",fields:[{name:"paidOutReward",type:"u64"},{name:"accruedReward",type:"u64"},{name:"variableRate",type:{defined:"FarmerVariableRateReward"}},{name:"fixedRate",type:{defined:"FarmerFixedRateReward"}},{name:"reserved",type:{array:["u8",32]}}]}},{name:"FarmerVariableRateReward",type:{kind:"struct",fields:[{name:"lastRecordedAccruedRewardPerRarityPoint",type:{defined:"Number128"}},{name:"reserved",type:{array:["u8",16]}}]}},{name:"FarmerFixedRateReward",type:{kind:"struct",fields:[{name:"beginStakingTs",type:"u64"},{name:"beginScheduleTs",type:"u64"},{name:"lastUpdatedTs",type:"u64"},{name:"promisedSchedule",type:{defined:"FixedRateSchedule"}},{name:"promisedDuration",type:"u64"},{name:"reserved",type:{array:["u8",16]}}]}},{name:"FarmConfig",type:{kind:"struct",fields:[{name:"minStakingPeriodSec",type:"u64"},{name:"cooldownPeriodSec",type:"u64"},{name:"unstakingFeeLamp",type:"u64"}]}},{name:"MaxCounts",type:{kind:"struct",fields:[{name:"maxFarmers",type:"u32"},{name:"maxGems",type:"u32"},{name:"maxRarityPoints",type:"u32"}]}},{name:"FundsTracker",type:{kind:"struct",fields:[{name:"totalFunded",type:"u64"},{name:"totalRefunded",type:"u64"},{name:"totalAccruedToStakers",type:"u64"}]}},{name:"TimeTracker",type:{kind:"struct",fields:[{name:"durationSec",type:"u64"},{name:"rewardEndTs",type:"u64"},{name:"lockEndTs",type:"u64"}]}},{name:"FarmReward",type:{kind:"struct",fields:[{name:"rewardMint",type:"publicKey"},{name:"rewardPot",type:"publicKey"},{name:"rewardType",type:{defined:"RewardType"}},{name:"fixedRate",type:{defined:"FixedRateReward"}},{name:"variableRate",type:{defined:"VariableRateReward"}},{name:"funds",type:{defined:"FundsTracker"}},{name:"times",type:{defined:"TimeTracker"}},{name:"reserved",type:{array:["u8",32]}}]}},{name:"TierConfig",type:{kind:"struct",fields:[{name:"rewardRate",type:"u64"},{name:"requiredTenure",type:"u64"}]}},{name:"FixedRateSchedule",type:{kind:"struct",fields:[{name:"baseRate",type:"u64"},{name:"tier1",type:{option:{defined:"TierConfig"}}},{name:"tier2",type:{option:{defined:"TierConfig"}}},{name:"tier3",type:{option:{defined:"TierConfig"}}},{name:"denominator",type:"u64"}]}},{name:"FixedRateConfig",type:{kind:"struct",fields:[{name:"schedule",type:{defined:"FixedRateSchedule"}},{name:"amount",type:"u64"},{name:"durationSec",type:"u64"}]}},{name:"FixedRateReward",type:{kind:"struct",fields:[{name:"schedule",type:{defined:"FixedRateSchedule"}},{name:"reservedAmount",type:"u64"},{name:"reserved",type:{array:["u8",32]}}]}},{name:"VariableRateConfig",type:{kind:"struct",fields:[{name:"amount",type:"u64"},{name:"durationSec",type:"u64"}]}},{name:"VariableRateReward",type:{kind:"struct",fields:[{name:"rewardRate",type:{defined:"Number128"}},{name:"rewardLastUpdatedTs",type:"u64"},{name:"accruedRewardPerRarityPoint",type:{defined:"Number128"}},{name:"reserved",type:{array:["u8",32]}}]}},{name:"FarmerState",type:{kind:"enum",variants:[{name:"Unstaked"},{name:"Staked"},{name:"PendingCooldown"}]}},{name:"RewardType",type:{kind:"enum",variants:[{name:"Variable"},{name:"Fixed"}]}},{name:"FixedRateRewardTier",type:{kind:"enum",variants:[{name:"Base"},{name:"Tier1"},{name:"Tier2"},{name:"Tier3"}]}}]},"farmL4xeBFVXJqtfxCzU9b28QACM7E2W2ctT6epAjvE",P),C=new w.b({version:"0.1.0",name:"gem_bank",instructions:[{name:"initBank",accounts:[{name:"bank",isMut:!0,isSigner:!0},{name:"bankManager",isMut:!1,isSigner:!0},{name:"payer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"setBankFlags",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0}],args:[{name:"flags",type:"u32"}]},{name:"initVault",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"creator",isMut:!1,isSigner:!0},{name:"payer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"owner",type:"publicKey"},{name:"name",type:"string"}]},{name:"setVaultLock",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0},{name:"vault",isMut:!0,isSigner:!1}],args:[{name:"vaultLock",type:"bool"}]},{name:"updateVaultOwner",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"owner",isMut:!1,isSigner:!0}],args:[{name:"newOwner",type:"publicKey"}]},{name:"depositGem",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"owner",isMut:!0,isSigner:!0},{name:"authority",isMut:!1,isSigner:!1},{name:"gemBox",isMut:!0,isSigner:!1},{name:"gemDepositReceipt",isMut:!0,isSigner:!1},{name:"gemSource",isMut:!0,isSigner:!1},{name:"gemMint",isMut:!1,isSigner:!1},{name:"gemRarity",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpRarity",type:"u8"},{name:"amount",type:"u64"}]},{name:"withdrawGem",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"vault",isMut:!0,isSigner:!1},{name:"owner",isMut:!0,isSigner:!0},{name:"authority",isMut:!1,isSigner:!1},{name:"gemBox",isMut:!0,isSigner:!1},{name:"gemDepositReceipt",isMut:!0,isSigner:!1},{name:"gemDestination",isMut:!0,isSigner:!1},{name:"gemMint",isMut:!1,isSigner:!1},{name:"gemRarity",isMut:!1,isSigner:!1},{name:"receiver",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"associatedTokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"rent",isMut:!1,isSigner:!1}],args:[{name:"bumpAuth",type:"u8"},{name:"bumpGemBox",type:"u8"},{name:"bumpGdr",type:"u8"},{name:"bumpRarity",type:"u8"},{name:"amount",type:"u64"}]},{name:"addToWhitelist",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0},{name:"addressToWhitelist",isMut:!1,isSigner:!1},{name:"whitelistProof",isMut:!0,isSigner:!1},{name:"payer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"whitelistType",type:"u8"}]},{name:"removeFromWhitelist",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0},{name:"fundsReceiver",isMut:!0,isSigner:!1},{name:"addressToRemove",isMut:!1,isSigner:!1},{name:"whitelistProof",isMut:!0,isSigner:!1}],args:[{name:"bump",type:"u8"}]},{name:"updateBankManager",accounts:[{name:"bank",isMut:!0,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0}],args:[{name:"newManager",type:"publicKey"}]},{name:"recordRarityPoints",accounts:[{name:"bank",isMut:!1,isSigner:!1},{name:"bankManager",isMut:!1,isSigner:!0},{name:"payer",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"rarityConfigs",type:{vec:{defined:"RarityConfig"}}}]}],accounts:[{name:"bank",type:{kind:"struct",fields:[{name:"version",type:"u16"},{name:"bankManager",type:"publicKey"},{name:"flags",type:"u32"},{name:"whitelistedCreators",type:"u32"},{name:"whitelistedMints",type:"u32"},{name:"vaultCount",type:"u64"},{name:"reserved",type:{array:["u8",64]}}]}},{name:"gemDepositReceipt",type:{kind:"struct",fields:[{name:"vault",type:"publicKey"},{name:"gemBoxAddress",type:"publicKey"},{name:"gemMint",type:"publicKey"},{name:"gemCount",type:"u64"},{name:"reserved",type:{array:["u8",32]}}]}},{name:"rarity",type:{kind:"struct",fields:[{name:"points",type:"u16"}]}},{name:"vault",type:{kind:"struct",fields:[{name:"bank",type:"publicKey"},{name:"owner",type:"publicKey"},{name:"creator",type:"publicKey"},{name:"authority",type:"publicKey"},{name:"authoritySeed",type:"publicKey"},{name:"authorityBumpSeed",type:{array:["u8",1]}},{name:"locked",type:"bool"},{name:"name",type:{array:["u8",32]}},{name:"gemBoxCount",type:"u64"},{name:"gemCount",type:"u64"},{name:"rarityPoints",type:"u64"},{name:"reserved",type:{array:["u8",64]}}]}},{name:"whitelistProof",type:{kind:"struct",fields:[{name:"whitelistType",type:"u8"},{name:"whitelistedAddress",type:"publicKey"},{name:"bank",type:"publicKey"}]}}],types:[{name:"RarityConfig",type:{kind:"struct",fields:[{name:"mint",type:"publicKey"},{name:"rarityPoints",type:"u16"}]}}]},"bankHHdqMuaaST4qQk6mkzxGeKPHWmqdgor6Gs8r88m",P),A=(new w.d.PublicKey("GrZvu75br9dmYxWdHtUznsxmcnNdCd5GzY8MzCQwKSXy"),new w.d.PublicKey("2Hx6zSyTFCyC9WoknzMqrLY99q6r5EwGdnigzyeZWTnJ"),new w.d.PublicKey("3kE4UJwBc6E76CGekAPogdMeL3QV8BJvJFQUtytjtgbo"),new w.d.PublicKey("9KPRey6RRVTjFt62XwN6YQwqgMmKUHuxjF8CsnSkTSc6"),{GrZvu75br9dmYxWdHtUznsxmcnNdCd5GzY8MzCQwKSXy:"Nomaed","2Hx6zSyTFCyC9WoknzMqrLY99q6r5EwGdnigzyeZWTnJ":"Rogue","3kE4UJwBc6E76CGekAPogdMeL3QV8BJvJFQUtytjtgbo":"Techie","9KPRey6RRVTjFt62XwN6YQwqgMmKUHuxjF8CsnSkTSc6":"Corpo"});function F(e){return j.apply(this,arguments)}function j(){return(j=Object(m.a)(Object(u.a)().mark((function e(n){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(n.data.uri).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,n){return K.apply(this,arguments)}function K(){return(K=Object(m.a)(Object(u.a)().mark((function e(n,t){var a,i,r,s,m,c,d,p,g;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],i=[],t&&i.push({memcmp:{offset:8,bytes:t}}),i.push({memcmp:{offset:40,bytes:n}}),e.next=6,x.account.farmer.all(i);case 6:if((r=e.sent)&&0!=r.length){e.next=9;break}return e.abrupt("return",a);case 9:s=1,m=0;case 11:if(!(m<r.length)){e.next=29;break}return console.log(s,"poolName:",A[r[m].account.farm.toBase58()]),console.log(s,"identity:",r[m].account.identity.toBase58()),console.log(s,"farm (pool id):",r[m].account.farm.toBase58()),console.log(s,"gemsStakedCount:",r[m].account.gemsStaked.toNumber()),e.next=18,w.d.PublicKey.findProgramAddress([r[m].account.vault.toBuffer()],C.programId);case 18:return c=e.sent,d=Object(o.a)(c,2),p=d[0],d[1],e.next=24,v.Metadata.findDataByOwner(T,p.toBase58());case 24:g=e.sent,a.push.apply(a,Object(b.a)(g));case 26:m++,e.next=11;break;case 29:return e.abrupt("return",a);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N,E,J=t(41),z=window.location.href+"";0===z.indexOf("http://")&&(window.location.href=z.replace("http://","https://"));var D=new c.UnityContext({loaderUrl:"Build/unity.loader.js",dataUrl:"Build/unity.data",frameworkUrl:"Build/unity.framework.js",codeUrl:"Build/unity.wasm"}),G=Object(S.a)({apiKey:"AIzaSyDcvry5_ArzMtQPFKAqawHgnAZuBusa_Ws",authDomain:"moonland-8788b.firebaseapp.com",projectId:"moonland-8788b",storageBucket:"moonland-8788b.appspot.com",messagingSenderId:"533308612802",appId:"1:533308612802:web:2f02128e0d471808d3db5b",measurementId:"G-GQHPLJ7Y5M"});Object(M.a)(G);var I=function(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),c=s[0],g=s[1],S=Object(a.useState)(!1),M=Object(o.a)(S,2),b=M[0],w=M[1],h=Object(a.useState)(0),k=Object(o.a)(h,2),v=k[0],R=k[1],T=Object(a.useState)(""),O=Object(o.a)(T,2),P=(O[0],O[1]),x=function(){var e=Object(m.a)(Object(u.a)().mark((function e(){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("solana"in window)){e.next=8;break}return e.next=3,window.solana.connect();case 3:if(!(n=window.solana).isPhantom){e.next=6;break}return e.abrupt("return",n);case 6:e.next=9;break;case 8:window.alert("Install https://www.phantom.app/");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function C(){return A.apply(this,arguments)}function A(){return(A=Object(m.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c||(g(!0),j(),x(),G());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(){return new l.Connection("https://solana-api.projectserum.com/",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Request-Headers":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type"},mode:"no-cors"})},K=function(){var e=Object(m.a)(Object(u.a)().mark((function e(){var n,t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),n={data:{arr:[]}},e.next=5,x();case 5:return t=e.sent,e.next=8,B(t.publicKey.toString()).then((function(e){if(console.log(JSON.stringify(e)),0!==e.length)for(var t=function(t){F(e[t]).then((function(e){void 0!==E&&(console.log("2-1-> ",E),console.log("2-2-> ",JSON.stringify(E)),console.log("2-3-> ",JSON.parse(JSON.stringify(E))),n.data=JSON.parse(JSON.stringify(E))),console.log(JSON.stringify(e)),n.data.arr.push(e);var a=JSON.parse(JSON.stringify(n.data),(function(e,n){return"number"===typeof n||"boolean"===typeof n?n.toString():n}));E=a,console.log(t),D.send("_BRIDGE_","SetNFTData",JSON.stringify(E))})),w(!1)},a=0;a<e.length;a++)t(a);else console.log("No Stacked NFTs found"),w(!1)}));case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),w(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(m.a)(Object(u.a)().mark((function e(){var n,t,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=Object(f.createConnectionConfig)("https://solana-api.projectserum.com/",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Request-Headers":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type"},mode:"no-cors"}),x(),t=N,Object(f.isValidSolanaAddress)(t),e.next=7,Object(f.getParsedNftAccountsByOwner)({publicAddress:t,connection:n,serialization:!0});case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(m.a)(Object(u.a)().mark((function e(){var n,t,a,i,r,s,m;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={data:{arr:[]}},e.next=4,z();case 4:t=e.sent,a=Object.keys(t).map((function(e){return t[e]})),i=a.length,r=0;case 8:if(!(r<i)){e.next=21;break}return e.next=11,y.a.get(a[r].data.uri,{statusCode:200,headers:{},mode:"no-cors"});case 11:s=e.sent,void 0!==E&&(console.log("1-1-> ",E),console.log("1-2-> ",JSON.stringify(E)),console.log("1-3-> ",JSON.parse(JSON.stringify(E))),n.data=JSON.parse(JSON.stringify(E))),n.data.arr.push(s),m=JSON.parse(JSON.stringify(n.data),(function(e,n){return"number"===typeof n||"boolean"===typeof n?n.toString():n})),E=m,console.log(r),D.send("_BRIDGE_","SetNFTData",JSON.stringify(E));case 18:r++,e.next=8;break;case 21:return console.log("Finished Loading NFTs"),g(!1),e.abrupt("return",n.data.arr);case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0),g(!1);case 30:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){P(N)}),[]),Object(a.useEffect)((function(){P(N)}),[]),Object(a.useEffect)((function(){D.on("STAKED_NFT",(function(){"solana"in window?(window.solana.isConnected,b?D.send("_BRIDGE_","SetNFTData",JSON.stringify(E)):K()):window.alert("Install https://www.phantom.app/")}))}),[]),Object(a.useEffect)((function(){D.on("NFT",(function(){"solana"in window?window.solana.isConnected?void 0!==E?D.send("_BRIDGE_","SetNFTData",JSON.stringify(E)):x().then((function(e){N=e.publicKey.toString(),console.log(N),D.send("_BRIDGE_","SetWalletAddress",N),P(e.publicKey.toString())})).then((function(){C()})).catch((function(e){console.log(e),console.log("fail to make connection5")})):x().then((function(e){N=e.publicKey.toString(),D.send("_BRIDGE_","SetWalletAddress",e.publicKey.toString()),P(e.publicKey.toString())})).then((function(){C()})).catch((function(e){console.log(e),console.log("fail to make connection5")})):window.alert("Install https://www.phantom.app/")}))}),[]),Object(a.useEffect)((function(){D.on("Logout",(function(){window.solana.isConnected&&(window.solana.disconnect(),window.solana.on("disconnect",(function(){return console.log("disconnected!")})),D.send("SolanaWalletConnect","Disconnected"))}))}),[]),Object(a.useEffect)((function(){D.on("progress",(function(e){console.log("progress"),R(parseFloat(100*e).toFixed(2))}))}),[]),Object(a.useEffect)((function(){D.on("loaded",(function(){console.log("loaded"),i(!0)}))}),[]),Object(J.jsxs)("div",{style:{visibility:t?"hidden":"visible",backgroundImage:"url(".concat(p,")"),backgroundSize:"cover",height:"100%",width:"100%",color:"#f5f5f5",position:"absolute",left:0,top:0},children:[Object(J.jsxs)("p",{style:{visibility:t?"hidden":"visible",height:"30px",width:"100%",position:"absolute",textAlign:"center",bottom:"100px",fontSize:"2em",fontColor:"red"},children:["Loading... ",v,"%"]}),Object(J.jsx)("div",{children:Object(J.jsx)(d.a,{style:{visibility:t?"visible":"hidden",height:"100%",width:"100%",background:"grey",position:"absolute",left:0,top:0,overflow:"hidden"},unityContext:D})})]})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,240)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(J.jsx)(i.a.StrictMode,{children:Object(J.jsx)(I,{})}),document.getElementById("root")),U()}},[[239,1,2]]]);
//# sourceMappingURL=main.578c06e6.chunk.js.map