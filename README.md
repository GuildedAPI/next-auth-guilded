# `authlink-next-auth`

[![GitHub](https://img.shields.io/github/license/GuildedAPI/authlink-next-auth)](https://github.com/GuildedAPI/authlink-next-auth/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/next-auth-guilded?color=crimson&logo=npm)](https://www.npmjs.com/package/next-auth-guilded)
[![CI workflows](https://github.com/GuildedAPI/authlink-next-auth/actions/workflows/ci.yml/badge.svg)](https://github.com/GuildedAPI/authlink-next-auth/actions/workflows/ci.yml)

## 📥 Installation

You can install this package from [NPM](https://www.npmjs.com/package/next-auth-guilded)

-   `npm install next-auth-guilded`
-   `yarn add next-auth-guilded`

## ⚡ Usage

```typescript
import express, { Request, Response } from "express";
import multer from "multer";
import { CloudflareStorage } from "next-auth-guilded";

const app = express();
const uploader = multer({
    storage: new CloudflareStorage("YOUR_CLOUDFLARE_ACCOUNT_ID_HERE", "YOUR_CLOUDFLARE_ACCOUNT_TOKEN_HERE")
});

app.post("/", uploader.single("image"), (req: Request, _res: Response) => {
    console.log(req.file);
    // {
    //     fieldname: 'image',
    //     originalname: 'PLACEHOLDER_IMAGE_NAME.jiff',
    //     encoding: '7bit',
    //     mimetype: 'application/octet-stream',
    //     path: 'https://imagedelivery.net/PLACEHOLDER_ACCOUNT_ID/PLACEHOLDER_IMAGE_ID/public',
    //     filename: null,
    //     destination: 'PLACEHOLDER_IMAGE_ID'
    // }
});
```

## ✋ Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please ensure any and all commits pass our tests, linting, and build steps as described in the root package.json.

## ⚖️ LICENSE

Licensed under the [MIT License](https://github.com/GuildedAPI/next-auth-guilded/blob/main/LICENSE)
