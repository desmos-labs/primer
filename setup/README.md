# Desmos Primer Setup
In order to complete the primer challenges, you have to go through a setup process to install the Desmos CLI and connect it to a full node to create your Desmos account. You will find a detailed description of how this can be done below. 

## Contents
- [Requirements](#requirements)
- [Installing](#installing)
- [Updating](#updating)

## Requirements
In order to properly install `desmoscli` and `desmosd` you need to satisfy the following requirements. 

### 1. Having Go installed
As the Desmos binaries are compiled using Go, you are required to have it installed on your machine to properly build and execute them.  

To verify your Go version you can run `go version` inside a terminal window.
This should return something that looks like 

```shell
go version go1.14.3 linux/amd64
```
   
If you instead get a `go: command not found`, it means you do not have Go installed. In this case, you can get it by going through the setup process present at the following link: [Installing Go](https://golang.org/doc/install). 

### 2. Having Git installed
Git will be used to download the Desmos binaries source that will later be compiled. To verify if you have Git installed, try running `git version` inside a terminal window. 
  
If you get a `git: command not found`, it means you are missing it. In this case, you can get it here: [Git Downloads](https://git-scm.com/downloads). 
   
### 3. Having Git setup with GitHub 
This step is required to later create Pull Requests that will make sure you get the Primer rewards properly. 

If you haven't setup your Git to properly connect to your GitHub account, you can do it following this procedure: [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git).
   
   
## Installing 
Once all the requirements have been satisfied, you can setup your machine to start completing the challenges. 

:::warning Use upgrade procedure to upgrade   
The following allows you to install the Desmos binaries from scratch. If you already have either `desmosd` or `desmoscli` installed, please make sure you follow the [update guide](#updating) instead. To verify if you have either one of those commands, try running the following inside a terminal windows: 

```
desmoscli version 
desmosd version
```

If you see an output that's different from `desmosXXX: command not found`, it means you already have them installed.  
:::


### 1. Making sure Go is installed
Execute the following command: 

```bash
go version
```

The output should look like 

```
go version go1.13.5 linux/amd64
```

:::tip Go 1.13 or above is required  
To continue make sure the version or your Go executable is `1.13` or later.  
::: 

Once you have properly installed Go, we need to make sure the necessary environmental variables are properly setup. To do so, execute: 

```bash
echo 'export GOPATH="$HOME/go"' >> ~/.profile
echo 'export GOBIN="$GOPATH/bin"' >> ~/.profile
echo 'export PATH="$PATH:$GOBIN"' >> ~/.profile
source ~/.profile
```

To make sure everything is all right, try executing: 

```bash
echo $GOBIN
```

This should return something like 

```
/home/<user>/go/bin
```

If it returns an empty string, make sure you execute the above commands properly. 

### 2. Installing the Desmos CLI 
The Desmos Command Line Interface (in short, *CLI*) is the tool that allows you to perform Desmos-related operations using a terminal on your machine. It connects to a full node of the Desmos Chain allowing you to easily create, sign and send transactions to it. 

In order to install it, please execute the following commands: 

```bash
git clone https://github.com/desmos-labs/desmos.git $GOPATH/src/github.com/desmos-labs/desmos
cd $GOPATH/src/github.com/desmos-labs/desmos
git fetch --tags
git checkout tags/v0.5.1
make install
```

Once all the above commands have completed successfully, you should be able to execute the following command: 

```bash
desmoscli version --long
```

The result should be: 

```
name: Desmos
server_name: desmosd
client_name: desmoscli
version: 0.5.1
commit: fba4226f61b0a2224c013362fb41d65bd3b663a9
build_tags: netgo ledger
```

### 3. Connecting the CLI to a full node
Once the CLI has been properly installed, to allow it reading from and writing to the chain state, we need to connect it to our public full node. To do so, please run: 

```bash
desmoscli config node http://54.180.98.75:26657
desmoscli config chain-id morpheus-4001
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
{"block_id":{"hash":"6933BC56CD668CB5D2EC1286B526A0C4B589D9A92E88B9CCA126CD054E2BE143","parts":{"total":"1","hash":"64588C7720205762808AD2E17E1113F0B82271B3CC4AB04D02E4EAC25AB097E8"}},"block":{"header":{"version":{"block":"10","app":"0"},"chain_id":"morpheus-4001","height":"1","time":"2020-05-20T10:00:00Z","last_block_id":{"hash":"","parts":{"total":"0","hash":""}},"last_commit_hash":"","data_hash":"","validators_hash":"7DAEA6F3C195EC289778EC868998FB82A6CB5B6BFDAC67482AFCBD69AEA9B155","next_validators_hash":"7DAEA6F3C195EC289778EC868998FB82A6CB5B6BFDAC67482AFCBD69AEA9B155","consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F","app_hash":"","last_results_hash":"","evidence_hash":"","proposer_address":"D986DA6092404D46251F58DBC480AE05493763C5"},"data":{"txs":null},"evidence":{"evidence":null},"last_commit":{"height":"0","round":"0","block_id":{"hash":"","parts":{"total":"0","hash":""}},"signatures":null}}}
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
Congratulations, you have setup your Desmos account successfully! You can now start the [Phase 1 challenges](https://primer.desmos.network/phase-1/) and earn some Desmos Tokens!  
::: 

## Updating
If you have already installed the Desmos binaries in the past and you want to update them to the latest version, you can execute the following set of commands: 

```bash
cd $GOPATH/src/github.com/desmos-labs/desmos
git fetch --all && git checkout tags/$(git describe --tags `git rev-list --tags --max-count=1`)
make install
``` 

Upon updating, try running the following command: 

```bash
desmoscli version --long
```

This should return the current version information, which should something like be: 
```
name: Desmos
server_name: desmosd
client_name: desmoscli
version: 0.5.1
commit: fba4226f61b0a2224c013362fb41d65bd3b663a9
build_tags: netgo ledger
go: go version go1.13.5 linux/amd64
```
