---
title: .git 資料夾內的秘密 - 2
date: 2021-04-17
sidebar: 'auto'
categories:
    - tool
    - f2e
tags:
    - git
---

## 前言

銜接上回，我們已經將新增的檔案使用 `git add` 加入版控後，<br>
現在要來提交這次版本是什麼並觀察一下 .git 又有什麼變化呢～

## 實作：git commit

### 下註解這次版本

```bash
> git commit -m 'add README.md'

[master (root-commit) 0728ced] add README.md
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```

### 專案狀態

沒有其他檔案變更了

```bash
> git status

On branch master
nothing to commit, working tree clean
```

### .git 的變化

發現多了不少子目錄和檔案：COMMIT_EDITMSG、logs、objects、refs

```bash
> tree .git

# 只顯示有變化的內容
.git
├── COMMIT_EDITMSG
├── HEAD
├── index
├── logs
│   ├── HEAD
│   └── refs
│       └── heads
│           └── master
├── objects
│   ├── 07
│   │   └── 28cedea9d965a170a365f17fffbd31d421f698
│   ├── 36
│   │   └── d493cb7b3e48ce77c440b2460b1978a6539063
│   ├── ad
│   │   └── 6bc9244802a60f632422717a95f1cb0931fa5a
│   ├── info
│   └── pack
└── refs
    ├── heads
    │   └── master
    └── tags
```

### 讓我們查看 .git/objects 新增的內容

```bash
# Git Commit 內容
> git cat-file -p 0728cedea9d965a170a365f17fffbd31d421f698
tree 36d493cb7b3e48ce77c440b2460b1978a6539063
author rainbow <g901612002@hotmail.com> 1618556944 +0800
committer rainbow <g901612002@hotmail.com> 1618556944 +0800
add README.md

# git tree 內容
> git cat-file -p 36d493cb7b3e48ce77c440b2460b1978a6539063
100644 blob ad6bc9244802a60f632422717a95f1cb0931fa5a	README.md

# git blob 內容
> git cat-file ad6bc9244802a60f632422717a95f1cb0931fa5a -p
add README.md
```

### 當我在新增 commit 時並查看 .git

```bash
> echo "test" > test.txt
> git commit -m "Add test.txt" -a
> tree .git

.git/
├── objects
│   ├── 07
│   │   └── 28cedea9d965a170a365f17fffbd31d421f698
│   ├── 11
│   │   └── db16683934ba1c69d50461208a82ef1ed2aa77
│   ├── 36
│   │   └── d493cb7b3e48ce77c440b2460b1978a6539063
│   ├── 3b
│   │   └── d5b3a4ba4cf5c951e7882a4312d279572e696e
│   ├── 9d
│   │   └── aeafb9864cf43055ae93beb0afd6c7d144bfa4
│   ├── ad
│   │   └── 6bc9244802a60f632422717a95f1cb0931fa5a
│   ├── info
│   └── pack
└── refs
    ├── heads
    │   └── master
    └── tags
```

### 查看新增的 object

```bash
# git tree 內容
> git cat-file -p 11db16683934ba1c69d50461208a82ef1ed2aa77
100644 blob ad6bc9244802a60f632422717a95f1cb0931fa5a	README.md
100644 blob 9daeafb9864cf43055ae93beb0afd6c7d144bfa4	test.txt

# Git Commit 內容
> git cat-file -p 3bd5b3a4ba4cf5c951e7882a4312d279572e696e
tree 11db16683934ba1c69d50461208a82ef1ed2aa77
parent 0728cedea9d965a170a365f17fffbd31d421f698
author rainbow <g901612002@hotmail.com> 1618656981 +0800
committer rainbow <g901612002@hotmail.com> 1618656981 +0800

Add test.txt

# git blob 內容
> git cat-file -p 9daeafb9864cf43055ae93beb0afd6c7d144bfa4
test
```

## 總結

### 每個 commit

都會產生這三個檔案，分別是： Commit、tree、blob

### Commit Object

1. tree
    - 紀錄此版本的專案根目錄的檔案與目錄
    - 檔案透過 Blob 物件儲存起來，並且附上檔名與 SHA-1 值參考位址
2. parent
    - 指向前一個 Commit Object，透過這樣的方式最後變成不斷向前參考的鏈關係鏈
