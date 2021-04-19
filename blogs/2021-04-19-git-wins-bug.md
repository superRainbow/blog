---
title: windows git 大學問
date: 2021-04-19
sidebar: 'auto'
categories:
    - tool
    - f2e
tags:
    - git
---

## 前言

Mac 永遠不知道 Windows 的痛，<br>
這句話是想送給我同事的 XD <br>
不過我一直是 Mac 派，所以幫忙查問題時才知道這些問題<br>
接下來我們來看看常見的問題吧～

## 常見問題

### 1. 資料夾名稱不能包含特殊符號

不能包含：`\/:\*?"<>|`<br>
這在 Mac 沒問題但 Windows 直接葛屁，<br>
請大家要好好命名避免 Windows 發生問題

### 2. 資料夾名稱結尾不能 . 與 空白

這在 Mac 沒問題但 Windows 直接葛屁，<br>
在 Windows 這樣命名會直接被濾掉

### 3. 文件名、路徑不能太長

Git 檔名限制為 4096 字元，在 Windows 上使用 msys 編譯 Git 時使用 Windows API 的較早版本，檔名限制為 260 字元

#### 解決

```bash
git config --system core.longpaths true
```

### 4. 資料夾大小寫

這問題其實不限於 Windows，是 git 預設是對檔名與資料夾名稱大小寫不敏感

```bash
git config --get core.ignorecase

# true
```

#### 解決

方法一：透過 git mv 來重新命名大小寫

```bash
git mv 舊檔案 新檔案

# 範例：git mv test.txt TEST.txt
```

方法二：修改設定

```bash
# 直接修改 git 不忽略大小寫
git config core.ignorecase false
```

## 總結

其實我覺得避雷最好的方式是養成好的命名習慣，<br>
畢竟如果都取一些奇怪的，當然會意外踩了一番，<br>
像是我不太取中文名稱、不太使用特殊符號...<br>
所以我本身沒踩上面的雷，不過也有可能道行不深所以沒有這些經驗(小聲說)<br>
但感謝同事讓我知道了很多我不知道的規則～<br>
假如未來有看到新雷會持續補上去～那大家下回見 👋
