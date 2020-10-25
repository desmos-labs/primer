# Desmos Validator program
The time has come. We are now inviting validators to join our public testnets.

If you feel ready to take the challenge and help us making the Desmos chain safer and more distributed, read below to know how to do it.

:::warning Validator rewards
In order to get the validator program running longer and include a larger number of validators, we will periodically revisit the number of tokens that will be rewarded upon becoming a validator of our chains. 

Also, we will reward tokens based on the activity of validators: more blocks you precommit and more reward you will get, so make sure your validator node is always active to get the larger amount of tokens possible. 
::: 

## Procedure to become a validator
The procedure to become a validator is composed of two parts: 

1. First thing first, you are required to setup a full node of your server machine. To do so, please follow the ["_Setting up a node_" guide on the Desmos documentation website](https://docs.desmos.network/testnets/join-public.html#validators). 

2. Once you have properly set up a full node, you can upgrade its functionality making it a validator node. To read how to do this, please refer to the ["_Run a validator on Desmos_" guide on the Desmos documentation website](https://docs.desmos.network/validators/setup.html). 

:::tip Testnet version and data   
Please note that new validators must rely on the latest testnet running. Such testnet's `genesis.json` file and seeds information can be found inside the [root directory of the testnet repo](https://github.com/desmos-labs/morpheus).  
::: 

## About periodic rewards
In order to prevent an over-accumulation in the hands of few validators, during each Phase of the Primer program we will review the rules and quantity of the tokens that will be allocated to validators. 

### Phase 3 
During **Phase 3** we have decided to allow for a maximum of **250 Desmos Tokens** to be distributed to each validator, based on the **number of pre-commits** their node will sign. 

Such Phase has been running for 31 days. Considering an average block time of 5.70 seconds, this means that each validator should have signed approximately 469,894 pre-commits during that period of time. To incentivize validators to run their node through the whole Phase 3, we decided to adopt a logarithmic token distribution: 

| Pre-commits signed | Tokens rewarded | 
| :----------------: | :-------------: |
| 1 | 1 |
| 4 | 2 |
| 18 | 3 |
| 78 | 7 |
| 331 | 12 |
| 1,416 | 21 |
| 6,044 | 40 |
| 25,796 | 73 |
| 110,097 | 135 |
| 469,894 | 250 |

### Phase 4
Inside Phase 4, we've decided to **increment** the reward that each validator can obtain to a **maximum of 6,000 DSM** per validator. 

During this phase, our validators have signed `563,623` blocks:  

- 380,000 of which have been part of `morpheus-4000` (last block considered: 380,000 - export height)
- 183,623 of which have been part of `morpheus-4001` (last block considered: 183,623 - 31 May 2020, 11:59:57)

Also, when deciding the blocks number that a validator should have signed in order to get the maximum reward possible we considered two particular things: 

1. Chain start vs Reward counting start.    
   In order to be ready to accept other validators, we started the chain beforehand.  
   To fix this mismatch between our validators and third party ones, as previously stated, we started counting the precommits count from the first block after 1st May 2020 00:00 UTC. 
   
2. Upgrade time.  
   Since there was an upgrade to be done in the middle of the Phase running time, validators needed to be shut off and restarted as the new chain was started. As we stated in [our Tweet](https://twitter.com/DesmosNetwork/status/1263052394134491142), we are considering this as well. 
    
For these reasons we have decided to lower the required amount of precommitted blocks by `140,263`. 

This leads to validators having signed at least `423,360` precommits to be eligible for the maximum validators program reward amount (`6,000 DSM`).

That being said, the amount of Phase 4 rewards for the validators program will be: 

| Pre-commits signed | Tokens rewarded | 
| :----------------: | :-------------: |
| 345,600 | 1,500 |
| 353,480 | 1,750 |
| 361,540 | 2,040 |
| 369,790 | 2,380 |
| 378,220 | 2,780 |
| 386,850 | 3,240 |
| 395,670 | 3,780 |
| 404,690 | 4,410 |
| 413,920 | 5,140 |
| 423,360 | 6,000 |

### Phase 5
During Phase 5, we've decided to keep the same required amount of blocks as well as the same rewards as Phase 4.

Phase 5 started on July 10 at 11:00 UTC. The first block produced after that time was at height `16,650`.  
Phase 5 ended on August 15 at 23:59 UTC. The last block produced before that date was block `629,598`.  
This means that during Phase 5 the overall number of produced blocks that should have been signed was `612,948`.  
In order to allow all validators to update properly their node, we decided to give a slack of `17,280` blocks (~ 24 hours), reducing the amount of signed blocks required to get the full reward to `595,668` blocks.

This means that the amount of Phase 4 rewards for the validators program will be: 

| Pre-commits signed | Tokens rewarded | 
| :----------------: | :-------------: |
| 476,534 | 1,500 |
| 488,497 | 1,750 |
| 500,760 | 2,040 |
| 513,331 | 2,380 |
| 526,217 | 2,780 |
| 539,427 | 3,240 |
| 552,969 | 3,780 |
| 566,851 | 4,410 |
| 581,081 | 5,140 |
| 595,668 | 6,000 |   

### Current program
After Phase 5, we decided to drop the Phase-based system. Instead, we designed a new Validation Program of which you can read more about on our [Medium blog](https://medium.com/desmosnetwork/introducing-the-new-desmos-validator-program-1782d3eaa98f). 
