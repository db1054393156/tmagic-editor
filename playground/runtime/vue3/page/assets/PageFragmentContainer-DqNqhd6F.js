import{u as f,_ as g}from"./_plugin-vue_export-helper-Bf2hy-jg.js";import"./index-A4nhptFG.js";var d=(e=>(e.CONTAINER="container",e.PAGE="page",e.ROOT="app",e.PAGE_FRAGMENT="page-fragment",e))(d||{});const p=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){const{app:t}=f({config:e.config,methods:{},iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex}),i=VueDemi.computed(()=>{var o,r;return(r=(o=t==null?void 0:t.dsl)==null?void 0:o.items)==null?void 0:r.find(n=>n.id===e.config.pageFragmentId)});return{containerConfig:VueDemi.computed(()=>{if(!i.value)return{items:[],id:"",type:d.CONTAINER};const{id:o,type:r,items:n,...a}=i.value,m=n.map(u=>{const{id:C,...s}=u;return{...s}});return(t==null?void 0:t.platform)==="editor"?{...a,items:m}:{...a,items:n}})}}});function l(e,t,i,c,o,r){const n=Vue.resolveComponent("magic-ui-container");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(n,{"iterator-index":e.iteratorIndex,"iterator-container-id":e.iteratorContainerId,config:e.containerConfig,model:e.model},null,8,["iterator-index","iterator-container-id","config","model"])])}const A=g(p,[["render",l],["__scopeId","data-v-aaca48d8"]]);export{A as default};
//# sourceMappingURL=PageFragmentContainer-DqNqhd6F.js.map
