(this["webpackJsonppage-builder"]=this["webpackJsonppage-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(2),s=n(1),a=n.n(s),c=n(4),r=n.n(c),o=(n(15),n(16),n(3)),l=n(5),u=n(7),d=n(8),m=n(10),j=n(9),f=n(0),p=a.a.createContext("page"),g=window.localStorage.getItem("listItem"),x=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(t){var s;return Object(u.a)(this,n),(s=e.call(this,t)).state={showForm:!1,edit:!1,selectedIndex:null,formInput:{type:"",text:"",x:0,y:0,size:16,weight:400},itemList:null!==g?JSON.parse(g):[],setItemList:function(){if(s.state.edit){var t=Object(l.a)(s.state.itemList);t[s.state.selectedIndex]=s.state.formInput,s.setState({itemList:t,edit:!1},(function(){return window.localStorage.setItem("listItem",JSON.stringify(s.state.itemList))}))}else s.setState({itemList:[].concat(Object(l.a)(s.state.itemList),[{type:s.state.formInput.type,text:s.state.formInput.text,x:s.state.formInput.x,y:s.state.formInput.y,size:s.state.formInput.size,weight:s.state.formInput.weight}]),edit:!1},(function(){return window.localStorage.setItem("listItem",JSON.stringify(s.state.itemList))}));s.state.setSelectedIndex(null)},onDrop:function(t,e){var n=Object(l.a)(s.state.itemList);n[s.state.selectedIndex].x=t,n[s.state.selectedIndex].y=e,s.setState({itemList:n,edit:!1}),s.state.setSelectedIndex(null),window.localStorage.setItem("listItem",JSON.stringify(s.state.itemList))},delItemList:function(t){var e=s.state.itemList;e.splice(t,1),s.setState({itemList:e}),s.state.setSelectedIndex(null),window.localStorage.setItem("listItem",JSON.stringify(s.state.itemList))},editForm:function(){s.setState({formInput:s.state.itemList[s.state.selectedIndex]})},toggleForm:function(){s.setState((function(t){return{showForm:!t.showForm}}))},setSelectedIndex:function(t){s.setState({selectedIndex:t})},setFormValue:function(t,e){s.setState({formInput:Object(i.a)(Object(i.a)({},s.state.formInput),{},Object(o.a)({},t,e))})},setForm:function(t,e){s.setState({formInput:Object(i.a)(Object(i.a)({},s.state.formInput),{},{x:t,y:e})})},setEdit:function(t){s.setState({edit:t})}},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)(p.Provider,{value:this.state,children:this.props.children})}}]),n}(a.a.Component),b=function(t,e){return Object(f.jsx)(p.Consumer,{children:function(n){return Object(f.jsx)(t,Object(i.a)(Object(i.a)({},n),e))}})},h=(n(18),function(t){var e=document.getElementById("form-root");return r.a.createPortal(Object(f.jsx)("div",{className:"form-wrapper",children:Object(f.jsxs)("div",{className:"form-container",children:[Object(f.jsxs)("div",{className:"header",children:["Edit  ".concat("p"===t.formInput.type?"Label":t.formInput.type),Object(f.jsx)("span",{className:"close",onClick:function(){t.toggleForm(),t.setSelectedIndex(null)},children:"x"})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("div",{className:"title",children:"Text"}),Object(f.jsx)("input",{name:"text",onChange:function(e){return t.setFormValue(e.target.name,e.target.value)},value:t.formInput.text})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("div",{className:"title",children:"X"}),Object(f.jsx)("input",{name:"x",onChange:function(e){return t.setFormValue(e.target.name,e.target.value)},value:t.formInput.x})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("div",{className:"title",children:"Y"}),Object(f.jsx)("input",{name:"y",onChange:function(e){return t.setFormValue(e.target.name,e.target.value)},value:t.formInput.y})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("div",{className:"title",children:"Font Size"}),Object(f.jsx)("input",{name:"size",onChange:function(e){return t.setFormValue(e.target.name,e.target.value)},value:t.formInput.size})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("div",{className:"title",children:"Font Weight"}),Object(f.jsx)("input",{name:"weight",onChange:function(e){return t.setFormValue(e.target.name,e.target.value)},value:t.formInput.weight})]}),Object(f.jsx)("div",{className:"field",children:Object(f.jsx)("div",{className:"btn",onClick:function(){return t.setItemList(),void t.toggleForm()},children:"Save changes"})})]})}),e)}),O=(n(19),function(t){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"canvas-wrapper",id:"canvas",onDragOver:function(t){t.stopPropagation(),t.preventDefault()},onDrop:function(e){t.edit?t.onDrop(e.clientX,e.clientY):(t.setForm(e.clientX,e.clientY),t.toggleForm())},children:t.itemList.map((function(e,n){return Object(f.jsx)(e.type,{className:"each-list ".concat(t.selectedIndex===n?"selected":""),onClick:function(){t.setEdit(!0),t.setSelectedIndex(n)},onKeyDown:function(e){!function(e,n){46===e.keyCode&&(t.delItemList(n),t.setEdit(!1)),"Enter"===e.key&&(t.editForm(),t.toggleForm())}(e,n)},tabIndex:"p"===t.type?0:1,draggable:!0,onDragStart:function(){t.setEdit(!0),t.setSelectedIndex(n)},id:n,style:{position:"absolute",left:"".concat(e.x,"px"),top:"".concat(e.y,"px"),fontSize:"".concat(e.size,"px"),fontWeight:e.weight},children:"input"!==e.type?e.text:null},n)}))}),t.showForm?b(h):null]})}),I=(n(20),function(t){var e=function(e){t.setFormValue("type",e),t.setEdit(!1)};return Object(f.jsxs)("div",{className:"comp-wrapper",children:[Object(f.jsx)("div",{className:"header",children:"BLOCKS"}),Object(f.jsx)("div",{className:"comp-item",draggable:"true",id:"p",onDragStart:function(t){return e(t.target.id)},children:"Label"}),Object(f.jsx)("div",{className:"comp-item",draggable:"true",id:"input",onDragStart:function(t){return e(t.target.id)},children:"Input"}),Object(f.jsx)("div",{className:"comp-item",draggable:"true",id:"button",onDragStart:function(t){return e(t.target.id)},children:"Button"})]})});var v=function(t){return Object(f.jsxs)("div",{className:"App",children:[b(O),b(I)]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),a(t),c(t)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{children:Object(f.jsx)(p.Consumer,{children:function(t){return Object(f.jsx)(v,Object(i.a)({},t))}})})}),document.getElementById("root")),S()}],[[21,1,2]]]);
//# sourceMappingURL=main.79c2779b.chunk.js.map