---
title: css 前綴詞知識
date: 2021-05-06
sidebar: 'auto'
categories:
    - f2e
tags:
    - css
    - 觀念
---

## 前言
大約在 2006 年，瀏覽器為了要實現還未標準化的 css 功能會加上特定瀏覽器前綴詞。

::: theorem By 2012, the W3C CSS Working Group

In CSS we use vendor prefixes for properties, values, @-rules that are: – vendor specific extensions (per CSS 2.1), or – experimental implementations (per CSS Snapshot 2010) (e.g. in Working Drafts)

::: right
from [guidance on the use of vendor prefixes](https://wiki.csswg.org/spec/vendor-prefixes)
:::

### 常見

| 前綴詞 | 瀏覽器 |
| -------- | -------- |
| -webkit-   | chrome、Safari、新版 Opera、iOS、base 在 WebKit 引擎的瀏覽器 |
| -moz- |Firefox|
| -o- |未以 WebKit 為引擎的 Opera|
| -ms- |Internet Explorer、Microsoft Edge|


## css 前綴工具

### 起因
由於前綴數量大幅度成長導致開發相當麻煩，
為了解決這問題，開發導入自動化的工具

### 常見工具
- [Autoprefixer](https://github.com/postcss/autoprefixer)：PostCSS 套件，使用 caniuse 數據來更新狀態
- [Emmet](https://emmet.io/)


## 前綴趨勢
![Image](https://i1.wp.com/css-tricks.com/wp-content/uploads/2021/04/prefixing-history.png?w=988&ssl=1)
_來源：[Is Vendor Prefixing Dead?](https://css-tricks.com/is-vendor-prefixing-dead/)_

### 2007 年 - 2011 年
瀏覽器前綴的數量一直在穩定增長

### 2012 年
Mozilla 在完全實現屬性的標準版本，便會刪除帶前綴的屬性
（例：-moz-border-radius 和 -moz-box-shadow)

### 2013 年
Chrome 將渲染引擎從 WebKit 換為 Blink（屬於Chromium項目的一部分），
這是刪除某些前綴功能的重大轉折點。


### 2016 年
WebKit 宣布不在使用前綴性質功能屬性

::: theorem WebKit

Over time this strategy has turned out not to work so well. Many websites came to depend on prefixed properties. They often used every prefixed variant of a feature, which makes CSS less maintainable and JavaScript programs trickier to write. Sites frequently used just the prefixed version of a feature, which made it hard for browsers to drop support for the prefixed variant when adding support for the unprefixed, standard version. Ultimately, browsers felt pressured by compatibility concerns to implement each other’s prefixes.

::: right
from [WebKit announced that it would no longer release experimental features with prefixes](https://webkit.org/blog/6131/updating-our-prefixing-policy/)
:::

## 參考
- [瀏覽器引擎前綴](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)
- [Is Vendor Prefixing Dead?](https://css-tricks.com/is-vendor-prefixing-dead/)