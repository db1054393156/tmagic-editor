import{ax as a,ai as n,q as p,U as l,aS as s,p as h}from"./chunks/framework.8ax0Ynp_.js";const u=JSON.parse('{"title":"联动原理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/coupling.md","filePath":"guide/advanced/coupling.md"}'),t={name:"guide/advanced/coupling.md"},k=s("",6),e=s("",25);function E(r,d,g,c,o,y){const i=n("demo-block");return h(),p("div",null,[k,l(i,{type:"form",config:`[{
  text: '文本',
  name: 'text'
}, {
  type: 'select',
  text: '下拉选项',
  name: 'select',
  options: [
    { text: '选项1', value: 1 },
    { text: '选项2', value: 2 }
  ],
  onChange: (vm, value, { model }) => {
    model.text = value;
  }
}]`}),e])}const A=a(t,[["render",E]]);export{u as __pageData,A as default};
