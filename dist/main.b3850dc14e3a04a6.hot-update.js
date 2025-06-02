(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main.b3850dc14e3a04a6.hot-update.js", function(require, module, exports, Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,ReactLynx,nativeAppId,Behavior,LynxJSBI,lynx,window) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
var fetch = lynx.fetch;
// lynx chunks entries
if (!lynx.__chunk_entries__) {
  // Initialize once
  lynx.__chunk_entries__ = {};
}
if (!lynx.__chunk_entries__["main"]) {
  lynx.__chunk_entries__["main"] = globDynamicComponentEntry;
} else {
  globDynamicComponentEntry = lynx.__chunk_entries__["main"];
}

exports.ids = ['main'];
exports.modules = {
"(react:background)/./src/pages/task/TaskDetailPage.tsx": (function () {
throw new Error("  × Module build failed:\n  ╰─▶   × Error: react-transform failed\n        │     at Object.backgroundLoader (file:///D:/Project/GoodsDesign/GoodsDesign-Mobile/node_modules/@lynx-js/react-rsbuild-plugin/node_modules/@lynx-js/react-webpack-plugin/lib/loaders/background.js:39:23)\n        │     at LOADER_EXECUTION (D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\node_modules\\@rsbuild\\core\\node_modules\\@rspack\\core\\dist\\index.js:5516:18)\n        │     at runSyncOrAsync2 (D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\node_modules\\@rsbuild\\core\\node_modules\\@rspack\\core\\dist\\index.js:5517:6)\n        │     at node:internal/util:455:21\n        │     at new Promise (<anonymous>)\n        │     at runSyncOrAsync2 (node:internal/util:441:12)\n        │     at isomorphoicRun (D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\node_modules\\@rsbuild\\core\\node_modules\\@rspack\\core\\dist\\index.js:6262:23)\n        │     at runLoaders (D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\node_modules\\@rsbuild\\core\\node_modules\\@rspack\\core\\dist\\index.js:6318:56)\n      \n");


}),
"(react:background)/./src/global.css": (function (module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

  if (true) {
    (function() {
      var localsJsonString = undefined;
      // 1748858720295
      var cssReload = __webpack_require__("(react:background)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.cjs")(module.id, {}, "");
      // only invalidate when locals change
      if (
        module.hot.data &&
        module.hot.data.value &&
        module.hot.data.value !== localsJsonString
      ) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }
      module.hot.dispose(function(data) {
        data.value = localsJsonString;
        cssReload();
      });
    })();
  }

}),

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("ecffe8ff886b145b")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main",".rspeedy/main/main.b3850dc14e3a04a6.css.hot-update.json"]];

})();

}
;
;

    });
    return tt.require("main.b3850dc14e3a04a6.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=http://192.168.1.74:3001/main.b3850dc14e3a04a6.hot-update.js.map