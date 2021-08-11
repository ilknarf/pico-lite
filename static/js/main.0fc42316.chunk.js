(this["webpackJsonppicto-lite"]=this["webpackJsonppicto-lite"]||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r,i,o,c=t(0),a=t(23),l=t(14),u=t(24),d=t(3),s=t(2),f=t(25),j=t(1),b=Object(s.createGlobalStyle)(r||(r=Object(d.a)(["\n  ",'\n  \n  * {\n    font-display: block;\n    font-family: "Roboto", sans-serif;\n  }\n'])),f.normalize),h={primary:"white",secondary:"black",tertiary:"gainsboro",alert:"red",success:"green",info:"blue"},x=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(s.ThemeProvider,Object(u.a)({theme:h},e))]})},m=t(4),O=t(6);!function(e){e[e.Filled=0]="Filled",e[e.Empty=1]="Empty",e[e.Question=2]="Question",e[e.None=3]="None"}(i||(i={})),function(e){e[e.Size5x5=0]="Size5x5",e[e.Size10x10=1]="Size10x10"}(o||(o={}));var p,v,g=t(11),y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.LeftClick;return{type:n,location:e}},S=function(e){return BigInt(e.data.reduce((function(e,n){return e+function(e){return e===i.Filled?"1":"0"}(n)}),"0b")).toString(16)},z=function(e){try{return BigInt(e)}catch(n){return BigInt(0)}},w=function(e){var n=C(e);return{size:e,data:new Array(n).fill(i.Empty)}},k=function(e){switch(e){case o.Size5x5:return 5;case o.Size10x10:return 10}},C=function(e){var n=k(e);return n*n},F=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.LeftClick;return n===v.RightClick?e===i.Empty?i.None:i.Empty:e===i.Empty?i.Filled:i.Empty},L=s.default.div.attrs((function(e){var n=e.sideLength;return{sideLength:n,sideVH:Math.min(10*n,55)}}))(p||(p=Object(d.a)(["\n  display: grid;\n  width: ","vh;\n  height: ","vh;\n  gap: ","%;\n  grid-template-columns: repeat(",", 1fr);\n  background-color: ",";\n  border: solid;\n  border-color: ",";\n  border-radius: 2vh;\n  border-width: 1vh;\n  overflow: hidden;\n  padding: 2vh;\n  // grid layout for solver, unused for builder\n  grid-row: 1/4;\n  grid-column: 2/6;\n"])),(function(e){return e.sideVH}),(function(e){return e.sideVH}),(function(e){return 15/e.sideLength}),(function(e){return e.sideLength}),(function(e){return e.theme.tertiary}),(function(e){return e.theme.secondary}));!function(e){e[e.LeftClick=0]="LeftClick",e[e.RightClick=1]="RightClick"}(v||(v={}));var E,M,R,A,P,T,B,D,I,H,N,V,G,J,Q,X,$,U,q,K,W,Y,Z,_=c.createContext({}),ee=c.createContext([void 0,function(){}]),ne=function(e){var n=Object(c.useState)(void 0),t=Object(O.a)(n,2)[1],r=k(e.size),i=e.cellRender,o=function(){t(void 0)};return Object(j.jsx)(_.Provider,{value:e.dispatch,children:Object(j.jsx)(ee.Provider,{value:n,children:Object(j.jsx)(L,{sideLength:r,onMouseLeave:o,onMouseUp:o,onContextMenu:function(e){return e.preventDefault()},children:e.board.data.map(i)})})})},te=t(16),re=t.n(te),ie=s.default.div(E||(E=Object(d.a)(["\n  background-color: ",";\n\n  transition: ease-in 0.12s;\n  :hover {\n    transform: scale(1.05);\n  }\n"])),(function(e){switch(e.cellState){case i.Empty:return e.theme.primary;case i.None:return e.theme.alert;case i.Filled:return e.theme.secondary;default:return e.theme.primary}})),oe=function(e){return Object(j.jsx)(ie,{cellState:e.cellState,onMouseDown:e.onMouseDown,onMouseEnter:e.onMouseEnter})},ce=function(e){var n=Object(c.useContext)(ee),t=Object(O.a)(n,2),r=t[0],i=t[1];return Object(j.jsx)(oe,{cellState:e.cellState,onMouseDown:function(n){var t=0===n.button?v.LeftClick:v.RightClick;i(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.LeftClick;return{clickedCellState:e,actionType:n}}(e.cellState,t)),e.onAction(t)},onMouseEnter:function(){(null===r||void 0===r?void 0:r.clickedCellState)===e.cellState&&e.onAction(r.actionType)}})},ae=function(e){var n=Object(c.useContext)(_);return Object(j.jsx)(ce,{cellState:e.cellState,onAction:function(){n(y(e.location))}})},le=s.default.div(M||(M=Object(d.a)(["\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n  \n  cursor: pointer;\n  \n  border: solid;\n  border-radius: 1rem;\n  border-color: ","\n  \n  text-align: center;\n  \n  overflow: hidden;\n  box-sizing: border-box;\n"])),(function(e){return e.theme.secondary})),ue=s.default.div(R||(R=Object(d.a)(["\n  background-color: ",";\n  color: ",";\n  padding: 1rem;\n  margin: auto;\n  text-align: center;\n\n  border-left: solid;\n  border-width: 4;\n  border-color: ",";\n\n  transition: ease-in 0.15s;\n\n  font-size: 1.25rem;\n  text-wrap: false;\n\n  ",":hover & {\n    background-color: ",";\n    color: ",";\n  }\n\n  cursor: pointer;\n"])),(function(e){return e.theme.secondary}),(function(e){return e.theme.primary}),(function(e){return e.theme.secondary}),le,(function(e){return e.theme.primary}),(function(e){return e.theme.secondary})),de=s.default.input.attrs({type:"text",onClick:function(e){e.target.select()}})(A||(A=Object(d.a)(["\n  color: ",";\n  padding: 1rem;\n  font-size: 1rem;\n  border: none;\n  flex: 1;\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.theme.secondary})),se=function(e){var n=Object(c.useState)(!1),t=Object(O.a)(n,2),r=t[0],i=t[1];return Object(j.jsxs)(le,{children:[Object(j.jsx)(de,{value:e.val,readOnly:!0}),Object(j.jsx)(ue,{onClick:function(){i(!0),navigator.clipboard.writeText(e.val)},onMouseLeave:function(){i(!1)},children:r?"Copied!":"Share!"})]})},fe=s.default.div(P||(P=Object(d.a)(["\n  padding-left: 1rem;\n"]))),je=function(e,n){return re()(e,{data:Object(g.a)({},n.location,{$apply:function(e){return F(e)}})})},be=function(e){var n=Object(c.useReducer)(je,w(e.size)),t=Object(O.a)(n,2),r=t[0],i=t[1],o=function(e){var n=k(e.size),t=window.location.hostname+"/picto-lite";return"".concat(t,"/#/").concat(n,"x").concat(n,"/").concat(S(e))}(r);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ne,{size:e.size,board:r,dispatch:i,cellRender:function(e,n){return Object(j.jsx)(ae,{cellState:e,location:n},n)}}),Object(j.jsx)(fe,{children:Object(j.jsxs)("p",{children:["How to use: ",Object(j.jsx)("br",{}),"1. Click on cells to create a picogram ",Object(j.jsx)("br",{}),"2. Send the link to share!"]})}),Object(j.jsx)(se,{val:o})]})},he=s.default.div(T||(T=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]))),xe=s.default.div(B||(B=Object(d.a)(["\n  margin: 1rem;\n"]))),me=s.default.div(D||(D=Object(d.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 1rem 0rem;\n  transition: ease-in 0.2s;\n  font-size: 1rem;\n  text-align: center;\n  width: 4rem;\n  user-select: none;\n  cursor: ",";\n"])),(function(e){return e.selected?e.theme.primary:e.theme.secondary}),(function(e){return e.selected?e.theme.secondary:e.theme.primary}),(function(e){return e.selected?"default":"pointer"})),Oe=s.default.div(I||(I=Object(d.a)(["\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  border-color: ",";\n  border: solid;\n"])),(function(e){return e.theme.tertiary})),pe=function(){var e=Object(c.useState)(o.Size5x5),n=Object(O.a)(e,2),t=n[0],r=n[1],i=function(){return Object(j.jsx)(be,{size:t})};return Object(j.jsxs)(he,{children:[Object(j.jsx)(xe,{children:Object(j.jsx)(i,{})}),Object(j.jsxs)(Oe,{children:[Object(j.jsx)(me,{onClick:function(){return r(o.Size5x5)},selected:t===o.Size5x5,children:"5x5"}),Object(j.jsx)(me,{onClick:function(){return r(o.Size10x10)},selected:t===o.Size10x10,children:"10x10"})]})]})},ve=function(e){var n=Object(c.useContext)(_);return Object(j.jsx)(ce,{cellState:e.cellState,onAction:function(t){n(y(e.location,t))}})},ge=s.default.div(H||(H=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n  padding: 2.5vh 0.5vh;\n  margin: 0 1vh;\n\n  grid-column: 1;\n  grid-row: 1/4;\n"]))),ye=s.default.div(N||(N=Object(d.a)(["\n  font-size: 2.5vh;\n  text-wrap: none;\n  color: ",";\n  margin-right: 1vh;\n  user-select: none;\n"])),(function(e){return e.theme.secondary})),Se=function(e,n){for(var t=k(e.size),r=[],o=0,c=0;c<t;c++){var a=c+n*t;e.data[a]===i.Filled?o++:0!==o&&(r.push(o),o=0)}return 0!==o&&r.push(o),0==r.length&&r.push(0),r},ze=function(e){for(var n=e.solution,t=k(n.size),r=Array(t),i=0;i<t;i++)r[i]=Object(j.jsx)(ye,{children:Se(n,i).join(" ")},i);return Object(j.jsx)(ge,{children:r})},we=s.default.div(V||(V=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: flex-start;\n  padding: 0.5vh 1.5vh;\n\n  grid-column: 2/6;\n  grid-row: 4;\n"]))),ke=s.default.div(G||(G=Object(d.a)(["\n  font-size: 2.5vh;\n  text-wrap: none;\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n  color: ",";\n  margin-bottom: 1vh;\n  user-select: none;\n"])),(function(e){return e.theme.secondary})),Ce=function(e,n){for(var t=k(e.size),r=[],o=0,c=0;c<t;c++){var a=n+c*t;e.data[a]===i.Filled?o++:0!==o&&(r.push(o),o=0)}return 0!==o&&r.push(o),0==r.length&&r.push(0),r},Fe=function(e){for(var n=e.solution,t=k(n.size),r=Array(t),i=0;i<t;i++)r[i]=Object(j.jsx)(ke,{children:Ce(n,i).join("")},i);return Object(j.jsx)(we,{children:r})},Le=s.default.div(J||(J=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 5vh;\n"]))),Ee=s.default.div(Q||(Q=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n"]))),Me=s.default.div(X||(X=Object(d.a)(["\n  grid-row: 1/4;\n  grid-column: 4/7;\n\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  align-items: center;\n  z-index: -1;\n\n  border-radius: 4vh;\n  // hide from left edge\n  background-color: ",";\n\n  transition: transform linear 0.4s;\n  ","\n"])),(function(e){return e.theme.success}),(function(e){return e.solved?"transform: translateX(0%)":"transform: translateX(-40%);"})),Re=s.default.p($||($=Object(d.a)(["\n  writing-mode: vertical-rl;\n  font-size: 10vh;\n  color: ",";\n  margin: 0 1.5vh;\n  user-select: none;\n"])),(function(e){return e.theme.primary})),Ae=function(e,n){return re()(e,{data:Object(g.a)({},n.location,{$apply:function(e){return F(e,n.type)}})})},Pe=function(e){var n=e.solution.size,t=Object(c.useState)(!1),r=Object(O.a)(t,2),o=r[0],a=r[1],l=Object(c.useReducer)(Ae,w(n)),u=Object(O.a)(l,2),d=u[0],s=u[1];return Object(c.useEffect)((function(){(function(e,n){if(e.data.length!==n.data.length)return!1;for(var t=0;t<e.data.length;t++){if((r=e.data[t])!==(o=n.data[t])&&(r===i.Filled||o===i.Filled))return!1}var r,o;return!0})(e.solution,d)&&a(!0)}),[e.solution,d]),Object(j.jsx)(Le,{children:Object(j.jsxs)(Ee,{children:[Object(j.jsx)(ze,{solution:e.solution}),Object(j.jsx)(Fe,{solution:e.solution}),Object(j.jsx)(ne,{size:n,board:d,dispatch:s,cellRender:function(e,n){return Object(j.jsx)(ve,{cellState:e,location:n},n)}}),Object(j.jsx)(Me,{solved:o,children:Object(j.jsx)(Re,{children:o&&"Solved!"})})]})})},Te=s.default.div(U||(U=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n"]))),Be=function(){var e=Object(m.g)(),n=e.size,t=function(e,n){var t=C(n);return{size:n,data:z("0x".concat(e)).toString(2).padStart(t,"0").split("").map((function(e){return"1"===e?i.Filled:i.Empty}))}}(e.data,function(e){switch(e){case"5x5":return o.Size5x5;case"10x10":return o.Size10x10;default:return o.Size5x5}}(n));return Object(j.jsx)(Te,{children:Object(j.jsx)(Pe,{solution:t})})},De=function(){return Object(j.jsxs)(m.d,{children:[Object(j.jsx)(m.b,{exact:!0,path:"/",component:pe}),Object(j.jsx)(m.b,{path:"/:size/:data",component:Be}),Object(j.jsx)(m.b,{path:"*",children:Object(j.jsx)(m.a,{to:"/"})})]})},Ie=s.default.div(q||(q=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n\n  background-color: ",";\n  margin-bottom: 1rem;\n"])),(function(e){return e.theme.tertiary})),He=Object(s.default)(l.b)(K||(K=Object(d.a)(["\n  color: ",";\n  text-decoration-color: ",";\n\n  :active {\n    text-decoration-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.secondary}),(function(e){return e.theme.secondary}),(function(e){return e.theme.primary}),(function(e){return e.theme.primary})),Ne=s.default.h1(W||(W=Object(d.a)(["\n  margin: 0;\n  padding: 1rem 2rem;\n"]))),Ve=Object(s.default)(Ne)(Y||(Y=Object(d.a)(["\n  margin-left: auto;\n"]))),Ge=s.default.a(Z||(Z=Object(d.a)(["\n  color: ",";\n  text-decoration-color: ",";\n\n  :active {\n    text-decoration-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.info}),(function(e){return e.theme.info}),(function(e){return e.theme.alert}),(function(e){return e.theme.alert})),Je=function(){return Object(j.jsxs)(Ie,{children:[Object(j.jsx)(Ne,{children:Object(j.jsx)(He,{to:"/",children:"Picto-Lite"})}),Object(j.jsx)(Ve,{children:Object(j.jsx)(Ge,{href:"https://github.com/ilknarf/picto-lite/",children:"Github"})})]})},Qe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),o(e),c(e)}))};a.render(Object(j.jsx)(c.StrictMode,{children:Object(j.jsx)(x,{children:Object(j.jsxs)(l.a,{basename:"/picto-lite",children:[Object(j.jsx)(Je,{}),Object(j.jsx)(De,{})]})})}),document.getElementById("root")),Qe()}},[[39,1,2]]]);
//# sourceMappingURL=main.0fc42316.chunk.js.map