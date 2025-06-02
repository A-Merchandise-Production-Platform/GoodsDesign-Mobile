(function(){
  'use strict';
  var g = (new Function('return this;'))();
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("main__main-thread.a49946154973720a.hot-update.js", function(require, module, exports, Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,ReactLynx,nativeAppId,Behavior,LynxJSBI,lynx,window) {
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
exports.modules = {};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("6ec74e7797655f7f")
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.a49946154973720a.css.hot-update.json"]];

})();

}
;
;

    });
    return tt.require("main__main-thread.a49946154973720a.hot-update.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();
