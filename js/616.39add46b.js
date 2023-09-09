"use strict";(globalThis["webpackChunkshell_org"]=globalThis["webpackChunkshell_org"]||[]).push([[616],{62616:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var a=n(59835),s=n(86970);const o={class:"row items-start q-gutter-xs justify-evenly q-pa-none",style:{width:"100%","max-width":"800px","min-width":"300px"}},l={class:"full-width q-py-md q-px-none"},r={class:"column"},i={class:"q-pt-md"},u=["src"],d={class:"column"},p=(0,a.Uk)(" transfer ");function c(e,t,n,c,m,y){const f=(0,a.up)("q-input"),b=(0,a.up)("q-item-section"),w=(0,a.up)("q-icon"),v=(0,a.up)("q-avatar"),h=(0,a.up)("q-item"),g=(0,a.up)("q-list"),k=(0,a.up)("q-menu"),T=(0,a.up)("q-btn"),x=(0,a.up)("q-page"),_=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(x,{class:"row items-start justify-evenly"},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",l,[(0,a._)("div",r,[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{filled:"",type:"text",modelValue:c.transferTo,"onUpdate:modelValue":t[0]||(t[0]=e=>c.transferTo=e),modelModifiers:{string:!0},debounce:"200",label:"Address:","stack-label":"",class:"full-width text-h6 text-mono"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{filled:"",type:"number",modelValue:c.transferAmount,"onUpdate:modelValue":t[1]||(t[1]=e=>c.transferAmount=e),modelModifiers:{number:!0},debounce:"200",label:"Balance: "+c.tokenBalance,"stack-label":"",class:"full-width text-h6 text-mono"},{append:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(T,{dense:"",flat:"",color:"white"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(c.store.selectedToken.toUpperCase())+" ",1),(0,a.Wm)(w,{class:"q-pl-sm",name:"img:tokens/"+c.store.selectedToken.toLocaleLowerCase()+".png"},null,8,["name"]),(0,a.Wm)(w,{class:"q-pl-sm",name:"las la-angle-down",size:"12px",color:"grey"}),(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.tokenList,(e=>((0,a.wg)(),(0,a.j4)(g,{key:e,style:{"min-width":"100px"}},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(h,{clickable:"",class:"q-pl-xs",onClick:t=>{c.store.selectedToken=e,c.getBalance()}},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{size:"md"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:"tokens/"+e+".png"},null,8,u)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[_]])])),_:2},1024)))),128))])),_:1})])),_:1})])])),_:1},8,["modelValue","label"])])),_:1})])),_:1})]),(0,a._)("div",d,[(0,a.Wm)(T,{"no-caps":"",color:"primary",class:"full-width text-bold text-h6",onClick:t[2]||(t[2]=e=>c.transfer())},{default:(0,a.w5)((()=>[p])),_:1})])])])])),_:1})}var m=n(60499),y=n(65457),f=n(19302),b=n(29941),w=n(17779),v=function(e,t,n,a){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function l(e){try{i(a.next(e))}catch(t){o(t)}}function r(e){try{i(a["throw"](e))}catch(t){o(t)}}function i(e){e.done?n(e.value):s(e.value).then(l,r)}i((a=a.apply(e,t||[])).next())}))};const h=n(67489),g=n(66472),k={title:"Backend"},T={name:"BackendPage",meta:k,components:{},setup(){const e=(0,f.Z)();e.dark.set(!0),(0,y.Z)(k);const t=(0,b.v)(),n=t.web3;var s=0,o=0,l=(0,m.iH)(10),r=(0,m.iH)("0xc9a3c2CAB0C03f07B1F2f6E5db5064874c53e3BD"),i=[{name:"RUG",address:"0x3e9e07701d8e7f305d0b99f33f3302a0106ed6c7",balance:(0,m.iH)(["0","0","0"])},{name:"DICE",address:"0xd9777c70820ec8deb49b71bb374ff49b9a455a4b",balance:(0,m.iH)(["0","0","0"])}],u=(0,a.Fl)((()=>{var e=[];for(let n=0;n<t.token.length;n++)e.push(t.token[n].symbol);return e})),d=(0,a.Fl)((()=>{var e=t.selectedToken.toUpperCase(),n="0";switch(e){case"BUSD":n=i[s].balance.value[1];case"SHELL":n=i[s].balance.value[0];default:n=i[s].balance.value[2]}return n+" "+e}));function p(){return v(this,void 0,void 0,(function*(){w.log("updateVault"),c()}))}function c(){return v(this,void 0,void 0,(function*(){const e=t.selectedToken.toUpperCase();if("TT"==e){const e=yield n.eth.getBalance(i[s].address),t=n.utils.fromWei(e,"ether");return i[s].balance.value[2]=t,w.log("ETH Balance of",i[s].name," is: ",t),e}{const a="BUSD"==e?1:0,o=t.token[a].contract,l=new n.eth.Contract(h,o),r=yield l.methods.balanceOf(i[s].address).call(),u=n.utils.fromWei(r,"ether");return i[s].balance.value[a]=u,w.log(e,"Balance of",i[s].name,"is: ",u),r}}))}function T(){return v(this,void 0,void 0,(function*(){const e=t.web3,a="SHELL"==t.selectedToken.toUpperCase()?0:"BUSD"==t.selectedToken.toUpperCase()?1:2,o=n.utils.toWei(l.value.toString(),"ether"),u=i[s].address,d=t.token[a].contract,p=new n.eth.Contract(g,u);w.log("tokenAddress:",d);let c=p.methods.transfer(d,r,o),m=c.encodeABI();e.eth.sendTransaction({from:t.account,to:i[s].address,value:0,gas:15e4,gasPrice:t.gasPrice,data:m}).on("transactionHash",(e=>{w.log("transactionHash: ",e)})).on("receipt",(e=>{w.log("receipt: ",e)})).on("error",(e=>{w.log("tx transfer",e)}))}))}return c(),{store:t,tokenList:u,tokenBalance:d,currentVault:s,currentToken:o,transferAmount:l,transferTo:r,transfer:T,updateVault:p,getBalance:c}}};var x=n(11639),_=n(69885),B=n(490),q=n(76749),C=n(66611),M=n(24455),W=n(22857),U=n(97858),Z=n(13246),H=n(61357),G=n(62146),L=n(69984),Q=n.n(L);const A=(0,x.Z)(T,[["render",c]]),V=A;Q()(T,"components",{QPage:_.Z,QItem:B.Z,QItemSection:q.Z,QInput:C.Z,QBtn:M.Z,QIcon:W.Z,QMenu:U.Z,QList:Z.Z,QAvatar:H.Z}),Q()(T,"directives",{ClosePopup:G.Z})},66472:e=>{e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"newGame","type":"address"}],"name":"addGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newGame","type":"address"}],"name":"GameAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"removedGame","type":"address"}],"name":"GameRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"receiveETH","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"game","type":"address"}],"name":"removeGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleGameIsLive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"games","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"isGame","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')}}]);