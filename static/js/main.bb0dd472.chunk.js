(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return App}));var _Users_yashgaitonde_projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_yashgaitonde_projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_yashgaitonde_projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Users_yashgaitonde_projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_Result__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_components_Keypad__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),App=function(_React$Component){Object(_Users_yashgaitonde_projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_React$Component);var _super=Object(_Users_yashgaitonde_projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;return Object(_Users_yashgaitonde_projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.state={result:""},_this}return Object(_Users_yashgaitonde_projects_React_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null,"React Calculator"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Result__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Keypad__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component)},function(e,t,_){"use strict";_.d(t,"a",(function(){return s}));var n=_(1),a=_(2),r=_(4),c=_(3),o=_(0),l=_.n(o),s=function(e){Object(r.a)(_,e);var t=Object(c.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(a.a)(_,[{key:"render",value:function(){var e=this.props.result;return l.a.createElement("div",{className:"result"},l.a.createElement("p",null,e))}}]),_}(l.a.Component)},function(e,t,_){"use strict";_.d(t,"a",(function(){return s}));var n=_(1),a=_(2),r=_(4),c=_(3),o=_(0),l=_.n(o),s=function(e){Object(r.a)(_,e);var t=Object(c.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(a.a)(_,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),l.a.createElement("button",{name:"CE",onClick:function(t){return e.props.onClick(t.target.name)}},"CE"),l.a.createElement("button",{name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),l.a.createElement("button",{name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),l.a.createElement("br",null),l.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),l.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),l.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),l.a.createElement("button",{name:"+",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),l.a.createElement("br",null),l.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),l.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),l.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),l.a.createElement("button",{name:"-",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),l.a.createElement("br",null),l.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),l.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),l.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),l.a.createElement("button",{name:"*",onClick:function(t){return e.props.onClick(t.target.name)}},"x"),l.a.createElement("br",null),l.a.createElement("button",{name:".",onClick:function(t){return e.props.onClick(t.target.name)}},"."),l.a.createElement("button",{name:"0",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),l.a.createElement("button",{name:"=",onClick:function(t){return e.props.onClick(t.target.name)}},"="),l.a.createElement("button",{name:"/",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7"),l.a.createElement("br",null))}}]),_}(l.a.Component)},function(e,t,_){e.exports=_(17)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(6),c=_.n(r),o=(_(15),_(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.bb0dd472.chunk.js.map