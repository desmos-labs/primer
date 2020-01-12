# Phase 2 
The second phase of the Primer program is based on the `morpheus-1001` testnet. In this phase, you will learn how to become a validator and use reactions (:tada:) which have replaced the like action from Phase 1. 

## Table of Contents
- [Setup](#setup)
- [Challenges](#challenges)

## Setup
### First time
If you are a first time user that wants to join the Primer program now, make sure you follow the [Phase 1 setup guide](../phase-1/setup/README.md). 

Upon following all the setup, you should be able to execute the following command: 

```shel
desmosd version
```

This should return you the current version, which should start with `0.2.0`. 

### Updating from Phase 1
If you have already taken part to the Phase 1 of the Primer program, you can update your already installed executables by executing: 

```bash
cd $GOPATH/src/github.com/desmos-labs/desmos
git fetch --all && git checkout master
make install
``` 

Upon updating, try running the following command: 

```bash
desmoscli version
```

This should return the current version of the executable, which should start with `0.2.0`.

## Challenges
Phase 2 challenges include:

1. [Adding a reaction to a post (30 Desmos Tokens)](challenges/add-reaction.md)
2. [Becoming a validator (300 Desmos Tokens upon first block proposal)](challenges/become-validator.md)
