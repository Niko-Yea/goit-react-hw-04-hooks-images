(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGallery:"styles_ImageGallery__pKh35",loader:"styles_loader__1dMMc"}},13:function(e,t,a){e.exports={ImageGalleryItem:"styles_ImageGalleryItem__zGrf5",ImageGalleryItemImage:"styles_ImageGalleryItemImage__Qpr_F"}},14:function(e,t,a){e.exports={Overlay:"styles_Overlay__mzuFD",Modal:"styles_Modal__3erlH"}},16:function(e,t,a){e.exports={Searchbar:"styles_Searchbar__30C8F"}},19:function(e,t,a){e.exports={Button:"styles_Button__1akWp"}},20:function(e,t,a){e.exports={App:"styles_App__fFNuF"}},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(9),o=a.n(s),c=a(3),i=a(4),u=a(6),l=a(5),h=a(16),p=a.n(h),m=a(0),d=function(e){var t=e.children;return Object(m.jsx)("header",{className:p.a.Searchbar,children:t})},g=a(17),f=a(8),y=a.n(f),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handlerInputChange=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(g.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.inputValue.trim()&&(e.props.onSubmit(e.state),e.formReset())},e.formReset=function(){e.setState({inputValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:y.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:y.a.SearchFormButton,children:Object(m.jsx)("span",{className:y.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{onChange:this.handlerInputChange,value:e,name:"inputValue",className:y.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})}}]),a}(n.Component),j=a(7),v=a.n(j),O=a(15),_=a(10),x=a(18),I=a.n(x),S=(a(47),a(19)),k=a.n(S),w=function(e){var t=e.onClick;return Object(m.jsx)("button",{className:k.a.Button,onClick:t,type:"button",children:"Load More"})},C=function(){function e(){Object(c.a)(this,e),this.searchQuery="",this.page=1}return Object(i.a)(e,[{key:"fetchImg",value:function(){var e=Object(_.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"21803734-353a7aae41d2d9aadf1e5ce14",t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(this.searchQuery,"&page=").concat(this.page,"&per_page=12&key=").concat("21803734-353a7aae41d2d9aadf1e5ce14"),e.prev=2,e.next=5,fetch(t);case 5:return a=e.sent,e.next=8,a.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",console.log(e.t0));case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"pageNum",get:function(){return this.page}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}}]),e}(),F=a(12),M=a.n(F),L=new C,B=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={apiResponse:[],isLoading:!1},e.onButtonClick=function(){L.incrementPage(),e.fetchImg()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.searchQuery,n=this.props.searchQuery;L.query=n,a!==n&&(this.setState({apiResponse:[]}),L.resetPage(),this.fetchImg()),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"fetchImg",value:function(){var e=Object(_.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,L.fetchImg();case 3:t=e.sent,this.setState((function(e){return{apiResponse:[].concat(Object(O.a)(e.apiResponse),Object(O.a)(t.hits))}})),this.props.apiResponse(this.state.apiResponse),this.setState({isLoading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.isLoading,t=this.state.apiResponse.length;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:M.a.ImageGallery,children:this.props.children}),e&&Object(m.jsx)(I.a,{type:"ThreeDots",color:"#3f51b5",height:40,width:40,className:M.a.loader}),0===t||e?"":Object(m.jsx)(w,{onClick:this.onButtonClick})]})}}]),a}(n.Component),N=a(13),R=a.n(N),Q=function(e){var t=e.item,a=e.showModal,n=e.getLargeImg;return Object(m.jsx)("li",{className:R.a.ImageGalleryItem,onClick:function(){a(),n(t.largeImageURL)},children:Object(m.jsx)("img",{src:t.webformatURL,alt:t.tags,className:R.a.ImageGalleryItemImage})})},G=a(14),A=a.n(G),D=document.querySelector("#modal-root"),H=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).hanleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hanleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hanleKeyDown)}},{key:"render",value:function(){var e=this.props.item;return Object(s.createPortal)(Object(m.jsx)("div",{className:A.a.Overlay,onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:A.a.Modal,children:Object(m.jsx)("img",{src:e,alt:e})})}),D)}}]),a}(n.Component),V=a(20),E=a.n(V),K=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",items:[],showModal:!1,modalImg:""},e.formSubmitHandler=function(t){var a=t.inputValue;e.setState({searchQuery:a})},e.apiResponseHandler=function(t){e.setState({items:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.getLargeImg=function(t){e.setState({modalImg:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.searchQuery,n=t.showModal,r=t.modalImg,s=t.items;return Object(m.jsxs)("div",{className:E.a.App,children:[Object(m.jsx)(d,{children:Object(m.jsx)(b,{onSubmit:this.formSubmitHandler})}),Object(m.jsx)(B,{searchQuery:a,apiResponse:this.apiResponseHandler,children:s.map((function(t){return Object(m.jsx)(Q,{item:t,showModal:e.toggleModal,getLargeImg:e.getLargeImg},t.id)}))}),n&&Object(m.jsx)(H,{item:r,onClose:this.toggleModal})]})}}]),a}(n.Component);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={SearchForm:"styles_SearchForm__2mZ7H",SearchFormButton:"styles_SearchFormButton__ZhKmF",SearchFormButtonLabel:"styles_SearchFormButtonLabel__l4u2h",SearchFormInput:"styles_SearchFormInput__17ABZ"}}},[[48,1,2]]]);
//# sourceMappingURL=main.19634110.chunk.js.map