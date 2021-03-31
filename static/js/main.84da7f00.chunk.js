(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"GameInit_wrapper__SQYNb",form:"GameInit_form__2YSly",blockDescription:"GameInit_blockDescription__286oG",radioWrapper:"GameInit_radioWrapper__3FPYn",radio:"GameInit_radio__2voHY",button:"GameInit_button__1e8ta",link:"GameInit_link__fHDx8"}},15:function(e,t,a){e.exports={wrapper:"GameMenu_wrapper__6O_15",linkWrapper:"GameMenu_linkWrapper__2GzF2",link:"GameMenu_link__ZUTmx"}},16:function(e,t,a){e.exports={wrapper:"Game_wrapper__24xsQ",status:"Game_status__36FjT",buttonWrapper:"Game_buttonWrapper__38zdo",link:"Game_link__380BN"}},17:function(e,t,a){e.exports={wrapper:"Board_wrapper__3qSjZ",row:"Board_row__3Pzi1"}},18:function(e,t,a){e.exports={wrapper:"GameInfo_wrapper__3eY1c",title:"GameInfo_title__2WMLo",bold:"GameInfo_bold__1T_o_"}},27:function(e,t,a){e.exports={wrapper:"Cell_wrapper__3KVQY"}},32:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(25),c=a.n(r),s=a(8),i=(a(32),a(33),a(15)),l=a.n(i),o=a.p+"static/media/tic-tac-toe.ef367f47.svg",m=a(0),j=function(e){return Object(m.jsxs)("article",{className:l.a.wrapper,children:[Object(m.jsx)("img",{src:o,alt:"tic-tac-toe game",width:"150px",height:"auto"}),Object(m.jsxs)("div",{className:l.a.linkWrapper,children:[Object(m.jsx)(s.b,{to:"/game/pvp",className:l.a.link,children:"player vs player"}),Object(m.jsx)(s.b,{to:"/game/pvb",className:l.a.link,children:"player vs bot"})]})]})},u=a(2),b=a(4),p=a(14),d=a(9),O=a(10),f=a.n(O),x=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{htmlFor:e.id,children:e.title}),Object(m.jsx)("input",{id:e.id,type:"text",placeholder:"Name",onChange:function(t){return e.handleSetName(t,e.id)}})]})},v=function(e){var t,a;t="pvp"===e.mode?["Player 1","Player 2"]:"Player";var r=Object(n.useState)(t),c=Object(d.a)(r,2),i=c[0],l=c[1],o=Object(n.useState)("X"),j=Object(d.a)(o,2),u=j[0],O=j[1],v=function(t,a){var n=t.currentTarget.value;"pvp"===e.mode?l("firstName"===a?function(e){return e[0]=n,Object(p.a)(e)}:function(e){return e[1]=n,Object(p.a)(e)}):l(n)};return Object(m.jsxs)("div",{className:f.a.wrapper,children:[Object(m.jsxs)("div",{className:f.a.form,children:["pvp"!==e.mode?Object(m.jsx)(x,{id:"name",title:"Player name",handleSetName:v}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{id:"firstName",title:"First player name",handleSetName:v}),Object(m.jsx)(x,{id:"secondName",title:"Second player name",handleSetName:v})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:f.a.blockDescription,children:"First player plays for"}),Object(m.jsxs)("div",{className:f.a.radioWrapper,children:[Object(m.jsxs)("div",{className:f.a.radio,children:[Object(m.jsx)("input",{type:"radio",id:"xItem",name:"drone",value:"X",onChange:function(e){O(e.currentTarget.value)}}),Object(m.jsx)("label",{htmlFor:"xItem",children:"X"})]}),Object(m.jsxs)("div",{className:f.a.radio,children:[Object(m.jsx)("input",{type:"radio",id:"oItem",name:"drone",value:"O",onChange:function(e){O(e.currentTarget.value)}}),Object(m.jsx)("label",{htmlFor:"oItem",children:"O"})]})]})]}),Object(m.jsx)("button",{className:f.a.button,onClick:function(){a={firstPlayer:{name:i||"Player",item:u,wins:0},secondPlayer:{name:"Bot",item:"X"===u?"O":"X",wins:0}},"pvp"===e.mode&&(a={firstPlayer:Object(b.a)(Object(b.a)({},a.firstPlayer),{},{name:i[0]}),secondPlayer:Object(b.a)(Object(b.a)({},a.secondPlayer),{},{name:i[1]})}),e.initGame(a)},children:"Submit"})]}),Object(m.jsx)(s.b,{to:"/",className:f.a.link,children:"Back to menu"})]})},_=a(16),h=a.n(_),y=a(17),N=a.n(y),w=a(27),g=a.n(w),P=function(e){return Object(m.jsx)("button",{className:g.a.wrapper,onClick:function(){e.makeMove(e.index)},children:e.value})},k=function(e){var t=function(t){return Object(m.jsx)(P,{index:t,value:e.cells[t],makeMove:e.makeMove},t)};return Object(m.jsxs)("section",{className:N.a.wrapper,children:[Object(m.jsxs)("div",{className:N.a.row,children:[t(0),t(1),t(2)]}),Object(m.jsxs)("div",{className:N.a.row,children:[t(3),t(4),t(5)]}),Object(m.jsxs)("div",{className:N.a.row,children:[t(6),t(7),t(8)]})]})},S=a(18),G=a.n(S),I=function(e){var t=e.players.firstPlayer,a=e.players.secondPlayer;return Object(m.jsxs)("aside",{className:G.a.wrapper,children:[Object(m.jsx)("h2",{className:G.a.title,children:"Score:"}),Object(m.jsxs)("p",{children:[t.name," (",t.item,"): ",Object(m.jsx)("span",{className:G.a.bold,children:t.wins})]}),Object(m.jsxs)("p",{children:[a.name," (",a.item,"): ",Object(m.jsx)("span",{className:G.a.bold,children:a.wins})]})]})},F=function(e){return Object(m.jsxs)("div",{className:h.a.wrapper,children:[Object(m.jsxs)("p",{className:h.a.status,children:["Game status: ",e.gameStatus," ",Object(m.jsx)("br",{}),"during"!==e.gameStatus?null:"".concat(e.currentItem," moves, ").concat(e.moveNumber," move")]}),"during"!==e.gameStatus?Object(m.jsx)("div",{className:h.a.buttonWrapper,children:Object(m.jsx)("button",{onClick:function(){return e.playAgain()},children:"Play again"})}):Object(m.jsx)(k,{moveNumber:e.moveNumber,setMoveNumber:e.setMoveNumber,players:e.players,gameStatus:e.gameStatus,setGameStatus:e.setGameStatus,cells:e.cells,makeMove:e.makeMove}),Object(m.jsx)(I,{players:e.players}),Object(m.jsx)(s.b,{to:"/",className:h.a.link,children:"Back to menu"})]})},M=Object(u.e)((function(e){var t=e.match.params.gamestatus||"pvp",a=Object(n.useState)([" "," "," "," "," "," "," "," "," "]),r=Object(d.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)({firstPlayer:{name:null,item:null,wins:0},secondPlayer:{name:null,item:null,wins:0}}),l=Object(d.a)(i,2),o=l[0],j=l[1],u=Object(n.useState)(1),O=Object(d.a)(u,2),f=O[0],x=O[1],_=Object(n.useState)("during"),h=Object(d.a)(_,2),y=h[0],N=h[1],w=f%2?o.firstPlayer.item:o.secondPlayer.item,g=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];Object(n.useEffect)((function(){k()}),[f]);var P=function(e){" "===c[e]&&(s((function(t){return t[e]=w,Object(p.a)(t)})),x(f+1))};"pvb"===t&&f%2===0&&function(e,t,a,n){for(var r=0;r<t.length;r++){var c=Object(d.a)(t[r],3),s=c[0],i=c[1],l=c[2];if((" "===e[s]||e[s]===n.secondPlayer.item)&&(" "===e[i]||e[i]===n.secondPlayer.item)&&(" "===e[l]||e[l]===n.secondPlayer.item))return" "===e[s]?a(s):" "===e[i]?a(i):a(l)}a(e.indexOf(" "))}(c,g,P,o);var k=function(){for(var e=function(e){var t=Object(d.a)(g[e],3),a=t[0],n=t[1],r=t[2];if(" "!==c[a]&&c[a]===c[n]&&c[a]===c[r])return N("".concat(c[a]," wins")),j((function(e){return o.firstPlayer.item===c[a]?Object(b.a)(Object(b.a)({},e),{},{firstPlayer:Object(b.a)(Object(b.a)({},e.firstPlayer),{},{wins:e.firstPlayer.wins+1})}):Object(b.a)(Object(b.a)({},e),{},{secondPlayer:Object(b.a)(Object(b.a)({},e.secondPlayer),{},{wins:e.secondPlayer.wins+1})})})),{v:!0}},t=0;t<g.length;t++){var a=e(t);if("object"===typeof a)return a.v}10===f&&N("draw")};return o.firstPlayer.name?Object(m.jsx)(F,{mode:t,gameStatus:y,setGameStatus:N,players:o,cells:c,currentItem:w,moveNumber:f,setMoveNumber:x,makeMove:P,playAgain:function(){s([" "," "," "," "," "," "," "," "," "]),x(1),N("during")}}):Object(m.jsx)(v,{initGame:j,mode:t})})),C=function(e){return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(m.jsx)(j,{})}}),Object(m.jsx)(u.a,{path:"/game/:gamestatus?",render:function(){return Object(m.jsx)(M,{})}})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};c.a.render(Object(m.jsx)(s.a,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),W()}},[[40,1,2]]]);
//# sourceMappingURL=main.84da7f00.chunk.js.map