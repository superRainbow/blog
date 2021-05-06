(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{524:function(e,t,r){"use strict";r.r(t);var s=r(6),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("大約在 2006 年，瀏覽器為了要實現還未標準化的 css 功能會加上特定瀏覽器前綴詞。")]),e._v(" "),r("div",{staticClass:"custom-block theorem"},[r("p",{staticClass:"title"},[e._v("By 2012, the W3C CSS Working Group")]),r("p",[e._v("In CSS we use vendor prefixes for properties, values, @-rules that are: – vendor specific extensions (per CSS 2.1), or – experimental implementations (per CSS Snapshot 2010) (e.g. in Working Drafts)")]),e._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[e._v("from "),r("a",{attrs:{href:"https://wiki.csswg.org/spec/vendor-prefixes",target:"_blank",rel:"noopener noreferrer"}},[e._v("guidance on the use of vendor prefixes"),r("OutboundLink")],1)])])]),r("h3",{attrs:{id:"常見"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常見"}},[e._v("#")]),e._v(" 常見")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("前綴詞")]),e._v(" "),r("th",[e._v("瀏覽器")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("-webkit-")]),e._v(" "),r("td",[e._v("chrome、Safari、新版 Opera、iOS、base 在 WebKit 引擎的瀏覽器")])]),e._v(" "),r("tr",[r("td",[e._v("-moz-")]),e._v(" "),r("td",[e._v("Firefox")])]),e._v(" "),r("tr",[r("td",[e._v("-o-")]),e._v(" "),r("td",[e._v("未以 WebKit 為引擎的 Opera")])]),e._v(" "),r("tr",[r("td",[e._v("-ms-")]),e._v(" "),r("td",[e._v("Internet Explorer、Microsoft Edge")])])])]),e._v(" "),r("h2",{attrs:{id:"css-前綴工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-前綴工具"}},[e._v("#")]),e._v(" css 前綴工具")]),e._v(" "),r("h3",{attrs:{id:"起因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[e._v("#")]),e._v(" 起因")]),e._v(" "),r("p",[e._v("由於前綴數量大幅度成長導致開發相當麻煩，\n為了解決這問題，開發導入自動化的工具")]),e._v(" "),r("h3",{attrs:{id:"常見工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常見工具"}},[e._v("#")]),e._v(" 常見工具")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Autoprefixer"),r("OutboundLink")],1),e._v("：PostCSS 套件，使用 caniuse 數據來更新狀態")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://emmet.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emmet"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"前綴趨勢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前綴趨勢"}},[e._v("#")]),e._v(" 前綴趨勢")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i1.wp.com/css-tricks.com/wp-content/uploads/2021/04/prefixing-history.png?w=988&ssl=1",alt:"Image"}}),e._v(" "),r("em",[e._v("來源："),r("a",{attrs:{href:"https://css-tricks.com/is-vendor-prefixing-dead/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Is Vendor Prefixing Dead?"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"_2007-年-2011-年"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2007-年-2011-年"}},[e._v("#")]),e._v(" 2007 年 - 2011 年")]),e._v(" "),r("p",[e._v("瀏覽器前綴的數量一直在穩定增長")]),e._v(" "),r("h3",{attrs:{id:"_2012-年"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2012-年"}},[e._v("#")]),e._v(" 2012 年")]),e._v(" "),r("p",[e._v("Mozilla 在完全實現屬性的標準版本，便會刪除帶前綴的屬性\n（例：-moz-border-radius 和 -moz-box-shadow)")]),e._v(" "),r("h3",{attrs:{id:"_2013-年"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2013-年"}},[e._v("#")]),e._v(" 2013 年")]),e._v(" "),r("p",[e._v("Chrome 將渲染引擎從 WebKit 換為 Blink（屬於Chromium項目的一部分），\n這是刪除某些前綴功能的重大轉折點。")]),e._v(" "),r("h3",{attrs:{id:"_2016-年"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2016-年"}},[e._v("#")]),e._v(" 2016 年")]),e._v(" "),r("p",[e._v("WebKit 宣布不在使用前綴性質功能屬性")]),e._v(" "),r("div",{staticClass:"custom-block theorem"},[r("p",{staticClass:"title"},[e._v("WebKit")]),r("p",[e._v("Over time this strategy has turned out not to work so well. Many websites came to depend on prefixed properties. They often used every prefixed variant of a feature, which makes CSS less maintainable and JavaScript programs trickier to write. Sites frequently used just the prefixed version of a feature, which made it hard for browsers to drop support for the prefixed variant when adding support for the unprefixed, standard version. Ultimately, browsers felt pressured by compatibility concerns to implement each other’s prefixes.")]),e._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[e._v("from "),r("a",{attrs:{href:"https://webkit.org/blog/6131/updating-our-prefixing-policy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebKit announced that it would no longer release experimental features with prefixes"),r("OutboundLink")],1)])])]),r("h2",{attrs:{id:"參考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[e._v("#")]),e._v(" 參考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix",target:"_blank",rel:"noopener noreferrer"}},[e._v("瀏覽器引擎前綴"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://css-tricks.com/is-vendor-prefixing-dead/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Is Vendor Prefixing Dead?"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);