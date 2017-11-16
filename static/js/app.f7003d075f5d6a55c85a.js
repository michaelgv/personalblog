webpackJsonp([0],{

/***/ "07PK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__("teIl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Toplinkbar__ = __webpack_require__("K+VI");
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HelloWorld',
  data() {
    return {
      posts: this.$store.state.posts,
      posttype: 'Post'
    };
  },
  components: {
    headerbar: __WEBPACK_IMPORTED_MODULE_0__Header__["a" /* default */],
    toplinkbar: __WEBPACK_IMPORTED_MODULE_1__Toplinkbar__["a" /* default */]
  }
});

/***/ }),

/***/ "2kmR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"news-list"},[_c('ul',_vm._l((_vm.posts),function(post){return (_vm.showPostlist)?_c('li',{staticClass:"news-item"},[_c('span',{staticClass:"score"},[_vm._v("\n          "+_vm._s(post.id)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"title"},[_c('router-link',{attrs:{"to":post.slug}},[_vm._v("\n            "+_vm._s(post.title)+"\n          ")])],1)]):_c('li',{staticClass:"news-item"},[_c('span',{staticClass:"score"},[_vm._v("\n          :(\n        ")]),_vm._v(" "),_c('span',{staticClass:"title"},[_vm._v("\n          No posts made yet... sorry!\n        ")])])}))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "6gD6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6pTl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_c('nav',{staticClass:"inner"},[_c('a',{attrs:{"href":"/"}},[_vm._v("\n      "+_vm._s(_vm.blog_title)+"\n    ")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/posts"}},[_vm._v("Posts")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/papers"}},[_vm._v("Papers")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("Contact")]),_vm._v(" "),(_vm.dev)?_c('span',[_c('router-link',{attrs:{"to":"/write"}},[_vm._v("New Post")])],1):_vm._e(),_vm._v(" "),_c('a',{staticClass:"github",attrs:{"href":"#","target":"_blank","rel":"noopener"}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "70+7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['id'],
  name: 'PostContent',
  data() {
    return {
      title: '',
      content: '',
      postedDate: '',
      hassubtitle: false,
      subtitle: ''
    };
  },
  mounted() {
    this.title = this.$store.state.posts[this.id].title;
    this.content = window.marked(this.$store.state.posts[this.id].content, { sanitize: false });
    this.postedDate = this.$store.state.posts[this.id].date;
    this.hassubtitle = typeof this.$store.state.posts[this.id].subtitle !== 'undefined';
    this.subtitle = this.$store.state.posts[this.id].subtitle || '';
  }
});

/***/ }),

/***/ "7MuM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaperContent_vue__ = __webpack_require__("b1gU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b638c1ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PaperContent_vue__ = __webpack_require__("cVMs");
function injectStyle (ssrContext) {
  __webpack_require__("BJ+M")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b638c1ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaperContent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b638c1ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PaperContent_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "8QDP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "AxIC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BJ+M":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "D3i/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('headerbar'),_vm._v(" "),_c('papercontent',{attrs:{"id":this.$route.params.id-1}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GEJm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__("teIl");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Writer',
  data() {
    return {
      posts: this.$store.state.posts,
      papers: this.$store.state.papers,
      input: "",
      posttitle: "",
      posttype: 'Post',
      showCompiled: false,
      compiled: ''
    };
  },
  components: {
    headerbar: __WEBPACK_IMPORTED_MODULE_0__Header__["a" /* default */]
  },
  computed: {
    compiledMarkdown: function () {
      return window.marked(this.input, { sanitize: true });
    }
  },
  methods: {
    exportpost: function () {
      if (this.input.length === 0) {
        this.input = "Replace me!";
      }
      if (this.posttitle.length === 0) {
        this.posttitle = "Whatcha going to call this post?";
      }
      var vinput = this.input;
      vinput = vinput.replace(/\n/g, "\\n").replace(/\'/g, "\\'");
      var nextID = this.$store.state.posts.length + 1;
      var slug = this.posttitle;
      slug = slug.replace(/[^a-zA-Z0-9 -]/g, '').replace(/\ /g, '-');
      var exportSlug = "{";
      exportSlug += "\n";
      exportSlug += "id: " + nextID + ",\n";
      exportSlug += "title: '" + this.posttitle + "',\n";
      exportSlug += "slug: '/post/" + nextID + "/" + slug + "',\n";
      exportSlug += "date: '" + new Date().toLocaleString() + "',\n";
      exportSlug += "content: '" + vinput + "',\n";
      exportSlug += "},";
      this.showCompiled = true;
      this.compiled = exportSlug;
    },
    closecompiled: function () {
      this.showCompiled = false;
    },
    update: window._.debounce(function (e) {
      this.input = e.target.value;
    }, 300)
  }
});

/***/ }),

/***/ "HCTz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'headerbar',
  data() {
    return {
      blog_title: 'Michaels Blog',
      dev: this.$store.state.devmode
    };
  }
});

/***/ }),

/***/ "I5bU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Writer_vue__ = __webpack_require__("GEJm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cee1310_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Writer_vue__ = __webpack_require__("p2WC");
function injectStyle (ssrContext) {
  __webpack_require__("oB2u")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4cee1310"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Writer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cee1310_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Writer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Jbll":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__("teIl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Toplinkbar__ = __webpack_require__("K+VI");
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'PapersWorld',
  data() {
    return {
      posts: this.$store.state.papers,
      posttype: 'Papers'
    };
  },
  components: {
    headerbar: __WEBPACK_IMPORTED_MODULE_0__Header__["a" /* default */],
    toplinkbar: __WEBPACK_IMPORTED_MODULE_1__Toplinkbar__["a" /* default */]
  }
});

/***/ }),

/***/ "K+VI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Toplinkbar_vue__ = __webpack_require__("x5kK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d8d9a81_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Toplinkbar_vue__ = __webpack_require__("UTrJ");
function injectStyle (ssrContext) {
  __webpack_require__("p+SY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d8d9a81"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Toplinkbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d8d9a81_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Toplinkbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "LoF5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PostView_vue__ = __webpack_require__("gLIG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68ed607c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PostView_vue__ = __webpack_require__("NFZX");
function injectStyle (ssrContext) {
  __webpack_require__("8QDP")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68ed607c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PostView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68ed607c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PostView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "M09z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Newslist_vue__ = __webpack_require__("tnuH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d2bcc4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Newslist_vue__ = __webpack_require__("2kmR");
function injectStyle (ssrContext) {
  __webpack_require__("zj5c")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d2bcc4e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Newslist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d2bcc4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Newslist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d20e436_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("TBFr");
function injectStyle (ssrContext) {
  __webpack_require__("zgtd")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d20e436_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MYV0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaperView_vue__ = __webpack_require__("ZLXs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_657964c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PaperView_vue__ = __webpack_require__("D3i/");
function injectStyle (ssrContext) {
  __webpack_require__("AxIC")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-657964c4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PaperView_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_657964c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PaperView_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NFZX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('headerbar'),_vm._v(" "),_c('postcontent',{attrs:{"id":this.$route.params.id-1}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__("NYxO");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */]);

const store = new __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */].Store({
  state: {
    posts: [{
      id: 1,
      title: 'Hey, world!',
      slug: '/post/1/hey-world',
      date: '11/15/2017, 7:50:28 PM',
      content: '# Hey all!\n\nMy name is Michael, and I run this blog. This blog is powered by Cloudflare, Heroku, and Netlify. **This software is entirely open source as well.** \n\nWant to know how it\'s done? I challenge you to figure it out! Check out [my github page](https://github.com/michaelgv) for more information! :) \n\nHave a nice day :D'
    }],
    papers: [],
    contact: {
      enableSocialMedia: false,
      socialMedia: {
        instagram: '',
        facebook: ''
      },
      email: '',
      aboutme: 'Hello, world! My name is Michael, and I\'m a software and web developer. Feel free to reach me via email if you want!'
    },
    devmode: false
  }
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] },
  store: store
});

/***/ }),

/***/ "Swv3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('headerbar'),_vm._v(" "),_c('toplinkbar',{attrs:{"posts":_vm.posts,"datatype":_vm.posttype}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "TBFr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Tql0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__("teIl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Toplinkbar__ = __webpack_require__("K+VI");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ContactWorld',
  data() {
    return {
      aboutmepure: ''
    };
  },
  components: {
    headerbar: __WEBPACK_IMPORTED_MODULE_0__Header__["a" /* default */],
    toplinkbar: __WEBPACK_IMPORTED_MODULE_1__Toplinkbar__["a" /* default */]
  },
  mounted() {
    this.aboutmepure = window.marked(this.$store.state.contact.aboutme) || '';
  }
});

/***/ }),

/***/ "UTrJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"news-view view"},[_c('div',{staticClass:"news-list-nav"},[(_vm.displayPostCount)?_c('span',[_vm._v("\n        "+_vm._s(_vm.posts.length)+" "+_vm._s(_vm.datatype)),(_vm.posts.length > 1)?_c('span',[_vm._v("s")]):_vm._e()]):_c('span',[(_vm.posts.length !== 0)?_c('span',[_c('router-link',{attrs:{"to":_vm.posts[_vm.posts.length-1].slug}},[_vm._v("Latest "+_vm._s(_vm.datatype)+": "+_vm._s(_vm.posts[_vm.posts.length-1].title)+" posted on "+_vm._s(_vm.posts[_vm.posts.length-1].date))])],1):_c('span',[_vm._v("\n            Awkward... I can't seem to find any "+_vm._s(_vm.datatype)),(_vm.datatype == 'Post')?_c('span',[_vm._v("s")]):_vm._e(),_vm._v(" yet. Try back later?\n        ")])])]),_vm._v(" "),(_vm.posts.length !== 0)?_c('newslist',{attrs:{"posts":_vm.posts}}):_vm._e()],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "VVjQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HelloWorld__ = __webpack_require__("gORT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PostView__ = __webpack_require__("LoF5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PapersWorld__ = __webpack_require__("bMVm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PaperView__ = __webpack_require__("MYV0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactWorld__ = __webpack_require__("lh8o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Writer__ = __webpack_require__("I5bU");









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_HelloWorld__["a" /* default */]
  }, {
    path: '/posts',
    name: 'Posts',
    component: __WEBPACK_IMPORTED_MODULE_2__components_HelloWorld__["a" /* default */]
  }, {
    path: '/post/:id/:title',
    name: 'PostView',
    component: __WEBPACK_IMPORTED_MODULE_3__components_PostView__["a" /* default */]
  }, {
    path: '/papers',
    name: 'PapersWorld',
    component: __WEBPACK_IMPORTED_MODULE_4__components_PapersWorld__["a" /* default */]
  }, {
    path: '/paper/:id/:title',
    name: 'PaperView',
    component: __WEBPACK_IMPORTED_MODULE_5__components_PaperView__["a" /* default */]
  }, {
    path: '/contact',
    name: 'ContactWorld',
    component: __WEBPACK_IMPORTED_MODULE_6__components_ContactWorld__["a" /* default */]
  }, {
    path: '/write',
    name: 'Writer',
    component: __WEBPACK_IMPORTED_MODULE_7__components_Writer__["a" /* default */]
  }]
}));

/***/ }),

/***/ "ZLXs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__("teIl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PaperContent__ = __webpack_require__("7MuM");
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['id', 'title'],
  name: 'PaperView',
  data() {
    return {
      title: '',
      content: ''
    };
  },
  mounted() {
    this.title = this.$store.state.papers[this.$route.params.id - 1].title;
    this.content = this.$store.state.papers[this.$route.params.id - 1].content;
  },
  components: {
    headerbar: __WEBPACK_IMPORTED_MODULE_0__Header__["a" /* default */],
    papercontent: __WEBPACK_IMPORTED_MODULE_1__PaperContent__["a" /* default */]
  }
});

/***/ }),

/***/ "b1gU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['id'],
  name: 'papercontent',
  data() {
    return {
      title: '',
      content: '',
      postedDate: '',
      hassubtitle: false,
      subtitle: ''
    };
  },
  mounted() {
    this.title = this.$store.state.papers[this.id].title;
    this.content = window.marked(this.$store.state.papers[this.id].content, { sanitize: true });
    this.postedDate = this.$store.state.papers[this.id].date;
    this.hassubtitle = typeof this.$store.state.papers[this.id].subtitle !== 'undefined';
    this.subtitle = this.$store.state.papers[this.id].subtitle || '';
  }
});

/***/ }),

/***/ "bMVm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PapersWorld_vue__ = __webpack_require__("Jbll");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c99e93c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PapersWorld_vue__ = __webpack_require__("rr92");
function injectStyle (ssrContext) {
  __webpack_require__("t0Nj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c99e93c4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PapersWorld_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c99e93c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PapersWorld_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "cVMs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"news-view view"},[_c('div',{staticClass:"news-list-nav"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"news-list"},[_c('ul',[_c('li',{staticClass:"news-item"},[_c('h3',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.hassubtitle)?_c('h4',{staticClass:"subtitle"},[_vm._v("\n            "+_vm._s(_vm.subtitle)+"\n          ")]):_vm._e(),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(_vm.content)}})])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "f34Q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gLIG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__("teIl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PostContent__ = __webpack_require__("qR5s");
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['id', 'title'],
  name: 'PostView',
  data() {
    return {
      title: '',
      content: ''
    };
  },
  mounted() {
    this.title = this.$store.state.posts[this.$route.params.id - 1].title;
    this.content = this.$store.state.posts[this.$route.params.id - 1].content;
  },
  components: {
    headerbar: __WEBPACK_IMPORTED_MODULE_0__Header__["a" /* default */],
    postcontent: __WEBPACK_IMPORTED_MODULE_1__PostContent__["a" /* default */]
  }
});

/***/ }),

/***/ "gORT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HelloWorld_vue__ = __webpack_require__("07PK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2832906_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HelloWorld_vue__ = __webpack_require__("Swv3");
function injectStyle (ssrContext) {
  __webpack_require__("6gD6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a2832906"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HelloWorld_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a2832906_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_HelloWorld_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "hsjD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('headerbar'),_vm._v(" "),_c('div',{staticClass:"news-view view"},[_c('div',{staticClass:"news-list-nav"},[_vm._v("\n      Contact Me\n    ")]),_vm._v(" "),_c('div',{staticClass:"news-list"},[_c('ul',[_c('li',{staticClass:"news-item"},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.aboutmepure)}}),_vm._v(" "),_c('br'),_vm._v(" "),(this.$store.state.contact.enableSocialMedia)?_c('p',[_vm._v("\n            Instagram: "+_vm._s(this.$store.state.contact.socialMedia.instagram)),_c('br'),_vm._v("\n            Facebook: "+_vm._s(this.$store.state.contact.socialMedia.facebook)),_c('br'),_vm._v("\n            Email: "+_vm._s(this.$store.state.contact.email)),_c('br')]):_vm._e()])])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lh8o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ContactWorld_vue__ = __webpack_require__("Tql0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fcfeeaa2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_ContactWorld_vue__ = __webpack_require__("hsjD");
function injectStyle (ssrContext) {
  __webpack_require__("f34Q")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fcfeeaa2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ContactWorld_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fcfeeaa2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_ContactWorld_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "oB2u":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p+SY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p2WC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('headerbar'),_vm._v(" "),_c('div',{staticClass:"news-view view"},[_c('div',{staticClass:"news-list-nav"},[_c('button',{staticClass:"btn",on:{"click":_vm.exportpost}},[_vm._v("Export")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/"}},[_c('button',{staticClass:"btn danger"},[_vm._v("Cancel")])])],1),_vm._v(" "),_c('div',{staticClass:"news-list"},[_c('ul',[(_vm.showCompiled)?_c('li',{staticClass:"news-item stateful"},[_c('p',[_vm._v("You rock! Here's your compiled post to add to the main.js file (where all your posts are stored!)")]),_vm._v(" "),_c('button',{staticClass:"btn danger",on:{"click":_vm.closecompiled}},[_vm._v("Close")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.compiled),expression:"compiled"}],staticClass:"regular",domProps:{"value":(_vm.compiled)},on:{"input":function($event){if($event.target.composing){ return; }_vm.compiled=$event.target.value}}})]):_vm._e(),_vm._v(" "),_c('li',{staticClass:"news-item"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.posttitle),expression:"posttitle"}],staticClass:"vinput",attrs:{"type":"text","placeholder":"Post Name"},domProps:{"value":(_vm.posttitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.posttitle=$event.target.value}}}),_vm._v(" "),_c('textarea',{domProps:{"value":_vm.input},on:{"input":_vm.update}})]),_vm._v(" "),_c('div',{staticClass:"col overflowable",domProps:{"innerHTML":_vm._s(_vm.compiledMarkdown)}})])])])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qR5s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PostContent_vue__ = __webpack_require__("70+7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_89722928_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PostContent_vue__ = __webpack_require__("vRX7");
function injectStyle (ssrContext) {
  __webpack_require__("sAkZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-89722928"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PostContent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_89722928_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_PostContent_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "rr92":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('headerbar'),_vm._v(" "),_c('toplinkbar',{attrs:{"posts":_vm.posts,"datatype":_vm.posttype}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "sAkZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "t0Nj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "teIl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__("HCTz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_308c97ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__("6pTl");
function injectStyle (ssrContext) {
  __webpack_require__("VVjQ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-308c97ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_308c97ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "tnuH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['posts'],
  name: 'newslist',
  data() {
    return {
      showPostlist: true
    };
  },
  mounted() {
    if (this.$store.state.posts.length === 0) {
      this.showPostlist = false;
    }
  }
});

/***/ }),

/***/ "vRX7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"news-view view"},[_c('div',{staticClass:"news-list-nav"},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"news-list"},[_c('ul',[_c('li',{staticClass:"news-item"},[_c('h3',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.hassubtitle)?_c('h4',{staticClass:"subtitle"},[_vm._v("\n            "+_vm._s(_vm.subtitle)+"\n          ")]):_vm._e(),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(_vm.content)}})])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "x5kK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Newslist__ = __webpack_require__("M09z");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['posts', 'datatype'],
  name: 'toplinkbar',
  data() {
    return {
      displayPostCount: false
    };
  },
  components: {
    newslist: __WEBPACK_IMPORTED_MODULE_0__Newslist__["a" /* default */]
  }
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),

/***/ "zgtd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zj5c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.f7003d075f5d6a55c85a.js.map