"use strict";(globalThis["webpackChunkshell_org"]=globalThis["webpackChunkshell_org"]||[]).push([[568],{72568:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ee});var n=a(59835),l=a(86970);const s=e=>((0,n.dD)("data-v-bc8c0c1e"),e=e(),(0,n.Cn)(),e),o={class:"row items-start q-gutter-xs justify-evenly q-pa-none",style:{width:"100%","max-width":"800px","min-width":"300px"}},i={class:"play full-width q-py-md q-px-none"},r={class:"result row text-center items-center justify-center q-py-md q-px-none",id:"kline",ref:"kline"},u={class:"kline-text"},p={class:"slider full-width q-py-none q-px-none"},d=(0,n.Uk)(" 1% "),c=(0,n.Uk)(" 99% "),m={class:"row reverse items-center q-pt-none q-px-none"},y=(0,n.Uk)("Expected Profit:"),w={class:"payout col-12 col-sm-9"},h={class:"row items-center q-pt-none q-px-none"},f={class:"wager col-12 col-sm-9"},b={class:"roll col-12 col-sm-3"},v=(0,n.Uk)(" Invest "),g={key:0,class:"history full-width q-py-md q-px-none"},x=(0,n.Uk)(" Hide History "),_={class:"my-table-details"},T={class:"row items-center no-wrap"},k={class:"text-mono text-h6"},C={class:"text-mono",style:{"font-size":"xx-small"}},W={class:"my-table-details"},B={class:"text-mono"},q={class:"my-table-details"},H={class:"text-mono"},M={class:"my-table-details"},S={class:"row items-center no-wrap"},z={class:"text-h6 text-mono"},I={class:"text-mono",style:{"font-size":"xx-small"}},P={class:"my-table-details"},U={class:"row items-center no-wrap"},D={class:"text-bold text-mono"},Z={class:"my-table-details"},V={class:"row items-center no-wrap"},F={class:"text-mono text-h6"},Q={class:"text-mono",style:{"font-size":"xx-small"}},N={class:"my-table-details"},E={class:"text-mono"},R={class:"my-table-details"},O={class:"text-mono"},j={class:"my-table-details"},A={class:"row items-center no-wrap"},G={class:"text-h6 text-mono"},L={class:"text-mono",style:{"font-size":"xx-small"}},J={class:"my-table-details"},$={class:"row items-center no-wrap"},Y={class:"text-bold text-mono"},K={class:"showWistory full-width q-py-md q-px-none"},X=(0,n.Uk)(" Show History "),ee=(0,n.Uk)(" Hide History "),te=s((()=>(0,n._)("span",{class:"text-h6 q-ml-sm"},"Incorrect blockchain",-1))),ae=s((()=>(0,n._)("span",{class:"q-ml-sm"},"You are currently not connected to the correct network.",-1)));function ne(e,t,a,s,ne,le){const se=(0,n.up)("q-item-section"),oe=(0,n.up)("q-slider"),ie=(0,n.up)("q-item"),re=(0,n.up)("q-item-label"),ue=(0,n.up)("q-btn"),pe=(0,n.up)("q-input"),de=(0,n.up)("q-tab"),ce=(0,n.up)("q-tabs"),me=(0,n.up)("q-th"),ye=(0,n.up)("q-tr"),we=(0,n.up)("q-td"),he=(0,n.up)("q-table"),fe=(0,n.up)("q-tab-panel"),be=(0,n.up)("q-tab-panels"),ve=(0,n.up)("q-avatar"),ge=(0,n.up)("q-space"),xe=(0,n.up)("q-card-section"),_e=(0,n.up)("q-card-actions"),Te=(0,n.up)("q-card"),ke=(0,n.up)("q-dialog"),Ce=(0,n.up)("q-page"),We=(0,n.Q2)("ripple"),Be=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(Ce,{class:"row items-start justify-evenly"},{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n._)("div",i,[(0,n._)("div",r,[(0,n._)("div",u,(0,l.zw)(e.chartTitle),1)],512),(0,n._)("div",p,[(0,n.Wm)(ie,null,{default:(0,n.w5)((()=>[(0,n.Wm)(se,{class:"text-mono",side:""},{default:(0,n.w5)((()=>[d])),_:1}),(0,n.Wm)(se,null,{default:(0,n.w5)((()=>[(0,n.Wm)(oe,{"thumb-color":"positive",modelValue:e.chanceSlide,"onUpdate:modelValue":t[0]||(t[0]=t=>e.chanceSlide=t),onChange:t[1]||(t[1]=t=>{e.chanceSlide=t,e.updateChance()}),"track-size":"8px",step:.1,min:1,max:99,"inner-min":1,"inner-max":99,color:"positive","track-color":"negative",label:"","label-value":"Success Rate: "+e.chanceSlide+"%"},null,8,["modelValue","step","label-value"])])),_:1}),(0,n.Wm)(se,{class:"text-mono",side:""},{default:(0,n.w5)((()=>[c])),_:1})])),_:1})]),(0,n._)("div",m,[(0,n.wy)(((0,n.wg)(),(0,n.j4)(ie,{class:"column text-center text-bold col-12 col-sm-3",clickable:""},{default:(0,n.w5)((()=>[(0,n.Wm)(se,null,{default:(0,n.w5)((()=>[(0,n.Wm)(re,{overline:""},{default:(0,n.w5)((()=>[y])),_:1}),(0,n.Wm)(re,{class:"text-h6 text-bold text-mono"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(parseFloat((e.payout/100).toPrecision(6)))+"x",1)])),_:1})])),_:1})])),_:1})),[[We]]),(0,n._)("div",w,[(0,n.Wm)(ie,null,{default:(0,n.w5)((()=>[(0,n.Wm)(se,{class:"column q-gutter-xs",side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ue,{class:"full-width text-mono",size:"xs",outline:"",label:"MAX",onClick:t[2]||(t[2]=t=>{e.updatePayout(1)})}),(0,n.Wm)(ue,{class:"full-width text-mono",size:"xs",outline:"",label:"MIN",onClick:t[3]||(t[3]=t=>e.updatePayout(2))})])),_:1}),(0,n.Wm)(se,null,{default:(0,n.w5)((()=>[(0,n.Wm)(pe,{filled:"",type:"number",modelValue:e.payout,"onUpdate:modelValue":t[4]||(t[4]=t=>e.payout=t),modelModifiers:{number:!0},onChange:t[5]||(t[5]=t=>e.updatePayout(0)),debounce:"200",label:"Auto Cash Out:","stack-label":"",class:"full-width text-h6 text-mono",suffix:"%"},null,8,["modelValue"])])),_:1}),(0,n.Wm)(se,{class:"column q-gutter-xs",side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ue,{class:"full-width text-mono",size:"xs",outline:"","no-caps":"",label:"2x",onClick:t[6]||(t[6]=t=>e.updatePayout(3))}),(0,n.Wm)(ue,{class:"full-width text-mono",size:"xs",outline:"","no-caps":"",label:"x/2",onClick:t[7]||(t[7]=t=>e.updatePayout(4))})])),_:1})])),_:1})])]),(0,n._)("div",h,[(0,n._)("div",f,[(0,n.Wm)(ie,null,{default:(0,n.w5)((()=>[(0,n.Wm)(se,{class:"column q-gutter-xs",side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ue,{class:"full-width text-mono",size:"xs",outline:"",label:"MAX",onClick:t[8]||(t[8]=t=>e.updateWager(1))}),(0,n.Wm)(ue,{class:"full-width text-mono",size:"xs",outline:"",label:"MIN",onClick:t[9]||(t[9]=t=>e.updateWager(2))})])),_:1}),(0,n.Wm)(se,null,{default:(0,n.w5)((()=>[(0,n.Wm)(pe,{filled:"",type:"number",modelValue:e.wager,"onUpdate:modelValue":t[10]||(t[10]=t=>e.wager=t),modelModifiers:{number:!0},debounce:"200",label:"Invest Amount:","stack-label":"",onChange:t[11]||(t[11]=t=>e.updateWager(0)),class:"full-width text-h6 text-mono",suffix:e.game.symbol},null,8,["modelValue","suffix"])])),_:1}),(0,n.Wm)(se,{class:"column q-gutter-xs",side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ue,{class:"full-width text-mono",size:"xs",outline:"","no-caps":"",label:"2x",onClick:t[12]||(t[12]=t=>e.updateWager(3))}),(0,n.Wm)(ue,{class:"full-width text-mono",size:"xs",outline:"","no-caps":"",label:"x/2",onClick:t[13]||(t[13]=t=>e.updateWager(4))})])),_:1})])),_:1})]),(0,n._)("div",b,[(0,n.Wm)(ue,{"no-caps":"",color:"primary",class:"full-width text-bold text-h6",onClick:t[14]||(t[14]=t=>e.startRoll()),loading:e.betting},{default:(0,n.w5)((()=>[v])),_:1},8,["loading"])])])]),e.showHistory?((0,n.wg)(),(0,n.iD)("div",g,[(0,n.Wm)(ue,{"no-caps":"",flat:"",dense:"",size:"16px",class:"full-width text-bold text-h6 bg-glass",onClick:t[15]||(t[15]=t=>e.showHistory=!1)},{default:(0,n.w5)((()=>[x])),_:1}),((0,n.wg)(),(0,n.j4)(ce,{modelValue:e.tab,"onUpdate:modelValue":t[16]||(t[16]=t=>e.tab=t),key:e.tab,class:"text-grey full-width","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,n.w5)((()=>[(0,n.Wm)(de,{name:"allBets",label:"All Bets"}),(0,n.Wm)(de,{name:"myBets",label:"My Bets"})])),_:1},8,["modelValue"])),(0,n.Wm)(be,{modelValue:e.tab,"onUpdate:modelValue":t[17]||(t[17]=t=>e.tab=t),animated:"",class:"full-width bg-none no-padding-panel"},{default:(0,n.w5)((()=>[(0,n.Wm)(fe,{name:"allBets",class:"q-pa-none"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(he,{"rows-per-page-options":[10],"hide-bottom":"",class:"my-sticky-header-table q-pa-none",rows:e.allBets,columns:e.columns,"row-key":"id",key:e.allBets},{header:(0,n.w5)((e=>[(0,n.Wm)(ye,{props:e},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(t=>((0,n.wg)(),(0,n.j4)(me,{key:t.name,props:e,class:(0,l.C_)("text-white text-bold "+t.name)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.label.toUpperCase()),1)])),_:2},1032,["props","class"])))),128))])),_:2},1032,["props"])])),"body-cell-payout":(0,n.w5)((t=>[(0,n.Wm)(we,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",_,[(0,n.Wm)(ue,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",T,[(0,n._)("div",{class:(0,l.C_)(t.value>0?"texte-white":"text-grey")},[(0,n._)("a",k,(0,l.zw)(e.$n(t.value)),1),(0,n._)("a",C,(0,l.zw)(" "+e.game.symbol),1)],2)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-game":(0,n.w5)((e=>[(0,n.Wm)(we,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",W,[(0,n._)("div",{class:(0,l.C_)(" no-wrap text-h6 items-center "+(e.row.payout>0?"texte-white":"text-grey"))},[(0,n._)("div",B,(0,l.zw)(parseFloat((99e6/e.row.lucky-100).toFixed(2)))+"% ",1)],2)])])),_:2},1032,["props"])])),"body-cell-target":(0,n.w5)((e=>[(0,n.Wm)(we,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",q,[(0,n._)("div",{class:(0,l.C_)(" no-wrap text-h6 items-center "+(e.row.payout>0?"texte-white":"text-grey"))},[(0,n._)("div",H,(0,l.zw)(parseFloat((99e6/e.row.target-100).toFixed(2)))+"% ",1)],2)])])),_:2},1032,["props"])])),"body-cell-wager":(0,n.w5)((t=>[(0,n.Wm)(we,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",M,[(0,n.Wm)(ue,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",S,[(0,n._)("div",{class:(0,l.C_)(t.row.payout>0?"texte-white":"text-grey")},[(0,n._)("a",z,(0,l.zw)(e.$n(t.value)),1),(0,n._)("a",I,(0,l.zw)(" "+e.game.symbol),1)],2)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-player":(0,n.w5)((t=>[(0,n.Wm)(we,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",P,[(0,n.Wm)(ue,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",U,[(0,n._)("div",{class:(0,l.C_)(t.row.payout>0?"texte-white":"text-grey")},[(0,n._)("a",D,(0,l.zw)(e.shortAddress(t.value,6,!0)),1)],2)])])),_:2},1024)])])),_:2},1032,["props"])])),_:1},8,["rows","columns"]))])),_:1}),(0,n.Wm)(fe,{name:"myBets",class:"q-pa-none"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(he,{"rows-per-page-options":[10],"hide-bottom":"",class:"my-sticky-header-table q-pa-none",rows:e.userBets,columns:e.columns,"row-key":"id",key:e.userBets},{header:(0,n.w5)((e=>[(0,n.Wm)(ye,{props:e},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cols,(t=>((0,n.wg)(),(0,n.j4)(me,{key:t.name,props:e,class:(0,l.C_)("text-white text-bold "+t.name)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.label.toUpperCase()),1)])),_:2},1032,["props","class"])))),128))])),_:2},1032,["props"])])),"body-cell-payout":(0,n.w5)((t=>[(0,n.Wm)(we,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",Z,[(0,n.Wm)(ue,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",V,[(0,n._)("div",{class:(0,l.C_)(t.value>0?"texte-white":"text-grey")},[(0,n._)("a",F,(0,l.zw)(e.$n(t.value)),1),(0,n._)("a",Q,(0,l.zw)(" "+e.game.symbol),1)],2)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-game":(0,n.w5)((e=>[(0,n.Wm)(we,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",N,[(0,n._)("div",{class:(0,l.C_)(" no-wrap text-h6 items-center "+(e.row.payout>0?"texte-white":"text-grey"))},[(0,n._)("div",E,(0,l.zw)(parseFloat((99e6/e.row.lucky-100).toFixed(2)))+"% ",1)],2)])])),_:2},1032,["props"])])),"body-cell-target":(0,n.w5)((e=>[(0,n.Wm)(we,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",R,[(0,n._)("div",{class:(0,l.C_)(" no-wrap text-h6 items-center "+(e.row.payout>0?"texte-white":"text-grey"))},[(0,n._)("div",O,(0,l.zw)(parseFloat((99e6/e.row.target-100).toFixed(2)))+"% ",1)],2)])])),_:2},1032,["props"])])),"body-cell-wager":(0,n.w5)((t=>[(0,n.Wm)(we,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",j,[(0,n.Wm)(ue,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",A,[(0,n._)("div",{class:(0,l.C_)(t.row.payout>0?"texte-white":"text-grey")},[(0,n._)("a",G,(0,l.zw)(e.$n(t.value)),1),(0,n._)("a",L,(0,l.zw)(" "+e.game.symbol),1)],2)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-player":(0,n.w5)((t=>[(0,n.Wm)(we,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",J,[(0,n.Wm)(ue,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",$,[(0,n.Wm)(ue,{flat:"",dense:"","icon-right":"las la-play",onClick:a=>e.showCartData(t.row.betId,t.row.lucky,t.row.target)},{default:(0,n.w5)((()=>[(0,n._)("div",{class:(0,l.C_)(t.row.payout>0?"texte-white":"text-grey")},[(0,n._)("a",Y,(0,l.zw)(e.shortAddress(t.value,4,!0)),1)],2)])),_:2},1032,["onClick"])])])),_:2},1024)])])),_:2},1032,["props"])])),_:1},8,["rows","columns"]))])),_:1}),(0,n.Wm)(fe,{name:"how"})])),_:1},8,["modelValue"])])):(0,n.kq)("",!0),(0,n._)("div",K,[e.showHistory?((0,n.wg)(),(0,n.j4)(ue,{key:1,"no-caps":"",flat:"",dense:"",size:"16px",class:"full-width text-bold text-h6 bg-glass",onClick:t[19]||(t[19]=t=>e.showHistory=!1)},{default:(0,n.w5)((()=>[ee])),_:1})):((0,n.wg)(),(0,n.j4)(ue,{key:0,"no-caps":"",flat:"",dense:"",size:"16px",class:"full-width text-bold text-h6 bg-glass",onClick:t[18]||(t[18]=t=>e.showHistory=!0)},{default:(0,n.w5)((()=>[X])),_:1}))])]),(0,n.Wm)(ke,{modelValue:e.switchNet,"onUpdate:modelValue":t[20]||(t[20]=t=>e.switchNet=t),persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Te,null,{default:(0,n.w5)((()=>[(0,n.Wm)(xe,{class:"row items-center q-pb-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(ve,{icon:"signal_wifi_off",color:"primary","text-color":"white",size:"xs"}),te,(0,n.Wm)(ge),(0,n.wy)((0,n.Wm)(ue,{icon:"close",flat:"",round:"",dense:""},null,512),[[Be]])])),_:1}),(0,n.Wm)(xe,{class:"row items-center"},{default:(0,n.w5)((()=>[ae])),_:1}),(0,n.Wm)(_e,{align:"right"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(ue,{class:"full-width",label:"Switch",color:"primary",onClick:e.switchNetwork},null,8,["onClick"]),[[Be]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var le=a(60499),se=a(65457),oe=a(19302),ie=a(29941),re=a(28488),ue=a(30059),pe=a(17779),de=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function o(e){try{r(n.next(e))}catch(t){s(t)}}function i(e){try{r(n["throw"](e))}catch(t){s(t)}}function r(e){e.done?a(e.value):l(e.value).then(o,i)}r((n=n.apply(e,t||[])).next())}))};const ce=a(42379),me={title:"Shell - RUG"},ye=(0,n.aZ)({name:"RugPage",components:{},setup(){const e=(0,oe.Z)();e.dark.set(!0),(0,se.Z)(me);const t=(0,ie.v)();t.getBalance();const a=(0,le.iH)(!1),l=(0,le.iH)(!1),s=window.innerHeight,o=(0,le.iH)("allBets"),i=[{name:"payout",label:"Return",field:"payout",align:"right"},{name:"game",label:"Highest",field:"game",align:"right"},{name:"target",label:"Cash out",field:"target",align:"right"},{name:"wager",label:"Invest",field:"wager",align:"right"},{name:"player",label:"player",field:"player",align:"center"}],r=[{contract:"0x8C2cb69E4B8483CC20E5e580B34ff1Edf45E49De",token:"",symbol:"TT",min:1,max:5e4,startBlock:105892901}],u=(0,le.iH)(100),p=(0,le.iH)(49.5),d=(0,le.iH)(!1),c=(0,le.iH)(0),m=(0,le.iH)(0),y=(0,le.iH)(1);let w=(0,n.Fl)((()=>{let e=r[0];for(let a=0;a<r.length;a++)if(r[a].symbol==t.selectedToken.toUpperCase()){e=r[a];break}return e})),h=(0,n.Fl)((()=>9900/(u.value+100))),f=(0,n.Fl)((()=>1e4*h.value));const b=(0,le.iH)({TT:{}}),v=(0,le.iH)({TT:{}});let g=(0,n.Fl)((()=>{let e=[];for(var t in b.value[w.value.symbol])b.value[w.value.symbol].hasOwnProperty(t)&&e.unshift(b.value[w.value.symbol][t]);return e})),x=(0,n.Fl)((()=>{let e=[];for(var t in v.value[w.value.symbol])v.value[w.value.symbol].hasOwnProperty(t)&&e.unshift(v.value[w.value.symbol][t]);return e}));const _=(0,le.iH)([{open:0,low:0,time:1,high:1,close:1},{open:1,low:1,time:2,high:2,close:2},{open:2,low:2,time:3,high:3,close:3},{open:3,low:3,time:4,high:5,close:5},{open:5,low:5,time:5,high:8,close:8},{open:8,low:8,time:6,high:13,close:13},{open:13,low:13,time:7,high:21,close:21},{open:21,low:21,time:8,high:34,close:34},{open:34,low:34,time:9,high:55,close:55},{open:55,low:55,time:10,high:89,close:89},{open:89,low:89,time:11,high:144,close:144},{open:144,low:144,time:12,high:233,close:233},{open:233,low:233,time:13,high:377,close:377},{open:377,low:377,time:14,high:610,close:610},{open:610,low:610,time:15,high:987,close:987},{open:987,low:987,time:16,high:1597,close:1597},{open:1597,low:1597,time:17,high:2584,close:2584},{open:2584,low:2584,time:18,high:4181,close:4181},{open:4181,low:4181,time:19,high:6765,close:6765},{open:6765,low:6765,time:20,high:10639,close:10639},{open:10639,low:-100,time:21,high:13639,close:0}]);function T(e){for(var t=[],a=0,n=e.length;a<n;a++)t.push({time:e[a].time,value:e[a].high});return t}function k(){if(q.value&&q.value.setData(_.value),H.value){let e=T(_.value);H.value.setData(e)}}const C=(0,le.iH)(0),W=(0,le.iH)("🚀 R U G 🚀");function B(e,a,n){return de(this,void 0,void 0,(function*(){window.scrollTo(0,0),C.value=e;const l=99e6/a-100,s=99e6/n-100;pe.log(a),pe.log("showCartData: #",e,"Hi:",l,"% Sell:",s,"%"),_.value=[{time:1529899e3,open:0,high:l/2500,low:0,close:l/3e3}];let o=[{time:1529899e3,position:"belowBar",color:"#21ba45",shape:"arrowUp",text:"Buy",id:"id1"}];q.value&&q.value.setMarkers(o),k();let i=!1;while(C.value==e&&_.value[_.value.length-1].high<l)yield U(300).then((()=>{let e=parseInt("1529899"+_.value.length.toString().padStart(3,"0")),t=_.value[_.value.length-1].close,a=t+Math.pow(1.25,_.value.length)*l/3e3;a>l?(a=l,o.push({time:e,position:"aboveBar",color:"#c10015",shape:"arrowDown",text:"Highest: +"+Math.floor(l)+"%",id:"id3"}),q.value&&q.value.setMarkers(o),W.value="RUGGED!\n"+parseFloat(a.toFixed(2))+"%"+(s<=l?"🚀":"💥")):W.value="+"+parseFloat(a.toFixed(4))+"%";let n=a>=l?-100:a*(Date.now()%9+90)/100,r={time:e,open:t,high:a,low:t*(Date.now()%20+80)/100,close:n};_.value.push(r),a>=s&&!i&&(o.push({time:e,position:"aboveBar",color:"#1976D2",shape:"arrowDown",text:"Sell: +"+s.toPrecision(3)+"%",id:"id2"}),q.value&&q.value.setMarkers(o),i=!0),k()}));t.getBalance()}))}const q=(0,le.iH)(),H=(0,le.iH)(),M=(0,le.iH)();function S(e){let t=w.value.min,a=w.value.max;switch(e){case 1:y.value=a;break;case 2:y.value=t;break;case 3:y.value*=2;break;case 4:y.value/=2;break;default:break}y.value>a&&(y.value=a),y.value<t&&(y.value=t)}function z(e){let t=1,a=9800;switch(e){case 1:u.value=a;break;case 2:u.value=t;break;case 3:u.value*=2;break;case 4:u.value/=2;break;default:break}u.value>a&&(u.value=a),u.value<t&&(u.value=t),p.value=h.value}function I(){u.value=parseFloat((9900/p.value-100).toPrecision(6))}function P(e,a,n){const l=t.web3;if(!e.removed){const t=e.returnValues,s=t.betId.toString();let o={betId:parseInt(t.betId),payout:parseFloat(l.utils.fromWei(t.bonus)),lucky:parseInt(t.lucky),player:t.player,symbol:"＜",target:parseInt(t.target),wager:parseFloat(l.utils.fromWei(t.wager))};b.value[n][s]=o,a&&(v.value[n][s]=o)}}(0,n.bv)((()=>{var e=(0,ue.C2)(M.value,{width:0,height:280,layout:{backgroundColor:"rgba(255, 255, 255, 0.0)",textColor:"rgba(255, 255, 255, 0.9)"},grid:{vertLines:{color:"rgba(197, 203, 206, 0.5)"},horzLines:{color:"rgba(197, 203, 206, 0.5)"}},crosshair:{mode:ue.rM.Magnet},leftPriceScale:{visible:!0,borderColor:"rgba(197, 203, 206, 0.8)",borderVisible:!0},rightPriceScale:{visible:!0,borderColor:"rgba(197, 203, 206, 0.8)",borderVisible:!0},timeScale:{visible:!1,rightOffset:2,minBarSpacing:20},handleScroll:{vertTouchDrag:!0,horzTouchDrag:!0},localization:{priceFormatter:e=>parseFloat(e.toFixed(6))+"%"}});q.value=e.addCandlestickSeries({upColor:"#21ba45",downColor:"#C10015",borderDownColor:"#C10015",borderUpColor:"#21ba45",wickDownColor:"#C10015",wickUpColor:"#21ba45"}),H.value=e.addLineSeries({color:"rgba(255, 255, 255, 0.25)",lineWidth:4}),k()}));const U=e=>new Promise((t=>setTimeout(t,e)));function D(){return de(this,void 0,void 0,(function*(){const e="Thundercore Mainnet",t="Thunder Token",a="TT",n="https://mainnet-rpc.thundercore.com",l="https://viewblock.io/thundercore",s="0x6C";if("undefined"!==typeof window.ethereum)try{yield window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]}),location.reload()}catch(o){if(pe.log(o),4902===o.code){pe.log("Add Chain");try{yield window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:e,nativeCurrency:{name:t,symbol:a,decimals:18},rpcUrls:[n],blockExplorerUrls:[l]}]}),location.reload()}catch(i){alert(i.message)}}else alert(o.message)}else alert("Need Connect Wallet")}))}function Z(){return de(this,void 0,void 0,(function*(){c.value=0,S(0),z(0),pe.log("Start Roll:"),pe.log("Wager: ",y.value,"Target: ","＜",f.value),108===t.walletNetId?(pe.log("Signg Roll Tx"),"TT"==t.selectedToken.toUpperCase()&&V(f.value,y.value)):yield t.getWalletNet().then((()=>{if(108!==t.walletNetId)return pe.log("Switch Net:"),void(a.value=!0)}))}))}function V(e,a){return de(this,void 0,void 0,(function*(){d.value=!0;const n=t.walletWeb3,l=t.account;if(!n.utils.isAddress(l))return void alert("Need Connect Wallet!");const s=r[0].contract,i=new n.eth.Contract(ce,s);o.value="myBets";let u=i.methods.placeBet(n.utils.toHex(e.toString()),1),p=u.encodeABI();n.eth.estimateGas({from:l,to:s,value:n.utils.toWei(a.toString(),"ether"),data:p}).then((function(e){pe.log("gasAmount: ",e),n.eth.sendTransaction({from:l,to:s,value:n.utils.toWei(a.toString(),"ether"),gas:parseInt((2*e).toString()),gasPrice:25e8,data:p}).on("transactionHash",(e=>{pe.log("transactionHash: ",e)})).on("receipt",(e=>{pe.log("receipt: ",e)})).on("error",(e=>{pe.log("tx placeBet ",e),d.value=!1}))})).catch((function(e){pe.log("estimateGas: ",e),d.value=!1}))}))}function F(){return de(this,void 0,void 0,(function*(){const e=t.web3,a=w.value.contract,n=new e.eth.Contract(ce,a);e.eth.getBlockNumber().then((function(e){return de(this,void 0,void 0,(function*(){let t=e,a=0;while(a<50&&t>w.value.startBlock||t==e){let e=!1;t-=1e5;const l={fromBlock:t};if(yield n.getPastEvents("BetPlaced",l).then((function(e){a+=e.length,e.forEach((e=>{P(e,!1,w.value.symbol)}))})).catch((t=>{pe.error("getPastEvents BetSettled Error:",t),e=!0})),e)break;yield U(100)}pe.log("allBetsHistoy done!",t)}))}))}))}function Q(){return de(this,void 0,void 0,(function*(){const e=t.web3,a=t.account,n=w.value.contract,l=new e.eth.Contract(ce,n);e.eth.getBlockNumber().then((function(e){return de(this,void 0,void 0,(function*(){let t=e,n=0;while(n<50&&t>w.value.startBlock||t==e){let e=!1;t-=1e5;const s={filter:{player:a},fromBlock:t};if(yield l.getPastEvents("BetPlaced",s).then((function(e){n+=e.length,e.forEach((e=>{P(e,e.returnValues.player.toUpperCase()==a.toUpperCase(),w.value.symbol)}))})).catch((t=>{pe.error("getPastEvents BetSettled Error:",t),e=!0})),e)break;yield U(100)}pe.log("userBetsHistoy done!",t)}))}))}))}let N=[];function E(){pe.log("listeners:",N),N&&N.length>0&&N.forEach((e=>{e&&(e.unsubscribe(),pe.log("unsubscribe:",e))}))}function R(){return de(this,void 0,void 0,(function*(){const e=t.web3,a=t.account.toUpperCase(),n=w.value.contract,l=new e.eth.Contract(ce,n),s={fromBlock:"latest"};let o=l.events.BetPlaced(s).on("data",(function(e){if(e){let t=!1;e.returnValues.player.toUpperCase()==a&&(t=!0,c.value=e.returnValues.lucky,B(e.returnValues.betId,c.value,e.returnValues.target),d.value=!1),P(e,t,w.value.symbol)}})).on("changed",(function(e){pe.log("listenBetPlaced changed:",e)})).on("error",(function(e){pe.log("listenBetPlaced Err:",e)})).on("connected",(function(e){pe.log("listenBetPlaced subscription id:",e)}));N.push(o)}))}return{showHistory:l,createChart:ue.C2,kline:M,shortAddress:re.sC,store:t,lucky:c,luckyShow:m,heroHi:s,tab:o,columns:i,games:r,game:w,betting:d,target:f,wager:y,chance:h,chanceSlide:p,payout:u,allBets:g,userBets:x,switchNet:a,updateWager:S,updatePayout:z,updateChance:I,switchNetwork:D,startRoll:Z,showCartData:B,chartTitle:W,allBetsHistoy:F,removeListeners:E,initGame(){F(),Q(),R()},initDate(){localStorage.getItem("RugBetsHistory")&&Object.assign(b.value,JSON.parse(localStorage.getItem("RugBetsHistory")||"")),localStorage.getItem((0,ie.v)().account.concat("-userRugBetsHistory"))&&Object.assign(v.value,JSON.parse(localStorage.getItem((0,ie.v)().account.concat("-userRugBetsHistory"))||""))},storeData(){localStorage.setItem((0,ie.v)().account.concat("-userRugBetsHistory"),JSON.stringify(v.value)),localStorage.setItem("RugBetsHistory",JSON.stringify(b.value))}}},beforeMount(){this.initGame(),this.initDate()},beforeUnmount(){this.removeListeners(),this.storeData()},watch:{betting:function(e){pe.log("betting:",e)}}});var we=a(11639),he=a(69885),fe=a(490),be=a(76749),ve=a(28423),ge=a(33115),xe=a(24455),_e=a(66611),Te=a(47817),ke=a(70900),Ce=a(89800),We=a(84106),Be=a(91903),qe=a(31233),He=a(21682),Me=a(67220),Se=a(32074),ze=a(44458),Ie=a(63190),Pe=a(61357),Ue=a(90136),De=a(11821),Ze=a(51136),Ve=a(62146),Fe=a(69984),Qe=a.n(Fe);const Ne=(0,we.Z)(ye,[["render",ne],["__scopeId","data-v-bc8c0c1e"]]),Ee=Ne;Qe()(ye,"components",{QPage:he.Z,QItem:fe.Z,QItemSection:be.Z,QSlider:ve.Z,QItemLabel:ge.Z,QBtn:xe.Z,QInput:_e.Z,QTabs:Te.Z,QTab:ke.Z,QTabPanels:Ce.Z,QTabPanel:We.Z,QTable:Be.Z,QTr:qe.Z,QTh:He.Z,QTd:Me.Z,QDialog:Se.Z,QCard:ze.Z,QCardSection:Ie.Z,QAvatar:Pe.Z,QSpace:Ue.Z,QCardActions:De.Z}),Qe()(ye,"directives",{Ripple:Ze.Z,ClosePopup:Ve.Z})},42379:e=>{e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"house","type":"address"},{"internalType":"address","name":"member","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"betId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"target","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lucky","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wager","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bonus","type":"uint256"}],"name":"BetPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"added","type":"address"}],"name":"CertifiedAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"removed","type":"address"}],"name":"CertifiedRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fund","type":"uint256"}],"name":"Divest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"fund","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"ReferralBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addCertified","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_betId","type":"uint256"}],"name":"betDetail","outputs":[{"components":[{"internalType":"uint168","name":"blockNum","type":"uint168"},{"internalType":"address","name":"player","type":"address"},{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"lucky","type":"uint256"},{"internalType":"uint256","name":"wager","type":"uint256"},{"internalType":"uint256","name":"bonus","type":"uint256"}],"internalType":"struct GameBase.Bet","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"certifieds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"clear","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidity","type":"uint256"}],"name":"divest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gameInfo","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"isCertified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_referrerId","type":"uint256"}],"name":"placeBet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_player","type":"address"}],"name":"playerDetail","outputs":[{"components":[{"internalType":"uint256","name":"bets","type":"uint256"},{"internalType":"uint256","name":"wager","type":"uint256"},{"internalType":"uint256","name":"bonus","type":"uint256"},{"internalType":"uint256","name":"invested","type":"uint256"}],"internalType":"struct GameBase.Player","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeCertified","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setGameHouse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setHouseEdgeBP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setHouseFraction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setMaxBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setMembership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"}],"name":"setMinBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setPointsRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleGameIsLive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleInvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}}]);