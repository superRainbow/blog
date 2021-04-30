---
title: 實用：Js New Operators
date: 2021-04-29
sidebar: 'auto'
categories:
    - js
    - f2e
tags:
    - js
---

## 前言
最近看了一些文章介紹了新 Js New Operators <br>
目前主流瀏覽器支援度已蠻成熟 <br>
覺得必須好好整理一下筆記，供自己未來參考 <br>


## 可選鏈：(?.)

### 情境
我們在開發時，常常會遇到要取較深的 object 內容，<br>
要完整的判斷父層是否存在，相當麻煩 <br>
在新的 Optional 中 **Optional Chaining (?.)** 解決了我們的困惱，使用 `?.` 來取代繁瑣的判斷

例如：

```javascript
const user = {
    name: 'rainbow',
    skills: {
        language: ['english', 'japanese'],
        code: 'javascript'
    }
};

// 舊寫法：要完整的判斷父層是否存在，相當麻煩
if (user && user.skills) {
    console.log(user.skills.code);
}

// 新寫法：使用 Optional Chaining
console.log(user?.skills?.code);
```

### 使用

#### 1.取得物件屬性
```javascript
console.log(user?.skills?.code);
```

#### 2.取得陣列值
```javascript
console.log(user?.skills?.language?.[1]);
```

#### 3.執行可選的方法
```javascript
document.querySelector('.score')?.getBoundingClientRect();
```

### :exclamation: 注意
Optional Chaining (可選串連) 是獲取，無法進行賦值操作的。

## 雙問號：(??)

### 目的
**Nullish coalescing operator (??)** 是為了解決 `||` <br>
在 `||` 中，當 `null`、`undefined`、`''`、`0`、`false` 皆為 false <br>
而使用 `(??)` 判斷 0 時，結果會不一樣

```javascript
// null 時
console.log(null || 'default'); // "default"
console.log(null ?? 'default'); // "default"

// undefined 時
console.log(undefined || 'default'); // "default"
console.log(undefined ?? 'default'); // "default"

// false 時
console.log(false || 'default'); // "default"
console.log(false ?? 'default'); // "default"

// '' 時
console.log('' || 'default'); // "default"
console.log('' ?? 'default'); // "default"

// 0 時
console.log(0 || 'default'); // "default"
console.log(0 ?? 'default'); // 0
```

### 情境
也許有人看到這邊還是不太懂說所以只是為了 0 就建立個 `??` operator <br>
那以下情境應該就會更理解好處了 <br>
當我們要來取得分數，但當帶入 0 分進去時，<br>
使用 `||` 他會視為 `false` 而吃預設值，就跟我們預期的不同

```javascript
const getSCore = (score: number) => {
  return score || 1;
};

getScore(0); // 1
```

## 賦值操作

### before
以前的我們賦予值要

```javasript
total = total || 1;
age = age && 18;
man.weight = man.weight ?? 60;
```

### after
可以更加精簡程式

```javasript
total ||= 1;
age &&= 18;
man.weight ??= 60;
```


## 參考
- [Optional Chaining](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [Logical AND assignment (&&=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [Logical nullish assignment (??=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)