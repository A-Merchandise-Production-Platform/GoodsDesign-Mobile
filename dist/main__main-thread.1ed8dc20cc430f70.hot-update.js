(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main__main-thread.1ed8dc20cc430f70.hot-update.js", function(require, module, exports, Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,ReactLynx,nativeAppId,Behavior,LynxJSBI,lynx,window) {
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







const __snapshot_fd68a_1117a_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fd68a_1117a_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetInlineStyles(el, "color:white;font-size:1.125rem;font-weight:600");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_fd68a_1117a_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fd68a_1117a_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "margin-top:1rem;padding:1rem;background-color:#e0e7ff;border-radius:0.75rem");
    const el1 = __CreateText(pageId);
    __SetInlineStyles(el1, "color:#4f46e5;margin-top:0.25rem");
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
const __snapshot_fd68a_1117a_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_fd68a_1117a_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetInlineStyles(el, "display:flex;align-items:center;justify-content:center;padding:4rem 1.5rem;background-color:white;height:100vh");
    const el1 = __CreateView(pageId);
    __SetInlineStyles(el1, "width:100%;max-width:32rem;box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1);border-radius:1.5rem;padding:1.5rem;margin-top:-6rem;background-color:white");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetInlineStyles(el2, "display:flex;flex-direction:row;align-items:center;margin-bottom:2.5rem");
    __AppendElement(el1, el2);
    const el3 = __CreateImage(pageId);
    __SetInlineStyles(el3, "width:5rem;height:5rem;margin-bottom:1rem");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetInlineStyles(el4, "font-size:2.25rem;font-weight:bold;color:#1e293b");
    __AppendElement(el2, el4);
    const el5 = __CreateRawText("GoodsDesign");
    __AppendElement(el4, el5);
    const el6 = __CreateText(pageId);
    __SetInlineStyles(el6, "font-size:1.125rem;color:#64748b;margin-top:0.5rem");
    __AppendElement(el2, el6);
    const el7 = __CreateRawText("Sign in to your staff account");
    __AppendElement(el6, el7);
    const el8 = __CreateView(pageId);
    __SetInlineStyles(el8, "margin-bottom:1.5rem");
    __AppendElement(el1, el8);
    const el9 = __CreateText(pageId);
    __SetInlineStyles(el9, "font-size:1rem;font-weight:500;color:#334155;margin-bottom:0.5rem");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("Email");
    __AppendElement(el9, el10);
    const el11 = __CreateElement("input", pageId);
    __SetAttribute(el11, "type", "text");
    __SetAttribute(el11, "placeholder", "Enter your email");
    __SetInlineStyles(el11, "width:100%;height:3.5rem;padding:0 1.25rem;border:1px solid #cbd5e1;border-radius:0.75rem;font-size:1.125rem;background-color:white");
    __AppendElement(el8, el11);
    const el12 = __CreateView(pageId);
    __SetInlineStyles(el12, "margin-bottom:2rem");
    __AppendElement(el1, el12);
    const el13 = __CreateText(pageId);
    __SetInlineStyles(el13, "font-size:1rem;font-weight:500;color:#334155;margin-bottom:0.5rem");
    __AppendElement(el12, el13);
    const el14 = __CreateRawText("Password");
    __AppendElement(el13, el14);
    const el15 = __CreateElement("input", pageId);
    __SetAttribute(el15, "type", "password");
    __SetAttribute(el15, "placeholder", "Enter your password");
    __SetInlineStyles(el15, "width:100%;height:3.5rem;padding:0 1.25rem;border:1px solid #cbd5e1;border-radius:0.75rem;font-size:1.125rem;background-color:white");
    __AppendElement(el12, el15);
    const el16 = __CreateView(pageId);
    __AddInlineStyle(el16, 26, "3.5rem");
    __AddInlineStyle(el16, 24, "flex");
    __AddInlineStyle(el16, 55, "center");
    __AddInlineStyle(el16, 58, "center");
    __AddInlineStyle(el16, 12, "0.75rem");
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
        if (ctx.__elements) {
            let el = ctx.__elements[16];
            let style_values = ctx.__values[6];
            __AddInlineStyle(el, 7, style_values[0]), __AddInlineStyle(el, 23, style_values[1]);
        }
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
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fd68a_1117a_1, {
        values: [
            _components_images_jsx__WEBPACK_IMPORTED_MODULE_2__.pictureMap[_components_images_jsx__WEBPACK_IMPORTED_MODULE_2__.PictureEnum.Logo].src,
            email,
            1,
            password,
            1,
            1,
            [
                isLoading ? "#818cf8" : "#6366f1",
                !email || !password ? 0.6 : 1
            ]
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fd68a_1117a_2, {
                children: isLoading ? "Signing in..." : "Sign in"
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\LoginPage.tsx",
                lineNumber: 219,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: notification && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_fd68a_1117a_3, {
                    children: notification
                }, void 0, false, {
                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\LoginPage.tsx",
                    lineNumber: 228,
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
__webpack_require__.h = () => ("ef0711509275b38d")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.1ed8dc20cc430f70.css.hot-update.json"]];

})();

}
;
;

    });
    return tt.require("main__main-thread.1ed8dc20cc430f70.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://192.168.100.126:3001/main__main-thread.1ed8dc20cc430f70.hot-update.js.map