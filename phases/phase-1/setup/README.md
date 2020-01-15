# Phase 1 setup
In order to complete the primer challenges, you have to go through a setup process to install the Desmos CLI and connect it to a full node to create your Desmos account. If you have already done so, you can skip this step. Otherwise, you will find a detailed description of the process below. 

## Requirements
In order to complete the challenges of the first phase, you have to satisfy the following requirements: 

1. Having Go installed.  
   If you do not have it, you can get it at the following link: [Installing Go](https://golang.org/doc/install). 

2. Having Git installed.  
   If you do not have it yet, you can get it here: [Git Downloads](https://git-scm.com/downloads). 
   
3. Having Git setup with GitHub.  
   If you have not done it yet, you can connect Git with GitHub following these procedure: [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git).
   
## Setup 
Once all the requirements have been satisfied, you can setup your machine to start completing the challenges. 

### 1. Making sure Go is installed
Execute the following command: 

```bash
go version
```

The output should look like 

```
go version go1.13.5 linux/amd64
```

Please make sure the version is `1.13` or later. 

### 2. Installing the Desmos CLI 
The Desmos Command Line Interface (in short, *CLI*) is the tool that allows you to perform Desmos-related operations using a terminal on your machine. It connects to a full node of the Desmos Chain allowing you to easily create, sign and send transactions to it. 

In order to install it, please execute the following commands: 

```bash
git clone https://github.com/desmos-labs/desmos.git $GOPATH/src/github.com/desmos-labs/desmos
cd $GOPATH/src/github.com/desmos-labs/desmos
git checkout -b phase-1 tags/v0.1.0
make install
```

Once all the above commands have completed successfully, you should be able to execute the following command: 

```bash
desmoscli version
```

The result should be: 

```
0.1.0
```

### 3. Connecting the CLI to a full node
Once the CLI has been properly installed, to allow it reading from and writing to the chain state, we need to connect it to our public full node. To do so, please run: 

```bash
desmoscli config node http://34.74.131.47:26657
desmoscli config chain-id morpheus-1000
```

The result should look something like

```
configuration saved to .desmoscli/config/config.toml
```

To make sure everything is done properly, try running: 

```bash
desmoscli query block 1
```

The output should be 

```json
{"block_meta":{"block_id":{"hash":"CC24512EEE121FA27FA44A2CC9EE3CD27A41E5FD0F018DD7E1DCC83E6C2E52F0","parts":{"total":"1","hash":"F009ABF3312DEF71052DC7348368329D131C1BC26EA566ED969E01321DB5D773"}},"header":{"version":{"block":"10","app":"0"},"chain_id":"morpheus-1000","height":"1","time":"2019-12-11T04:42:14.03384Z","num_txs":"0","total_txs":"0","last_block_id":{"hash":"","parts":{"total":"0","hash":""}},"last_commit_hash":"","data_hash":"","validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","next_validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F","app_hash":"","last_results_hash":"","evidence_hash":"","proposer_address":"6435B4DF8C20D126978E030E946096066ED46050"}},"block":{"header":{"version":{"block":"10","app":"0"},"chain_id":"morpheus-1000","height":"1","time":"2019-12-11T04:42:14.03384Z","num_txs":"0","total_txs":"0","last_block_id":{"hash":"","parts":{"total":"0","hash":""}},"last_commit_hash":"","data_hash":"","validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","next_validators_hash":"148CC373C318FC8825CA753A1228289175CC98667E1283DC949EB52B2490B34A","consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F","app_hash":"","last_results_hash":"","evidence_hash":"","proposer_address":"6435B4DF8C20D126978E030E946096066ED46050"},"data":{"txs":null},"evidence":{"evidence":null},"last_commit":{"block_id":{"hash":"","parts":{"total":"0","hash":""}},"precommits":null}}}
```

### 4. Creating your address
In order to perform operations on the Desmos Chain, you will need a Desmos address. These are unique random-generated accounts based on 24 words-long mnemonic phrases. 

In order to generate a new address, run the following commands: 

```bash
desmoscli keys add <your-name>

# E.g. desmosli keys add jack  
``` 

After typing a password and the confirmation, the result should look like the following: 

```yml
- name: jack
  type: local
  address: desmos1uht7hsl88wr002ses4qf5k24nshdyxukv3r2p8
  pubkey: desmospub1addwnpepqvwf7qcdv97prfwv6cp20c5pgre4j8ln9y0tqygj4ut36xndd9srkrxhk3e
  mnemonic: ""
  threshold: 0
  pubkeys: []


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

conduct never unit tobacco song hurt pepper silk hundred merit cheese bulb electric wink swarm auto rule afford taxi lounge local bundle trouble kitten
```

:::warning  
Make sure you have written somewhere safe the mnemonic phrase that is returned to you as this will be the only way to later recover the account if you need to do so. Loosing this phrase means loosing access to all your funds.  
:::

### 5. Receive some `upotin`
Inside our testnets the tokens will be: 

* Daric (namely `udaric`) as the staking token
* Potin (namely `upotin`) as the fee token

You need some fund to fully activate your account, visit our [faucet page](https://faucet.desmos.network) and request some `upotin` by inserting your address. If you forget the address you have just generated, you can get it by running 

```bash
desmoscli keys show <your-key-name> --address

# Example 
# desmoscli keys show jack --address 
```

This will return the associated address such as 

```
desmos1gmu4uevcvwfcuu43yp27gcv4ngxuh9sxfpv3er
```

You will receive some tokens after you put it into the faucet.

:::tip Welcome! 
Congratulations, you have setup your Desmos account successfully! You can now start the [Phase 1 challenges](../README.md#Challenges) and earn some Desmos Tokens!  
::: 
