(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{135:function(t,s,a){"use strict";a.r(s);var e=a(240),r=a(191);for(var l in r)["default"].indexOf(l)<0&&function(t){a.d(s,t,(function(){return r[t]}))}(l);var n=a(13),_=Object(n.a)(r.default,e.a,e.b,!1,null,null,null);s.default=_.exports},191:function(t,s,a){"use strict";a.r(s);var e=a(192),r=a.n(e);for(var l in e)["default"].indexOf(l)<0&&function(t){a.d(s,t,(function(){return e[t]}))}(l);s.default=r.a},192:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{dataPickOptions:{format:"yyyy-MM-dd HH:mm:ss",size:"small",clearable:!1,type:"datetime"},format:"YYYY-MM-DD HH:mm:ss",btnItems:{day:!0,week:!0,month:!0,quarter:!0,year:!0},currentValue:"month"}},methods:{change:function(t){console.log(t)},_getClick:function(){console.log(this.$refs.timebar.getDate())}},mounted:function(){var t=this;console.log("父组件"),this.$nextTick((function(){console.log("父组件"),console.log(t.$refs.timebar.getDate())}))}};s.default=e},240:function(t,s,a){"use strict";a.d(s,"a",(function(){return e})),a.d(s,"b",(function(){return r}));var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("demo-code",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("div",[a("yl-time-bar",{ref:"timebar",attrs:{dataPickOptions:t.dataPickOptions,currentValue:t.currentValue,btnItems:t.btnItems,format:t.format},on:{change:t.change}}),t._v(" "),a("el-button",{attrs:{size:"small",type:"info"},on:{click:t._getClick}},[t._v(" 获取值 ")])],1)]],2),t._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-time-bar")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v(" ="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"timebar"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":dataPickOptions")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"dataPickOptions"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":currentValue")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"currentValue"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":btnItems")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"btnItems"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":format")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"format"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@change")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"change"')]),t._v("\n    >")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-time-bar")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"info"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"_getClick"')]),t._v(">")]),t._v(" 获取值 "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n   data(){\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("dataPickOptions")]),t._v(":{\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("format")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"yyyy-MM-dd HH:mm:ss"')]),t._v(",\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'small'")]),t._v(",\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("clearable")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'datetime'")]),t._v("\n         },\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("format")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"YYYY-MM-DD HH:mm:ss"')]),t._v(",\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("btnItems")]),t._v(":{\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("day")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("week")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("month")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("quarter")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("year")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n         },\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("currentValue")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'month'")]),t._v("\n     }\n   },\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n       change(date){\n           "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(date)\n       },\n       _getClick() {\n         "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.timebar.getDate())\n       }\n   },\n   mounted(){\n     "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'父组件'")]),t._v(")\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$nextTick("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("()")]),t._v("=>")]),t._v("{\n       "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'父组件'")]),t._v(")\n       "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.timebar.getDate())\n     })\n     \n   }\n }\n ")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lang")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"css"')]),t._v(" >")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n\n")])])])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("hr")],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h4",{attrs:{id:"timebar-%E6%97%B6%E9%97%B4%E8%BF%87%E6%BB%A4%E5%99%A8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timebar-%E6%97%B6%E9%97%B4%E8%BF%87%E6%BB%A4%E5%99%A8"}},[t._v("#")]),t._v(" TimeBar 时间过滤器")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("标签： "),a("code",{pre:!0},[t._v("<yl-time-bar></yl-time-bar>")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("功能：")]),t._v(" 提供时间段的过滤器控件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("示例：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("注意在设定日期格式化时，如果日期格式是"),a("code",{pre:!0},[t._v("YYYY-MM-DD HH:mm:ss")]),t._v(" 日期控件的type应该为"),a("code",{pre:!0},[t._v("datetime")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("属性")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("btnItems")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("时间段选项")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("{ day:true, week:true, month:true, quarter:true, year:true, all:true }")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),a("tr",[a("td",[t._v("currentValue")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前默认时间段")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("'month'")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("'day'、'week'、'month'、'quarter'、'year'、'all'")])]),t._v(" "),a("tr",[a("td",[t._v("dataPickOptions")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("时间控件配置")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("{format:'yyyy-MM-dd', size:'small',readonly:false, clearable:false, type:'date',}")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("false/true")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("格式化")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("'YYYY-MM-DD'")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),a("tr",[a("td",[t._v("needSetDate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否在初始化时设置初始值")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("false/true")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("方法")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("getDate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取当前控件开始时间和结束时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("{beginDate:'',endDate:''}")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),a("tr",[a("td",[t._v("setDate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置当前控件开始时间和结束时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("(beginDate,endDate)")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("strong",[t._v("事件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("事件")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("选择时间或选择时间段或者前进后退时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("{beginDate:'',endDate:''}")])])])])}]}}]);
//# sourceMappingURL=21.16c67e9551ced84c8dd9.mini.js.map