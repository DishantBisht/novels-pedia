(this["webpackJsonpnovel-pedia"]=this["webpackJsonpnovel-pedia"]||[]).push([[0],{104:function(e,t,s){},105:function(e,t,s){},157:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(2),c=s.n(a),r=s(16),o=s.n(r),i=(s(101),s(102),s(103),s(104),s(21)),l=s(22),j=s(24),d=s(23),b=(s(105),s(8)),h=(s(94),s(9)),m=s(158),u=s(159);var O=function(e){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(m.a,{className:"container",children:Object(n.jsx)(u.a,{active:!0,children:Object(n.jsx)(h.b,{children:"Home"})})})}),Object(n.jsxs)("div",{className:"col-12 col-md-12",children:[Object(n.jsx)("h2",{children:"A Guide to different aspects of this site..."}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"Give about page a read if you have some extra time to spare"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"The Books page contains a list of novels you may have read. Click on any to see the details. Feel free to add a comment too."}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"The Contact page allows you send a feedback to us. Though you can only send us a feedback if you are logged in. It will be stored in our Db."})]})]})},x=s(160),f=s(161);var p=function(e){return e.leaders,Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)(m.a,{className:"container",children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(h.b,{to:"/home",children:"Home"})}),Object(n.jsx)(u.a,{active:!0,children:"About Us"})]})}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsxs)("div",{className:"col-12 col-md-12",children:[Object(n.jsx)("h2",{children:"Hi there!"}),Object(n.jsx)("p",{children:"This website was designed for the sole purpose of showcasing my skills as a MERN stack Developer. Plaese Do read the guide on the home page to understand the aspects of this website. Have a nice day!"}),Object(n.jsx)("p",{children:"Do read the random quote.."})]}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(x.a,{children:Object(n.jsx)(f.a,{className:"bg-faded",children:Object(n.jsxs)("blockquote",{className:"blockquote",children:[Object(n.jsx)("p",{className:"mb-0",children:"It is a far, far better thing that I do, than I have ever done; it is a far, far better rest I go to than I have ever known."}),Object(n.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(n.jsx)("cite",{title:"Source Title",children:"A Tale of Two Cities, Charles Dickens"})]})]})})})})]})]})},g=s(162),v=s(163),N=s(164),k=function(){return Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(n.jsx)("p",{children:"Loading . . ."})]})};function y(e){var t=e.book;return Object(n.jsx)(h.b,{to:"/books/".concat(t._id),children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(g.a,{className:"img-fluid",width:"100%",height:"100%",src:t.image,alt:t.name}),Object(n.jsx)(v.a,{children:Object(n.jsx)(N.a,{className:"btn btn-light",children:t.name})})]},t._id)})}var w=function(e){var t=e.books.books.map((function(e){return Object(n.jsx)("div",{className:"col-12 col-sm-5 m-1 card-deck",children:Object(n.jsx)(y,{book:e})})}));return e.books.isLoading?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(k,{})})}):e.books.errMess?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h4",{children:e.books.errMess})})})}):Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(h.b,{to:"/home",children:"Home"})}),Object(n.jsx)(u.a,{active:!0,children:"Books"})]})}),Object(n.jsx)("div",{className:"row",children:t})]})},S=s(17),M=s(165),L=s(166),C=s(167),F=s(168),E=s(11),T=function(e){return e&&e.length},I=function(e){return function(t){return!t||t.length<=e}},A=function(e){return function(t){return t&&t.length>=e}},U=function(e){return!isNaN(Number(e))},D=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},q=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(l.a)(s,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)(m.a,{className:"container",children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(h.b,{to:"/home",children:"Home"})}),Object(n.jsx)(u.a,{active:!0,children:"Contact Us"})]})}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsx)("div",{className:"col-12 col-sm-4 offset-sm-1",children:Object(n.jsxs)("address",{children:["UPES",Object(n.jsx)("br",{}),"Dehradun",Object(n.jsx)("br",{}),"INDIA",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-envelope"}),": ",Object(n.jsx)("a",{href:"mailto:DishantBisht32@gmail.com",children:"DishantBisht32@gmail.com"})]})}),Object(n.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(n.jsxs)("div",{className:"btn-group",role:"group",children:[Object(n.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(n.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(n.jsxs)("a",{role:"button",className:"btn btn-info",href:"/contact",children:[Object(n.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(n.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(n.jsx)("i",{className:"fa fa-envelope"})," Email"]})]})})]}),Object(n.jsxs)("div",{className:"row row-content",children:[Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:"Send us your Feedback"}),Object(n.jsx)("hr",{})]}),Object(n.jsx)("div",{className:"col-12 col-md-9",children:Object(n.jsxs)(E.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(n.jsxs)(M.a,{className:"form-group",children:[Object(n.jsx)(L.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(n.jsxs)(C.a,{md:10,children:[Object(n.jsx)(E.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:T,minLength:A(3),maxLength:I(15)}}),Object(n.jsx)(E.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters. ",maxLength:"Must be 15 characters or less. "}})]})]}),Object(n.jsxs)(M.a,{className:"form-group",children:[Object(n.jsx)(L.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(n.jsxs)(C.a,{md:10,children:[Object(n.jsx)(E.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:T,minLength:A(3),maxLength:I(15)}}),Object(n.jsx)(E.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters. ",maxLength:"Must be 15 characters or less. "}})]})]}),Object(n.jsxs)(M.a,{className:"form-group",children:[Object(n.jsx)(L.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(n.jsxs)(C.a,{md:10,children:[Object(n.jsx)(E.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:T,minLength:A(3),maxLength:I(15),isNumber:U}}),Object(n.jsx)(E.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers. ",maxLength:"Must be 15 numbers or less. ",isNumber:"Must be a number. "}})]})]}),Object(n.jsxs)(M.a,{className:"form-group",children:[Object(n.jsx)(L.a,{htmlFor:"email",md:2,children:"Email"}),Object(n.jsxs)(C.a,{md:10,children:[Object(n.jsx)(E.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:T,validEmail:D}}),Object(n.jsx)(E.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required. ",validEmail:"Invalid Email Address. "}})]})]}),Object(n.jsxs)(M.a,{className:"form-group",children:[Object(n.jsx)(C.a,{md:{size:6,offset:2},children:Object(n.jsx)("div",{className:"form-check",children:Object(n.jsxs)(L.a,{check:!0,children:[Object(n.jsx)(E.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(n.jsx)("strong",{children:"May we contact you?"})]})})}),Object(n.jsx)(C.a,{md:{size:3,offset:1},children:Object(n.jsxs)(E.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(n.jsx)("option",{children:"Tel."}),Object(n.jsx)("option",{children:"Email"})]})})]}),Object(n.jsxs)(M.a,{className:"form-group",children:[Object(n.jsx)(L.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(n.jsx)(C.a,{md:10,children:Object(n.jsx)(E.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(n.jsx)(M.a,{className:"form-group",children:Object(n.jsx)(C.a,{md:{size:10,offset:2},children:Object(n.jsx)(F.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(a.Component),P=s(182),R=s(169),B=s(170),_=s(171),J=s(56),H=function(e){return e&&e.length},G=function(e){return function(t){return!t||t.length<=e}},Y=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).toggleModal=n.toggleModal.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n.state={isModalOpen:!1},n}return Object(l.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.bookId,e.author,e.rating,e.comment),alert("Please! Refresh The page")}},{key:"render",value:function(){var e,t=this;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)(F.a,{onClick:this.toggleModal,outline:!0,className:"offset-2 btn-info",children:[Object(n.jsx)("span",{className:"fa fa-lg fa-pencil"})," Submit Comment"]}),Object(n.jsxs)(P.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(n.jsx)(R.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(n.jsx)(B.a,{children:Object(n.jsxs)(E.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(n.jsx)(L.a,{htmlFor:"rating",children:"Rating"}),Object(n.jsx)(M.a,{className:"form-group",children:Object(n.jsx)(C.a,{className:"col-12",children:Object(n.jsxs)(E.Control.select,{model:".rating",name:"rating",default:"3",className:"custom-select col-md-12 from-control",children:[Object(n.jsx)("option",{children:"1"}),Object(n.jsx)("option",{children:"2"}),Object(n.jsx)("option",{children:"3"}),Object(n.jsx)("option",{children:"4"}),Object(n.jsx)("option",{children:"5"})]})})}),Object(n.jsx)(L.a,{htmlFor:"author",children:"Your name"}),Object(n.jsx)(M.a,{className:"form-group",children:Object(n.jsxs)(C.a,{md:12,children:[Object(n.jsx)(E.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:H,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:G(15)}}),Object(n.jsx)(E.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 chracters",maxLength:"Must be 15 characters or less"}})]})}),Object(n.jsx)(L.a,{htmlFor:"comment",children:"Comment"}),Object(n.jsx)(M.a,{className:"form-group",children:Object(n.jsx)(C.a,{children:Object(n.jsx)(E.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})}),Object(n.jsx)(M.a,{className:"form-group",children:Object(n.jsx)(C.a,{children:Object(n.jsx)(F.a,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),s}(a.Component);function z(e){var t=e.book;return null!=t?Object(n.jsx)("div",{className:"col-12 col-sm-5 m-1",children:Object(n.jsx)(J.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(g.a,{top:!0,width:"100%",src:t.image,alt:t.name}),Object(n.jsxs)(f.a,{children:[Object(n.jsxs)(_.a,{children:["Category: ",t.category]}),Object(n.jsx)(_.a,{children:t.description}),Object(n.jsx)(_.a,{children:Object(n.jsx)("em",{children:t.writer})})]})]})})}):Object(n.jsx)("div",{})}function K(e){var t=e.auth,s=e.comments,a=e.postComment,c=e.bookId;return null!=s?Object(n.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(n.jsx)("h4",{children:" Comments "}),Object(n.jsx)("ul",{children:Object(n.jsx)(J.Stagger,{in:!0,children:s.map((function(e){return Object(n.jsx)(J.Fade,{in:!0,children:Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:e.comment}),Object(n.jsxs)("p",{children:[e.rating," stars"]}),Object(n.jsxs)("p",{children:["-- ",e.by," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.updatedAt)))]})]})},e._id)}))})}),Object(n.jsx)(Y,{auth:t,bookId:c,postComment:a})]}):Object(n.jsx)("div",{})}var Z=function(e){return null!=e.book?Object(n.jsx)(c.a.Fragment,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(m.a,{className:"container",children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(h.b,{to:"/home",children:"Home"})}),Object(n.jsx)(u.a,{children:Object(n.jsx)(h.b,{to:"/books",children:"Books"})}),Object(n.jsx)(u.a,{active:!0,children:e.book.name})]}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h3",{children:e.book.name}),Object(n.jsx)("hr",{})]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(z,{book:e.book}),Object(n.jsx)(K,{auth:e.auth,comments:e.book.comments,postComment:e.postComment,bookId:e.book._id})]})]})}):Object(n.jsx)("div",{})},Q=s(172),$=s(173),V=s(174),W=s(175),X=s(176),ee=s(177),te=s(178),se=s(179),ne=s(180),ae=s(181),ce=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1,isSignupModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(S.a)(n)),n.toggleModal=n.toggleModal.bind(Object(S.a)(n)),n.handleLogin=n.handleLogin.bind(Object(S.a)(n)),n.handleLogout=n.handleLogout.bind(Object(S.a)(n)),n.toggleSignupModal=n.toggleSignupModal.bind(Object(S.a)(n)),n.handleSingup=n.handleSingup.bind(Object(S.a)(n)),n}return Object(l.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),this.props.loginUser({username:this.username.value,password:this.password.value}),e.preventDefault()}},{key:"toggleSignupModal",value:function(){this.setState({isSignupModalOpen:!this.state.isSignupModalOpen})}},{key:"handleSingup",value:function(e){this.toggleSignupModal(),this.props.postSignup({username:this.username.value,password:this.password.value}),e.preventDefault()}},{key:"handleLogout",value:function(){this.props.logoutUser()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(Q.a,{dark:!0,expand:"md",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)($.a,{onClick:this.toggleNav}),Object(n.jsx)(V.a,{className:"mr-auto",href:"/",children:Object(n.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"NovelsPedia"})}),Object(n.jsxs)(W.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(n.jsxs)(X.a,{navbar:!0,children:[Object(n.jsx)(ee.a,{children:Object(n.jsxs)(h.c,{className:"nav-link",to:"/home",children:[Object(n.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(n.jsx)(ee.a,{children:Object(n.jsxs)(h.c,{className:"nav-link",to:"/aboutus",children:[Object(n.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(n.jsx)(ee.a,{children:Object(n.jsxs)(h.c,{className:"nav-link",to:"/books",children:[Object(n.jsx)("span",{className:"fa fa-list fa-lg"})," Books"]})}),Object(n.jsx)(ee.a,{children:Object(n.jsxs)(h.c,{className:"nav-link",to:"/contactus",children:[Object(n.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(n.jsx)(X.a,{className:"ml-auto",navbar:!0,children:Object(n.jsx)(ee.a,{children:this.props.auth.isAuthenticated?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"navbar-text mr-3",children:this.props.auth.user.username}),Object(n.jsxs)(F.a,{onClick:this.handleLogout,children:[Object(n.jsx)("span",{className:"fa fa-sign-out fa-lg"})," Logout",this.props.auth.isFetching?Object(n.jsx)("span",{className:"fa fa-spinner fa-pulse fa-fw"}):null]})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)(F.a,{className:"btn btn-outline-light",outline:!0,onClick:this.toggleModal,children:[Object(n.jsx)("span",{className:"fa fa-lg"})," Login",this.props.auth.isFetching?Object(n.jsx)("span",{className:"fa fa-spinner fa-pulse fa-fw"}):null]}),Object(n.jsxs)(F.a,{className:"btn btn-outline-light",outline:!0,onClick:this.toggleSignupModal,children:[Object(n.jsx)("span",{className:"fa fa-lg"})," Sign Up"]})]})})})]})]})}),Object(n.jsx)(te.a,{className:"container",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row row-header",children:Object(n.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(n.jsx)("h1",{children:"Novels Pedia"}),Object(n.jsx)("h4",{children:"A collection of novels!"})]})})})}),Object(n.jsxs)(P.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(n.jsx)(R.a,{toggle:this.toggleModal,children:"Login"}),Object(n.jsx)(B.a,{children:Object(n.jsxs)(se.a,{onSubmit:this.handleLogin,children:[Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(L.a,{htmlFor:"username",children:"Username"}),Object(n.jsx)(ae.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(L.a,{htmlFor:"password",children:"Password"}),Object(n.jsx)(ae.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(n.jsx)(ne.a,{check:!0,children:Object(n.jsxs)(L.a,{check:!0,children:[Object(n.jsx)(ae.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(n.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]}),Object(n.jsxs)(P.a,{isOpen:this.state.isSignupModalOpen,toggle:this.toggleSignupModal,children:[Object(n.jsx)(R.a,{toggle:this.toggleSignupModal,children:"Sign Up"}),Object(n.jsx)(B.a,{children:Object(n.jsxs)(se.a,{onSubmit:this.handleSingup,children:[Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(L.a,{htmlFor:"username",children:"Username"}),Object(n.jsx)(ae.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(L.a,{htmlFor:"password",children:"Password"}),Object(n.jsx)(ae.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(n.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Sign Up"})]})})]})]})}}]),s}(a.Component);var re=function(e){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row justify-content-center",children:[Object(n.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(n.jsx)("h5",{children:"Links"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/home",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/aboutus",children:"About Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/books",children:"Books"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(n.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(n.jsx)("h5",{children:"Our Address"}),Object(n.jsxs)("address",{children:["UPES",Object(n.jsx)("br",{}),"Dehradun",Object(n.jsx)("br",{}),"INDIA",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-phone fa-lg"}),": 9876543210",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-fax fa-lg"}),": 99999999999",Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(n.jsx)("a",{href:"mailto:dishantbisht32@gmail.com",children:" NovelsPedia.net"})]})]}),Object(n.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(n.jsx)("i",{className:"fa fa-google-plus"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(n.jsx)("i",{className:"fa fa-facebook"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(n.jsx)("i",{className:"fa fa-linkedin"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(n.jsx)("i",{className:"fa fa-twitter"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(n.jsx)("i",{className:"fa fa-youtube"})}),Object(n.jsx)("a",{className:"btn btn-social-icon btn-google",href:"mailto:",children:Object(n.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{className:"col-auto",children:Object(n.jsx)("p",{children:"\xa9 Copyright Novels Pedia"})})})]})})},oe=s(12),ie=s(26),le="https://novelspedia.herokuapp.com/",je="ADD_COMMENT",de="BOOKS_LOADING",be="BOOKS_FAILED",he="ADD_BOOKS",me="ADD_COMMENTS",ue="COMMENTS_FAILED",Oe="LOGIN_REQUEST",xe="LOGIN_SUCCESS",fe="LOGIN_FAILURE",pe="LOGOUT_REQUEST",ge="LOGOUT_SUCCESS",ve=function(){return{type:de}},Ne=function(e){return{type:be,payload:e}},ke=function(e){return{type:he,payload:e}},ye=function(e,t,s,n){return{type:je,payload:n}},we=function(e){return function(t){return t(function(e){return{type:Oe,creds:e}}(e)),fetch(le+"users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(s){if(!s.success){var n=new Error("Error "+s.status);throw n.response=s,n}localStorage.setItem("token",s.token),localStorage.setItem("creds",JSON.stringify(e)),t(function(e){return{type:xe,token:e.token}}(s))})).catch((function(e){return t((s=e.message,{type:fe,message:s}));var s}))}},Se=function(){return function(e){e({type:pe}),localStorage.removeItem("token"),localStorage.removeItem("creds"),e({type:ge})}},Me=s(55),Le=s(88),Ce=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(ce,{auth:this.props.auth,loginUser:this.props.loginUser,logoutUser:this.props.logoutUser,postSignup:this.props.postSignup}),Object(n.jsx)(Me.a,{children:Object(n.jsx)(Le.a,{classNames:"page",timeout:300,children:Object(n.jsxs)(oe.d,{children:[Object(n.jsx)(oe.b,{path:"/home",component:function(){return Object(n.jsx)(O,{book:e.props.books.books.filter((function(e){return e.featured}))[0],booksLoading:e.props.books.isLoading,booksErrMess:e.props.books.errMess})}}),Object(n.jsx)(oe.b,{exact:!0,path:"/aboutus",component:function(){return Object(n.jsx)(p,{})}}),Object(n.jsx)(oe.b,{exact:!0,path:"/books",component:function(){return Object(n.jsx)(w,{books:e.props.books})}}),Object(n.jsx)(oe.b,{path:"/books/:bookId",component:function(t){var s=t.match;return e.props.auth.isAuthenticated,Object(n.jsx)(Z,{book:e.props.books.books.filter((function(e){return e._id===s.params.bookId}))[0],isLoading:e.props.books.isLoading,errMess:e.props.books.errMess,commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment,auth:e.props.auth})}}),Object(n.jsx)(oe.b,{exact:!0,path:"/contactus",component:function(){return Object(n.jsx)(q,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(n.jsx)(oe.a,{to:"/home"})]})},this.props.location.key)}),Object(n.jsx)(re,{})]})}}]),s}(a.Component),Fe=Object(oe.g)(Object(ie.connect)((function(e){return{books:e.books,comments:e.comments,promotions:e.promotions,leaders:e.leaders,favorites:e.favorites,auth:e.auth}}),(function(e){return{postComment:function(t,s,n,a){return e(function(e,t,s,n){return function(a){var c={rating:s,by:t,comment:n},r="Bearer "+localStorage.getItem("token");return console.log(r),fetch(le+"books/"+e+"/comments",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json",Authorization:r}}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return a(ye(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\n "+e.message)}))}}(t,s,n,a))},fetchBooks:function(){e((function(e){return e(ve(!0)),fetch(le+"books").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ke(t))})).catch((function(t){return e(Ne(t.message))}))}))},resetFeedbackForm:function(){e(E.actions.reset("feedback"))},postFeedback:function(t){return e(function(e){return function(t){var s="Bearer "+localStorage.getItem("token");return fetch(le+"feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:s},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Thank you for your feedback!"+JSON.stringify(e))})).catch((function(e){console.log("post feedbacks",e.message),alert("Your feedback could not be posted \n Please Login first \n Error: "+e.message)}))}}(t))},loginUser:function(t){return e(we(t))},logoutUser:function(){return e(Se())},postSignup:function(t){return e(function(e){return function(t){return fetch(le+"users/signup",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).catch((function(e){console.log("post UserSignUp",e.message),alert("User not Added\n "+e.message)}))}}(t))}}}))(Ce)),Ee=s(27),Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,books:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,errMess:null,books:t.payload});case de:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,errMess:null,books:[]});case be:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(b.a)(Object(b.a)({},e),{},{errMess:null,comments:t.payload});case ue:return Object(b.a)(Object(b.a)({},e),{},{errMess:t.payload});case je:var s=t.payload;return Object(b.a)(Object(b.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},Ae=s(92),Ue=s(93),De=s.n(Ue),qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isAuthenticated:!!localStorage.getItem("token"),token:localStorage.getItem("token"),user:localStorage.getItem("creds")?JSON.parse(localStorage.getItem("creds")):null,errMess:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,isAuthenticated:!1,user:t.creds});case xe:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isAuthenticated:!0,errMess:"",token:t.token});case fe:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:t.message});case pe:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,isAuthenticated:!0});case ge:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isAuthenticated:!1,token:"",user:null});default:return e}},Pe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Re=Object(Ee.createStore)(Object(Ee.combineReducers)(Object(b.a)({books:Te,comments:Ie,auth:qe},Object(E.createForms)({feedback:Pe}))),Object(Ee.applyMiddleware)(Ae.a,De.a)),Be=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)(ie.Provider,{store:Re,children:Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"App",style:{backgroundColor:"#cfb3aa"},children:Object(n.jsx)(Fe,{})})})})}}]),s}(a.Component),_e=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,183)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Be,{})}),document.getElementById("root")),_e()}},[[157,1,2]]]);
//# sourceMappingURL=main.256d3055.chunk.js.map