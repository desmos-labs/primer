# Phase 2 
The second phase of the Primer program is based on the `morpheus-1001` testnet. In this phase, you will learn how to become a validator and use reactions (:tada:) which have replaced the like action from Phase 1. 

## Table of Contents
- [Setup](#setup)
- [Challenges](#challenges)

## Setup
### First time
If you are a first time user that wants to join the Primer program now, make sure you follow the [Phase 1 setup guide](../phase-1/setup/README.md). 

Upon following all the setup, you should be able to execute the following command: 

```bash
desmosd version
```

This should return you the current version, which should start with `0.2.0`. 

### Updating from Phase 1
If you have already taken part to the Phase 1 of the Primer program, you can update your already installed executables by executing: 

```bash
cd $GOPATH/src/github.com/desmos-labs/desmos
git fetch --all && git checkout tags/v0.2.0
make install
``` 

Upon updating, try running the following command: 

```bash
desmoscli version --long
```

This should return the current version information, which should be: 
```
name: Desmos
server_name: desmosd
client_name: desmoscli
version: 0.2.0-3-gf25f7dd
commit: f25f7ddd1c9644d1cb4cc300c56ec93b8e574b4c
build_tags: netgo ledger
go: go version go1.13.5 linux/amd64
```

## Challenges
Phase 2 challenges include:

1. [Adding a reaction to a post (30 Desmos Tokens)](challenges/add-reaction.md)
2. [Becoming a validator (300 Desmos Tokens upon first block proposal)](challenges/become-validator.md)
