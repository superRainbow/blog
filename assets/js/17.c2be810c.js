(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{515:function(t,r,a){"use strict";a.r(r);var _=a(6),v=Object(_.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("最近工作上準備與廠商接洽新專案的專案架構，"),a("br"),t._v("\n但廠商給了一個前後不分離與使用 jQuery 的架構"),a("br"),t._v("\n這讓我跟同事們不得不先準備一下資料來好好跟廠商討論 "),a("s",[t._v("打臉")]),a("br")]),t._v(" "),a("h2",{attrs:{id:"前後端不分離"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前後端不分離"}},[t._v("#")]),t._v(" 前後端不分離")]),t._v(" "),a("h3",{attrs:{id:"簡介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#簡介"}},[t._v("#")]),t._v(" 簡介")]),t._v(" "),a("p",[t._v("這是早期網頁開發的做法"),a("br"),t._v("\n不存在單純的 html 檔，後端與 html 的邏輯會混在一起"),a("br"),t._v("\n(開啟前端頁面看的到由後端控制的邏輯)"),a("br")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ithelp.ithome.com.tw/upload/images/20161227/20091346Py2cED8s53.png",alt:""}}),t._v(" "),a("em",[t._v("來源："),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10187675",target:"_blank",rel:"noopener noreferrer"}},[t._v("你走你的陽關道，我走我的獨木橋：前後端分離"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"缺點"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺點"}},[t._v("#")]),t._v(" 缺點")]),t._v(" "),a("ol",[a("li",[t._v("耦合度高")]),t._v(" "),a("li",[t._v("開發效率慢")]),t._v(" "),a("li",[t._v("效能不好")]),t._v(" "),a("li",[t._v("開發就是要全專案載下來")])]),t._v(" "),a("h2",{attrs:{id:"前後端分離"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前後端分離"}},[t._v("#")]),t._v(" 前後端分離")]),t._v(" "),a("p",[t._v("目前主流的網頁開發方式")]),t._v(" "),a("h3",{attrs:{id:"簡介-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#簡介-2"}},[t._v("#")]),t._v(" 簡介")]),t._v(" "),a("p",[t._v("Browser 發送請求到前端，由前端控制導頁與渲染"),a("br"),t._v("\n經由 AJAX 向後端 Restful API 發送請求，獲取數據"),a("br")]),t._v(" "),a("p",[t._v("後端只負責業務邏輯與數據傳輸"),a("br"),t._v("\n採用 JSON 格式，比 XML 簡潔且效能更好"),a("br"),t._v("\n後端開發人員專注在後端的邏輯與資料處理"),a("br")]),t._v(" "),a("p",[t._v("前後分離不僅能減少後端 Server 壓力、人數乘載提高、頁面渲染也更快，用戶體驗更好")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ithelp.ithome.com.tw/upload/images/20161227/20091346IoKPoVChyF.png",alt:""}}),t._v(" "),a("em",[t._v("來源："),a("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10187675",target:"_blank",rel:"noopener noreferrer"}},[t._v("你走你的陽關道，我走我的獨木橋：前後端分離"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"優點"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#優點"}},[t._v("#")]),t._v(" 優點")]),t._v(" "),a("ul",[a("li",[t._v("前端後端耦合度低 (前端負責 View，後端負責 Model)")]),t._v(" "),a("li",[t._v("提高工作效率，分工更加明確")]),t._v(" "),a("li",[t._v("效能較好(畫面都是透過資料傳遞由 js 處理)")]),t._v(" "),a("li",[t._v("程式好維護")]),t._v(" "),a("li",[t._v("發現問題(bug)好除錯")]),t._v(" "),a("li",[t._v("減少後端伺服器的並發/負載壓力")]),t._v(" "),a("li",[t._v("未來無論是要替換掉後端語言或是前端改版都不用全部打掉")]),t._v(" "),a("li",[t._v("未來想擴充 APP 專案，只需要開發 APP 部分，後端的工較小")]),t._v(" "),a("li",[t._v("專案可以切分為前後端各自專案或是統一一個都是自己可以選擇")])]),t._v(" "),a("h3",{attrs:{id:"缺點-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺點-2"}},[t._v("#")]),t._v(" 缺點")]),t._v(" "),a("ul",[a("li",[t._v("SEO 問題 (因為是 SPA 網站，但目前有許多處理方式)")]),t._v(" "),a("li",[t._v("安全性 (主流使用 JWT)")])]),t._v(" "),a("h2",{attrs:{id:"jquery-vs-框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-vs-框架"}},[t._v("#")]),t._v(" jQuery vs 框架")]),t._v(" "),a("h3",{attrs:{id:"jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery"}},[t._v("#")]),t._v(" jQuery")]),t._v(" "),a("p",[t._v("優點")]),t._v(" "),a("ul",[a("li",[t._v("易於擴充好上手")])]),t._v(" "),a("p",[t._v("缺點")]),t._v(" "),a("ul",[a("li",[t._v("缺乏組織性")]),t._v(" "),a("li",[t._v("耦合度高，不好維護")]),t._v(" "),a("li",[t._v("由於直接操作 DOM，渲染性能差")])]),t._v(" "),a("h4",{attrs:{id:"補充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#補充"}},[t._v("#")]),t._v(" 補充：")]),t._v(" "),a("p",[t._v("Bootstrap 5 不再使用 jQuery，這也代表 jQuery 不在那麼主流")]),t._v(" "),a("h3",{attrs:{id:"框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[t._v("#")]),t._v(" 框架")]),t._v(" "),a("p",[t._v("特色")]),t._v(" "),a("ul",[a("li",[t._v("具有 MV* 框架 (資料與 UI 分離)")]),t._v(" "),a("li",[t._v("模組化")]),t._v(" "),a("li",[t._v("有自己的生態圈")]),t._v(" "),a("li",[t._v("目前各框架都有專屬自己的 CLI 方便開發與打包部署檔案")])]),t._v(" "),a("h4",{attrs:{id:"補充-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#補充-2"}},[t._v("#")]),t._v(" 補充：")]),t._v(" "),a("p",[t._v("目前 ASP.NET Core 開啟新專案就有使用前端框架的選擇\n"),a("img",{attrs:{src:"https://i.imgur.com/mpOEd9E.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"總結"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#總結"}},[t._v("#")]),t._v(" 總結")]),t._v(" "),a("p",[t._v("藉由這次機會也讓我好好複習一下觀念也不錯\n也讓我更加理解選擇技術的緣由與優劣勢")]),t._v(" "),a("h2",{attrs:{id:"參考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[t._v("#")]),t._v(" 參考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10187675",target:"_blank",rel:"noopener noreferrer"}},[t._v("你走你的陽關道，我走我的獨木橋：前後端分離"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10224417",target:"_blank",rel:"noopener noreferrer"}},[t._v("為什麼現在的前端都在用「框架」？"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://kuro.tw/posts/2019/07/31/%E8%AB%87%E8%AB%87%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("談談前端框架"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=v.exports}}]);