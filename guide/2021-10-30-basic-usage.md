---
slug: basic-usage
title: Basic Usage
authors: [suvajit, santosh]
---

### Get Player Example ###
```ts
    // Initialize the API Client
    import { Client } from 'clashofclans.js';
    const clashClient = new Client();

    // Login with email and password
    (async function () {
	    await clashClient.login({ email: 'email', password: 'password' })
        const player = await clashClient.getPlayer('#1234')
        console.log(player)// returns player data if valid tag
    })();
```

### Get Clan Example ###
```ts
    // Initialize the API Client
    import { Client } from 'clashofclans.js';
    const clashClient = new Client();

    // Login with email and password
    (async function () {
	    await clashClient.login({ email: 'email', password: 'password' })
        const clan = await clashClient.getClan('#1234')
        console.log(clan) // returns clans data if valid tag
    })();
```
