(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),c=t(4),l=t(2),i=function(e){var n=e.filterText,t=e.handleFilter;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.handleNameChange,t=e.handleNumberChange,a=e.addPerson,u=e.newName,o=e.newNumber;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:u,onChange:n})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:o,onChange:t})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){return r.a.createElement(r.a.Fragment,null,e.name," ",e.number)},f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{name:e.name,number:e.number}))},s=function(e){var n=e.personsToShow,t=e.handleClick;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("p",{key:e.name},r.a.createElement(f,{key:e.name,name:e.name,number:e.number}),r.a.createElement("button",{onClick:function(){return t(e)}},"delete"))})))},h=t(3),b=t.n(h),p="https://shrouded-oasis-83048.herokuapp.com/api/persons",E=function(){return b.a.get(p).then((function(e){return e.data}))},v=function(e){return b.a.post(p,e).then((function(e){return e.data}))},g=function(e){return b.a.delete("".concat(p,"/").concat(e))},w=function(e,n){return b.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},j={background:"lightgray",color:"green",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},y={background:"lightgray",color:"red",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},O=function(e){var n=e.message,t=e.errorState;return null===n?null:"no"===t?r.a.createElement("div",{style:j,className:"notification"},n):"yes"===t?r.a.createElement("div",{style:y},n):void 0},S=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),f=d[0],h=d[1],b=Object(a.useState)(""),p=Object(l.a)(b,2),j=p[0],y=p[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),C=k[0],N=k[1],T=Object(a.useState)(null),F=Object(l.a)(T,2),B=F[0],P=F[1],x=Object(a.useState)("no"),z=Object(l.a)(x,2),D=z[0],I=z[1];Object(a.useEffect)((function(){E().then((function(e){u(e)}))}),[]);var J=C?t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())})):t;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(O,{message:B,errorState:D}),r.a.createElement(i,{value:C,handleFilter:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{addPerson:function(e){e.preventDefault();var n={name:f,key:f,number:j};if(t.find((function(e){return e.name===f}))){if(window.confirm("".concat(f," is already in the phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===f})),r=Object(c.a)(Object(c.a)({},a),{},{number:j});w(a.id,r).then((function(e){u(t.map((function(n){return n.id!==a.id?n:e}))),P("updated the number for ".concat(f)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){P("Information of ".concat(f," has already been removed from the server")),I("yes")}),5e3)}}else v(n).then((function(e){u(t.concat(e)),h(""),y(""),P("added ".concat(f)),setTimeout((function(){P(null)}),5e3)}))},handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){y(e.target.value)},newName:f,newNumber:j}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{personsToShow:J,handleClick:function(e){window.confirm("Delete ".concat(e.name," ?"))&&g(e.id).then((function(n){u(t.filter((function(n){return n.id!==e.id})))})),P("deleted ".concat(e.name)),setTimeout((function(){P(null)}),5e3)}}))};o.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d3760007.chunk.js.map