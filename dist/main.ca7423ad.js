// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n.skin * {\n    \n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .skin::after,\n  .skin::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n}\n.skin {\n  background: rgb(255,230,0);\n  background: linear-gradient(0deg, rgba(255,230,0,1) 41%, rgba(255,230,0,1) 67%, rgba(253,195,45,1) 81%);\n    position: relative;\n    min-height:50vh;\n  }\n  #pikachu{\n    border: pink solid 2px;\n    transform: scale(65%);\n  }\n  .nose {\n    border: 10px solid red;\n    border-color: black transparent transparent;\n    position: relative;\n    width: 20px;\n    left: 50%;\n    top: 250px;\n    margin-left: -10px;\n    border-bottom: transparent;\n  }\n  .nose .yuan {\n    background: #000;\n    position: absolute;\n    top: -16px;\n    width: 20px;\n    height: 6px;\n    left: -10px;\n    border-radius: 10px 10px 0px 0px;\n  }\n  .eye {\n    width: 80px;\n    height: 80px;\n    border: #000 solid 3px;\n    left: 50%;\n    top: 190px;\n    margin-left: -40px;\n    position: absolute;\n    border-radius: 50%;\n    background: #2e2e2e;\n  }\n  .eye.left {\n    transform: translateX(-200px);\n  }\n  .eye.right {\n    transform: translateX(200px);\n  }\n  .eye::after {\n    content: \"\";\n    display: block;\n    border: 3px solid #000;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: #fff;\n    position: relative;\n    left: 8px;\n  }\n  .mouth {\n    width: 302px;\n    position: relative;\n    left: 50%;\n    top: 270px;\n    margin-left: -150px;\n    height: 300px;\n    overflow: hidden;\n  }\n  .mouth .lip.left {\n    border: 4px solid black;\n    width: 150px;\n    height: 50px;\n    border-radius: 0 0 0 80%;\n    border-color: transparent transparent black black;\n    transform: rotate(-20deg);\n    background: #ffe600;\n    position: absolute;\n    top: -20px;\n    left: 1px;\n    z-index: 1;\n  }\n  .mouth .lip.right {\n    border: 4px solid black;\n    width: 150px;\n    height: 50px;\n    border-radius: 0 0 80% 0;\n    border-color: transparent black black transparent;\n    transform: rotate(20deg);\n    position: absolute;\n    left: 149px;\n    top: -20px;\n    background: #ffe600;\n    z-index: 1;\n  }\n  .mouth .down {\n    width: 260px;\n    height: 1100px;\n    border: 4px solid black;\n    position: absolute;\n    left: 20px;\n    top: -806px;\n    border-radius: 0% 0 100% 100%;\n    overflow: hidden;\n    background: #9b000a;\n  }\n  .mouth .down .yuan1 {\n    width: 250px;\n    height: 250px;\n    position: absolute;\n    bottom: -10px;\n    border-radius: 48% 48% 0 0;\n    background: #ff485f;\n  }\n  \n  .face {\n    border: 4px solid black;\n    width: 120px;\n    height: 120px;\n    position: absolute;\n    left: 50%;\n    border-radius: 50%;\n    margin-left: -60px;\n    top: 340px;\n    background: red;\n  }\n  .face.left {\n    transform: translateX(-260px);\n  }\n  .face.right {\n    transform: translateX(260px);\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0);\n    }\n    33% {\n      transform: rotate(15deg);\n    }\n    66% {\n      transform: rotate(-15deg);\n    }\n    100% {\n      transform: rotate(0);\n    }\n  }\n  .nose:hover {\n    transform-origin: center bottom;\n    animation: wave 300ms infinite linear;\n  }\n  .face > img {\n  }\n  .face > img {\n    transform: scale(180%);\n    position: absolute;\n    top: 70px;\n    left: 95px;\n    display: none;\n  }\n  .face.left .rotate {\n    transform: scale(180%);\n  }\n  .face.left .rotate > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n    position: relative;\n    top: 40px;\n    left: 70px;\n    display: none;\n  }\n  .face:hover > img {\n    display: block;\n  }\n  .face.left:hover > .rotate > img {\n    display: block;\n  }\n\n  ";
exports.default = string;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = require("./css");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
demo.innerText = _css2.default.substring(0, n);
demo2.innerHTML = _css2.default.substring(0, n);
var time = 50;

var run = function run() {
  n += 1;
  if (n > _css2.default.length) {
    window.clearInterval(id);
    return;
  }
  demo.innerText = _css2.default.substring(0, n);
  demo2.innerHTML = _css2.default.substring(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var id = setInterval(function () {
  run();
}, time);

var play = function play() {
  id = setInterval(function () {
    run();
  }, time);
};
var pause = function pause() {
  window.clearInterval(id);
};
var start = function start() {
  pause();
  play();
};
var slow = function slow() {
  time = 100;
  start();
};
var normal = function normal() {
  time = 20;
  start();
};
var fast = function fast() {
  time = 1;
  start();
};

btnPause.onclick = pause;
btnPlay.onclick = start;
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
},{"./css":"css.js"}],"..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '11434' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.ca7423ad.map