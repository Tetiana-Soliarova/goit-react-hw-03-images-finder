(this["webpackJsonpgoit-react-hw-03-images-finder"]=this["webpackJsonpgoit-react-hw-03-images-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"modal_Overlay__2frDA",Modal:"modal_Modal__3TdIe",text:"modal_text__31WGr"}},12:function(e,t,a){e.exports={button:"button_button__qa9gj"}},14:function(e,t,a){e.exports={loader:"loader_loader__2mjNU"}},19:function(e,t,a){},20:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),c=a.n(r),s=(a(19),a(3)),i=a(4),l=a(6),u=a(5),h=(a(20),a(7)),m=a.n(h),d=a(0),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={tagsName:" "},e.hendleNameChange=function(t){e.setState({tagsName:t.currentTarget.value.toLowerCase()})},e.hendleSubmit=function(t){t.preventDefault(),""!==e.state.tagsName.trim()?(e.props.onSubmit(e.state.tagsName),e.setState({tagsName:""})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u044b\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:m.a.Searchbar,children:Object(d.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.hendleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(d.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.tagsName,onChange:this.hendleNameChange})]})})}}]),a}(n.Component),b=a(9);function p(e){var t=e.images,a=e.onClick;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{onClick:a,src:e.webformatURL,"data-sourse":e.largeImageURL,alt:e.tags})},e.id)}))})}var j=a(12),f=a.n(j);function O(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",className:f.a.button,"data-action":"load-more",onClick:t,children:"Load more"})}var v=a(13),S=a.n(v),y=(a(43),a(14)),x=a.n(y),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:x.a.loader,children:Object(d.jsx)(S.a,{type:"Circles",color:"#00BFFF",height:80,width:80})})}}]),a}(o.a.Component),N=a(11),w=a.n(N),C=document.querySelector("#modal-root"),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",(function(t){"Escape"===t.code&&e.props.onClose(t)}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("keydown",(function(t){console.log(t.code),"Escape"===t.code&&e.props.onClose(t)}))}},{key:"render",value:function(){return Object(r.createPortal)(Object(d.jsx)("div",{className:w.a.Overlay,children:Object(d.jsx)("div",{className:w.a.Modal,children:Object(d.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),C)}}]),a}(n.Component),F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],loading:!1,error:null,page:1,largeImageURL:null,showModal:!1},e.fetchImagesApi=function(){fetch("https://pixabay.com/api/?q=".concat(e.props.tagsName,"&page=").concat(e.state.page,"&key=").concat("19244879-147a84bd8a529ac8c96d916bd","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u0430\u043d\u044b\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat(e.state.tagsName,"\u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")))})).then((function(t){return e.setState({images:Object(b.a)(t.hits),page:e.state.page+1})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.fetchImages=function(){fetch("https://pixabay.com/api/?q=".concat(e.props.tagsName,"&page=").concat(e.state.page,"&key=").concat("19244879-147a84bd8a529ac8c96d916bd","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0434\u0430\u043d\u044b\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat(e.state.tagsName,"\u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")))})).then((function(t){return e.setState((function(e){return{images:[].concat(Object(b.a)(e.images),Object(b.a)(t.hits)),page:e.page+1}}))}),e.onScrollTo()).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.toggleModalCloseOpen=function(t){var a=t.target.dataset.sourse;e.setState((function(e){return{showModal:!e.showModal,largeImageURL:a}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.tagsName!==this.props.tagsName&&(this.setState({loading:!0,images:[]}),this.fetchImagesApi())}},{key:"onScrollTo",value:function(){var e=document.body.scrollHeight;setTimeout((function(){window.scrollTo({top:e,left:0,behavior:"smooth"})}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.images,n=e.loading;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("ul",{children:[t&&Object(d.jsx)("h1",{children:t.message}),Object(d.jsx)(p,{images:this.state.images,onClick:this.toggleModalCloseOpen})]}),n&&Object(d.jsx)(_,{}),a.length>0&&!n&&Object(d.jsx)(O,{onClick:this.fetchImages}),this.state.showModal&&Object(d.jsx)(k,{onClose:this.toggleModalCloseOpen,largeImageURL:this.state.largeImageURL})]})}}]),a}(n.Component),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={tagsName:" ",images:[]},e.hendleFormSubmit=function(t){console.log(t),e.setState({tagsName:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{onSubmit:this.hendleFormSubmit}),Object(d.jsx)(F,{tagsName:this.state.tagsName})]})}}]),a}(n.Component);c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"searchbar_Searchbar__MuhsP",SearchForm:"searchbar_SearchForm__2BrtL",SearchFormButton:"searchbar_SearchFormButton__h_7Ez",SearchFormButtonLabel:"searchbar_SearchFormButtonLabel__2o6CX",SearchFormInput:"searchbar_SearchFormInput__1xld9"}}},[[44,1,2]]]);
//# sourceMappingURL=main.92be1c1b.chunk.js.map