(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main__main-thread.b3850dc14e3a04a6.hot-update.js", function(require, module, exports, Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,ReactLynx,nativeAppId,Behavior,LynxJSBI,lynx,window) {
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

exports.ids = ['main__main-thread'];
exports.modules = {
"(react:main-thread)/./src/pages/task/TaskDetailPage.tsx": (function () {
throw new Error("  × Module build failed:\n  ╰─▶   × Error: react-transform failed\n        │     at Object.mainThreadLoader (file:///D:/Project/GoodsDesign/GoodsDesign-Mobile/node_modules/@lynx-js/react-rsbuild-plugin/node_modules/@lynx-js/react-webpack-plugin/lib/loaders/main-thread.js:39:23)\n        │     at LOADER_EXECUTION (D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\node_modules\\@rsbuild\\core\\node_modules\\@rspack\\core\\dist\\index.js:5516:18)\n        │     at runSyncOrAsync2 (D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\node_modules\\@rsbuild\\core\\node_modules\\@rspack\\core\\dist\\index.js:5517:6)\n        │     at node:internal/util:455:21\n        │     at new Promise (<anonymous>)\n        │     at runSyncOrAsync2 (node:internal/util:441:12)\n        │     at isomorphoicRun (D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\node_modules\\@rsbuild\\core\\node_modules\\@rspack\\core\\dist\\index.js:6262:23)\n        │     at runLoaders (D:\\Project\\GoodsDesign\\GoodsDesign-Mobile\\node_modules\\@rsbuild\\core\\node_modules\\@rspack\\core\\dist\\index.js:6318:56)\n      \n");


}),

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("ecffe8ff886b145b")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.b3850dc14e3a04a6.css.hot-update.json"]];

})();

}
;
;

    });
    return tt.require("main__main-thread.b3850dc14e3a04a6.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();
