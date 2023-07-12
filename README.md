# `next-auth-guilded`

[![GitHub](https://img.shields.io/github/license/GuildedAPI/next-auth-guilded)](https://github.com/GuildedAPI/next-auth-guilded/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/next-auth-guilded?color=crimson&logo=npm)](https://www.npmjs.com/package/next-auth-guilded)
[![CI workflows](https://github.com/GuildedAPI/next-auth-guilded/actions/workflows/ci.yml/badge.svg)](https://github.com/GuildedAPI/next-auth-guilded/actions/workflows/ci.yml)

## 📥 Installation

You can install this package from [NPM](https://www.npmjs.com/package/next-auth-guilded)

-   `npm install next-auth-guilded`
-   `yarn add next-auth-guilded`

## ⚡ Usage

```typescript
import GuildedProvider from "next-auth-guilded";
...
providers: [
  GuildedProvider({
    clientId: process.env.GUILDED_CLIENT_ID,
    clientSecret: process.env.GUILDED_SECRET_ID
  })
]
...
```

The provider comes with a set of default options: https://github.com/GuildedAPI/next-auth-guilded/blob/main/src/index.ts#L5

You can override any of the options to suit your own use case.

## Documentation

https://authlink.app/dev/docs


## ✋ Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please ensure any and all commits pass our linting and build steps as described in the root package.json.

## ⚖️ LICENSE

Licensed under the [MIT License](https://github.com/GuildedAPI/next-auth-guilded/blob/main/LICENSE)
