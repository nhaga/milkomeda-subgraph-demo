# Milkomeda Subgraph Demo

Run docker containers

```shell
docker compose up
```

Create a `.env` file with:

```
PRIVATE_KEY=<PRIVATE_KEY>
```

Run script to deploy contract and deploy subgraph

```
yarn all
```

Send call transaction to be indexed:
```
yarn call
```
