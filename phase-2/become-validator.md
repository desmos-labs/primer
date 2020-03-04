# Become a testnet validator
:::tip Note  
You will earn **300 Desmos Tokens** upon completion of this challenge. 
  
Please note that in order to prevent scams, you will receive the reward just after your validator has **successfully proposed a block**.  
:::

The time has come. We are now inviting validators to join our first public testnet named `morpheus-1001`.

If you feel ready to take the challenge and help us making the Desmos chain safer and more distributed, read below to know how to do it. 

## Procedure to become a validator
The procedure to become a validator is composed of two parts: 

1. Firstly, you are required to setup a full node of your server machine. To do so, please follow the ["_Setting up a node_" guide on the Desmos documentation website](https://docs.desmos.network/testnets/join-public.html#validators). 

2. Once you have properly set up a full node, you can upgrade its functionality making it a validator node. To read how to do this, please refer to the ["_Run a validator on Desmos_" guide on the Desmos documentation website](https://docs.desmos.network/validators/setup.html). 

:::tip Testnet version and data   
Please note that Phase 2 validators must rely on the `morpheus-1001` testnet. Such testnet's `genesis.json` file and seeds information can be found inside the [root directory of the testnet repo](https://github.com/desmos-labs/morpheus).  
::: 

## Getting the reward 
After you've become a validator, to make sure you receive your reward please following this procedure: 

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```bash
   git clone https://github.com/<your-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```
   
3. Make sure your fork is up to date with the Primer repository:  
   ```bash
   git remote add upstream https://github.com/desmos-labs/primer.git
   git fetch upstream
   git rebase upstream/master
   ```

4. Create a file named after your GitHub username containing the validator creation transaction hash:  
   ```bash
   echo "<tx-hash>" >> ./phases/phase-2/challenges/validators/<your-github-name>
   
   # Example
   # echo "BFA3D9E508F1978135CB99AD07B975AB475AF8DD796C22D1B0984863B0ADACA9" >> ./phases/phase-2/challenges/validators/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know to to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
