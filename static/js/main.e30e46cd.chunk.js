(this.webpackJsonppokemon_version_3=this.webpackJsonppokemon_version_3||[]).push([[0],{156:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(13),s=n.n(i),r=n(15),o=n(8),j=n(9),l=(n(156),n(3));function b(){return Object(l.jsx)("div",{})}var m=n(330),d=n(329),O=c.a.createContext({}),h=O.Provider,x=O;var u=n(291),g=n(331),p=n(292),S=n(340),f=n(337),y=n(325);function v(){var e=Object(a.useContext)(x),t=e.pokemonState,n=e.pokemonStatsState,c=e.userStatsState,i=e.animationState,s=Object(j.a)(t,2),r=s[0],b=(s[1],Object(j.a)(n,2)),O=b[0],h=(b[1],Object(j.a)(c,2)),v=h[0],k=h[1],P=Object(j.a)(i,2),C=P[0],N=(P[1],r.name,r.id),w=r.height,_=r.sprites.front_default,G=Object(j.a)(r.types,1)[0].type.name,T=r.type2,H=(O.namePS,O.idPS),z=O.heightPS,B=O.imgPS,I=O.type1PS,W=O.type2PS,A=(v.guesses,v.totalHints),L=v.imageHints,M=(v.correct,v.wrong,function(){var e=Object(a.useContext)(x),t=(e.pokemonState,e.pokemonStatsState),n=Object(j.a)(t,2),c=n[0],i=n[1];return c.namePS,c.idPS,c.heightPS,c.imgPS,c.type1PS,c.type2PS,{handlePokemonStatsName:function(){i(Object(o.a)(Object(o.a)({},c),{},{namePS:!0}))},handlePokemonStatsId:function(){i(Object(o.a)(Object(o.a)({},c),{},{idPS:!0}))},handlePokemonStatsHeight:function(){i(Object(o.a)(Object(o.a)({},c),{},{heightPS:!0}))},handlePokemonStatsImg:function(){i(Object(o.a)(Object(o.a)({},c),{},{imgPS:!0}))},handlePokemonStatsTypes1:function(){i(Object(o.a)(Object(o.a)({},c),{},{type1PS:!0}))},handlePokemonStatsTypes2:function(){i(Object(o.a)(Object(o.a)({},c),{},{type2PS:!0}))}}}()),R=(M.handlePokemonStatsName,M.handlePokemonStatsImg),D=M.handlePokemonStatsId,E=M.handlePokemonStatsHeight,J=M.handlePokemonStatsTypes1,U=M.handlePokemonStatsTypes2,q=Object(S.a)("hintAnimation1","hintAnimation2"),F=Object(j.a)(q,2),K=(F[0],F[1],function(e){return e.charAt(0).toUpperCase()+e.slice(1)});return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(y.a,{maxWidth:"sm",children:[Object(l.jsx)(u.a,{align:"center",variant:"h5",children:"Step 1: Choose your hints"}),Object(l.jsx)(f.a.div,{variants:{animationOne:{rotate:360,transition:{duration:.3}},animationTwo:{rotate:0,transition:{duration:.3}}},animate:C,children:Object(l.jsx)(p.a,{children:Object(l.jsxs)(d.a,{className:"container",container:!0,direction:"row",style:{paddingTop:40,paddingBottom:40,marginTop:30,marginBottom:30},children:[Object(l.jsxs)(d.a,{item:!0,xs:9,container:!0,direction:"row",spacing:6,children:[Object(l.jsxs)(d.a,{container:!0,children:[Object(l.jsx)(d.a,{item:!0,xs:2}),Object(l.jsx)(d.a,{item:!0,xs:4,children:Object(l.jsx)(m.a,{size:"small",variant:"contained",color:"primary",className:"hint_button",onClick:function(){D(),k(Object(o.a)(Object(o.a)({},v),{},{totalHints:A+1}))},children:"Id"})}),Object(l.jsx)(d.a,{container:!0,justify:"flex-start",item:!0,xs:!0,children:Object(l.jsx)("div",{children:H?Object(l.jsx)(u.a,{align:"center",children:N}):Object(l.jsx)(u.a,{align:"center",children:"..."})})})]}),Object(l.jsxs)(d.a,{container:!0,children:[Object(l.jsx)(d.a,{item:!0,xs:2}),Object(l.jsx)(d.a,{item:!0,xs:4,children:Object(l.jsx)(m.a,{className:"hint_button",size:"small",variant:"contained",color:"primary",onClick:function(){k(Object(o.a)(Object(o.a)({},v),{},{totalHints:A+1})),E()},children:"Height"})}),Object(l.jsx)(d.a,{container:!0,justify:"flex-start",item:!0,xs:!0,children:Object(l.jsx)("div",{children:z?Object(l.jsx)(u.a,{align:"center",children:w}):Object(l.jsx)(u.a,{align:"center",children:"..."})})})]}),Object(l.jsxs)(d.a,{container:!0,children:[Object(l.jsx)(d.a,{item:!0,xs:2}),Object(l.jsx)(d.a,{item:!0,xs:4,children:Object(l.jsx)(m.a,{className:"hint_button",size:"small",variant:"contained",color:"primary",onClick:function(){k(Object(o.a)(Object(o.a)({},v),{},{totalHints:A+1})),J()},children:"Type 1"})}),Object(l.jsx)(d.a,{container:!0,justify:"flex-start",item:!0,xs:!0,children:Object(l.jsx)("div",{children:I?Object(l.jsx)(u.a,{align:"center",children:K(G)}):Object(l.jsx)(u.a,{align:"center",children:"..."})})})]}),Object(l.jsxs)(d.a,{container:!0,children:[Object(l.jsx)(d.a,{item:!0,xs:2}),Object(l.jsx)(d.a,{item:!0,xs:4,children:Object(l.jsx)(m.a,{className:"hint_button",size:"small",variant:"contained",color:"primary",onClick:function(){k(Object(o.a)(Object(o.a)({},v),{},{totalHints:A+1})),U()},children:"Type 2"})}),Object(l.jsx)(d.a,{container:!0,justify:"flex-start",item:!0,xs:!0,children:Object(l.jsx)("div",{children:W?Object(l.jsx)(u.a,{align:"center",children:K(T)}):Object(l.jsx)(u.a,{align:"center",children:"..."})})})]})]}),Object(l.jsxs)(d.a,{item:!0,xs:3,container:!0,direction:"row",children:[Object(l.jsx)(d.a,{container:!0,justify:"flex-start",item:!0,xs:12,direction:"column",children:Object(l.jsx)(m.a,{className:"hint_button imgHint",size:"small",variant:"contained",color:"primary",onClick:function(){k(Object(o.a)(Object(o.a)({},v),{},{imageHints:L+1,totalHints:A+1})),R()},children:"Img"})}),Object(l.jsx)(d.a,{container:!0,justify:"center",item:!0,xs:12,children:B?Object(l.jsx)(g.a,{style:{height:100,width:100,margin:"auto"},image:_}):Object(l.jsx)(u.a,{align:"center",style:{height:100,width:100,margin:"auto"},children:"..."})})]})]})})})]})})}var k=n(134),P=n.n(k),C=function(e,t,n,a,c,i,s){var r=Math.floor(Math.random()*(i.secondNumber-i.firstNumber+1)+i.firstNumber),j="https://pokeapi.co/api/v2/pokemon/".concat(r);P.a.get(j).then((function(e){var a=e.data;2===a.types.length?t(Object(o.a)(Object(o.a)({},a),{},{type2:a.types[1].type.name})):t(Object(o.a)(Object(o.a)({},a),{},{type2:"Only 1 type"})),n({namePS:!1,idPS:!1,heightPS:!1,imgPS:!1,type1PS:!1,type2PS:!1}),s()}))},N=n(338),w=n(74);function _(){var e=Object(a.useContext)(x),t=e.pokemonState,n=e.pokemonStatsState,c=e.allPokemonState,i=e.userGuessState,s=e.userStatsState,b=e.urlState,O=e.animationState,h=Object(j.a)(t,2),g=h[0],S=h[1],f=Object(j.a)(n,2),v=(f[0],f[1]),k=Object(j.a)(c,2),P=k[0],_=k[1],G=Object(j.a)(i,2),T=G[0],H=G[1],z=Object(j.a)(s,2),B=z[0],I=z[1],W=Object(j.a)(b,2),A=W[0],L=(W[1],Object(j.a)(O,2)),M=(L[0],L[1]),R=B.guesses,D=B.wrong,E=B.correct,J=Object(a.useState)(!1),U=Object(j.a)(J,2),q=(U[0],U[1]),F=Object(w.b)(),K=F.enqueueSnackbar;F.closeSnackbar;return Object(l.jsx)("div",{children:Object(l.jsxs)(y.a,{maxWidth:"sm",children:[Object(l.jsx)(u.a,{align:"center",variant:"h5",children:"Step 2: Guess which pokemon"}),Object(l.jsx)(p.a,{children:Object(l.jsxs)(d.a,{className:"container",style:{height:210,paddingTop:40,paddingBottom:40,marginTop:30,marginBottom:30},container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,children:[Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(N.a,{label:"Who's that pokemon?",variant:"outlined",onChange:function(e){H(e.target.value)},type:"text",value:T})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{variant:"contained",className:"main_button",color:"secondary",onClick:function(){!function(){if(T)if(T.toLowerCase()===g.name){q(!0),K("Thats correct!",{variant:"success",autoHideDuration:3e3}),I(Object(o.a)(Object(o.a)({},B),{},{correct:E+1,guesses:R+1}));var e=Object(o.a)(Object(o.a)({},g),{},{answer:"correct"});_([e].concat(Object(r.a)(P))),C(g,S,v,_,P,A,M),H("")}else K("Wrong",{variant:"error",autoHideDuration:1e3}),q(!1),I(Object(o.a)(Object(o.a)({},B),{},{wrong:D+1,guesses:R+1}))}()},children:"Submit"})})]})})]})})}var G=n(335),T=n(336),H=n(333),z=n(339);function B(){var e=Object(a.useContext)(x).allPokemonState,t=Object(j.a)(e,2),n=t[0],i=(t[1],c.a.useState(!0)),s=Object(j.a)(i,2),r=s[0],o=s[1];return Object(l.jsx)(y.a,{maxWidth:"sm",children:Object(l.jsx)(G.a,{children:Object(l.jsxs)("div",{style:{textAlign:"center"},className:"container scrollAllPokemon",children:[Object(l.jsx)(T.a,{control:Object(l.jsx)(z.a,{checked:r,onChange:function(){o((function(e){return!e}))}}),label:"Show previous pokemon"}),Object(l.jsx)(d.a,{container:!0,justify:"center",component:"div",children:n.map((function(e,t){return Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(H.a,{in:r,children:Object(l.jsxs)(p.a,{className:e.answer,elevation:3,style:{margin:10},children:[Object(l.jsx)(u.a,{align:"center",children:(n=e.name,n.charAt(0).toUpperCase()+n.slice(1))}),Object(l.jsx)(g.a,{style:{height:100,width:100,margin:"auto"},image:e.sprites.front_default})]})})},t);var n}))})]})})})}var I=n(334),W=Object(I.a)((function(e){return{marginBottom:{marginBottom:10},start:{textAlign:"center"}}}));function A(){var e=Object(a.useContext)(x).urlState,t=Object(j.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!0),i=Object(j.a)(c,2),s=i[0],r=i[1],o=Object(a.useState)("Generation 1 is active"),b=Object(j.a)(o,2),O=b[0],h=b[1],g=function(e,t){n({firstNumber:e,secondNumber:t})},p=function(e){h("".concat(e," is active"))},S=W();return Object(l.jsx)(y.a,{maxWidth:"sm",children:Object(l.jsx)(G.a,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(T.a,{control:Object(l.jsx)(z.a,{checked:s,onChange:function(){r((function(e){return!e}))}}),label:"Switch generation"}),Object(l.jsx)(H.a,{in:s,children:Object(l.jsxs)(d.a,{container:!0,justify:"center",spacing:3,className:S.marginBottom,children:[Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{onClick:function(){g(1,151),p("Generation 1")},className:"hint_button",variant:"contained",size:"small",color:"primary",children:"Gen 1"})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{onClick:function(){g(152,251),p("Generation 2")},className:"hint_button",variant:"contained",size:"small",color:"primary",children:"Gen 2"})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{onClick:function(){g(252,386),p("Generation 3")},className:"hint_button",variant:"contained",size:"small",color:"primary",children:"Gen 3"})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{onClick:function(){g(387,493),p("Generation 4")},className:"hint_button",variant:"contained",size:"small",color:"primary",children:"Gen 4"})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{onClick:function(){g(494,649),p("Generation 5")},className:"hint_button",variant:"contained",size:"small",color:"primary",children:"Gen 5"})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{onClick:function(){g(650,721),p("Generation 6")},className:"hint_button",variant:"contained",size:"small",color:"primary",children:"Gen 6"})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{onClick:function(){g(722,809),p("Generation 7")},className:"hint_button",variant:"contained",size:"small",color:"primary",children:"Gen 7"})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{onClick:function(){g(810,898),p("Generation 8")},className:"hint_button",variant:"contained",size:"small",color:"primary",children:"Gen 8"})}),Object(l.jsx)(d.a,{item:!0,xs:12,children:Object(l.jsx)(u.a,{align:"center",children:O})})]})})]})})})}var L=n(138);function M(){var e=Object(a.useContext)(x),t=e.userStatsState,n=e.allPokemonState,c=Object(j.a)(t,2),i=c[0],s=(c[1],Object(j.a)(n,2)),r=s[0],o=(s[1],i.guesses),b=i.totalHints,m=i.imageHints,d=i.correct,O=i.wrong,h=Object(a.useState)(!0),u=Object(j.a)(h,2),g=u[0],p=u[1],S={labels:["Guesses","Wrong guesses","Correct guesses","Total hints","Image hints","Total pokemon"],datasets:[{axis:"y",label:"My statistics",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],borderWidth:1,data:[o,O,d,b,m,r.length]}]};return Object(l.jsx)(y.a,{maxWidth:"sm",children:Object(l.jsx)(G.a,{children:Object(l.jsxs)("div",{style:{textAlign:"center"},className:"container",children:[Object(l.jsx)(T.a,{control:Object(l.jsx)(z.a,{checked:g,onChange:function(){p((function(e){return!e}))}}),label:"Show statistics chart"}),Object(l.jsx)(H.a,{in:g,children:Object(l.jsx)(L.a,{data:S})})]})})})}var R=n(137),D=n.n(R),E=n(332);function J(){var e=Object(S.a)("animationOne","animationTwo"),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({firstNumber:1,secondNumber:151}),s=Object(j.a)(i,2),O=s[0],x=s[1],u=Object(a.useState)(),g=Object(j.a)(u,2),p=g[0],y=g[1],k=Object(a.useState)({guesses:0,totalHints:0,imageHints:0,correct:0,wrong:0}),P=Object(j.a)(k,2),N=P[0],G=P[1],T=Object(a.useState)(!1),H=Object(j.a)(T,2),z=(H[0],H[1]),I=Object(a.useState)([]),W=Object(j.a)(I,2),L=W[0],R=W[1],J=Object(a.useState)({namePS:!1,idPS:!1,heightPS:!1,imgPS:!1,type1PS:!1,type2PS:!1}),U=Object(j.a)(J,2),q=U[0],F=U[1],K=Object(a.useState)({name:"",id:"",height:"",types:[{type:{name:""}},{type:{name:"Only 1 type"}}],sprites:{front_default:""}}),Q=Object(j.a)(K,2),V=Q[0],X=Q[1];return Object(a.useEffect)((function(){z(!0),C(V,X,F,R,L,O,c)}),[]),Object(l.jsx)("div",{className:"background",children:Object(l.jsx)(h,{value:{pokemonState:[V,X],pokemonStatsState:[q,F],userGuessState:[p,y],allPokemonState:[L,R],userStatsState:[N,G],urlState:[O,x],animationState:[n,c]},children:Object(l.jsxs)(w.a,{maxSnack:3,anchorOrigin:{vertical:"bottom",horizontal:"center"},TransitionComponent:E.a,children:[Object(l.jsx)(d.a,{container:!0,justify:"center",spacing:0,children:Object(l.jsx)(d.a,{item:!0,children:Object(l.jsx)(m.a,{className:"main_button marginButton",component:f.a.div,whileTap:{scale:1.2},size:"large",variant:"contained",color:"secondary",endIcon:Object(l.jsx)(D.a,{}),onClick:function(){var e=Object(o.a)(Object(o.a)({},V),{},{answer:"wrong"});C(V,X,F,R,L,O,c),R([e].concat(Object(r.a)(L)))},children:"Next pokemon"})})}),Object(l.jsx)(b,{}),Object(l.jsxs)(d.a,{container:!0,direction:"row",justify:"center",alignContent:"center",alignItems:"center",spacing:0,children:[Object(l.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(l.jsx)(v,{})}),Object(l.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(l.jsx)(_,{})}),Object(l.jsxs)(d.a,{container:!0,direction:"row",justify:"flex-start",alignContent:"flex-start",alignItems:"flex-start",children:[Object(l.jsx)(d.a,{container:!0,justify:"center",item:!0,xs:12,md:4,style:{paddingLeft:16,paddingRight:16,marginTop:20,marginBottom:20},children:Object(l.jsx)(B,{})}),Object(l.jsx)(d.a,{container:!0,justify:"center",item:!0,xs:12,md:4,style:{paddingLeft:16,paddingRight:16,marginTop:20,marginBottom:20},children:Object(l.jsx)(M,{})}),Object(l.jsx)(d.a,{container:!0,justify:"center",item:!0,xs:12,md:4,style:{paddingLeft:16,paddingRight:16,marginTop:20,marginBottom:20},children:Object(l.jsx)(A,{})})]})]})]})})})}s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root"))}},[[289,1,2]]]);
//# sourceMappingURL=main.e30e46cd.chunk.js.map