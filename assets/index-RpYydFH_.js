function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
  function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, D = {};
  function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  E.prototype.isReactComponent = {};
  E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E.prototype;
  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  var H = G.prototype = new F();
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
  function M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
    return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
  }
  function N(a, b) {
    return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var P = /\/+/g;
  function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = false;
    if (null === a) h = true;
    else switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = true;
        }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    }
    else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  }
  function T(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
      }, function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S, forEach: function(a, b, e) {
    S(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E;
  react_production_min.Fragment = p;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G;
  react_production_min.StrictMode = q;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  react_production_min.act = X;
  react_production_min.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = K.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      d.children = g;
    }
    return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v, render: a };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
  };
  react_production_min.memo = function(a, b) {
    return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  react_production_min.unstable_act = X;
  react_production_min.useCallback = function(a, b) {
    return U.current.useCallback(a, b);
  };
  react_production_min.useContext = function(a) {
    return U.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b) {
    return U.current.useEffect(a, b);
  };
  react_production_min.useId = function() {
    return U.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function(a, b) {
    return U.current.useMemo(a, b);
  };
  react_production_min.useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function(a) {
    return U.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function() {
    return U.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
var reactExports = requireReact();
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      var p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var r = [], t = [], u = 1, v = null, y = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false, O = null, L = -1, P = 5, Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  }
  function ha(a, b) {
    ea[a] = b;
    for (a = 0; a < b.length; a++) da.add(b[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a)) return true;
    if (ja.call(la, a)) return false;
    if (ka.test(a)) return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d) return false;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
    if (d) return false;
    if (null !== c) switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
    return false;
  }
  function v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      ra,
      sa
    );
    z[b] = new v(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b) {
    if (!a || Na) return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }
        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h]) {
                var k = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                return k;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  function Ra(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get, f = c.set;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return false;
    var b = a._valueTracker;
    if (!b) return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
  }
  function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, false);
  }
  function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c) if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }
  function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  var eb = Array.isArray;
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
      for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = true);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error(p(92));
        if (eb(c)) {
          if (1 < c.length) throw Error(p(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  }(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
      for (; b.firstChild; ) a.appendChild(b.firstChild);
    }
  });
  function ob(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  }
  function sb(a, b) {
    a = a.style;
    for (var c in b) if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b) {
    if (b) {
      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(p(60));
        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
    }
  }
  function vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb) throw Error(p(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b, c) {
    if (Ib) return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
    return c;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
  function Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b, c, d, e, f, g, h, k) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p(198));
      Qb || (Qb = true, Rb = l);
    }
  }
  function Vb(a) {
    var b = a, c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a) throw Error(p(188));
  }
  function Yb(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (null === b) throw Error(p(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return Xb(e), a;
          if (f === d) return Xb(e), b;
          f = f.sibling;
        }
        throw Error(p(188));
      }
      if (c.return !== d.return) c = e, d = f;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = true;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(p(189));
        }
      }
      if (c.alternate !== d) throw Error(p(190));
    }
    if (3 !== c.tag) throw Error(p(188));
    return c.stateNode.current === c ? a : b;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b = $b(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
    } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function vc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
      var g = 31 - oc(f), h = 1 << g, k = e[g];
      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
      } else k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  }
  function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - oc(c), f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }
  function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  }
  function Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function Uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f = e.pointerId;
        Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
      var c = Vb(b);
      if (null !== c) {
        if (b = c.tag, 13 === b) {
          if (b = Wb(c), null !== b) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn) return false;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null === c) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  }
  function Zc(a, b, c) {
    Xc(a) && c.delete(b);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1; c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function gd(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function fd(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (null === e) hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d)) d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f = Cb(e);
          null !== f && Ec(f);
          f = Yc(a, b, c, d);
          null === f && hd(a, b, d, id, c);
          if (f === e) break;
          e = f;
        }
        null !== e && d.stopPropagation();
      } else hd(a, b, d, null, c);
    }
  }
  var id = null;
  function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a) if (b = Vb(a), null === b) a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a) return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else b !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++) ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b(b2, d, e, f, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
      this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a) return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (32 !== b.which) return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
  }
  function ve(a, b) {
    if ("change" === a) return b;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  }
  function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
  }
  function Ee(a, b) {
    if ("click" === a) return te(b);
  }
  function Fe(a, b) {
    if ("input" === a || "change" === a) return te(b);
  }
  function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b) {
    if (He(a, b)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e])) return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Je(c);
    }
  }
  function Le(a, b) {
    return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = false;
      }
      if (c) a = b.contentWindow;
      else break;
      b = Xa(a.document);
    }
    return b;
  }
  function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (null !== d && Ne(c)) {
        if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f = Math.min(d.start, e);
          d = void 0 === d.end ? f : Math.min(d.end, e);
          !a.extend && f > d && (e = d, d = f, f = e);
          e = Ke(c, f);
          var g = Ke(
            c,
            d
          );
          e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c.focus && c.focus();
      for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  }
  function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b = We[a], c;
    for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b) {
    df.set(a, b);
    fa(b, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b) for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
        else for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
      }
    }
    if (Qb) throw a = Rb, Qb = false, Rb = null, a;
  }
  function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  }
  function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = 9 === a.nodeType ? a : a.ownerDocument;
      null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  }
  function pf(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
    d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  }
  function hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
      if (null === d) return;
      var g = d.tag;
      if (3 === g || 4 === g) {
        var h = d.stateNode.containerInfo;
        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
        if (4 === g) for (g = d.return; null !== g; ) {
          var k = g.tag;
          if (3 === k || 4 === k) {
            if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
          }
          g = g.return;
        }
        for (; null !== h; ) {
          g = Wc(h);
          if (null === g) return;
          k = g.tag;
          if (5 === k || 6 === k) {
            d = f = g;
            continue a;
          }
          h = h.parentNode;
        }
      }
      d = d.return;
    }
    Jb(function() {
      var d2 = f, e2 = xb(c), g2 = [];
      a: {
        var h2 = df.get(a);
        if (void 0 !== h2) {
          var k2 = td, n = a;
          switch (a) {
            case "keypress":
              if (0 === od(c)) break a;
            case "keydown":
            case "keyup":
              k2 = Rd;
              break;
            case "focusin":
              n = "focus";
              k2 = Fd;
              break;
            case "focusout":
              n = "blur";
              k2 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k2 = Fd;
              break;
            case "click":
              if (2 === c.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k2 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k2 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k2 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k2 = Hd;
              break;
            case cf:
              k2 = Xd;
              break;
            case "scroll":
              k2 = vd;
              break;
            case "wheel":
              k2 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k2 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k2 = Td;
          }
          var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
          t = [];
          for (var w = d2, u; null !== w; ) {
            u = w;
            var F = u.stateNode;
            5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
            if (J) break;
            w = w.return;
          }
          0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h2 = "mouseover" === a || "pointerover" === a;
          k2 = "mouseout" === a || "pointerout" === a;
          if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
          if (k2 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k2) {
              if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
            } else k2 = null, n = d2;
            if (k2 !== n) {
              t = Bd;
              F = "onMouseLeave";
              x = "onMouseEnter";
              w = "mouse";
              if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
              J = null == k2 ? h2 : ue(k2);
              u = null == n ? h2 : ue(n);
              h2 = new t(F, w + "leave", k2, c, e2);
              h2.target = J;
              h2.relatedTarget = u;
              F = null;
              Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
              J = F;
              if (k2 && n) b: {
                t = k2;
                x = n;
                w = 0;
                for (u = t; u; u = vf(u)) w++;
                u = 0;
                for (F = x; F; F = vf(F)) u++;
                for (; 0 < w - u; ) t = vf(t), w--;
                for (; 0 < u - w; ) x = vf(x), u--;
                for (; w--; ) {
                  if (t === x || null !== x && t === x.alternate) break b;
                  t = vf(t);
                  x = vf(x);
                }
                t = null;
              }
              else t = null;
              null !== k2 && wf(g2, h2, k2, t, false);
              null !== n && null !== J && wf(g2, J, n, t, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k2 = h2.nodeName && h2.nodeName.toLowerCase();
          if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
          else if (me(h2)) if (we) na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
          else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h2, d2);
          "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var $a;
        if (ae) b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b);
    });
  }
  function tf(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a; ) {
      var e = a, f = e.stateNode;
      5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
      a = a.return;
    }
    return d;
  }
  function vf(a) {
    if (null === a) return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c, k = h.alternate, l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c) throw Error(p(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else "$" !== c && "$?" !== c && "$!" !== c || d++;
      c = e;
    } while (c);
    bd(b);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
      if (8 === b) {
        b = a.data;
        if ("$" === b || "$!" === b || "$?" === b) break;
        if ("/$" === b) return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b) return a;
          b--;
        } else "/$" === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b = a[Of];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
          if (c = a[Of]) return c;
          a = Mf(a);
        }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b, c) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b);
    G(Wf, c);
  }
  function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(p(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b = C;
      try {
        var c = eg;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C = b, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  }
  function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f + a;
    } else rg = 1 << f | c << e | d, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function Cg(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a)) throw Error(p(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
        }
      } else {
        if (Dg(a)) throw Error(p(418));
        a.flags = a.flags & -4097 | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg) return false;
    if (!I) return Fg(a), I = true, false;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a)) throw Hg(), Error(p(418));
      for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(p(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("/$" === c) {
              if (0 === b) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; ) a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(p(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(p(147, a));
        var e = d, f = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          null === a2 ? delete b2[f] : b2[f] = a2;
        };
        b._stringRef = f;
        return b;
      }
      if ("string" !== typeof a) throw Error(p(284));
      if (!c._owner) throw Error(p(290, a));
    }
    return a;
  }
  function Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function Ng(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Og(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a) return null;
      for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Pg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a) return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k(a2, b2, c2, d2) {
      var f2 = c2.type;
      if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
      d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Lg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f2) {
      if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case va:
            return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
        Mg(a2, b2);
      }
      return null;
    }
    function r(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
        Mg(a2, c2);
      }
      return null;
    }
    function y(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          case Ha:
            var f2 = d2._init;
            return y(a2, b2, c2, f2(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        Mg(b2, d2);
      }
      return null;
    }
    function n(e2, g2, h2, k2) {
      for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
        u.index > w ? (x = u, u = null) : x = u.sibling;
        var n2 = r(e2, u, h2[w], k2);
        if (null === n2) {
          null === u && (u = x);
          break;
        }
        a && u && null === n2.alternate && b(e2, u);
        g2 = f(n2, g2, w);
        null === m2 ? l2 = n2 : m2.sibling = n2;
        m2 = n2;
        u = x;
      }
      if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
      if (null === u) {
        for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
        I && tg(e2, w);
        return l2;
      }
      for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
      a && u.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function t(e2, g2, h2, k2) {
      var l2 = Ka(h2);
      if ("function" !== typeof l2) throw Error(p(150));
      h2 = l2.call(h2);
      if (null == h2) throw Error(p(151));
      for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
        m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
        var t2 = r(e2, m2, n2.value, k2);
        if (null === t2) {
          null === m2 && (m2 = x);
          break;
        }
        a && m2 && null === t2.alternate && b(e2, m2);
        g2 = f(t2, g2, w);
        null === u ? l2 = t2 : u.sibling = t2;
        u = t2;
        m2 = x;
      }
      if (n2.done) return c(
        e2,
        m2
      ), I && tg(e2, w), l2;
      if (null === m2) {
        for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        I && tg(e2, w);
        return l2;
      }
      for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function J(a2, d2, f2, h2) {
      "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
      if ("object" === typeof f2 && null !== f2) {
        switch (f2.$$typeof) {
          case va:
            a: {
              for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                if (l2.key === k2) {
                  k2 = f2.type;
                  if (k2 === ya) {
                    if (7 === l2.tag) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                    c(a2, l2.sibling);
                    d2 = e(l2, f2.props);
                    d2.ref = Lg(a2, l2, f2);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l2);
                  break;
                } else b(a2, l2);
                l2 = l2.sibling;
              }
              f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case wa:
            a: {
              for (l2 = f2.key; null !== d2; ) {
                if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
                else b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f2, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
        }
        if (eb(f2)) return n(a2, d2, f2, h2);
        if (Ka(f2)) return t(a2, d2, f2, h2);
        Mg(a2, f2);
      }
      return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return J;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b = Wg.current;
    E(Wg);
    a._currentValue = b;
  }
  function bh(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function ch(a, b) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
  }
  function eh(a) {
    var b = a._currentValue;
    if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
      if (null === Xg) throw Error(p(308));
      Yg = a;
      Xg.dependencies = { lanes: 0, firstContext: a };
    } else Yg = Yg.next = a;
    return b;
  }
  var fh = null;
  function gh(a) {
    null === fh ? fh = [a] : fh.push(a);
  }
  function hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ih(a, d);
  }
  function ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function mh(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ih(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ih(a, c);
  }
  function oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  function ph(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);
        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function qh(a, b, c, d) {
    var e = a.updateQueue;
    jh = false;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h, l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var m = a.alternate;
      null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
      var q = e.baseState;
      g = 0;
      m = l = k = null;
      h = f;
      do {
        var r = h.lane, y = h.eventTime;
        if ((d & r) === r) {
          null !== m && (m = m.next = {
            eventTime: y,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n = a, t = h;
            r = b;
            y = c;
            switch (t.tag) {
              case 1:
                n = t.payload;
                if ("function" === typeof n) {
                  q = n.call(y, q, r);
                  break a;
                }
                q = n;
                break a;
              case 3:
                n.flags = n.flags & -65537 | 128;
              case 0:
                n = t.payload;
                r = "function" === typeof n ? n.call(y, q, r) : n;
                if (null === r || void 0 === r) break a;
                q = A({}, q, r);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
        } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;
        else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
      } while (1);
      null === m && (k = q);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else null === f && (e.shared.lanes = 0);
      rh |= g;
      a.lanes = g;
      a.memoizedState = q;
    }
  }
  function sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(p(191, e));
        e.call(d);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a) {
    if (a === th) throw Error(p(174));
    return a;
  }
  function yh(a, b) {
    G(wh, b);
    G(vh, a);
    G(uh, th);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(uh);
    G(uh, b);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b = xh(uh.current);
    var c = lb(b, a.type);
    b !== c && (G(vh, a), G(uh, c));
  }
  function Bh(a) {
    vh.current === a && (E(uh), E(vh));
  }
  var L = Uf(0);
  function Ch(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p(321));
  }
  function Mh(a, b) {
    if (null === b) return false;
    for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
    return true;
  }
  function Nh(a, b, c, d, e, f) {
    Hh = f;
    M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c(d, e);
    if (Jh) {
      f = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f) throw Error(p(301));
        f += 1;
        O = N = null;
        b.updateQueue = null;
        Fh.current = Qh;
        a = c(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b) throw Error(p(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;
    var b = null === O ? M.memoizedState : O.next;
    if (null !== b) O = b, N = a;
    else {
      if (null === a) throw Error(p(310));
      N = a;
      a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }
  function Vh(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Wh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = N, e = d.baseQueue, f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = g = null, k = null, l = f;
      do {
        var m = l.lane;
        if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
        else {
          var q = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k ? (h = k = q, g = d) : k = k.next = q;
          M.lanes |= m;
          rh |= m;
        }
        l = l.next;
      } while (null !== l && l !== f);
      null === k ? g = d : k.next = h;
      He(d, b.memoizedState) || (dh = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f = e.lane, M.lanes |= f, rh |= f, e = e.next;
      while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Xh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a(f, g.action), g = g.next;
      while (g !== e);
      He(f, b.memoizedState) || (dh = true);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Yh() {
  }
  function Zh(a, b) {
    var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
    f && (d.memoizedState = e, dh = true);
    d = d.queue;
    $h(ai.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
      c.flags |= 2048;
      bi(9, ci.bind(null, c, d, e, b), void 0, null);
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(c, b, e);
    }
    return e;
  }
  function di(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ei(b) && fi(a);
  }
  function ai(a, b, c) {
    return c(function() {
      ei(b) && fi(a);
    });
  }
  function ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  }
  function fi(a) {
    var b = ih(a, 1);
    null !== b && gi(b, a, 1, -1);
  }
  function hi(a) {
    var b = Th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b.memoizedState, a];
  }
  function bi(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b, c, d) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function li(a, b, c, d) {
    var e = Uh();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== N) {
      var g = N.memoizedState;
      f = g.destroy;
      if (null !== d && Mh(d, g.deps)) {
        e.memoizedState = bi(b, c, f, d);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, f, d);
  }
  function mi(a, b) {
    return ki(8390656, 8, a, b);
  }
  function $h(a, b) {
    return li(2048, 8, a, b);
  }
  function ni(a, b) {
    return li(4, 2, a, b);
  }
  function oi(a, b) {
    return li(4, 4, a, b);
  }
  function pi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
      b.current = null;
    };
  }
  function qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return li(4, 4, pi.bind(null, b, a), c);
  }
  function ri() {
  }
  function si(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function ti(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function ui(a, b, c) {
    if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
    He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
    return b;
  }
  function vi(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b();
    } finally {
      C = c, Gh.transition = d;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b, c) {
    var d = yi(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, c);
    else if (c = hh(a, b, c, d), null !== c) {
      var e = R();
      gi(c, a, d, e);
      Bi(c, b, d);
    }
  }
  function ii(a, b, c) {
    var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, e);
    else {
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState, h = f(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k = b.interleaved;
          null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l) {
      } finally {
      }
      c = hh(a, b, e, d);
      null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
    }
  }
  function zi(a) {
    var b = a.alternate;
    return a === M || null !== b && b === M;
  }
  function Ai(a, b) {
    Jh = Ih = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
    Th().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ki(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ki(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Th();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Th();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = xi.bind(null, M, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Th();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = M, e = Th();
    if (I) {
      if (void 0 === c) throw Error(p(407));
      c = c();
    } else {
      c = b();
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(d, b, c);
    }
    e.memoizedState = c;
    var f = { value: c, getSnapshot: b };
    e.queue = f;
    mi(ai.bind(
      null,
      d,
      f,
      a
    ), [a]);
    d.flags |= 2048;
    bi(9, ci.bind(null, d, f, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = Th(), b = Q.identifierPrefix;
    if (I) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Kh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b = Uh();
      return ui(b, N.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b = Uh();
    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.tag = 1;
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = R(), d = yi(a), e = mh(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = nh(a, e, d);
    null !== b && (gi(b, a, d, c), oh(b, a, d));
  } };
  function Fi(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
  }
  function Gi(a, b, c) {
    var d = false, e = Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function Hi(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
  }
  function Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Ki(a, b, c) {
    return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
  }
  function Li(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Oi || (Oi = true, Pi = d);
      Li(a, b);
    };
    return c;
  }
  function Qi(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Li(a, b);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
      Li(a, b);
      "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
  }
  function Ui(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a, b, c, d) {
    b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
  }
  function Yi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    ch(b, e);
    d = Nh(a, b, c, d, f, e);
    c = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Xi(a, b, d, e);
    return b.child;
  }
  function $i(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
      a = Rg(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Ie;
      if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
    }
    b.flags |= 1;
    a = Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function bj(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
      else return b.lanes = a.lanes, Zi(a, b, e);
    }
    return cj(a, b, c, d, e);
  }
  function dj(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
    else {
      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f ? f.baseLanes : c;
      G(ej, fj);
      fj |= d;
    }
    else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
    Xi(a, b, e, c);
    return b.child;
  }
  function gj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function cj(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H.current;
    f = Yf(b, f);
    ch(b, e);
    c = Nh(a, b, c, d, f, e);
    d = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Xi(a, b, c, e);
    return b.child;
  }
  function hj(a, b, c, d, e) {
    if (Zf(c)) {
      var f = true;
      cg(b);
    } else f = false;
    ch(b, e);
    if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
    else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k = g.context, l = c.contextType;
      "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
      var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
      q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
      jh = false;
      var r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      k = b.memoizedState;
      h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      lh(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Ci(b.type, h);
      g.props = l;
      q = b.pendingProps;
      r = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
      var y = c.getDerivedStateFromProps;
      (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
      jh = false;
      r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      var n = b.memoizedState;
      h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return jj(a, b, c, d, f, e);
  }
  function jj(a, b, c, d, e, f) {
    gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
    d = b.stateNode;
    Wi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  }
  function kj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    yh(a, b.containerInfo);
  }
  function lj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Xi(a, b, c, d);
    return b.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b, c) {
    var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h) f = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(L, e & 1);
    if (null === a) {
      Eg(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = { mode: "hidden", children: d.children };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
      f.return = b;
      d.return = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = mj;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = Pg(f, { mode: "visible", children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function qj(a, b) {
    b = pj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function sj(a, b, c, d) {
    null !== d && Jg(d);
    Ug(b, a.child, null, c);
    a = qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function rj(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = pj({ mode: "visible", children: d.children }, e, 0, null);
      f = Tg(f, e, g, null);
      f.flags |= 2;
      d.return = b;
      f.return = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && Ug(b, a.child, null, g);
      b.child.memoizedState = nj(g);
      b.memoizedState = mj;
      return f;
    }
    if (0 === (b.mode & 1)) return sj(a, b, g, null);
    if ("$!" === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d) var h = d.dgst;
      d = h;
      f = Error(p(419));
      d = Ki(f, d, void 0);
      return sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (dh || h) {
      d = Q;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
      }
      tj();
      d = Ki(Error(p(421)));
      return sj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = qj(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    bh(a.return, b, c);
  }
  function wj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  }
  function xj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    Xi(a, b, d.children, c);
    d = L.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
        else if (19 === a.tag) vj(a, c, b);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    G(L, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        wj(b, false, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Ch(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        wj(b, true, c, null, f);
        break;
      case "together":
        wj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function ij(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    rh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(p(153));
    if (null !== b.child) {
      a = b.child;
      c = Pg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function yj(a, b, c) {
    switch (b.tag) {
      case 3:
        kj(b);
        Ig();
        break;
      case 5:
        Ah(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        yh(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
          G(L, L.current & 1);
          a = Zi(a, b, c);
          return null !== a ? a.sibling : null;
        }
        G(L, L.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return xj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(L, L.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return b.lanes = 0, dj(a, b, c);
    }
    return Zi(a, b, c);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      xh(uh.current);
      var f = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
        var h = e[l];
        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
      } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
      for (l in d) {
        var k = d[l];
        h = null != e ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
        } else c || (f || (f = []), f.push(
          l,
          c
        )), c = k;
        else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
      }
      c && (f = f || []).push("style", c);
      var l = f;
      if (b.updateQueue = l) b.flags |= 4;
    }
  };
  Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Dj(a, b) {
    if (!I) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Ej(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S(b), null;
      case 1:
        return Zf(b.type) && $f(), S(b), null;
      case 3:
        d = b.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a, b);
        S(b);
        return null;
      case 5:
        Bh(b);
        var e = xh(wh.current);
        c = b.type;
        if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(p(166));
            S(b);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f;
            a = 0 !== (b.mode & 1);
            switch (c) {
              case "dialog":
                D("cancel", d);
                D("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], d);
                break;
              case "source":
                D("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d
                );
                D("load", d);
                break;
              case "details":
                D("toggle", d);
                break;
              case "input":
                Za(d, f);
                D("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                D("invalid", d);
                break;
              case "textarea":
                hb(d, f), D("invalid", d);
            }
            ub(c, f);
            e = null;
            for (var g in f) if (f.hasOwnProperty(g)) {
              var h = f[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
            switch (c) {
              case "input":
                Va(d);
                db(d, f, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f.onClick && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            zj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case "dialog":
                  D("cancel", a);
                  D("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a
                  );
                  D("load", a);
                  e = d;
                  break;
                case "details":
                  D("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f in h) if (h.hasOwnProperty(f)) {
                var k = h[f];
                "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
              }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d.value && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f = d.value;
                  null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                    a,
                    !!d.multiple,
                    d.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        S(b);
        return null;
      case 6:
        if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
          c = xh(wh.current);
          xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f = d.nodeValue !== c) {
              if (a = xg, null !== a) switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
            }
            f && (b.flags |= 4);
          } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S(b);
        return null;
      case 13:
        E(L);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
          else if (f = Gg(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!f) throw Error(p(318));
              f = b.memoizedState;
              f = null !== f ? f.dehydrated : null;
              if (!f) throw Error(p(317));
              f[Of] = b;
            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            S(b);
            f = false;
          } else null !== zg && (Fj(zg), zg = null), f = true;
          if (!f) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        d = null !== d;
        d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b.updateQueue && (b.flags |= 4);
        S(b);
        return null;
      case 4:
        return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
      case 10:
        return ah(b.type._context), S(b), null;
      case 17:
        return Zf(b.type) && $f(), S(b), null;
      case 19:
        E(L);
        f = b.memoizedState;
        if (null === f) return S(b), null;
        d = 0 !== (b.flags & 128);
        g = f.rendering;
        if (null === g) if (d) Dj(f, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
            g = Ch(a);
            if (null !== g) {
              b.flags |= 128;
              Dj(f, false);
              d = g.updateQueue;
              null !== d && (b.updateQueue = d, b.flags |= 4);
              b.subtreeFlags = 0;
              d = c;
              for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
              G(L, L.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
        }
        else {
          if (!d) if (a = Ch(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
          } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
        }
        if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
        S(b);
        return null;
      case 22:
      case 23:
        return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, b.tag));
  }
  function Ij(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Bh(b), null;
      case 13:
        E(L);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(p(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Lj(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      W(a, b, d);
    }
    else c.current = null;
  }
  function Mj(a, b, c) {
    try {
      c();
    } catch (d) {
      W(a, b, d);
    }
  }
  var Nj = false;
  function Oj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
      else a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f.nodeType;
          } catch (F) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
          b: for (; ; ) {
            for (var y; ; ) {
              q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
              q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
              3 === q.nodeType && (g += q.nodeValue.length);
              if (null === (y = q.firstChild)) break;
              r = q;
              q = y;
            }
            for (; ; ) {
              if (q === a) break b;
              r === c && ++l === e && (h = g);
              r === f && ++m === d && (k = g);
              if (null !== (y = q.nextSibling)) break;
              q = r;
              r = q.parentNode;
            }
            q = y;
          }
          c = -1 === h || -1 === k ? null : { start: h, end: k };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
    else for (; null !== V; ) {
      b = V;
      try {
        var n = b.alternate;
        if (0 !== (b.flags & 1024)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n) {
              var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
              x.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var u = b.stateNode.containerInfo;
            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (F) {
        W(b, b.return, F);
      }
      a = b.sibling;
      if (null !== a) {
        a.return = b.return;
        V = a;
        break;
      }
      V = b.return;
    }
    n = Nj;
    Nj = false;
    return n;
  }
  function Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Mj(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Qj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Rj(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Sj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Tj(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
  }
  function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
  }
  var X = null, Xj = false;
  function Yj(a, b, c) {
    for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
  }
  function Zj(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
    switch (c.tag) {
      case 5:
        U || Lj(c, b);
      case 6:
        var d = X, e = Xj;
        X = null;
        Yj(a, b, c);
        X = d;
        Xj = e;
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
        break;
      case 18:
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
        break;
      case 4:
        d = X;
        e = Xj;
        X = c.stateNode.containerInfo;
        Xj = true;
        Yj(a, b, c);
        X = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f = e, g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a, b, c);
        break;
      case 1:
        if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
        Yj(a, b, c);
        break;
      case 21:
        Yj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
        break;
      default:
        Yj(a, b, c);
    }
  }
  function ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Kj());
      b.forEach(function(b2) {
        var d = bk.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function ck(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a, g = b, h = g;
        a: for (; null !== h; ) {
          switch (h.tag) {
            case 5:
              X = h.stateNode;
              Xj = false;
              break a;
            case 3:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h = h.return;
        }
        if (null === X) throw Error(p(160));
        Zj(f, g, e);
        X = null;
        Xj = false;
        var k = e.alternate;
        null !== k && (k.return = null);
        e.return = null;
      } catch (l) {
        W(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
  }
  function dk(a, b) {
    var c = a.alternate, d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b, a);
        ek(a);
        if (d & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t) {
            W(a, a.return, t);
          }
          try {
            Pj(5, a, a.return);
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 1:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        break;
      case 5:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t) {
            W(a, a.return, t);
          }
        }
        if (d & 4 && (e = a.stateNode, null != e)) {
          var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
          a.updateQueue = null;
          if (null !== k) try {
            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
            vb(h, g);
            var l = vb(h, f);
            for (g = 0; g < k.length; g += 2) {
              var m = k[g], q = k[g + 1];
              "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
            }
            switch (h) {
              case "input":
                bb(e, f);
                break;
              case "textarea":
                ib(e, f);
                break;
              case "select":
                var r = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f.multiple;
                var y = f.value;
                null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                  e,
                  !!f.multiple,
                  f.defaultValue,
                  true
                ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
            }
            e[Pf] = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 6:
        ck(b, a);
        ek(a);
        if (d & 4) {
          if (null === a.stateNode) throw Error(p(162));
          e = a.stateNode;
          f = a.memoizedProps;
          try {
            e.nodeValue = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 3:
        ck(b, a);
        ek(a);
        if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
          bd(b.containerInfo);
        } catch (t) {
          W(a, a.return, t);
        }
        break;
      case 4:
        ck(b, a);
        ek(a);
        break;
      case 13:
        ck(b, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d & 4 && ak(a);
        break;
      case 22:
        m = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
        ek(a);
        if (d & 8192) {
          l = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
            for (q = V = m; null !== V; ) {
              r = V;
              y = r.child;
              switch (r.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r, r.return);
                  break;
                case 1:
                  Lj(r, r.return);
                  var n = r.stateNode;
                  if ("function" === typeof n.componentWillUnmount) {
                    d = r;
                    c = r.return;
                    try {
                      b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                    } catch (t) {
                      W(d, c, t);
                    }
                  }
                  break;
                case 5:
                  Lj(r, r.return);
                  break;
                case 22:
                  if (null !== r.memoizedState) {
                    gk(q);
                    continue;
                  }
              }
              null !== y ? (y.return = r, V = y) : gk(q);
            }
            m = m.sibling;
          }
          a: for (m = null, q = a; ; ) {
            if (5 === q.tag) {
              if (null === m) {
                m = q;
                try {
                  e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                } catch (t) {
                  W(a, a.return, t);
                }
              }
            } else if (6 === q.tag) {
              if (null === m) try {
                q.stateNode.nodeValue = l ? "" : q.memoizedProps;
              } catch (t) {
                W(a, a.return, t);
              }
            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
              q.child.return = q;
              q = q.child;
              continue;
            }
            if (q === a) break a;
            for (; null === q.sibling; ) {
              if (null === q.return || q.return === a) break a;
              m === q && (m = null);
              q = q.return;
            }
            m === q && (m = null);
            q.sibling.return = q.return;
            q = q.sibling;
          }
        }
        break;
      case 19:
        ck(b, a);
        ek(a);
        d & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(
          b,
          a
        ), ek(a);
    }
  }
  function ek(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return; null !== c; ) {
            if (Tj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f = Uj(a);
            Wj(a, f, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Uj(a);
            Vj(a, h, g);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k) {
        W(a, a.return, k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function hk(a, b, c) {
    V = a;
    ik(a);
  }
  function ik(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== V; ) {
      var e = V, f = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Jj;
        if (!g) {
          var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
          h = Jj;
          var l = U;
          Jj = g;
          if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
          for (; null !== f; ) V = f, ik(f), f = f.sibling;
          V = e;
          Jj = h;
          U = l;
        }
        kk(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b = V;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
              else {
                var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && sh(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = b.child.stateNode;
                    break;
                  case 1:
                    c = b.child.stateNode;
                }
                sh(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && c.focus();
                    break;
                  case "img":
                    k.src && (c.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l = b.alternate;
                if (null !== l) {
                  var m = l.memoizedState;
                  if (null !== m) {
                    var q = m.dehydrated;
                    null !== q && bd(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          U || b.flags & 512 && Rj(b);
        } catch (r) {
          W(b, b.return, r);
        }
      }
      if (b === a) {
        V = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function gk(a) {
    for (; null !== V; ) {
      var b = V;
      if (b === a) {
        V = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function jk(a) {
    for (; null !== V; ) {
      var b = V;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Qj(4, b);
            } catch (k) {
              W(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k) {
                W(b, e, k);
              }
            }
            var f = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, f, k);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, g, k);
            }
        }
      } catch (k) {
        W(b, b.return, k);
      }
      if (b === a) {
        V = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        V = h;
        break;
      }
      V = b.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a = C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b, c, d) {
    if (50 < yk) throw yk = 0, zk = null, Error(p(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && bc(c);
      if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Fk(c, Gk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Gk(a, b) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c = a.callbackNode;
    if (Hk() && a.callbackNode !== c) return null;
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
    else {
      b = d;
      var e = K;
      K |= 2;
      var f = Jk();
      if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a, h);
        }
      while (1);
      $g();
      mk.current = f;
      K = e;
      null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
    }
    if (0 !== b) {
      2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
      if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      if (6 === b) Ck(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d);
            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
              if (0 !== uc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = B() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c ? Gk.bind(null, a) : null;
  }
  function Nk(a, b) {
    var c = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
    a = Ik(a, b);
    2 !== a && (b = tk, tk = c, null !== b && Fj(b));
    return a;
  }
  function Fj(a) {
    null === tk ? tk = a : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d], f = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f(), e)) return false;
          } catch (g) {
            return false;
          }
        }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
      else {
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Ck(a, b) {
    b &= ~rk;
    b &= ~qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Ek(a) {
    if (0 !== (K & 6)) throw Error(p(327));
    Hk();
    var b = uc(a, 0);
    if (0 === (b & 1)) return Dk(a, B()), null;
    var c = Ik(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = xc(a);
      0 !== d && (b = d, c = Nk(a, d));
    }
    if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
    if (6 === c) throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b) {
    var c = K;
    K |= 1;
    try {
      return a(b);
    } finally {
      K = c, 0 === K && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b = K;
    K |= 1;
    var c = ok.transition, d = C;
    try {
      if (ok.transition = null, C = 1, a) return a();
    } finally {
      C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y) for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          zh();
          E(Wf);
          E(H);
          Eh();
          break;
        case 5:
          Bh(d);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L);
          break;
        case 19:
          E(L);
          break;
        case 10:
          ah(d.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c = c.return;
    }
    Q = a;
    Y = a = Pg(a.current, null);
    Z = fj = b;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f = c.pending;
        if (null !== f) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
      fh = null;
    }
    return a;
  }
  function Mk(a, b) {
    do {
      var c = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c || null === c.return) {
          T = 1;
          pk = b;
          Y = null;
          break;
        }
        a: {
          var f = a, g = c.return, h = c, k = b;
          b = Z;
          h.flags |= 32768;
          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k, m = h, q = m.tag;
            if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
              var r = m.alternate;
              r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var y = Ui(g);
            if (null !== y) {
              y.flags &= -257;
              Vi(y, g, h, f, b);
              y.mode & 1 && Si(f, l, b);
              b = y;
              k = l;
              var n = b.updateQueue;
              if (null === n) {
                var t = /* @__PURE__ */ new Set();
                t.add(k);
                b.updateQueue = t;
              } else n.add(k);
              break a;
            } else {
              if (0 === (b & 1)) {
                Si(f, l, b);
                tj();
                break a;
              }
              k = Error(p(426));
            }
          } else if (I && h.mode & 1) {
            var J = Ui(g);
            if (null !== J) {
              0 === (J.flags & 65536) && (J.flags |= 256);
              Vi(J, g, h, f, b);
              Jg(Ji(k, h));
              break a;
            }
          }
          f = k = Ji(k, h);
          4 !== T && (T = 2);
          null === sk ? sk = [f] : sk.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var x = Ni(f, k, b);
                ph(f, x);
                break a;
              case 1:
                h = k;
                var w = f.type, u = f.stateNode;
                if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var F = Qi(f, h, b);
                  ph(f, F);
                  break a;
                }
            }
            f = f.return;
          } while (null !== f);
        }
        Sk(c);
      } catch (na) {
        b = na;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
  }
  function Ik(a, b) {
    var c = K;
    K |= 2;
    var d = Jk();
    if (Q !== a || Z !== b) uk = null, Kk(a, b);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K = c;
    mk.current = d;
    if (null !== Y) throw Error(p(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; ) Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); ) Uk(Y);
  }
  function Uk(a) {
    var b = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b ? Sk(a) : Y = b;
    nk.current = null;
  }
  function Sk(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Ej(c, b, fj), null !== c) {
          Y = c;
          return;
        }
      } else {
        c = Ij(c, b);
        if (null !== c) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Pk(a, b, c) {
    var d = C, e = ok.transition;
    try {
      ok.transition = null, C = 1, Wk(a, b, c, d);
    } finally {
      ok.transition = e, C = d;
    }
    return null;
  }
  function Wk(a, b, c, d) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K & 6)) throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === Q && (Y = Q = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = ok.transition;
      ok.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      nk.current = null;
      Oj(a, c);
      dk(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      hk(c);
      dc();
      K = h;
      C = g;
      ok.transition = f;
    } else a.current = c;
    vk && (vk = false, wk = a, xk = e);
    f = a.pendingLanes;
    0 === f && (Ri = null);
    mc(c.stateNode);
    Dk(a, B());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a = Pi, Pi = null, a;
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk), b = ok.transition, c = C;
      try {
        ok.transition = null;
        C = 16 > a ? 16 : a;
        if (null === wk) var d = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6)) throw Error(p(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f = V, g = f.child;
            if (0 !== (V.flags & 16)) {
              var h = f.deletions;
              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];
                  for (V = l; null !== V; ) {
                    var m = V;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m, f);
                    }
                    var q = m.child;
                    if (null !== q) q.return = m, V = q;
                    else for (; null !== V; ) {
                      m = V;
                      var r = m.sibling, y = m.return;
                      Sj(m);
                      if (m === l) {
                        V = null;
                        break;
                      }
                      if (null !== r) {
                        r.return = y;
                        V = r;
                        break;
                      }
                      V = y;
                    }
                  }
                }
                var n = f.alternate;
                if (null !== n) {
                  var t = n.child;
                  if (null !== t) {
                    n.child = null;
                    do {
                      var J = t.sibling;
                      t.sibling = null;
                      t = J;
                    } while (null !== t);
                  }
                }
                V = f;
              }
            }
            if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
            else b: for (; null !== V; ) {
              f = V;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f, f.return);
              }
              var x = f.sibling;
              if (null !== x) {
                x.return = f.return;
                V = x;
                break b;
              }
              V = f.return;
            }
          }
          var w = a.current;
          for (V = w; null !== V; ) {
            g = V;
            var u = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
            else b: for (g = w; null !== V; ) {
              h = V;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h);
                }
              } catch (na) {
                W(h, h.return, na);
              }
              if (h === g) {
                V = null;
                break b;
              }
              var F = h.sibling;
              if (null !== F) {
                F.return = h.return;
                V = F;
                break b;
              }
              V = h.return;
            }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
          d = true;
        }
        return d;
      } finally {
        C = c, ok.transition = b;
      }
    }
    return false;
  }
  function Xk(a, b, c) {
    b = Ji(c, b);
    b = Ni(a, b, 1);
    a = nh(a, b, 1);
    b = R();
    null !== a && (Ac(a, 1, b), Dk(a, b));
  }
  function W(a, b, c) {
    if (3 === a.tag) Xk(a, a, c);
    else for (; null !== b; ) {
      if (3 === b.tag) {
        Xk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
          a = Ji(c, a);
          a = Qi(b, a, 1);
          b = nh(b, a, 1);
          a = R();
          null !== b && (Ac(b, 1, a), Dk(b, a));
          break;
        }
      }
      b = b.return;
    }
  }
  function Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = R();
    a.pingedLanes |= a.suspendedLanes & c;
    Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
    Dk(a, b);
  }
  function Yk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = R();
    a = ih(a, b);
    null !== a && (Ac(a, b, c), Dk(a, c));
  }
  function uj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Yk(a, c);
  }
  function bk(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    null !== d && d.delete(b);
    Yk(a, c);
  }
  var Vk;
  Vk = function(a, b, c) {
    if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
      dh = 0 !== (a.flags & 131072) ? true : false;
    }
    else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        ij(a, b);
        a = b.pendingProps;
        var e = Yf(b, H.current);
        ch(b, c);
        e = Nh(null, b, d, a, e, c);
        var f = Sh();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          ij(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Zk(d);
          a = Ci(d, a);
          switch (e) {
            case 0:
              b = cj(null, b, d, a, c);
              break a;
            case 1:
              b = hj(null, b, d, a, c);
              break a;
            case 11:
              b = Yi(null, b, d, a, c);
              break a;
            case 14:
              b = $i(null, b, d, Ci(d.type, a), c);
              break a;
          }
          throw Error(p(
            306,
            d,
            ""
          ));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
      case 3:
        a: {
          kj(b);
          if (null === a) throw Error(p(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          lh(a, b);
          qh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ji(Error(p(423)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ji(Error(p(424)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = Zi(a, b, c);
              break a;
            }
            Xi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
      case 6:
        return null === a && Eg(b), null;
      case 13:
        return oj(a, b, c);
      case 4:
        return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
      case 7:
        return Xi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          G(Wg, d._currentValue);
          d._currentValue = g;
          if (null !== f) if (He(f.value, g)) {
            if (f.children === e.children && !Wf.current) {
              b = Zi(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
            var h = f.dependencies;
            if (null !== h) {
              g = f.child;
              for (var k = h.firstContext; null !== k; ) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = mh(-1, c & -c);
                    k.tag = 2;
                    var l = f.updateQueue;
                    if (null !== l) {
                      l = l.shared;
                      var m = l.pending;
                      null === m ? k.next = k : (k.next = m.next, m.next = k);
                      l.pending = k;
                    }
                  }
                  f.lanes |= c;
                  k = f.alternate;
                  null !== k && (k.lanes |= c);
                  bh(
                    f.return,
                    c,
                    b
                  );
                  h.lanes |= c;
                  break;
                }
                k = k.next;
              }
            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
            else if (18 === f.tag) {
              g = f.return;
              if (null === g) throw Error(p(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              bh(g, c, b);
              g = f.sibling;
            } else g = f.child;
            if (null !== g) g.return = f;
            else for (g = f; null !== g; ) {
              if (g === b) {
                g = null;
                break;
              }
              f = g.sibling;
              if (null !== f) {
                f.return = g.return;
                g = f;
                break;
              }
              g = g.return;
            }
            f = g;
          }
          Xi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
      case 15:
        return bj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
      case 19:
        return xj(a, b, c);
      case 22:
        return dj(a, b, c);
    }
    throw Error(p(156, b.tag));
  };
  function Fk(a, b) {
    return ac(a, b);
  }
  function $k(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b, c, d) {
    return new $k(a, b, c, d);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ("function" === typeof a) return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da) return 11;
      if (a === Ga) return 14;
    }
    return 2;
  }
  function Pg(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Rg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) aj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch (a) {
      case ya:
        return Tg(c.children, e, f, b);
      case za:
        g = 8;
        e |= 8;
        break;
      case Aa:
        return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
      case Ea:
        return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
      case Fa:
        return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
      case Ia:
        return pj(c, e, f, b);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case Ba:
            g = 10;
            break a;
          case Ca:
            g = 9;
            break a;
          case Da:
            g = 11;
            break a;
          case Ga:
            g = 14;
            break a;
          case Ha:
            g = 16;
            d = null;
            break a;
        }
        throw Error(p(130, null == a ? a : typeof a, ""));
    }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Tg(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function pj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Sg(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b, c, d, e, f, g, h, k) {
    a = new al(a, b, c, h, k);
    1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f);
    return a;
  }
  function cl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }
  function dl(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(p(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (Zf(c)) return bg(a, c, b);
    }
    return b;
  }
  function el(a, b, c, d, e, f, g, h, k) {
    a = bl(c, d, true, a, e, f, g, h, k);
    a.context = dl(null);
    c = a.current;
    d = R();
    e = yi(c);
    f = mh(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    nh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Dk(a, d);
    return a;
  }
  function fl(a, b, c, d) {
    var e = b.current, f = R(), g = yi(e);
    c = dl(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = mh(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = nh(e, b, g);
    null !== a && (gi(a, e, g, f), oh(a, e, g));
    return g;
  }
  function gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function il(a, b) {
    hl(a, b);
    (a = a.alternate) && hl(a, b);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error(p(409));
    fl(a, b, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
      Qc.splice(c, 0, a);
      0 === c && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function pl() {
  }
  function ql(a, b, c, d, e) {
    if (e) {
      if ("function" === typeof d) {
        var f = d;
        d = function() {
          var a2 = gl(g);
          f.call(a2);
        };
      }
      var g = el(b, d, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g;
    }
    for (; e = a.lastChild; ) a.removeChild(e);
    if ("function" === typeof d) {
      var h = d;
      d = function() {
        var a2 = gl(k);
        h.call(a2);
      };
    }
    var k = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function() {
      fl(b, k, c, d);
    });
    return k;
  }
  function rl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f;
      if ("function" === typeof e) {
        var h = e;
        e = function() {
          var a2 = gl(g);
          h.call(a2);
        };
      }
      fl(b, g, a, e);
    } else g = ql(c, b, a, e, d);
    return gl(g);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b2 = ih(a, 1);
          if (null !== b2) {
            var c2 = R();
            gi(b2, a, 1, c2);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b = ih(a, 134217728);
      if (null !== b) {
        var c = R();
        gi(b, a, 134217728, c);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b = yi(a), c = ih(a, b);
      if (null !== c) {
        var d = R();
        gi(c, a, b, d);
      }
      il(a, b);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a, b) {
    var c = C;
    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode; ) c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e) throw Error(p(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, null != b && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b)) throw Error(p(200));
    return cl(a, b, null, c);
  };
  reactDom_production_min.createRoot = function(a, b) {
    if (!nl(a)) throw Error(p(299));
    var c = false, d = "", e = kl;
    null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = bl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(p(188));
      a = Object.keys(a).join(",");
      throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function(a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, true, c);
  };
  reactDom_production_min.hydrateRoot = function(a, b, c) {
    if (!nl(a)) throw Error(p(405));
    var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
    null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
    a[uf] = b.current;
    sf(a);
    if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
      c,
      e
    );
    return new ml(b);
  };
  reactDom_production_min.render = function(a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!ol(a)) throw Error(p(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!ol(c)) throw Error(p(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
    return rl(a, b, c, false, d);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = requireReact(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
const jsx = jsxRuntimeExports.jsx;
const jsxs = jsxRuntimeExports.jsxs;
const Fragment = jsxRuntimeExports.Fragment;
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
const COLUMNS = "abcdefgh".split("");
const START_POSITION_OBJECT = {
  a8: "bR",
  b8: "bN",
  c8: "bB",
  d8: "bQ",
  e8: "bK",
  f8: "bB",
  g8: "bN",
  h8: "bR",
  a7: "bP",
  b7: "bP",
  c7: "bP",
  d7: "bP",
  e7: "bP",
  f7: "bP",
  g7: "bP",
  h7: "bP",
  a2: "wP",
  b2: "wP",
  c2: "wP",
  d2: "wP",
  e2: "wP",
  f2: "wP",
  g2: "wP",
  h2: "wP",
  a1: "wR",
  b1: "wN",
  c1: "wB",
  d1: "wQ",
  e1: "wK",
  f1: "wB",
  g1: "wN",
  h1: "wR"
};
const WHITE_COLUMN_VALUES = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7
};
const BLACK_COLUMN_VALUES = {
  a: 7,
  b: 6,
  c: 5,
  d: 4,
  e: 3,
  f: 2,
  g: 1,
  h: 0
};
const WHITE_ROWS = [7, 6, 5, 4, 3, 2, 1, 0];
const BLACK_ROWS = [0, 1, 2, 3, 4, 5, 6, 7];
const defaultPieces = {
  wP: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsx("path", { d: "m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z", style: {
    opacity: "1",
    fill: "#ffffff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "miter",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }) })),
  wR: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    opacity: "1",
    fill: "#ffffff",
    fillOpacity: "1",
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }, { children: [jsx("path", { d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ", style: { strokeLinecap: "butt" } }), jsx("path", { d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ", style: { strokeLinecap: "butt" } }), jsx("path", { d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14", style: { strokeLinecap: "butt" } }), jsx("path", { d: "M 34,14 L 31,17 L 14,17 L 11,14" }), jsx("path", { d: "M 31,17 L 31,29.5 L 14,29.5 L 14,17", style: { strokeLinecap: "butt", strokeLinejoin: "miter" } }), jsx("path", { d: "M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" }), jsx("path", { d: "M 11,14 L 34,14", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } })] })) })),
  wN: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    opacity: "1",
    fill: "none",
    fillOpacity: "1",
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }, { children: [jsx("path", { d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18", style: { fill: "#ffffff", stroke: "#000000" } }), jsx("path", { d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10", style: { fill: "#ffffff", stroke: "#000000" } }), jsx("path", { d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z", style: { fill: "#000000", stroke: "#000000" } }), jsx("path", { d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z", transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)", style: { fill: "#000000", stroke: "#000000" } })] })) })),
  wB: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    opacity: "1",
    fill: "none",
    fillRule: "evenodd",
    fillOpacity: "1",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }, { children: [jsxs("g", Object.assign({ style: { fill: "#ffffff", stroke: "#000000", strokeLinecap: "butt" } }, { children: [jsx("path", { d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z" }), jsx("path", { d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" }), jsx("path", { d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" })] })), jsx("path", { d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } })] })) })),
  wQ: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    fill: "#ffffff",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  } }, { children: [jsx("path", { d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z" }), jsx("path", { d: "M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z" }), jsx("path", { d: "M 11.5,30 C 15,29 30,29 33.5,30", style: { fill: "none" } }), jsx("path", { d: "M 12,33.5 C 18,32.5 27,32.5 33,33.5", style: { fill: "none" } }), jsx("circle", { cx: "6", cy: "12", r: "2" }), jsx("circle", { cx: "14", cy: "9", r: "2" }), jsx("circle", { cx: "22.5", cy: "8", r: "2" }), jsx("circle", { cx: "31", cy: "9", r: "2" }), jsx("circle", { cx: "39", cy: "12", r: "2" })] })) })),
  wK: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    fill: "none",
    fillOpacity: "1",
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }, { children: [jsx("path", { d: "M 22.5,11.63 L 22.5,6", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } }), jsx("path", { d: "M 20,8 L 25,8", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } }), jsx("path", { d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25", style: {
    fill: "#ffffff",
    stroke: "#000000",
    strokeLinecap: "butt",
    strokeLinejoin: "miter"
  } }), jsx("path", { d: "M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37", style: { fill: "#ffffff", stroke: "#000000" } }), jsx("path", { d: "M 12.5,30 C 18,27 27,27 32.5,30", style: { fill: "none", stroke: "#000000" } }), jsx("path", { d: "M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5", style: { fill: "none", stroke: "#000000" } }), jsx("path", { d: "M 12.5,37 C 18,34 27,34 32.5,37", style: { fill: "none", stroke: "#000000" } })] })) })),
  bP: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsx("path", { d: "m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z", style: {
    opacity: "1",
    fill: "#000000",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "miter",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }) })),
  bR: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    opacity: "1",
    fill: "#000000",
    fillOpacity: "1",
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }, { children: [jsx("path", { d: "M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z ", style: { strokeLinecap: "butt" } }), jsx("path", { d: "M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z ", style: { strokeLinecap: "butt" } }), jsx("path", { d: "M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z ", style: { strokeLinecap: "butt" } }), jsx("path", { d: "M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z ", style: { strokeLinecap: "butt", strokeLinejoin: "miter" } }), jsx("path", { d: "M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z ", style: { strokeLinecap: "butt" } }), jsx("path", { d: "M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z ", style: { strokeLinecap: "butt" } }), jsx("path", { d: "M 12,35.5 L 33,35.5 L 33,35.5", style: {
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "1",
    strokeLinejoin: "miter"
  } }), jsx("path", { d: "M 13,31.5 L 32,31.5", style: {
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "1",
    strokeLinejoin: "miter"
  } }), jsx("path", { d: "M 14,29.5 L 31,29.5", style: {
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "1",
    strokeLinejoin: "miter"
  } }), jsx("path", { d: "M 14,16.5 L 31,16.5", style: {
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "1",
    strokeLinejoin: "miter"
  } }), jsx("path", { d: "M 11,14 L 34,14", style: {
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "1",
    strokeLinejoin: "miter"
  } })] })) })),
  bN: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    opacity: "1",
    fill: "none",
    fillOpacity: "1",
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }, { children: [jsx("path", { d: "M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18", style: { fill: "#000000", stroke: "#000000" } }), jsx("path", { d: "M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10", style: { fill: "#000000", stroke: "#000000" } }), jsx("path", { d: "M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z", style: { fill: "#ffffff", stroke: "#ffffff" } }), jsx("path", { d: "M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z", transform: "matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)", style: { fill: "#ffffff", stroke: "#ffffff" } }), jsx("path", { d: "M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z ", style: { fill: "#ffffff", stroke: "none" } })] })) })),
  bB: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    opacity: "1",
    fill: "none",
    fillRule: "evenodd",
    fillOpacity: "1",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }, { children: [jsxs("g", Object.assign({ style: { fill: "#000000", stroke: "#000000", strokeLinecap: "butt" } }, { children: [jsx("path", { d: "M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z" }), jsx("path", { d: "M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" }), jsx("path", { d: "M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" })] })), jsx("path", { d: "M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18", style: { fill: "none", stroke: "#ffffff", strokeLinejoin: "miter" } })] })) })),
  bQ: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    fill: "#000000",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  } }, { children: [jsx("path", { d: "M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z", style: { strokeLinecap: "butt", fill: "#000000" } }), jsx("path", { d: "m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z" }), jsx("path", { d: "M 11.5,30 C 15,29 30,29 33.5,30" }), jsx("path", { d: "m 12,33.5 c 6,-1 15,-1 21,0" }), jsx("circle", { cx: "6", cy: "12", r: "2" }), jsx("circle", { cx: "14", cy: "9", r: "2" }), jsx("circle", { cx: "22.5", cy: "8", r: "2" }), jsx("circle", { cx: "31", cy: "9", r: "2" }), jsx("circle", { cx: "39", cy: "12", r: "2" }), jsx("path", { d: "M 11,38.5 A 35,35 1 0 0 34,38.5", style: { fill: "none", stroke: "#000000", strokeLinecap: "butt" } }), jsxs("g", Object.assign({ style: { fill: "none", stroke: "#ffffff" } }, { children: [jsx("path", { d: "M 11,29 A 35,35 1 0 1 34,29" }), jsx("path", { d: "M 12.5,31.5 L 32.5,31.5" }), jsx("path", { d: "M 11.5,34.5 A 35,35 1 0 0 33.5,34.5" }), jsx("path", { d: "M 10.5,37.5 A 35,35 1 0 0 34.5,37.5" })] }))] })) })),
  bK: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "45", height: "45" }, { children: jsxs("g", Object.assign({ style: {
    fill: "none",
    fillOpacity: "1",
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "4",
    strokeDasharray: "none",
    strokeOpacity: "1"
  } }, { children: [jsx("path", { d: "M 22.5,11.63 L 22.5,6", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" }, id: "path6570" }), jsx("path", { d: "M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25", style: {
    fill: "#000000",
    fillOpacity: "1",
    strokeLinecap: "butt",
    strokeLinejoin: "miter"
  } }), jsx("path", { d: "M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37", style: { fill: "#000000", stroke: "#000000" } }), jsx("path", { d: "M 20,8 L 25,8", style: { fill: "none", stroke: "#000000", strokeLinejoin: "miter" } }), jsx("path", { d: "M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5", style: { fill: "none", stroke: "#ffffff" } }), jsx("path", { d: "M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37", style: { fill: "none", stroke: "#ffffff" } })] })) }))
};
function getRelativeCoords(boardOrientation, boardWidth, square) {
  const squareWidth = boardWidth / 8;
  const columns = boardOrientation === "white" ? WHITE_COLUMN_VALUES : BLACK_COLUMN_VALUES;
  const rows = boardOrientation === "white" ? WHITE_ROWS : BLACK_ROWS;
  const x = columns[square[0]] * squareWidth + squareWidth / 2;
  const y = rows[parseInt(square[1], 10) - 1] * squareWidth + squareWidth / 2;
  return { x, y };
}
function isDifferentFromStart(newPosition) {
  let isDifferent = false;
  Object.keys(START_POSITION_OBJECT).forEach((square) => {
    if (newPosition[square] !== START_POSITION_OBJECT[square])
      isDifferent = true;
  });
  Object.keys(newPosition).forEach((square) => {
    if (START_POSITION_OBJECT[square] !== newPosition[square])
      isDifferent = true;
  });
  return isDifferent;
}
function getPositionDifferences(currentPosition, newPosition) {
  const difference = {
    removed: {},
    added: {}
  };
  Object.keys(currentPosition).forEach((square) => {
    if (newPosition[square] !== currentPosition[square])
      difference.removed[square] = currentPosition[square];
  });
  Object.keys(newPosition).forEach((square) => {
    if (currentPosition[square] !== newPosition[square])
      difference.added[square] = newPosition[square];
  });
  return difference;
}
function convertPositionToObject(position) {
  if (position === "start") {
    return START_POSITION_OBJECT;
  }
  if (typeof position === "string") {
    return fenToObj(position);
  }
  return position;
}
function fenToObj(fen) {
  if (!isValidFen(fen))
    return {};
  fen = fen.replace(/ .+$/, "");
  const rows = fen.split("/");
  const position = {};
  let currentRow = 8;
  for (let i = 0; i < 8; i++) {
    const row = rows[i].split("");
    let colIdx = 0;
    for (let j = 0; j < row.length; j++) {
      if (row[j].search(/[1-8]/) !== -1) {
        const numEmptySquares = parseInt(row[j], 10);
        colIdx = colIdx + numEmptySquares;
      } else {
        const square = COLUMNS[colIdx] + currentRow;
        position[square] = fenToPieceCode(row[j]);
        colIdx = colIdx + 1;
      }
    }
    currentRow = currentRow - 1;
  }
  return position;
}
function isValidFen(fen) {
  fen = fen.replace(/ .+$/, "");
  fen = expandFenEmptySquares(fen);
  const chunks = fen.split("/");
  if (chunks.length !== 8)
    return false;
  for (let i = 0; i < 8; i++) {
    if (chunks[i].length !== 8 || chunks[i].search(/[^kqrnbpKQRNBP1]/) !== -1) {
      return false;
    }
  }
  return true;
}
function expandFenEmptySquares(fen) {
  return fen.replace(/8/g, "11111111").replace(/7/g, "1111111").replace(/6/g, "111111").replace(/5/g, "11111").replace(/4/g, "1111").replace(/3/g, "111").replace(/2/g, "11");
}
function fenToPieceCode(piece) {
  if (piece.toLowerCase() === piece) {
    return "b" + piece.toUpperCase();
  }
  return "w" + piece.toUpperCase();
}
const useArrows = (customArrows, areArrowsAllowed = true, onArrowsChange, customArrowColor) => {
  const [customArrowsSet, setCustomArrows] = reactExports.useState([]);
  const [arrows, setArrows] = reactExports.useState([]);
  const [newArrow, setNewArrow] = reactExports.useState();
  reactExports.useEffect(() => {
    if (Array.isArray(customArrows)) {
      clearArrows();
      setCustomArrows(
        //filter out arrows which starts and ends in the same square
        customArrows === null || customArrows === void 0 ? void 0 : customArrows.filter((arrow) => arrow[0] !== arrow[1])
      );
    }
  }, [customArrows]);
  reactExports.useEffect(() => {
    onArrowsChange === null || onArrowsChange === void 0 ? void 0 : onArrowsChange(arrows);
  }, [arrows]);
  function clearArrows() {
    setArrows([]);
    setNewArrow(void 0);
  }
  const drawNewArrow = (fromSquare, toSquare) => {
    if (!areArrowsAllowed)
      return;
    setNewArrow([fromSquare, toSquare, customArrowColor]);
  };
  const allBoardArrows = [...arrows, ...customArrowsSet];
  const onArrowDrawEnd = (fromSquare, toSquare) => {
    if (fromSquare === toSquare || !areArrowsAllowed)
      return;
    let arrowsCopy;
    const newArrow2 = [fromSquare, toSquare, customArrowColor];
    const isNewArrowUnique = allBoardArrows.every(([arrowFrom, arrowTo]) => {
      return !(arrowFrom === fromSquare && arrowTo === toSquare);
    });
    if (isNewArrowUnique) {
      arrowsCopy = [...arrows, newArrow2];
    } else {
      arrowsCopy = arrows.filter(([arrowFrom, arrowTo]) => {
        return !(arrowFrom === fromSquare && arrowTo === toSquare);
      });
    }
    setNewArrow(void 0);
    setArrows(arrowsCopy);
  };
  return {
    arrows: allBoardArrows,
    newArrow,
    clearArrows,
    drawNewArrow,
    setArrows,
    onArrowDrawEnd
  };
};
const ChessboardContext = reactExports.createContext({});
const useChessboard = () => reactExports.useContext(ChessboardContext);
const ChessboardProvider = reactExports.forwardRef(({ allowDragOutsideBoard = true, animationDuration = 300, areArrowsAllowed = true, arePiecesDraggable = true, arePremovesAllowed = false, autoPromoteToQueen = false, boardOrientation = "white", boardWidth, children, clearPremovesOnRightClick = true, customArrows, customArrowColor = "rgb(255,170,0)", customBoardStyle, customNotationStyle, customDarkSquareStyle = { backgroundColor: "#B58863" }, customDropSquareStyle = {
  boxShadow: "inset 0 0 1px 6px rgba(255,255,255,0.75)"
}, customLightSquareStyle = { backgroundColor: "#F0D9B5" }, customPieces, customPremoveDarkSquareStyle = { backgroundColor: "#A42323" }, customPremoveLightSquareStyle = { backgroundColor: "#BD2828" }, customSquare = "div", customSquareStyles, dropOffBoardAction = "snapback", id = 0, isDraggablePiece = () => true, getPositionObject = () => {
}, onArrowsChange = () => {
}, onDragOverSquare = () => {
}, onMouseOutSquare = () => {
}, onMouseOverSquare = () => {
}, onPieceClick = () => {
}, onPieceDragBegin = () => {
}, onPieceDragEnd = () => {
}, onPieceDrop = () => true, onPieceDropOffBoard = () => {
}, onPromotionCheck = (sourceSquare, targetSquare, piece) => {
  return (piece === "wP" && sourceSquare[1] === "7" && targetSquare[1] === "8" || piece === "bP" && sourceSquare[1] === "2" && targetSquare[1] === "1") && Math.abs(sourceSquare.charCodeAt(0) - targetSquare.charCodeAt(0)) <= 1;
}, onPromotionPieceSelect = () => true, onSparePieceDrop = () => true, onSquareClick = () => {
}, onSquareRightClick = () => {
}, position = "start", promotionDialogVariant = "default", promotionToSquare = null, showBoardNotation = true, showPromotionDialog = false, snapToCursor = true }, ref) => {
  const [currentPosition, setCurrentPosition] = reactExports.useState(convertPositionToObject(position));
  const [positionDifferences, setPositionDifferences] = reactExports.useState({ removed: {}, added: {} });
  const [lastPieceColour, setLastPieceColour] = reactExports.useState(void 0);
  const [showPromoteDialog, setShowPromoteDialog] = reactExports.useState(showPromotionDialog && !autoPromoteToQueen);
  const [promoteFromSquare, setPromoteFromSquare] = reactExports.useState(null);
  const [promoteToSquare, setPromoteToSquare] = reactExports.useState(promotionToSquare);
  const [premoves, setPremoves] = reactExports.useState([]);
  const premovesRef = reactExports.useRef(premoves);
  const [currentRightClickDown, setCurrentRightClickDown] = reactExports.useState();
  const [chessPieces, setChessPieces] = reactExports.useState(Object.assign(Object.assign({}, defaultPieces), customPieces));
  const [wasManualDrop, setWasManualDrop] = reactExports.useState(false);
  const [previousTimeout, setPreviousTimeout] = reactExports.useState();
  const [isWaitingForAnimation, setIsWaitingForAnimation] = reactExports.useState(false);
  const [lastSquareDraggedOver, setLastSquareDraggedOver] = reactExports.useState(null);
  reactExports.useImperativeHandle(ref, () => ({
    clearPremoves(clearLastPieceColour = true) {
      clearPremoves(clearLastPieceColour);
    }
  }));
  reactExports.useEffect(() => {
    setChessPieces(Object.assign(Object.assign({}, defaultPieces), customPieces));
  }, [customPieces]);
  reactExports.useEffect(() => {
    setShowPromoteDialog(showPromotionDialog);
    setPromoteToSquare(promotionToSquare);
  }, [promotionToSquare, showPromotionDialog]);
  reactExports.useEffect(() => {
    var _a, _b, _c;
    clearPromotion();
    const newPosition = convertPositionToObject(position);
    const differences = getPositionDifferences(currentPosition, newPosition);
    const newPieceColour = ((_a = Object.keys(differences.added)) === null || _a === void 0 ? void 0 : _a.length) <= 2 ? (_c = (_b = Object.entries(differences.added)) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c[1][0] : void 0;
    if (isWaitingForAnimation) {
      setCurrentPosition(newPosition);
      setIsWaitingForAnimation(false);
      arePremovesAllowed && attemptPremove(newPieceColour);
      if (previousTimeout) {
        clearTimeout(previousTimeout);
      }
    } else {
      if (wasManualDrop) {
        setCurrentPosition(newPosition);
        setIsWaitingForAnimation(false);
        arePremovesAllowed && attemptPremove(newPieceColour);
      } else {
        if (isDifferentFromStart(newPosition) && lastPieceColour !== void 0) {
          setLastPieceColour(newPieceColour);
        } else if (!isDifferentFromStart(newPosition)) {
          setLastPieceColour("b");
        } else {
          setLastPieceColour(void 0);
        }
        setPositionDifferences(differences);
        setIsWaitingForAnimation(true);
        const newTimeout = setTimeout(() => {
          setCurrentPosition(newPosition);
          setIsWaitingForAnimation(false);
          arePremovesAllowed && attemptPremove(newPieceColour);
        }, animationDuration);
        setPreviousTimeout(newTimeout);
      }
    }
    setWasManualDrop(false);
    getPositionObject(newPosition);
    clearArrows();
    return () => {
      clearTimeout(previousTimeout);
    };
  }, [position]);
  const { arrows, newArrow, clearArrows, drawNewArrow, onArrowDrawEnd } = useArrows(customArrows, areArrowsAllowed, onArrowsChange, customArrowColor);
  function handleSetPosition(sourceSq, targetSq, piece, wasManualDropOverride) {
    if (sourceSq === targetSq) {
      return;
    }
    clearArrows();
    if (arePremovesAllowed && isWaitingForAnimation || arePremovesAllowed && (lastPieceColour === piece[0] || premovesRef.current.filter((p) => p.piece[0] === piece[0]).length > 0)) {
      const oldPremoves = [...premovesRef.current];
      oldPremoves.push({ sourceSq, targetSq, piece });
      premovesRef.current = oldPremoves;
      setPremoves([...oldPremoves]);
      clearPromotion();
      return;
    }
    if (!arePremovesAllowed && isWaitingForAnimation)
      return;
    const newOnDropPosition = Object.assign({}, currentPosition);
    setWasManualDrop(!!wasManualDropOverride);
    setLastPieceColour(piece[0]);
    if (onPieceDrop.length) {
      const isValidMove = onPieceDrop(sourceSq, targetSq, piece);
      if (!isValidMove) {
        clearPremoves();
        setWasManualDrop(false);
      }
    } else {
      delete newOnDropPosition[sourceSq];
      newOnDropPosition[targetSq] = piece;
      setCurrentPosition(newOnDropPosition);
    }
    clearPromotion();
    getPositionObject(newOnDropPosition);
  }
  function deletePieceFromSquare(square) {
    const positionCopy = Object.assign({}, currentPosition);
    delete positionCopy[square];
    setCurrentPosition(positionCopy);
    getPositionObject(positionCopy);
  }
  function attemptPremove(newPieceColour) {
    if (premovesRef.current.length === 0)
      return;
    const premove = premovesRef.current[0];
    if (premove.piece[0] !== void 0 && premove.piece[0] !== newPieceColour && onPieceDrop.length) {
      setLastPieceColour(premove.piece[0]);
      setWasManualDrop(true);
      const isValidMove = onPieceDrop(premove.sourceSq, premove.targetSq, premove.piece);
      if (isValidMove) {
        const oldPremoves = [...premovesRef.current];
        oldPremoves.shift();
        premovesRef.current = oldPremoves;
        setPremoves([...oldPremoves]);
      } else {
        clearPremoves();
      }
    }
  }
  function handleSparePieceDrop(piece, targetSq) {
    const isValidDrop = onSparePieceDrop(piece, targetSq);
    if (!isValidDrop)
      return;
    const newOnDropPosition = Object.assign({}, currentPosition);
    newOnDropPosition[targetSq] = piece;
    setCurrentPosition(newOnDropPosition);
    getPositionObject(newOnDropPosition);
  }
  function clearPremoves(clearLastPieceColour = true) {
    if (clearLastPieceColour)
      setLastPieceColour(void 0);
    premovesRef.current = [];
    setPremoves([]);
  }
  function clearPromotion() {
    setPromoteFromSquare(null);
    setPromoteToSquare(null);
    setShowPromoteDialog(false);
  }
  function onRightClickDown(square) {
    setCurrentRightClickDown(square);
  }
  function onRightClickUp(square) {
    if (currentRightClickDown) {
      if (currentRightClickDown === square) {
        setCurrentRightClickDown(void 0);
        clearPremovesOnRightClick && clearPremoves(false);
        onSquareRightClick(square);
        return;
      }
    } else
      setCurrentRightClickDown(void 0);
  }
  function clearCurrentRightClickDown() {
    setCurrentRightClickDown(void 0);
  }
  const ChessboardProviderContextValue = {
    allowDragOutsideBoard,
    animationDuration,
    arePiecesDraggable,
    arePremovesAllowed,
    arrows,
    autoPromoteToQueen,
    boardOrientation,
    boardWidth,
    chessPieces,
    clearArrows,
    clearCurrentRightClickDown,
    currentPosition,
    currentRightClickDown,
    customArrowColor,
    customBoardStyle,
    customDarkSquareStyle,
    customDropSquareStyle,
    customLightSquareStyle,
    customNotationStyle,
    customPremoveDarkSquareStyle,
    customPremoveLightSquareStyle,
    customSquare,
    customSquareStyles,
    deletePieceFromSquare,
    drawNewArrow,
    dropOffBoardAction,
    handleSetPosition,
    handleSparePieceDrop,
    id,
    isDraggablePiece,
    isWaitingForAnimation,
    lastPieceColour,
    lastSquareDraggedOver,
    newArrow,
    onArrowDrawEnd,
    onDragOverSquare,
    onMouseOutSquare,
    onMouseOverSquare,
    onPieceClick,
    onPieceDragBegin,
    onPieceDragEnd,
    onPieceDrop,
    onPieceDropOffBoard,
    onPromotionCheck,
    onPromotionPieceSelect,
    onRightClickDown,
    onRightClickUp,
    onSparePieceDrop,
    onSquareClick,
    positionDifferences,
    premoves,
    promoteFromSquare,
    promoteToSquare,
    promotionDialogVariant,
    setLastSquareDraggedOver,
    setPromoteFromSquare,
    setPromoteToSquare,
    setShowPromoteDialog,
    showBoardNotation,
    showPromoteDialog,
    snapToCursor
  };
  return jsx(ChessboardContext.Provider, Object.assign({ value: ChessboardProviderContextValue }, { children }));
});
function Notation({ row, col }) {
  const { boardOrientation, boardWidth, customDarkSquareStyle, customLightSquareStyle, customNotationStyle } = useChessboard();
  const whiteColor = customLightSquareStyle.backgroundColor;
  const blackColor = customDarkSquareStyle.backgroundColor;
  const isRow = col === 0;
  const isColumn = row === 7;
  const isBottomLeftSquare = isRow && isColumn;
  function getRow() {
    return boardOrientation === "white" ? 8 - row : row + 1;
  }
  function getColumn() {
    return boardOrientation === "black" ? COLUMNS[7 - col] : COLUMNS[col];
  }
  function renderBottomLeft() {
    return jsxs(Fragment, { children: [jsx("div", Object.assign({ style: Object.assign(Object.assign({ zIndex: 3, position: "absolute" }, { color: whiteColor }), numericStyle(boardWidth, customNotationStyle)) }, { children: getRow() })), jsx("div", Object.assign({ style: Object.assign(Object.assign({ zIndex: 3, position: "absolute" }, { color: whiteColor }), alphaStyle(boardWidth, customNotationStyle)) }, { children: getColumn() }))] });
  }
  function renderLetters() {
    return jsx("div", Object.assign({ style: Object.assign(Object.assign({ userSelect: "none", zIndex: 3, position: "absolute" }, { color: col % 2 !== 0 ? blackColor : whiteColor }), alphaStyle(boardWidth, customNotationStyle)) }, { children: getColumn() }));
  }
  function renderNumbers() {
    return jsx("div", Object.assign({ style: Object.assign(Object.assign({ userSelect: "none", zIndex: 3, position: "absolute" }, boardOrientation === "black" ? { color: row % 2 === 0 ? blackColor : whiteColor } : { color: row % 2 === 0 ? blackColor : whiteColor }), numericStyle(boardWidth, customNotationStyle)) }, { children: getRow() }));
  }
  if (isBottomLeftSquare) {
    return renderBottomLeft();
  }
  if (isColumn) {
    return renderLetters();
  }
  if (isRow) {
    return renderNumbers();
  }
  return null;
}
const alphaStyle = (width, customNotationStyle) => Object.assign({ alignSelf: "flex-end", paddingLeft: width / 8 - width / 48, fontSize: width / 48 }, customNotationStyle);
const numericStyle = (width, customNotationStyle) => Object.assign({ alignSelf: "flex-start", paddingRight: width / 8 - width / 48, fontSize: width / 48 }, customNotationStyle);
const DndContext = reactExports.createContext({
  dragDropManager: void 0
});
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString()
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function invariant(condition, format, ...args) {
  if (isProduction()) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    let error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
function isProduction() {
  return typeof process !== "undefined" && true;
}
function get(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a, c) => a && a[c] ? a[c] : defaultValue || null,
    obj
  );
}
function without$1(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function isObject(input) {
  return typeof input === "object";
}
function xor(itemsA, itemsB) {
  const map = /* @__PURE__ */ new Map();
  const insertItem = (item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  map.forEach((count, key) => {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t) => itemsB.indexOf(t) > -1
  );
}
const INIT_COORDS = "dnd-core/INIT_COORDS";
const BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
const PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
const HOVER = "dnd-core/HOVER";
const DROP = "dnd-core/DROP";
const END_DRAG = "dnd-core/END_DRAG";
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}
const ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag(sourceIds = [], options = {
    publishSource: true
  }) {
    const { publishSource = true, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options;
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants$1(sourceIds, monitor, registry);
    const sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2);
      sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    const source = registry.getSource(sourceId);
    const item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    const itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants$1(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function createDrop(manager) {
  return function drop(options = {}) {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyInvariants(monitor);
    const targetIds = getDroppableTargets(monitor);
    targetIds.forEach((targetId, index) => {
      const dropResult = determineDropResult(targetId, index, registry, monitor);
      const action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread$4({}, options, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function verifyInvariants(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  const target = registry.getTarget(targetId);
  let dropResult = target ? target.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === "undefined" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}
function createEndDrag(manager) {
  return function endDrag() {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyIsDragging(monitor);
    const sourceId = monitor.getSourceId();
    if (sourceId != null) {
      const source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(
    (t) => t === draggedItemType
  ) : targetType === draggedItemType;
}
function createHover(manager) {
  return function hover(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    const targetIds = targetIdsArg.slice(0);
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    const draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    checkInvariants(targetIds, monitor, registry);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i = 0; i < targetIds.length; i++) {
    const targetId = targetIds[i];
    invariant(targetIds.lastIndexOf(targetId) === i, "Expected targetIds to be unique in the passed array.");
    const target = registry.getTarget(targetId);
    invariant(target, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i = targetIds.length - 1; i >= 0; i--) {
    const targetId = targetIds[i];
    const targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    const target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}
function createPublishDragSource(manager) {
  return function publishDragSource() {
    const monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
    return;
  };
}
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}
class DragDropManagerImpl {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const manager = this;
    const { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        const action = actionCreator.apply(manager, args);
        if (typeof action !== "undefined") {
          dispatch(action);
        }
      };
    }
    const actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      const action = actions[key];
      boundActions[key] = bindActionCreator(action);
      return boundActions;
    }, {});
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  constructor(store, monitor) {
    this.isSetUp = false;
    this.handleRefCountChange = () => {
      const shouldSetUp = this.store.getState().refCount > 0;
      if (this.backend) {
        if (shouldSetUp && !this.isSetUp) {
          this.backend.setup();
          this.isSetUp = true;
        } else if (!shouldSetUp && this.isSetUp) {
          this.backend.teardown();
          this.isSetUp = false;
        }
      }
    };
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
}
function add$1(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getSourceClientOffset(state) {
  const { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add$1(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  const { clientOffset, initialClientOffset } = state;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}
const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  const commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}
class DragDropMonitorImpl {
  subscribeToStateChange(listener, options = {}) {
    const { handlerIds } = options;
    invariant(typeof listener === "function", "listener must be a function.");
    invariant(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId;
    const handleChange = () => {
      const state = this.store.getState();
      const currentStateId = state.stateId;
      try {
        const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener === "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset;
    const handleChange = () => {
      const nextState = this.store.getState().dragOffset;
      if (nextState === previousState) {
        return;
      }
      previousState = nextState;
      listener();
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (this.isDragging()) {
      return false;
    }
    return source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId) {
      return false;
    }
    const target = this.registry.getTarget(targetId);
    invariant(target, `Expected to find a valid target. targetId=${targetId}`);
    if (!this.isDragging() || this.didDrop()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId, true);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (!this.isDragging() || !this.isSourcePublic()) {
      return false;
    }
    const sourceType = this.registry.getSourceType(sourceId);
    const draggedItemType = this.getItemType();
    if (sourceType !== draggedItemType) {
      return false;
    }
    return source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: false
  }) {
    if (!targetId) {
      return false;
    }
    const { shallow } = options;
    if (!this.isDragging()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType)) {
      return false;
    }
    const targetIds = this.getTargetIds();
    if (!targetIds.length) {
      return false;
    }
    const index = targetIds.indexOf(targetId);
    if (shallow) {
      return index === targetIds.length - 1;
    } else {
      return index > -1;
    }
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
}
const scope = typeof global !== "undefined" ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer = new BrowserMutationObserver(callback);
  const node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
const makeRequestCall = typeof BrowserMutationObserver === "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  makeRequestCallFromMutationObserver
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  makeRequestCallFromTimer
);
class AsapQueue {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    const { queue: q, requestFlush } = this;
    if (!q.length) {
      requestFlush();
      this.flushing = true;
    }
    q[q.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const { queue: q } = this;
      while (this.index < q.length) {
        const currentIndex = this.index;
        this.index++;
        q[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q.length - this.index; scan < newLength; scan++) {
            q[scan] = q[scan + this.index];
          }
          q.length -= this.index;
          this.index = 0;
        }
      }
      q.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
}
class RawTask {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
}
class TaskFactory {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t) => tasks[tasks.length] = t
    );
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
}
const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}
const ADD_SOURCE = "dnd-core/ADD_SOURCE";
const ADD_TARGET = "dnd-core/ADD_TARGET";
const REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
const REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}
function validateSourceContract(source) {
  invariant(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  invariant(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  invariant(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target) {
  invariant(typeof target.canDrop === "function", "Expected canDrop to be a function.");
  invariant(typeof target.hover === "function", "Expected hover to be a function.");
  invariant(typeof target.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t) => validateType(t, false)
    );
    return;
  }
  invariant(typeof type === "string" || typeof type === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));
let nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}
function getNextHandlerId(role) {
  const id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map, searchValue) {
  const entries = map.entries();
  let isDone = false;
  do {
    const { done, value: [, value] } = entries.next();
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
class HandlerRegistryImpl {
  addSource(type, source) {
    validateType(type);
    validateSourceContract(source);
    const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    this.store.dispatch(addSource(sourceId));
    return sourceId;
  }
  addTarget(type, target) {
    validateType(type, true);
    validateTargetContract(target);
    const targetId = this.addHandler(HandlerRole.TARGET, type, target);
    this.store.dispatch(addTarget(targetId));
    return targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = false) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    const isPinned = includePinned && sourceId === this.pinnedSourceId;
    const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
    return source;
  }
  getTarget(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    return this.types.get(sourceId);
  }
  getTargetType(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.types.get(targetId);
  }
  isSourceId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source.");
    this.store.dispatch(removeSource(sourceId));
    asap(() => {
      this.dragSources.delete(sourceId);
      this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target.");
    this.store.dispatch(removeTarget(targetId));
    this.dropTargets.delete(targetId);
    this.types.delete(targetId);
  }
  pinSource(sourceId) {
    const source = this.getSource(sourceId);
    invariant(source, "Expected an existing source.");
    this.pinnedSourceId = sourceId;
    this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time.");
    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    const id = getNextHandlerId(role);
    this.types.set(id, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(id, handler);
    } else if (role === HandlerRole.TARGET) {
      this.dropTargets.set(id, handler);
    }
    return id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map();
    this.dragSources = /* @__PURE__ */ new Map();
    this.dropTargets = /* @__PURE__ */ new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }
}
const strictEquality = (a, b) => a === b;
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a, b, isEqual = strictEquality) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}
function reduce$5(_state = NONE, action) {
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  const { targetIds = [], prevTargetIds = [] } = action.payload;
  const result = xor(targetIds, prevTargetIds);
  const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  const innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
const initialState$1 = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce$4(state = initialState$1, action) {
  const { payload } = action;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return _objectSpread$3({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState$1;
    default:
      return state;
  }
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
const initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function reduce$3(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread$2({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread$2({}, state, {
        isSourcePublic: true
      });
    case HOVER:
      return _objectSpread$2({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return _objectSpread$2({}, state, {
        targetIds: without$1(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread$2({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread$2({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}
function reduce$2(state = 0, action) {
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}
function reduce$1(state = 0) {
  return state + 1;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function reduce(state = {}, action) {
  return {
    dirtyHandlerIds: reduce$5(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread$1({}, action.payload, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce$4(state.dragOffset, action),
    refCount: reduce$2(state.refCount, action),
    dragOperation: reduce$3(state.dragOperation, action),
    stateId: reduce$1(state.stateId)
  };
}
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = false) {
  const store = makeStoreInstance(debugMode);
  const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  const manager = new DragDropManagerImpl(store, monitor);
  const backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  const reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
let refCount = 0;
const INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = /* @__PURE__ */ reactExports.memo(function DndProvider2(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  const [manager, isGlobalInstance] = getDndContextValue(props);
  reactExports.useEffect(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;
      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
    return;
  }, []);
  return /* @__PURE__ */ jsx(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props) {
    const manager2 = {
      dragDropManager: props.manager
    };
    return [
      manager2,
      false
    ];
  }
  const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  const isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  const ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global !== "undefined" ? global : window;
}
var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i])) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
function useCollector(monitor, collect, onUpdate) {
  const [collected, setCollected] = reactExports.useState(
    () => collect(monitor)
  );
  const updateCollected = reactExports.useCallback(() => {
    const nextValue = collect(monitor);
    if (!fastDeepEqual(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  useIsomorphicLayoutEffect(updateCollected);
  return [
    collected,
    updateCollected
  ];
}
function useMonitorOutput(monitor, collect, onCollect) {
  const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    const handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [
        handlerId
      ]
    });
  }, [
    monitor,
    updateCollected
  ]);
  return collected;
}
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}
function useOptionalFactory(arg, deps) {
  const memoDeps = [
    ...deps || []
  ];
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return reactExports.useMemo(() => {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}
function useConnectDragSource(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
let isCallingCanDrop = false;
class DropTargetMonitorImpl {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId) {
      return false;
    }
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      isCallingCanDrop = true;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = false;
    }
  }
  isOver(options) {
    if (!this.targetId) {
      return false;
    }
    return this.internalMonitor.isOverTarget(this.targetId, options);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
function registerTarget(type, target, manager) {
  const registry = manager.getRegistry();
  const targetId = registry.addTarget(type, target);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    compareResult = void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  const displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!reactExports.isValidElement(elementOrNode)) {
      const node = elementOrNode;
      hook(node, options);
      return node;
    }
    const element = elementOrNode;
    throwIfCompositeComponentElement(element);
    const ref = options ? (node) => hook(node, options) : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  const wrappedHooks = {};
  Object.keys(hooks).forEach((key) => {
    const hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      const wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  });
  return wrappedHooks;
}
function setRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  const previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return reactExports.cloneElement(element, {
      ref: newRef
    });
  } else {
    return reactExports.cloneElement(element, {
      ref: (node) => {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
class SourceConnector {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview(forceDidChange = false) {
    const dragPreview = this.dragPreview;
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = void 0;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = void 0;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if (isRef(node)) {
          this.dragSourceRef = node;
        } else {
          this.dragSourceNode = node;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if (isRef(node)) {
          this.dragPreviewRef = node;
        } else {
          this.dragPreviewNode = node;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
}
class TargetConnector {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    if (didChange) {
      this.disconnectDropTarget();
    }
    const dropTarget = this.dropTarget;
    if (!this.handlerId) {
      return;
    }
    if (!dropTarget) {
      this.lastConnectedDropTarget = dropTarget;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDropTarget = dropTarget;
      this.lastConnectedDropTargetOptions = this.dropTargetOptions;
      this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
    }
  }
  receiveHandlerId(newHandlerId) {
    if (newHandlerId === this.handlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    if (this.unsubscribeDropTarget) {
      this.unsubscribeDropTarget();
      this.unsubscribeDropTarget = void 0;
    }
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node, options) => {
        this.clearDropTarget();
        this.dropTargetOptions = options;
        if (isRef(node)) {
          this.dropTargetRef = node;
        } else {
          this.dropTargetNode = node;
        }
        this.reconnect();
      }
    });
    this.handlerId = null;
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
}
function useDragDropManager() {
  const { dragDropManager } = reactExports.useContext(DndContext);
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = useDragDropManager();
  const connector = reactExports.useMemo(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [
    connector,
    dragSourceOptions
  ]);
  useIsomorphicLayoutEffect(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [
    connector,
    dragPreviewOptions
  ]);
  return connector;
}
function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return reactExports.useMemo(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}
class DragSourceImpl {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === "object") {
      result = spec.item;
    } else if (typeof spec.item === "function") {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === "boolean") {
      return spec.canDrag;
    } else if (typeof spec.canDrag === "function") {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target) {
    const spec = this.spec;
    const monitor = this.monitor;
    const { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const { end } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
}
function useDragSource(spec, monitor, connector) {
  const handler = reactExports.useMemo(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  reactExports.useEffect(() => {
    handler.spec = spec;
  }, [
    spec
  ]);
  return handler;
}
function useDragType(spec) {
  return reactExports.useMemo(() => {
    const result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [
    spec
  ]);
}
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = registerSource(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}
function useDrag(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}
function useDragLayer(collect) {
  const dragDropManager = useDragDropManager();
  const monitor = dragDropManager.getMonitor();
  const [collected, updateCollected] = useCollector(monitor, collect);
  reactExports.useEffect(
    () => monitor.subscribeToOffsetChange(updateCollected)
  );
  reactExports.useEffect(
    () => monitor.subscribeToStateChange(updateCollected)
  );
  return collected;
}
function useConnectDropTarget(connector) {
  return reactExports.useMemo(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}
function useDropTargetConnector(options) {
  const manager = useDragDropManager();
  const connector = reactExports.useMemo(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [
    options
  ]);
  return connector;
}
function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return reactExports.useMemo(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}
function useAccept(spec) {
  const { accept } = spec;
  return reactExports.useMemo(() => {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [
      accept
    ];
  }, [
    accept
  ]);
}
class DropTargetImpl {
  canDrop() {
    const spec = this.spec;
    const monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
  }
  hover() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.hover) {
      spec.hover(monitor.getItem(), monitor);
    }
  }
  drop() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.drop) {
      return spec.drop(monitor.getItem(), monitor);
    }
    return;
  }
  constructor(spec, monitor) {
    this.spec = spec;
    this.monitor = monitor;
  }
}
function useDropTarget(spec, monitor) {
  const dropTarget = reactExports.useMemo(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  reactExports.useEffect(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]);
  return dropTarget;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a) => a.toString()
    ).join("|")
  ]);
}
function useDrop(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}
function memoize(fn) {
  let result = null;
  const memoized = () => {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
function without(items, item) {
  return items.filter(
    (i) => i !== item
  );
}
function union(itemsA, itemsB) {
  const set = /* @__PURE__ */ new Set();
  const insertItem = (item) => set.add(item);
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  set.forEach(
    (key) => result.push(key)
  );
  return result;
}
class EnterLeaveCounter {
  enter(enteringNode) {
    const previousLength = this.entered.length;
    const isNodeEntered = (node) => this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
    this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]);
    return previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    const previousLength = this.entered.length;
    this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
    return previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
}
class NativeDragSource {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: true,
        enumerable: true,
        get() {
          console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
          return null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      const newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        const propertyFn = this.config.exposeProperties[property];
        if (propertyFn != null) {
          newProperties[property] = {
            value: propertyFn(dataTransfer, this.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        }
      });
      Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return true;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
}
const FILE = "__NATIVE_FILE__";
const URL$1 = "__NATIVE_URL__";
const TEXT = "__NATIVE_TEXT__";
const HTML = "__NATIVE_HTML__";
var NativeTypes = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  FILE,
  HTML,
  TEXT,
  URL: URL$1
});
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  const result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result != null ? result : defaultValue;
}
const nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL$1]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n"),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function createNativeDragSource(type, dataTransfer) {
  const config = nativeTypesConfig[type];
  if (!config) {
    throw new Error(`native type ${type} has no configuration`);
  }
  const result = new NativeDragSource(config);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    const typeConfig = nativeTypesConfig[nativeItemType];
    if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
      return false;
    }
    return typeConfig.matchesTypes.some(
      (t) => dataTransferTypes.indexOf(t) > -1
    );
  })[0] || null;
}
const isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
);
const isSafari = memoize(
  () => Boolean(window.safari)
);
class MonotonicInterpolant {
  interpolate(x) {
    const { xs, ys, c1s, c2s, c3s } = this;
    let i = xs.length - 1;
    if (x === xs[i]) {
      return ys[i];
    }
    let low = 0;
    let high = c3s.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high));
      const xHere = xs[mid];
      if (xHere < x) {
        low = mid + 1;
      } else if (xHere > x) {
        high = mid - 1;
      } else {
        return ys[mid];
      }
    }
    i = Math.max(0, high);
    const diff = x - xs[i];
    const diffSq = diff * diff;
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
  }
  constructor(xs, ys) {
    const { length } = xs;
    const indexes = [];
    for (let i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(
      (a, b) => xs[a] < xs[b] ? -1 : 1
    );
    const dxs = [];
    const ms = [];
    let dx;
    let dy;
    for (let i1 = 0; i1 < length - 1; i1++) {
      dx = xs[i1 + 1] - xs[i1];
      dy = ys[i1 + 1] - ys[i1];
      dxs.push(dx);
      ms.push(dy / dx);
    }
    const c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      const m2 = ms[i2];
      const mNext = ms[i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i2];
        const dxNext = dxs[i2 + 1];
        const common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    const c2s = [];
    const c3s = [];
    let m;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m = ms[i3];
      const c1 = c1s[i3];
      const invDx = 1 / dxs[i3];
      const common = c1 + c1s[i3 + 1] - m - m;
      c2s.push((m - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
}
const ELEMENT_NODE$1 = 1;
function getNodeClientOffset$1(node) {
  const el = node.nodeType === ELEMENT_NODE$1 ? node : node.parentElement;
  if (!el) {
    return null;
  }
  const { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset$1(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var ref;
  return node.nodeName === "IMG" && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  const isImage = isImageNode(dragPreview);
  const dragPreviewNode = isImage ? sourceNode : dragPreview;
  const dragPreviewNodeOffsetFromClient = getNodeClientOffset$1(dragPreviewNode);
  const offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  const { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode;
  const { anchorX, anchorY } = anchorPoint;
  const { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
  const calculateYOffset = () => {
    const interpolantY = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    let y = interpolantY.interpolate(anchorY);
    if (isSafari() && isImage) {
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  const calculateXOffset = () => {
    const interpolantX = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the left
      offsetFromDragPreview.x,
      // Align at the center
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      // Dock to the right
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  const { offsetX, offsetY } = offsetPoint;
  const isManualOffsetX = offsetX === 0 || offsetX;
  const isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}
let OptionsReader$1 = class OptionsReader {
  get window() {
    if (this.globalContext) {
      return this.globalContext;
    } else if (typeof window !== "undefined") {
      return window;
    }
    return void 0;
  }
  get document() {
    var ref;
    if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
      return this.globalContext.document;
    } else if (this.window) {
      return this.window.document;
    } else {
      return void 0;
    }
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null;
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
};
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
class HTML5BackendImpl {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    if (root.__isReactDndBackendSetUp) {
      throw new Error("Cannot have two HTML5 backends at the same time.");
    }
    root.__isReactDndBackendSetUp = true;
    this.addEventListeners(root);
  }
  teardown() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    root.__isReactDndBackendSetUp = false;
    this.removeEventListeners(this.rootElement);
    this.clearCurrentDragSourceNode();
    if (this.asyncEndDragFrameId) {
      var ref;
      (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node, options) {
    this.sourceNodes.set(sourceId, node);
    this.sourceNodeOptions.set(sourceId, options);
    const handleDragStart = (e) => this.handleDragStart(e, sourceId);
    const handleSelectStart = (e) => this.handleSelectStart(e);
    node.setAttribute("draggable", "true");
    node.addEventListener("dragstart", handleDragStart);
    node.addEventListener("selectstart", handleSelectStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.sourceNodeOptions.delete(sourceId);
      node.removeEventListener("dragstart", handleDragStart);
      node.removeEventListener("selectstart", handleSelectStart);
      node.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node) {
    const handleDragEnter = (e) => this.handleDragEnter(e, targetId);
    const handleDragOver = (e) => this.handleDragOver(e, targetId);
    const handleDrop = (e) => this.handleDrop(e, targetId);
    node.addEventListener("dragenter", handleDragEnter);
    node.addEventListener("dragover", handleDragOver);
    node.addEventListener("drop", handleDrop);
    return () => {
      node.removeEventListener("dragenter", handleDragEnter);
      node.removeEventListener("dragover", handleDragOver);
      node.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target) {
    if (!target.addEventListener) {
      return;
    }
    target.addEventListener("dragstart", this.handleTopDragStart);
    target.addEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.addEventListener("dragend", this.handleTopDragEndCapture, true);
    target.addEventListener("dragenter", this.handleTopDragEnter);
    target.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.addEventListener("dragover", this.handleTopDragOver);
    target.addEventListener("dragover", this.handleTopDragOverCapture, true);
    target.addEventListener("drop", this.handleTopDrop);
    target.addEventListener("drop", this.handleTopDropCapture, true);
  }
  removeEventListeners(target) {
    if (!target.removeEventListener) {
      return;
    }
    target.removeEventListener("dragstart", this.handleTopDragStart);
    target.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
    target.removeEventListener("dragend", this.handleTopDragEndCapture, true);
    target.removeEventListener("dragenter", this.handleTopDragEnter);
    target.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target.removeEventListener("dragover", this.handleTopDragOver);
    target.removeEventListener("dragover", this.handleTopDragOverCapture, true);
    target.removeEventListener("drop", this.handleTopDrop);
    target.removeEventListener("drop", this.handleTopDropCapture, true);
  }
  getCurrentSourceNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      return "copy";
    }
    return this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    const itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes).some(
      (key) => NativeTypes[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode();
    this.currentNativeSource = createNativeDragSource(type, dataTransfer);
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node;
    const MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      if (this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
        this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
      }
      this.mouseMoveTimeoutTimer = null;
      return true;
    }
    return false;
  }
  handleDragStart(e, sourceId) {
    if (e.defaultPrevented) {
      return;
    }
    if (!this.dragStartSourceIds) {
      this.dragStartSourceIds = [];
    }
    this.dragStartSourceIds.unshift(sourceId);
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    if (this.dragOverTargetIds === null) {
      this.dragOverTargetIds = [];
    }
    this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map();
    this.sourceNodes = /* @__PURE__ */ new Map();
    this.sourceNodeOptions = /* @__PURE__ */ new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.lastClientOffset = null;
    this.hoverRafId = null;
    this.getSourceClientOffset = (sourceId) => {
      const source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset$1(source) || null;
    };
    this.endDragNativeItem = () => {
      if (!this.isDraggingNativeItem()) {
        return;
      }
      this.actions.endDrag();
      if (this.currentNativeHandle) {
        this.registry.removeSource(this.currentNativeHandle);
      }
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    };
    this.isNodeInDocument = (node) => {
      return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
    };
    this.endDragIfSourceWasRemovedFromDOM = () => {
      const node = this.currentDragSourceNode;
      if (node == null || this.isNodeInDocument(node)) {
        return;
      }
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.scheduleHover = (dragOverTargetIds) => {
      if (this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        this.hoverRafId = requestAnimationFrame(() => {
          if (this.monitor.isDragging()) {
            this.actions.hover(dragOverTargetIds || [], {
              clientOffset: this.lastClientOffset
            });
          }
          this.hoverRafId = null;
        });
      }
    };
    this.cancelHover = () => {
      if (this.hoverRafId !== null && typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this.hoverRafId);
        this.hoverRafId = null;
      }
    };
    this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = (e) => {
      if (e.defaultPrevented) {
        return;
      }
      const { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      const clientOffset = getEventClientOffset$1(e);
      if (this.monitor.isDragging()) {
        this.actions.endDrag();
        this.cancelHover();
      }
      this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === "function") {
          const sourceId = this.monitor.getSourceId();
          const sourceNode = this.sourceNodes.get(sourceId);
          const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            const { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions();
            const anchorPoint = {
              anchorX,
              anchorY
            };
            const offsetPoint = {
              offsetX,
              offsetY
            };
            const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData("application/json", {});
        } catch (err) {
        }
        this.setCurrentDragSourceNode(e.target);
        const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        if (!captureDraggingState) {
          setTimeout(
            () => this.actions.publishDragSource(),
            0
          );
        } else {
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) {
        return;
      } else {
        e.preventDefault();
      }
    };
    this.handleTopDragEndCapture = () => {
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleTopDragEnterCapture = (e) => {
      this.dragEnterTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
      const isFirstEnter = this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }
      const { dataTransfer } = e;
      const nativeType = matchNativeItemType(dataTransfer);
      if (nativeType) {
        this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = (e) => {
      const { dragEnterTargetIds } = this;
      this.dragEnterTargetIds = [];
      if (!this.monitor.isDragging()) {
        return;
      }
      this.altKeyPressed = e.altKey;
      if (dragEnterTargetIds.length > 0) {
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset$1(e)
        });
      }
      const canDrop = dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = (e) => {
      this.dragOverTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      }
    };
    this.handleTopDragOver = (e) => {
      const { dragOverTargetIds } = this;
      this.dragOverTargetIds = [];
      if (!this.monitor.isDragging()) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
        return;
      }
      this.altKeyPressed = e.altKey;
      this.lastClientOffset = getEventClientOffset$1(e);
      this.scheduleHover(dragOverTargetIds);
      const canDrop = (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      } else if (this.isDraggingNativeItem()) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    };
    this.handleTopDragLeaveCapture = (e) => {
      if (this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      const isLastLeave = this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (this.isDraggingNativeItem()) {
        setTimeout(
          () => this.endDragNativeItem(),
          0
        );
      }
      this.cancelHover();
    };
    this.handleTopDropCapture = (e) => {
      this.dropTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        e.preventDefault();
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
      } else if (matchNativeItemType(e.dataTransfer)) {
        e.preventDefault();
      }
      this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = (e) => {
      const { dropTargetIds } = this;
      this.dropTargetIds = [];
      this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset$1(e)
      });
      this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      });
      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else if (this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleSelectStart = (e) => {
      const target = e.target;
      if (typeof target.dragDrop !== "function") {
        return;
      }
      if (target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      e.preventDefault();
      target.dragDrop();
    };
    this.options = new OptionsReader$1(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
}
let emptyImage;
function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  }
  return emptyImage;
}
const HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};
function Piece({ isPremovedPiece = false, piece, square, squares }) {
  const { animationDuration, arePiecesDraggable, boardWidth, boardOrientation, chessPieces, currentPosition, deletePieceFromSquare, dropOffBoardAction, id, isDraggablePiece, isWaitingForAnimation, onPieceClick, onPieceDragBegin, onPieceDragEnd, onPieceDropOffBoard, onPromotionCheck, positionDifferences } = useChessboard();
  const [pieceStyle, setPieceStyle] = reactExports.useState({
    opacity: 1,
    zIndex: 5,
    touchAction: "none",
    cursor: arePiecesDraggable && isDraggablePiece({ piece, sourceSquare: square }) ? "-webkit-grab" : "default"
  });
  const [{ canDrag, isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "piece",
    item: () => {
      onPieceDragBegin(piece, square);
      return { piece, square, id };
    },
    end: (item, monitor) => {
      onPieceDragEnd(piece, square);
      const wasDropOutsideTheBoard = !monitor.didDrop();
      if (wasDropOutsideTheBoard) {
        if (dropOffBoardAction === "trash") {
          deletePieceFromSquare(square);
        }
        onPieceDropOffBoard === null || onPieceDropOffBoard === void 0 ? void 0 : onPieceDropOffBoard(square, piece);
      }
    },
    collect: (monitor) => ({
      canDrag: isDraggablePiece({ piece, sourceSquare: square }),
      isDragging: !!monitor.isDragging()
    })
  }), [piece, square, currentPosition, id]);
  dragPreview(getEmptyImage(), { captureDraggingState: true });
  reactExports.useEffect(() => {
    setPieceStyle((oldPieceStyle) => Object.assign(Object.assign({}, oldPieceStyle), { opacity: isDragging ? 0 : 1 }));
  }, [isDragging]);
  reactExports.useEffect(() => {
    var _a;
    const removedPiece = (_a = positionDifferences.removed) === null || _a === void 0 ? void 0 : _a[square];
    if (!positionDifferences.added || !removedPiece)
      return;
    const newSquare = Object.entries(positionDifferences.added).find(([s, p]) => p === removedPiece || onPromotionCheck(square, s, removedPiece));
    if (isWaitingForAnimation && removedPiece && newSquare && !isPremovedPiece) {
      const sourceSq = square;
      const targetSq = newSquare[0];
      if (sourceSq && targetSq) {
        const squareWidth = boardWidth / 8;
        setPieceStyle((oldPieceStyle) => Object.assign(Object.assign({}, oldPieceStyle), { transform: `translate(${(boardOrientation === "black" ? -1 : 1) * (targetSq.charCodeAt(0) - sourceSq.charCodeAt(0)) * squareWidth}px, ${(boardOrientation === "black" ? -1 : 1) * (Number(sourceSq[1]) - Number(targetSq[1])) * squareWidth}px)`, transition: `transform ${animationDuration}ms`, zIndex: 6 }));
      }
    }
  }, [positionDifferences]);
  reactExports.useEffect(() => {
    const { sourceSq } = getSingleSquareCoordinates();
    if (sourceSq) {
      setPieceStyle((oldPieceStyle) => Object.assign(Object.assign({}, oldPieceStyle), { transform: `translate(${0}px, ${0}px)`, transition: `transform ${0}ms` }));
    }
  }, [currentPosition]);
  reactExports.useEffect(() => {
    setPieceStyle((oldPieceStyle) => Object.assign(Object.assign({}, oldPieceStyle), { cursor: arePiecesDraggable && isDraggablePiece({ piece, sourceSquare: square }) ? "-webkit-grab" : "default" }));
  }, [square, currentPosition, arePiecesDraggable]);
  function getSingleSquareCoordinates() {
    return { sourceSq: squares[square] };
  }
  return jsx("div", Object.assign({ ref: arePiecesDraggable && canDrag ? drag : null, onClick: () => onPieceClick(piece, square), "data-piece": piece, style: pieceStyle }, { children: typeof chessPieces[piece] === "function" ? chessPieces[piece]({
    squareWidth: boardWidth / 8,
    isDragging,
    square
  }) : jsx("svg", Object.assign({ viewBox: "1 1 43 43", width: boardWidth / 8, height: boardWidth / 8, style: { display: "block" } }, { children: jsx("g", { children: chessPieces[piece] }) })) }));
}
function Square({ square, squareColor, setSquares, squareHasPremove, children }) {
  const squareRef = reactExports.useRef(null);
  const { autoPromoteToQueen, boardWidth, boardOrientation, clearArrows, currentPosition, currentRightClickDown, customBoardStyle, customDarkSquareStyle, customDropSquareStyle, customLightSquareStyle, customPremoveDarkSquareStyle, customPremoveLightSquareStyle, customSquare: CustomSquare, customSquareStyles, drawNewArrow, handleSetPosition, handleSparePieceDrop, isWaitingForAnimation, lastPieceColour, lastSquareDraggedOver, onArrowDrawEnd, onDragOverSquare, onMouseOutSquare, onMouseOverSquare, onPieceDrop, onPromotionCheck, onRightClickDown, onRightClickUp, onSquareClick, setLastSquareDraggedOver, setPromoteFromSquare, setPromoteToSquare, setShowPromoteDialog } = useChessboard();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "piece",
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }), [
    square,
    currentPosition,
    onPieceDrop,
    isWaitingForAnimation,
    lastPieceColour
  ]);
  function handleDrop(item) {
    if (item.isSpare) {
      handleSparePieceDrop(item.piece, square);
      return;
    }
    if (onPromotionCheck(item.square, square, item.piece)) {
      if (autoPromoteToQueen) {
        handleSetPosition(item.square, square, item.piece[0] === "w" ? "wQ" : "bQ");
      } else {
        setPromoteFromSquare(item.square);
        setPromoteToSquare(square);
        setShowPromoteDialog(true);
      }
    } else {
      handleSetPosition(item.square, square, item.piece, true);
    }
  }
  reactExports.useEffect(() => {
    if (squareRef.current) {
      const { x, y } = squareRef.current.getBoundingClientRect();
      setSquares((oldSquares) => Object.assign(Object.assign({}, oldSquares), { [square]: { x, y } }));
    }
  }, [boardWidth, boardOrientation]);
  const defaultSquareStyle = Object.assign(Object.assign(Object.assign(Object.assign({}, borderRadius(square, boardOrientation, customBoardStyle)), squareColor === "black" ? customDarkSquareStyle : customLightSquareStyle), squareHasPremove && (squareColor === "black" ? customPremoveDarkSquareStyle : customPremoveLightSquareStyle)), isOver && customDropSquareStyle);
  return jsx("div", Object.assign({ ref: drop, style: defaultSquareStyle, "data-square-color": squareColor, "data-square": square, onTouchMove: (e) => {
    var _a;
    const touchLocation = e.touches[0];
    const touchElement = document.elementsFromPoint(touchLocation.clientX, touchLocation.clientY);
    const draggedOverSquare = (_a = touchElement === null || touchElement === void 0 ? void 0 : touchElement.find((el) => el.getAttribute("data-square"))) === null || _a === void 0 ? void 0 : _a.getAttribute("data-square");
    if (draggedOverSquare && draggedOverSquare !== lastSquareDraggedOver) {
      setLastSquareDraggedOver(draggedOverSquare);
      onDragOverSquare(draggedOverSquare);
    }
  }, onMouseOver: (e) => {
    if (e.buttons === 2 && currentRightClickDown) {
      drawNewArrow(currentRightClickDown, square);
    }
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    onMouseOverSquare(square);
  }, onMouseOut: (e) => {
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget))
      return;
    onMouseOutSquare(square);
  }, onMouseDown: (e) => {
    if (e.button === 2)
      onRightClickDown(square);
  }, onMouseUp: (e) => {
    if (e.button === 2) {
      if (currentRightClickDown)
        onArrowDrawEnd(currentRightClickDown, square);
      onRightClickUp(square);
    }
  }, onDragEnter: () => onDragOverSquare(square), onClick: () => {
    const piece = currentPosition[square];
    onSquareClick(square, piece);
    clearArrows();
  }, onContextMenu: (e) => {
    e.preventDefault();
  } }, { children: typeof CustomSquare === "string" ? jsx(
    CustomSquare,
    Object.assign({
      // Type is too complex to properly evaluate, so ignore this line.
      // @ts-ignore
      ref: squareRef,
      style: Object.assign(Object.assign(Object.assign({}, size(boardWidth)), center), !squareHasPremove && (customSquareStyles === null || customSquareStyles === void 0 ? void 0 : customSquareStyles[square]))
    }, { children })
  ) : jsx(CustomSquare, Object.assign({ ref: squareRef, square, squareColor, style: Object.assign(Object.assign(Object.assign({}, size(boardWidth)), center), !squareHasPremove && (customSquareStyles === null || customSquareStyles === void 0 ? void 0 : customSquareStyles[square])) }, { children })) }));
}
const center = {
  display: "flex",
  justifyContent: "center"
};
const size = (width) => ({
  width: width / 8,
  height: width / 8
});
const borderRadius = (square, boardOrientation, customBoardStyle) => {
  if (!(customBoardStyle === null || customBoardStyle === void 0 ? void 0 : customBoardStyle.borderRadius))
    return {};
  if (square === "a1") {
    return boardOrientation === "white" ? { borderBottomLeftRadius: customBoardStyle.borderRadius } : { borderTopRightRadius: customBoardStyle.borderRadius };
  }
  if (square === "a8") {
    return boardOrientation === "white" ? { borderTopLeftRadius: customBoardStyle.borderRadius } : { borderBottomRightRadius: customBoardStyle.borderRadius };
  }
  if (square === "h1") {
    return boardOrientation === "white" ? { borderBottomRightRadius: customBoardStyle.borderRadius } : { borderTopLeftRadius: customBoardStyle.borderRadius };
  }
  if (square === "h8") {
    return boardOrientation === "white" ? { borderTopRightRadius: customBoardStyle.borderRadius } : { borderBottomLeftRadius: customBoardStyle.borderRadius };
  }
  return {};
};
function Squares() {
  const [squares, setSquares] = reactExports.useState({});
  const { arePremovesAllowed, boardOrientation, boardWidth, currentPosition, id, premoves, showBoardNotation } = useChessboard();
  const premovesHistory = reactExports.useMemo(() => {
    const result = [];
    if (!arePremovesAllowed)
      return [];
    premoves.forEach((premove, index) => {
      const { sourceSq, targetSq, piece } = premove;
      const relatedPremovedPiece = result.find((p) => {
        var _a;
        return p.piece === piece && ((_a = p.premovesRoute.at(-1)) === null || _a === void 0 ? void 0 : _a.targetSq) === sourceSq;
      });
      if (relatedPremovedPiece) {
        relatedPremovedPiece.premovesRoute.push({ sourceSq, targetSq, index });
      } else {
        result.push({
          piece,
          // index is useful for scenarios where two or more pieces are targeting the same square
          premovesRoute: [{ sourceSq, targetSq, index }]
        });
      }
    });
    return result;
  }, [premoves]);
  return jsx("div", Object.assign({ "data-boardid": id }, { children: [...Array(8)].map((_, r) => {
    return jsx("div", Object.assign({ style: {
      display: "flex",
      flexWrap: "nowrap",
      width: boardWidth
    } }, { children: [...Array(8)].map((_2, c) => {
      const square = boardOrientation === "black" ? COLUMNS[7 - c] + (r + 1) : COLUMNS[c] + (8 - r);
      const squareColor = c % 2 === r % 2 ? "white" : "black";
      const squareHasPremove = premoves.find((p) => p.sourceSq === square || p.targetSq === square);
      const squareHasPremoveTarget = premovesHistory.filter(({ premovesRoute }) => {
        var _a;
        return ((_a = premovesRoute.at(-1)) === null || _a === void 0 ? void 0 : _a.targetSq) === square;
      }).sort((a, b) => {
        var _a, _b;
        return ((_a = b.premovesRoute.at(-1)) === null || _a === void 0 ? void 0 : _a.index) - ((_b = a.premovesRoute.at(-1)) === null || _b === void 0 ? void 0 : _b.index);
      }).at(0);
      return jsxs(Square, Object.assign({ square, squareColor, setSquares, squareHasPremove: !!squareHasPremove }, { children: [!squareHasPremove && currentPosition[square] && jsx(Piece, { piece: currentPosition[square], square, squares }), squareHasPremoveTarget && jsx(Piece, { isPremovedPiece: true, piece: squareHasPremoveTarget.piece, square, squares }), showBoardNotation && jsx(Notation, { row: r, col: c })] }), `${c}${r}`);
    }) }), r.toString());
  }) }));
}
const Arrows = () => {
  const { arrows, newArrow, boardOrientation, boardWidth, customArrowColor: primaryArrowCollor } = useChessboard();
  const arrowsList = [...arrows, newArrow].filter(Boolean);
  return jsx("svg", Object.assign({ width: boardWidth, height: boardWidth, style: {
    position: "absolute",
    top: "0",
    left: "0",
    pointerEvents: "none",
    zIndex: "10"
  } }, { children: arrowsList.map((arrow, i) => {
    const [arrowStartField, arrowEndField, arrowColor] = arrow;
    if (arrowStartField === arrowEndField)
      return null;
    const from = getRelativeCoords(boardOrientation, boardWidth, arrowStartField);
    const to = getRelativeCoords(boardOrientation, boardWidth, arrowEndField);
    let ARROW_LENGTH_REDUCER = boardWidth / 32;
    const isArrowActive = i === arrows.length;
    if (arrows.some((restArrow) => restArrow[0] !== arrowStartField && restArrow[1] === arrowEndField) && !isArrowActive) {
      ARROW_LENGTH_REDUCER = boardWidth / 16;
    }
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const r = Math.hypot(dy, dx);
    const end = {
      x: from.x + dx * (r - ARROW_LENGTH_REDUCER) / r,
      y: from.y + dy * (r - ARROW_LENGTH_REDUCER) / r
    };
    return jsxs(reactExports.Fragment, { children: [jsx("marker", Object.assign({ id: `arrowhead-${i}`, markerWidth: "2", markerHeight: "2.5", refX: "1.25", refY: "1.25", orient: "auto" }, { children: jsx("polygon", { points: "0.3 0, 2 1.25, 0.3 2.5", fill: arrowColor !== null && arrowColor !== void 0 ? arrowColor : primaryArrowCollor }) })), jsx("line", { x1: from.x, y1: from.y, x2: end.x, y2: end.y, opacity: isArrowActive ? "0.5" : "0.65", stroke: arrowColor !== null && arrowColor !== void 0 ? arrowColor : primaryArrowCollor, strokeWidth: isArrowActive ? 0.9 * boardWidth / 40 : boardWidth / 40, markerEnd: `url(#arrowhead-${i})` })] }, `${arrowStartField}-${arrowEndField}${isArrowActive ? "-active" : ""}`);
  }) }));
};
function PromotionOption({ option }) {
  const [isHover, setIsHover] = reactExports.useState(false);
  const { boardWidth, chessPieces, customDarkSquareStyle, customLightSquareStyle, handleSetPosition, onPromotionPieceSelect, promoteFromSquare, promoteToSquare, promotionDialogVariant } = useChessboard();
  const backgroundColor = () => {
    switch (option[1]) {
      case "Q":
        return customDarkSquareStyle.backgroundColor;
      case "R":
        return customLightSquareStyle.backgroundColor;
      case "N":
        return promotionDialogVariant === "default" ? customLightSquareStyle.backgroundColor : customDarkSquareStyle.backgroundColor;
      case "B":
        return promotionDialogVariant === "default" ? customDarkSquareStyle.backgroundColor : customLightSquareStyle.backgroundColor;
    }
  };
  return jsx("div", Object.assign({ onClick: () => {
    if (onPromotionPieceSelect(option, promoteFromSquare !== null && promoteFromSquare !== void 0 ? promoteFromSquare : void 0, promoteToSquare !== null && promoteToSquare !== void 0 ? promoteToSquare : void 0))
      handleSetPosition(promoteFromSquare, promoteToSquare, option, true);
  }, onMouseOver: () => setIsHover(true), onMouseOut: () => setIsHover(false), "data-piece": option, style: {
    cursor: "pointer",
    backgroundColor: isHover ? backgroundColor() : `${backgroundColor()}aa`,
    borderRadius: "4px",
    transition: "all 0.1s ease-out"
  } }, { children: typeof chessPieces[option] === "function" ? jsx("div", Object.assign({ style: {
    transition: "all 0.1s ease-out",
    transform: isHover ? "scale(1)" : "scale(0.85)"
  } }, { children: chessPieces[option]({
    squareWidth: boardWidth / 8,
    isDragging: false
  }) })) : jsx("svg", Object.assign({ viewBox: "1 1 43 43", width: boardWidth / 8, height: boardWidth / 8, style: {
    transition: "all 0.1s ease-out",
    transform: isHover ? "scale(1)" : "scale(0.85)"
  } }, { children: jsx("g", { children: chessPieces[option] }) })) }));
}
function PromotionDialog() {
  const { boardOrientation, boardWidth, promotionDialogVariant, promoteToSquare } = useChessboard();
  const promotePieceColor = (promoteToSquare === null || promoteToSquare === void 0 ? void 0 : promoteToSquare[1]) === "1" ? "b" : "w";
  const promotionOptions = [
    `${promotePieceColor !== null && promotePieceColor !== void 0 ? promotePieceColor : "w"}Q`,
    `${promotePieceColor !== null && promotePieceColor !== void 0 ? promotePieceColor : "w"}R`,
    `${promotePieceColor !== null && promotePieceColor !== void 0 ? promotePieceColor : "w"}N`,
    `${promotePieceColor !== null && promotePieceColor !== void 0 ? promotePieceColor : "w"}B`
  ];
  const dialogStyles = {
    default: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      transform: `translate(${-boardWidth / 8}px, ${-boardWidth / 8}px)`
    },
    vertical: {
      transform: `translate(${-boardWidth / 16}px, ${-boardWidth / 16}px)`
    },
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: `translate(0px, ${3 * boardWidth / 8}px)`,
      width: "100%",
      height: `${boardWidth / 4}px`,
      top: 0,
      backgroundColor: "white",
      left: 0
    }
  };
  const dialogCoords = getRelativeCoords(boardOrientation, boardWidth, promoteToSquare || "a8");
  return jsx("div", Object.assign({ style: Object.assign({ position: "absolute", top: `${dialogCoords === null || dialogCoords === void 0 ? void 0 : dialogCoords.y}px`, left: `${dialogCoords === null || dialogCoords === void 0 ? void 0 : dialogCoords.x}px`, zIndex: 1e3 }, dialogStyles[promotionDialogVariant]), title: "Choose promotion piece" }, { children: promotionOptions.map((option) => jsx(PromotionOption, { option }, option)) }));
}
const errorImage = {
  whiteKing: jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", version: "1.1", style: {
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    imageRendering: "crisp-edges"
  }, viewBox: "0 0 4210 12970", x: "0px", y: "0px", fillRule: "evenodd", clipRule: "evenodd", width: "250", height: "250" }, { children: jsx("g", { children: jsx("path", { style: {
    fill: "black",
    fillRule: "nonzero"
  }, d: "M2105 0c169,0 286,160 249,315l200 0c-172,266 -231,479 -256,792 315,-24 530,-86 792,-255l0 897c-265,-171 -479,-231 -792,-256 18,234 75,495 185,682l339 0c233,0 369,269 225,456l545 0 -595 1916c130,94 158,275 59,402 465,0 416,568 51,568l-334 0 465 2867 332 0c250,0 381,306 199,485 162,63 273,220 273,399l0 633 168 0 0 475c-1403,0 -2807,0 -4210,0l0 -475 167 0 0 -633c0,-179 112,-336 274,-399 -181,-178 -52,-485 199,-485l332 0 465 -2867 -335 0c-353,0 -418,-568 51,-568 -98,-127 -70,-308 59,-402l-594 -1916c181,0 363,0 545,0 -144,-187 -9,-456 225,-456l339 0c110,-187 167,-448 185,-682 -315,25 -530,87 -793,256l0 -897c266,171 480,231 793,255 -25,-315 -87,-529 -256,-792l199 0c-36,-155 81,-315 250,-315zm-1994 10012l0 253 3988 0 0 -253c-1330,0 -2659,0 -3988,0zm484 -1060c-174,0 -316,142 -316,316l0 633 3652 0 0 -633c0,-174 -142,-316 -316,-316 -1007,0 -2013,0 -3020,0zm45 -457c-230,0 -225,345 0,345l2930 0c230,0 225,-345 0,-345 -977,0 -1953,0 -2930,0zm2020 -2978l-1111 0 -465 2867 2041 0 -465 -2867zm-1558 -456c-229,0 -224,345 0,345 669,0 1337,0 2005,0 230,0 225,-345 0,-345 -668,0 -1336,0 -2005,0zm1730 -457l-1454 0c-229,0 -224,345 0,345l1454 0c229,0 224,-345 0,-345zm-2064 -1862l544 1751c529,0 1057,0 1586,0l544 -1751c-892,0 -1783,0 -2674,0zm1085 -567l504 0c-126,-247 -163,-526 -177,-800 273,15 553,52 800,177l0 -504c-247,126 -527,163 -800,177 14,-273 51,-552 177,-799 -168,0 -336,0 -504,0 125,247 162,526 177,799 -274,-14 -553,-51 -800,-177l0 504c247,-125 527,-162 800,-177 -15,274 -52,553 -177,800zm969 111l-1434 0c-230,0 -225,345 0,345l1434 0c230,0 225,-345 0,-345zm-717 -2175c-105,0 -175,109 -133,204l266 0c42,-96 -30,-205 -133,-204z" }) }) }))
};
function ErrorBoundary({ children }) {
  try {
    return jsx(Fragment, { children });
  } catch (error) {
    console.log(error);
    return jsx(WhiteKing, { showError: true });
  }
}
function WhiteKing({ showError = false }) {
  return jsxs("div", Object.assign({ style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  } }, { children: [jsx("div", Object.assign({ style: {
    width: 250,
    height: 250,
    transform: "rotate(90deg)"
  } }, { children: errorImage.whiteKing })), showError && jsx("h1", { children: "Something went wrong" })] }));
}
function Board() {
  const boardRef = reactExports.useRef(null);
  const { boardWidth, clearCurrentRightClickDown, onPromotionPieceSelect, setShowPromoteDialog, showPromoteDialog, customBoardStyle } = useChessboard();
  reactExports.useEffect(() => {
    function handleClickOutside(event) {
      if (boardRef.current && !boardRef.current.contains(event.target)) {
        clearCurrentRightClickDown();
      }
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);
  return boardWidth ? jsx("div", Object.assign({ style: { perspective: "1000px" } }, { children: jsxs("div", Object.assign({ ref: boardRef, style: Object.assign(Object.assign({ position: "relative" }, boardStyles(boardWidth)), customBoardStyle) }, { children: [jsx(Squares, {}), jsx(Arrows, {}), showPromoteDialog && jsxs(Fragment, { children: [jsx("div", { onClick: () => {
    setShowPromoteDialog(false);
    onPromotionPieceSelect === null || onPromotionPieceSelect === void 0 ? void 0 : onPromotionPieceSelect();
  }, style: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "100",
    backgroundColor: "rgba(22,21,18,.7)",
    width: boardWidth,
    height: boardWidth
  } }), jsx(PromotionDialog, {})] })] })) })) : jsx(WhiteKing, {});
}
const boardStyles = (width) => ({
  cursor: "default",
  height: width,
  width
});
var ListenerType;
(function(ListenerType2) {
  ListenerType2["mouse"] = "mouse";
  ListenerType2["touch"] = "touch";
  ListenerType2["keyboard"] = "keyboard";
})(ListenerType || (ListenerType = {}));
class OptionsReader2 {
  get delay() {
    var _delay;
    return (_delay = this.args.delay) !== null && _delay !== void 0 ? _delay : 0;
  }
  get scrollAngleRanges() {
    return this.args.scrollAngleRanges;
  }
  get getDropTargetElementsAtPoint() {
    return this.args.getDropTargetElementsAtPoint;
  }
  get ignoreContextMenu() {
    var _ignoreContextMenu;
    return (_ignoreContextMenu = this.args.ignoreContextMenu) !== null && _ignoreContextMenu !== void 0 ? _ignoreContextMenu : false;
  }
  get enableHoverOutsideTarget() {
    var _enableHoverOutsideTarget;
    return (_enableHoverOutsideTarget = this.args.enableHoverOutsideTarget) !== null && _enableHoverOutsideTarget !== void 0 ? _enableHoverOutsideTarget : false;
  }
  get enableKeyboardEvents() {
    var _enableKeyboardEvents;
    return (_enableKeyboardEvents = this.args.enableKeyboardEvents) !== null && _enableKeyboardEvents !== void 0 ? _enableKeyboardEvents : false;
  }
  get enableMouseEvents() {
    var _enableMouseEvents;
    return (_enableMouseEvents = this.args.enableMouseEvents) !== null && _enableMouseEvents !== void 0 ? _enableMouseEvents : false;
  }
  get enableTouchEvents() {
    var _enableTouchEvents;
    return (_enableTouchEvents = this.args.enableTouchEvents) !== null && _enableTouchEvents !== void 0 ? _enableTouchEvents : true;
  }
  get touchSlop() {
    return this.args.touchSlop || 0;
  }
  get delayTouchStart() {
    var ref, ref1;
    var ref2, ref3;
    return (ref3 = (ref2 = (ref = this.args) === null || ref === void 0 ? void 0 : ref.delayTouchStart) !== null && ref2 !== void 0 ? ref2 : (ref1 = this.args) === null || ref1 === void 0 ? void 0 : ref1.delay) !== null && ref3 !== void 0 ? ref3 : 0;
  }
  get delayMouseStart() {
    var ref, ref4;
    var ref5, ref6;
    return (ref6 = (ref5 = (ref = this.args) === null || ref === void 0 ? void 0 : ref.delayMouseStart) !== null && ref5 !== void 0 ? ref5 : (ref4 = this.args) === null || ref4 === void 0 ? void 0 : ref4.delay) !== null && ref6 !== void 0 ? ref6 : 0;
  }
  get window() {
    if (this.context && this.context.window) {
      return this.context.window;
    } else if (typeof window !== "undefined") {
      return window;
    }
    return void 0;
  }
  get document() {
    var ref;
    if ((ref = this.context) === null || ref === void 0 ? void 0 : ref.document) {
      return this.context.document;
    }
    if (this.window) {
      return this.window.document;
    }
    return void 0;
  }
  get rootElement() {
    var ref;
    return ((ref = this.args) === null || ref === void 0 ? void 0 : ref.rootElement) || this.document;
  }
  constructor(args, context) {
    this.args = args;
    this.context = context;
  }
}
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
}
function inAngleRanges(x1, y1, x2, y2, angleRanges) {
  if (!angleRanges) {
    return false;
  }
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI + 180;
  for (let i = 0; i < angleRanges.length; ++i) {
    const ar = angleRanges[i];
    if (ar && (ar.start == null || angle >= ar.start) && (ar.end == null || angle <= ar.end)) {
      return true;
    }
  }
  return false;
}
const MouseButtons = {
  Left: 1
};
const MouseButton = {
  Left: 0
};
function eventShouldStartDrag(e) {
  return e.button === void 0 || e.button === MouseButton.Left;
}
function eventShouldEndDrag(e) {
  return e.buttons === void 0 || (e.buttons & MouseButtons.Left) === 0;
}
function isTouchEvent(e) {
  return !!e.targetTouches;
}
const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return void 0;
  }
  const { top, left } = el.getBoundingClientRect();
  return {
    x: left,
    y: top
  };
}
function getEventClientTouchOffset(e, lastTargetTouchFallback) {
  if (e.targetTouches.length === 1) {
    return getEventClientOffset(e.targetTouches[0]);
  } else if (lastTargetTouchFallback && e.touches.length === 1) {
    if (e.touches[0].target === lastTargetTouchFallback.target) {
      return getEventClientOffset(e.touches[0]);
    }
  }
  return;
}
function getEventClientOffset(e, lastTargetTouchFallback) {
  if (isTouchEvent(e)) {
    return getEventClientTouchOffset(e, lastTargetTouchFallback);
  } else {
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
}
const supportsPassive = (() => {
  let supported = false;
  try {
    addEventListener("test", () => {
    }, Object.defineProperty({}, "passive", {
      get() {
        supported = true;
        return true;
      }
    }));
  } catch (e) {
  }
  return supported;
})();
const eventNames = {
  [ListenerType.mouse]: {
    start: "mousedown",
    move: "mousemove",
    end: "mouseup",
    contextmenu: "contextmenu"
  },
  [ListenerType.touch]: {
    start: "touchstart",
    move: "touchmove",
    end: "touchend"
  },
  [ListenerType.keyboard]: {
    keydown: "keydown"
  }
};
class TouchBackendImpl {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref;
    return {
      sourceNodes: this.sourceNodes.size,
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      targetNodes: this.targetNodes.size,
      dragOverTargetIds: ((ref = this.dragOverTargetIds) === null || ref === void 0 ? void 0 : ref.length) || 0
    };
  }
  // public for test
  get document() {
    return this.options.document;
  }
  setup() {
    const root = this.options.rootElement;
    if (!root) {
      return;
    }
    invariant(!TouchBackendImpl.isSetUp, "Cannot have two Touch backends at the same time.");
    TouchBackendImpl.isSetUp = true;
    this.addEventListener(root, "start", this.getTopMoveStartHandler());
    this.addEventListener(root, "start", this.handleTopMoveStartCapture, true);
    this.addEventListener(root, "move", this.handleTopMove);
    this.addEventListener(root, "move", this.handleTopMoveCapture, true);
    this.addEventListener(root, "end", this.handleTopMoveEndCapture, true);
    if (this.options.enableMouseEvents && !this.options.ignoreContextMenu) {
      this.addEventListener(root, "contextmenu", this.handleTopMoveEndCapture);
    }
    if (this.options.enableKeyboardEvents) {
      this.addEventListener(root, "keydown", this.handleCancelOnEscape, true);
    }
  }
  teardown() {
    const root = this.options.rootElement;
    if (!root) {
      return;
    }
    TouchBackendImpl.isSetUp = false;
    this._mouseClientOffset = {};
    this.removeEventListener(root, "start", this.handleTopMoveStartCapture, true);
    this.removeEventListener(root, "start", this.handleTopMoveStart);
    this.removeEventListener(root, "move", this.handleTopMoveCapture, true);
    this.removeEventListener(root, "move", this.handleTopMove);
    this.removeEventListener(root, "end", this.handleTopMoveEndCapture, true);
    if (this.options.enableMouseEvents && !this.options.ignoreContextMenu) {
      this.removeEventListener(root, "contextmenu", this.handleTopMoveEndCapture);
    }
    if (this.options.enableKeyboardEvents) {
      this.removeEventListener(root, "keydown", this.handleCancelOnEscape, true);
    }
    this.uninstallSourceNodeRemovalObserver();
  }
  addEventListener(subject, event, handler, capture = false) {
    const options = supportsPassive ? {
      capture,
      passive: false
    } : capture;
    this.listenerTypes.forEach(function(listenerType) {
      const evt = eventNames[listenerType][event];
      if (evt) {
        subject.addEventListener(evt, handler, options);
      }
    });
  }
  removeEventListener(subject, event, handler, capture = false) {
    const options = supportsPassive ? {
      capture,
      passive: false
    } : capture;
    this.listenerTypes.forEach(function(listenerType) {
      const evt = eventNames[listenerType][event];
      if (evt) {
        subject.removeEventListener(evt, handler, options);
      }
    });
  }
  connectDragSource(sourceId, node) {
    const handleMoveStart = this.handleMoveStart.bind(this, sourceId);
    this.sourceNodes.set(sourceId, node);
    this.addEventListener(node, "start", handleMoveStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.removeEventListener(node, "start", handleMoveStart);
    };
  }
  connectDragPreview(sourceId, node, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDropTarget(targetId, node) {
    const root = this.options.rootElement;
    if (!this.document || !root) {
      return () => {
      };
    }
    const handleMove = (e) => {
      if (!this.document || !root || !this.monitor.isDragging()) {
        return;
      }
      let coords;
      switch (e.type) {
        case eventNames.mouse.move:
          coords = {
            x: e.clientX,
            y: e.clientY
          };
          break;
        case eventNames.touch.move:
          var ref, ref1;
          coords = {
            x: ((ref = e.touches[0]) === null || ref === void 0 ? void 0 : ref.clientX) || 0,
            y: ((ref1 = e.touches[0]) === null || ref1 === void 0 ? void 0 : ref1.clientY) || 0
          };
          break;
      }
      const droppedOn = coords != null ? this.document.elementFromPoint(coords.x, coords.y) : void 0;
      const childMatch = droppedOn && node.contains(droppedOn);
      if (droppedOn === node || childMatch) {
        return this.handleMove(e, targetId);
      }
    };
    this.addEventListener(this.document.body, "move", handleMove);
    this.targetNodes.set(targetId, node);
    return () => {
      if (this.document) {
        this.targetNodes.delete(targetId);
        this.removeEventListener(this.document.body, "move", handleMove);
      }
    };
  }
  getTopMoveStartHandler() {
    if (!this.options.delayTouchStart && !this.options.delayMouseStart) {
      return this.handleTopMoveStart;
    }
    return this.handleTopMoveStartDelay;
  }
  installSourceNodeRemovalObserver(node) {
    this.uninstallSourceNodeRemovalObserver();
    this.draggedSourceNode = node;
    this.draggedSourceNodeRemovalObserver = new MutationObserver(() => {
      if (node && !node.parentElement) {
        this.resurrectSourceNode();
        this.uninstallSourceNodeRemovalObserver();
      }
    });
    if (!node || !node.parentElement) {
      return;
    }
    this.draggedSourceNodeRemovalObserver.observe(node.parentElement, {
      childList: true
    });
  }
  resurrectSourceNode() {
    if (this.document && this.draggedSourceNode) {
      this.draggedSourceNode.style.display = "none";
      this.draggedSourceNode.removeAttribute("data-reactid");
      this.document.body.appendChild(this.draggedSourceNode);
    }
  }
  uninstallSourceNodeRemovalObserver() {
    if (this.draggedSourceNodeRemovalObserver) {
      this.draggedSourceNodeRemovalObserver.disconnect();
    }
    this.draggedSourceNodeRemovalObserver = void 0;
    this.draggedSourceNode = void 0;
  }
  constructor(manager, context, options) {
    this.getSourceClientOffset = (sourceId) => {
      const element = this.sourceNodes.get(sourceId);
      return element && getNodeClientOffset(element);
    };
    this.handleTopMoveStartCapture = (e) => {
      if (!eventShouldStartDrag(e)) {
        return;
      }
      this.moveStartSourceIds = [];
    };
    this.handleMoveStart = (sourceId) => {
      if (Array.isArray(this.moveStartSourceIds)) {
        this.moveStartSourceIds.unshift(sourceId);
      }
    };
    this.handleTopMoveStart = (e) => {
      if (!eventShouldStartDrag(e)) {
        return;
      }
      const clientOffset = getEventClientOffset(e);
      if (clientOffset) {
        if (isTouchEvent(e)) {
          this.lastTargetTouchFallback = e.targetTouches[0];
        }
        this._mouseClientOffset = clientOffset;
      }
      this.waitingForDelay = false;
    };
    this.handleTopMoveStartDelay = (e) => {
      if (!eventShouldStartDrag(e)) {
        return;
      }
      const delay = e.type === eventNames.touch.start ? this.options.delayTouchStart : this.options.delayMouseStart;
      this.timeout = setTimeout(this.handleTopMoveStart.bind(this, e), delay);
      this.waitingForDelay = true;
    };
    this.handleTopMoveCapture = () => {
      this.dragOverTargetIds = [];
    };
    this.handleMove = (_evt, targetId) => {
      if (this.dragOverTargetIds) {
        this.dragOverTargetIds.unshift(targetId);
      }
    };
    this.handleTopMove = (e1) => {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      if (!this.document || this.waitingForDelay) {
        return;
      }
      const { moveStartSourceIds, dragOverTargetIds } = this;
      const enableHoverOutsideTarget = this.options.enableHoverOutsideTarget;
      const clientOffset = getEventClientOffset(e1, this.lastTargetTouchFallback);
      if (!clientOffset) {
        return;
      }
      if (this._isScrolling || !this.monitor.isDragging() && inAngleRanges(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, clientOffset.x, clientOffset.y, this.options.scrollAngleRanges)) {
        this._isScrolling = true;
        return;
      }
      if (!this.monitor.isDragging() && // eslint-disable-next-line no-prototype-builtins
      this._mouseClientOffset.hasOwnProperty("x") && moveStartSourceIds && distance(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, clientOffset.x, clientOffset.y) > (this.options.touchSlop ? this.options.touchSlop : 0)) {
        this.moveStartSourceIds = void 0;
        this.actions.beginDrag(moveStartSourceIds, {
          clientOffset: this._mouseClientOffset,
          getSourceClientOffset: this.getSourceClientOffset,
          publishSource: false
        });
      }
      if (!this.monitor.isDragging()) {
        return;
      }
      const sourceNode = this.sourceNodes.get(this.monitor.getSourceId());
      this.installSourceNodeRemovalObserver(sourceNode);
      this.actions.publishDragSource();
      if (e1.cancelable) e1.preventDefault();
      const dragOverTargetNodes = (dragOverTargetIds || []).map(
        (key) => this.targetNodes.get(key)
      ).filter(
        (e) => !!e
      );
      const elementsAtPoint = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(clientOffset.x, clientOffset.y, dragOverTargetNodes) : this.document.elementsFromPoint(clientOffset.x, clientOffset.y);
      const elementsAtPointExtended = [];
      for (const nodeId in elementsAtPoint) {
        if (!elementsAtPoint.hasOwnProperty(nodeId)) {
          continue;
        }
        let currentNode = elementsAtPoint[nodeId];
        if (currentNode != null) {
          elementsAtPointExtended.push(currentNode);
        }
        while (currentNode) {
          currentNode = currentNode.parentElement;
          if (currentNode && elementsAtPointExtended.indexOf(currentNode) === -1) {
            elementsAtPointExtended.push(currentNode);
          }
        }
      }
      const orderedDragOverTargetIds = elementsAtPointExtended.filter(
        (node) => dragOverTargetNodes.indexOf(node) > -1
      ).map(
        (node) => this._getDropTargetId(node)
      ).filter(
        (node) => !!node
      ).filter(
        (id, index, ids) => ids.indexOf(id) === index
      );
      if (enableHoverOutsideTarget) {
        for (const targetId in this.targetNodes) {
          const targetNode = this.targetNodes.get(targetId);
          if (sourceNode && targetNode && targetNode.contains(sourceNode) && orderedDragOverTargetIds.indexOf(targetId) === -1) {
            orderedDragOverTargetIds.unshift(targetId);
            break;
          }
        }
      }
      orderedDragOverTargetIds.reverse();
      this.actions.hover(orderedDragOverTargetIds, {
        clientOffset
      });
    };
    this._getDropTargetId = (node) => {
      const keys = this.targetNodes.keys();
      let next = keys.next();
      while (next.done === false) {
        const targetId = next.value;
        if (node === this.targetNodes.get(targetId)) {
          return targetId;
        } else {
          next = keys.next();
        }
      }
      return void 0;
    };
    this.handleTopMoveEndCapture = (e) => {
      this._isScrolling = false;
      this.lastTargetTouchFallback = void 0;
      if (!eventShouldEndDrag(e)) {
        return;
      }
      if (!this.monitor.isDragging() || this.monitor.didDrop()) {
        this.moveStartSourceIds = void 0;
        return;
      }
      if (e.cancelable) e.preventDefault();
      this._mouseClientOffset = {};
      this.uninstallSourceNodeRemovalObserver();
      this.actions.drop();
      this.actions.endDrag();
    };
    this.handleCancelOnEscape = (e) => {
      if (e.key === "Escape" && this.monitor.isDragging()) {
        this._mouseClientOffset = {};
        this.uninstallSourceNodeRemovalObserver();
        this.actions.endDrag();
      }
    };
    this.options = new OptionsReader2(options, context);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.sourceNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map();
    this.targetNodes = /* @__PURE__ */ new Map();
    this.listenerTypes = [];
    this._mouseClientOffset = {};
    this._isScrolling = false;
    if (this.options.enableMouseEvents) {
      this.listenerTypes.push(ListenerType.mouse);
    }
    if (this.options.enableTouchEvents) {
      this.listenerTypes.push(ListenerType.touch);
    }
    if (this.options.enableKeyboardEvents) {
      this.listenerTypes.push(ListenerType.keyboard);
    }
  }
}
const TouchBackend = function createBackend2(manager, context = {}, options = {}) {
  return new TouchBackendImpl(manager, context, options);
};
const ChessboardDnDContext = reactExports.createContext({ isCustomDndProviderSet: false });
const EmptyProvider = ({ children }) => {
  return jsx(Fragment, { children });
};
const ChessboardDnDRoot = ({ customDndBackend, customDndBackendOptions, children }) => {
  const [clientWindow, setClientWindow] = reactExports.useState();
  const [backendSet, setBackendSet] = reactExports.useState(false);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const { isCustomDndProviderSet } = reactExports.useContext(ChessboardDnDContext);
  reactExports.useEffect(() => {
    setIsMobile("ontouchstart" in window);
    setBackendSet(true);
    setClientWindow(window);
  }, []);
  const DnDWrapper = isCustomDndProviderSet ? EmptyProvider : DndProvider;
  if (!backendSet) {
    return null;
  }
  return clientWindow ? jsx(DnDWrapper, Object.assign({ backend: customDndBackend || (isMobile ? TouchBackend : HTML5Backend), context: clientWindow, options: customDndBackend ? customDndBackendOptions : void 0 }, { children })) : jsx(Fragment, { children });
};
function CustomDragLayer({ boardContainer }) {
  const { boardWidth, chessPieces, id, snapToCursor, allowDragOutsideBoard } = useChessboard();
  const collectedProps = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    clientOffset: monitor.getClientOffset(),
    sourceClientOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }));
  const { isDragging, item, clientOffset, sourceClientOffset } = collectedProps;
  const getItemStyle = reactExports.useCallback((clientOffset2, sourceClientOffset2) => {
    if (!clientOffset2 || !sourceClientOffset2)
      return { display: "none" };
    let { x, y } = snapToCursor ? clientOffset2 : sourceClientOffset2;
    const halfSquareWidth = boardWidth / 8 / 2;
    if (snapToCursor) {
      x -= halfSquareWidth;
      y -= halfSquareWidth;
    }
    if (!allowDragOutsideBoard) {
      const { left, top } = boardContainer;
      const maxLeft = left - halfSquareWidth;
      const maxTop = top - halfSquareWidth;
      const maxRight = left + boardWidth - halfSquareWidth;
      const maxBottom = top + boardWidth - halfSquareWidth;
      x = Math.max(maxLeft, Math.min(x, maxRight));
      y = Math.max(maxTop, Math.min(y, maxBottom));
    }
    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
      touchAction: "none"
    };
  }, [boardWidth, allowDragOutsideBoard, snapToCursor, boardContainer]);
  return isDragging && item.id === id ? jsx("div", Object.assign({ style: {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 10,
    left: 0,
    top: 0
  } }, { children: jsx("div", Object.assign({ style: getItemStyle(clientOffset, sourceClientOffset) }, { children: typeof chessPieces[item.piece] === "function" ? chessPieces[item.piece]({
    squareWidth: boardWidth / 8,
    isDragging: true
  }) : jsx("svg", Object.assign({ viewBox: "1 1 43 43", width: boardWidth / 8, height: boardWidth / 8 }, { children: jsx("g", { children: chessPieces[item.piece] }) })) })) })) : null;
}
const Chessboard = reactExports.forwardRef((props, ref) => {
  const { customDndBackend, customDndBackendOptions, onBoardWidthChange } = props, otherProps = __rest(props, ["customDndBackend", "customDndBackendOptions", "onBoardWidthChange"]);
  const [boardWidth, setBoardWidth] = reactExports.useState(props.boardWidth);
  const boardRef = reactExports.useRef(null);
  const boardContainerRef = reactExports.useRef(null);
  const [boardContainerPos, setBoardContainerPos] = reactExports.useState({
    left: 0,
    top: 0
  });
  const metrics = reactExports.useMemo(() => {
    var _a;
    return (_a = boardRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
  }, [boardRef.current]);
  reactExports.useEffect(() => {
    boardWidth && (onBoardWidthChange === null || onBoardWidthChange === void 0 ? void 0 : onBoardWidthChange(boardWidth));
  }, [boardWidth]);
  reactExports.useEffect(() => {
    setBoardContainerPos({
      left: (metrics === null || metrics === void 0 ? void 0 : metrics.left) ? metrics === null || metrics === void 0 ? void 0 : metrics.left : 0,
      top: (metrics === null || metrics === void 0 ? void 0 : metrics.top) ? metrics === null || metrics === void 0 ? void 0 : metrics.top : 0
    });
  }, [metrics]);
  reactExports.useEffect(() => {
    var _a;
    if (props.boardWidth === void 0 && ((_a = boardRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth)) {
      const resizeObserver = new ResizeObserver(() => {
        var _a2;
        setBoardWidth((_a2 = boardRef.current) === null || _a2 === void 0 ? void 0 : _a2.offsetWidth);
      });
      resizeObserver.observe(boardRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [boardRef.current]);
  return jsx(ErrorBoundary, { children: jsxs("div", Object.assign({ ref: boardContainerRef, style: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  } }, { children: [jsx("div", { ref: boardRef, style: { width: "100%" } }), jsx(ChessboardDnDRoot, Object.assign({ customDndBackend, customDndBackendOptions }, { children: boardWidth && jsxs(ChessboardProvider, Object.assign({ boardWidth }, otherProps, { ref }, { children: [jsx(CustomDragLayer, { boardContainer: boardContainerPos }), jsx(Board, {})] })) }))] })) });
});
/**
 * @license
 * Copyright (c) 2025, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const WHITE = "w";
const BLACK = "b";
const PAWN = "p";
const KNIGHT = "n";
const BISHOP = "b";
const ROOK = "r";
const QUEEN = "q";
const KING = "k";
const DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
class Move {
  color;
  from;
  to;
  piece;
  captured;
  promotion;
  /**
   * @deprecated This field is deprecated and will be removed in version 2.0.0.
   * Please use move descriptor functions instead: `isCapture`, `isPromotion`,
   * `isEnPassant`, `isKingsideCastle`, `isQueensideCastle`, `isCastle`, and
   * `isBigPawn`
   */
  flags;
  san;
  lan;
  before;
  after;
  constructor(chess, internal) {
    const { color, piece, from, to, flags, captured, promotion } = internal;
    const fromAlgebraic = algebraic(from);
    const toAlgebraic = algebraic(to);
    this.color = color;
    this.piece = piece;
    this.from = fromAlgebraic;
    this.to = toAlgebraic;
    this.san = chess["_moveToSan"](internal, chess["_moves"]({ legal: true }));
    this.lan = fromAlgebraic + toAlgebraic;
    this.before = chess.fen();
    chess["_makeMove"](internal);
    this.after = chess.fen();
    chess["_undoMove"]();
    this.flags = "";
    for (const flag in BITS) {
      if (BITS[flag] & flags) {
        this.flags += FLAGS[flag];
      }
    }
    if (captured) {
      this.captured = captured;
    }
    if (promotion) {
      this.promotion = promotion;
      this.lan += promotion;
    }
  }
  isCapture() {
    return this.flags.indexOf(FLAGS["CAPTURE"]) > -1;
  }
  isPromotion() {
    return this.flags.indexOf(FLAGS["PROMOTION"]) > -1;
  }
  isEnPassant() {
    return this.flags.indexOf(FLAGS["EP_CAPTURE"]) > -1;
  }
  isKingsideCastle() {
    return this.flags.indexOf(FLAGS["KSIDE_CASTLE"]) > -1;
  }
  isQueensideCastle() {
    return this.flags.indexOf(FLAGS["QSIDE_CASTLE"]) > -1;
  }
  isBigPawn() {
    return this.flags.indexOf(FLAGS["BIG_PAWN"]) > -1;
  }
}
const EMPTY = -1;
const FLAGS = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q"
};
const BITS = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64
};
const Ox88 = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
};
const PAWN_OFFSETS = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15]
};
const PIECE_OFFSETS = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
};
const ATTACKS = [
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  24,
  24,
  24,
  56,
  0,
  56,
  24,
  24,
  24,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20
];
const RAYS = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  16,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  16,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  16,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  -16,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  -16,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  -16,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  0,
  -17
];
const PIECE_MASKS = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 };
const SYMBOLS = "pnbrqkPNBRQK";
const PROMOTIONS = [KNIGHT, BISHOP, ROOK, QUEEN];
const RANK_1 = 7;
const RANK_2 = 6;
const RANK_7 = 1;
const RANK_8 = 0;
const SIDES = {
  [KING]: BITS.KSIDE_CASTLE,
  [QUEEN]: BITS.QSIDE_CASTLE
};
const ROOKS = {
  w: [
    { square: Ox88.a1, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h1, flag: BITS.KSIDE_CASTLE }
  ],
  b: [
    { square: Ox88.a8, flag: BITS.QSIDE_CASTLE },
    { square: Ox88.h8, flag: BITS.KSIDE_CASTLE }
  ]
};
const SECOND_RANK = { b: RANK_7, w: RANK_2 };
const TERMINATION_MARKERS = ["1-0", "0-1", "1/2-1/2", "*"];
function rank(square) {
  return square >> 4;
}
function file(square) {
  return square & 15;
}
function isDigit(c) {
  return "0123456789".indexOf(c) !== -1;
}
function algebraic(square) {
  const f = file(square);
  const r = rank(square);
  return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
}
function swapColor(color) {
  return color === WHITE ? BLACK : WHITE;
}
function validateFen(fen) {
  const tokens = fen.split(/\s+/);
  if (tokens.length !== 6) {
    return {
      ok: false,
      error: "Invalid FEN: must contain six space-delimited fields"
    };
  }
  const moveNumber = parseInt(tokens[5], 10);
  if (isNaN(moveNumber) || moveNumber <= 0) {
    return {
      ok: false,
      error: "Invalid FEN: move number must be a positive integer"
    };
  }
  const halfMoves = parseInt(tokens[4], 10);
  if (isNaN(halfMoves) || halfMoves < 0) {
    return {
      ok: false,
      error: "Invalid FEN: half move counter number must be a non-negative integer"
    };
  }
  if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
    return { ok: false, error: "Invalid FEN: en-passant square is invalid" };
  }
  if (/[^kKqQ-]/.test(tokens[2])) {
    return { ok: false, error: "Invalid FEN: castling availability is invalid" };
  }
  if (!/^(w|b)$/.test(tokens[1])) {
    return { ok: false, error: "Invalid FEN: side-to-move is invalid" };
  }
  const rows = tokens[0].split("/");
  if (rows.length !== 8) {
    return {
      ok: false,
      error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
    };
  }
  for (let i = 0; i < rows.length; i++) {
    let sumFields = 0;
    let previousWasNumber = false;
    for (let k = 0; k < rows[i].length; k++) {
      if (isDigit(rows[i][k])) {
        if (previousWasNumber) {
          return {
            ok: false,
            error: "Invalid FEN: piece data is invalid (consecutive number)"
          };
        }
        sumFields += parseInt(rows[i][k], 10);
        previousWasNumber = true;
      } else {
        if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
          return {
            ok: false,
            error: "Invalid FEN: piece data is invalid (invalid piece)"
          };
        }
        sumFields += 1;
        previousWasNumber = false;
      }
    }
    if (sumFields !== 8) {
      return {
        ok: false,
        error: "Invalid FEN: piece data is invalid (too many squares in rank)"
      };
    }
  }
  if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
    return { ok: false, error: "Invalid FEN: illegal en-passant square" };
  }
  const kings = [
    { color: "white", regex: /K/g },
    { color: "black", regex: /k/g }
  ];
  for (const { color, regex } of kings) {
    if (!regex.test(tokens[0])) {
      return { ok: false, error: `Invalid FEN: missing ${color} king` };
    }
    if ((tokens[0].match(regex) || []).length > 1) {
      return { ok: false, error: `Invalid FEN: too many ${color} kings` };
    }
  }
  if (Array.from(rows[0] + rows[7]).some((char) => char.toUpperCase() === "P")) {
    return {
      ok: false,
      error: "Invalid FEN: some pawns are on the edge rows"
    };
  }
  return { ok: true };
}
function getDisambiguator(move, moves) {
  const from = move.from;
  const to = move.to;
  const piece = move.piece;
  let ambiguities = 0;
  let sameRank = 0;
  let sameFile = 0;
  for (let i = 0, len = moves.length; i < len; i++) {
    const ambigFrom = moves[i].from;
    const ambigTo = moves[i].to;
    const ambigPiece = moves[i].piece;
    if (piece === ambigPiece && from !== ambigFrom && to === ambigTo) {
      ambiguities++;
      if (rank(from) === rank(ambigFrom)) {
        sameRank++;
      }
      if (file(from) === file(ambigFrom)) {
        sameFile++;
      }
    }
  }
  if (ambiguities > 0) {
    if (sameRank > 0 && sameFile > 0) {
      return algebraic(from);
    } else if (sameFile > 0) {
      return algebraic(from).charAt(1);
    } else {
      return algebraic(from).charAt(0);
    }
  }
  return "";
}
function addMove(moves, color, from, to, piece, captured = void 0, flags = BITS.NORMAL) {
  const r = rank(to);
  if (piece === PAWN && (r === RANK_1 || r === RANK_8)) {
    for (let i = 0; i < PROMOTIONS.length; i++) {
      const promotion = PROMOTIONS[i];
      moves.push({
        color,
        from,
        to,
        piece,
        captured,
        promotion,
        flags: flags | BITS.PROMOTION
      });
    }
  } else {
    moves.push({
      color,
      from,
      to,
      piece,
      captured,
      flags
    });
  }
}
function inferPieceType(san) {
  let pieceType = san.charAt(0);
  if (pieceType >= "a" && pieceType <= "h") {
    const matches = san.match(/[a-h]\d.*[a-h]\d/);
    if (matches) {
      return void 0;
    }
    return PAWN;
  }
  pieceType = pieceType.toLowerCase();
  if (pieceType === "o") {
    return KING;
  }
  return pieceType;
}
function strippedSan(move) {
  return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}
function trimFen(fen) {
  return fen.split(" ").slice(0, 4).join(" ");
}
class Chess {
  _board = new Array(128);
  _turn = WHITE;
  _header = {};
  _kings = { w: EMPTY, b: EMPTY };
  _epSquare = -1;
  _halfMoves = 0;
  _moveNumber = 0;
  _history = [];
  _comments = {};
  _castling = { w: 0, b: 0 };
  // tracks number of times a position has been seen for repetition checking
  _positionCount = {};
  constructor(fen = DEFAULT_POSITION) {
    this.load(fen);
  }
  clear({ preserveHeaders = false } = {}) {
    this._board = new Array(128);
    this._kings = { w: EMPTY, b: EMPTY };
    this._turn = WHITE;
    this._castling = { w: 0, b: 0 };
    this._epSquare = EMPTY;
    this._halfMoves = 0;
    this._moveNumber = 1;
    this._history = [];
    this._comments = {};
    this._header = preserveHeaders ? this._header : {};
    this._positionCount = {};
    delete this._header["SetUp"];
    delete this._header["FEN"];
  }
  load(fen, { skipValidation = false, preserveHeaders = false } = {}) {
    let tokens = fen.split(/\s+/);
    if (tokens.length >= 2 && tokens.length < 6) {
      const adjustments = ["-", "-", "0", "1"];
      fen = tokens.concat(adjustments.slice(-(6 - tokens.length))).join(" ");
    }
    tokens = fen.split(/\s+/);
    if (!skipValidation) {
      const { ok, error } = validateFen(fen);
      if (!ok) {
        throw new Error(error);
      }
    }
    const position = tokens[0];
    let square = 0;
    this.clear({ preserveHeaders });
    for (let i = 0; i < position.length; i++) {
      const piece = position.charAt(i);
      if (piece === "/") {
        square += 8;
      } else if (isDigit(piece)) {
        square += parseInt(piece, 10);
      } else {
        const color = piece < "a" ? WHITE : BLACK;
        this._put({ type: piece.toLowerCase(), color }, algebraic(square));
        square++;
      }
    }
    this._turn = tokens[1];
    if (tokens[2].indexOf("K") > -1) {
      this._castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("Q") > -1) {
      this._castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf("k") > -1) {
      this._castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf("q") > -1) {
      this._castling.b |= BITS.QSIDE_CASTLE;
    }
    this._epSquare = tokens[3] === "-" ? EMPTY : Ox88[tokens[3]];
    this._halfMoves = parseInt(tokens[4], 10);
    this._moveNumber = parseInt(tokens[5], 10);
    this._updateSetup(fen);
    this._incPositionCount(fen);
  }
  fen() {
    let empty = 0;
    let fen = "";
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (this._board[i]) {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        const { color, type: piece } = this._board[i];
        fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
      } else {
        empty++;
      }
      if (i + 1 & 136) {
        if (empty > 0) {
          fen += empty;
        }
        if (i !== Ox88.h1) {
          fen += "/";
        }
        empty = 0;
        i += 8;
      }
    }
    let castling = "";
    if (this._castling[WHITE] & BITS.KSIDE_CASTLE) {
      castling += "K";
    }
    if (this._castling[WHITE] & BITS.QSIDE_CASTLE) {
      castling += "Q";
    }
    if (this._castling[BLACK] & BITS.KSIDE_CASTLE) {
      castling += "k";
    }
    if (this._castling[BLACK] & BITS.QSIDE_CASTLE) {
      castling += "q";
    }
    castling = castling || "-";
    let epSquare = "-";
    if (this._epSquare !== EMPTY) {
      const bigPawnSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
      const squares = [bigPawnSquare + 1, bigPawnSquare - 1];
      for (const square of squares) {
        if (square & 136) {
          continue;
        }
        const color = this._turn;
        if (this._board[square]?.color === color && this._board[square]?.type === PAWN) {
          this._makeMove({
            color,
            from: square,
            to: this._epSquare,
            piece: PAWN,
            captured: PAWN,
            flags: BITS.EP_CAPTURE
          });
          const isLegal = !this._isKingAttacked(color);
          this._undoMove();
          if (isLegal) {
            epSquare = algebraic(this._epSquare);
            break;
          }
        }
      }
    }
    return [
      fen,
      this._turn,
      castling,
      epSquare,
      this._halfMoves,
      this._moveNumber
    ].join(" ");
  }
  /*
   * Called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object. If the FEN
   * is equal to the default position, the SetUp and FEN are deleted the setup
   * is only updated if history.length is zero, ie moves haven't been made.
   */
  _updateSetup(fen) {
    if (this._history.length > 0)
      return;
    if (fen !== DEFAULT_POSITION) {
      this._header["SetUp"] = "1";
      this._header["FEN"] = fen;
    } else {
      delete this._header["SetUp"];
      delete this._header["FEN"];
    }
  }
  reset() {
    this.load(DEFAULT_POSITION);
  }
  get(square) {
    return this._board[Ox88[square]];
  }
  put({ type, color }, square) {
    if (this._put({ type, color }, square)) {
      this._updateCastlingRights();
      this._updateEnPassantSquare();
      this._updateSetup(this.fen());
      return true;
    }
    return false;
  }
  _put({ type, color }, square) {
    if (SYMBOLS.indexOf(type.toLowerCase()) === -1) {
      return false;
    }
    if (!(square in Ox88)) {
      return false;
    }
    const sq = Ox88[square];
    if (type == KING && !(this._kings[color] == EMPTY || this._kings[color] == sq)) {
      return false;
    }
    const currentPieceOnSquare = this._board[sq];
    if (currentPieceOnSquare && currentPieceOnSquare.type === KING) {
      this._kings[currentPieceOnSquare.color] = EMPTY;
    }
    this._board[sq] = { type, color };
    if (type === KING) {
      this._kings[color] = sq;
    }
    return true;
  }
  remove(square) {
    const piece = this.get(square);
    delete this._board[Ox88[square]];
    if (piece && piece.type === KING) {
      this._kings[piece.color] = EMPTY;
    }
    this._updateCastlingRights();
    this._updateEnPassantSquare();
    this._updateSetup(this.fen());
    return piece;
  }
  _updateCastlingRights() {
    const whiteKingInPlace = this._board[Ox88.e1]?.type === KING && this._board[Ox88.e1]?.color === WHITE;
    const blackKingInPlace = this._board[Ox88.e8]?.type === KING && this._board[Ox88.e8]?.color === BLACK;
    if (!whiteKingInPlace || this._board[Ox88.a1]?.type !== ROOK || this._board[Ox88.a1]?.color !== WHITE) {
      this._castling.w &= -65;
    }
    if (!whiteKingInPlace || this._board[Ox88.h1]?.type !== ROOK || this._board[Ox88.h1]?.color !== WHITE) {
      this._castling.w &= -33;
    }
    if (!blackKingInPlace || this._board[Ox88.a8]?.type !== ROOK || this._board[Ox88.a8]?.color !== BLACK) {
      this._castling.b &= -65;
    }
    if (!blackKingInPlace || this._board[Ox88.h8]?.type !== ROOK || this._board[Ox88.h8]?.color !== BLACK) {
      this._castling.b &= -33;
    }
  }
  _updateEnPassantSquare() {
    if (this._epSquare === EMPTY) {
      return;
    }
    const startSquare = this._epSquare + (this._turn === WHITE ? -16 : 16);
    const currentSquare = this._epSquare + (this._turn === WHITE ? 16 : -16);
    const attackers = [currentSquare + 1, currentSquare - 1];
    if (this._board[startSquare] !== null || this._board[this._epSquare] !== null || this._board[currentSquare]?.color !== swapColor(this._turn) || this._board[currentSquare]?.type !== PAWN) {
      this._epSquare = EMPTY;
      return;
    }
    const canCapture = (square) => !(square & 136) && this._board[square]?.color === this._turn && this._board[square]?.type === PAWN;
    if (!attackers.some(canCapture)) {
      this._epSquare = EMPTY;
    }
  }
  _attacked(color, square, verbose) {
    const attackers = [];
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (i & 136) {
        i += 7;
        continue;
      }
      if (this._board[i] === void 0 || this._board[i].color !== color) {
        continue;
      }
      const piece = this._board[i];
      const difference = i - square;
      if (difference === 0) {
        continue;
      }
      const index = difference + 119;
      if (ATTACKS[index] & PIECE_MASKS[piece.type]) {
        if (piece.type === PAWN) {
          if (difference > 0 && piece.color === WHITE || difference <= 0 && piece.color === BLACK) {
            if (!verbose) {
              return true;
            } else {
              attackers.push(algebraic(i));
            }
          }
          continue;
        }
        if (piece.type === "n" || piece.type === "k") {
          if (!verbose) {
            return true;
          } else {
            attackers.push(algebraic(i));
            continue;
          }
        }
        const offset = RAYS[index];
        let j = i + offset;
        let blocked = false;
        while (j !== square) {
          if (this._board[j] != null) {
            blocked = true;
            break;
          }
          j += offset;
        }
        if (!blocked) {
          if (!verbose) {
            return true;
          } else {
            attackers.push(algebraic(i));
            continue;
          }
        }
      }
    }
    if (verbose) {
      return attackers;
    } else {
      return false;
    }
  }
  attackers(square, attackedBy) {
    if (!attackedBy) {
      return this._attacked(this._turn, Ox88[square], true);
    } else {
      return this._attacked(attackedBy, Ox88[square], true);
    }
  }
  _isKingAttacked(color) {
    const square = this._kings[color];
    return square === -1 ? false : this._attacked(swapColor(color), square);
  }
  isAttacked(square, attackedBy) {
    return this._attacked(attackedBy, Ox88[square]);
  }
  isCheck() {
    return this._isKingAttacked(this._turn);
  }
  inCheck() {
    return this.isCheck();
  }
  isCheckmate() {
    return this.isCheck() && this._moves().length === 0;
  }
  isStalemate() {
    return !this.isCheck() && this._moves().length === 0;
  }
  isInsufficientMaterial() {
    const pieces = {
      b: 0,
      n: 0,
      r: 0,
      q: 0,
      k: 0,
      p: 0
    };
    const bishops = [];
    let numPieces = 0;
    let squareColor = 0;
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      squareColor = (squareColor + 1) % 2;
      if (i & 136) {
        i += 7;
        continue;
      }
      const piece = this._board[i];
      if (piece) {
        pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(squareColor);
        }
        numPieces++;
      }
    }
    if (numPieces === 2) {
      return true;
    } else if (
      // k vs. kn .... or .... k vs. kb
      numPieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)
    ) {
      return true;
    } else if (numPieces === pieces[BISHOP] + 2) {
      let sum = 0;
      const len = bishops.length;
      for (let i = 0; i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) {
        return true;
      }
    }
    return false;
  }
  isThreefoldRepetition() {
    return this._getPositionCount(this.fen()) >= 3;
  }
  isDrawByFiftyMoves() {
    return this._halfMoves >= 100;
  }
  isDraw() {
    return this.isDrawByFiftyMoves() || this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
  }
  isGameOver() {
    return this.isCheckmate() || this.isStalemate() || this.isDraw();
  }
  moves({ verbose = false, square = void 0, piece = void 0 } = {}) {
    const moves = this._moves({ square, piece });
    if (verbose) {
      return moves.map((move) => new Move(this, move));
    } else {
      return moves.map((move) => this._moveToSan(move, moves));
    }
  }
  _moves({ legal = true, piece = void 0, square = void 0 } = {}) {
    const forSquare = square ? square.toLowerCase() : void 0;
    const forPiece = piece?.toLowerCase();
    const moves = [];
    const us = this._turn;
    const them = swapColor(us);
    let firstSquare = Ox88.a8;
    let lastSquare = Ox88.h1;
    let singleSquare = false;
    if (forSquare) {
      if (!(forSquare in Ox88)) {
        return [];
      } else {
        firstSquare = lastSquare = Ox88[forSquare];
        singleSquare = true;
      }
    }
    for (let from = firstSquare; from <= lastSquare; from++) {
      if (from & 136) {
        from += 7;
        continue;
      }
      if (!this._board[from] || this._board[from].color === them) {
        continue;
      }
      const { type } = this._board[from];
      let to;
      if (type === PAWN) {
        if (forPiece && forPiece !== type)
          continue;
        to = from + PAWN_OFFSETS[us][0];
        if (!this._board[to]) {
          addMove(moves, us, from, to, PAWN);
          to = from + PAWN_OFFSETS[us][1];
          if (SECOND_RANK[us] === rank(from) && !this._board[to]) {
            addMove(moves, us, from, to, PAWN, void 0, BITS.BIG_PAWN);
          }
        }
        for (let j = 2; j < 4; j++) {
          to = from + PAWN_OFFSETS[us][j];
          if (to & 136)
            continue;
          if (this._board[to]?.color === them) {
            addMove(moves, us, from, to, PAWN, this._board[to].type, BITS.CAPTURE);
          } else if (to === this._epSquare) {
            addMove(moves, us, from, to, PAWN, PAWN, BITS.EP_CAPTURE);
          }
        }
      } else {
        if (forPiece && forPiece !== type)
          continue;
        for (let j = 0, len = PIECE_OFFSETS[type].length; j < len; j++) {
          const offset = PIECE_OFFSETS[type][j];
          to = from;
          while (true) {
            to += offset;
            if (to & 136)
              break;
            if (!this._board[to]) {
              addMove(moves, us, from, to, type);
            } else {
              if (this._board[to].color === us)
                break;
              addMove(moves, us, from, to, type, this._board[to].type, BITS.CAPTURE);
              break;
            }
            if (type === KNIGHT || type === KING)
              break;
          }
        }
      }
    }
    if (forPiece === void 0 || forPiece === KING) {
      if (!singleSquare || lastSquare === this._kings[us]) {
        if (this._castling[us] & BITS.KSIDE_CASTLE) {
          const castlingFrom = this._kings[us];
          const castlingTo = castlingFrom + 2;
          if (!this._board[castlingFrom + 1] && !this._board[castlingTo] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom + 1) && !this._attacked(them, castlingTo)) {
            addMove(moves, us, this._kings[us], castlingTo, KING, void 0, BITS.KSIDE_CASTLE);
          }
        }
        if (this._castling[us] & BITS.QSIDE_CASTLE) {
          const castlingFrom = this._kings[us];
          const castlingTo = castlingFrom - 2;
          if (!this._board[castlingFrom - 1] && !this._board[castlingFrom - 2] && !this._board[castlingFrom - 3] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom - 1) && !this._attacked(them, castlingTo)) {
            addMove(moves, us, this._kings[us], castlingTo, KING, void 0, BITS.QSIDE_CASTLE);
          }
        }
      }
    }
    if (!legal || this._kings[us] === -1) {
      return moves;
    }
    const legalMoves = [];
    for (let i = 0, len = moves.length; i < len; i++) {
      this._makeMove(moves[i]);
      if (!this._isKingAttacked(us)) {
        legalMoves.push(moves[i]);
      }
      this._undoMove();
    }
    return legalMoves;
  }
  move(move, { strict = false } = {}) {
    let moveObj = null;
    if (typeof move === "string") {
      moveObj = this._moveFromSan(move, strict);
    } else if (typeof move === "object") {
      const moves = this._moves();
      for (let i = 0, len = moves.length; i < len; i++) {
        if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
          moveObj = moves[i];
          break;
        }
      }
    }
    if (!moveObj) {
      if (typeof move === "string") {
        throw new Error(`Invalid move: ${move}`);
      } else {
        throw new Error(`Invalid move: ${JSON.stringify(move)}`);
      }
    }
    const prettyMove = new Move(this, moveObj);
    this._makeMove(moveObj);
    this._incPositionCount(prettyMove.after);
    return prettyMove;
  }
  _push(move) {
    this._history.push({
      move,
      kings: { b: this._kings.b, w: this._kings.w },
      turn: this._turn,
      castling: { b: this._castling.b, w: this._castling.w },
      epSquare: this._epSquare,
      halfMoves: this._halfMoves,
      moveNumber: this._moveNumber
    });
  }
  _makeMove(move) {
    const us = this._turn;
    const them = swapColor(us);
    this._push(move);
    this._board[move.to] = this._board[move.from];
    delete this._board[move.from];
    if (move.flags & BITS.EP_CAPTURE) {
      if (this._turn === BLACK) {
        delete this._board[move.to - 16];
      } else {
        delete this._board[move.to + 16];
      }
    }
    if (move.promotion) {
      this._board[move.to] = { type: move.promotion, color: us };
    }
    if (this._board[move.to].type === KING) {
      this._kings[us] = move.to;
      if (move.flags & BITS.KSIDE_CASTLE) {
        const castlingTo = move.to - 1;
        const castlingFrom = move.to + 1;
        this._board[castlingTo] = this._board[castlingFrom];
        delete this._board[castlingFrom];
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        const castlingTo = move.to + 1;
        const castlingFrom = move.to - 2;
        this._board[castlingTo] = this._board[castlingFrom];
        delete this._board[castlingFrom];
      }
      this._castling[us] = 0;
    }
    if (this._castling[us]) {
      for (let i = 0, len = ROOKS[us].length; i < len; i++) {
        if (move.from === ROOKS[us][i].square && this._castling[us] & ROOKS[us][i].flag) {
          this._castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }
    if (this._castling[them]) {
      for (let i = 0, len = ROOKS[them].length; i < len; i++) {
        if (move.to === ROOKS[them][i].square && this._castling[them] & ROOKS[them][i].flag) {
          this._castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }
    if (move.flags & BITS.BIG_PAWN) {
      if (us === BLACK) {
        this._epSquare = move.to - 16;
      } else {
        this._epSquare = move.to + 16;
      }
    } else {
      this._epSquare = EMPTY;
    }
    if (move.piece === PAWN) {
      this._halfMoves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      this._halfMoves = 0;
    } else {
      this._halfMoves++;
    }
    if (us === BLACK) {
      this._moveNumber++;
    }
    this._turn = them;
  }
  undo() {
    const move = this._undoMove();
    if (move) {
      const prettyMove = new Move(this, move);
      this._decPositionCount(prettyMove.after);
      return prettyMove;
    }
    return null;
  }
  _undoMove() {
    const old = this._history.pop();
    if (old === void 0) {
      return null;
    }
    const move = old.move;
    this._kings = old.kings;
    this._turn = old.turn;
    this._castling = old.castling;
    this._epSquare = old.epSquare;
    this._halfMoves = old.halfMoves;
    this._moveNumber = old.moveNumber;
    const us = this._turn;
    const them = swapColor(us);
    this._board[move.from] = this._board[move.to];
    this._board[move.from].type = move.piece;
    delete this._board[move.to];
    if (move.captured) {
      if (move.flags & BITS.EP_CAPTURE) {
        let index;
        if (us === BLACK) {
          index = move.to - 16;
        } else {
          index = move.to + 16;
        }
        this._board[index] = { type: PAWN, color: them };
      } else {
        this._board[move.to] = { type: move.captured, color: them };
      }
    }
    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      let castlingTo, castlingFrom;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castlingTo = move.to + 1;
        castlingFrom = move.to - 1;
      } else {
        castlingTo = move.to - 2;
        castlingFrom = move.to + 1;
      }
      this._board[castlingTo] = this._board[castlingFrom];
      delete this._board[castlingFrom];
    }
    return move;
  }
  pgn({ newline = "\n", maxWidth = 0 } = {}) {
    const result = [];
    let headerExists = false;
    for (const i in this._header) {
      result.push("[" + i + ' "' + this._header[i] + '"]' + newline);
      headerExists = true;
    }
    if (headerExists && this._history.length) {
      result.push(newline);
    }
    const appendComment = (moveString2) => {
      const comment = this._comments[this.fen()];
      if (typeof comment !== "undefined") {
        const delimiter = moveString2.length > 0 ? " " : "";
        moveString2 = `${moveString2}${delimiter}{${comment}}`;
      }
      return moveString2;
    };
    const reversedHistory = [];
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    const moves = [];
    let moveString = "";
    if (reversedHistory.length === 0) {
      moves.push(appendComment(""));
    }
    while (reversedHistory.length > 0) {
      moveString = appendComment(moveString);
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      if (!this._history.length && move.color === "b") {
        const prefix = `${this._moveNumber}. ...`;
        moveString = moveString ? `${moveString} ${prefix}` : prefix;
      } else if (move.color === "w") {
        if (moveString.length) {
          moves.push(moveString);
        }
        moveString = this._moveNumber + ".";
      }
      moveString = moveString + " " + this._moveToSan(move, this._moves({ legal: true }));
      this._makeMove(move);
    }
    if (moveString.length) {
      moves.push(appendComment(moveString));
    }
    if (typeof this._header.Result !== "undefined") {
      moves.push(this._header.Result);
    }
    if (maxWidth === 0) {
      return result.join("") + moves.join(" ");
    }
    const strip = function() {
      if (result.length > 0 && result[result.length - 1] === " ") {
        result.pop();
        return true;
      }
      return false;
    };
    const wrapComment = function(width, move) {
      for (const token of move.split(" ")) {
        if (!token) {
          continue;
        }
        if (width + token.length > maxWidth) {
          while (strip()) {
            width--;
          }
          result.push(newline);
          width = 0;
        }
        result.push(token);
        width += token.length;
        result.push(" ");
        width++;
      }
      if (strip()) {
        width--;
      }
      return width;
    };
    let currentWidth = 0;
    for (let i = 0; i < moves.length; i++) {
      if (currentWidth + moves[i].length > maxWidth) {
        if (moves[i].includes("{")) {
          currentWidth = wrapComment(currentWidth, moves[i]);
          continue;
        }
      }
      if (currentWidth + moves[i].length > maxWidth && i !== 0) {
        if (result[result.length - 1] === " ") {
          result.pop();
        }
        result.push(newline);
        currentWidth = 0;
      } else if (i !== 0) {
        result.push(" ");
        currentWidth++;
      }
      result.push(moves[i]);
      currentWidth += moves[i].length;
    }
    return result.join("");
  }
  /*
   * @deprecated Use `setHeader` and `getHeaders` instead.
   */
  header(...args) {
    for (let i = 0; i < args.length; i += 2) {
      if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
        this._header[args[i]] = args[i + 1];
      }
    }
    return this._header;
  }
  setHeader(key, value) {
    this._header[key] = value;
    return this._header;
  }
  removeHeader(key) {
    if (key in this._header) {
      delete this._header[key];
      return true;
    }
    return false;
  }
  getHeaders() {
    return this._header;
  }
  loadPgn(pgn, { strict = false, newlineChar = "\r?\n" } = {}) {
    function mask(str) {
      return str.replace(/\\/g, "\\");
    }
    function parsePgnHeader(header) {
      const headerObj = {};
      const headers2 = header.split(new RegExp(mask(newlineChar)));
      let key = "";
      let value = "";
      for (let i = 0; i < headers2.length; i++) {
        const regex = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
        key = headers2[i].replace(regex, "$1");
        value = headers2[i].replace(regex, "$2");
        if (key.trim().length > 0) {
          headerObj[key] = value;
        }
      }
      return headerObj;
    }
    pgn = pgn.trim();
    const headerRegex = new RegExp("^(\\[((?:" + mask(newlineChar) + ")|.)*\\])((?:\\s*" + mask(newlineChar) + "){2}|(?:\\s*" + mask(newlineChar) + ")*$)");
    const headerRegexResults = headerRegex.exec(pgn);
    const headerString = headerRegexResults ? headerRegexResults.length >= 2 ? headerRegexResults[1] : "" : "";
    this.reset();
    const headers = parsePgnHeader(headerString);
    let fen = "";
    for (const key in headers) {
      if (key.toLowerCase() === "fen") {
        fen = headers[key];
      }
      this.header(key, headers[key]);
    }
    if (!strict) {
      if (fen) {
        this.load(fen, { preserveHeaders: true });
      }
    } else {
      if (headers["SetUp"] === "1") {
        if (!("FEN" in headers)) {
          throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
        }
        this.load(headers["FEN"], { preserveHeaders: true });
      }
    }
    function toHex(s) {
      return Array.from(s).map(function(c) {
        return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/%/g, "").toLowerCase();
      }).join("");
    }
    function fromHex(s) {
      return s.length == 0 ? "" : decodeURIComponent("%" + (s.match(/.{1,2}/g) || []).join("%"));
    }
    const encodeComment = function(s) {
      s = s.replace(new RegExp(mask(newlineChar), "g"), " ");
      return `{${toHex(s.slice(1, s.length - 1))}}`;
    };
    const decodeComment = function(s) {
      if (s.startsWith("{") && s.endsWith("}")) {
        return fromHex(s.slice(1, s.length - 1));
      }
    };
    let ms = pgn.replace(headerString, "").replace(
      // encode comments so they don't get deleted below
      new RegExp(`({[^}]*})+?|;([^${mask(newlineChar)}]*)`, "g"),
      function(_match, bracket, semicolon) {
        return bracket !== void 0 ? encodeComment(bracket) : " " + encodeComment(`{${semicolon.slice(1)}}`);
      }
    ).replace(new RegExp(mask(newlineChar), "g"), " ");
    const ravRegex = /(\([^()]+\))+?/g;
    while (ravRegex.test(ms)) {
      ms = ms.replace(ravRegex, "");
    }
    ms = ms.replace(/\d+\.(\.\.)?/g, "");
    ms = ms.replace(/\.\.\./g, "");
    ms = ms.replace(/\$\d+/g, "");
    let moves = ms.trim().split(new RegExp(/\s+/));
    moves = moves.filter((move) => move !== "");
    let result = "";
    for (let halfMove = 0; halfMove < moves.length; halfMove++) {
      const comment = decodeComment(moves[halfMove]);
      if (comment !== void 0) {
        this._comments[this.fen()] = comment;
        continue;
      }
      const move = this._moveFromSan(moves[halfMove], strict);
      if (move == null) {
        if (TERMINATION_MARKERS.indexOf(moves[halfMove]) > -1) {
          result = moves[halfMove];
        } else {
          throw new Error(`Invalid move in PGN: ${moves[halfMove]}`);
        }
      } else {
        result = "";
        this._makeMove(move);
        this._incPositionCount(this.fen());
      }
    }
    if (result && Object.keys(this._header).length && !this._header["Result"]) {
      this.header("Result", result);
    }
  }
  /*
   * Convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} strict Use the strict SAN parser. It will throw errors
   * on overly disambiguated moves (see below):
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  _moveToSan(move, moves) {
    let output = "";
    if (move.flags & BITS.KSIDE_CASTLE) {
      output = "O-O";
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = "O-O-O";
    } else {
      if (move.piece !== PAWN) {
        const disambiguator = getDisambiguator(move, moves);
        output += move.piece.toUpperCase() + disambiguator;
      }
      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += "x";
      }
      output += algebraic(move.to);
      if (move.promotion) {
        output += "=" + move.promotion.toUpperCase();
      }
    }
    this._makeMove(move);
    if (this.isCheck()) {
      if (this.isCheckmate()) {
        output += "#";
      } else {
        output += "+";
      }
    }
    this._undoMove();
    return output;
  }
  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  _moveFromSan(move, strict = false) {
    const cleanMove = strippedSan(move);
    let pieceType = inferPieceType(cleanMove);
    let moves = this._moves({ legal: true, piece: pieceType });
    for (let i = 0, len = moves.length; i < len; i++) {
      if (cleanMove === strippedSan(this._moveToSan(moves[i], moves))) {
        return moves[i];
      }
    }
    if (strict) {
      return null;
    }
    let piece = void 0;
    let matches = void 0;
    let from = void 0;
    let to = void 0;
    let promotion = void 0;
    let overlyDisambiguated = false;
    matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
    if (matches) {
      piece = matches[1];
      from = matches[2];
      to = matches[3];
      promotion = matches[4];
      if (from.length == 1) {
        overlyDisambiguated = true;
      }
    } else {
      matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        piece = matches[1];
        from = matches[2];
        to = matches[3];
        promotion = matches[4];
        if (from.length == 1) {
          overlyDisambiguated = true;
        }
      }
    }
    pieceType = inferPieceType(cleanMove);
    moves = this._moves({
      legal: true,
      piece: piece ? piece : pieceType
    });
    if (!to) {
      return null;
    }
    for (let i = 0, len = moves.length; i < len; i++) {
      if (!from) {
        if (cleanMove === strippedSan(this._moveToSan(moves[i], moves)).replace("x", "")) {
          return moves[i];
        }
      } else if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[from] == moves[i].from && Ox88[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
        return moves[i];
      } else if (overlyDisambiguated) {
        const square = algebraic(moves[i].from);
        if ((!piece || piece.toLowerCase() == moves[i].piece) && Ox88[to] == moves[i].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        }
      }
    }
    return null;
  }
  ascii() {
    let s = "   +------------------------+\n";
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (file(i) === 0) {
        s += " " + "87654321"[rank(i)] + " |";
      }
      if (this._board[i]) {
        const piece = this._board[i].type;
        const color = this._board[i].color;
        const symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        s += " " + symbol + " ";
      } else {
        s += " . ";
      }
      if (i + 1 & 136) {
        s += "|\n";
        i += 8;
      }
    }
    s += "   +------------------------+\n";
    s += "     a  b  c  d  e  f  g  h";
    return s;
  }
  perft(depth) {
    const moves = this._moves({ legal: false });
    let nodes = 0;
    const color = this._turn;
    for (let i = 0, len = moves.length; i < len; i++) {
      this._makeMove(moves[i]);
      if (!this._isKingAttacked(color)) {
        if (depth - 1 > 0) {
          nodes += this.perft(depth - 1);
        } else {
          nodes++;
        }
      }
      this._undoMove();
    }
    return nodes;
  }
  turn() {
    return this._turn;
  }
  board() {
    const output = [];
    let row = [];
    for (let i = Ox88.a8; i <= Ox88.h1; i++) {
      if (this._board[i] == null) {
        row.push(null);
      } else {
        row.push({
          square: algebraic(i),
          type: this._board[i].type,
          color: this._board[i].color
        });
      }
      if (i + 1 & 136) {
        output.push(row);
        row = [];
        i += 8;
      }
    }
    return output;
  }
  squareColor(square) {
    if (square in Ox88) {
      const sq = Ox88[square];
      return (rank(sq) + file(sq)) % 2 === 0 ? "light" : "dark";
    }
    return null;
  }
  history({ verbose = false } = {}) {
    const reversedHistory = [];
    const moveHistory = [];
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    while (true) {
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      if (verbose) {
        moveHistory.push(new Move(this, move));
      } else {
        moveHistory.push(this._moveToSan(move, this._moves()));
      }
      this._makeMove(move);
    }
    return moveHistory;
  }
  /*
   * Keeps track of position occurrence counts for the purpose of repetition
   * checking. All three methods (`_inc`, `_dec`, and `_get`) trim the
   * irrelevent information from the fen, initialising new positions, and
   * removing old positions from the record if their counts are reduced to 0.
   */
  _getPositionCount(fen) {
    const trimmedFen = trimFen(fen);
    return this._positionCount[trimmedFen] || 0;
  }
  _incPositionCount(fen) {
    const trimmedFen = trimFen(fen);
    if (this._positionCount[trimmedFen] === void 0) {
      this._positionCount[trimmedFen] = 0;
    }
    this._positionCount[trimmedFen] += 1;
  }
  _decPositionCount(fen) {
    const trimmedFen = trimFen(fen);
    if (this._positionCount[trimmedFen] === 1) {
      delete this._positionCount[trimmedFen];
    } else {
      this._positionCount[trimmedFen] -= 1;
    }
  }
  _pruneComments() {
    const reversedHistory = [];
    const currentComments = {};
    const copyComment = (fen) => {
      if (fen in this._comments) {
        currentComments[fen] = this._comments[fen];
      }
    };
    while (this._history.length > 0) {
      reversedHistory.push(this._undoMove());
    }
    copyComment(this.fen());
    while (true) {
      const move = reversedHistory.pop();
      if (!move) {
        break;
      }
      this._makeMove(move);
      copyComment(this.fen());
    }
    this._comments = currentComments;
  }
  getComment() {
    return this._comments[this.fen()];
  }
  setComment(comment) {
    this._comments[this.fen()] = comment.replace("{", "[").replace("}", "]");
  }
  /**
   * @deprecated Renamed to `removeComment` for consistency
   */
  deleteComment() {
    return this.removeComment();
  }
  removeComment() {
    const comment = this._comments[this.fen()];
    delete this._comments[this.fen()];
    return comment;
  }
  getComments() {
    this._pruneComments();
    return Object.keys(this._comments).map((fen) => {
      return { fen, comment: this._comments[fen] };
    });
  }
  /**
   * @deprecated Renamed to `removeComments` for consistency
   */
  deleteComments() {
    return this.removeComments();
  }
  removeComments() {
    this._pruneComments();
    return Object.keys(this._comments).map((fen) => {
      const comment = this._comments[fen];
      delete this._comments[fen];
      return { fen, comment };
    });
  }
  setCastlingRights(color, rights) {
    for (const side of [KING, QUEEN]) {
      if (rights[side] !== void 0) {
        if (rights[side]) {
          this._castling[color] |= SIDES[side];
        } else {
          this._castling[color] &= ~SIDES[side];
        }
      }
    }
    this._updateCastlingRights();
    const result = this.getCastlingRights(color);
    return (rights[KING] === void 0 || rights[KING] === result[KING]) && (rights[QUEEN] === void 0 || rights[QUEEN] === result[QUEEN]);
  }
  getCastlingRights(color) {
    return {
      [KING]: (this._castling[color] & SIDES[KING]) !== 0,
      [QUEEN]: (this._castling[color] & SIDES[QUEEN]) !== 0
    };
  }
  moveNumber() {
    return this._moveNumber;
  }
}
const SMALLEST_UNSAFE_INTEGER = 9007199254740992;
const LARGEST_SAFE_INTEGER = SMALLEST_UNSAFE_INTEGER - 1;
const UINT32_MAX = -1 >>> 0;
const UINT32_SIZE = UINT32_MAX + 1;
const INT32_SIZE = UINT32_SIZE / 2;
const UINT21_SIZE = 1 << 21;
const UINT21_MAX = UINT21_SIZE - 1;
function int32(engine) {
  return engine.next() | 0;
}
function add(distribution, addend) {
  if (addend === 0) {
    return distribution;
  } else {
    return (engine) => distribution(engine) + addend;
  }
}
function int53(engine) {
  const high = engine.next() | 0;
  const low = engine.next() >>> 0;
  return (high & UINT21_MAX) * UINT32_SIZE + low + (high & UINT21_SIZE ? -9007199254740992 : 0);
}
function int53Full(engine) {
  while (true) {
    const high = engine.next() | 0;
    if (high & 4194304) {
      if ((high & 8388607) === 4194304 && (engine.next() | 0) === 0) {
        return SMALLEST_UNSAFE_INTEGER;
      }
    } else {
      const low = engine.next() >>> 0;
      return (high & UINT21_MAX) * UINT32_SIZE + low + (high & UINT21_SIZE ? -9007199254740992 : 0);
    }
  }
}
function uint32(engine) {
  return engine.next() >>> 0;
}
function uint53(engine) {
  const high = engine.next() & UINT21_MAX;
  const low = engine.next() >>> 0;
  return high * UINT32_SIZE + low;
}
function uint53Full(engine) {
  while (true) {
    const high = engine.next() | 0;
    if (high & UINT21_SIZE) {
      if ((high & UINT21_MAX) === 0 && (engine.next() | 0) === 0) {
        return SMALLEST_UNSAFE_INTEGER;
      }
    } else {
      const low = engine.next() >>> 0;
      return (high & UINT21_MAX) * UINT32_SIZE + low;
    }
  }
}
function isPowerOfTwoMinusOne(value) {
  return (value + 1 & value) === 0;
}
function bitmask(masking) {
  return (engine) => engine.next() & masking;
}
function downscaleToLoopCheckedRange(range) {
  const extendedRange = range + 1;
  const maximum = extendedRange * Math.floor(UINT32_SIZE / extendedRange);
  return (engine) => {
    let value = 0;
    do {
      value = engine.next() >>> 0;
    } while (value >= maximum);
    return value % extendedRange;
  };
}
function downscaleToRange(range) {
  if (isPowerOfTwoMinusOne(range)) {
    return bitmask(range);
  } else {
    return downscaleToLoopCheckedRange(range);
  }
}
function isEvenlyDivisibleByMaxInt32(value) {
  return (value | 0) === 0;
}
function upscaleWithHighMasking(masking) {
  return (engine) => {
    const high = engine.next() & masking;
    const low = engine.next() >>> 0;
    return high * UINT32_SIZE + low;
  };
}
function upscaleToLoopCheckedRange(extendedRange) {
  const maximum = extendedRange * Math.floor(SMALLEST_UNSAFE_INTEGER / extendedRange);
  return (engine) => {
    let ret = 0;
    do {
      const high = engine.next() & UINT21_MAX;
      const low = engine.next() >>> 0;
      ret = high * UINT32_SIZE + low;
    } while (ret >= maximum);
    return ret % extendedRange;
  };
}
function upscaleWithinU53(range) {
  const extendedRange = range + 1;
  if (isEvenlyDivisibleByMaxInt32(extendedRange)) {
    const highRange = (extendedRange / UINT32_SIZE | 0) - 1;
    if (isPowerOfTwoMinusOne(highRange)) {
      return upscaleWithHighMasking(highRange);
    }
  }
  return upscaleToLoopCheckedRange(extendedRange);
}
function upscaleWithinI53AndLoopCheck(min, max) {
  return (engine) => {
    let ret = 0;
    do {
      const high = engine.next() | 0;
      const low = engine.next() >>> 0;
      ret = (high & UINT21_MAX) * UINT32_SIZE + low + (high & UINT21_SIZE ? -9007199254740992 : 0);
    } while (ret < min || ret > max);
    return ret;
  };
}
function integer(min, max) {
  min = Math.floor(min);
  max = Math.floor(max);
  if (min < -9007199254740992 || !isFinite(min)) {
    throw new RangeError(`Expected min to be at least ${-9007199254740992}`);
  } else if (max > SMALLEST_UNSAFE_INTEGER || !isFinite(max)) {
    throw new RangeError(`Expected max to be at most ${SMALLEST_UNSAFE_INTEGER}`);
  }
  const range = max - min;
  if (range <= 0 || !isFinite(range)) {
    return () => min;
  } else if (range === UINT32_MAX) {
    if (min === 0) {
      return uint32;
    } else {
      return add(int32, min + INT32_SIZE);
    }
  } else if (range < UINT32_MAX) {
    return add(downscaleToRange(range), min);
  } else if (range === LARGEST_SAFE_INTEGER) {
    return add(uint53, min);
  } else if (range < LARGEST_SAFE_INTEGER) {
    return add(upscaleWithinU53(range), min);
  } else if (max - 1 - min === LARGEST_SAFE_INTEGER) {
    return add(uint53Full, min);
  } else if (min === -9007199254740992 && max === SMALLEST_UNSAFE_INTEGER) {
    return int53Full;
  } else if (min === -9007199254740992 && max === LARGEST_SAFE_INTEGER) {
    return int53;
  } else if (min === -9007199254740991 && max === SMALLEST_UNSAFE_INTEGER) {
    return add(int53, 1);
  } else if (max === SMALLEST_UNSAFE_INTEGER) {
    return add(upscaleWithinI53AndLoopCheck(min - 1, max - 1), 1);
  } else {
    return upscaleWithinI53AndLoopCheck(min, max);
  }
}
function isLeastBitTrue(engine) {
  return (engine.next() & 1) === 1;
}
function lessThan(distribution, value) {
  return (engine) => distribution(engine) < value;
}
function probability(percentage) {
  if (percentage <= 0) {
    return () => false;
  } else if (percentage >= 1) {
    return () => true;
  } else {
    const scaled = percentage * UINT32_SIZE;
    if (scaled % 1 === 0) {
      return lessThan(int32, scaled - INT32_SIZE | 0);
    } else {
      return lessThan(uint53, Math.round(percentage * SMALLEST_UNSAFE_INTEGER));
    }
  }
}
function bool(numerator, denominator) {
  if (denominator == null) {
    if (numerator == null) {
      return isLeastBitTrue;
    }
    return probability(numerator);
  } else {
    if (numerator <= 0) {
      return () => false;
    } else if (numerator >= denominator) {
      return () => true;
    }
    return lessThan(integer(0, denominator - 1), numerator);
  }
}
function date(start, end) {
  const distribution = integer(+start, +end);
  return (engine) => new Date(distribution(engine));
}
function die(sideCount) {
  return integer(1, sideCount);
}
function dice(sideCount, dieCount) {
  const distribution = die(sideCount);
  return (engine) => {
    const result = [];
    for (let i = 0; i < dieCount; ++i) {
      result.push(distribution(engine));
    }
    return result;
  };
}
const DEFAULT_STRING_POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
function string(pool = DEFAULT_STRING_POOL) {
  const poolLength = pool.length;
  if (!poolLength) {
    throw new Error("Expected pool not to be an empty string");
  }
  const distribution = integer(0, poolLength - 1);
  return (engine, length) => {
    let result = "";
    for (let i = 0; i < length; ++i) {
      const j = distribution(engine);
      result += pool.charAt(j);
    }
    return result;
  };
}
const LOWER_HEX_POOL = "0123456789abcdef";
const lowerHex = string(LOWER_HEX_POOL);
const upperHex = string(LOWER_HEX_POOL.toUpperCase());
function hex(uppercase) {
  if (uppercase) {
    return upperHex;
  } else {
    return lowerHex;
  }
}
function convertSliceArgument(value, length) {
  if (value < 0) {
    return Math.max(value + length, 0);
  } else {
    return Math.min(value, length);
  }
}
function toInteger(value) {
  const num = +value;
  if (num < 0) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
}
function pick(engine, source, begin, end) {
  const length = source.length;
  if (length === 0) {
    throw new RangeError("Cannot pick from an empty array");
  }
  const start = begin == null ? 0 : convertSliceArgument(toInteger(begin), length);
  const finish = end === void 0 ? length : convertSliceArgument(toInteger(end), length);
  if (start >= finish) {
    throw new RangeError(`Cannot pick between bounds ${start} and ${finish}`);
  }
  const distribution = integer(start, finish - 1);
  return source[distribution(engine)];
}
function multiply(distribution, multiplier) {
  if (multiplier === 1) {
    return distribution;
  } else if (multiplier === 0) {
    return () => 0;
  } else {
    return (engine) => distribution(engine) * multiplier;
  }
}
function realZeroToOneExclusive(engine) {
  return uint53(engine) / SMALLEST_UNSAFE_INTEGER;
}
function realZeroToOneInclusive(engine) {
  return uint53Full(engine) / SMALLEST_UNSAFE_INTEGER;
}
function real(min, max, inclusive = false) {
  if (!isFinite(min)) {
    throw new RangeError("Expected min to be a finite number");
  } else if (!isFinite(max)) {
    throw new RangeError("Expected max to be a finite number");
  }
  return add(multiply(inclusive ? realZeroToOneInclusive : realZeroToOneExclusive, max - min), min);
}
const sliceArray = Array.prototype.slice;
function shuffle(engine, array, downTo = 0) {
  const length = array.length;
  if (length) {
    for (let i = length - 1 >>> 0; i > downTo; --i) {
      const distribution = integer(0, i);
      const j = distribution(engine);
      if (i !== j) {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}
function sample(engine, population, sampleSize) {
  if (sampleSize < 0 || sampleSize > population.length || !isFinite(sampleSize)) {
    throw new RangeError("Expected sampleSize to be within 0 and the length of the population");
  }
  if (sampleSize === 0) {
    return [];
  }
  const clone = sliceArray.call(population);
  const length = clone.length;
  if (length === sampleSize) {
    return shuffle(engine, clone, 0);
  }
  const tailLength = length - sampleSize;
  return shuffle(engine, clone, tailLength - 1).slice(tailLength);
}
const stringRepeat = (() => {
  try {
    if ("x".repeat(3) === "xxx") {
      return (pattern, count) => pattern.repeat(count);
    }
  } catch (_) {
  }
  return (pattern, count) => {
    let result = "";
    while (count > 0) {
      if (count & 1) {
        result += pattern;
      }
      count >>= 1;
      pattern += pattern;
    }
    return result;
  };
})();
function zeroPad(text, zeroCount) {
  return stringRepeat("0", zeroCount - text.length) + text;
}
function uuid4(engine) {
  const a = engine.next() >>> 0;
  const b = engine.next() | 0;
  const c = engine.next() | 0;
  const d = engine.next() >>> 0;
  return zeroPad(a.toString(16), 8) + "-" + zeroPad((b & 65535).toString(16), 4) + "-" + zeroPad((b >> 4 & 4095 | 16384).toString(16), 4) + "-" + zeroPad((c & 16383 | 32768).toString(16), 4) + "-" + zeroPad((c >> 4 & 65535).toString(16), 4) + zeroPad(d.toString(16), 8);
}
const nativeMath = {
  next() {
    return Math.random() * UINT32_SIZE | 0;
  }
};
class Random {
  /**
   * Creates a new Random wrapper
   * @param engine The engine to use (defaults to a `Math.random`-based implementation)
   */
  constructor(engine = nativeMath) {
    this.engine = engine;
  }
  /**
   * Returns a value within [-0x80000000, 0x7fffffff]
   */
  int32() {
    return int32(this.engine);
  }
  /**
   * Returns a value within [0, 0xffffffff]
   */
  uint32() {
    return uint32(this.engine);
  }
  /**
   * Returns a value within [0, 0x1fffffffffffff]
   */
  uint53() {
    return uint53(this.engine);
  }
  /**
   * Returns a value within [0, 0x20000000000000]
   */
  uint53Full() {
    return uint53Full(this.engine);
  }
  /**
   * Returns a value within [-0x20000000000000, 0x1fffffffffffff]
   */
  int53() {
    return int53(this.engine);
  }
  /**
   * Returns a value within [-0x20000000000000, 0x20000000000000]
   */
  int53Full() {
    return int53Full(this.engine);
  }
  /**
   * Returns a value within [min, max]
   * @param min The minimum integer value, inclusive. No less than -0x20000000000000.
   * @param max The maximum integer value, inclusive. No greater than 0x20000000000000.
   */
  integer(min, max) {
    return integer(min, max)(this.engine);
  }
  /**
   * Returns a floating-point value within [0.0, 1.0]
   */
  realZeroToOneInclusive() {
    return realZeroToOneInclusive(this.engine);
  }
  /**
   * Returns a floating-point value within [0.0, 1.0)
   */
  realZeroToOneExclusive() {
    return realZeroToOneExclusive(this.engine);
  }
  /**
   * Returns a floating-point value within [min, max) or [min, max]
   * @param min The minimum floating-point value, inclusive.
   * @param max The maximum floating-point value.
   * @param inclusive If true, `max` will be inclusive.
   */
  real(min, max, inclusive = false) {
    return real(min, max, inclusive)(this.engine);
  }
  bool(numerator, denominator) {
    return bool(numerator, denominator)(this.engine);
  }
  /**
   * Return a random value within the provided `source` within the sliced
   * bounds of `begin` and `end`.
   * @param source an array of items to pick from
   * @param begin the beginning slice index (defaults to `0`)
   * @param end the ending slice index (defaults to `source.length`)
   */
  pick(source, begin, end) {
    return pick(this.engine, source, begin, end);
  }
  /**
   * Shuffles an array in-place
   * @param array The array to shuffle
   */
  shuffle(array) {
    return shuffle(this.engine, array);
  }
  /**
   * From the population array, returns an array with sampleSize elements that
   * are randomly chosen without repeats.
   * @param population An array that has items to choose a sample from
   * @param sampleSize The size of the result array
   */
  sample(population, sampleSize) {
    return sample(this.engine, population, sampleSize);
  }
  /**
   * Returns a value within [1, sideCount]
   * @param sideCount The number of sides of the die
   */
  die(sideCount) {
    return die(sideCount)(this.engine);
  }
  /**
   * Returns an array of length `dieCount` of values within [1, sideCount]
   * @param sideCount The number of sides of each die
   * @param dieCount The number of dice
   */
  dice(sideCount, dieCount) {
    return dice(sideCount, dieCount)(this.engine);
  }
  /**
   * Returns a Universally Unique Identifier Version 4.
   *
   * See http://en.wikipedia.org/wiki/Universally_unique_identifier
   */
  uuid4() {
    return uuid4(this.engine);
  }
  string(length, pool) {
    return string(pool)(this.engine, length);
  }
  /**
   * Returns a random string comprised of numbers or the characters `abcdef`
   * (or `ABCDEF`) of length `length`.
   * @param length Length of the result string
   * @param uppercase Whether the string should use `ABCDEF` instead of `abcdef`
   */
  hex(length, uppercase) {
    return hex(uppercase)(this.engine, length);
  }
  /**
   * Returns a random `Date` within the inclusive range of [`start`, `end`].
   * @param start The minimum `Date`
   * @param end The maximum `Date`
   */
  date(start, end) {
    return date(start, end)(this.engine);
  }
}
(() => {
  try {
    const buffer = new ArrayBuffer(4);
    const view = new Int32Array(buffer);
    view[0] = INT32_SIZE;
    if (view[0] === -INT32_SIZE) {
      return Int32Array;
    }
  } catch (_) {
  }
  return Array;
})();
(() => {
  try {
    if (Math.imul(UINT32_MAX, 5) === -5) {
      return Math.imul;
    }
  } catch (_) {
  }
  const UINT16_MAX = 65535;
  return (a, b) => {
    const ah = a >>> 16 & UINT16_MAX;
    const al = a & UINT16_MAX;
    const bh = b >>> 16 & UINT16_MAX;
    const bl = b & UINT16_MAX;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  };
})();
var stockfish_wasm = { exports: {} };
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
/*!
 * Stockfish copyright T. Romstad, M. Costalba, J. Kiiski, G. Linscott
 * and other contributors.
 *
 * Multi-variant support by Daniel Dugovic and contributors:
 * https://github.com/ddugovic/Stockfish
 *
 * Released under the GNU General Public License v3.
 *
 * Compiled to JavaScript and Webassembly by Niklas Fiekas
 * <niklas.fiekas@backscattering.de> using Emscripten and Binaryen.
 *
 * https://github.com/niklasf/stockfish.js
 */
stockfish_wasm.exports;
var hasRequiredStockfish_wasm;
function requireStockfish_wasm() {
  if (hasRequiredStockfish_wasm) return stockfish_wasm.exports;
  hasRequiredStockfish_wasm = 1;
  (function(module) {
    var Module = void 0 !== Module ? Module : {};
    Module = function() {
      var r = [];
      return onmessage = function(e) {
        "quit" == e.data ? close() : null !== r ? r.push(e.data) : Module.ccall("uci_command", "number", ["string"], [e.data]);
      }, { locateFile: function(e) {
        return e;
      }, print: function(e) {
        postMessage(e);
      }, postRun: function() {
        for (var e = 0; e < r.length; e++) Module.ccall("uci_command", "number", ["string"], [r[e]]);
        r = null;
      } };
    }();
    var key, moduleOverrides = {};
    for (key in Module) Module.hasOwnProperty(key) && (moduleOverrides[key] = Module[key]);
    var arguments_ = [], thisProgram = "./this.program", quit_ = function(e, r) {
      throw r;
    }, ENVIRONMENT_IS_WEB = false, ENVIRONMENT_IS_WORKER = false, ENVIRONMENT_IS_NODE = false, ENVIRONMENT_HAS_NODE = false, ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = "object" == typeof window, ENVIRONMENT_IS_WORKER = "function" == typeof importScripts, ENVIRONMENT_HAS_NODE = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER, ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var read_, readAsync, readBinary, nodeFS, nodePath, scriptDirectory = "";
    function locateFile(e) {
      return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
    }
    ENVIRONMENT_IS_NODE ? (scriptDirectory = __dirname + "/", read_ = function(e, r) {
      var t;
      return nodeFS = nodeFS || require$$1, e = (nodePath = nodePath || require$$1).normalize(e), t = nodeFS.readFileSync(e), r ? t : t.toString();
    }, readBinary = function(e) {
      var r = read_(e, true);
      return r.buffer || (r = new Uint8Array(r)), assert(r.buffer), r;
    }, 1 < process.argv.length && (thisProgram = process.argv[1].replace(/\\/g, "/")), arguments_ = process.argv.slice(2), module.exports = Module, process.on("uncaughtException", function(e) {
      if (!(e instanceof ExitStatus)) throw e;
    }), process.on("unhandledRejection", abort), quit_ = function(e) {
      process.exit(e);
    }, Module.inspect = function() {
      return "[Emscripten Module object]";
    }) : ENVIRONMENT_IS_SHELL ? ("undefined" != typeof read && (read_ = function(e) {
      return read(e);
    }), readBinary = function(e) {
      var r;
      return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (assert("object" == typeof (r = read(e, "binary"))), r);
    }, "undefined" != typeof scriptArgs ? arguments_ = scriptArgs : "undefined" != typeof arguments && (arguments_ = arguments), "function" == typeof quit && (quit_ = function(e) {
      quit(e);
    }), "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && (ENVIRONMENT_IS_WORKER ? scriptDirectory = self.location.href : document.currentScript && (scriptDirectory = document.currentScript.src), scriptDirectory = 0 !== scriptDirectory.indexOf("blob:") ? scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1) : "", read_ = function(e) {
      var r = new XMLHttpRequest();
      return r.open("GET", e, false), r.send(null), r.responseText;
    }, ENVIRONMENT_IS_WORKER && (readBinary = function(e) {
      var r = new XMLHttpRequest();
      return r.open("GET", e, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
    }), readAsync = function(e, r, t) {
      var n = new XMLHttpRequest();
      n.open("GET", e, true), n.responseType = "arraybuffer", n.onload = function() {
        200 == n.status || 0 == n.status && n.response ? r(n.response) : t();
      }, n.onerror = t, n.send(null);
    }, function(e) {
      document.title = e;
    });
    var out = Module.print || console.log.bind(console), err = Module.printErr || console.warn.bind(console);
    for (key in moduleOverrides) moduleOverrides.hasOwnProperty(key) && (Module[key] = moduleOverrides[key]);
    function warnOnce(e) {
      warnOnce.shown || (warnOnce.shown = {}), warnOnce.shown[e] || (warnOnce.shown[e] = 1, err(e));
    }
    moduleOverrides = null, Module.arguments && (arguments_ = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram), Module.quit && (quit_ = Module.quit);
    var asm2wasmImports = { "f64-rem": function(e, r) {
      return e % r;
    }, debugger: function() {
    } };
    new Array(0);
    var funcWrappers = {};
    function getFuncWrapper(r, t) {
      if (r) {
        assert(t), funcWrappers[t] || (funcWrappers[t] = {});
        var e = funcWrappers[t];
        return e[r] || (1 === t.length ? e[r] = function() {
          return dynCall(t, r);
        } : 2 === t.length ? e[r] = function(e2) {
          return dynCall(t, r, [e2]);
        } : e[r] = function() {
          return dynCall(t, r, Array.prototype.slice.call(arguments));
        }), e[r];
      }
    }
    function dynCall(e, r, t) {
      return t && t.length ? Module["dynCall_" + e].apply(null, [r].concat(t)) : Module["dynCall_" + e].call(null, r);
    }
    var wasmBinary, wasmMemory, tempRet0 = 0, setTempRet0 = function(e) {
      tempRet0 = e;
    }, getTempRet0 = function() {
      return tempRet0;
    };
    Module.wasmBinary && (wasmBinary = Module.wasmBinary), "object" != typeof WebAssembly && err("no native wasm support detected");
    var ABORT = false;
    function assert(e, r) {
      e || abort("Assertion failed: " + r);
    }
    function getCFunc(e) {
      var r = Module["_" + e];
      return assert(r, "Cannot call unknown function " + e + ", make sure it is exported"), r;
    }
    function ccall(e, r, t, n, o) {
      var i = { string: function(e2) {
        var r2 = 0;
        if (null != e2 && 0 !== e2) {
          var t2 = 1 + (e2.length << 2);
          stringToUTF8(e2, r2 = stackAlloc(t2), t2);
        }
        return r2;
      }, array: function(e2) {
        var r2 = stackAlloc(e2.length);
        return writeArrayToMemory(e2, r2), r2;
      } };
      var a = getCFunc(e), s = [], u = 0;
      if (n) for (var l = 0; l < n.length; l++) {
        var c = i[t[l]];
        c ? (0 === u && (u = stackSave()), s[l] = c(n[l])) : s[l] = n[l];
      }
      var d, f = a.apply(null, s);
      return d = f, f = "string" === r ? UTF8ToString(d) : "boolean" === r ? Boolean(d) : d, 0 !== u && stackRestore(u), f;
    }
    var UTF8Decoder = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(e, r, t) {
      for (var n = r + t, o = r; e[o] && !(n <= o); ) ++o;
      if (16 < o - r && e.subarray && UTF8Decoder) return UTF8Decoder.decode(e.subarray(r, o));
      for (var i = ""; r < o; ) {
        var a = e[r++];
        if (128 & a) {
          var s = 63 & e[r++];
          if (192 != (224 & a)) {
            var u = 63 & e[r++];
            if ((a = 224 == (240 & a) ? (15 & a) << 12 | s << 6 | u : (7 & a) << 18 | s << 12 | u << 6 | 63 & e[r++]) < 65536) i += String.fromCharCode(a);
            else {
              var l = a - 65536;
              i += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l);
            }
          } else i += String.fromCharCode((31 & a) << 6 | s);
        } else i += String.fromCharCode(a);
      }
      return i;
    }
    function UTF8ToString(e, r) {
      return e ? UTF8ArrayToString(HEAPU8, e, r) : "";
    }
    function stringToUTF8Array(e, r, t, n) {
      if (!(0 < n)) return 0;
      for (var o = t, i = t + n - 1, a = 0; a < e.length; ++a) {
        var s = e.charCodeAt(a);
        if (55296 <= s && s <= 57343) s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++a);
        if (s <= 127) {
          if (i <= t) break;
          r[t++] = s;
        } else if (s <= 2047) {
          if (i <= t + 1) break;
          r[t++] = 192 | s >> 6, r[t++] = 128 | 63 & s;
        } else if (s <= 65535) {
          if (i <= t + 2) break;
          r[t++] = 224 | s >> 12, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | 63 & s;
        } else {
          if (i <= t + 3) break;
          r[t++] = 240 | s >> 18, r[t++] = 128 | s >> 12 & 63, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | 63 & s;
        }
      }
      return r[t] = 0, t - o;
    }
    function stringToUTF8(e, r, t) {
      return stringToUTF8Array(e, HEAPU8, r, t);
    }
    function lengthBytesUTF8(e) {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var n = e.charCodeAt(t);
        55296 <= n && n <= 57343 && (n = 65536 + ((1023 & n) << 10) | 1023 & e.charCodeAt(++t)), n <= 127 ? ++r : r += n <= 2047 ? 2 : n <= 65535 ? 3 : 4;
      }
      return r;
    }
    "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
    function allocateUTF8(e) {
      var r = lengthBytesUTF8(e) + 1, t = _malloc(r);
      return t && stringToUTF8Array(e, HEAP8, t, r), t;
    }
    function allocateUTF8OnStack(e) {
      var r = lengthBytesUTF8(e) + 1, t = stackAlloc(r);
      return stringToUTF8Array(e, HEAP8, t, r), t;
    }
    function writeArrayToMemory(e, r) {
      HEAP8.set(e, r);
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAP32, HEAPU32, WASM_PAGE_SIZE = 65536;
    function updateGlobalBufferViews() {
      Module.HEAP8 = HEAP8 = new Int8Array(buffer), Module.HEAP16 = HEAP16 = new Int16Array(buffer), Module.HEAP32 = HEAP32 = new Int32Array(buffer), Module.HEAPU8 = HEAPU8 = new Uint8Array(buffer), Module.HEAPU16 = new Uint16Array(buffer), Module.HEAPU32 = HEAPU32 = new Uint32Array(buffer), Module.HEAPF32 = new Float32Array(buffer), Module.HEAPF64 = new Float64Array(buffer);
    }
    var DYNAMIC_BASE = 6352512, DYNAMICTOP_PTR = 1109600, INITIAL_TOTAL_MEMORY = Module.TOTAL_MEMORY || 33554432;
    function callRuntimeCallbacks(e) {
      for (; 0 < e.length; ) {
        var r = e.shift();
        if ("function" != typeof r) {
          var t = r.func;
          "number" == typeof t ? void 0 === r.arg ? Module.dynCall_v(t) : Module.dynCall_vi(t, r.arg) : t(void 0 === r.arg ? null : r.arg);
        } else r();
      }
    }
    (wasmMemory = Module.wasmMemory ? Module.wasmMemory : new WebAssembly.Memory({ initial: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE, maximum: INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE })) && (buffer = wasmMemory.buffer), INITIAL_TOTAL_MEMORY = buffer.byteLength, updateGlobalBufferViews(), HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
    var __ATPRERUN__ = [], __ATINIT__ = [], __ATMAIN__ = [], __ATPOSTRUN__ = [];
    function preRun() {
      if (Module.preRun) for ("function" == typeof Module.preRun && (Module.preRun = [Module.preRun]); Module.preRun.length; ) addOnPreRun(Module.preRun.shift());
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      Module.noFSInit || FS.init.initialized || FS.init(), callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      FS.ignorePermissions = false, callRuntimeCallbacks(__ATMAIN__);
    }
    function postRun() {
      if (Module.postRun) for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); Module.postRun.length; ) addOnPostRun(Module.postRun.shift());
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(e) {
      __ATPRERUN__.unshift(e);
    }
    function addOnPostRun(e) {
      __ATPOSTRUN__.unshift(e);
    }
    var Math_abs = Math.abs, Math_ceil = Math.ceil, Math_floor = Math.floor, Math_min = Math.min, runDependencies = 0, dependenciesFulfilled = null;
    function getUniqueRunDependency(e) {
      return e;
    }
    function addRunDependency(e) {
      runDependencies++, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies);
    }
    function removeRunDependency(e) {
      if (runDependencies--, Module.monitorRunDependencies && Module.monitorRunDependencies(runDependencies), 0 == runDependencies && dependenciesFulfilled) {
        var r = dependenciesFulfilled;
        dependenciesFulfilled = null, r();
      }
    }
    Module.preloadedImages = {}, Module.preloadedAudios = {};
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(e) {
      return String.prototype.startsWith ? e.startsWith(dataURIPrefix) : 0 === e.indexOf(dataURIPrefix);
    }
    var tempDouble, tempI64, wasmBinaryFile = "stockfish.wasm";
    function getBinary() {
      try {
        if (wasmBinary) return new Uint8Array(wasmBinary);
        if (readBinary) return readBinary(wasmBinaryFile);
        throw "both async and sync fetching of the wasm failed";
      } catch (e) {
        abort(e);
      }
    }
    function getBinaryPromise() {
      return wasmBinary || !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER || "function" != typeof fetch ? new Promise(function(e, r) {
        e(getBinary());
      }) : fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(e) {
        if (!e.ok) throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        return e.arrayBuffer();
      }).catch(function() {
        return getBinary();
      });
    }
    function createWasm(e) {
      var r = { env: e, global: { NaN: NaN, Infinity: 1 / 0 }, "global.Math": Math, asm2wasm: asm2wasmImports };
      function t(e2, r2) {
        var t2 = e2.exports;
        Module.asm = t2, removeRunDependency();
      }
      function n(e2) {
        t(e2.instance);
      }
      function o(e2) {
        return getBinaryPromise().then(function(e3) {
          return WebAssembly.instantiate(e3, r);
        }).then(e2, function(e3) {
          err("failed to asynchronously prepare wasm: " + e3), abort(e3);
        });
      }
      if (addRunDependency(), Module.instantiateWasm) try {
        return Module.instantiateWasm(r, t);
      } catch (e2) {
        return err("Module.instantiateWasm callback failed with error: " + e2), false;
      }
      return function() {
        if (wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || isDataURI(wasmBinaryFile) || "function" != typeof fetch) return o(n);
        fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(e2) {
          return WebAssembly.instantiateStreaming(e2, r).then(n, function(e3) {
            err("wasm streaming compile failed: " + e3), err("falling back to ArrayBuffer instantiation"), o(n);
          });
        });
      }(), {};
    }
    function demangle(e) {
      return e;
    }
    function demangleAll(e) {
      return e.replace(/__Z[\w\d_]+/g, function(e2) {
        var r = demangle(e2);
        return e2 === r ? e2 : r + " [" + e2 + "]";
      });
    }
    function jsStackTrace() {
      var r = new Error();
      if (!r.stack) {
        try {
          throw new Error(0);
        } catch (e) {
          r = e;
        }
        if (!r.stack) return "(no stack trace available)";
      }
      return r.stack.toString();
    }
    function stackTrace() {
      var e = jsStackTrace();
      return Module.extraStackTrace && (e += "\n" + Module.extraStackTrace()), demangleAll(e);
    }
    function ___atomic_fetch_add_8(e, r, t, n) {
      var o = HEAP32[e >> 2], i = HEAP32[e + 4 >> 2];
      return HEAP32[e >> 2] = _i64Add(o, i, r, t), HEAP32[e + 4 >> 2] = getTempRet0(), 0 | (setTempRet0(i), o);
    }
    function ___cxa_allocate_exception(e) {
      return _malloc(e);
    }
    isDataURI(wasmBinaryFile) || (wasmBinaryFile = locateFile(wasmBinaryFile)), Module.asm = function(e, r, t) {
      return r.memory = wasmMemory, r.table = new WebAssembly.Table({ initial: 733, maximum: 733, element: "anyfunc" }), r.__memory_base = 1024, r.__table_base = 0, createWasm(r);
    }, __ATINIT__.push({ func: function() {
      globalCtors();
    } });
    function ___cxa_throw(e, r, t) {
      throw "uncaught_exception" in __ZSt18uncaught_exceptionv ? __ZSt18uncaught_exceptionv.uncaught_exceptions++ : __ZSt18uncaught_exceptionv.uncaught_exceptions = 1, e;
    }
    function ___cxa_uncaught_exceptions() {
      return __ZSt18uncaught_exceptionv.uncaught_exceptions;
    }
    function ___lock() {
    }
    function ___setErrNo(e) {
      return Module.___errno_location && (HEAP32[Module.___errno_location() >> 2] = e), e;
    }
    function ___map_file(e, r) {
      return ___setErrNo(1), -1;
    }
    var PATH = { splitPath: function(e) {
      return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
    }, normalizeArray: function(e, r) {
      for (var t = 0, n = e.length - 1; 0 <= n; n--) {
        var o = e[n];
        "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--);
      }
      if (r) for (; t; t--) e.unshift("..");
      return e;
    }, normalize: function(e) {
      var r = "/" === e.charAt(0), t = "/" === e.substr(-1);
      return (e = PATH.normalizeArray(e.split("/").filter(function(e2) {
        return !!e2;
      }), !r).join("/")) || r || (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
    }, dirname: function(e) {
      var r = PATH.splitPath(e), t = r[0], n = r[1];
      return t || n ? t + (n = n && n.substr(0, n.length - 1)) : ".";
    }, basename: function(e) {
      if ("/" === e) return "/";
      var r = e.lastIndexOf("/");
      return -1 === r ? e : e.substr(r + 1);
    }, extname: function(e) {
      return PATH.splitPath(e)[3];
    }, join: function() {
      var e = Array.prototype.slice.call(arguments, 0);
      return PATH.normalize(e.join("/"));
    }, join2: function(e, r) {
      return PATH.normalize(e + "/" + r);
    } }, PATH_FS = { resolve: function() {
      for (var e = "", r = false, t = arguments.length - 1; -1 <= t && !r; t--) {
        var n = 0 <= t ? arguments[t] : FS.cwd();
        if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
        if (!n) return "";
        e = n + "/" + e, r = "/" === n.charAt(0);
      }
      return (r ? "/" : "") + (e = PATH.normalizeArray(e.split("/").filter(function(e2) {
        return !!e2;
      }), !r).join("/")) || ".";
    }, relative: function(e, r) {
      function t(e2) {
        for (var r2 = 0; r2 < e2.length && "" === e2[r2]; r2++) ;
        for (var t2 = e2.length - 1; 0 <= t2 && "" === e2[t2]; t2--) ;
        return t2 < r2 ? [] : e2.slice(r2, t2 - r2 + 1);
      }
      e = PATH_FS.resolve(e).substr(1), r = PATH_FS.resolve(r).substr(1);
      for (var n = t(e.split("/")), o = t(r.split("/")), i = Math.min(n.length, o.length), a = i, s = 0; s < i; s++) if (n[s] !== o[s]) {
        a = s;
        break;
      }
      var u = [];
      for (s = a; s < n.length; s++) u.push("..");
      return (u = u.concat(o.slice(a))).join("/");
    } }, TTY = { ttys: [], init: function() {
    }, shutdown: function() {
    }, register: function(e, r) {
      TTY.ttys[e] = { input: [], output: [], ops: r }, FS.registerDevice(e, TTY.stream_ops);
    }, stream_ops: { open: function(e) {
      var r = TTY.ttys[e.node.rdev];
      if (!r) throw new FS.ErrnoError(19);
      e.tty = r, e.seekable = false;
    }, close: function(e) {
      e.tty.ops.flush(e.tty);
    }, flush: function(e) {
      e.tty.ops.flush(e.tty);
    }, read: function(e, r, t, n, o) {
      if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(6);
      for (var i = 0, a = 0; a < n; a++) {
        var s;
        try {
          s = e.tty.ops.get_char(e.tty);
        } catch (e2) {
          throw new FS.ErrnoError(5);
        }
        if (void 0 === s && 0 === i) throw new FS.ErrnoError(11);
        if (null == s) break;
        i++, r[t + a] = s;
      }
      return i && (e.node.timestamp = Date.now()), i;
    }, write: function(e, r, t, n, o) {
      if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(6);
      try {
        for (var i = 0; i < n; i++) e.tty.ops.put_char(e.tty, r[t + i]);
      } catch (e2) {
        throw new FS.ErrnoError(5);
      }
      return n && (e.node.timestamp = Date.now()), i;
    } }, default_tty_ops: { get_char: function(e) {
      if (!e.input.length) {
        var r = null;
        if (ENVIRONMENT_IS_NODE) {
          var t = Buffer.alloc ? Buffer.alloc(256) : new Buffer(256), n = 0, o = "win32" != process.platform, i = process.stdin.fd;
          if (o) {
            var a = false;
            try {
              i = fs.openSync("/dev/stdin", "r"), a = true;
            } catch (e2) {
            }
          }
          try {
            n = fs.readSync(i, t, 0, 256, null);
          } catch (e2) {
            if (-1 == e2.toString().indexOf("EOF")) throw e2;
            n = 0;
          }
          a && fs.closeSync(i), r = 0 < n ? t.slice(0, n).toString("utf-8") : null;
        } else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (r = window.prompt("Input: ")) && (r += "\n") : "function" == typeof readline && null !== (r = readline()) && (r += "\n");
        if (!r) return null;
        e.input = intArrayFromString(r, true);
      }
      return e.input.shift();
    }, put_char: function(e, r) {
      null === r || 10 === r ? (out(UTF8ArrayToString(e.output, 0)), e.output = []) : 0 != r && e.output.push(r);
    }, flush: function(e) {
      e.output && 0 < e.output.length && (out(UTF8ArrayToString(e.output, 0)), e.output = []);
    } }, default_tty1_ops: { put_char: function(e, r) {
      null === r || 10 === r ? (err(UTF8ArrayToString(e.output, 0)), e.output = []) : 0 != r && e.output.push(r);
    }, flush: function(e) {
      e.output && 0 < e.output.length && (err(UTF8ArrayToString(e.output, 0)), e.output = []);
    } } }, MEMFS = { ops_table: null, mount: function(e) {
      return MEMFS.createNode(null, "/", 16895, 0);
    }, createNode: function(e, r, t, n) {
      if (FS.isBlkdev(t) || FS.isFIFO(t)) throw new FS.ErrnoError(1);
      MEMFS.ops_table || (MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } });
      var o = FS.createNode(e, r, t, n);
      return FS.isDir(o.mode) ? (o.node_ops = MEMFS.ops_table.dir.node, o.stream_ops = MEMFS.ops_table.dir.stream, o.contents = {}) : FS.isFile(o.mode) ? (o.node_ops = MEMFS.ops_table.file.node, o.stream_ops = MEMFS.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : FS.isLink(o.mode) ? (o.node_ops = MEMFS.ops_table.link.node, o.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(o.mode) && (o.node_ops = MEMFS.ops_table.chrdev.node, o.stream_ops = MEMFS.ops_table.chrdev.stream), o.timestamp = Date.now(), e && (e.contents[r] = o), o;
    }, getFileDataAsRegularArray: function(e) {
      if (e.contents && e.contents.subarray) {
        for (var r = [], t = 0; t < e.usedBytes; ++t) r.push(e.contents[t]);
        return r;
      }
      return e.contents;
    }, getFileDataAsTypedArray: function(e) {
      return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array();
    }, expandFileStorage: function(e, r) {
      var t = e.contents ? e.contents.length : 0;
      if (!(r <= t)) {
        r = Math.max(r, t * (t < 1048576 ? 2 : 1.125) | 0), 0 != t && (r = Math.max(r, 256));
        var n = e.contents;
        e.contents = new Uint8Array(r), 0 < e.usedBytes && e.contents.set(n.subarray(0, e.usedBytes), 0);
      }
    }, resizeFileStorage: function(e, r) {
      if (e.usedBytes != r) {
        if (0 == r) return e.contents = null, void (e.usedBytes = 0);
        if (!e.contents || e.contents.subarray) {
          var t = e.contents;
          return e.contents = new Uint8Array(new ArrayBuffer(r)), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), void (e.usedBytes = r);
        }
        if (e.contents || (e.contents = []), e.contents.length > r) e.contents.length = r;
        else for (; e.contents.length < r; ) e.contents.push(0);
        e.usedBytes = r;
      }
    }, node_ops: { getattr: function(e) {
      var r = {};
      return r.dev = FS.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, FS.isDir(e.mode) ? r.size = 4096 : FS.isFile(e.mode) ? r.size = e.usedBytes : FS.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.timestamp), r.mtime = new Date(e.timestamp), r.ctime = new Date(e.timestamp), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
    }, setattr: function(e, r) {
      void 0 !== r.mode && (e.mode = r.mode), void 0 !== r.timestamp && (e.timestamp = r.timestamp), void 0 !== r.size && MEMFS.resizeFileStorage(e, r.size);
    }, lookup: function(e, r) {
      throw FS.genericErrors[2];
    }, mknod: function(e, r, t, n) {
      return MEMFS.createNode(e, r, t, n);
    }, rename: function(e, r, t) {
      if (FS.isDir(e.mode)) {
        var n;
        try {
          n = FS.lookupNode(r, t);
        } catch (e2) {
        }
        if (n) for (var o in n.contents) throw new FS.ErrnoError(39);
      }
      delete e.parent.contents[e.name], e.name = t, (r.contents[t] = e).parent = r;
    }, unlink: function(e, r) {
      delete e.contents[r];
    }, rmdir: function(e, r) {
      var t = FS.lookupNode(e, r);
      for (var n in t.contents) throw new FS.ErrnoError(39);
      delete e.contents[r];
    }, readdir: function(e) {
      var r = [".", ".."];
      for (var t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
      return r;
    }, symlink: function(e, r, t) {
      var n = MEMFS.createNode(e, r, 41471, 0);
      return n.link = t, n;
    }, readlink: function(e) {
      if (!FS.isLink(e.mode)) throw new FS.ErrnoError(22);
      return e.link;
    } }, stream_ops: { read: function(e, r, t, n, o) {
      var i = e.node.contents;
      if (o >= e.node.usedBytes) return 0;
      var a = Math.min(e.node.usedBytes - o, n);
      if (8 < a && i.subarray) r.set(i.subarray(o, o + a), t);
      else for (var s = 0; s < a; s++) r[t + s] = i[o + s];
      return a;
    }, write: function(e, r, t, n, o, i) {
      if (!n) return 0;
      var a = e.node;
      if (a.timestamp = Date.now(), r.subarray && (!a.contents || a.contents.subarray)) {
        if (i) return a.contents = r.subarray(t, t + n), a.usedBytes = n;
        if (0 === a.usedBytes && 0 === o) return a.contents = new Uint8Array(r.subarray(t, t + n)), a.usedBytes = n;
        if (o + n <= a.usedBytes) return a.contents.set(r.subarray(t, t + n), o), n;
      }
      if (MEMFS.expandFileStorage(a, o + n), a.contents.subarray && r.subarray) a.contents.set(r.subarray(t, t + n), o);
      else for (var s = 0; s < n; s++) a.contents[o + s] = r[t + s];
      return a.usedBytes = Math.max(a.usedBytes, o + n), n;
    }, llseek: function(e, r, t) {
      var n = r;
      if (1 === t ? n += e.position : 2 === t && FS.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new FS.ErrnoError(22);
      return n;
    }, allocate: function(e, r, t) {
      MEMFS.expandFileStorage(e.node, r + t), e.node.usedBytes = Math.max(e.node.usedBytes, r + t);
    }, mmap: function(e, r, t, n, o, i, a) {
      if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(19);
      var s, u, l = e.node.contents;
      if (2 & a || l.buffer !== r && l.buffer !== r.buffer) {
        (0 < o || o + n < e.node.usedBytes) && (l = l.subarray ? l.subarray(o, o + n) : Array.prototype.slice.call(l, o, o + n)), u = true;
        var c = r.buffer == HEAP8.buffer;
        if (!(s = _malloc(n))) throw new FS.ErrnoError(12);
        (c ? HEAP8 : r).set(l, s);
      } else u = false, s = l.byteOffset;
      return { ptr: s, allocated: u };
    }, msync: function(e, r, t, n, o) {
      if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(19);
      if (2 & o) return 0;
      MEMFS.stream_ops.write(e, r, 0, n, t, false);
      return 0;
    } } }, IDBFS = { dbs: {}, indexedDB: function() {
      if ("undefined" != typeof indexedDB) return indexedDB;
      var e = null;
      return "object" == typeof window && (e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), assert(e, "IDBFS used, but indexedDB not supported"), e;
    }, DB_VERSION: 21, DB_STORE_NAME: "FILE_DATA", mount: function(e) {
      return MEMFS.mount.apply(null, arguments);
    }, syncfs: function(r, i, a) {
      IDBFS.getLocalSet(r, function(e, o) {
        if (e) return a(e);
        IDBFS.getRemoteSet(r, function(e2, r2) {
          if (e2) return a(e2);
          var t = i ? r2 : o, n = i ? o : r2;
          IDBFS.reconcile(t, n, a);
        });
      });
    }, getDB: function(e, r) {
      var t, n = IDBFS.dbs[e];
      if (n) return r(null, n);
      try {
        t = IDBFS.indexedDB().open(e, IDBFS.DB_VERSION);
      } catch (e2) {
        return r(e2);
      }
      if (!t) return r("Unable to connect to IndexedDB");
      t.onupgradeneeded = function(e2) {
        var r2, t2 = e2.target.result, n2 = e2.target.transaction;
        (r2 = t2.objectStoreNames.contains(IDBFS.DB_STORE_NAME) ? n2.objectStore(IDBFS.DB_STORE_NAME) : t2.createObjectStore(IDBFS.DB_STORE_NAME)).indexNames.contains("timestamp") || r2.createIndex("timestamp", "timestamp", { unique: false });
      }, t.onsuccess = function() {
        n = t.result, IDBFS.dbs[e] = n, r(null, n);
      }, t.onerror = function(e2) {
        r(this.error), e2.preventDefault();
      };
    }, getLocalSet: function(e, r) {
      var t = {};
      function n(e2) {
        return "." !== e2 && ".." !== e2;
      }
      function o(r2) {
        return function(e2) {
          return PATH.join2(r2, e2);
        };
      }
      for (var i = FS.readdir(e.mountpoint).filter(n).map(o(e.mountpoint)); i.length; ) {
        var a, s = i.pop();
        try {
          a = FS.stat(s);
        } catch (e2) {
          return r(e2);
        }
        FS.isDir(a.mode) && i.push.apply(i, FS.readdir(s).filter(n).map(o(s))), t[s] = { timestamp: a.mtime };
      }
      return r(null, { type: "local", entries: t });
    }, getRemoteSet: function(e, n) {
      var o = {};
      IDBFS.getDB(e.mountpoint, function(e2, t) {
        if (e2) return n(e2);
        try {
          var r = t.transaction([IDBFS.DB_STORE_NAME], "readonly");
          r.onerror = function(e3) {
            n(this.error), e3.preventDefault();
          }, r.objectStore(IDBFS.DB_STORE_NAME).index("timestamp").openKeyCursor().onsuccess = function(e3) {
            var r2 = e3.target.result;
            if (!r2) return n(null, { type: "remote", db: t, entries: o });
            o[r2.primaryKey] = { timestamp: r2.key }, r2.continue();
          };
        } catch (e3) {
          return n(e3);
        }
      });
    }, loadLocalEntry: function(e, r) {
      var t, n;
      try {
        n = FS.lookupPath(e).node, t = FS.stat(e);
      } catch (e2) {
        return r(e2);
      }
      return FS.isDir(t.mode) ? r(null, { timestamp: t.mtime, mode: t.mode }) : FS.isFile(t.mode) ? (n.contents = MEMFS.getFileDataAsTypedArray(n), r(null, { timestamp: t.mtime, mode: t.mode, contents: n.contents })) : r(new Error("node type not supported"));
    }, storeLocalEntry: function(e, r, t) {
      try {
        if (FS.isDir(r.mode)) FS.mkdir(e, r.mode);
        else {
          if (!FS.isFile(r.mode)) return t(new Error("node type not supported"));
          FS.writeFile(e, r.contents, { canOwn: true });
        }
        FS.chmod(e, r.mode), FS.utime(e, r.timestamp, r.timestamp);
      } catch (e2) {
        return t(e2);
      }
      t(null);
    }, removeLocalEntry: function(e, r) {
      try {
        FS.lookupPath(e);
        var t = FS.stat(e);
        FS.isDir(t.mode) ? FS.rmdir(e) : FS.isFile(t.mode) && FS.unlink(e);
      } catch (e2) {
        return r(e2);
      }
      r(null);
    }, loadRemoteEntry: function(e, r, t) {
      var n = e.get(r);
      n.onsuccess = function(e2) {
        t(null, e2.target.result);
      }, n.onerror = function(e2) {
        t(this.error), e2.preventDefault();
      };
    }, storeRemoteEntry: function(e, r, t, n) {
      var o = e.put(t, r);
      o.onsuccess = function() {
        n(null);
      }, o.onerror = function(e2) {
        n(this.error), e2.preventDefault();
      };
    }, removeRemoteEntry: function(e, r, t) {
      var n = e.delete(r);
      n.onsuccess = function() {
        t(null);
      }, n.onerror = function(e2) {
        t(this.error), e2.preventDefault();
      };
    }, reconcile: function(n, o, r) {
      var i = 0, a = [];
      Object.keys(n.entries).forEach(function(e2) {
        var r2 = n.entries[e2], t2 = o.entries[e2];
        (!t2 || r2.timestamp > t2.timestamp) && (a.push(e2), i++);
      });
      var t = [];
      if (Object.keys(o.entries).forEach(function(e2) {
        o.entries[e2];
        n.entries[e2] || (t.push(e2), i++);
      }), !i) return r(null);
      var s = false, e = ("remote" === n.type ? n.db : o.db).transaction([IDBFS.DB_STORE_NAME], "readwrite"), u = e.objectStore(IDBFS.DB_STORE_NAME);
      function l(e2) {
        if (e2 && !s) return s = true, r(e2);
      }
      e.onerror = function(e2) {
        l(this.error), e2.preventDefault();
      }, e.oncomplete = function(e2) {
        s || r(null);
      }, a.sort().forEach(function(t2) {
        "local" === o.type ? IDBFS.loadRemoteEntry(u, t2, function(e2, r2) {
          if (e2) return l(e2);
          IDBFS.storeLocalEntry(t2, r2, l);
        }) : IDBFS.loadLocalEntry(t2, function(e2, r2) {
          if (e2) return l(e2);
          IDBFS.storeRemoteEntry(u, t2, r2, l);
        });
      }), t.sort().reverse().forEach(function(e2) {
        "local" === o.type ? IDBFS.removeLocalEntry(e2, l) : IDBFS.removeRemoteEntry(u, e2, l);
      });
    } }, NODEFS = { isWindows: false, staticInit: function() {
      NODEFS.isWindows = !!process.platform.match(/^win/);
      var e = process.binding("constants");
      e.fs && (e = e.fs), NODEFS.flagsForNodeMap = { 1024: e.O_APPEND, 64: e.O_CREAT, 128: e.O_EXCL, 0: e.O_RDONLY, 2: e.O_RDWR, 4096: e.O_SYNC, 512: e.O_TRUNC, 1: e.O_WRONLY };
    }, bufferFrom: function(e) {
      return Buffer.alloc ? Buffer.from(e) : new Buffer(e);
    }, mount: function(e) {
      return assert(ENVIRONMENT_HAS_NODE), NODEFS.createNode(null, "/", NODEFS.getMode(e.opts.root), 0);
    }, createNode: function(e, r, t, n) {
      if (!FS.isDir(t) && !FS.isFile(t) && !FS.isLink(t)) throw new FS.ErrnoError(22);
      var o = FS.createNode(e, r, t);
      return o.node_ops = NODEFS.node_ops, o.stream_ops = NODEFS.stream_ops, o;
    }, getMode: function(e) {
      var r;
      try {
        r = fs.lstatSync(e), NODEFS.isWindows && (r.mode = r.mode | (292 & r.mode) >> 2);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
      return r.mode;
    }, realPath: function(e) {
      for (var r = []; e.parent !== e; ) r.push(e.name), e = e.parent;
      return r.push(e.mount.opts.root), r.reverse(), PATH.join.apply(null, r);
    }, flagsForNode: function(e) {
      e &= -2097153, e &= -2049, e &= -32769, e &= -524289;
      var r = 0;
      for (var t in NODEFS.flagsForNodeMap) e & t && (r |= NODEFS.flagsForNodeMap[t], e ^= t);
      if (e) throw new FS.ErrnoError(22);
      return r;
    }, node_ops: { getattr: function(e) {
      var r, t = NODEFS.realPath(e);
      try {
        r = fs.lstatSync(t);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
      return NODEFS.isWindows && !r.blksize && (r.blksize = 4096), NODEFS.isWindows && !r.blocks && (r.blocks = (r.size + r.blksize - 1) / r.blksize | 0), { dev: r.dev, ino: r.ino, mode: r.mode, nlink: r.nlink, uid: r.uid, gid: r.gid, rdev: r.rdev, size: r.size, atime: r.atime, mtime: r.mtime, ctime: r.ctime, blksize: r.blksize, blocks: r.blocks };
    }, setattr: function(e, r) {
      var t = NODEFS.realPath(e);
      try {
        if (void 0 !== r.mode && (fs.chmodSync(t, r.mode), e.mode = r.mode), void 0 !== r.timestamp) {
          var n = new Date(r.timestamp);
          fs.utimesSync(t, n, n);
        }
        void 0 !== r.size && fs.truncateSync(t, r.size);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    }, lookup: function(e, r) {
      var t = PATH.join2(NODEFS.realPath(e), r), n = NODEFS.getMode(t);
      return NODEFS.createNode(e, r, n);
    }, mknod: function(e, r, t, n) {
      var o = NODEFS.createNode(e, r, t, n), i = NODEFS.realPath(o);
      try {
        FS.isDir(o.mode) ? fs.mkdirSync(i, o.mode) : fs.writeFileSync(i, "", { mode: o.mode });
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
      return o;
    }, rename: function(e, r, t) {
      var n = NODEFS.realPath(e), o = PATH.join2(NODEFS.realPath(r), t);
      try {
        fs.renameSync(n, o);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    }, unlink: function(e, r) {
      var t = PATH.join2(NODEFS.realPath(e), r);
      try {
        fs.unlinkSync(t);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    }, rmdir: function(e, r) {
      var t = PATH.join2(NODEFS.realPath(e), r);
      try {
        fs.rmdirSync(t);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    }, readdir: function(e) {
      var r = NODEFS.realPath(e);
      try {
        return fs.readdirSync(r);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    }, symlink: function(e, r, t) {
      var n = PATH.join2(NODEFS.realPath(e), r);
      try {
        fs.symlinkSync(t, n);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    }, readlink: function(e) {
      var r = NODEFS.realPath(e);
      try {
        return r = fs.readlinkSync(r), r = NODEJS_PATH.relative(NODEJS_PATH.resolve(e.mount.opts.root), r);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    } }, stream_ops: { open: function(e) {
      var r = NODEFS.realPath(e.node);
      try {
        FS.isFile(e.node.mode) && (e.nfd = fs.openSync(r, NODEFS.flagsForNode(e.flags)));
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    }, close: function(e) {
      try {
        FS.isFile(e.node.mode) && e.nfd && fs.closeSync(e.nfd);
      } catch (e2) {
        if (!e2.code) throw e2;
        throw new FS.ErrnoError(-e2.errno);
      }
    }, read: function(e, r, t, n, o) {
      if (0 === n) return 0;
      try {
        return fs.readSync(e.nfd, NODEFS.bufferFrom(r.buffer), t, n, o);
      } catch (e2) {
        throw new FS.ErrnoError(-e2.errno);
      }
    }, write: function(e, r, t, n, o) {
      try {
        return fs.writeSync(e.nfd, NODEFS.bufferFrom(r.buffer), t, n, o);
      } catch (e2) {
        throw new FS.ErrnoError(-e2.errno);
      }
    }, llseek: function(e, r, t) {
      var n = r;
      if (1 === t) n += e.position;
      else if (2 === t && FS.isFile(e.node.mode)) try {
        n += fs.fstatSync(e.nfd).size;
      } catch (e2) {
        throw new FS.ErrnoError(-e2.errno);
      }
      if (n < 0) throw new FS.ErrnoError(22);
      return n;
    } } }, WORKERFS = { DIR_MODE: 16895, FILE_MODE: 33279, reader: null, mount: function(e) {
      assert(ENVIRONMENT_IS_WORKER), WORKERFS.reader || (WORKERFS.reader = new FileReaderSync());
      var i = WORKERFS.createNode(null, "/", WORKERFS.DIR_MODE, 0), a = {};
      function n(e2) {
        for (var r = e2.split("/"), t = i, n2 = 0; n2 < r.length - 1; n2++) {
          var o2 = r.slice(0, n2 + 1).join("/");
          a[o2] || (a[o2] = WORKERFS.createNode(t, r[n2], WORKERFS.DIR_MODE, 0)), t = a[o2];
        }
        return t;
      }
      function o(e2) {
        var r = e2.split("/");
        return r[r.length - 1];
      }
      return Array.prototype.forEach.call(e.opts.files || [], function(e2) {
        WORKERFS.createNode(n(e2.name), o(e2.name), WORKERFS.FILE_MODE, 0, e2, e2.lastModifiedDate);
      }), (e.opts.blobs || []).forEach(function(e2) {
        WORKERFS.createNode(n(e2.name), o(e2.name), WORKERFS.FILE_MODE, 0, e2.data);
      }), (e.opts.packages || []).forEach(function(t) {
        t.metadata.files.forEach(function(e2) {
          var r = e2.filename.substr(1);
          WORKERFS.createNode(n(r), o(r), WORKERFS.FILE_MODE, 0, t.blob.slice(e2.start, e2.end));
        });
      }), i;
    }, createNode: function(e, r, t, n, o, i) {
      var a = FS.createNode(e, r, t);
      return a.mode = t, a.node_ops = WORKERFS.node_ops, a.stream_ops = WORKERFS.stream_ops, a.timestamp = (i || /* @__PURE__ */ new Date()).getTime(), assert(WORKERFS.FILE_MODE !== WORKERFS.DIR_MODE), t === WORKERFS.FILE_MODE ? (a.size = o.size, a.contents = o) : (a.size = 4096, a.contents = {}), e && (e.contents[r] = a), a;
    }, node_ops: { getattr: function(e) {
      return { dev: 1, ino: void 0, mode: e.mode, nlink: 1, uid: 0, gid: 0, rdev: void 0, size: e.size, atime: new Date(e.timestamp), mtime: new Date(e.timestamp), ctime: new Date(e.timestamp), blksize: 4096, blocks: Math.ceil(e.size / 4096) };
    }, setattr: function(e, r) {
      void 0 !== r.mode && (e.mode = r.mode), void 0 !== r.timestamp && (e.timestamp = r.timestamp);
    }, lookup: function(e, r) {
      throw new FS.ErrnoError(2);
    }, mknod: function(e, r, t, n) {
      throw new FS.ErrnoError(1);
    }, rename: function(e, r, t) {
      throw new FS.ErrnoError(1);
    }, unlink: function(e, r) {
      throw new FS.ErrnoError(1);
    }, rmdir: function(e, r) {
      throw new FS.ErrnoError(1);
    }, readdir: function(e) {
      var r = [".", ".."];
      for (var t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
      return r;
    }, symlink: function(e, r, t) {
      throw new FS.ErrnoError(1);
    }, readlink: function(e) {
      throw new FS.ErrnoError(1);
    } }, stream_ops: { read: function(e, r, t, n, o) {
      if (o >= e.node.size) return 0;
      var i = e.node.contents.slice(o, o + n), a = WORKERFS.reader.readAsArrayBuffer(i);
      return r.set(new Uint8Array(a), t), i.size;
    }, write: function(e, r, t, n, o) {
      throw new FS.ErrnoError(5);
    }, llseek: function(e, r, t) {
      var n = r;
      if (1 === t ? n += e.position : 2 === t && FS.isFile(e.node.mode) && (n += e.node.size), n < 0) throw new FS.ErrnoError(22);
      return n;
    } } }, FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, trackingDelegate: {}, tracking: { openFlags: { READ: 1, WRITE: 2 } }, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, handleFSError: function(e) {
      if (!(e instanceof FS.ErrnoError)) throw e + " : " + stackTrace();
      return ___setErrNo(e.errno);
    }, lookupPath: function(e, r) {
      if (r = r || {}, !(e = PATH_FS.resolve(FS.cwd(), e))) return { path: "", node: null };
      var t = { follow_mount: true, recurse_count: 0 };
      for (var n in t) void 0 === r[n] && (r[n] = t[n]);
      if (8 < r.recurse_count) throw new FS.ErrnoError(40);
      for (var o = PATH.normalizeArray(e.split("/").filter(function(e2) {
        return !!e2;
      }), false), i = FS.root, a = "/", s = 0; s < o.length; s++) {
        var u = s === o.length - 1;
        if (u && r.parent) break;
        if (i = FS.lookupNode(i, o[s]), a = PATH.join2(a, o[s]), FS.isMountpoint(i) && (!u || u && r.follow_mount) && (i = i.mounted.root), !u || r.follow) for (var l = 0; FS.isLink(i.mode); ) {
          var c = FS.readlink(a);
          if (a = PATH_FS.resolve(PATH.dirname(a), c), i = FS.lookupPath(a, { recurse_count: r.recurse_count }).node, 40 < l++) throw new FS.ErrnoError(40);
        }
      }
      return { path: a, node: i };
    }, getPath: function(e) {
      for (var r; ; ) {
        if (FS.isRoot(e)) {
          var t = e.mount.mountpoint;
          return r ? "/" !== t[t.length - 1] ? t + "/" + r : t + r : t;
        }
        r = r ? e.name + "/" + r : e.name, e = e.parent;
      }
    }, hashName: function(e, r) {
      for (var t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;
      return (e + t >>> 0) % FS.nameTable.length;
    }, hashAddNode: function(e) {
      var r = FS.hashName(e.parent.id, e.name);
      e.name_next = FS.nameTable[r], FS.nameTable[r] = e;
    }, hashRemoveNode: function(e) {
      var r = FS.hashName(e.parent.id, e.name);
      if (FS.nameTable[r] === e) FS.nameTable[r] = e.name_next;
      else for (var t = FS.nameTable[r]; t; ) {
        if (t.name_next === e) {
          t.name_next = e.name_next;
          break;
        }
        t = t.name_next;
      }
    }, lookupNode: function(e, r) {
      var t = FS.mayLookup(e);
      if (t) throw new FS.ErrnoError(t, e);
      for (var n = FS.hashName(e.id, r), o = FS.nameTable[n]; o; o = o.name_next) {
        var i = o.name;
        if (o.parent.id === e.id && i === r) return o;
      }
      return FS.lookup(e, r);
    }, createNode: function(e, r, t, n) {
      if (!FS.FSNode) {
        FS.FSNode = function(e2, r2, t2, n2) {
          e2 = e2 || this, this.parent = e2, this.mount = e2.mount, this.mounted = null, this.id = FS.nextInode++, this.name = r2, this.mode = t2, this.node_ops = {}, this.stream_ops = {}, this.rdev = n2;
        }, FS.FSNode.prototype = {};
        Object.defineProperties(FS.FSNode.prototype, { read: { get: function() {
          return 365 == (365 & this.mode);
        }, set: function(e2) {
          e2 ? this.mode |= 365 : this.mode &= -366;
        } }, write: { get: function() {
          return 146 == (146 & this.mode);
        }, set: function(e2) {
          e2 ? this.mode |= 146 : this.mode &= -147;
        } }, isFolder: { get: function() {
          return FS.isDir(this.mode);
        } }, isDevice: { get: function() {
          return FS.isChrdev(this.mode);
        } } });
      }
      var o = new FS.FSNode(e, r, t, n);
      return FS.hashAddNode(o), o;
    }, destroyNode: function(e) {
      FS.hashRemoveNode(e);
    }, isRoot: function(e) {
      return e === e.parent;
    }, isMountpoint: function(e) {
      return !!e.mounted;
    }, isFile: function(e) {
      return 32768 == (61440 & e);
    }, isDir: function(e) {
      return 16384 == (61440 & e);
    }, isLink: function(e) {
      return 40960 == (61440 & e);
    }, isChrdev: function(e) {
      return 8192 == (61440 & e);
    }, isBlkdev: function(e) {
      return 24576 == (61440 & e);
    }, isFIFO: function(e) {
      return 4096 == (61440 & e);
    }, isSocket: function(e) {
      return 49152 == (49152 & e);
    }, flagModes: { r: 0, rs: 1052672, "r+": 2, w: 577, wx: 705, xw: 705, "w+": 578, "wx+": 706, "xw+": 706, a: 1089, ax: 1217, xa: 1217, "a+": 1090, "ax+": 1218, "xa+": 1218 }, modeStringToFlags: function(e) {
      var r = FS.flagModes[e];
      if (void 0 === r) throw new Error("Unknown file open mode: " + e);
      return r;
    }, flagsToPermissionString: function(e) {
      var r = ["r", "w", "rw"][3 & e];
      return 512 & e && (r += "w"), r;
    }, nodePermissions: function(e, r) {
      return FS.ignorePermissions ? 0 : (-1 === r.indexOf("r") || 292 & e.mode) && (-1 === r.indexOf("w") || 146 & e.mode) && (-1 === r.indexOf("x") || 73 & e.mode) ? 0 : 13;
    }, mayLookup: function(e) {
      var r = FS.nodePermissions(e, "x");
      return r || (e.node_ops.lookup ? 0 : 13);
    }, mayCreate: function(e, r) {
      try {
        FS.lookupNode(e, r);
        return 17;
      } catch (e2) {
      }
      return FS.nodePermissions(e, "wx");
    }, mayDelete: function(e, r, t) {
      var n;
      try {
        n = FS.lookupNode(e, r);
      } catch (e2) {
        return e2.errno;
      }
      var o = FS.nodePermissions(e, "wx");
      if (o) return o;
      if (t) {
        if (!FS.isDir(n.mode)) return 20;
        if (FS.isRoot(n) || FS.getPath(n) === FS.cwd()) return 16;
      } else if (FS.isDir(n.mode)) return 21;
      return 0;
    }, mayOpen: function(e, r) {
      return e ? FS.isLink(e.mode) ? 40 : FS.isDir(e.mode) && ("r" !== FS.flagsToPermissionString(r) || 512 & r) ? 21 : FS.nodePermissions(e, FS.flagsToPermissionString(r)) : 2;
    }, MAX_OPEN_FDS: 4096, nextfd: function(e, r) {
      e = e || 0, r = r || FS.MAX_OPEN_FDS;
      for (var t = e; t <= r; t++) if (!FS.streams[t]) return t;
      throw new FS.ErrnoError(24);
    }, getStream: function(e) {
      return FS.streams[e];
    }, createStream: function(e, r, t) {
      FS.FSStream || (FS.FSStream = function() {
      }, FS.FSStream.prototype = {}, Object.defineProperties(FS.FSStream.prototype, { object: { get: function() {
        return this.node;
      }, set: function(e2) {
        this.node = e2;
      } }, isRead: { get: function() {
        return 1 != (2097155 & this.flags);
      } }, isWrite: { get: function() {
        return 0 != (2097155 & this.flags);
      } }, isAppend: { get: function() {
        return 1024 & this.flags;
      } } }));
      var n = new FS.FSStream();
      for (var o in e) n[o] = e[o];
      e = n;
      var i = FS.nextfd(r, t);
      return e.fd = i, FS.streams[i] = e;
    }, closeStream: function(e) {
      FS.streams[e] = null;
    }, chrdev_stream_ops: { open: function(e) {
      var r = FS.getDevice(e.node.rdev);
      e.stream_ops = r.stream_ops, e.stream_ops.open && e.stream_ops.open(e);
    }, llseek: function() {
      throw new FS.ErrnoError(29);
    } }, major: function(e) {
      return e >> 8;
    }, minor: function(e) {
      return 255 & e;
    }, makedev: function(e, r) {
      return e << 8 | r;
    }, registerDevice: function(e, r) {
      FS.devices[e] = { stream_ops: r };
    }, getDevice: function(e) {
      return FS.devices[e];
    }, getMounts: function(e) {
      for (var r = [], t = [e]; t.length; ) {
        var n = t.pop();
        r.push(n), t.push.apply(t, n.mounts);
      }
      return r;
    }, syncfs: function(r, t) {
      "function" == typeof r && (t = r, r = false), FS.syncFSRequests++, 1 < FS.syncFSRequests && console.log("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      var n = FS.getMounts(FS.root.mount), o = 0;
      function i(e) {
        return FS.syncFSRequests--, t(e);
      }
      function a(e) {
        if (e) return a.errored ? void 0 : (a.errored = true, i(e));
        ++o >= n.length && i(null);
      }
      n.forEach(function(e) {
        if (!e.type.syncfs) return a(null);
        e.type.syncfs(e, r, a);
      });
    }, mount: function(e, r, t) {
      var n, o = "/" === t, i = !t;
      if (o && FS.root) throw new FS.ErrnoError(16);
      if (!o && !i) {
        var a = FS.lookupPath(t, { follow_mount: false });
        if (t = a.path, n = a.node, FS.isMountpoint(n)) throw new FS.ErrnoError(16);
        if (!FS.isDir(n.mode)) throw new FS.ErrnoError(20);
      }
      var s = { type: e, opts: r, mountpoint: t, mounts: [] }, u = e.mount(s);
      return (u.mount = s).root = u, o ? FS.root = u : n && (n.mounted = s, n.mount && n.mount.mounts.push(s)), u;
    }, unmount: function(e) {
      var r = FS.lookupPath(e, { follow_mount: false });
      if (!FS.isMountpoint(r.node)) throw new FS.ErrnoError(22);
      var t = r.node, n = t.mounted, o = FS.getMounts(n);
      Object.keys(FS.nameTable).forEach(function(e2) {
        for (var r2 = FS.nameTable[e2]; r2; ) {
          var t2 = r2.name_next;
          -1 !== o.indexOf(r2.mount) && FS.destroyNode(r2), r2 = t2;
        }
      }), t.mounted = null;
      var i = t.mount.mounts.indexOf(n);
      t.mount.mounts.splice(i, 1);
    }, lookup: function(e, r) {
      return e.node_ops.lookup(e, r);
    }, mknod: function(e, r, t) {
      var n = FS.lookupPath(e, { parent: true }).node, o = PATH.basename(e);
      if (!o || "." === o || ".." === o) throw new FS.ErrnoError(22);
      var i = FS.mayCreate(n, o);
      if (i) throw new FS.ErrnoError(i);
      if (!n.node_ops.mknod) throw new FS.ErrnoError(1);
      return n.node_ops.mknod(n, o, r, t);
    }, create: function(e, r) {
      return r = void 0 !== r ? r : 438, r &= 4095, r |= 32768, FS.mknod(e, r, 0);
    }, mkdir: function(e, r) {
      return r = void 0 !== r ? r : 511, r &= 1023, r |= 16384, FS.mknod(e, r, 0);
    }, mkdirTree: function(e, r) {
      for (var t = e.split("/"), n = "", o = 0; o < t.length; ++o) if (t[o]) {
        n += "/" + t[o];
        try {
          FS.mkdir(n, r);
        } catch (e2) {
          if (17 != e2.errno) throw e2;
        }
      }
    }, mkdev: function(e, r, t) {
      return void 0 === t && (t = r, r = 438), r |= 8192, FS.mknod(e, r, t);
    }, symlink: function(e, r) {
      if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(2);
      var t = FS.lookupPath(r, { parent: true }).node;
      if (!t) throw new FS.ErrnoError(2);
      var n = PATH.basename(r), o = FS.mayCreate(t, n);
      if (o) throw new FS.ErrnoError(o);
      if (!t.node_ops.symlink) throw new FS.ErrnoError(1);
      return t.node_ops.symlink(t, n, e);
    }, rename: function(r, t) {
      var e, n, o = PATH.dirname(r), i = PATH.dirname(t), a = PATH.basename(r), s = PATH.basename(t);
      try {
        e = FS.lookupPath(r, { parent: true }).node, n = FS.lookupPath(t, { parent: true }).node;
      } catch (e2) {
        throw new FS.ErrnoError(16);
      }
      if (!e || !n) throw new FS.ErrnoError(2);
      if (e.mount !== n.mount) throw new FS.ErrnoError(18);
      var u, l = FS.lookupNode(e, a), c = PATH_FS.relative(r, i);
      if ("." !== c.charAt(0)) throw new FS.ErrnoError(22);
      if ("." !== (c = PATH_FS.relative(t, o)).charAt(0)) throw new FS.ErrnoError(39);
      try {
        u = FS.lookupNode(n, s);
      } catch (e2) {
      }
      if (l !== u) {
        var d = FS.isDir(l.mode), f = FS.mayDelete(e, a, d);
        if (f) throw new FS.ErrnoError(f);
        if (f = u ? FS.mayDelete(n, s, d) : FS.mayCreate(n, s)) throw new FS.ErrnoError(f);
        if (!e.node_ops.rename) throw new FS.ErrnoError(1);
        if (FS.isMountpoint(l) || u && FS.isMountpoint(u)) throw new FS.ErrnoError(16);
        if (n !== e && (f = FS.nodePermissions(e, "w"))) throw new FS.ErrnoError(f);
        try {
          FS.trackingDelegate.willMovePath && FS.trackingDelegate.willMovePath(r, t);
        } catch (e2) {
          console.log("FS.trackingDelegate['willMovePath']('" + r + "', '" + t + "') threw an exception: " + e2.message);
        }
        FS.hashRemoveNode(l);
        try {
          e.node_ops.rename(l, n, s);
        } catch (e2) {
          throw e2;
        } finally {
          FS.hashAddNode(l);
        }
        try {
          FS.trackingDelegate.onMovePath && FS.trackingDelegate.onMovePath(r, t);
        } catch (e2) {
          console.log("FS.trackingDelegate['onMovePath']('" + r + "', '" + t + "') threw an exception: " + e2.message);
        }
      }
    }, rmdir: function(r) {
      var e = FS.lookupPath(r, { parent: true }).node, t = PATH.basename(r), n = FS.lookupNode(e, t), o = FS.mayDelete(e, t, true);
      if (o) throw new FS.ErrnoError(o);
      if (!e.node_ops.rmdir) throw new FS.ErrnoError(1);
      if (FS.isMountpoint(n)) throw new FS.ErrnoError(16);
      try {
        FS.trackingDelegate.willDeletePath && FS.trackingDelegate.willDeletePath(r);
      } catch (e2) {
        console.log("FS.trackingDelegate['willDeletePath']('" + r + "') threw an exception: " + e2.message);
      }
      e.node_ops.rmdir(e, t), FS.destroyNode(n);
      try {
        FS.trackingDelegate.onDeletePath && FS.trackingDelegate.onDeletePath(r);
      } catch (e2) {
        console.log("FS.trackingDelegate['onDeletePath']('" + r + "') threw an exception: " + e2.message);
      }
    }, readdir: function(e) {
      var r = FS.lookupPath(e, { follow: true }).node;
      if (!r.node_ops.readdir) throw new FS.ErrnoError(20);
      return r.node_ops.readdir(r);
    }, unlink: function(r) {
      var e = FS.lookupPath(r, { parent: true }).node, t = PATH.basename(r), n = FS.lookupNode(e, t), o = FS.mayDelete(e, t, false);
      if (o) throw new FS.ErrnoError(o);
      if (!e.node_ops.unlink) throw new FS.ErrnoError(1);
      if (FS.isMountpoint(n)) throw new FS.ErrnoError(16);
      try {
        FS.trackingDelegate.willDeletePath && FS.trackingDelegate.willDeletePath(r);
      } catch (e2) {
        console.log("FS.trackingDelegate['willDeletePath']('" + r + "') threw an exception: " + e2.message);
      }
      e.node_ops.unlink(e, t), FS.destroyNode(n);
      try {
        FS.trackingDelegate.onDeletePath && FS.trackingDelegate.onDeletePath(r);
      } catch (e2) {
        console.log("FS.trackingDelegate['onDeletePath']('" + r + "') threw an exception: " + e2.message);
      }
    }, readlink: function(e) {
      var r = FS.lookupPath(e).node;
      if (!r) throw new FS.ErrnoError(2);
      if (!r.node_ops.readlink) throw new FS.ErrnoError(22);
      return PATH_FS.resolve(FS.getPath(r.parent), r.node_ops.readlink(r));
    }, stat: function(e, r) {
      var t = FS.lookupPath(e, { follow: !r }).node;
      if (!t) throw new FS.ErrnoError(2);
      if (!t.node_ops.getattr) throw new FS.ErrnoError(1);
      return t.node_ops.getattr(t);
    }, lstat: function(e) {
      return FS.stat(e, true);
    }, chmod: function(e, r, t) {
      var n;
      "string" == typeof e ? n = FS.lookupPath(e, { follow: !t }).node : n = e;
      if (!n.node_ops.setattr) throw new FS.ErrnoError(1);
      n.node_ops.setattr(n, { mode: 4095 & r | -4096 & n.mode, timestamp: Date.now() });
    }, lchmod: function(e, r) {
      FS.chmod(e, r, true);
    }, fchmod: function(e, r) {
      var t = FS.getStream(e);
      if (!t) throw new FS.ErrnoError(9);
      FS.chmod(t.node, r);
    }, chown: function(e, r, t, n) {
      var o;
      "string" == typeof e ? o = FS.lookupPath(e, { follow: !n }).node : o = e;
      if (!o.node_ops.setattr) throw new FS.ErrnoError(1);
      o.node_ops.setattr(o, { timestamp: Date.now() });
    }, lchown: function(e, r, t) {
      FS.chown(e, r, t, true);
    }, fchown: function(e, r, t) {
      var n = FS.getStream(e);
      if (!n) throw new FS.ErrnoError(9);
      FS.chown(n.node, r, t);
    }, truncate: function(e, r) {
      if (r < 0) throw new FS.ErrnoError(22);
      var t;
      "string" == typeof e ? t = FS.lookupPath(e, { follow: true }).node : t = e;
      if (!t.node_ops.setattr) throw new FS.ErrnoError(1);
      if (FS.isDir(t.mode)) throw new FS.ErrnoError(21);
      if (!FS.isFile(t.mode)) throw new FS.ErrnoError(22);
      var n = FS.nodePermissions(t, "w");
      if (n) throw new FS.ErrnoError(n);
      t.node_ops.setattr(t, { size: r, timestamp: Date.now() });
    }, ftruncate: function(e, r) {
      var t = FS.getStream(e);
      if (!t) throw new FS.ErrnoError(9);
      if (0 == (2097155 & t.flags)) throw new FS.ErrnoError(22);
      FS.truncate(t.node, r);
    }, utime: function(e, r, t) {
      var n = FS.lookupPath(e, { follow: true }).node;
      n.node_ops.setattr(n, { timestamp: Math.max(r, t) });
    }, open: function(r, e, t, n, o) {
      if ("" === r) throw new FS.ErrnoError(2);
      var i;
      if (t = void 0 === t ? 438 : t, t = 64 & (e = "string" == typeof e ? FS.modeStringToFlags(e) : e) ? 4095 & t | 32768 : 0, "object" == typeof r) i = r;
      else {
        r = PATH.normalize(r);
        try {
          i = FS.lookupPath(r, { follow: !(131072 & e) }).node;
        } catch (e2) {
        }
      }
      var a = false;
      if (64 & e) if (i) {
        if (128 & e) throw new FS.ErrnoError(17);
      } else i = FS.mknod(r, t, 0), a = true;
      if (!i) throw new FS.ErrnoError(2);
      if (FS.isChrdev(i.mode) && (e &= -513), 65536 & e && !FS.isDir(i.mode)) throw new FS.ErrnoError(20);
      if (!a) {
        var s = FS.mayOpen(i, e);
        if (s) throw new FS.ErrnoError(s);
      }
      512 & e && FS.truncate(i, 0), e &= -641;
      var u = FS.createStream({ node: i, path: FS.getPath(i), flags: e, seekable: true, position: 0, stream_ops: i.stream_ops, ungotten: [], error: false }, n, o);
      u.stream_ops.open && u.stream_ops.open(u), !Module.logReadFiles || 1 & e || (FS.readFiles || (FS.readFiles = {}), r in FS.readFiles || (FS.readFiles[r] = 1, console.log("FS.trackingDelegate error on read file: " + r)));
      try {
        if (FS.trackingDelegate.onOpenFile) {
          var l = 0;
          1 != (2097155 & e) && (l |= FS.tracking.openFlags.READ), 0 != (2097155 & e) && (l |= FS.tracking.openFlags.WRITE), FS.trackingDelegate.onOpenFile(r, l);
        }
      } catch (e2) {
        console.log("FS.trackingDelegate['onOpenFile']('" + r + "', flags) threw an exception: " + e2.message);
      }
      return u;
    }, close: function(e) {
      if (FS.isClosed(e)) throw new FS.ErrnoError(9);
      e.getdents && (e.getdents = null);
      try {
        e.stream_ops.close && e.stream_ops.close(e);
      } catch (e2) {
        throw e2;
      } finally {
        FS.closeStream(e.fd);
      }
      e.fd = null;
    }, isClosed: function(e) {
      return null === e.fd;
    }, llseek: function(e, r, t) {
      if (FS.isClosed(e)) throw new FS.ErrnoError(9);
      if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(29);
      if (0 != t && 1 != t && 2 != t) throw new FS.ErrnoError(22);
      return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
    }, read: function(e, r, t, n, o) {
      if (n < 0 || o < 0) throw new FS.ErrnoError(22);
      if (FS.isClosed(e)) throw new FS.ErrnoError(9);
      if (1 == (2097155 & e.flags)) throw new FS.ErrnoError(9);
      if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(21);
      if (!e.stream_ops.read) throw new FS.ErrnoError(22);
      var i = void 0 !== o;
      if (i) {
        if (!e.seekable) throw new FS.ErrnoError(29);
      } else o = e.position;
      var a = e.stream_ops.read(e, r, t, n, o);
      return i || (e.position += a), a;
    }, write: function(r, e, t, n, o, i) {
      if (n < 0 || o < 0) throw new FS.ErrnoError(22);
      if (FS.isClosed(r)) throw new FS.ErrnoError(9);
      if (0 == (2097155 & r.flags)) throw new FS.ErrnoError(9);
      if (FS.isDir(r.node.mode)) throw new FS.ErrnoError(21);
      if (!r.stream_ops.write) throw new FS.ErrnoError(22);
      1024 & r.flags && FS.llseek(r, 0, 2);
      var a = void 0 !== o;
      if (a) {
        if (!r.seekable) throw new FS.ErrnoError(29);
      } else o = r.position;
      var s = r.stream_ops.write(r, e, t, n, o, i);
      a || (r.position += s);
      try {
        r.path && FS.trackingDelegate.onWriteToFile && FS.trackingDelegate.onWriteToFile(r.path);
      } catch (e2) {
        console.log("FS.trackingDelegate['onWriteToFile']('" + r.path + "') threw an exception: " + e2.message);
      }
      return s;
    }, allocate: function(e, r, t) {
      if (FS.isClosed(e)) throw new FS.ErrnoError(9);
      if (r < 0 || t <= 0) throw new FS.ErrnoError(22);
      if (0 == (2097155 & e.flags)) throw new FS.ErrnoError(9);
      if (!FS.isFile(e.node.mode) && !FS.isDir(e.node.mode)) throw new FS.ErrnoError(19);
      if (!e.stream_ops.allocate) throw new FS.ErrnoError(95);
      e.stream_ops.allocate(e, r, t);
    }, mmap: function(e, r, t, n, o, i, a) {
      if (0 != (2 & i) && 0 == (2 & a) && 2 != (2097155 & e.flags)) throw new FS.ErrnoError(13);
      if (1 == (2097155 & e.flags)) throw new FS.ErrnoError(13);
      if (!e.stream_ops.mmap) throw new FS.ErrnoError(19);
      return e.stream_ops.mmap(e, r, t, n, o, i, a);
    }, msync: function(e, r, t, n, o) {
      return e && e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0;
    }, munmap: function(e) {
      return 0;
    }, ioctl: function(e, r, t) {
      if (!e.stream_ops.ioctl) throw new FS.ErrnoError(25);
      return e.stream_ops.ioctl(e, r, t);
    }, readFile: function(e, r) {
      if ((r = r || {}).flags = r.flags || "r", r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding) throw new Error('Invalid encoding type "' + r.encoding + '"');
      var t, n = FS.open(e, r.flags), o = FS.stat(e).size, i = new Uint8Array(o);
      return FS.read(n, i, 0, o, 0), "utf8" === r.encoding ? t = UTF8ArrayToString(i, 0) : "binary" === r.encoding && (t = i), FS.close(n), t;
    }, writeFile: function(e, r, t) {
      (t = t || {}).flags = t.flags || "w";
      var n = FS.open(e, t.flags, t.mode);
      if ("string" == typeof r) {
        var o = new Uint8Array(lengthBytesUTF8(r) + 1), i = stringToUTF8Array(r, o, 0, o.length);
        FS.write(n, o, 0, i, void 0, t.canOwn);
      } else {
        if (!ArrayBuffer.isView(r)) throw new Error("Unsupported data type");
        FS.write(n, r, 0, r.byteLength, void 0, t.canOwn);
      }
      FS.close(n);
    }, cwd: function() {
      return FS.currentPath;
    }, chdir: function(e) {
      var r = FS.lookupPath(e, { follow: true });
      if (null === r.node) throw new FS.ErrnoError(2);
      if (!FS.isDir(r.node.mode)) throw new FS.ErrnoError(20);
      var t = FS.nodePermissions(r.node, "x");
      if (t) throw new FS.ErrnoError(t);
      FS.currentPath = r.path;
    }, createDefaultDirectories: function() {
      FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
    }, createDefaultDevices: function() {
      var e;
      if (FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), { read: function() {
        return 0;
      }, write: function(e2, r2, t2, n, o) {
        return n;
      } }), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0)), "object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
        var r = new Uint8Array(1);
        e = function() {
          return crypto.getRandomValues(r), r[0];
        };
      } else if (ENVIRONMENT_IS_NODE) try {
        var t = require$$1;
        e = function() {
          return t.randomBytes(1)[0];
        };
      } catch (e2) {
      }
      e = e || function() {
        abort("random_device");
      }, FS.createDevice("/dev", "random", e), FS.createDevice("/dev", "urandom", e), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories: function() {
      FS.mkdir("/proc"), FS.mkdir("/proc/self"), FS.mkdir("/proc/self/fd"), FS.mount({ mount: function() {
        var e = FS.createNode("/proc/self", "fd", 16895, 73);
        return e.node_ops = { lookup: function(e2, r) {
          var t = +r, n = FS.getStream(t);
          if (!n) throw new FS.ErrnoError(9);
          var o = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: function() {
            return n.path;
          } } };
          return o.parent = o;
        } }, e;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams: function() {
      Module.stdin ? FS.createDevice("/dev", "stdin", Module.stdin) : FS.symlink("/dev/tty", "/dev/stdin"), Module.stdout ? FS.createDevice("/dev", "stdout", null, Module.stdout) : FS.symlink("/dev/tty", "/dev/stdout"), Module.stderr ? FS.createDevice("/dev", "stderr", null, Module.stderr) : FS.symlink("/dev/tty1", "/dev/stderr");
      FS.open("/dev/stdin", "r"), FS.open("/dev/stdout", "w"), FS.open("/dev/stderr", "w");
    }, ensureErrnoError: function() {
      FS.ErrnoError || (FS.ErrnoError = function(e, r) {
        this.node = r, this.setErrno = function(e2) {
          this.errno = e2;
        }, this.setErrno(e), this.message = "FS error", this.stack && Object.defineProperty(this, "stack", { value: new Error().stack, writable: true });
      }, FS.ErrnoError.prototype = new Error(), FS.ErrnoError.prototype.constructor = FS.ErrnoError, [2].forEach(function(e) {
        FS.genericErrors[e] = new FS.ErrnoError(e), FS.genericErrors[e].stack = "<generic error, no stack>";
      }));
    }, staticInit: function() {
      FS.ensureErrnoError(), FS.nameTable = new Array(4096), FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories(), FS.filesystems = { MEMFS, IDBFS, NODEFS, WORKERFS };
    }, init: function(e, r, t) {
      FS.init.initialized = true, FS.ensureErrnoError(), Module.stdin = e || Module.stdin, Module.stdout = r || Module.stdout, Module.stderr = t || Module.stderr, FS.createStandardStreams();
    }, quit: function() {
      FS.init.initialized = false;
      var e = Module._fflush;
      e && e(0);
      for (var r = 0; r < FS.streams.length; r++) {
        var t = FS.streams[r];
        t && FS.close(t);
      }
    }, getMode: function(e, r) {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    }, joinPath: function(e, r) {
      var t = PATH.join.apply(null, e);
      return r && "/" == t[0] && (t = t.substr(1)), t;
    }, absolutePath: function(e, r) {
      return PATH_FS.resolve(r, e);
    }, standardizePath: function(e) {
      return PATH.normalize(e);
    }, findObject: function(e, r) {
      var t = FS.analyzePath(e, r);
      return t.exists ? t.object : (___setErrNo(t.error), null);
    }, analyzePath: function(e, r) {
      try {
        e = (n = FS.lookupPath(e, { follow: !r })).path;
      } catch (e2) {
      }
      var t = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
      try {
        var n = FS.lookupPath(e, { parent: true });
        t.parentExists = true, t.parentPath = n.path, t.parentObject = n.node, t.name = PATH.basename(e), n = FS.lookupPath(e, { follow: !r }), t.exists = true, t.path = n.path, t.object = n.node, t.name = n.node.name, t.isRoot = "/" === n.path;
      } catch (e2) {
        t.error = e2.errno;
      }
      return t;
    }, createFolder: function(e, r, t, n) {
      var o = PATH.join2("string" == typeof e ? e : FS.getPath(e), r), i = FS.getMode(t, n);
      return FS.mkdir(o, i);
    }, createPath: function(e, r, t, n) {
      e = "string" == typeof e ? e : FS.getPath(e);
      for (var o = r.split("/").reverse(); o.length; ) {
        var i = o.pop();
        if (i) {
          var a = PATH.join2(e, i);
          try {
            FS.mkdir(a);
          } catch (e2) {
          }
          e = a;
        }
      }
      return a;
    }, createFile: function(e, r, t, n, o) {
      var i = PATH.join2("string" == typeof e ? e : FS.getPath(e), r), a = FS.getMode(n, o);
      return FS.create(i, a);
    }, createDataFile: function(e, r, t, n, o, i) {
      var a = r ? PATH.join2("string" == typeof e ? e : FS.getPath(e), r) : e, s = FS.getMode(n, o), u = FS.create(a, s);
      if (t) {
        if ("string" == typeof t) {
          for (var l = new Array(t.length), c = 0, d = t.length; c < d; ++c) l[c] = t.charCodeAt(c);
          t = l;
        }
        FS.chmod(u, 146 | s);
        var f = FS.open(u, "w");
        FS.write(f, t, 0, t.length, 0, i), FS.close(f), FS.chmod(u, s);
      }
      return u;
    }, createDevice: function(e, r, u, a) {
      var t = PATH.join2("string" == typeof e ? e : FS.getPath(e), r), n = FS.getMode(!!u, !!a);
      FS.createDevice.major || (FS.createDevice.major = 64);
      var o = FS.makedev(FS.createDevice.major++, 0);
      return FS.registerDevice(o, { open: function(e2) {
        e2.seekable = false;
      }, close: function(e2) {
        a && a.buffer && a.buffer.length && a(10);
      }, read: function(e2, r2, t2, n2, o2) {
        for (var i = 0, a2 = 0; a2 < n2; a2++) {
          var s;
          try {
            s = u();
          } catch (e3) {
            throw new FS.ErrnoError(5);
          }
          if (void 0 === s && 0 === i) throw new FS.ErrnoError(11);
          if (null == s) break;
          i++, r2[t2 + a2] = s;
        }
        return i && (e2.node.timestamp = Date.now()), i;
      }, write: function(e2, r2, t2, n2, o2) {
        for (var i = 0; i < n2; i++) try {
          a(r2[t2 + i]);
        } catch (e3) {
          throw new FS.ErrnoError(5);
        }
        return n2 && (e2.node.timestamp = Date.now()), i;
      } }), FS.mkdev(t, n, o);
    }, createLink: function(e, r, t, n, o) {
      var i = PATH.join2("string" == typeof e ? e : FS.getPath(e), r);
      return FS.symlink(t, i);
    }, forceLoadFile: function(e) {
      if (e.isDevice || e.isFolder || e.link || e.contents) return true;
      var r = true;
      if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      if (!read_) throw new Error("Cannot load without read() or XMLHttpRequest.");
      try {
        e.contents = intArrayFromString(read_(e.url), true), e.usedBytes = e.contents.length;
      } catch (e2) {
        r = false;
      }
      return r || ___setErrNo(5), r;
    }, createLazyFile: function(e, r, s, t, n) {
      function o() {
        this.lengthKnown = false, this.chunks = [];
      }
      if (o.prototype.get = function(e2) {
        if (!(e2 > this.length - 1 || e2 < 0)) {
          var r2 = e2 % this.chunkSize, t2 = e2 / this.chunkSize | 0;
          return this.getter(t2)[r2];
        }
      }, o.prototype.setDataGetter = function(e2) {
        this.getter = e2;
      }, o.prototype.cacheLength = function() {
        var e2 = new XMLHttpRequest();
        if (e2.open("HEAD", s, false), e2.send(null), !(200 <= e2.status && e2.status < 300 || 304 === e2.status)) throw new Error("Couldn't load " + s + ". Status: " + e2.status);
        var r2, n2 = Number(e2.getResponseHeader("Content-length")), t2 = (r2 = e2.getResponseHeader("Accept-Ranges")) && "bytes" === r2, o2 = (r2 = e2.getResponseHeader("Content-Encoding")) && "gzip" === r2, i2 = 1048576;
        t2 || (i2 = n2);
        var a2 = this;
        a2.setDataGetter(function(e3) {
          var r3 = e3 * i2, t3 = (e3 + 1) * i2 - 1;
          if (t3 = Math.min(t3, n2 - 1), void 0 === a2.chunks[e3] && (a2.chunks[e3] = function(e4, r4) {
            if (r4 < e4) throw new Error("invalid range (" + e4 + ", " + r4 + ") or no bytes requested!");
            if (n2 - 1 < r4) throw new Error("only " + n2 + " bytes available! programmer error!");
            var t4 = new XMLHttpRequest();
            if (t4.open("GET", s, false), n2 !== i2 && t4.setRequestHeader("Range", "bytes=" + e4 + "-" + r4), "undefined" != typeof Uint8Array && (t4.responseType = "arraybuffer"), t4.overrideMimeType && t4.overrideMimeType("text/plain; charset=x-user-defined"), t4.send(null), !(200 <= t4.status && t4.status < 300 || 304 === t4.status)) throw new Error("Couldn't load " + s + ". Status: " + t4.status);
            return void 0 !== t4.response ? new Uint8Array(t4.response || []) : intArrayFromString(t4.responseText || "", true);
          }(r3, t3)), void 0 === a2.chunks[e3]) throw new Error("doXHR failed!");
          return a2.chunks[e3];
        }), !o2 && n2 || (i2 = n2 = 1, n2 = this.getter(0).length, i2 = n2, console.log("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = n2, this._chunkSize = i2, this.lengthKnown = true;
      }, "undefined" != typeof XMLHttpRequest) {
        if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var i = new o();
        Object.defineProperties(i, { length: { get: function() {
          return this.lengthKnown || this.cacheLength(), this._length;
        } }, chunkSize: { get: function() {
          return this.lengthKnown || this.cacheLength(), this._chunkSize;
        } } });
        var a = { isDevice: false, contents: i };
      } else a = { isDevice: false, url: s };
      var u = FS.createFile(e, r, a, t, n);
      a.contents ? u.contents = a.contents : a.url && (u.contents = null, u.url = a.url), Object.defineProperties(u, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var l = {};
      return Object.keys(u.stream_ops).forEach(function(e2) {
        var r2 = u.stream_ops[e2];
        l[e2] = function() {
          if (!FS.forceLoadFile(u)) throw new FS.ErrnoError(5);
          return r2.apply(null, arguments);
        };
      }), l.read = function(e2, r2, t2, n2, o2) {
        if (!FS.forceLoadFile(u)) throw new FS.ErrnoError(5);
        var i2 = e2.node.contents;
        if (o2 >= i2.length) return 0;
        var a2 = Math.min(i2.length - o2, n2);
        if (i2.slice) for (var s2 = 0; s2 < a2; s2++) r2[t2 + s2] = i2[o2 + s2];
        else for (s2 = 0; s2 < a2; s2++) r2[t2 + s2] = i2.get(o2 + s2);
        return a2;
      }, u.stream_ops = l, u;
    }, createPreloadedFile: function(o, i, e, a, s, u, l, c, d, f) {
      Browser.init();
      var m = i ? PATH_FS.resolve(PATH.join2(o, i)) : o;
      function r(r2) {
        function t(e2) {
          f && f(), c || FS.createDataFile(o, i, e2, a, s, d), u && u(), removeRunDependency();
        }
        var n = false;
        Module.preloadPlugins.forEach(function(e2) {
          n || e2.canHandle(m) && (e2.handle(r2, m, t, function() {
            l && l(), removeRunDependency();
          }), n = true);
        }), n || t(r2);
      }
      addRunDependency(), "string" == typeof e ? Browser.asyncLoad(e, function(e2) {
        r(e2);
      }, l) : r(e);
    }, indexedDB: function() {
      return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    }, DB_NAME: function() {
      return "EM_FS_" + window.location.pathname;
    }, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: function(r, s, u) {
      s = s || function() {
      }, u = u || function() {
      };
      var e = FS.indexedDB();
      try {
        var l = e.open(FS.DB_NAME(), FS.DB_VERSION);
      } catch (e2) {
        return u(e2);
      }
      l.onupgradeneeded = function() {
        console.log("creating db"), l.result.createObjectStore(FS.DB_STORE_NAME);
      }, l.onsuccess = function() {
        var e2 = l.result.transaction([FS.DB_STORE_NAME], "readwrite"), t = e2.objectStore(FS.DB_STORE_NAME), n = 0, o = 0, i = r.length;
        function a() {
          0 == o ? s() : u();
        }
        r.forEach(function(e3) {
          var r2 = t.put(FS.analyzePath(e3).object.contents, e3);
          r2.onsuccess = function() {
            ++n + o == i && a();
          }, r2.onerror = function() {
            n + ++o == i && a();
          };
        }), e2.onerror = u;
      }, l.onerror = u;
    }, loadFilesFromDB: function(s, u, l) {
      u = u || function() {
      }, l = l || function() {
      };
      var e = FS.indexedDB();
      try {
        var c = e.open(FS.DB_NAME(), FS.DB_VERSION);
      } catch (e2) {
        return l(e2);
      }
      c.onupgradeneeded = l, c.onsuccess = function() {
        var e2 = c.result;
        try {
          var r = e2.transaction([FS.DB_STORE_NAME], "readonly");
        } catch (e3) {
          return void l(e3);
        }
        var t = r.objectStore(FS.DB_STORE_NAME), n = 0, o = 0, i = s.length;
        function a() {
          0 == o ? u() : l();
        }
        s.forEach(function(e3) {
          var r2 = t.get(e3);
          r2.onsuccess = function() {
            FS.analyzePath(e3).exists && FS.unlink(e3), FS.createDataFile(PATH.dirname(e3), PATH.basename(e3), r2.result, true, true, true), ++n + o == i && a();
          }, r2.onerror = function() {
            n + ++o == i && a();
          };
        }), r.onerror = l;
      }, c.onerror = l;
    } }, SYSCALLS = { DEFAULT_POLLMASK: 5, mappings: {}, umask: 511, calculateAt: function(e, r) {
      if ("/" !== r[0]) {
        var t;
        if (-100 === e) t = FS.cwd();
        else {
          var n = FS.getStream(e);
          if (!n) throw new FS.ErrnoError(9);
          t = n.path;
        }
        r = PATH.join2(t, r);
      }
      return r;
    }, doStat: function(e, r, t) {
      try {
        var n = e(r);
      } catch (e2) {
        if (e2 && e2.node && PATH.normalize(r) !== PATH.normalize(FS.getPath(e2.node))) return -20;
        throw e2;
      }
      return HEAP32[t >> 2] = n.dev, HEAP32[t + 4 >> 2] = 0, HEAP32[t + 8 >> 2] = n.ino, HEAP32[t + 12 >> 2] = n.mode, HEAP32[t + 16 >> 2] = n.nlink, HEAP32[t + 20 >> 2] = n.uid, HEAP32[t + 24 >> 2] = n.gid, HEAP32[t + 28 >> 2] = n.rdev, HEAP32[t + 32 >> 2] = 0, tempI64 = [n.size >>> 0, (tempDouble = n.size, 1 <= +Math_abs(tempDouble) ? 0 < tempDouble ? (0 | Math_min(+Math_floor(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[t + 40 >> 2] = tempI64[0], HEAP32[t + 44 >> 2] = tempI64[1], HEAP32[t + 48 >> 2] = 4096, HEAP32[t + 52 >> 2] = n.blocks, HEAP32[t + 56 >> 2] = n.atime.getTime() / 1e3 | 0, HEAP32[t + 60 >> 2] = 0, HEAP32[t + 64 >> 2] = n.mtime.getTime() / 1e3 | 0, HEAP32[t + 68 >> 2] = 0, HEAP32[t + 72 >> 2] = n.ctime.getTime() / 1e3 | 0, HEAP32[t + 76 >> 2] = 0, tempI64 = [n.ino >>> 0, (tempDouble = n.ino, 1 <= +Math_abs(tempDouble) ? 0 < tempDouble ? (0 | Math_min(+Math_floor(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[t + 80 >> 2] = tempI64[0], HEAP32[t + 84 >> 2] = tempI64[1], 0;
    }, doMsync: function(e, r, t, n) {
      var o = new Uint8Array(HEAPU8.subarray(e, e + t));
      FS.msync(r, o, 0, t, n);
    }, doMkdir: function(e, r) {
      return "/" === (e = PATH.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)), FS.mkdir(e, r, 0), 0;
    }, doMknod: function(e, r, t) {
      switch (61440 & r) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -22;
      }
      return FS.mknod(e, r, t), 0;
    }, doReadlink: function(e, r, t) {
      if (t <= 0) return -22;
      var n = FS.readlink(e), o = Math.min(t, lengthBytesUTF8(n)), i = HEAP8[r + o];
      return stringToUTF8(n, r, t + 1), HEAP8[r + o] = i, o;
    }, doAccess: function(e, r) {
      if (-8 & r) return -22;
      var t;
      if (!(t = FS.lookupPath(e, { follow: true }).node)) return -2;
      var n = "";
      return 4 & r && (n += "r"), 2 & r && (n += "w"), 1 & r && (n += "x"), n && FS.nodePermissions(t, n) ? -13 : 0;
    }, doDup: function(e, r, t) {
      var n = FS.getStream(t);
      return n && FS.close(n), FS.open(e, r, 0, t, t).fd;
    }, doReadv: function(e, r, t, n) {
      for (var o = 0, i = 0; i < t; i++) {
        var a = HEAP32[r + 8 * i >> 2], s = HEAP32[r + (8 * i + 4) >> 2], u = FS.read(e, HEAP8, a, s, n);
        if (u < 0) return -1;
        if (o += u, u < s) break;
      }
      return o;
    }, doWritev: function(e, r, t, n) {
      for (var o = 0, i = 0; i < t; i++) {
        var a = HEAP32[r + 8 * i >> 2], s = HEAP32[r + (8 * i + 4) >> 2], u = FS.write(e, HEAP8, a, s, n);
        if (u < 0) return -1;
        o += u;
      }
      return o;
    }, varargs: 0, get: function(e) {
      return SYSCALLS.varargs += 4, HEAP32[SYSCALLS.varargs - 4 >> 2];
    }, getStr: function() {
      return UTF8ToString(SYSCALLS.get());
    }, getStreamFromFD: function() {
      var e = FS.getStream(SYSCALLS.get());
      if (!e) throw new FS.ErrnoError(9);
      return e;
    }, get64: function() {
      var e = SYSCALLS.get();
      SYSCALLS.get();
      return e;
    }, getZero: function() {
      SYSCALLS.get();
    } };
    function ___syscall140(e, r) {
      SYSCALLS.varargs = r;
      try {
        var t = SYSCALLS.getStreamFromFD(), n = SYSCALLS.get(), o = SYSCALLS.get(), i = SYSCALLS.get(), a = SYSCALLS.get(), s = 4294967296 * n + (o >>> 0), u = 9007199254740992;
        return s <= -u || u <= s ? -75 : (FS.llseek(t, s, a), tempI64 = [t.position >>> 0, (tempDouble = t.position, 1 <= +Math_abs(tempDouble) ? 0 < tempDouble ? (0 | Math_min(+Math_floor(tempDouble / 4294967296), 4294967295)) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[i >> 2] = tempI64[0], HEAP32[i + 4 >> 2] = tempI64[1], t.getdents && 0 == s && 0 === a && (t.getdents = null), 0);
      } catch (e2) {
        return void 0 !== FS && e2 instanceof FS.ErrnoError || abort(e2), -e2.errno;
      }
    }
    function ___syscall145(e, r) {
      SYSCALLS.varargs = r;
      try {
        var t = SYSCALLS.getStreamFromFD(), n = SYSCALLS.get(), o = SYSCALLS.get();
        return SYSCALLS.doReadv(t, n, o);
      } catch (e2) {
        return void 0 !== FS && e2 instanceof FS.ErrnoError || abort(e2), -e2.errno;
      }
    }
    function ___syscall146(e, r) {
      SYSCALLS.varargs = r;
      try {
        var t = SYSCALLS.getStreamFromFD(), n = SYSCALLS.get(), o = SYSCALLS.get();
        return SYSCALLS.doWritev(t, n, o);
      } catch (e2) {
        return void 0 !== FS && e2 instanceof FS.ErrnoError || abort(e2), -e2.errno;
      }
    }
    function ___syscall221(e, r) {
      SYSCALLS.varargs = r;
      try {
        var t = SYSCALLS.getStreamFromFD();
        switch (SYSCALLS.get()) {
          case 0:
            return (n = SYSCALLS.get()) < 0 ? -22 : FS.open(t.path, t.flags, 0, n).fd;
          case 1:
          case 2:
            return 0;
          case 3:
            return t.flags;
          case 4:
            var n = SYSCALLS.get();
            return t.flags |= n, 0;
          case 12:
            n = SYSCALLS.get();
            return HEAP16[n + 0 >> 1] = 2, 0;
          case 13:
          case 14:
            return 0;
          case 16:
          case 8:
            return -22;
          case 9:
            return ___setErrNo(22), -1;
          default:
            return -22;
        }
      } catch (e2) {
        return void 0 !== FS && e2 instanceof FS.ErrnoError || abort(e2), -e2.errno;
      }
    }
    function ___syscall5(e, r) {
      SYSCALLS.varargs = r;
      try {
        var t = SYSCALLS.getStr(), n = SYSCALLS.get(), o = SYSCALLS.get();
        return FS.open(t, n, o).fd;
      } catch (e2) {
        return void 0 !== FS && e2 instanceof FS.ErrnoError || abort(e2), -e2.errno;
      }
    }
    function ___syscall54(e, r) {
      SYSCALLS.varargs = r;
      try {
        var t = SYSCALLS.getStreamFromFD(), n = SYSCALLS.get();
        switch (n) {
          case 21509:
          case 21505:
            return t.tty ? 0 : -25;
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508:
            return t.tty ? 0 : -25;
          case 21519:
            if (!t.tty) return -25;
            var o = SYSCALLS.get();
            return HEAP32[o >> 2] = 0;
          case 21520:
            return t.tty ? -22 : -25;
          case 21531:
            o = SYSCALLS.get();
            return FS.ioctl(t, n, o);
          case 21523:
          case 21524:
            return t.tty ? 0 : -25;
          default:
            abort("bad ioctl syscall " + n);
        }
      } catch (e2) {
        return void 0 !== FS && e2 instanceof FS.ErrnoError || abort(e2), -e2.errno;
      }
    }
    function ___syscall6(e, r) {
      SYSCALLS.varargs = r;
      try {
        var t = SYSCALLS.getStreamFromFD();
        return FS.close(t), 0;
      } catch (e2) {
        return void 0 !== FS && e2 instanceof FS.ErrnoError || abort(e2), -e2.errno;
      }
    }
    function __emscripten_syscall_munmap(e, r) {
      if (-1 === e || 0 === r) return -22;
      var t = SYSCALLS.mappings[e];
      if (!t) return 0;
      if (r === t.len) {
        var n = FS.getStream(t.fd);
        SYSCALLS.doMsync(e, n, r, t.flags), SYSCALLS.mappings[e] = null, t.allocated && _free(t.malloc);
      }
      return 0;
    }
    function ___syscall91(e, r) {
      SYSCALLS.varargs = r;
      try {
        return __emscripten_syscall_munmap(SYSCALLS.get(), SYSCALLS.get());
      } catch (e2) {
        return void 0 !== FS && e2 instanceof FS.ErrnoError || abort(e2), -e2.errno;
      }
    }
    function ___unlock() {
    }
    function _abort() {
      Module.abort();
    }
    function _emscripten_get_now() {
      abort();
    }
    function _emscripten_get_now_is_monotonic() {
      return ENVIRONMENT_IS_NODE || "undefined" != typeof dateNow || "object" == typeof performance && performance && "function" == typeof performance.now;
    }
    function _clock_gettime(e, r) {
      var t;
      if (0 === e) t = Date.now();
      else {
        if (1 !== e || !_emscripten_get_now_is_monotonic()) return ___setErrNo(22), -1;
        t = _emscripten_get_now();
      }
      return HEAP32[r >> 2] = t / 1e3 | 0, HEAP32[r + 4 >> 2] = t % 1e3 * 1e3 * 1e3 | 0, 0;
    }
    function _emscripten_set_main_loop_timing(e, r) {
      if (Browser.mainLoop.timingMode = e, Browser.mainLoop.timingValue = r, !Browser.mainLoop.func) return 1;
      if (0 == e) Browser.mainLoop.scheduler = function() {
        var e2 = 0 | Math.max(0, Browser.mainLoop.tickStartTime + r - _emscripten_get_now());
        setTimeout(Browser.mainLoop.runner, e2);
      }, Browser.mainLoop.method = "timeout";
      else if (1 == e) Browser.mainLoop.scheduler = function() {
        Browser.requestAnimationFrame(Browser.mainLoop.runner);
      }, Browser.mainLoop.method = "rAF";
      else if (2 == e) {
        if ("undefined" == typeof setImmediate) {
          var t = [], n = "setimmediate";
          addEventListener("message", function(e2) {
            e2.data !== n && e2.data.target !== n || (e2.stopPropagation(), t.shift()());
          }, true), setImmediate = function(e2) {
            t.push(e2), ENVIRONMENT_IS_WORKER ? (void 0 === Module.setImmediates && (Module.setImmediates = []), Module.setImmediates.push(e2), postMessage({ target: n })) : postMessage(n, "*");
          };
        }
        Browser.mainLoop.scheduler = function() {
          setImmediate(Browser.mainLoop.runner);
        }, Browser.mainLoop.method = "immediate";
      }
      return 0;
    }
    function _emscripten_set_main_loop(e, r, t, n, o) {
      var i;
      Module.noExitRuntime = true, assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), Browser.mainLoop.func = e, Browser.mainLoop.arg = n, i = void 0 !== n ? function() {
        Module.dynCall_vi(e, n);
      } : function() {
        Module.dynCall_v(e);
      };
      var a = Browser.mainLoop.currentlyRunningMainloop;
      if (Browser.mainLoop.runner = function() {
        if (!ABORT) if (0 < Browser.mainLoop.queue.length) {
          var e2 = Date.now(), r2 = Browser.mainLoop.queue.shift();
          if (r2.func(r2.arg), Browser.mainLoop.remainingBlockers) {
            var t2 = Browser.mainLoop.remainingBlockers, n2 = t2 % 1 == 0 ? t2 - 1 : Math.floor(t2);
            r2.counted ? Browser.mainLoop.remainingBlockers = n2 : (n2 += 0.5, Browser.mainLoop.remainingBlockers = (8 * t2 + n2) / 9);
          }
          if (console.log('main loop blocker "' + r2.name + '" took ' + (Date.now() - e2) + " ms"), Browser.mainLoop.updateStatus(), a < Browser.mainLoop.currentlyRunningMainloop) return;
          setTimeout(Browser.mainLoop.runner, 0);
        } else a < Browser.mainLoop.currentlyRunningMainloop || (Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0, 1 == Browser.mainLoop.timingMode && 1 < Browser.mainLoop.timingValue && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0 ? Browser.mainLoop.scheduler() : (0 == Browser.mainLoop.timingMode && (Browser.mainLoop.tickStartTime = _emscripten_get_now()), "timeout" === Browser.mainLoop.method && Module.ctx && (err("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), Browser.mainLoop.method = ""), Browser.mainLoop.runIter(i), a < Browser.mainLoop.currentlyRunningMainloop || ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), Browser.mainLoop.scheduler())));
      }, t) ;
    }
    var Browser = { mainLoop: { scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function() {
      Browser.mainLoop.scheduler = null, Browser.mainLoop.currentlyRunningMainloop++;
    }, resume: function() {
      Browser.mainLoop.currentlyRunningMainloop++;
      var e = Browser.mainLoop.timingMode, r = Browser.mainLoop.timingValue, t = Browser.mainLoop.func;
      Browser.mainLoop.func = null, _emscripten_set_main_loop(t, 0, false, Browser.mainLoop.arg), _emscripten_set_main_loop_timing(e, r), Browser.mainLoop.scheduler();
    }, updateStatus: function() {
      if (Module.setStatus) {
        var e = Module.statusMessage || "Please wait...", r = Browser.mainLoop.remainingBlockers, t = Browser.mainLoop.expectedBlockers;
        r ? r < t ? Module.setStatus(e + " (" + (t - r) + "/" + t + ")") : Module.setStatus(e) : Module.setStatus("");
      }
    }, runIter: function(e) {
      if (!ABORT) {
        if (Module.preMainLoop) {
          if (false === Module.preMainLoop()) return;
        }
        try {
          e();
        } catch (e2) {
          if (e2 instanceof ExitStatus) return;
          throw e2 && "object" == typeof e2 && e2.stack && err("exception thrown: " + [e2, e2.stack]), e2;
        }
        Module.postMainLoop && Module.postMainLoop();
      }
    } }, isFullscreen: false, pointerLock: false, moduleContextCreatedCallbacks: [], workers: [], init: function() {
      if (Module.preloadPlugins || (Module.preloadPlugins = []), !Browser.initted) {
        Browser.initted = true;
        try {
          new Blob(), Browser.hasBlobConstructor = true;
        } catch (e2) {
          Browser.hasBlobConstructor = false, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Browser.hasBlobConstructor ? null : console.log("warning: no BlobBuilder"), Browser.URLObject = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0, Module.noImageDecoding || void 0 !== Browser.URLObject || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), Module.noImageDecoding = true);
        var e = { canHandle: function(e2) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e2);
        }, handle: function(r2, t2, n2, o) {
          var e2 = null;
          if (Browser.hasBlobConstructor) try {
            (e2 = new Blob([r2], { type: Browser.getMimetype(t2) })).size !== r2.length && (e2 = new Blob([new Uint8Array(r2).buffer], { type: Browser.getMimetype(t2) }));
          } catch (e3) {
            warnOnce("Blob constructor present but fails: " + e3 + "; falling back to blob builder");
          }
          if (!e2) {
            var i = new Browser.BlobBuilder();
            i.append(new Uint8Array(r2).buffer), e2 = i.getBlob();
          }
          var a = Browser.URLObject.createObjectURL(e2), s = new Image();
          s.onload = function() {
            assert(s.complete, "Image " + t2 + " could not be decoded");
            var e3 = document.createElement("canvas");
            e3.width = s.width, e3.height = s.height, e3.getContext("2d").drawImage(s, 0, 0), Module.preloadedImages[t2] = e3, Browser.URLObject.revokeObjectURL(a), n2 && n2(r2);
          }, s.onerror = function(e3) {
            console.log("Image " + a + " could not be decoded"), o && o();
          }, s.src = a;
        } };
        Module.preloadPlugins.push(e);
        var r = { canHandle: function(e2) {
          return !Module.noAudioDecoding && e2.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
        }, handle: function(r2, t2, n2, e2) {
          var o = false;
          function i(e3) {
            o || (o = true, Module.preloadedAudios[t2] = e3, n2 && n2(r2));
          }
          function a() {
            o || (o = true, Module.preloadedAudios[t2] = new Audio(), e2 && e2());
          }
          if (!Browser.hasBlobConstructor) return a();
          try {
            var s = new Blob([r2], { type: Browser.getMimetype(t2) });
          } catch (e3) {
            return a();
          }
          var u = Browser.URLObject.createObjectURL(s), l = new Audio();
          l.addEventListener("canplaythrough", function() {
            i(l);
          }, false), l.onerror = function(e3) {
            o || (console.log("warning: browser could not fully decode audio " + t2 + ", trying slower base64 approach"), l.src = "data:audio/x-" + t2.substr(-3) + ";base64," + function(e4) {
              for (var r3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t3 = "", n3 = 0, o2 = 0, i2 = 0; i2 < e4.length; i2++) for (n3 = n3 << 8 | e4[i2], o2 += 8; 6 <= o2; ) {
                var a2 = n3 >> o2 - 6 & 63;
                o2 -= 6, t3 += r3[a2];
              }
              return 2 == o2 ? (t3 += r3[(3 & n3) << 4], t3 += "==") : 4 == o2 && (t3 += r3[(15 & n3) << 2], t3 += "="), t3;
            }(r2), i(l));
          }, l.src = u, Browser.safeSetTimeout(function() {
            i(l);
          }, 1e4);
        } };
        Module.preloadPlugins.push(r);
        var t = Module.canvas;
        t && (t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock || t.msRequestPointerLock || function() {
        }, t.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {
        }, t.exitPointerLock = t.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", n, false), document.addEventListener("mozpointerlockchange", n, false), document.addEventListener("webkitpointerlockchange", n, false), document.addEventListener("mspointerlockchange", n, false), Module.elementPointerLock && t.addEventListener("click", function(e2) {
          !Browser.pointerLock && Module.canvas.requestPointerLock && (Module.canvas.requestPointerLock(), e2.preventDefault());
        }, false));
      }
      function n() {
        Browser.pointerLock = document.pointerLockElement === Module.canvas || document.mozPointerLockElement === Module.canvas || document.webkitPointerLockElement === Module.canvas || document.msPointerLockElement === Module.canvas;
      }
    }, createContext: function(e, r, t, n) {
      if (r && Module.ctx && e == Module.canvas) return Module.ctx;
      var o, i;
      if (r) {
        var a = { antialias: false, alpha: false, majorVersion: 1 };
        if (n) for (var s in n) a[s] = n[s];
        "undefined" != typeof GL && (i = GL.createContext(e, a)) && (o = GL.getContext(i).GLctx);
      } else o = e.getContext("2d");
      return o ? (t && (r || assert("undefined" == typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), Module.ctx = o, r && GL.makeContextCurrent(i), Module.useWebGL = r, Browser.moduleContextCreatedCallbacks.forEach(function(e2) {
        e2();
      }), Browser.init()), o) : null;
    }, destroyContext: function(e, r, t) {
    }, fullscreenHandlersInstalled: false, lockPointer: void 0, resizeCanvas: void 0, requestFullscreen: function(e, r, t) {
      Browser.lockPointer = e, Browser.resizeCanvas = r, Browser.vrDevice = t, void 0 === Browser.lockPointer && (Browser.lockPointer = true), void 0 === Browser.resizeCanvas && (Browser.resizeCanvas = false), void 0 === Browser.vrDevice && (Browser.vrDevice = null);
      var n = Module.canvas;
      function o() {
        Browser.isFullscreen = false;
        var e2 = n.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e2 ? (n.exitFullscreen = Browser.exitFullscreen, Browser.lockPointer && n.requestPointerLock(), Browser.isFullscreen = true, Browser.resizeCanvas ? Browser.setFullscreenCanvasSize() : Browser.updateCanvasDimensions(n)) : (e2.parentNode.insertBefore(n, e2), e2.parentNode.removeChild(e2), Browser.resizeCanvas ? Browser.setWindowedCanvasSize() : Browser.updateCanvasDimensions(n)), Module.onFullScreen && Module.onFullScreen(Browser.isFullscreen), Module.onFullscreen && Module.onFullscreen(Browser.isFullscreen);
      }
      Browser.fullscreenHandlersInstalled || (Browser.fullscreenHandlersInstalled = true, document.addEventListener("fullscreenchange", o, false), document.addEventListener("mozfullscreenchange", o, false), document.addEventListener("webkitfullscreenchange", o, false), document.addEventListener("MSFullscreenChange", o, false));
      var i = document.createElement("div");
      n.parentNode.insertBefore(i, n), i.appendChild(n), i.requestFullscreen = i.requestFullscreen || i.mozRequestFullScreen || i.msRequestFullscreen || (i.webkitRequestFullscreen ? function() {
        i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (i.webkitRequestFullScreen ? function() {
        i.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null), t ? i.requestFullscreen({ vrDisplay: t }) : i.requestFullscreen();
    }, requestFullScreen: function(e, r, t) {
      return err("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead."), Browser.requestFullScreen = function(e2, r2, t2) {
        return Browser.requestFullscreen(e2, r2, t2);
      }, Browser.requestFullscreen(e, r, t);
    }, exitFullscreen: function() {
      return !!Browser.isFullscreen && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
      }).apply(document, []), true);
    }, nextRAF: 0, fakeRequestAnimationFrame: function(e) {
      var r = Date.now();
      if (0 === Browser.nextRAF) Browser.nextRAF = r + 1e3 / 60;
      else for (; r + 2 >= Browser.nextRAF; ) Browser.nextRAF += 1e3 / 60;
      var t = Math.max(Browser.nextRAF - r, 0);
      setTimeout(e, t);
    }, requestAnimationFrame: function(e) {
      "function" != typeof requestAnimationFrame ? (0, Browser.fakeRequestAnimationFrame)(e) : requestAnimationFrame(e);
    }, safeCallback: function(e) {
      return function() {
        if (!ABORT) return e.apply(null, arguments);
      };
    }, allowAsyncCallbacks: true, queuedAsyncCallbacks: [], pauseAsyncCallbacks: function() {
      Browser.allowAsyncCallbacks = false;
    }, resumeAsyncCallbacks: function() {
      if (Browser.allowAsyncCallbacks = true, 0 < Browser.queuedAsyncCallbacks.length) {
        var e = Browser.queuedAsyncCallbacks;
        Browser.queuedAsyncCallbacks = [], e.forEach(function(e2) {
          e2();
        });
      }
    }, safeRequestAnimationFrame: function(e) {
      return Browser.requestAnimationFrame(function() {
        ABORT || (Browser.allowAsyncCallbacks ? e() : Browser.queuedAsyncCallbacks.push(e));
      });
    }, safeSetTimeout: function(e, r) {
      return Module.noExitRuntime = true, setTimeout(function() {
        ABORT || (Browser.allowAsyncCallbacks ? e() : Browser.queuedAsyncCallbacks.push(e));
      }, r);
    }, safeSetInterval: function(e, r) {
      return Module.noExitRuntime = true, setInterval(function() {
        ABORT || Browser.allowAsyncCallbacks && e();
      }, r);
    }, getMimetype: function(e) {
      return { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg" }[e.substr(e.lastIndexOf(".") + 1)];
    }, getUserMedia: function(e) {
      window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e);
    }, getMovementX: function(e) {
      return e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    }, getMovementY: function(e) {
      return e.movementY || e.mozMovementY || e.webkitMovementY || 0;
    }, getMouseWheelDelta: function(e) {
      var r = 0;
      switch (e.type) {
        case "DOMMouseScroll":
          r = e.detail / 3;
          break;
        case "mousewheel":
          r = e.wheelDelta / 120;
          break;
        case "wheel":
          switch (r = e.deltaY, e.deltaMode) {
            case 0:
              r /= 100;
              break;
            case 1:
              r /= 3;
              break;
            case 2:
              r *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + e.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + e.type;
      }
      return r;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function(e) {
      if (Browser.pointerLock) "mousemove" != e.type && "mozMovementX" in e ? Browser.mouseMovementX = Browser.mouseMovementY = 0 : (Browser.mouseMovementX = Browser.getMovementX(e), Browser.mouseMovementY = Browser.getMovementY(e)), "undefined" != typeof SDL ? (Browser.mouseX = SDL.mouseX + Browser.mouseMovementX, Browser.mouseY = SDL.mouseY + Browser.mouseMovementY) : (Browser.mouseX += Browser.mouseMovementX, Browser.mouseY += Browser.mouseMovementY);
      else {
        var r = Module.canvas.getBoundingClientRect(), t = Module.canvas.width, n = Module.canvas.height, o = void 0 !== window.scrollX ? window.scrollX : window.pageXOffset, i = void 0 !== window.scrollY ? window.scrollY : window.pageYOffset;
        if ("touchstart" === e.type || "touchend" === e.type || "touchmove" === e.type) {
          var a = e.touch;
          if (void 0 === a) return;
          var s = a.pageX - (o + r.left), u = a.pageY - (i + r.top), l = { x: s *= t / r.width, y: u *= n / r.height };
          if ("touchstart" === e.type) Browser.lastTouches[a.identifier] = l, Browser.touches[a.identifier] = l;
          else if ("touchend" === e.type || "touchmove" === e.type) {
            var c = Browser.touches[a.identifier];
            c = c || l, Browser.lastTouches[a.identifier] = c, Browser.touches[a.identifier] = l;
          }
          return;
        }
        var d = e.pageX - (o + r.left), f = e.pageY - (i + r.top);
        d *= t / r.width, f *= n / r.height, Browser.mouseMovementX = d - Browser.mouseX, Browser.mouseMovementY = f - Browser.mouseY, Browser.mouseX = d, Browser.mouseY = f;
      }
    }, asyncLoad: function(r, t, n, e) {
      var o = e ? "" : getUniqueRunDependency("al " + r);
      readAsync(r, function(e2) {
        assert(e2, 'Loading data file "' + r + '" failed (no arrayBuffer).'), t(new Uint8Array(e2)), o && removeRunDependency();
      }, function(e2) {
        if (!n) throw 'Loading data file "' + r + '" failed.';
        n();
      }), o && addRunDependency();
    }, resizeListeners: [], updateResizeListeners: function() {
      var r = Module.canvas;
      Browser.resizeListeners.forEach(function(e) {
        e(r.width, r.height);
      });
    }, setCanvasSize: function(e, r, t) {
      var n = Module.canvas;
      Browser.updateCanvasDimensions(n, e, r), t || Browser.updateResizeListeners();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function() {
      if ("undefined" != typeof SDL) {
        var e = HEAPU32[SDL.screen >> 2];
        e |= 8388608, HEAP32[SDL.screen >> 2] = e;
      }
      Browser.updateCanvasDimensions(Module.canvas), Browser.updateResizeListeners();
    }, setWindowedCanvasSize: function() {
      if ("undefined" != typeof SDL) {
        var e = HEAPU32[SDL.screen >> 2];
        e &= -8388609, HEAP32[SDL.screen >> 2] = e;
      }
      Browser.updateCanvasDimensions(Module.canvas), Browser.updateResizeListeners();
    }, updateCanvasDimensions: function(e, r, t) {
      r && t ? (e.widthNative = r, e.heightNative = t) : (r = e.widthNative, t = e.heightNative);
      var n = r, o = t;
      if (Module.forcedAspectRatio && 0 < Module.forcedAspectRatio && (n / o < Module.forcedAspectRatio ? n = Math.round(o * Module.forcedAspectRatio) : o = Math.round(n / Module.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
        var i = Math.min(screen.width / n, screen.height / o);
        n = Math.round(n * i), o = Math.round(o * i);
      }
      Browser.resizeCanvas ? (e.width != n && (e.width = n), e.height != o && (e.height = o), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != r && (e.width = r), e.height != t && (e.height = t), void 0 !== e.style && (n != r || o != t ? (e.style.setProperty("width", n + "px", "important"), e.style.setProperty("height", o + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))));
    }, wgetRequests: {}, nextWgetRequestHandle: 0, getNextWgetRequestHandle: function() {
      var e = Browser.nextWgetRequestHandle;
      return Browser.nextWgetRequestHandle++, e;
    } };
    function _emscripten_async_call(e, r, t) {
      function n() {
        getFuncWrapper(e, "vi")(r);
      }
      Module.noExitRuntime = true, 0 <= t ? Browser.safeSetTimeout(n, t) : Browser.safeRequestAnimationFrame(n);
    }
    function _emscripten_get_heap_size() {
      return HEAP8.length;
    }
    function _exit(e) {
      exit(e);
    }
    var ENV = {};
    function _getenv(e) {
      return 0 === e ? 0 : (e = UTF8ToString(e), ENV.hasOwnProperty(e) ? (_getenv.ret && _free(_getenv.ret), _getenv.ret = allocateUTF8(ENV[e]), _getenv.ret) : 0);
    }
    function _llvm_stackrestore(e) {
      var r = _llvm_stacksave, t = r.LLVM_SAVEDSTACKS[e];
      r.LLVM_SAVEDSTACKS.splice(e, 1), stackRestore(t);
    }
    function _llvm_stacksave() {
      var e = _llvm_stacksave;
      return e.LLVM_SAVEDSTACKS || (e.LLVM_SAVEDSTACKS = []), e.LLVM_SAVEDSTACKS.push(stackSave()), e.LLVM_SAVEDSTACKS.length - 1;
    }
    function _emscripten_memcpy_big(e, r, t) {
      HEAPU8.set(HEAPU8.subarray(r, r + t), e);
    }
    function _pthread_attr_init(e) {
      return 0;
    }
    function _pthread_attr_setstacksize() {
    }
    function _pthread_cond_destroy() {
      return 0;
    }
    function _pthread_cond_signal() {
      return 0;
    }
    function _pthread_cond_wait() {
      return 0;
    }
    function _pthread_create() {
      return 11;
    }
    function _pthread_join() {
    }
    function abortOnCannotGrowMemory(e) {
      abort("OOM");
    }
    function _emscripten_resize_heap(e) {
      abortOnCannotGrowMemory();
    }
    function __isLeapYear(e) {
      return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
    }
    function __arraySum(e, r) {
      for (var t = 0, n = 0; n <= r; t += e[n++]) ;
      return t;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(e, r) {
      for (var t = new Date(e.getTime()); 0 < r; ) {
        var n = __isLeapYear(t.getFullYear()), o = t.getMonth(), i = (n ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[o];
        if (!(r > i - t.getDate())) return t.setDate(t.getDate() + r), t;
        r -= i - t.getDate() + 1, t.setDate(1), o < 11 ? t.setMonth(o + 1) : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1));
      }
      return t;
    }
    function _strftime(e, r, t, n) {
      var o = HEAP32[n + 40 >> 2], i = { tm_sec: HEAP32[n >> 2], tm_min: HEAP32[n + 4 >> 2], tm_hour: HEAP32[n + 8 >> 2], tm_mday: HEAP32[n + 12 >> 2], tm_mon: HEAP32[n + 16 >> 2], tm_year: HEAP32[n + 20 >> 2], tm_wday: HEAP32[n + 24 >> 2], tm_yday: HEAP32[n + 28 >> 2], tm_isdst: HEAP32[n + 32 >> 2], tm_gmtoff: HEAP32[n + 36 >> 2], tm_zone: o ? UTF8ToString(o) : "" }, a = UTF8ToString(t), s = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var u in s) a = a.replace(new RegExp(u, "g"), s[u]);
      var l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function d(e2, r2, t2) {
        for (var n2 = "number" == typeof e2 ? e2.toString() : e2 || ""; n2.length < r2; ) n2 = t2[0] + n2;
        return n2;
      }
      function f(e2, r2) {
        return d(e2, r2, "0");
      }
      function m(e2, r2) {
        function t2(e3) {
          return e3 < 0 ? -1 : 0 < e3 ? 1 : 0;
        }
        var n2;
        return 0 === (n2 = t2(e2.getFullYear() - r2.getFullYear())) && 0 === (n2 = t2(e2.getMonth() - r2.getMonth())) && (n2 = t2(e2.getDate() - r2.getDate())), n2;
      }
      function p(e2) {
        switch (e2.getDay()) {
          case 0:
            return new Date(e2.getFullYear() - 1, 11, 29);
          case 1:
            return e2;
          case 2:
            return new Date(e2.getFullYear(), 0, 3);
          case 3:
            return new Date(e2.getFullYear(), 0, 2);
          case 4:
            return new Date(e2.getFullYear(), 0, 1);
          case 5:
            return new Date(e2.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(e2.getFullYear() - 1, 11, 30);
        }
      }
      function S(e2) {
        var r2 = __addDays(new Date(e2.tm_year + 1900, 0, 1), e2.tm_yday), t2 = new Date(r2.getFullYear(), 0, 4), n2 = new Date(r2.getFullYear() + 1, 0, 4), o2 = p(t2), i2 = p(n2);
        return m(o2, r2) <= 0 ? m(i2, r2) <= 0 ? r2.getFullYear() + 1 : r2.getFullYear() : r2.getFullYear() - 1;
      }
      var _ = { "%a": function(e2) {
        return l[e2.tm_wday].substring(0, 3);
      }, "%A": function(e2) {
        return l[e2.tm_wday];
      }, "%b": function(e2) {
        return c[e2.tm_mon].substring(0, 3);
      }, "%B": function(e2) {
        return c[e2.tm_mon];
      }, "%C": function(e2) {
        return f((e2.tm_year + 1900) / 100 | 0, 2);
      }, "%d": function(e2) {
        return f(e2.tm_mday, 2);
      }, "%e": function(e2) {
        return d(e2.tm_mday, 2, " ");
      }, "%g": function(e2) {
        return S(e2).toString().substring(2);
      }, "%G": function(e2) {
        return S(e2);
      }, "%H": function(e2) {
        return f(e2.tm_hour, 2);
      }, "%I": function(e2) {
        var r2 = e2.tm_hour;
        return 0 == r2 ? r2 = 12 : 12 < r2 && (r2 -= 12), f(r2, 2);
      }, "%j": function(e2) {
        return f(e2.tm_mday + __arraySum(__isLeapYear(e2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, e2.tm_mon - 1), 3);
      }, "%m": function(e2) {
        return f(e2.tm_mon + 1, 2);
      }, "%M": function(e2) {
        return f(e2.tm_min, 2);
      }, "%n": function() {
        return "\n";
      }, "%p": function(e2) {
        return 0 <= e2.tm_hour && e2.tm_hour < 12 ? "AM" : "PM";
      }, "%S": function(e2) {
        return f(e2.tm_sec, 2);
      }, "%t": function() {
        return "	";
      }, "%u": function(e2) {
        return e2.tm_wday || 7;
      }, "%U": function(e2) {
        var r2 = new Date(e2.tm_year + 1900, 0, 1), t2 = 0 === r2.getDay() ? r2 : __addDays(r2, 7 - r2.getDay()), n2 = new Date(e2.tm_year + 1900, e2.tm_mon, e2.tm_mday);
        if (m(t2, n2) < 0) {
          var o2 = __arraySum(__isLeapYear(n2.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, n2.getMonth() - 1) - 31, i2 = 31 - t2.getDate() + o2 + n2.getDate();
          return f(Math.ceil(i2 / 7), 2);
        }
        return 0 === m(t2, r2) ? "01" : "00";
      }, "%V": function(e2) {
        var r2, t2 = new Date(e2.tm_year + 1900, 0, 4), n2 = new Date(e2.tm_year + 1901, 0, 4), o2 = p(t2), i2 = p(n2), a2 = __addDays(new Date(e2.tm_year + 1900, 0, 1), e2.tm_yday);
        return m(a2, o2) < 0 ? "53" : m(i2, a2) <= 0 ? "01" : (r2 = o2.getFullYear() < e2.tm_year + 1900 ? e2.tm_yday + 32 - o2.getDate() : e2.tm_yday + 1 - o2.getDate(), f(Math.ceil(r2 / 7), 2));
      }, "%w": function(e2) {
        return e2.tm_wday;
      }, "%W": function(e2) {
        var r2 = new Date(e2.tm_year, 0, 1), t2 = 1 === r2.getDay() ? r2 : __addDays(r2, 0 === r2.getDay() ? 1 : 7 - r2.getDay() + 1), n2 = new Date(e2.tm_year + 1900, e2.tm_mon, e2.tm_mday);
        if (m(t2, n2) < 0) {
          var o2 = __arraySum(__isLeapYear(n2.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, n2.getMonth() - 1) - 31, i2 = 31 - t2.getDate() + o2 + n2.getDate();
          return f(Math.ceil(i2 / 7), 2);
        }
        return 0 === m(t2, r2) ? "01" : "00";
      }, "%y": function(e2) {
        return (e2.tm_year + 1900).toString().substring(2);
      }, "%Y": function(e2) {
        return e2.tm_year + 1900;
      }, "%z": function(e2) {
        var r2 = e2.tm_gmtoff, t2 = 0 <= r2;
        return r2 = (r2 = Math.abs(r2) / 60) / 60 * 100 + r2 % 60, (t2 ? "+" : "-") + String("0000" + r2).slice(-4);
      }, "%Z": function(e2) {
        return e2.tm_zone;
      }, "%%": function() {
        return "%";
      } };
      for (var u in _) 0 <= a.indexOf(u) && (a = a.replace(new RegExp(u, "g"), _[u](i)));
      var F = intArrayFromString(a, false);
      return F.length > r ? 0 : (writeArrayToMemory(F, e), F.length - 1);
    }
    function _strftime_l(e, r, t, n) {
      return _strftime(e, r, t, n);
    }
    if (FS.staticInit(), ENVIRONMENT_HAS_NODE) {
      var fs = require$$1, NODEJS_PATH = require$$1;
      NODEFS.staticInit();
    }
    function intArrayFromString(e, r, t) {
      var n = lengthBytesUTF8(e) + 1, o = new Array(n), i = stringToUTF8Array(e, o, 0, o.length);
      return r && (o.length = i), o;
    }
    _emscripten_get_now = ENVIRONMENT_IS_NODE ? function() {
      var e = process.hrtime();
      return 1e3 * e[0] + e[1] / 1e6;
    } : "undefined" != typeof dateNow ? dateNow : "object" == typeof performance && performance && "function" == typeof performance.now ? function() {
      return performance.now();
    } : Date.now, Module.requestFullScreen = function(e, r, t) {
      err("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead."), Module.requestFullScreen = Module.requestFullscreen, Browser.requestFullScreen(e, r, t);
    }, Module.requestFullscreen = function(e, r, t) {
      Browser.requestFullscreen(e, r, t);
    }, Module.requestAnimationFrame = function(e) {
      Browser.requestAnimationFrame(e);
    }, Module.setCanvasSize = function(e, r, t) {
      Browser.setCanvasSize(e, r, t);
    }, Module.pauseMainLoop = function() {
      Browser.mainLoop.pause();
    }, Module.resumeMainLoop = function() {
      Browser.mainLoop.resume();
    }, Module.getUserMedia = function() {
      Browser.getUserMedia();
    }, Module.createContext = function(e, r, t, n) {
      return Browser.createContext(e, r, t, n);
    };
    var asmGlobalArg = {}, asmLibraryArg = { c: abort, r: setTempRet0, x: getTempRet0, w: ___atomic_fetch_add_8, e: ___cxa_allocate_exception, d: ___cxa_throw, v: ___cxa_uncaught_exceptions, i: ___lock, u: ___map_file, l: ___setErrNo, t: ___syscall140, s: ___syscall145, q: ___syscall146, p: ___syscall221, M: ___syscall5, o: ___syscall54, n: ___syscall6, L: ___syscall91, h: ___unlock, b: _abort, K: _clock_gettime, k: _emscripten_async_call, J: _emscripten_get_heap_size, I: _emscripten_memcpy_big, H: _emscripten_resize_heap, G: _exit, j: _getenv, g: _llvm_stackrestore, f: _llvm_stacksave, F: _pthread_attr_init, E: _pthread_attr_setstacksize, D: _pthread_cond_destroy, C: _pthread_cond_signal, m: _pthread_cond_wait, B: _pthread_create, A: _pthread_join, z: _strftime_l, y: abortOnCannotGrowMemory, a: DYNAMICTOP_PTR }, asm = Module.asm(asmGlobalArg, asmLibraryArg, buffer);
    Module.asm = asm;
    var __ZSt18uncaught_exceptionv = Module.__ZSt18uncaught_exceptionv = function() {
      return Module.asm.N.apply(null, arguments);
    };
    Module.___errno_location = function() {
      return Module.asm.O.apply(null, arguments);
    };
    var _free = Module._free = function() {
      return Module.asm.P.apply(null, arguments);
    }, _i64Add = Module._i64Add = function() {
      return Module.asm.Q.apply(null, arguments);
    };
    Module._main = function() {
      return Module.asm.R.apply(null, arguments);
    };
    var _malloc = Module._malloc = function() {
      return Module.asm.S.apply(null, arguments);
    };
    Module._uci_command = function() {
      return Module.asm.T.apply(null, arguments);
    };
    var globalCtors = Module.globalCtors = function() {
      return Module.asm.ma.apply(null, arguments);
    }, stackAlloc = Module.stackAlloc = function() {
      return Module.asm.na.apply(null, arguments);
    }, stackRestore = Module.stackRestore = function() {
      return Module.asm.oa.apply(null, arguments);
    }, stackSave = Module.stackSave = function() {
      return Module.asm.pa.apply(null, arguments);
    };
    Module.dynCall_ii = function() {
      return Module.asm.U.apply(null, arguments);
    };
    Module.dynCall_iii = function() {
      return Module.asm.V.apply(null, arguments);
    };
    Module.dynCall_iiii = function() {
      return Module.asm.W.apply(null, arguments);
    };
    Module.dynCall_iiiii = function() {
      return Module.asm.X.apply(null, arguments);
    };
    Module.dynCall_iiiiid = function() {
      return Module.asm.Y.apply(null, arguments);
    };
    Module.dynCall_iiiiii = function() {
      return Module.asm.Z.apply(null, arguments);
    };
    Module.dynCall_iiiiiid = function() {
      return Module.asm._.apply(null, arguments);
    };
    Module.dynCall_iiiiiii = function() {
      return Module.asm.$.apply(null, arguments);
    };
    Module.dynCall_iiiiiiii = function() {
      return Module.asm.aa.apply(null, arguments);
    };
    Module.dynCall_iiiiiiiii = function() {
      return Module.asm.ba.apply(null, arguments);
    };
    Module.dynCall_iiiiij = function() {
      return Module.asm.ca.apply(null, arguments);
    };
    Module.dynCall_jiji = function() {
      return Module.asm.da.apply(null, arguments);
    };
    Module.dynCall_v = function() {
      return Module.asm.ea.apply(null, arguments);
    };
    Module.dynCall_vi = function() {
      return Module.asm.fa.apply(null, arguments);
    };
    Module.dynCall_vii = function() {
      return Module.asm.ga.apply(null, arguments);
    };
    Module.dynCall_viii = function() {
      return Module.asm.ha.apply(null, arguments);
    };
    Module.dynCall_viiii = function() {
      return Module.asm.ia.apply(null, arguments);
    };
    Module.dynCall_viiiii = function() {
      return Module.asm.ja.apply(null, arguments);
    };
    Module.dynCall_viiiiii = function() {
      return Module.asm.ka.apply(null, arguments);
    };
    Module.dynCall_viijii = function() {
      return Module.asm.la.apply(null, arguments);
    };
    function ExitStatus(e) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
    }
    Module.asm = asm, Module.ccall = ccall;
    function callMain(e) {
      var r = (e = e || []).length + 1, t = stackAlloc(4 * (r + 1));
      HEAP32[t >> 2] = allocateUTF8OnStack(thisProgram);
      for (var n = 1; n < r; n++) HEAP32[(t >> 2) + n] = allocateUTF8OnStack(e[n - 1]);
      HEAP32[(t >> 2) + r] = 0;
      try {
        exit(Module._main(r, t), true);
      } catch (e2) {
        if (e2 instanceof ExitStatus) return;
        if ("SimulateInfiniteLoop" == e2) return void (Module.noExitRuntime = true);
        var o = e2;
        e2 && "object" == typeof e2 && e2.stack && (o = [e2, e2.stack]), err("exception thrown: " + o), quit_(1, e2);
      } finally {
      }
    }
    function run(e) {
      function r() {
        Module.calledRun || (Module.calledRun = true, ABORT || (initRuntime(), preMain(), Module.onRuntimeInitialized && Module.onRuntimeInitialized(), shouldRunNow && callMain(e), postRun()));
      }
      e = e || arguments_, 0 < runDependencies || (preRun(), 0 < runDependencies || Module.calledRun || (Module.setStatus ? (Module.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          Module.setStatus("");
        }, 1), r();
      }, 1)) : r()));
    }
    function exit(e, r) {
      r && Module.noExitRuntime && 0 === e || (Module.noExitRuntime || (ABORT = true, Module.onExit && Module.onExit(e)), quit_(e, new ExitStatus(e)));
    }
    function abort(e) {
      throw Module.onAbort && Module.onAbort(e), out(e += ""), err(e), ABORT = true, "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.";
    }
    if (dependenciesFulfilled = function e() {
      Module.calledRun || run(), Module.calledRun || (dependenciesFulfilled = e);
    }, Module.run = run, Module.abort = abort, Module.preInit) for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); 0 < Module.preInit.length; ) Module.preInit.pop()();
    var shouldRunNow = true;
    Module.noInitialRun && (shouldRunNow = false), Module.noExitRuntime = true, run();
  })(stockfish_wasm);
  return stockfish_wasm.exports;
}
requireStockfish_wasm();
const random = new Random();
const openings_fen = {
  random: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  italian: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
  sicilian: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
  sicilian_yugoslov: "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 0 6",
  french: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
  caro: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3"
};
function updateMinELO(newELO, setMinELO) {
  if (newELO <= 2500 && newELO >= 0) {
    setMinELO(newELO);
  }
}
async function getMasterMoves(FEN) {
  const response = await fetch(`/lichess/masters?fen=${FEN}`).catch((error) => {
    console.log("INVALID DATA2");
  });
  return await response.json();
}
async function getBestMoves(FEN, stockfishMove0, stockfishMove1, stockfishMove2) {
  return await getBestMove(FEN, 15);
}
async function getNormieMoves(FEN, minELO) {
  const response2 = await fetch(`/lichess/lichess?fen=${FEN}&ratings=${minELO}`).catch((error) => {
    console.log("INVALID DATA2");
  });
  return await response2.json();
}
async function loadRandomPosition(setGame, opening, minELO, allowDrop, needFetchInfo, stockfishMove0, stockfishMove1, stockfishMove2, masterMove0, masterMove1, masterMove2, normieMove0, normieMove1, normieMove2, yourMove) {
  stockfishMove0.current = {};
  stockfishMove1.current = {};
  stockfishMove2.current = {};
  masterMove0.current = "";
  masterMove1.current = "";
  masterMove2.current = "";
  normieMove0.current = "";
  normieMove1.current = "";
  normieMove2.current = "";
  yourMove.current = "";
  setGame(new Chess(openings_fen[opening.current]));
  let numMoves = random.integer(1, 7);
  console.log("Num random moves: " + numMoves);
  let position_fen = openings_fen[opening.current];
  for (let i = 0; i < numMoves; i++) {
    const response = await fetch(`/lichess/lichess?fen=${position_fen}&ratings=${minELO}`).catch((error) => {
      console.log("INVALID DATA2");
    });
    const data = await response.json();
    let moveNum = random.integer(0, data.moves.length - 1);
    console.log("Random move to choose: " + moveNum);
    console.log(data);
    console.log(data.moves[moveNum].uci);
    let board = new Chess(position_fen);
    let fromSquare = data.moves[moveNum].uci.substring(0, 2);
    let toSquare = data.moves[moveNum].uci.substring(2, 4);
    if (data.moves[moveNum].san == "O-O") {
      if (fromSquare == "e1") {
        console.log("WHITE SHORT CASTLING!!!!!!!!!");
        toSquare = "g1";
      } else if (fromSquare == "e8") {
        console.log("BLACK SHORT CASTLING!!!!!!!!!");
        toSquare = "g8";
      }
    } else if (data.moves[moveNum].san == "O-O-O") {
      if (fromSquare == "e1") {
        console.log("WHITE LONG CASTLING!!!!!!!!!");
        toSquare = "c1";
      } else if (fromSquare == "e8") {
        console.log("BLACK LONG CASTLING!!!!!!!!!");
        toSquare = "c8";
      }
    }
    board.move({
      from: fromSquare,
      to: toSquare
    });
    position_fen = board.fen();
  }
  setGame(new Chess(position_fen));
  allowDrop.current = true;
  const [masterMoves, normieMoves, stockfishMoves] = await Promise.all([getMasterMoves(position_fen), getNormieMoves(position_fen, minELO), getBestMoves(position_fen)]);
  console.log(masterMoves.moves[0]);
  console.log(masterMoves.moves[1]);
  console.log(masterMoves.moves[2]);
  masterMove0.current = masterMoves.moves[0] != void 0 ? masterMoves.moves[0].uci : "No move found";
  masterMove1.current = masterMoves.moves[1] != void 0 ? masterMoves.moves[1].uci : "No move found";
  masterMove2.current = masterMoves.moves[2] != void 0 ? masterMoves.moves[2].uci : "No move found";
  console.log(normieMoves.moves[0]);
  console.log(normieMoves.moves[1]);
  console.log(normieMoves.moves[2]);
  normieMove0.current = normieMoves.moves[0] != void 0 ? normieMoves.moves[0].uci : "No move found";
  normieMove1.current = normieMoves.moves[1] != void 0 ? normieMoves.moves[1].uci : "No move found";
  normieMove2.current = normieMoves.moves[2] != void 0 ? normieMoves.moves[2].uci : "No move found";
  console.log("BEST MOVE: ", stockfishMoves);
  stockfishMove0.current["UCI"] = stockfishMoves.move1UCI;
  stockfishMove0.current["CP"] = stockfishMoves.move1CP;
  stockfishMove1.current["UCI"] = stockfishMoves.move2UCI;
  stockfishMove1.current["CP"] = stockfishMoves.move2CP;
  stockfishMove2.current["UCI"] = stockfishMoves.move3UCI;
  stockfishMove2.current["CP"] = stockfishMoves.move3CP;
}
function getBestMove(fen, depth = 15) {
  return new Promise((resolve) => {
    const stockfish2 = new Worker(new URL(
      /* @vite-ignore */
      "" + new URL("stockfish.wasm-BgZNcY_A.js", import.meta.url).href,
      import.meta.url
    ), {
      type: "module"
    });
    stockfish2.postMessage("uci");
    stockfish2.postMessage("isready");
    stockfish2.postMessage("setoption name MultiPV value 3");
    let stockfishMoves = {};
    stockfish2.onmessage = (event) => {
      console.log(event.data);
      if (event.data.startsWith(`info depth ${depth}`) && event.data.includes("multipv")) {
        const wordsArr = event.data.split(" ");
        const cpIndex = wordsArr.indexOf("cp");
        const cp = wordsArr[cpIndex + 1];
        const moveNumIndex = wordsArr.indexOf("multipv");
        const moveNum = wordsArr[moveNumIndex + 1];
        const pvIndex = wordsArr.indexOf("pv");
        const moveUCI = wordsArr[pvIndex + 1];
        stockfishMoves[`move${moveNum}CP`] = cp;
        stockfishMoves[`move${moveNum}UCI`] = moveUCI;
        if (moveNum == 3) {
          resolve(stockfishMoves);
        }
      }
    };
    stockfish2.postMessage(`position fen ${fen}`);
    stockfish2.postMessage(`go depth ${depth}`);
  });
}
function App() {
  const [game, setGame] = reactExports.useState(new Chess());
  const [minELO, setMinELO] = reactExports.useState("1800");
  const opening = reactExports.useRef("random");
  const allowDrop = reactExports.useRef(false);
  const needFetchInfo = reactExports.useRef(false);
  const stockfishMove0 = reactExports.useRef({});
  const stockfishMove1 = reactExports.useRef({});
  const stockfishMove2 = reactExports.useRef({});
  const masterMove0 = reactExports.useRef("");
  const masterMove1 = reactExports.useRef("");
  const masterMove2 = reactExports.useRef("");
  const normieMove0 = reactExports.useRef("");
  const normieMove1 = reactExports.useRef("");
  const normieMove2 = reactExports.useRef("");
  const yourMove = reactExports.useRef("");
  function onDrop(sourceSquare, targetSquare) {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare
      });
      if (move === null) return false;
      yourMove.current = move.san;
      setGame(new Chess(game.fen()));
      allowDrop.current = false;
      return true;
    } catch (error) {
      console.error("Error in onDrop:", error);
      return false;
    }
  }
  function displayOpening(new_opening, opening2, setGame2, allowDrag) {
    stockfishMove0.current = {};
    stockfishMove1.current = {};
    stockfishMove2.current = {};
    masterMove0.current = "";
    masterMove1.current = "";
    masterMove2.current = "";
    normieMove0.current = "";
    normieMove1.current = "";
    normieMove2.current = "";
    yourMove.current = "";
    opening2.current = new_opening;
    console.log(opening2.current);
    console.log(openings_fen[opening2.current]);
    allowDrag.current = false;
    setGame2(new Chess(openings_fen[new_opening]));
  }
  return /* @__PURE__ */ jsx("div", {
    className: "container mx-auto p-4",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col md:flex-row gap-4",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "w-full md:w-2/3",
        children: [/* @__PURE__ */ jsx(Chessboard, {
          position: game.fen(),
          onPieceDrop: onDrop,
          arePiecesDraggable: allowDrop.current,
          animationDuration: 300
        }), /* @__PURE__ */ jsx("div", {
          className: "w-full",
          children: /* @__PURE__ */ jsxs("div", {
            className: "bg-gray-100 p-4 rounded",
            children: [/* @__PURE__ */ jsx("h2", {
              children: "Please Select an Opening to Study"
            }), /* @__PURE__ */ jsxs("select", {
              onChange: (e) => displayOpening(e.target.value, opening, setGame, allowDrop),
              children: [/* @__PURE__ */ jsx("option", {
                value: "random",
                children: "Random"
              }), /* @__PURE__ */ jsx("option", {
                value: "italian",
                children: "Italian Game"
              }), /* @__PURE__ */ jsx("option", {
                value: "sicilian",
                children: "Sicilian Defense"
              }), /* @__PURE__ */ jsx("option", {
                value: "sicilian_yugoslov",
                children: "Sicilian Defense Yugoslov Attack"
              }), /* @__PURE__ */ jsx("option", {
                value: "french",
                children: "French Defense"
              }), /* @__PURE__ */ jsx("option", {
                value: "caro",
                children: "Caro Kann"
              })]
            }), /* @__PURE__ */ jsx("h2", {
              children: "ELO Rating Input"
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("label", {
                htmlFor: "eloInput",
                children: "Enter ELO Rating (0-2500):"
              }), /* @__PURE__ */ jsx("input", {
                id: "eloInput",
                type: "number",
                min: "0",
                max: "2500",
                value: minELO,
                onChange: (e) => updateMinELO(e.target.value, setMinELO)
              })]
            }), /* @__PURE__ */ jsx("button", {
              onClick: () => loadRandomPosition(setGame, opening, minELO, allowDrop, needFetchInfo, stockfishMove0, stockfishMove1, stockfishMove2, masterMove0, masterMove1, masterMove2, normieMove0, normieMove1, normieMove2, yourMove),
              children: "Next Position"
            })]
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-full md:w-1/3",
        children: /* @__PURE__ */ jsxs("div", {
          className: "bg-cream-100 p-4 rounded",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-xl font-bold mb-4",
            children: "Move Analysis"
          }), /* @__PURE__ */ jsxs("h3", {
            className: "text-l font-bold mb-4",
            children: ["Your Move: ", yourMove.current]
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-l font-bold mb-4",
            children: "Stockfish Best Moves"
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Stockfish Move 0: ", stockfishMove0.current["UCI"], ", CP: ", stockfishMove0.current["CP"]]
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Stockfish Move 1: ", stockfishMove1.current["UCI"], ", CP: ", stockfishMove1.current["CP"]]
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Stockfish Move 2: ", stockfishMove2.current["UCI"], ", CP: ", stockfishMove2.current["CP"]]
          }), /* @__PURE__ */ jsx("h3", {
            className: "text-l font-bold mb-4",
            children: "Popular Master Moves"
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Master Move 0: ", masterMove0.current]
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Master Move 1: ", masterMove1.current]
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Master Move 2: ", masterMove2.current]
          }), /* @__PURE__ */ jsxs("h3", {
            className: "text-l font-bold mb-4",
            children: ["Popular Moves over ", minELO]
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Move 0: ", normieMove0.current]
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Move 1: ", normieMove1.current]
          }), /* @__PURE__ */ jsxs("p", {
            children: ["Move 2: ", normieMove2.current]
          })]
        })
      })]
    })
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}));
