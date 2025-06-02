(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main__main-thread.0d18373dec223d65.hot-update.js", function(require, module, exports, Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,ReactLynx,nativeAppId,Behavior,LynxJSBI,lynx,window) {
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
"(react:main-thread)/./src/pages/task/TaskDetailPage.tsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (TaskDetailPage)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/react-router/dist/index.js");
/* ESM import */var _stores_auth_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./src/stores/auth.store.ts");
/* ESM import */var _graphql_queries_task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./src/graphql/queries/task.ts");
/* ESM import */var _graphql_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./src/graphql/client.ts");
/* ESM import */var _utils_format_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./src/utils/format.ts");
"use client";








var OrderStatus = /*#__PURE__*/ function(OrderStatus) {
    OrderStatus["WaitingForCheckingQuality"] = "WAITING_FOR_CHECKING_QUALITY";
    OrderStatus["ReworkRequired"] = "REWORK_REQUIRED";
    return OrderStatus;
}(OrderStatus || {});
var OrderDetailStatus = /*#__PURE__*/ function(OrderDetailStatus) {
    OrderDetailStatus["Pending"] = "PENDING";
    OrderDetailStatus["Completed"] = "COMPLETED";
    return OrderDetailStatus;
}(OrderDetailStatus || {});
const __snapshot_62654_9db1f_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "items-center justify-center bg-gray-50");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "p-8 rounded-2xl bg-white shadow-lg");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "items-center");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "w-12 h-12 rounded-full border-3 border-blue-500 border-t-transparent animate-spin mb-4");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-gray-700 font-medium text-lg text-center");
    __AppendElement(el2, el4);
    const el5 = __CreateRawText("Loading order details...");
    __AppendElement(el4, el5);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5
    ];
}, null, null, undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "items-center justify-center bg-gray-50 p-4");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "p-8 rounded-2xl bg-red-50 shadow-lg border border-red-200");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "text-red-600 font-bold text-xl mb-3 text-center");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Unable to load order details");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-red-500 text-center mb-6");
    __AppendElement(el1, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "bg-white rounded-xl p-5 border border-red-100");
    __AppendElement(el1, el5);
    const el6 = __CreateText(pageId);
    __SetClasses(el6, "text-gray-700 text-center");
    __AppendElement(el5, el6);
    const el7 = __CreateRawText("Please check your connection and tap here to try again.");
    __AppendElement(el6, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        4
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "items-center justify-center bg-gray-50 p-4");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "p-8 rounded-2xl bg-yellow-50 shadow-lg border border-yellow-200");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "text-yellow-600 font-bold text-xl mb-3 text-center");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Order not found");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-yellow-500 text-center mb-6");
    __AppendElement(el1, el4);
    const el5 = __CreateRawText("The order you're looking for doesn't exist or you don't have permission to view it.");
    __AppendElement(el4, el5);
    const el6 = __CreateView(pageId);
    __SetClasses(el6, "bg-white rounded-xl p-5 border border-yellow-100");
    __AppendElement(el1, el6);
    const el7 = __CreateText(pageId);
    __SetClasses(el7, "text-gray-700 text-center");
    __AppendElement(el6, el7);
    const el8 = __CreateRawText("Return to task list");
    __AppendElement(el7, el8);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 6, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_5 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_5", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_6 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_6", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm text-gray-500");
    const el1 = __CreateRawText("Est. completion: ");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_7 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_7", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-lg font-bold text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_8 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_8", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-lg font-bold text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_9 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_9", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-lg font-bold text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_10 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_10", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-blue-600 font-bold text-lg");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_11 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_11", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-gray-800 font-semibold mt-1");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_12 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_12", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-gray-500 text-sm");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_13 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_13", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-purple-600 font-bold text-lg");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_14 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_14", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-gray-800 font-semibold");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_15 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_15", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-gray-500 text-sm");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_16 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_16", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm text-gray-600");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_17 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_17", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm text-gray-600");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_20 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_20", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "border-l-2 border-blue-500 pl-4 pb-6 relative");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-800");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Assigned to Factory");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-sm text-gray-500");
    __AppendElement(el, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el5);
    const el6 = __CreateRawText(" at");
    __AppendElement(el4, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_21 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_21", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "border-l-2 border-blue-500 pl-4 pb-6 relative");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-800");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Accepted by Factory");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-sm text-gray-500");
    __AppendElement(el, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el5);
    const el6 = __CreateRawText(" at");
    __AppendElement(el4, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_22 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_22", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "border-l-2 border-blue-500 pl-4 pb-6 relative");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-800");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Production Completed");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-sm text-gray-500");
    __AppendElement(el, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el5);
    const el6 = __CreateRawText(" at");
    __AppendElement(el4, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_23 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_23", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "border-l-2 border-blue-500 pl-4 pb-6 relative");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-800");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Quality Check Completed");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-sm text-gray-500");
    __AppendElement(el, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el5);
    const el6 = __CreateRawText(" at");
    __AppendElement(el4, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_24 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_24", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "border-l-2 border-blue-500 pl-4 pb-6 relative");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-800");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Shipped");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-sm text-gray-500");
    __AppendElement(el, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el5);
    const el6 = __CreateRawText(" at");
    __AppendElement(el4, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_25 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_25", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "border-l-2 border-blue-500 pl-4 relative");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-4 h-4 rounded-full bg-green-500 absolute -left-[8px] top-0");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-800");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Completed");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-sm text-gray-500");
    __AppendElement(el, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el5);
    const el6 = __CreateRawText(" at");
    __AppendElement(el4, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_27 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_27", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm text-gray-400");
    const el1 = __CreateRawText("Estimated: ");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_26 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_26", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "border-l-2 border-gray-300 pl-4 relative");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-4 h-4 rounded-full bg-gray-300 absolute -left-[8px] top-0");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-400");
    __AppendElement(el, el2);
    const el3 = __CreateRawText("Pending Completion");
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        4
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_30 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_30", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "w-28 h-28 rounded-md");
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[0]);
    }
], null, undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_29 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_29", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "w-28 h-28 rounded-md");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_31 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_31", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm text-gray-500");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_28 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_28", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "flex-row justify-between items-center");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "flex-row items-center");
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "flex justify-center");
    __AppendElement(el2, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "text-sm text-gray-500 flex items-center");
    __AppendElement(el4, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el6);
    const el7 = __CreateRawText(" •");
    __AppendElement(el5, el7);
    const el8 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el8);
    const el9 = __CreateView(pageId);
    __SetClasses(el9, "w-3 h-3 rounded-full mr-1");
    __AppendElement(el5, el9);
    const el10 = __CreateView(pageId);
    __SetClasses(el10, "flex items-center");
    __AppendElement(el1, el10);
    const el11 = __CreateText(pageId);
    __SetClasses(el11, "font-bold text-gray-800 mr-2");
    __AppendElement(el10, el11);
    const el12 = __CreateWrapperElement(pageId);
    __AppendElement(el11, el12);
    const el13 = __CreateRawText("x");
    __AppendElement(el11, el13);
    const el14 = __CreateWrapperElement(pageId);
    __AppendElement(el10, el14);
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
        el14
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) {
            let el = ctx.__elements[9];
            let style_values = ctx.__values[2];
            __AddInlineStyle(el, 7, style_values[0]);
        }
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        8
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        12
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        14
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_34 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_34", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm text-gray-500");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_35 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_35", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-gray-700 mb-3");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_37 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_37", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "w-20 h-20 mr-2 mb-2");
    const el1 = __CreateImage(pageId);
    __SetClasses(el1, "w-20 h-20 rounded-md object-cover");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[1], "src", ctx.__values[0]);
    }
], null, undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_36 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_36", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "flex-row flex-wrap");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_33 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_33", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "p-4 rounded-xl bg-gray-50 border border-gray-200 mb-3");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "flex-row justify-between items-center mb-2");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-800");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Report #");
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el, el6);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_32 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_32", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "bg-white rounded-2xl border border-gray-200 p-5 mb-4");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-lg font-bold text-gray-800 mb-4");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Progress Reports");
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        3
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_40 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_40", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-semibold text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_41 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_41", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, " font-bold");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_42 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_42", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "ml-1 font-bold text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_45 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_45", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm text-gray-500");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_46 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_46", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm font-semibold text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_47 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_47", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, " text-gray-500");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_48 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_48", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, " font-bold");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_44 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_44", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "p-3 rounded-lg bg-white border border-gray-200 mb-2");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "flex justify-between mb-1");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "flex justify-between");
    __AppendElement(el, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el5);
    const el6 = __CreateView(pageId);
    __AppendElement(el4, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el6, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[6], ctx.__values[0] || '');
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_43 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_43", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-sm font-semibold text-gray-700 mb-2");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Transactions:");
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        3
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_39 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_39", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "p-4 rounded-xl bg-gray-50 border border-gray-200 mb-3");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "flex-row justify-between items-center mb-2");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __AppendElement(el1, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "flex mb-2");
    __AppendElement(el, el5);
    const el6 = __CreateText(pageId);
    __SetClasses(el6, "text-gray-500");
    __AppendElement(el5, el6);
    const el7 = __CreateRawText("Amount:");
    __AppendElement(el6, el7);
    const el8 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el8);
    const el9 = __CreateWrapperElement(pageId);
    __AppendElement(el, el9);
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
        el9
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[3], ctx.__values[0] || '');
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        8
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        9
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_38 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_38", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "bg-white rounded-2xl border border-gray-200 p-5 mb-4");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-lg font-bold text-gray-800 mb-4");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Payment Information");
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        3
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_19 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_19", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "bg-white rounded-2xl border border-gray-200 p-5 mb-4");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "text-lg font-bold text-gray-800 mb-4");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Order Timeline");
    __AppendElement(el2, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "ml-3");
    __AppendElement(el1, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "border-l-2 border-blue-500 pl-4 pb-6 relative");
    __AppendElement(el4, el5);
    const el6 = __CreateView(pageId);
    __SetClasses(el6, "w-4 h-4 rounded-full bg-blue-500 absolute -left-[8px] top-0");
    __AppendElement(el5, el6);
    const el7 = __CreateText(pageId);
    __SetClasses(el7, "font-semibold text-gray-800");
    __AppendElement(el5, el7);
    const el8 = __CreateRawText("Order Placed");
    __AppendElement(el7, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "text-sm text-gray-500");
    __AppendElement(el5, el9);
    const el10 = __CreateWrapperElement(pageId);
    __AppendElement(el9, el10);
    const el11 = __CreateRawText(" at");
    __AppendElement(el9, el11);
    const el12 = __CreateWrapperElement(pageId);
    __AppendElement(el9, el12);
    const el13 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el13);
    const el14 = __CreateView(pageId);
    __SetClasses(el14, "bg-white rounded-2xl border border-gray-200 p-5 mb-4");
    __AppendElement(el, el14);
    const el15 = __CreateText(pageId);
    __SetClasses(el15, "text-lg font-bold text-gray-800 mb-4");
    __AppendElement(el14, el15);
    const el16 = __CreateWrapperElement(pageId);
    __AppendElement(el15, el16);
    const el17 = __CreateRawText("(");
    __AppendElement(el15, el17);
    const el18 = __CreateWrapperElement(pageId);
    __AppendElement(el15, el18);
    const el19 = __CreateRawText(")");
    __AppendElement(el15, el19);
    const el20 = __CreateWrapperElement(pageId);
    __AppendElement(el14, el20);
    const el21 = __CreateWrapperElement(pageId);
    __AppendElement(el, el21);
    const el22 = __CreateWrapperElement(pageId);
    __AppendElement(el, el22);
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
        el18,
        el19,
        el20,
        el21,
        el22
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        10
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        12
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        13
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        16
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        18
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        20
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        21
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        22
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_53 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_53", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_54 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_54", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-gray-600 mt-1 block");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_52 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_52", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "bg-gray-50 p-4 rounded-lg border border-gray-200");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_51 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_51", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "space-y-3");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_50 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_50", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "mb-6");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-md font-medium mb-3");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Evaluation Criteria (");
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el3);
    const el4 = __CreateRawText("):");
    __AppendElement(el1, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el, el5);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_57 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_57", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "w-28 h-28 rounded-md");
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[0]);
    }
], null, undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_56 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_56", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "rounded-md mb-2");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_55 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_55", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "flex");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_59 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_59", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-semibold text-gray-800 mb-2");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_60 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_60", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_61 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_61", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_62 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_62", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_63 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_63", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-green-600");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_64 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_64", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-red-600");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_65 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_65", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_58 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_58", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "p-4 rounded-xl bg-gray-50 border border-gray-200");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "flex-row justify-between items-center mb-3");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __AppendElement(el1, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "flex-row mb-3");
    __AppendElement(el, el5);
    const el6 = __CreateView(pageId);
    __SetClasses(el6, "flex items-center mb-2");
    __AppendElement(el5, el6);
    const el7 = __CreateText(pageId);
    __SetClasses(el7, "text-gray-500 mr-2");
    __AppendElement(el6, el7);
    const el8 = __CreateRawText("Size");
    __AppendElement(el7, el8);
    const el9 = __CreateWrapperElement(pageId);
    __AppendElement(el6, el9);
    const el10 = __CreateView(pageId);
    __SetClasses(el10, "flex items-center mb-2");
    __AppendElement(el5, el10);
    const el11 = __CreateText(pageId);
    __SetClasses(el11, "text-gray-500 mr-2");
    __AppendElement(el10, el11);
    const el12 = __CreateRawText("Color");
    __AppendElement(el11, el12);
    const el13 = __CreateView(pageId);
    __SetClasses(el13, "flex-row items-center");
    __AppendElement(el10, el13);
    const el14 = __CreateView(pageId);
    __SetClasses(el14, "w-3 h-3 rounded-full mr-1");
    __AppendElement(el13, el14);
    const el15 = __CreateView(pageId);
    __SetClasses(el15, "flex items-center");
    __AppendElement(el5, el15);
    const el16 = __CreateText(pageId);
    __SetClasses(el16, "text-gray-500 mr-2");
    __AppendElement(el15, el16);
    const el17 = __CreateRawText("Quantity");
    __AppendElement(el16, el17);
    const el18 = __CreateWrapperElement(pageId);
    __AppendElement(el15, el18);
    const el19 = __CreateView(pageId);
    __SetClasses(el19, "flex-row justify-between");
    __AppendElement(el, el19);
    const el20 = __CreateView(pageId);
    __SetClasses(el20, "flex items-center mb-2");
    __AppendElement(el19, el20);
    const el21 = __CreateText(pageId);
    __SetClasses(el21, "text-gray-500 mr-2");
    __AppendElement(el20, el21);
    const el22 = __CreateRawText("Completed");
    __AppendElement(el21, el22);
    const el23 = __CreateWrapperElement(pageId);
    __AppendElement(el20, el23);
    const el24 = __CreateView(pageId);
    __SetClasses(el24, "flex items-center mb-2");
    __AppendElement(el19, el24);
    const el25 = __CreateText(pageId);
    __SetClasses(el25, "text-gray-500 mr-2");
    __AppendElement(el24, el25);
    const el26 = __CreateRawText("Rejected");
    __AppendElement(el25, el26);
    const el27 = __CreateWrapperElement(pageId);
    __AppendElement(el24, el27);
    const el28 = __CreateView(pageId);
    __SetClasses(el28, "flex items-center mb-2");
    __AppendElement(el19, el28);
    const el29 = __CreateText(pageId);
    __SetClasses(el29, "text-gray-500 mr-2");
    __AppendElement(el28, el29);
    const el30 = __CreateRawText("Rework");
    __AppendElement(el29, el30);
    const el31 = __CreateWrapperElement(pageId);
    __AppendElement(el28, el31);
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
        el18,
        el19,
        el20,
        el21,
        el22,
        el23,
        el24,
        el25,
        el26,
        el27,
        el28,
        el29,
        el30,
        el31
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[3], ctx.__values[0] || '');
    },
    function(ctx) {
        if (ctx.__elements) {
            let el = ctx.__elements[14];
            let style_values = ctx.__values[1];
            __AddInlineStyle(el, 7, style_values[0]);
        }
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        9
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        18
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        23
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        27
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        31
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_68 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_68", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_69 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_69", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_70 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_70", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-green-600");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_76 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_76", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-in text-xl");
    const el1 = __CreateRawText("✓");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, null, undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_75 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_75", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center mr-3");
    return [
        el
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_77 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_77", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "font-medium text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_78 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_78", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-gray-600 text-sm");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_74 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_74", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "flex items-center bg-white p-3 rounded-lg border border-gray-200");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "flex-1");
    __AppendElement(el, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_73 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_73", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "space-y-2");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_72 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_72", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "mt-4");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-md font-medium mb-3");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Select Failed Criteria (");
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el3);
    const el4 = __CreateRawText("items failed):");
    __AppendElement(el1, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el, el5);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_79 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_79", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-white text-lg font-medium");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_80 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_80", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-red-500 text-sm mt-2");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_81 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_81", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-green-500 text-sm mt-2");
    const el1 = __CreateRawText("Quality check completed successfully!");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, null, null, undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_71 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_71", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "p-3 rounded-lg bg-white border border-gray-200 mb-3");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-lg font-semibold text-gray-700 mb-2");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Complete Quality Check");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "flex items-center mb-3");
    __AppendElement(el, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-gray-500 mr-2");
    __AppendElement(el3, el4);
    const el5 = __CreateRawText("Passed Quantity:");
    __AppendElement(el4, el5);
    const el6 = __CreateElement("input", pageId);
    __SetAttribute(el6, "type", "number");
    __SetClasses(el6, "w-20 h-8 px-2 border border-slate-300 rounded-xl text-lg");
    __SetAttribute(el6, "placeholder", "0");
    __SetAttribute(el6, "min", "0");
    __AppendElement(el3, el6);
    const el7 = __CreateView(pageId);
    __SetClasses(el7, "flex items-center mb-3");
    __AppendElement(el, el7);
    const el8 = __CreateText(pageId);
    __SetClasses(el8, "text-gray-500 mr-2");
    __AppendElement(el7, el8);
    const el9 = __CreateRawText("Note:");
    __AppendElement(el8, el9);
    const el10 = __CreateElement("input", pageId);
    __SetAttribute(el10, "type", "text");
    __SetClasses(el10, "flex-1 h-8 px-2 border border-slate-300 rounded-xl text-lg");
    __SetAttribute(el10, "placeholder", "Add a note (optional)");
    __AppendElement(el7, el10);
    const el11 = __CreateWrapperElement(pageId);
    __AppendElement(el, el11);
    const el12 = __CreateView(pageId);
    __AppendElement(el, el12);
    const el13 = __CreateWrapperElement(pageId);
    __AppendElement(el12, el13);
    const el14 = __CreateWrapperElement(pageId);
    __AppendElement(el, el14);
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
        el14
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[6], "max", ctx.__values[0]);
    },
    function(ctx) {
        if (ctx.__elements) __SetID(ctx.__elements[6], ctx.__values[1]);
    },
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[6], "value", ctx.__values[2]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 6, "bindEvent", "input", ''),
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[10], "value", ctx.__values[4]);
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 10, "bindEvent", "input", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[12], ctx.__values[6] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 12, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        11
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        13
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        14
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_83 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_83", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm font-medium text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_84 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_84", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "text-sm font-medium text-gray-800");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_85 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_85", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_86 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_86", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "mt-2");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "flex items-center mb-2");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "text-gray-500 mr-2");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Note:");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-sm text-gray-700 bg-gray-50 p-2 rounded-md mt-1");
    __AppendElement(el, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        4
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_82 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_82", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "p-3 rounded-lg bg-white border border-gray-200");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-lg font-semibold text-gray-700 mb-2");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Task Information:");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "flex-row justify-between mb-2");
    __AppendElement(el, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "flex items-center");
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "text-gray-500 mr-2");
    __AppendElement(el4, el5);
    const el6 = __CreateRawText("Task Name:");
    __AppendElement(el5, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "flex-row justify-between mb-2");
    __AppendElement(el, el8);
    const el9 = __CreateView(pageId);
    __SetClasses(el9, "flex items-center");
    __AppendElement(el8, el9);
    const el10 = __CreateText(pageId);
    __SetClasses(el10, "text-gray-500 mr-2");
    __AppendElement(el9, el10);
    const el11 = __CreateRawText("Assignee:");
    __AppendElement(el10, el11);
    const el12 = __CreateWrapperElement(pageId);
    __AppendElement(el9, el12);
    const el13 = __CreateView(pageId);
    __SetClasses(el13, "flex-row justify-between mb-2");
    __AppendElement(el, el13);
    const el14 = __CreateView(pageId);
    __SetClasses(el14, "flex items-center");
    __AppendElement(el13, el14);
    const el15 = __CreateText(pageId);
    __SetClasses(el15, "text-gray-500 mr-2");
    __AppendElement(el14, el15);
    const el16 = __CreateRawText("Status:");
    __AppendElement(el15, el16);
    const el17 = __CreateView(pageId);
    __AppendElement(el14, el17);
    const el18 = __CreateWrapperElement(pageId);
    __AppendElement(el17, el18);
    const el19 = __CreateWrapperElement(pageId);
    __AppendElement(el, el19);
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
        el18,
        el19
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[17], ctx.__values[0] || '');
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        12
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        18
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        19
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_67 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_67", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "p-4 rounded-xl bg-gray-50 border border-gray-200 mb-3");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "flex-row justify-between items-center mb-3");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "font-semibold text-gray-800 mb-2");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Quality Check #");
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el4);
    const el5 = __CreateView(pageId);
    __AppendElement(el1, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el6);
    const el7 = __CreateView(pageId);
    __SetClasses(el7, "flex-row mb-3");
    __AppendElement(el, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "flex items-center mb-2");
    __AppendElement(el7, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "text-gray-500 mr-2");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("Total Checked");
    __AppendElement(el9, el10);
    const el11 = __CreateWrapperElement(pageId);
    __AppendElement(el8, el11);
    const el12 = __CreateView(pageId);
    __SetClasses(el12, "flex items-center mb-2");
    __AppendElement(el7, el12);
    const el13 = __CreateText(pageId);
    __SetClasses(el13, "text-gray-500 mr-2");
    __AppendElement(el12, el13);
    const el14 = __CreateRawText("Passed");
    __AppendElement(el13, el14);
    const el15 = __CreateWrapperElement(pageId);
    __AppendElement(el12, el15);
    const el16 = __CreateWrapperElement(pageId);
    __AppendElement(el, el16);
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
        el16
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[5], ctx.__values[0] || '');
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        11
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        15
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        16
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_66 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_66", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "bg-white rounded-2xl border border-gray-200 p-5 mb-4");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "text-lg font-bold text-gray-800 mb-4");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Quality Checks");
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        3
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_87 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_87", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "bg-white rounded-2xl border border-gray-200 p-5 mb-4 items-center");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "w-28 h-28 bg-gray-200 rounded-full items-center justify-center mb-3");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "text-2xl");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("🔍");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "text-lg font-semibold text-gray-800 text-center mb-2");
    __AppendElement(el, el4);
    const el5 = __CreateRawText("No Quality Checks Found");
    __AppendElement(el4, el5);
    const el6 = __CreateText(pageId);
    __SetClasses(el6, "text-gray-500 text-center");
    __AppendElement(el, el6);
    const el7 = __CreateRawText("This product doesn't have any quality checks yet.");
    __AppendElement(el6, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, null, undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_49 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_49", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "bg-white rounded-2xl border border-gray-200 p-5 mb-4");
    __AppendElement(el, el2);
    const el3 = __CreateText(pageId);
    __SetClasses(el3, "text-lg font-bold text-gray-800 mb-4");
    __AppendElement(el2, el3);
    const el4 = __CreateRawText("Select Product");
    __AppendElement(el3, el4);
    const el5 = __CreateScrollView(pageId);
    __SetAttribute(el5, "scroll-orientation", "horizontal");
    __SetInlineStyles(el5, "width:calc(100% - 10px);height:100px");
    __SetClasses(el5, "mb-4");
    __AppendElement(el2, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el7);
    const el8 = __CreateWrapperElement(pageId);
    __AppendElement(el, el8);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        8
    ]
], undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_18 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_18", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "px-4 mt-4");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry);
const __snapshot_62654_9db1f_4 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_62654_9db1f_4", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateScrollView(pageId);
    __SetAttribute(el, "scroll-orientation", "vertical");
    __SetClasses(el, "pt-4 pb-4 w-full h-full");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "px-5 py-6");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "flex-row");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "flex items-center justify-between");
    __AppendElement(el2, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "rounded-md bg-gray-200 flex items-center justify-center w-28 h-10");
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "font-bold text-3xl mb-3");
    __AppendElement(el4, el5);
    const el6 = __CreateRawText("← ");
    __AppendElement(el5, el6);
    const el7 = __CreateText(pageId);
    __SetClasses(el7, "font-medium text-lg -ml-1");
    __AppendElement(el4, el7);
    const el8 = __CreateRawText("Back");
    __AppendElement(el7, el8);
    const el9 = __CreateView(pageId);
    __SetClasses(el9, "flex-row items-center px-4");
    __AppendElement(el3, el9);
    const el10 = __CreateText(pageId);
    __SetClasses(el10, "font-medium");
    __AppendElement(el9, el10);
    const el11 = __CreateRawText("Hi, ");
    __AppendElement(el10, el11);
    const el12 = __CreateWrapperElement(pageId);
    __AppendElement(el10, el12);
    const el13 = __CreateView(pageId);
    __SetClasses(el13, "rounded-md bg-gray-200 flex items-center justify-center w-28 h-10 mt-2");
    __AppendElement(el9, el13);
    const el14 = __CreateText(pageId);
    __SetClasses(el14, "font-medium");
    __AppendElement(el13, el14);
    const el15 = __CreateRawText("Logout");
    __AppendElement(el14, el15);
    const el16 = __CreateText(pageId);
    __SetClasses(el16, "-mt-3 text-4xl");
    __AppendElement(el13, el16);
    const el17 = __CreateRawText("↪");
    __AppendElement(el16, el17);
    const el18 = __CreateView(pageId);
    __SetClasses(el18, "mt-4");
    __AppendElement(el2, el18);
    const el19 = __CreateText(pageId);
    __SetClasses(el19, "text-xl font-bold");
    __AppendElement(el18, el19);
    const el20 = __CreateRawText("Order #");
    __AppendElement(el19, el20);
    const el21 = __CreateWrapperElement(pageId);
    __AppendElement(el19, el21);
    const el22 = __CreateText(pageId);
    __SetClasses(el22, "mt-1");
    __AppendElement(el18, el22);
    const el23 = __CreateRawText("Ordered on: ");
    __AppendElement(el22, el23);
    const el24 = __CreateWrapperElement(pageId);
    __AppendElement(el22, el24);
    const el25 = __CreateView(pageId);
    __SetClasses(el25, "px-4");
    __AppendElement(el, el25);
    const el26 = __CreateView(pageId);
    __SetClasses(el26, "bg-white rounded-2xl border border-gray-200 p-5");
    __AppendElement(el25, el26);
    const el27 = __CreateView(pageId);
    __SetClasses(el27, "flex-row justify-between items-center mb-4");
    __AppendElement(el26, el27);
    const el28 = __CreateText(pageId);
    __SetClasses(el28, "text-lg font-bold text-gray-800");
    __AppendElement(el27, el28);
    const el29 = __CreateRawText("Order Status");
    __AppendElement(el28, el29);
    const el30 = __CreateView(pageId);
    __AppendElement(el27, el30);
    const el31 = __CreateWrapperElement(pageId);
    __AppendElement(el30, el31);
    const el32 = __CreateView(pageId);
    __SetClasses(el32, "mb-4");
    __AppendElement(el26, el32);
    const el33 = __CreateText(pageId);
    __SetClasses(el33, "text-sm text-gray-500 mb-2");
    __AppendElement(el32, el33);
    const el34 = __CreateRawText("Progress");
    __AppendElement(el33, el34);
    const el35 = __CreateView(pageId);
    __SetClasses(el35, "flex-row justify-between mb-2");
    __AppendElement(el32, el35);
    const el36 = __CreateText(pageId);
    __SetClasses(el36, "text-lg font-bold text-gray-800");
    __AppendElement(el35, el36);
    const el37 = __CreateWrapperElement(pageId);
    __AppendElement(el36, el37);
    const el38 = __CreateRawText("% Complete");
    __AppendElement(el36, el38);
    const el39 = __CreateWrapperElement(pageId);
    __AppendElement(el35, el39);
    const el40 = __CreateView(pageId);
    __SetClasses(el40, "h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner");
    __AppendElement(el32, el40);
    const el41 = __CreateView(pageId);
    __AppendElement(el40, el41);
    const el42 = __CreateView(pageId);
    __SetClasses(el42, "flex-row justify-between");
    __AppendElement(el26, el42);
    const el43 = __CreateView(pageId);
    __SetClasses(el43, "items-center mb-2");
    __AppendElement(el42, el43);
    const el44 = __CreateText(pageId);
    __SetClasses(el44, "text-sm text-gray-500");
    __AppendElement(el43, el44);
    const el45 = __CreateRawText("Total Items");
    __AppendElement(el44, el45);
    const el46 = __CreateWrapperElement(pageId);
    __AppendElement(el43, el46);
    const el47 = __CreateView(pageId);
    __SetClasses(el47, "items-center mb-2");
    __AppendElement(el42, el47);
    const el48 = __CreateText(pageId);
    __SetClasses(el48, "text-sm text-gray-500");
    __AppendElement(el47, el48);
    const el49 = __CreateRawText("Total Price");
    __AppendElement(el48, el49);
    const el50 = __CreateWrapperElement(pageId);
    __AppendElement(el47, el50);
    const el51 = __CreateView(pageId);
    __SetClasses(el51, "items-center");
    __AppendElement(el42, el51);
    const el52 = __CreateText(pageId);
    __SetClasses(el52, "text-sm text-gray-500");
    __AppendElement(el51, el52);
    const el53 = __CreateRawText("Shipping");
    __AppendElement(el52, el53);
    const el54 = __CreateWrapperElement(pageId);
    __AppendElement(el51, el54);
    const el55 = __CreateView(pageId);
    __SetClasses(el55, "px-4 mt-4");
    __AppendElement(el, el55);
    const el56 = __CreateView(pageId);
    __SetClasses(el56, "bg-white rounded-2xl border border-gray-200 p-5");
    __AppendElement(el55, el56);
    const el57 = __CreateView(pageId);
    __SetClasses(el57, "flex-row justify-between mb-6");
    __AppendElement(el56, el57);
    const el58 = __CreateView(pageId);
    __SetClasses(el58, "mb-6");
    __AppendElement(el57, el58);
    const el59 = __CreateText(pageId);
    __SetClasses(el59, "uppercase text-gray-500 font-bold mb-2");
    __AppendElement(el58, el59);
    const el60 = __CreateRawText("Customer");
    __AppendElement(el59, el60);
    const el61 = __CreateView(pageId);
    __SetClasses(el61, "flex-row items-center bg-gray-50 p-3 rounded-xl border border-gray-200");
    __AppendElement(el58, el61);
    const el62 = __CreateView(pageId);
    __SetClasses(el62, "w-10 h-10 rounded-full bg-blue-100 items-center justify-center");
    __AppendElement(el61, el62);
    const el63 = __CreateWrapperElement(pageId);
    __AppendElement(el62, el63);
    const el64 = __CreateWrapperElement(pageId);
    __AppendElement(el61, el64);
    const el65 = __CreateWrapperElement(pageId);
    __AppendElement(el61, el65);
    const el66 = __CreateView(pageId);
    __SetClasses(el66, "");
    __AppendElement(el57, el66);
    const el67 = __CreateText(pageId);
    __SetClasses(el67, " uppercase text-gray-500 font-bold mb-2");
    __AppendElement(el66, el67);
    const el68 = __CreateRawText("Factory");
    __AppendElement(el67, el68);
    const el69 = __CreateView(pageId);
    __SetClasses(el69, "flex-row items-center bg-gray-50 p-3 rounded-xl border border-gray-200");
    __AppendElement(el66, el69);
    const el70 = __CreateView(pageId);
    __SetClasses(el70, "w-10 h-10 rounded-full bg-purple-100 items-center justify-center");
    __AppendElement(el69, el70);
    const el71 = __CreateWrapperElement(pageId);
    __AppendElement(el70, el71);
    const el72 = __CreateWrapperElement(pageId);
    __AppendElement(el69, el72);
    const el73 = __CreateWrapperElement(pageId);
    __AppendElement(el69, el73);
    const el74 = __CreateView(pageId);
    __AppendElement(el56, el74);
    const el75 = __CreateText(pageId);
    __SetClasses(el75, " uppercase text-gray-500 font-bold mb-2");
    __AppendElement(el74, el75);
    const el76 = __CreateRawText("Addresses");
    __AppendElement(el75, el76);
    const el77 = __CreateView(pageId);
    __SetClasses(el77, "bg-gray-50 p-4 rounded-xl border border-gray-200 mb-3");
    __AppendElement(el74, el77);
    const el78 = __CreateText(pageId);
    __SetClasses(el78, "text-sm font-semibold text-gray-700 mb-1");
    __AppendElement(el77, el78);
    const el79 = __CreateRawText("Shipping Address:");
    __AppendElement(el78, el79);
    const el80 = __CreateWrapperElement(pageId);
    __AppendElement(el77, el80);
    const el81 = __CreateView(pageId);
    __SetClasses(el81, "bg-gray-50 p-4 rounded-xl border border-gray-200");
    __AppendElement(el74, el81);
    const el82 = __CreateText(pageId);
    __SetClasses(el82, "text-sm font-semibold text-gray-700 mb-1");
    __AppendElement(el81, el82);
    const el83 = __CreateRawText("Factory Address:");
    __AppendElement(el82, el83);
    const el84 = __CreateWrapperElement(pageId);
    __AppendElement(el81, el84);
    const el85 = __CreateView(pageId);
    __SetClasses(el85, "flex-row bg-white border-b border-gray-200 mt-6");
    __AppendElement(el, el85);
    const el86 = __CreateView(pageId);
    __AppendElement(el85, el86);
    const el87 = __CreateText(pageId);
    __AppendElement(el86, el87);
    const el88 = __CreateRawText("Details");
    __AppendElement(el87, el88);
    const el89 = __CreateView(pageId);
    __AppendElement(el85, el89);
    const el90 = __CreateText(pageId);
    __AppendElement(el89, el90);
    const el91 = __CreateRawText("Quality");
    __AppendElement(el90, el91);
    const el92 = __CreateWrapperElement(pageId);
    __AppendElement(el, el92);
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
        el18,
        el19,
        el20,
        el21,
        el22,
        el23,
        el24,
        el25,
        el26,
        el27,
        el28,
        el29,
        el30,
        el31,
        el32,
        el33,
        el34,
        el35,
        el36,
        el37,
        el38,
        el39,
        el40,
        el41,
        el42,
        el43,
        el44,
        el45,
        el46,
        el47,
        el48,
        el49,
        el50,
        el51,
        el52,
        el53,
        el54,
        el55,
        el56,
        el57,
        el58,
        el59,
        el60,
        el61,
        el62,
        el63,
        el64,
        el65,
        el66,
        el67,
        el68,
        el69,
        el70,
        el71,
        el72,
        el73,
        el74,
        el75,
        el76,
        el77,
        el78,
        el79,
        el80,
        el81,
        el82,
        el83,
        el84,
        el85,
        el86,
        el87,
        el88,
        el89,
        el90,
        el91,
        el92
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 4, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 13, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[30], ctx.__values[2] || '');
    },
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[41], ctx.__values[3] || '');
    },
    function(ctx) {
        if (ctx.__elements) {
            let el = ctx.__elements[41];
            let style_values = ctx.__values[4];
            __AddInlineStyle(el, 27, style_values[0]);
        }
    },
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[86], ctx.__values[5] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 86, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[87], ctx.__values[7] || '');
    },
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[89], ctx.__values[8] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 89, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[90], ctx.__values[10] || '');
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        12
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        21
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        24
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        31
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        37
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        39
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        46
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        50
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        54
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        63
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        64
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        65
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        71
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        72
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        73
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        80
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        84
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        92
    ]
], undefined, globDynamicComponentEntry);
function TaskDetailPage() {
    var _order_orderDetails, _useAuthStore_getState_user, _order_customer_name, _order_customer, _order_customer1, _order_factory_name, _order_factory, _order_factory1, _order_factory2, _order_address, _order_factory_address, _order_factory3, _order_orderDetails1, _order_orderDetails2, _order_orderDetails3, _order_orderDetails4, _selectedOrderDetail_systemConfigVariant, _selectedOrderDetail_systemConfigVariant_product, _selectedOrderDetail_systemConfigVariant1, _selectedOrderDetail_systemConfigVariant2;
    const { id } = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useParams)();
    const nav = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    const { accessToken } = (0,_stores_auth_store_js__WEBPACK_IMPORTED_MODULE_2__.useAuthStore)();
    const [order, setOrder] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [activeTab, setActiveTab] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)("details");
    const [selectedOrderDetailIndex, setSelectedOrderDetailIndex] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [qualityCheckLoading, setQualityCheckLoading] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [qualityCheckError, setQualityCheckError] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [qualityCheckSuccess, setQualityCheckSuccess] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [passedQty, setPassedQty] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [note, setNote] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectedFailedEvaluationCriteriaIds, setSelectedFailedEvaluationCriteriaIds] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
    // Get status color
    const getStatusColor = (status, isDelayed)=>{
        if (isDelayed) return {
            bg: "bg-red-100",
            text: "text-red-600",
            border: "border-red-200"
        };
        if (status === "COMPLETED") return {
            bg: "bg-green-100",
            text: "text-green-600",
            border: "border-green-200"
        };
        if (status === "IN_PROGRESS") return {
            bg: "bg-blue-100",
            text: "text-blue-600",
            border: "border-blue-200"
        };
        return {
            bg: "bg-yellow-100",
            text: "text-yellow-600",
            border: "border-yellow-200"
        };
    };
    const handleQualityCheck = async (checkQualityId, passedQuantity)=>{
        if (!accessToken) {
            setQualityCheckError("User not authenticated");
            return;
        }
        setQualityCheckLoading(true);
        setQualityCheckError(null);
        setQualityCheckSuccess(false);
        try {
            var _result_doneCheckQuality;
            const result = await (0,_graphql_client_js__WEBPACK_IMPORTED_MODULE_4__.graphqlFetch)(_graphql_queries_task_js__WEBPACK_IMPORTED_MODULE_3__.CHECK_QUALITY_MUTATION, accessToken, {
                input: {
                    checkQualityId,
                    passedQuantity,
                    failedQuantity: selectedOrderDetail ? selectedOrderDetail.quantity - passedQuantity : 0,
                    note,
                    failedEvaluationCriteriaIds: selectedFailedEvaluationCriteriaIds
                }
            });
            if ((_result_doneCheckQuality = result.doneCheckQuality) === null || _result_doneCheckQuality === void 0 ? void 0 : _result_doneCheckQuality.id) {
                setQualityCheckSuccess(true);
                // Refresh order data
                const updatedOrder = await (0,_graphql_client_js__WEBPACK_IMPORTED_MODULE_4__.graphqlFetch)(_graphql_queries_task_js__WEBPACK_IMPORTED_MODULE_3__.GET_TASK_DETAIL_QUERY, accessToken, {
                    orderId: id
                });
                setOrder(updatedOrder.order);
            }
        } catch (err) {
            setQualityCheckError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally{
            setQualityCheckLoading(false);
        }
    };
    if (loading) return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_1, {}, void 0, false, {
        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
        lineNumber: 150,
        columnNumber: 7
    }, this);
    if (error) return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_2, {
        children: error
    }, void 0, false, {
        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
        lineNumber: 165,
        columnNumber: 7
    }, this);
    if (!order) return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_3, {
        values: [
            1
        ]
    }, void 0, false, {
        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
        lineNumber: 183,
        columnNumber: 7
    }, this);
    const statusStyle = getStatusColor(order.status, order.isDelayed);
    const progressPercentage = Math.min(order.currentProgress, 100);
    const selectedOrderDetail = (_order_orderDetails = order.orderDetails) === null || _order_orderDetails === void 0 ? void 0 : _order_orderDetails[selectedOrderDetailIndex];
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_4, {
        values: [
            1,
            1,
            `px-4 py-2 rounded-full ${statusStyle.bg} border ${statusStyle.border}`,
            `h-full rounded-full ${order.isDelayed ? "bg-red-500" : progressPercentage >= 100 ? "bg-green-500" : "bg-blue-500"}`,
            [
                `${progressPercentage}%`
            ],
            `py-4 px-5 items-center justify-center ${activeTab === "details" ? "border-b-3 border-blue-500 bg-blue-50" : ""}`,
            1,
            `font-semibold ${activeTab === "details" ? "text-blue-600" : "text-gray-600"}`,
            `py-4 px-5 items-center justify-center ${activeTab === "quality" ? "border-b-3 border-blue-500 bg-blue-50" : ""}`,
            1,
            `font-semibold ${activeTab === "quality" ? "text-blue-600" : "text-gray-600"}`
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: ((_useAuthStore_getState_user = _stores_auth_store_js__WEBPACK_IMPORTED_MODULE_2__.useAuthStore.getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.name) || "User"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: order.id
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.orderDate)
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_5, {
                values: [
                    `text-sm font-bold ${statusStyle.text}`
                ],
                children: order.isDelayed ? "DELAYED" : order.status
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 261,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: progressPercentage
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: order.estimatedCompletionAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_6, {
                    children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.estimatedCompletionAt)
                }, void 0, false, {
                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                    lineNumber: 274,
                    columnNumber: 17
                }, this)
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_7, {
                children: order.totalItems
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 298,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_8, {
                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(order.totalPrice)
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 304,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_9, {
                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(order.shippingPrice)
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 310,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_10, {
                children: (order === null || order === void 0 ? void 0 : (_order_customer = order.customer) === null || _order_customer === void 0 ? void 0 : (_order_customer_name = _order_customer.name) === null || _order_customer_name === void 0 ? void 0 : _order_customer_name.charAt(0)) || "C"
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 327,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_11, {
                children: order === null || order === void 0 ? void 0 : order.customer.name
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 331,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_12, {
                children: (_order_customer1 = order.customer) === null || _order_customer1 === void 0 ? void 0 : _order_customer1.email
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 334,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_13, {
                children: ((_order_factory = order.factory) === null || _order_factory === void 0 ? void 0 : (_order_factory_name = _order_factory.name) === null || _order_factory_name === void 0 ? void 0 : _order_factory_name.charAt(0)) || "F"
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 345,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_14, {
                children: ((_order_factory1 = order.factory) === null || _order_factory1 === void 0 ? void 0 : _order_factory1.name) || "Not assigned"
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 349,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: ((_order_factory2 = order.factory) === null || _order_factory2 === void 0 ? void 0 : _order_factory2.owner) && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_15, {
                    children: order.factory.owner.name
                }, void 0, false, {
                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                    lineNumber: 353,
                    columnNumber: 19
                }, this)
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_16, {
                children: ((_order_address = order.address) === null || _order_address === void 0 ? void 0 : _order_address.formattedAddress) || "No address provided"
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 369,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_17, {
                children: ((_order_factory3 = order.factory) === null || _order_factory3 === void 0 ? void 0 : (_order_factory_address = _order_factory3.address) === null || _order_factory_address === void 0 ? void 0 : _order_factory_address.formattedAddress) || "No address provided"
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 377,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_18, {
                children: [
                    activeTab === "details" && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_19, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.orderDate)
                            }, void 0, false, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: [
                                    " ",
                                    (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatTime)(order.orderDate)
                                ]
                            }, void 0, true, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: [
                                    order.assignedAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_20, {
                                        children: [
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.assignedAt)
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: [
                                                    " ",
                                                    (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatTime)(order.assignedAt)
                                                ]
                                            }, void 0, true, void 0, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 443,
                                        columnNumber: 19
                                    }, this),
                                    order.acceptedAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_21, {
                                        children: [
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.acceptedAt)
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: [
                                                    " ",
                                                    (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatTime)(order.acceptedAt)
                                                ]
                                            }, void 0, true, void 0, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 456,
                                        columnNumber: 19
                                    }, this),
                                    order.doneProductionAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_22, {
                                        children: [
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.doneProductionAt)
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: [
                                                    " ",
                                                    (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatTime)(order.doneProductionAt)
                                                ]
                                            }, void 0, true, void 0, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 469,
                                        columnNumber: 19
                                    }, this),
                                    order.doneCheckQualityAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_23, {
                                        children: [
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.doneCheckQualityAt)
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: [
                                                    " ",
                                                    (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatTime)(order.doneCheckQualityAt)
                                                ]
                                            }, void 0, true, void 0, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 482,
                                        columnNumber: 19
                                    }, this),
                                    order.shippedAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_24, {
                                        children: [
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.shippedAt)
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: [
                                                    " ",
                                                    (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatTime)(order.shippedAt)
                                                ]
                                            }, void 0, true, void 0, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 495,
                                        columnNumber: 19
                                    }, this),
                                    order.completedAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_25, {
                                        children: [
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.completedAt)
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: [
                                                    " ",
                                                    (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatTime)(order.completedAt)
                                                ]
                                            }, void 0, true, void 0, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 506,
                                        columnNumber: 19
                                    }, this),
                                    !order.completedAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_26, {
                                        children: order.estimatedCompletionAt && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_27, {
                                            children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(order.estimatedCompletionAt)
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 525,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 519,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: ((_order_orderDetails1 = order.orderDetails) === null || _order_orderDetails1 === void 0 ? void 0 : _order_orderDetails1.length) > 1 ? "Products" : "Product"
                            }, void 0, false, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: ((_order_orderDetails2 = order.orderDetails) === null || _order_orderDetails2 === void 0 ? void 0 : _order_orderDetails2.length) || 0
                            }, void 0, false, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: (_order_orderDetails3 = order.orderDetails) === null || _order_orderDetails3 === void 0 ? void 0 : _order_orderDetails3.map((detail, index)=>{
                                    var _detail_systemConfigVariant, _detail_design, _detail_systemConfigVariant1;
                                    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_28, {
                                        values: [
                                            `p-4 rounded-xl ${index === selectedOrderDetailIndex ? "bg-blue-50 border border-blue-200" : "bg-gray-50 border border-gray-200"} mb-3`,
                                            1,
                                            [
                                                ((_detail_systemConfigVariant = detail.systemConfigVariant) === null || _detail_systemConfigVariant === void 0 ? void 0 : _detail_systemConfigVariant.color) || "#ccc"
                                            ]
                                        ],
                                        children: [
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_29, {
                                                children: ((_detail_design = detail.design) === null || _detail_design === void 0 ? void 0 : _detail_design.thumbnailUrl) && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_30, {
                                                    values: [
                                                        detail.design.thumbnailUrl
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                lineNumber: 553,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: (_detail_systemConfigVariant1 = detail.systemConfigVariant) === null || _detail_systemConfigVariant1 === void 0 ? void 0 : _detail_systemConfigVariant1.size
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: " "
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                children: detail.quantity
                                            }, void 0, false, void 0, this),
                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_31, {
                                                children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(detail.price)
                                            }, void 0, false, {
                                                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                lineNumber: 582,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, detail.id, true, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 542,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: order.orderProgressReports && order.orderProgressReports.length > 0 && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_32, {
                                    children: order.orderProgressReports.map((report, index)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_33, {
                                            children: [
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                    children: index + 1
                                                }, void 0, false, void 0, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_34, {
                                                    children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(report.reportDate)
                                                }, void 0, false, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                    children: [
                                                        report.note && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_35, {
                                                            children: report.note
                                                        }, void 0, false, {
                                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 25
                                                        }, this),
                                                        report.imageUrls && report.imageUrls.length > 0 && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_36, {
                                                            children: report.imageUrls.map((url, imgIndex)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_37, {
                                                                    values: [
                                                                        url
                                                                    ]
                                                                }, imgIndex, false, {
                                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                    lineNumber: 622,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                            lineNumber: 620,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, void 0, this)
                                            ]
                                        }, report.id, true, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 600,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                    lineNumber: 594,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: order.payments && order.payments.length > 0 && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_38, {
                                    children: order.payments.map((payment)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_39, {
                                            values: [
                                                `mt-1 px-3 py-1 rounded-full ${payment.status === "COMPLETED" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`
                                            ],
                                            children: [
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_40, {
                                                    children: payment.type
                                                }, void 0, false, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_41, {
                                                    children: payment.status
                                                }, void 0, false, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_42, {
                                                    children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(payment.amount)
                                                }, void 0, false, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                    children: payment.transactions && payment.transactions.length > 0 && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_43, {
                                                        children: payment.transactions.map((transaction)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_44, {
                                                                values: [
                                                                    `px-2 py-0.5 rounded-full ${transaction.status === "COMPLETED" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`
                                                                ],
                                                                children: [
                                                                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_45, {
                                                                        children: transaction.paymentMethod
                                                                    }, void 0, false, {
                                                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                        lineNumber: 686,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_46, {
                                                                        children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(transaction.amount)
                                                                    }, void 0, false, {
                                                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                        lineNumber: 689,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_47, {
                                                                        children: (0,_utils_format_js__WEBPACK_IMPORTED_MODULE_5__.formatDate)(transaction.createdAt)
                                                                    }, void 0, false, {
                                                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_48, {
                                                                        children: transaction.status
                                                                    }, void 0, false, {
                                                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                        lineNumber: 704,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, transaction.id, true, {
                                                                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, void 0, this)
                                            ]
                                        }, payment.id, true, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 647,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                    lineNumber: 641,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this),
                    activeTab === "quality" && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_49, {
                        children: [
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: order.orderEvaluationCriteria && order.orderEvaluationCriteria.length > 0 && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_50, {
                                    children: [
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                            children: order.orderEvaluationCriteria.length
                                        }, void 0, false, void 0, this),
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_51, {
                                            children: order.orderEvaluationCriteria.map((criteria, index)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_52, {
                                                    children: [
                                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_53, {
                                                            children: criteria.evaluationCriteria.name
                                                        }, void 0, false, {
                                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                            lineNumber: 737,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_54, {
                                                            children: criteria.evaluationCriteria.description
                                                        }, void 0, false, {
                                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                            lineNumber: 740,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, criteria.evaluationCriteria.id, true, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 731,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                    lineNumber: 726,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_55, {
                                children: (_order_orderDetails4 = order.orderDetails) === null || _order_orderDetails4 === void 0 ? void 0 : _order_orderDetails4.map((detail, index)=>{
                                    var _detail_design;
                                    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_56, {
                                        values: [
                                            `rounded-xl w-28 h-28 ${index === selectedOrderDetailIndex ? "bg-blue-100 border border-blue-300" : "bg-gray-50 border border-gray-200"}`,
                                            1
                                        ],
                                        children: ((_detail_design = detail.design) === null || _detail_design === void 0 ? void 0 : _detail_design.thumbnailUrl) && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_57, {
                                            values: [
                                                detail.design.thumbnailUrl
                                            ]
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 776,
                                            columnNumber: 27
                                        }, this)
                                    }, detail.id, false, {
                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                        lineNumber: 765,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                lineNumber: 763,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: selectedOrderDetail && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_58, {
                                    values: [
                                        `px-3 py-1 rounded-full ${getStatusColor(selectedOrderDetail.status, false).bg} ${getStatusColor(selectedOrderDetail.status, false).border}`,
                                        [
                                            ((_selectedOrderDetail_systemConfigVariant = selectedOrderDetail.systemConfigVariant) === null || _selectedOrderDetail_systemConfigVariant === void 0 ? void 0 : _selectedOrderDetail_systemConfigVariant.color) || "#ccc"
                                        ]
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_59, {
                                            children: ((_selectedOrderDetail_systemConfigVariant1 = selectedOrderDetail.systemConfigVariant) === null || _selectedOrderDetail_systemConfigVariant1 === void 0 ? void 0 : (_selectedOrderDetail_systemConfigVariant_product = _selectedOrderDetail_systemConfigVariant1.product) === null || _selectedOrderDetail_systemConfigVariant_product === void 0 ? void 0 : _selectedOrderDetail_systemConfigVariant_product.name) || "Product"
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 790,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_60, {
                                            values: [
                                                ` font-bold ${getStatusColor(selectedOrderDetail.status, false).text}`
                                            ],
                                            children: selectedOrderDetail.status
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 801,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_61, {
                                            children: ((_selectedOrderDetail_systemConfigVariant2 = selectedOrderDetail.systemConfigVariant) === null || _selectedOrderDetail_systemConfigVariant2 === void 0 ? void 0 : _selectedOrderDetail_systemConfigVariant2.size) || "N/A"
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 814,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_62, {
                                            children: selectedOrderDetail.quantity
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 834,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_63, {
                                            children: selectedOrderDetail.completedQty || 0
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 843,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_64, {
                                            children: selectedOrderDetail.rejectedQty || 0
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 849,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_65, {
                                            children: selectedOrderDetail.isRework ? `Yes (${selectedOrderDetail.reworkTime || 0})` : "No"
                                        }, void 0, false, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 855,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                    lineNumber: 788,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, void 0, this),
                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                children: selectedOrderDetail && selectedOrderDetail.checkQualities && selectedOrderDetail.checkQualities.length > 0 ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_66, {
                                    children: selectedOrderDetail.checkQualities.map((check, index)=>{
                                        var _order_orderEvaluationCriteria, _check_task_assignee;
                                        return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_67, {
                                            values: [
                                                `px-3 py-1 rounded-full ${getStatusColor(check.status, false).bg} ${getStatusColor(check.status, false).border}`
                                            ],
                                            children: [
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                    children: index + 1
                                                }, void 0, false, void 0, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_68, {
                                                    values: [
                                                        ` font-bold ${getStatusColor(check.status, false).text}`
                                                    ],
                                                    children: check.status
                                                }, void 0, false, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_69, {
                                                    children: check.totalChecked || 0
                                                }, void 0, false, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_70, {
                                                    children: check.passedQuantity || 0
                                                }, void 0, false, {
                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                    lineNumber: 910,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                    children: [
                                                        (order.status === "WAITING_FOR_CHECKING_QUALITY" || order.status === "REWORK_REQUIRED") && check.status === "PENDING" && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_71, {
                                                            values: [
                                                                selectedOrderDetail.quantity,
                                                                `passed-qty-${check.id}`,
                                                                passedQty,
                                                                1,
                                                                note,
                                                                1,
                                                                `h-12 flex justify-center items-center rounded-xl mt-4 ${qualityCheckLoading ? "bg-indigo-300" : "bg-indigo-400"} text-center`,
                                                                1
                                                            ],
                                                            children: [
                                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                                    children: selectedOrderDetail && selectedOrderDetail.quantity - passedQty > 0 && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_72, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                                                children: [
                                                                                    selectedOrderDetail.quantity - passedQty,
                                                                                    " "
                                                                                ]
                                                                            }, void 0, true, void 0, this),
                                                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_73, {
                                                                                children: (_order_orderEvaluationCriteria = order.orderEvaluationCriteria) === null || _order_orderEvaluationCriteria === void 0 ? void 0 : _order_orderEvaluationCriteria.map((criteria)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_74, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_75, {
                                                                                                values: [
                                                                                                    1
                                                                                                ],
                                                                                                children: selectedFailedEvaluationCriteriaIds.includes(criteria.evaluationCriteria.id) && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_76, {}, void 0, false, {
                                                                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                                                    lineNumber: 1003,
                                                                                                    columnNumber: 45
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                                                lineNumber: 972,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_77, {
                                                                                                children: criteria.evaluationCriteria.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                                                lineNumber: 1009,
                                                                                                columnNumber: 43
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_78, {
                                                                                                children: criteria.evaluationCriteria.description
                                                                                            }, void 0, false, {
                                                                                                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                                                lineNumber: 1012,
                                                                                                columnNumber: 43
                                                                                            }, this)
                                                                                        ]
                                                                                    }, criteria.evaluationCriteria.id, true, {
                                                                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                                        lineNumber: 968,
                                                                                        columnNumber: 39
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                                lineNumber: 965,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                        lineNumber: 959,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, void 0, this),
                                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_79, {
                                                                    children: qualityCheckLoading ? "Processing..." : "Complete Quality Check"
                                                                }, void 0, false, {
                                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                    lineNumber: 1036,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                                    children: [
                                                                        qualityCheckError && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_80, {
                                                                            children: qualityCheckError
                                                                        }, void 0, false, {
                                                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                            lineNumber: 1044,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        qualityCheckSuccess && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_81, {}, void 0, false, {
                                                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                            lineNumber: 1050,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, void 0, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                            lineNumber: 920,
                                                            columnNumber: 25
                                                        }, this),
                                                        check.task && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_82, {
                                                            values: [
                                                                `px-2 py-0.5 rounded-full ${getStatusColor(check.task.status, false).bg} ${getStatusColor(check.task.status, false).border}`
                                                            ],
                                                            children: [
                                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_83, {
                                                                    children: check.task.taskname
                                                                }, void 0, false, {
                                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                    lineNumber: 1068,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_84, {
                                                                    children: ((_check_task_assignee = check.task.assignee) === null || _check_task_assignee === void 0 ? void 0 : _check_task_assignee.name) || "Unassigned"
                                                                }, void 0, false, {
                                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                    lineNumber: 1079,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_85, {
                                                                    values: [
                                                                        `font-bold ${getStatusColor(check.task.status, false).text}`
                                                                    ],
                                                                    children: check.task.status
                                                                }, void 0, false, {
                                                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                    lineNumber: 1095,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                                                                    children: check.task.note && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_86, {
                                                                        children: check.task.note
                                                                    }, void 0, false, {
                                                                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                                        lineNumber: 1107,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, void 0, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                                            lineNumber: 1058,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, void 0, this)
                                            ]
                                        }, check.id, true, {
                                            fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                            lineNumber: 876,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                    lineNumber: 870,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_62654_9db1f_87, {}, void 0, false, {
                                    fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                                    lineNumber: 1122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, void 0, this)
                        ]
                    }, void 0, true, {
                        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                        lineNumber: 722,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, false, {
                fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\src\\pages\\task\\TaskDetailPage.tsx",
        lineNumber: 210,
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
__webpack_require__.h = () => ("8049211ee6290f8d")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.0d18373dec223d65.css.hot-update.json"]];

})();

}
;
;

    });
    return tt.require("main__main-thread.0d18373dec223d65.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://192.168.1.74:3001/main__main-thread.0d18373dec223d65.hot-update.js.map