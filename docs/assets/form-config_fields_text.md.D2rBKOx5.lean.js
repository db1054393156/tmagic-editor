import{ax as o,ai as s,q as i,U as d,O as a,t,S as r,aS as l,p as h}from"./chunks/framework.8ax0Ynp_.js";const E=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"form-config/fields/text.md","filePath":"form-config/fields/text.md"}'),c={name:"form-config/fields/text.md"},p=t("h1",{id:"input-输入框",tabindex:"-1"},[r("Input 输入框 "),t("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1),_=t("p",null,"通过鼠标或键盘输入字符",-1),u=t("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),m=t("p",null," Input输入框的type为'text', 是type的默认值，所以可以不配置 ",-1),b=t("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),f=t("p",null," 通过 disabled 属性指定是否禁用 input 组件 ",-1),x=t("h2",{id:"复合型输入框",tabindex:"-1"},[r("复合型输入框 "),t("a",{class:"header-anchor",href:"#复合型输入框","aria-label":'Permalink to "复合型输入框"'},"​")],-1),g=t("p",null,"后置内容",-1),k=t("p",null," 可以通过配置append来增加一个后置内容。 ",-1),y=t("p",null," 可以通过配置append来增加一个后置按钮。 ",-1),P=t("h2",{id:"过滤内容",tabindex:"-1"},[r("过滤内容 "),t("a",{class:"header-anchor",href:"#过滤内容","aria-label":'Permalink to "过滤内容"'},"​")],-1),T=t("p",null," 设置filter为'number'，可以将值转换成数值，也可以配置一个函数来自由转换。 ",-1),I=t("h2",{id:"去掉首尾空格",tabindex:"-1"},[r("去掉首尾空格 "),t("a",{class:"header-anchor",href:"#去掉首尾空格","aria-label":'Permalink to "去掉首尾空格"'},"​")],-1),A=t("p",null," 设置trim为true'，可以去掉首尾空格。 ",-1),S=t("h2",{id:"显示详情",tabindex:"-1"},[r("显示详情 "),t("a",{class:"header-anchor",href:"#显示详情","aria-label":'Permalink to "显示详情"'},"​")],-1),C=t("p",null," 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag ",-1),N=l("",4);function V(q,F,$,O,v,B){const e=s("demo-block");return h(),i("div",null,[p,_,u,d(e,{type:"form",config:[{name:"text",text:"输入框"}]},{source:a(()=>[m]),_:1}),b,d(e,{type:"form",config:[{name:"text",text:"输入框",disabled:()=>!0}]},{source:a(()=>[f]),_:1}),x,g,d(e,{type:"form",config:[{name:"text",text:"重量",append:"公斤"}]},{source:a(()=>[k]),_:1}),d(e,{type:"form",config:[{name:"text",text:"输入框",append:{type:"button",text:"操作",handler:n=>{n.$message(n.mForm.values.text)}}}]},{source:a(()=>[y]),_:1},8,["config"]),P,d(e,{type:"form",config:[{name:"text",text:"输入框",filter:"number"}]},{source:a(()=>[T]),_:1}),I,d(e,{type:"form",config:[{name:"text",text:"输入框",trim:!0}]},{source:a(()=>[A]),_:1}),S,d(e,{type:"form",config:[{name:"text",text:"输入框",tooltip:!0}]},{source:a(()=>[C]),_:1}),N])}const j=o(c,[["render",V]]);export{E as __pageData,j as default};
