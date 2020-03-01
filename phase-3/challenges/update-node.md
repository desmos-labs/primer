# Update your validator node
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**. 
  
Additionally, you will also earn more tokens the longer you keep the node running. To know more about this please reference the [Validators program](../../validators-program/overview.md).   
:::

When a new version of Desmos is released, all validators need to update their node so that it can keep running properly. Following you will find the guide on how you can do this making sure everything is ready for when the new chain is started. 

## Update guide
In order to properly update your validator node, please refer to the [updating guide on the Desmos Docs website](https://docs.desmos.network/validators/update.html).

:::warning Required state change  
After you have exported the chain state, you are required to perform a small state change.  

The state JSON file should have the following top fields: 

```json
{
  "app_hash": "",
  "app_state": { },
  "chain_id": "morpheus-1001",
  "consensus_params": { },
  "genesis_time": "2020-01-14T00:00:00Z",
  "validators": []
}
```

In order to make sure the migration to `v0.3.0` works properly, you need to **delete** the `consensus_params` field. You should end up with a state like the following: 

```json
{
  "app_hash": "",
  "app_state": { },
  "chain_id": "morpheus-1001",
  "genesis_time": "2020-01-14T00:00:00Z",
  "validators": []
}
```

After doing so, you can proceed with the migration command.  
::: 

If you do not want to export and migrate the chain state by yourself, you can download and use the [genesis file](https://raw.githubusercontent.com/desmos-labs/morpheus/master/genesis.json) of `morpheus-3000` directly. Details of the genesis file can be found at the [Morpheus Testnet repository](https://github.com/desmos-labs/morpheus).