---
title: 第一篇
date: 2021-04-06
sidebar: 'auto'
categories:
    - other
tags:
    - 閒聊
---

## 前言

工作上總是要接觸很多很雜的知識， <br>
所以一直都是用 Hackmd 與 Notion 來紀錄工作的東西， <br>
其實之前也有過幾次念頭想好好整理筆記順便經營部落格， <br>
但每次都會不了了之。

終於又開始有動力想認真寫，
希望這次可以堅持久一點不要再半途而廢惹 QQ

## 部落格

為了讓我堅持久一點，我一直在思考哪一個平台對於我來說比較方便

先講結論，我選擇使用 github-page，優點如下：

-   完美使用 Markdown 語法：讓我整理以前筆記的內容就可以簡單的複製貼上
-   結合 GitHub Actions：當我 push master 就會自動更新部落格

想想對於怕麻煩的人來說這應該是最適合的 🌝

## 技術

### 1. [VuePress](https://vuepress.vuejs.org/zh/)

使用 VuePress 靜態網站生成器來搭建 <br>
VuePress 一開始開發的動機是作為文件網站使用 <br>
不過後來也就延伸到部落格 <br>
<br>
限制：Node.js >= 8.6 <br>

### 2. [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)

為本專案所使用的 VuePress 主題，也可去 [GitHub](https://github.com/topics/vuepress-theme) 中尋找自己喜愛的主題

### 3. 執行步驟

```bash
# 1. 創建 blog 專案
mkdir blog-name && cd $_

# 2. 安裝 vuepress-theme
npm install vuepress-theme-reco --save-dev

# 3. 開始照著網站文件去編寫設定與樣式調整
```
