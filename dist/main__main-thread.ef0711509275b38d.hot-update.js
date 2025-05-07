(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main__main-thread.ef0711509275b38d.hot-update.js", function(require, module, exports, Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,ReactLynx,nativeAppId,Behavior,LynxJSBI,lynx,window) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
var fetch = lynx.fetch;
// lynx chunks entries
if (!lynx.__chunk_entries__) {
  // Initialize once
  lynx.__chunk_entries__ = {};
}
if (!lynx.__chunk_entries__["main__main-thread"]) {
  lynx.__chunk_entries__["main__main-thread"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main__main-thread"];
}

"use strict";
exports.ids = ['main__main-thread'];
exports.modules = {
"(react:main-thread)/./src/pages/LoginPage.tsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (LoginPage)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/react-router/dist/index.js");
/* ESM import */var _components_images_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./src/components/images.tsx");
/* ESM import */var _stores_auth_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./src/stores/auth.store.ts");
/* ESM import */var _graphql_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./src/graphql/constants.ts");
/* ESM import */var _graphql_queries_auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./src/graphql/queries/auth.ts");







const __snapshot_fd68a_a26c6_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fd68a_a26c6_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-white text-lg font-semibold");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_fd68a_a26c6_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fd68a_a26c6_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "mt-4 p-4 bg-indigo-100 rounded-xl");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-indigo-600 mt-1");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_fd68a_a26c6_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fd68a_a26c6_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "flex items-center justify-center px-6 py-16 bg-white h-screen");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-full max-w-lg shadow rounded-3xl p-6 -mt-24 bg-white");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "flex-row items-center mb-10");
    __AppendElement(el1, el2);
    const el3 = __CreateImage(pageId);
    __SetClasses(el3, "w-20 h-20 mb-4");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-4xl font-bold text-slate-800");
    __AppendElement(el2, el4);
    const el5 = __CreateRawText("GoodsDesign");
    __AppendElement(el4, el5);
    const el6 = __CreateText(pageId);
    __SetClasses(el6, "text-lg text-slate-500 mt-2");
    __AppendElement(el2, el6);
    const el7 = __CreateRawText("Sign in to your staff account");
    __AppendElement(el6, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "mb-6");
    __AppendElement(el1, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "text-base font-medium text-slate-700 mb-2");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("Email");
    __AppendElement(el9, el10);
    const el11 = __CreateElement("input", pageId);
    __SetAttribute(el11, "type", "text");
    __SetAttribute(el11, "placeholder", "Enter your email");
    __SetClasses(el11, "w-full h-14 px-5 border border-slate-300 rounded-xl text-lg bg-white");
    __AppendElement(el8, el11);
    const el12 = __CreateView(pageId);
    __SetClasses(el12, "mb-8");
    __AppendElement(el1, el12);
    const el13 = __CreateText(pageId);
    __SetClasses(el13, "text-base font-medium text-slate-700 mb-2");
    __AppendElement(el12, el13);
    const el14 = __CreateRawText("Password");
    __AppendElement(el13, el14);
    const el15 = __CreateElement("input", pageId);
    __SetAttribute(el15, "type", "password");
    __SetAttribute(el15, "placeholder", "Enter your password");
    __SetClasses(el15, "w-full h-14 px-5 border border-slate-300 rounded-xl text-lg bg-white");
    __AppendElement(el12, el15);
    const el16 = __CreateView(pageId);
    __AppendElement(el1, el16);
    const el17 = __CreateWrapperElement(pageId);
    __AppendElement(el16, el17);
    const el18 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el18);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[3], "src", ctx.__values[0]);
    },
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[11], "value", ctx.__values[1]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 11, "bindEvent", "input", ''),
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[15], "value", ctx.__values[3]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 15, "bindEvent", "input", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 16, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[16], ctx.__values[6] || '');
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        17
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        18
    ]
], undefined, globDynamicComponentEntry);
function LoginPage() {
    const nav = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    const [email, setEmail] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isLoading, setIsLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [notification, setNotification] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const login = (0,_stores_auth_store_js__WEBPACK_IMPORTED_MODULE_3__.useAuthStore)((state)=>state.login);
    const accessToken = (0,_stores_auth_store_js__WEBPACK_IMPORTED_MODULE_3__.useAuthStore)((state)=>state.accessToken);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
    const handleLogin = async ()=>{
        if (!email || !password) {
            setNotification("Email and password are required");
            return;
        }
        setIsLoading(true);
        try {
            var _result_data;
            const response = await fetch(_graphql_constants_js__WEBPACK_IMPORTED_MODULE_4__.API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: _graphql_queries_auth_js__WEBPACK_IMPORTED_MODULE_5__.LOGIN_MUTATION,
                    variables: {
                        loginInput: {
                            email: email,
                            password: password
                        }
                    }
                })
            });
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const result = await response.json();
            if (result.errors) {
                var _result_errors_;
                const errorMessage = ((_result_errors_ = result.errors[0]) === null || _result_errors_ === void 0 ? void 0 : _result_errors_.message) || "An error occurred during login.";
                setNotification(errorMessage);
                return;
            }
            const loginResult = (_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.login;
            if (!loginResult) {
                setNotification("Login failed: No data returned.");
                return;
            }
            login({
                accessToken: loginResult.accessToken,
                refreshToken: loginResult.refreshToken,
                user: loginResult.user
            });
            setNotification("Login successful");
            console.log("Login successful");
            nav("/task", {
                replace: true
            });
        } catch (error) {
            setNotification(error instanceof Error ? error.message : "An unknown error occurred");
            console.error("Login error", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleEmailChange = (event)=>{
        setEmail(event.detail.value);
    };
    const handlePasswordChange = (event)=>{
        setPassword(event.detail.value);
    };
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fd68a_a26c6_1, {
        values: [
            _components_images_jsx__WEBPACK_IMPORTED_MODULE_2__.pictureMap[_components_images_jsx__WEBPACK_IMPORTED_MODULE_2__.PictureEnum.Logo].src,
            email,
            1,
            password,
            1,
            1,
            `h-14 flex items-center justify-center rounded-xl ${isLoading ? "bg-indigo-400" : "bg-indigo-500"} ${!email || !password ? "opacity-60" : "opacity-100"}`
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fd68a_a26c6_2, {
                children: isLoading ? "Signing in..." : "Sign in"
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\LoginPage.tsx",
                lineNumber: 143,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: notification && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fd68a_a26c6_3, {
                    children: notification
                }, void 0, false, {
                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\LoginPage.tsx",
                    lineNumber: 150,
                    columnNumber: 11
                }, this)
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\LoginPage.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("5a69aba2ca316b07")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.ef0711509275b38d.css.hot-update.json"]];

})();

}
;
;

    });
    return tt.require("main__main-thread.ef0711509275b38d.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://192.168.100.126:3001/main__main-thread.ef0711509275b38d.hot-update.js.map