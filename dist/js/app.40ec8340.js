(function(){var e={7580:function(e,t,a){"use strict";var n=a(9242),l=a(3396);function o(e,t){const a=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(a)}var r=a(89);const i={},s=(0,r.Z)(i,[["render",o]]);var c=s,u=a(2483),d=a(7139),g=a.p+"img/xblocklogo-326_49.409d3abf.png";const h=e=>((0,l.dD)("data-v-9860128e"),e=e(),(0,l.Cn)(),e),p={id:"whole-wordcloud-page"},b=h((()=>(0,l._)("div",{id:"return-button"},[(0,l._)("a",{href:"http://xblock.pro/#/"},[(0,l._)("img",{src:g})])],-1))),m=h((()=>(0,l._)("div",{id:"wordcloud-container"},[(0,l._)("p",null,"XLabelCloud"),(0,l._)("div",{id:"wordcloud"})],-1))),f={id:"search-container"},y={id:"category-selector",class:"layout-search"},w=h((()=>(0,l._)("p",null,"category:",-1))),k={id:"label-input-box",class:"layout-search"},C=(0,l.Uk)("Search"),_={id:"labels-container"},v={id:"search-result-table"},S={id:"result-table"},z={id:"result-pagination"};function O(e,t,a,o,r,i){const s=(0,l.up)("el-descriptions-item"),c=(0,l.up)("el-descriptions"),u=(0,l.up)("el-option"),g=(0,l.up)("el-select"),h=(0,l.up)("el-col"),O=(0,l.up)("el-button"),D=(0,l.up)("el-input"),x=(0,l.up)("el-row"),T=(0,l.up)("el-tag"),W=(0,l.up)("el-table-column"),j=(0,l.up)("el-table"),P=(0,l.up)("el-pagination"),V=(0,l.up)("el-empty"),L=(0,l.up)("el-main"),F=(0,l.up)("el-container"),I=(0,l.Q2)("loading");return(0,l.wg)(),(0,l.iD)("div",p,[(0,l.wy)(((0,l.wg)(),(0,l.j4)(F,{"element-loading-text":"Loading..."},{default:(0,l.w5)((()=>[(0,l.Wm)(L,null,{default:(0,l.w5)((()=>[b,m,(0,l.Wm)(c,{column:3,border:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{label:"Number of Categories",align:"center","label-align":"center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)(r.numOfCategories),1)])),_:1}),(0,l.Wm)(s,{label:"Number of Labels",align:"center","label-align":"center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)(r.numOfLabels),1)])),_:1}),(0,l.Wm)(s,{label:"Pieces of Data",align:"center","label-align":"center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)(r.piecesOfData),1)])),_:1})])),_:1}),(0,l._)("div",f,[(0,l.Wm)(x,{gutter:20},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{sm:10,xs:24},{default:(0,l.w5)((()=>[(0,l._)("div",y,[w,(0,l.Wm)(g,{modelValue:r.categoryValue,"onUpdate:modelValue":t[0]||(t[0]=e=>r.categoryValue=e),placeholder:"Select",onChange:i.categoryChange},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.categoryOptions,(e=>((0,l.wg)(),(0,l.j4)(u,{key:e,value:e},null,8,["value"])))),128))])),_:1},8,["modelValue","onChange"])])])),_:1}),(0,l.Wm)(h,{sm:14,xs:24},{default:(0,l.w5)((()=>[(0,l._)("div",k,[(0,l.Wm)(D,{modelValue:r.searchContent,"onUpdate:modelValue":t[1]||(t[1]=e=>r.searchContent=e),placeholder:"Search Labels",onInput:i.inputSearchContent,maxlength:"64"},{append:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"search-button",onClick:i.clickSearchButton},{default:(0,l.w5)((()=>[C])),_:1},8,["onClick"])])),_:1},8,["modelValue","onInput"])])])),_:1})])),_:1})]),(0,l.wy)((0,l._)("div",_,[(0,l.Wm)(x,{justify:"start"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.labels_list,(e=>((0,l.wg)(),(0,l.j4)(h,{lg:6,md:8,sm:12,xs:24,key:e.name},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{class:"label-button",onClick:t=>i.searchThisLabel(e.name)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)(e.name)+" ",1),(0,l.Wm)(T,{effect:"dark",round:"",size:"small",style:{"margin-left":"10px"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)(e.cnt),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})],512),[[n.F8,i.labelsContainerIsShow]]),(0,l.wy)((0,l._)("div",v,[(0,l._)("div",S,[(0,l.Wm)(j,{data:r.tableData,ref:"dataTable"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{type:"expand"},{default:(0,l.w5)((e=>[(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.row.info,((e,t)=>((0,l.wg)(),(0,l.iD)("p",{key:t},(0,d.zw)(t)+":"+(0,d.zw)(e),1)))),128))])])),_:1}),(0,l.Wm)(W,{label:"Label",prop:"labels"},{default:(0,l.w5)((e=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.row.labels,(e=>((0,l.wg)(),(0,l.j4)(T,{key:e,"disable-transitions":"",hit:"",onClick:t=>i.searchThisLabel(e)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)(e),1)])),_:2},1032,["onClick"])))),128))])),_:1}),(0,l.Wm)(W,{label:"Category",prop:"category"}),"Account"==r.categoryValue?((0,l.wg)(),(0,l.j4)(W,{key:0,label:"Address",prop:"info.address"})):(0,l.kq)("",!0),"Transaction"==r.categoryValue?((0,l.wg)(),(0,l.j4)(W,{key:1,label:"Txn Hash",prop:"info.txn_hash"})):(0,l.kq)("",!0),"Block"==r.categoryValue?((0,l.wg)(),(0,l.j4)(W,{key:2,label:"Block Number",prop:"info.block_number"})):(0,l.kq)("",!0)])),_:1},8,["data"])]),(0,l._)("div",z,[(0,l.Wm)(P,{currentPage:r.currentPage,"onUpdate:currentPage":t[2]||(t[2]=e=>r.currentPage=e),"page-size":r.pageSize,"onUpdate:page-size":t[3]||(t[3]=e=>r.pageSize=e),"page-sizes":[10,25,50,100],small:r.small,disabled:r.disabled,background:r.background,layout:"total, sizes, prev, pager, next, jumper",total:r.total,onSizeChange:i.getTableData,onCurrentChange:i.getTableData,onNextClick:i.getTableData,onPrevClick:i.getTableData},null,8,["currentPage","page-size","small","disabled","background","total","onSizeChange","onCurrentChange","onNextClick","onPrevClick"])])],512),[[n.F8,i.searchResultTableIsShow]]),(0,l.wy)((0,l.Wm)(V,{description:"No Data"},null,512),[[n.F8,i.emptyIsShow]])])),_:1})])),_:1})),[[I,r.pageLoading]])])}var D=a(7154),x=a(6265),T=a.n(x),W=a(2655),j=a(7178),P=a(5410),V=a.n(P);function L(e,t,a){a=Math.max(Math.min(Number(a),1),0);let n=parseInt(e.substring(1,3),16),l=parseInt(e.substring(3,5),16),o=parseInt(e.substring(5,7),16),r=parseInt(t.substring(1,3),16),i=parseInt(t.substring(3,5),16),s=parseInt(t.substring(5,7),16),c=Math.round(n*(1-a)+r*a),u=Math.round(l*(1-a)+i*a),d=Math.round(o*(1-a)+s*a);return c=("0"+(c||0).toString(16)).slice(-2),u=("0"+(u||0).toString(16)).slice(-2),d=("0"+(d||0).toString(16)).slice(-2),"#"+c+u+d}T().defaults.baseURL=window.location.origin;var F={data(){return{all_labels_data:[],labels:[],labels_list:[],searchContent:"",categoryValue:"",categoryOptions:[],tableData:[],currentPage:1,pageSize:10,small:!1,disabled:!1,background:!1,total:0,pageLoading:!0,numOfLabels:0,numOfCategories:0,piecesOfData:0}},computed:{labelsContainerIsShow(){return""==this.searchContent},searchResultTableIsShow(){return 0!=this.tableData.length&&""!=this.searchContent},emptyIsShow(){return""!=this.searchContent&&0==this.tableData.length}},created(){window.clickTooltip=this.clickTooltip;const e=document.documentElement,t="--el-color-primary",a="#248054";getComputedStyle(e).getPropertyValue(t),e.style.setProperty(t,a);const n="#FFFFFF";for(let l=1;l<10;l+=1)e.style.setProperty(`${t}-light-${l}`,L(a,n,.1*l))},methods:{initChart(){const e=new D.WordCloud("wordcloud",{data:this.labels,autoFit:!0,wordField:"name",weightField:"cnt",colorField:"name",wordStyle:{fontFamily:"Verdana",fontSize:[15,30]},interactions:[{type:"element-active"}],state:{active:{style:{lineWidth:3}}},tooltip:{enterable:!0,customContent:(e,t)=>{if(!t||t.length<=0)return;const a=t[0];return`<div>\n                            <ul style="padding:0; margin:0; text-align: left; list-style-type: none;">\n                                ${a.data.datum.ctg.map((e=>`<li class="g2-tooltip-list-item" onclick="clickTooltip('${a.data.datum.name}', '${e.category}')">\n                                    <span class="g2-tooltip-marker" style="background-color: ${a.color};"></span>\n                                    <span class="g2-tooltip-name">${e.category}</span>:\n                                    <span class="g2-tooltip-value">${e.cnt}</span>\n                                </li>`)).join("")}\n                            </ul>\n                        </div>`}},random:()=>.5});e.render(),e.on("element:click",((...e)=>{this.searchContent=e[0].data.data.text,this.search()}))},clickTooltip(e,t){console.log(e,t),this.searchContent=e,this.categoryValue=t,this.search()},categoryChange(){this.labels_list=this.all_labels_data[this.categoryValue],this.inputSearchContent()},clickSearchButton(){0==this.searchContent.length?W.T.alert("Please enter the query content!","Tips",{confirmButtonText:"OK",callback:e=>{(0,j.z8)({type:"info",message:`action: ${e}`})}}):this.search()},inputSearchContent(){""==this.searchContent?this.tableData=[]:this.search()},search(){""!=this.searchContent&&T()({method:"get",url:"/api/cloud/filter",params:{keyword:this.searchContent,category:this.categoryValue,page:1,pagesize:this.pageSize},paramsSerializer:function(e){return V().stringify(e,{arrayFormat:"brackets"})}}).then((e=>{const t=e.data;this.total=t.total,this.tableData=null==t.data?[]:t.data,this.currentPage=t.page})).catch((e=>{console.log(e)}))},searchThisLabel(e){this.searchContent=e,this.search()},getTableData(){T()({method:"get",url:"/api/cloud/filter",params:{keyword:this.searchContent,category:this.categoryValue,page:this.currentPage,pagesize:this.pageSize},paramsSerializer:function(e){return V().stringify(e,{arrayFormat:"brackets"})}}).then((e=>{const t=e.data;this.total=t.total,this.tableData=t.data,this.currentPage=t.page})).catch((e=>{console.log(e)}))},getAllLabelData(e){let t=[],a=0;for(let n in e){const l=e[n];l.forEach((e=>{this.element=e;let l=t.findIndex((e=>e.name==this.element.name),this);-1==l?t.push({name:e.name,cnt:e.cnt,ctg:[{category:n,cnt:e.cnt}]}):(t[l].cnt=t[l].cnt+e.cnt,t[l].ctg.push({category:n,cnt:e.cnt})),a+=e.cnt}))}return[t,a]}},mounted(){T()({method:"get",url:"/api/cloud"}).then((e=>{const t=e.data.data;this.all_labels_data=t;const a=this.getAllLabelData(t);this.labels=a[0];const n=Object.keys(t);this.categoryOptions=n,this.categoryValue=n[0],this.labels_list=t[this.categoryValue],this.numOfCategories=n.length,this.numOfLabels=this.labels.length,this.piecesOfData=a[1],this.initChart(),this.pageLoading=!1})).catch((e=>{console.log("here"),console.log(e)}))}};const I=(0,r.Z)(F,[["render",O],["__scopeId","data-v-9860128e"]]);var U=I;const M=[{path:"/",name:"wordcloud",component:U}],$=(0,u.p7)({history:(0,u.r5)(),routes:M});var N=$,B=a(65),H=(0,B.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),K=a(230);a(4415);(0,n.ri)(c).use(H).use(N).use(K.Z).mount("#app")},4654:function(){}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,o){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],o=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,l,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,r=n[0],i=n[1],s=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(s)var u=s(a)}for(t&&t(n);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=this["webpackChunkXLabelCloud"]=this["webpackChunkXLabelCloud"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7580)}));n=a.O(n)})();
//# sourceMappingURL=app.40ec8340.js.map