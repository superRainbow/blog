---
title: 撒花～部落格增加留言功能囉
date: 2021-04-30
sidebar: 'auto'
categories:
    - other
    - f2e
tags:
    - js
    - blog
---

## 前言
::: tip
之前有想過要整合留言功能，
那時看了方式有串第三方平台與使用 github issue，
不過想說不知道文章會寫到何時～先擱著(看雖自己)，
但現在覺得好像可以加進來看看惹！感覺今年的我好像是真的想認真寫文章 XD 
接下來就來看我的步驟吧～
:::
## 選擇
基於我的部落格是將文章都放在 github 上，
最好的方式就是都統一放在 github 中，
因此我就不考慮 Disqus 或是 LeanCloud 惹，
選擇 Vssue 來實現留言

## Vssue 介紹
Vssue 是利用平台提供的 OAuth API 使得用戶可以登錄並發表評論，
以下是大致的流程： 

![Image](https://vssue.js.org/assets/img/how-vssue-works-zh.png)

_來源：[Vssue 官網](https://vssue.js.org/zh/guide/#vssue-%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84)_

## 導入
預設 vuepress-theme-reco 就有留言功能，我們只需要去 config.js 中加入設定即可

### 1. 申請 github OAuth 2
申請 [github OAuth](https://github.com/settings/developers) 來取得 clientId 與 clientSecret  

1. [Register a new OAuth application](https://github.com/settings/applications/new)
2. 將 Homepage URL 和 Authorization callback URL 設置為你的網站 URL
3. 完成後，即可獲取 Client ID 和 Secret

![Image](./img/github_oa_client_id_secret.png =500x)

### 2. config.js 設定
```javascript
vssueConfig: {
    platform: 'github',
    owner: 'superRainbow',
    repo: 'blog',
    clientId: process.env.CLIENT_ID,         // 使用環境變數去管理
    clientSecret: process.env.CLIENT_SECRET, // 使用環境變數去管理
    locale: 'en'    // 由於 vssue 的語系中文只有簡體，所以我設定為英文顯示
}
```

### 3. 將重要資訊存入本地 env 與 github settings secrets

env
```bash
CLIENT_ID=xxxx
CLIENT_SECRET=xxxx
```

github settings secrets
![](./img/github_settings_secrets.png =500x)

### 4. 調整 yaml
```yaml
- name: Install and Build 🔧
    run: |
        npm install
        npm run build
    env:
        CLIENT_ID: ${{ secrets.CLIENT_ID }}
        CLIENT_SECRET: ${{ secrets.CLIENT_SECRET }}
```

### 5. 第一次使用留言會跳出認證

![Image](./img/github_oa_1.png =500x)


### 6. 認證完就可以留言囉～
![Image](./img/github_oa_2.png =500x)


## 參考
- [vssue](https://vssue.js.org/zh/guide/)
- [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/valine.html)
- [GitHub OAuth App](https://vssue.js.org/zh/guide/github.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84-oauth-app)