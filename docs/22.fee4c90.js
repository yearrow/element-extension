(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{266:function(t,s,a){"use strict";a.r(s);var e=a(288),r=a(286),l=a(0),n=Object(l.a)(r.a,e.render,e.staticRenderFns,!1,null,null,null),_=a(3);_.install(a(1)),_.compatible&&(t.hot.accept(),_.isRecorded("695b18a7")?_.reload("695b18a7",n.options):_.createRecord("695b18a7",n.options),t.hot.accept(288,function(t){e=a(288),_.rerender("695b18a7",{render:e.render,staticRenderFns:e.staticRenderFns})}.bind(this))),n.options.__file="example/views/page/treeselect.md",s.default=n.exports},286:function(t,s,a){"use strict";var e={data:function(){return{modelValue:"",modelValue1:"",defaultProps1:{label:"label",children:"children"},treeData1:[],treeData:[{id:1,label:"1",children:[{id:11,label:"1-1"},{id:12,label:"1-2"}]},{id:2,label:"2",children:[{id:21,label:"2-1"},{id:22,label:"2-2"}]}],defaultProps:{label:"label",children:"children"}}},methods:{_getCurrentNode:function(t){console.log(t)},_clear:function(t){console.log(t)},_reload:function(t){console.log(t)},renderContent:function(t,s){var a=s.node;s.data,s.store;return t("span",{class:"custom-tree-node"},[t("span",[t("el-button",{attrs:{size:"mini",type:"text"}},[a.label]),t("el-button",{attrs:{size:"mini",type:"text"}},["Delete"])])])},_getCurrentNode1:function(t){console.log(t)},_clear1:function(t){console.log(t)},_reload1:function(t){console.log(t)},renderContent1:function(t,s){var a=s.node;s.data,s.store;return t("span",{class:"custom-tree-node"},[t("span",[t("el-button",{attrs:{size:"mini",type:"text"}},[a.label]),t("el-button",{attrs:{size:"mini",type:"text"}},["Delete"])])])},loadNode:function(t,s){if(t.level){var a=Math.floor(100*Math.random());s([{id:a,label:a+"-1",children:[]}])}else{this.treeData1=[{id:1,label:"root",children:[]}]}}}};s.a=e},288:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),a("demo-code",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("yl-treeselect",{attrs:{placeholder:"请选择内容",width:"350px",treeData:t.treeData,defaultProps:t.defaultProps,renderContent:t.renderContent,filterTextVisibe:"",displaytoolBar:""},on:{getCurrentNode:t._getCurrentNode,clear:t._clear,reload:t._reload},model:{value:t.modelValue,callback:function(s){t.modelValue=s},expression:"modelValue"}})]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-treeselect")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v(" ="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"modelValue"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"请选择内容"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"350px"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":treeData")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"treeData"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":defaultProps")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"defaultProps"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":renderContent")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"renderContent"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("filterTextVisibe")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("displaytoolBar")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@getCurrentNode")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"_getCurrentNode"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@clear")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"_clear"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@reload")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"_reload"')]),t._v("\n >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-treeselect")]),t._v(">")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n   data(){\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("modelValue")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(",\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("treeData")]),t._v(":[\n         { \n           "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n           "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'1'")]),t._v(",\n           "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": [\n             {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("11")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'1-1'")]),t._v(",\n             },\n             {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("12")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'1-2'")]),t._v(",\n             },\n           ]\n         },\n         { \n           "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v(",\n           "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'2'")]),t._v(",\n           "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": [\n             {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("21")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'2-1'")]),t._v(",\n             },\n             {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("22")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'2-2'")]),t._v(",\n             },\n           ]\n         }\n       ],\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("defaultProps")]),t._v(":{\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'label'")]),t._v(",\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'children'")]),t._v("\n       }\n     }\n   },\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n   }\n }\n ")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lang")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"css"')]),t._v(" >")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n\n")])])])]),t._m(5),a("demo-code",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("yl-treeselect",{attrs:{width:"350px",treeData:t.treeData1,defaultProps:t.defaultProps1,renderContent:t.renderContent1,stepByOne:"",defaultText:"默认文本",displaytoolBar:""},on:{getCurrentNode:t._getCurrentNode1,loadNodeEvent:t.loadNode,clear:t._clear1,reload:t._reload1},model:{value:t.modelValue1,callback:function(s){t.modelValue1=s},expression:"modelValue1"}})]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-treeselect")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v(" ="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"modelValue1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"350px"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":treeData")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"treeData1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":defaultProps")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"defaultProps1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":renderContent")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"renderContent1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("stepByOne")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("defaultText")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'默认文本'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("displaytoolBar")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@getCurrentNode")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"_getCurrentNode1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@loadNodeEvent")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loadNode"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@clear")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"_clear1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@reload")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"_reload1"')]),t._v("\n >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-treeselect")]),t._v(">")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n   data(){\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("modelValue1")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("''")]),t._v(",\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("treeData1")]),t._v(":[\n       ],\n       "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("defaultProps1")]),t._v(":{\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'label'")]),t._v(",\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'children'")]),t._v("\n       }\n     }\n   },\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n      _getCurrentNode1(selectNode){\n       "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(selectNode)\n     },\n     _clear1(selectNode){\n       "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(selectNode)\n     },\n     _reload1(selectNode){\n       "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(selectNode)\n     },\n     renderContent1(h, { node, data, store }) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" (\n        "),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"custom-tree-node"')]),t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"mini"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(" >")]),t._v("{node.label}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"mini"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(" >")]),t._v("Delete"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")])]),t._v(");\n    },\n    loadNode (node, resolve) {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (!node.level) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//根节点")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" rootNode = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'root'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": []\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".treeData1 = [rootNode]\n      } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("let")]),t._v(" id ="),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".floor("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random() * ("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100")]),t._v("));\n        resolve([\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(":id,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": id+"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'-1'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("children")]),t._v(": []\n         }\n        ])\n      }\n    },\n   }\n }\n ")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lang")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"css"')]),t._v(" >")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n\n")])])])]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),a("p",[t._v("暂无")]),t._m(11),t._m(12),a("hr")],1)},r=[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"treeselect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treeselect","aria-hidden":"true"}},[this._v("#")]),this._v(" treeselect")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("标签：  "),s("code",{pre:!0},[this._v("<yl-treeselect></yl-treeselect>")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("功能：")]),this._v("  提供树选择的基础组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"%E5%85%A8%E9%83%A8%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%A0%91%E7%A4%BA%E4%BE%8B"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E5%85%A8%E9%83%A8%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%A0%91%E7%A4%BA%E4%BE%8B","aria-hidden":"true"}},[this._v("#")]),this._v(" 全部加载的树示例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"%E9%80%90%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%A0%91%E7%A4%BA%E4%BE%8B"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E9%80%90%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%A0%91%E7%A4%BA%E4%BE%8B","aria-hidden":"true"}},[this._v("#")]),this._v(" 逐步加载的树示例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("属性")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("类型")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("可选值")])])]),a("tbody",[a("tr",[a("td",[t._v("width")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("宽度")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("240px")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("treeData")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("树数据源")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Array")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("[]")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("defaultExpandedKeys")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认展开的节点数组")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Array")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("[]")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("renderContent")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("树节点的内容区的渲染")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Function")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Function(h, { node, data, store }")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("defaultProps")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("配置选项")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("object")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("具体看props配置表")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("stepByOne")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否开启逐步加载模式")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("true/false")])]),a("tr",[a("td",[t._v("defaultText")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认文本值 （只在逐步加载模式下使用）")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"right"}},[t._v('""')]),a("td",{staticStyle:{"text-align":"right"}})]),a("tr",[a("td",[t._v("size")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("输入框大小")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("'small'")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("参考el-input的size属性")])]),a("tr",[a("td",[t._v("disabled")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否禁用")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("true/false")])]),a("tr",[a("td",[t._v("placeholder")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("提示输入文本")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("''")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("filterTextVisibe")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("树节点过滤器 （在全部加载模式下启用）")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("true/false")])]),a("tr",[a("td",[t._v("displaytoolBar")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("启用树控件工具栏（包含清楚和刷新功能）")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("true/false")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("props")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("类型")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("可选值")])])]),a("tbody",[a("tr",[a("td",[t._v("label")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定节点标签为节点对象的某个属性值")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("string, function(data, node)")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("children")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定子树为节点对象的某个属性值")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("string")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("disabled")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定节点选择框是否禁用为节点对象的某个属性值")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean, function(data, node)")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])]),a("tr",[a("td",[t._v("isLeaf")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("boolean, function(data, node)")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("--")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("方法")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("事件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("事件")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("参数")])])]),a("tbody",[a("tr",[a("td",[t._v("getCurrentNode")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("点击节点时触发")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("当前节点对象")])]),a("tr",[a("td",[t._v("loadNodeEvent")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("节点数据重载时触发（只在逐步加载模式下有效）")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("node, resolve")])]),a("tr",[a("td",[t._v("clear")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("选择时间或选择时间段或者前进后退时触发")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("当前选中节点对象")])]),a("tr",[a("td",[t._v("reload")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("选择时间或选择时间段或者前进后退时触发")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("当前选中节点对象")])])])])}];e._withStripped=!0,a.d(s,"render",function(){return e}),a.d(s,"staticRenderFns",function(){return r})}}]);