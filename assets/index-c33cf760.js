import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{f as w,g,o as m,c as u,d as s,t as I,u as S,p as x,h as f,r as T,i as d,w as N,j as b}from"./index-df6a868e.js";const k=t=>(x("data-v-dcfc8275"),t=t(),f(),t),B=k(()=>s("span",{class:"linghtPoint"},"_",-1)),V={__name:"index",props:["text","time","awaitTime"],setup(t){const e=t;let o=w("");const a=(n,c,v=!0)=>{let r="",i=0,_=0,l=0;v?(_=1,l=n.length):(_=-1,l=0);let y=setInterval(()=>{i==l&&clearInterval(y),i+=_,r=n.slice(0,i),o.value=r},c)};return a(e.text,e.time,!0),g(e,async(n,c)=>{c?(await a(c.text,c.time,!1),setTimeout(()=>{a(e.text,e.time,!0)},e.awaitTime)):a(e.text,e.time,!0)}),(n,c)=>(m(),u("p",null,[s("span",null,I(S(o)),1),B]))}},$=p(V,[["__scopeId","data-v-dcfc8275"]]);const h=t=>(x("data-v-e31da195"),t=t(),f(),t),C={class:"start",style:{}},P=h(()=>s("div",{class:"btnBox"},[s("div",{class:"btn",style:{margin:"0px 5px"}},"主页"),s("div",{class:"btn",style:{margin:"0px 5px"}},"gitHub")],-1)),j=h(()=>s("footer",null,[s("span",{class:"textStyle"},"my email:17681081091@163.com")],-1)),D={__name:"index",setup(t){return(e,o)=>{const a=T("router-link");return m(),u("div",C,[s("h1",null,[d($,{class:"typeit",text:"路漫漫其修远兮，吾将上下而求索",time:"150",awaitTime:"2000"})]),d(a,{class:"textStyle",to:"/home"},{default:N(()=>[b("跳转主页")]),_:1}),P,j])}}},q=p(D,[["__scopeId","data-v-e31da195"]]);export{q as default};
