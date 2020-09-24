# hapi Dummy Response Server
## for Development on Docker environment

### Start the project
#### via VSCode with Docker

1. Click "docker" under "NPM SCRIPTS" on bottom left
1. Open http://127.0.0.1:3000 or http://127.0.0.1:3000/search

#### via Terminal with Docker

1. Open 'terminal' on Mac or 'Powershell' on Window
1. Run `npm docker` or `yarn docker`
1. Open http://127.0.0.1:3000 or http://127.0.0.1:3000/search


## Testing detail
### via POST
```bash
curl -d 'q=CURL' -X POST http://127.0.0.1:3000/search
```

Expected result
```bash
{"keyword":"CURL"}
```

### via GET
http://127.0.0.1:3000/search?q=query

Expected result
```JSON
{"keyword":"query"}
```

### via Postman
POST http://127.0.0.1:3000/search
-> Body 
  -> x-www-form-urlencoded
    KEY | VALUE
    --- | ---
    q   | Postman

```
{
  "keyword": "Postman"
}
```