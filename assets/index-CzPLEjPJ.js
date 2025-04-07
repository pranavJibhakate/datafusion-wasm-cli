var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
        new MutationObserver((l) => {
          for (const o of l) if (o.type === "childList") for (const u of o.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(l) {
          const o = {};
          return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function r(l) {
          if (l.ep) return;
          l.ep = true;
          const o = n(l);
          fetch(l.href, o);
        }
      })();
      var oi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function _s(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
      }
      var ms = {
        exports: {}
      }, El = {}, hs = {
        exports: {}
      }, z = {};
      var dr = Symbol.for("react.element"), Oc = Symbol.for("react.portal"), Pc = Symbol.for("react.fragment"), Dc = Symbol.for("react.strict_mode"), Fc = Symbol.for("react.profiler"), zc = Symbol.for("react.provider"), Mc = Symbol.for("react.context"), Uc = Symbol.for("react.forward_ref"), jc = Symbol.for("react.suspense"), Bc = Symbol.for("react.memo"), $c = Symbol.for("react.lazy"), ui = Symbol.iterator;
      function bc(e) {
        return e === null || typeof e != "object" ? null : (e = ui && e[ui] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      var vs = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function() {
        },
        enqueueReplaceState: function() {
        },
        enqueueSetState: function() {
        }
      }, ys = Object.assign, ws = {};
      function En(e, t, n) {
        this.props = e, this.context = t, this.refs = ws, this.updater = n || vs;
      }
      En.prototype.isReactComponent = {};
      En.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      };
      En.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      function Es() {
      }
      Es.prototype = En.prototype;
      function cu(e, t, n) {
        this.props = e, this.context = t, this.refs = ws, this.updater = n || vs;
      }
      var fu = cu.prototype = new Es();
      fu.constructor = cu;
      ys(fu, En.prototype);
      fu.isPureReactComponent = true;
      var ii = Array.isArray, Ss = Object.prototype.hasOwnProperty, du = {
        current: null
      }, ks = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function Cs(e, t, n) {
        var r, l = {}, o = null, u = null;
        if (t != null) for (r in t.ref !== void 0 && (u = t.ref), t.key !== void 0 && (o = "" + t.key), t) Ss.call(t, r) && !ks.hasOwnProperty(r) && (l[r] = t[r]);
        var i = arguments.length - 2;
        if (i === 1) l.children = n;
        else if (1 < i) {
          for (var a = Array(i), d = 0; d < i; d++) a[d] = arguments[d + 2];
          l.children = a;
        }
        if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
        return {
          $$typeof: dr,
          type: e,
          key: o,
          ref: u,
          props: l,
          _owner: du.current
        };
      }
      function Hc(e, t) {
        return {
          $$typeof: dr,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }
      function pu(e) {
        return typeof e == "object" && e !== null && e.$$typeof === dr;
      }
      function Vc(e) {
        var t = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
          return t[n];
        });
      }
      var si = /\/+/g;
      function Hl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Vc("" + e.key) : t.toString(36);
      }
      function Mr(e, t, n, r, l) {
        var o = typeof e;
        (o === "undefined" || o === "boolean") && (e = null);
        var u = false;
        if (e === null) u = true;
        else switch (o) {
          case "string":
          case "number":
            u = true;
            break;
          case "object":
            switch (e.$$typeof) {
              case dr:
              case Oc:
                u = true;
            }
        }
        if (u) return u = e, l = l(u), e = r === "" ? "." + Hl(u, 0) : r, ii(l) ? (n = "", e != null && (n = e.replace(si, "$&/") + "/"), Mr(l, t, n, "", function(d) {
          return d;
        })) : l != null && (pu(l) && (l = Hc(l, n + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(si, "$&/") + "/") + e)), t.push(l)), 1;
        if (u = 0, r = r === "" ? "." : r + ":", ii(e)) for (var i = 0; i < e.length; i++) {
          o = e[i];
          var a = r + Hl(o, i);
          u += Mr(o, t, n, a, l);
        }
        else if (a = bc(e), typeof a == "function") for (e = a.call(e), i = 0; !(o = e.next()).done; ) o = o.value, a = r + Hl(o, i++), u += Mr(o, t, n, a, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return u;
      }
      function vr(e, t, n) {
        if (e == null) return e;
        var r = [], l = 0;
        return Mr(e, r, "", "", function(o) {
          return t.call(n, o, l++);
        }), r;
      }
      function Wc(e) {
        if (e._status === -1) {
          var t = e._result;
          t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
          }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
          }), e._status === -1 && (e._status = 0, e._result = t);
        }
        if (e._status === 1) return e._result.default;
        throw e._result;
      }
      var ge = {
        current: null
      }, Ur = {
        transition: null
      }, Qc = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: Ur,
        ReactCurrentOwner: du
      };
      function xs() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      z.Children = {
        map: vr,
        forEach: function(e, t, n) {
          vr(e, function() {
            t.apply(this, arguments);
          }, n);
        },
        count: function(e) {
          var t = 0;
          return vr(e, function() {
            t++;
          }), t;
        },
        toArray: function(e) {
          return vr(e, function(t) {
            return t;
          }) || [];
        },
        only: function(e) {
          if (!pu(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e;
        }
      };
      z.Component = En;
      z.Fragment = Pc;
      z.Profiler = Fc;
      z.PureComponent = cu;
      z.StrictMode = Dc;
      z.Suspense = jc;
      z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qc;
      z.act = xs;
      z.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = ys({}, e.props), l = e.key, o = e.ref, u = e._owner;
        if (t != null) {
          if (t.ref !== void 0 && (o = t.ref, u = du.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
          for (a in t) Ss.call(t, a) && !ks.hasOwnProperty(a) && (r[a] = t[a] === void 0 && i !== void 0 ? i[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          i = Array(a);
          for (var d = 0; d < a; d++) i[d] = arguments[d + 2];
          r.children = i;
        }
        return {
          $$typeof: dr,
          type: e.type,
          key: l,
          ref: o,
          props: r,
          _owner: u
        };
      };
      z.createContext = function(e) {
        return e = {
          $$typeof: Mc,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }, e.Provider = {
          $$typeof: zc,
          _context: e
        }, e.Consumer = e;
      };
      z.createElement = Cs;
      z.createFactory = function(e) {
        var t = Cs.bind(null, e);
        return t.type = e, t;
      };
      z.createRef = function() {
        return {
          current: null
        };
      };
      z.forwardRef = function(e) {
        return {
          $$typeof: Uc,
          render: e
        };
      };
      z.isValidElement = pu;
      z.lazy = function(e) {
        return {
          $$typeof: $c,
          _payload: {
            _status: -1,
            _result: e
          },
          _init: Wc
        };
      };
      z.memo = function(e, t) {
        return {
          $$typeof: Bc,
          type: e,
          compare: t === void 0 ? null : t
        };
      };
      z.startTransition = function(e) {
        var t = Ur.transition;
        Ur.transition = {};
        try {
          e();
        } finally {
          Ur.transition = t;
        }
      };
      z.unstable_act = xs;
      z.useCallback = function(e, t) {
        return ge.current.useCallback(e, t);
      };
      z.useContext = function(e) {
        return ge.current.useContext(e);
      };
      z.useDebugValue = function() {
      };
      z.useDeferredValue = function(e) {
        return ge.current.useDeferredValue(e);
      };
      z.useEffect = function(e, t) {
        return ge.current.useEffect(e, t);
      };
      z.useId = function() {
        return ge.current.useId();
      };
      z.useImperativeHandle = function(e, t, n) {
        return ge.current.useImperativeHandle(e, t, n);
      };
      z.useInsertionEffect = function(e, t) {
        return ge.current.useInsertionEffect(e, t);
      };
      z.useLayoutEffect = function(e, t) {
        return ge.current.useLayoutEffect(e, t);
      };
      z.useMemo = function(e, t) {
        return ge.current.useMemo(e, t);
      };
      z.useReducer = function(e, t, n) {
        return ge.current.useReducer(e, t, n);
      };
      z.useRef = function(e) {
        return ge.current.useRef(e);
      };
      z.useState = function(e) {
        return ge.current.useState(e);
      };
      z.useSyncExternalStore = function(e, t, n) {
        return ge.current.useSyncExternalStore(e, t, n);
      };
      z.useTransition = function() {
        return ge.current.useTransition();
      };
      z.version = "18.3.1";
      hs.exports = z;
      var Ut = hs.exports;
      const Gc = _s(Ut);
      var Kc = Ut, Yc = Symbol.for("react.element"), Xc = Symbol.for("react.fragment"), Zc = Object.prototype.hasOwnProperty, qc = Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jc = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      function Ts(e, t, n) {
        var r, l = {}, o = null, u = null;
        n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (u = t.ref);
        for (r in t) Zc.call(t, r) && !Jc.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
        return {
          $$typeof: Yc,
          type: e,
          key: o,
          ref: u,
          props: l,
          _owner: qc.current
        };
      }
      El.Fragment = Xc;
      El.jsx = Ts;
      El.jsxs = Ts;
      ms.exports = El;
      var ne = ms.exports, mo = {}, Ns = {
        exports: {}
      }, Te = {}, Ls = {
        exports: {}
      }, Rs = {};
      (function(e) {
        function t(x, O) {
          var D = x.length;
          x.push(O);
          e: for (; 0 < D; ) {
            var $ = D - 1 >>> 1, U = x[$];
            if (0 < l(U, O)) x[$] = O, x[D] = U, D = $;
            else break e;
          }
        }
        function n(x) {
          return x.length === 0 ? null : x[0];
        }
        function r(x) {
          if (x.length === 0) return null;
          var O = x[0], D = x.pop();
          if (D !== O) {
            x[0] = D;
            e: for (var $ = 0, U = x.length, Gt = U >>> 1; $ < Gt; ) {
              var ie = 2 * ($ + 1) - 1, Ze = x[ie], Le = ie + 1, qe = x[Le];
              if (0 > l(Ze, D)) Le < U && 0 > l(qe, Ze) ? (x[$] = qe, x[Le] = D, $ = Le) : (x[$] = Ze, x[ie] = D, $ = ie);
              else if (Le < U && 0 > l(qe, D)) x[$] = qe, x[Le] = D, $ = Le;
              else break e;
            }
          }
          return O;
        }
        function l(x, O) {
          var D = x.sortIndex - O.sortIndex;
          return D !== 0 ? D : x.id - O.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var o = performance;
          e.unstable_now = function() {
            return o.now();
          };
        } else {
          var u = Date, i = u.now();
          e.unstable_now = function() {
            return u.now() - i;
          };
        }
        var a = [], d = [], v = 1, h = null, m = 3, C = false, T = false, E = false, P = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function c(x) {
          for (var O = n(d); O !== null; ) {
            if (O.callback === null) r(d);
            else if (O.startTime <= x) r(d), O.sortIndex = O.expirationTime, t(a, O);
            else break;
            O = n(d);
          }
        }
        function p(x) {
          if (E = false, c(x), !T) if (n(a) !== null) T = true, xn(g);
          else {
            var O = n(d);
            O !== null && Qt(p, O.startTime - x);
          }
        }
        function g(x, O) {
          T = false, E && (E = false, f(S), S = -1), C = true;
          var D = m;
          try {
            for (c(O), h = n(a); h !== null && (!(h.expirationTime > O) || x && !B()); ) {
              var $ = h.callback;
              if (typeof $ == "function") {
                h.callback = null, m = h.priorityLevel;
                var U = $(h.expirationTime <= O);
                O = e.unstable_now(), typeof U == "function" ? h.callback = U : h === n(a) && r(a), c(O);
              } else r(a);
              h = n(a);
            }
            if (h !== null) var Gt = true;
            else {
              var ie = n(d);
              ie !== null && Qt(p, ie.startTime - O), Gt = false;
            }
            return Gt;
          } finally {
            h = null, m = D, C = false;
          }
        }
        var _ = false, y = null, S = -1, N = 5, I = -1;
        function B() {
          return !(e.unstable_now() - I < N);
        }
        function me() {
          if (y !== null) {
            var x = e.unstable_now();
            I = x;
            var O = true;
            try {
              O = y(true, x);
            } finally {
              O ? ct() : (_ = false, y = null);
            }
          } else _ = false;
        }
        var ct;
        if (typeof s == "function") ct = function() {
          s(me);
        };
        else if (typeof MessageChannel < "u") {
          var Cn = new MessageChannel(), jl = Cn.port2;
          Cn.port1.onmessage = me, ct = function() {
            jl.postMessage(null);
          };
        } else ct = function() {
          P(me, 0);
        };
        function xn(x) {
          y = x, _ || (_ = true, ct());
        }
        function Qt(x, O) {
          S = P(function() {
            x(e.unstable_now());
          }, O);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
          x.callback = null;
        }, e.unstable_continueExecution = function() {
          T || C || (T = true, xn(g));
        }, e.unstable_forceFrameRate = function(x) {
          0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < x ? Math.floor(1e3 / x) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
          return m;
        }, e.unstable_getFirstCallbackNode = function() {
          return n(a);
        }, e.unstable_next = function(x) {
          switch (m) {
            case 1:
            case 2:
            case 3:
              var O = 3;
              break;
            default:
              O = m;
          }
          var D = m;
          m = O;
          try {
            return x();
          } finally {
            m = D;
          }
        }, e.unstable_pauseExecution = function() {
        }, e.unstable_requestPaint = function() {
        }, e.unstable_runWithPriority = function(x, O) {
          switch (x) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              x = 3;
          }
          var D = m;
          m = x;
          try {
            return O();
          } finally {
            m = D;
          }
        }, e.unstable_scheduleCallback = function(x, O, D) {
          var $ = e.unstable_now();
          switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? $ + D : $) : D = $, x) {
            case 1:
              var U = -1;
              break;
            case 2:
              U = 250;
              break;
            case 5:
              U = 1073741823;
              break;
            case 4:
              U = 1e4;
              break;
            default:
              U = 5e3;
          }
          return U = D + U, x = {
            id: v++,
            callback: O,
            priorityLevel: x,
            startTime: D,
            expirationTime: U,
            sortIndex: -1
          }, D > $ ? (x.sortIndex = D, t(d, x), n(a) === null && x === n(d) && (E ? (f(S), S = -1) : E = true, Qt(p, D - $))) : (x.sortIndex = U, t(a, x), T || C || (T = true, xn(g))), x;
        }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(x) {
          var O = m;
          return function() {
            var D = m;
            m = O;
            try {
              return x.apply(this, arguments);
            } finally {
              m = D;
            }
          };
        };
      })(Rs);
      Ls.exports = Rs;
      var ef = Ls.exports;
      var tf = Ut, xe = ef;
      function w(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var Is = /* @__PURE__ */ new Set(), Kn = {};
      function Vt(e, t) {
        gn(e, t), gn(e + "Capture", t);
      }
      function gn(e, t) {
        for (Kn[e] = t, e = 0; e < t.length; e++) Is.add(t[e]);
      }
      var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ho = Object.prototype.hasOwnProperty, nf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ai = {}, ci = {};
      function rf(e) {
        return ho.call(ci, e) ? true : ho.call(ai, e) ? false : nf.test(e) ? ci[e] = true : (ai[e] = true, false);
      }
      function lf(e, t, n, r) {
        if (n !== null && n.type === 0) return false;
        switch (typeof t) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
          default:
            return false;
        }
      }
      function of(e, t, n, r) {
        if (t === null || typeof t > "u" || lf(e, t, n, r)) return true;
        if (r) return false;
        if (n !== null) switch (n.type) {
          case 3:
            return !t;
          case 4:
            return t === false;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
        return false;
      }
      function _e(e, t, n, r, l, o, u) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
      }
      var ue = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        ue[e] = new _e(e, 0, false, e, null, false, false);
      });
      [
        [
          "acceptCharset",
          "accept-charset"
        ],
        [
          "className",
          "class"
        ],
        [
          "htmlFor",
          "for"
        ],
        [
          "httpEquiv",
          "http-equiv"
        ]
      ].forEach(function(e) {
        var t = e[0];
        ue[t] = new _e(t, 1, false, e[1], null, false, false);
      });
      [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
      ].forEach(function(e) {
        ue[e] = new _e(e, 2, false, e.toLowerCase(), null, false, false);
      });
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
      ].forEach(function(e) {
        ue[e] = new _e(e, 2, false, e, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        ue[e] = new _e(e, 3, false, e.toLowerCase(), null, false, false);
      });
      [
        "checked",
        "multiple",
        "muted",
        "selected"
      ].forEach(function(e) {
        ue[e] = new _e(e, 3, true, e, null, false, false);
      });
      [
        "capture",
        "download"
      ].forEach(function(e) {
        ue[e] = new _e(e, 4, false, e, null, false, false);
      });
      [
        "cols",
        "rows",
        "size",
        "span"
      ].forEach(function(e) {
        ue[e] = new _e(e, 6, false, e, null, false, false);
      });
      [
        "rowSpan",
        "start"
      ].forEach(function(e) {
        ue[e] = new _e(e, 5, false, e.toLowerCase(), null, false, false);
      });
      var gu = /[\-:]([a-z])/g;
      function _u(e) {
        return e[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(gu, _u);
        ue[t] = new _e(t, 1, false, e, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(gu, _u);
        ue[t] = new _e(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
      });
      [
        "xml:base",
        "xml:lang",
        "xml:space"
      ].forEach(function(e) {
        var t = e.replace(gu, _u);
        ue[t] = new _e(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      [
        "tabIndex",
        "crossOrigin"
      ].forEach(function(e) {
        ue[e] = new _e(e, 1, false, e.toLowerCase(), null, false, false);
      });
      ue.xlinkHref = new _e("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      [
        "src",
        "href",
        "action",
        "formAction"
      ].forEach(function(e) {
        ue[e] = new _e(e, 1, false, e.toLowerCase(), null, true, true);
      });
      function mu(e, t, n, r) {
        var l = ue.hasOwnProperty(t) ? ue[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (of(t, n, l, r) && (n = null), r || l === null ? rf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      var at = tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yr = Symbol.for("react.element"), Yt = Symbol.for("react.portal"), Xt = Symbol.for("react.fragment"), hu = Symbol.for("react.strict_mode"), vo = Symbol.for("react.profiler"), As = Symbol.for("react.provider"), Os = Symbol.for("react.context"), vu = Symbol.for("react.forward_ref"), yo = Symbol.for("react.suspense"), wo = Symbol.for("react.suspense_list"), yu = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), Ps = Symbol.for("react.offscreen"), fi = Symbol.iterator;
      function Tn(e) {
        return e === null || typeof e != "object" ? null : (e = fi && e[fi] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      var Y = Object.assign, Vl;
      function Dn(e) {
        if (Vl === void 0) try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Vl = t && t[1] || "";
        }
        return `
` + Vl + e;
      }
      var Wl = false;
      function Ql(e, t) {
        if (!e || Wl) return "";
        Wl = true;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t) if (t = function() {
            throw Error();
          }, Object.defineProperty(t.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(t, []);
            } catch (d) {
              var r = d;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (d) {
              r = d;
            }
            e.call(t.prototype);
          }
          else {
            try {
              throw Error();
            } catch (d) {
              r = d;
            }
            e();
          }
        } catch (d) {
          if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
            for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
              if (u !== 1 || i !== 1) do
                if (u--, i--, 0 > i || l[u] !== o[i]) {
                  var a = `
` + l[u].replace(" at new ", " at ");
                  return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
                }
              while (1 <= u && 0 <= i);
              break;
            }
          }
        } finally {
          Wl = false, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
      }
      function uf(e) {
        switch (e.tag) {
          case 5:
            return Dn(e.type);
          case 16:
            return Dn("Lazy");
          case 13:
            return Dn("Suspense");
          case 19:
            return Dn("SuspenseList");
          case 0:
          case 2:
          case 15:
            return e = Ql(e.type, false), e;
          case 11:
            return e = Ql(e.type.render, false), e;
          case 1:
            return e = Ql(e.type, true), e;
          default:
            return "";
        }
      }
      function Eo(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case Xt:
            return "Fragment";
          case Yt:
            return "Portal";
          case vo:
            return "Profiler";
          case hu:
            return "StrictMode";
          case yo:
            return "Suspense";
          case wo:
            return "SuspenseList";
        }
        if (typeof e == "object") switch (e.$$typeof) {
          case Os:
            return (e.displayName || "Context") + ".Consumer";
          case As:
            return (e._context.displayName || "Context") + ".Provider";
          case vu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case yu:
            return t = e.displayName || null, t !== null ? t : Eo(e.type) || "Memo";
          case dt:
            t = e._payload, e = e._init;
            try {
              return Eo(e(t));
            } catch {
            }
        }
        return null;
      }
      function sf(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t.displayName || "Context") + ".Consumer";
          case 10:
            return (t._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Eo(t);
          case 8:
            return t === hu ? "StrictMode" : "Mode";
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
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
        }
        return null;
      }
      function Tt(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return e;
          case "object":
            return e;
          default:
            return "";
        }
      }
      function Ds(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
      }
      function af(e) {
        var t = Ds(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
          var l = n.get, o = n.set;
          return Object.defineProperty(e, t, {
            configurable: true,
            get: function() {
              return l.call(this);
            },
            set: function(u) {
              r = "" + u, o.call(this, u);
            }
          }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
          }), {
            getValue: function() {
              return r;
            },
            setValue: function(u) {
              r = "" + u;
            },
            stopTracking: function() {
              e._valueTracker = null, delete e[t];
            }
          };
        }
      }
      function wr(e) {
        e._valueTracker || (e._valueTracker = af(e));
      }
      function Fs(e) {
        if (!e) return false;
        var t = e._valueTracker;
        if (!t) return true;
        var n = t.getValue(), r = "";
        return e && (r = Ds(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
      }
      function Zr(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
          return e.activeElement || e.body;
        } catch {
          return e.body;
        }
      }
      function So(e, t) {
        var n = t.checked;
        return Y({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: n ?? e._wrapperState.initialChecked
        });
      }
      function di(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = Tt(t.value != null ? t.value : n), e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
      }
      function zs(e, t) {
        t = t.checked, t != null && mu(e, "checked", t, false);
      }
      function ko(e, t) {
        zs(e, t);
        var n = Tt(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
          e.removeAttribute("value");
          return;
        }
        t.hasOwnProperty("value") ? Co(e, t.type, n) : t.hasOwnProperty("defaultValue") && Co(e, t.type, Tt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
      }
      function pi(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
          t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
      }
      function Co(e, t, n) {
        (t !== "number" || Zr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      var Fn = Array.isArray;
      function sn(e, t, n, r) {
        if (e = e.options, t) {
          t = {};
          for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
          for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
        } else {
          for (n = "" + Tt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
              e[l].selected = true, r && (e[l].defaultSelected = true);
              return;
            }
            t !== null || e[l].disabled || (t = e[l]);
          }
          t !== null && (t.selected = true);
        }
      }
      function xo(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
        return Y({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        });
      }
      function gi(e, t) {
        var n = t.value;
        if (n == null) {
          if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(w(92));
            if (Fn(n)) {
              if (1 < n.length) throw Error(w(93));
              n = n[0];
            }
            t = n;
          }
          t == null && (t = ""), n = t;
        }
        e._wrapperState = {
          initialValue: Tt(n)
        };
      }
      function Ms(e, t) {
        var n = Tt(t.value), r = Tt(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
      }
      function _i(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
      }
      function Us(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function To(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Us(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
      }
      var Er, js = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l);
          });
        } : e;
      }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
          for (Er = Er || document.createElement("div"), Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Er.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
      function Yn(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
          }
        }
        e.textContent = t;
      }
      var Un = {
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
      }, cf = [
        "Webkit",
        "ms",
        "Moz",
        "O"
      ];
      Object.keys(Un).forEach(function(e) {
        cf.forEach(function(t) {
          t = t + e.charAt(0).toUpperCase() + e.substring(1), Un[t] = Un[e];
        });
      });
      function Bs(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + t).trim() : t + "px";
      }
      function $s(e, t) {
        e = e.style;
        for (var n in t) if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0, l = Bs(n, t[n], r);
          n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
        }
      }
      var ff = Y({
        menuitem: true
      }, {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      });
      function No(e, t) {
        if (t) {
          if (ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
          if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(w(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
          }
          if (t.style != null && typeof t.style != "object") throw Error(w(62));
        }
      }
      function Lo(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
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
      var Ro = null;
      function wu(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
      }
      var Io = null, an = null, cn = null;
      function mi(e) {
        if (e = _r(e)) {
          if (typeof Io != "function") throw Error(w(280));
          var t = e.stateNode;
          t && (t = Tl(t), Io(e.stateNode, e.type, t));
        }
      }
      function bs(e) {
        an ? cn ? cn.push(e) : cn = [
          e
        ] : an = e;
      }
      function Hs() {
        if (an) {
          var e = an, t = cn;
          if (cn = an = null, mi(e), t) for (e = 0; e < t.length; e++) mi(t[e]);
        }
      }
      function Vs(e, t) {
        return e(t);
      }
      function Ws() {
      }
      var Gl = false;
      function Qs(e, t, n) {
        if (Gl) return e(t, n);
        Gl = true;
        try {
          return Vs(e, t, n);
        } finally {
          Gl = false, (an !== null || cn !== null) && (Ws(), Hs());
        }
      }
      function Xn(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Tl(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
          default:
            e = false;
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(w(231, t, typeof n));
        return n;
      }
      var Ao = false;
      if (ot) try {
        var Nn = {};
        Object.defineProperty(Nn, "passive", {
          get: function() {
            Ao = true;
          }
        }), window.addEventListener("test", Nn, Nn), window.removeEventListener("test", Nn, Nn);
      } catch {
        Ao = false;
      }
      function df(e, t, n, r, l, o, u, i, a) {
        var d = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, d);
        } catch (v) {
          this.onError(v);
        }
      }
      var jn = false, qr = null, Jr = false, Oo = null, pf = {
        onError: function(e) {
          jn = true, qr = e;
        }
      };
      function gf(e, t, n, r, l, o, u, i, a) {
        jn = false, qr = null, df.apply(pf, arguments);
      }
      function _f(e, t, n, r, l, o, u, i, a) {
        if (gf.apply(this, arguments), jn) {
          if (jn) {
            var d = qr;
            jn = false, qr = null;
          } else throw Error(w(198));
          Jr || (Jr = true, Oo = d);
        }
      }
      function Wt(e) {
        var t = e, n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do
            t = e, t.flags & 4098 && (n = t.return), e = t.return;
          while (e);
        }
        return t.tag === 3 ? n : null;
      }
      function Gs(e) {
        if (e.tag === 13) {
          var t = e.memoizedState;
          if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
      }
      function hi(e) {
        if (Wt(e) !== e) throw Error(w(188));
      }
      function mf(e) {
        var t = e.alternate;
        if (!t) {
          if (t = Wt(e), t === null) throw Error(w(188));
          return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
          var l = n.return;
          if (l === null) break;
          var o = l.alternate;
          if (o === null) {
            if (r = l.return, r !== null) {
              n = r;
              continue;
            }
            break;
          }
          if (l.child === o.child) {
            for (o = l.child; o; ) {
              if (o === n) return hi(l), e;
              if (o === r) return hi(l), t;
              o = o.sibling;
            }
            throw Error(w(188));
          }
          if (n.return !== r.return) n = l, r = o;
          else {
            for (var u = false, i = l.child; i; ) {
              if (i === n) {
                u = true, n = l, r = o;
                break;
              }
              if (i === r) {
                u = true, r = l, n = o;
                break;
              }
              i = i.sibling;
            }
            if (!u) {
              for (i = o.child; i; ) {
                if (i === n) {
                  u = true, n = o, r = l;
                  break;
                }
                if (i === r) {
                  u = true, r = o, n = l;
                  break;
                }
                i = i.sibling;
              }
              if (!u) throw Error(w(189));
            }
          }
          if (n.alternate !== r) throw Error(w(190));
        }
        if (n.tag !== 3) throw Error(w(188));
        return n.stateNode.current === n ? e : t;
      }
      function Ks(e) {
        return e = mf(e), e !== null ? Ys(e) : null;
      }
      function Ys(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
          var t = Ys(e);
          if (t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      var Xs = xe.unstable_scheduleCallback, vi = xe.unstable_cancelCallback, hf = xe.unstable_shouldYield, vf = xe.unstable_requestPaint, Z = xe.unstable_now, yf = xe.unstable_getCurrentPriorityLevel, Eu = xe.unstable_ImmediatePriority, Zs = xe.unstable_UserBlockingPriority, el = xe.unstable_NormalPriority, wf = xe.unstable_LowPriority, qs = xe.unstable_IdlePriority, Sl = null, Ge = null;
      function Ef(e) {
        if (Ge && typeof Ge.onCommitFiberRoot == "function") try {
          Ge.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
      }
      var Be = Math.clz32 ? Math.clz32 : Cf, Sf = Math.log, kf = Math.LN2;
      function Cf(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Sf(e) / kf | 0) | 0;
      }
      var Sr = 64, kr = 4194304;
      function zn(e) {
        switch (e & -e) {
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
            return e & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return e & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e;
        }
      }
      function tl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = n & 268435455;
        if (u !== 0) {
          var i = u & ~l;
          i !== 0 ? r = zn(i) : (o &= u, o !== 0 && (r = zn(o)));
        } else u = n & ~l, u !== 0 ? r = zn(u) : o !== 0 && (r = zn(o));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Be(t), l = 1 << n, r |= e[n], t &= ~l;
        return r;
      }
      function xf(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
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
            return t + 5e3;
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
      function Tf(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
          var u = 31 - Be(o), i = 1 << u, a = l[u];
          a === -1 ? (!(i & n) || i & r) && (l[u] = xf(i, t)) : a <= t && (e.expiredLanes |= i), o &= ~i;
        }
      }
      function Po(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
      }
      function Js() {
        var e = Sr;
        return Sr <<= 1, !(Sr & 4194240) && (Sr = 64), e;
      }
      function Kl(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function pr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Be(t), e[t] = n;
      }
      function Nf(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
          var l = 31 - Be(n), o = 1 << l;
          t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
        }
      }
      function Su(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
          var r = 31 - Be(n), l = 1 << r;
          l & t | e[r] & t && (e[r] |= t), n &= ~l;
        }
      }
      var j = 0;
      function ea(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
      }
      var ta, ku, na, ra, la, Do = false, Cr = [], vt = null, yt = null, wt = null, Zn = /* @__PURE__ */ new Map(), qn = /* @__PURE__ */ new Map(), gt = [], Lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function yi(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            vt = null;
            break;
          case "dragenter":
          case "dragleave":
            yt = null;
            break;
          case "mouseover":
          case "mouseout":
            wt = null;
            break;
          case "pointerover":
          case "pointerout":
            Zn.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            qn.delete(t.pointerId);
        }
      }
      function Ln(e, t, n, r, l, o) {
        return e === null || e.nativeEvent !== o ? (e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [
            l
          ]
        }, t !== null && (t = _r(t), t !== null && ku(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
      }
      function Rf(e, t, n, r, l) {
        switch (t) {
          case "focusin":
            return vt = Ln(vt, e, t, n, r, l), true;
          case "dragenter":
            return yt = Ln(yt, e, t, n, r, l), true;
          case "mouseover":
            return wt = Ln(wt, e, t, n, r, l), true;
          case "pointerover":
            var o = l.pointerId;
            return Zn.set(o, Ln(Zn.get(o) || null, e, t, n, r, l)), true;
          case "gotpointercapture":
            return o = l.pointerId, qn.set(o, Ln(qn.get(o) || null, e, t, n, r, l)), true;
        }
        return false;
      }
      function oa(e) {
        var t = Pt(e.target);
        if (t !== null) {
          var n = Wt(t);
          if (n !== null) {
            if (t = n.tag, t === 13) {
              if (t = Gs(n), t !== null) {
                e.blockedOn = t, la(e.priority, function() {
                  na(n);
                });
                return;
              }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return;
            }
          }
        }
        e.blockedOn = null;
      }
      function jr(e) {
        if (e.blockedOn !== null) return false;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ro = r, n.target.dispatchEvent(r), Ro = null;
          } else return t = _r(n), t !== null && ku(t), e.blockedOn = n, false;
          t.shift();
        }
        return true;
      }
      function wi(e, t, n) {
        jr(e) && n.delete(t);
      }
      function If() {
        Do = false, vt !== null && jr(vt) && (vt = null), yt !== null && jr(yt) && (yt = null), wt !== null && jr(wt) && (wt = null), Zn.forEach(wi), qn.forEach(wi);
      }
      function Rn(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Do || (Do = true, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, If)));
      }
      function Jn(e) {
        function t(l) {
          return Rn(l, e);
        }
        if (0 < Cr.length) {
          Rn(Cr[0], e);
          for (var n = 1; n < Cr.length; n++) {
            var r = Cr[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (vt !== null && Rn(vt, e), yt !== null && Rn(yt, e), wt !== null && Rn(wt, e), Zn.forEach(t), qn.forEach(t), n = 0; n < gt.length; n++) r = gt[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < gt.length && (n = gt[0], n.blockedOn === null); ) oa(n), n.blockedOn === null && gt.shift();
      }
      var fn = at.ReactCurrentBatchConfig, nl = true;
      function Af(e, t, n, r) {
        var l = j, o = fn.transition;
        fn.transition = null;
        try {
          j = 1, Cu(e, t, n, r);
        } finally {
          j = l, fn.transition = o;
        }
      }
      function Of(e, t, n, r) {
        var l = j, o = fn.transition;
        fn.transition = null;
        try {
          j = 4, Cu(e, t, n, r);
        } finally {
          j = l, fn.transition = o;
        }
      }
      function Cu(e, t, n, r) {
        if (nl) {
          var l = Fo(e, t, n, r);
          if (l === null) lo(e, t, r, rl, n), yi(e, r);
          else if (Rf(l, e, t, n, r)) r.stopPropagation();
          else if (yi(e, r), t & 4 && -1 < Lf.indexOf(e)) {
            for (; l !== null; ) {
              var o = _r(l);
              if (o !== null && ta(o), o = Fo(e, t, n, r), o === null && lo(e, t, r, rl, n), o === l) break;
              l = o;
            }
            l !== null && r.stopPropagation();
          } else lo(e, t, r, null, n);
        }
      }
      var rl = null;
      function Fo(e, t, n, r) {
        if (rl = null, e = wu(r), e = Pt(e), e !== null) if (t = Wt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
          if (e = Gs(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
        return rl = e, null;
      }
      function ua(e) {
        switch (e) {
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
            switch (yf()) {
              case Eu:
                return 1;
              case Zs:
                return 4;
              case el:
              case wf:
                return 16;
              case qs:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var mt = null, xu = null, Br = null;
      function ia() {
        if (Br) return Br;
        var e, t = xu, n = t.length, r, l = "value" in mt ? mt.value : mt.textContent, o = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++) ;
        var u = n - e;
        for (r = 1; r <= u && t[n - r] === l[o - r]; r++) ;
        return Br = l.slice(e, 1 < r ? 1 - r : void 0);
      }
      function $r(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
      }
      function xr() {
        return true;
      }
      function Ei() {
        return false;
      }
      function Ne(e) {
        function t(n, r, l, o, u) {
          this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
          for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
          return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? xr : Ei, this.isPropagationStopped = Ei, this;
        }
        return Y(t.prototype, {
          preventDefault: function() {
            this.defaultPrevented = true;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = xr);
          },
          stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = xr);
          },
          persist: function() {
          },
          isPersistent: xr
        }), t;
      }
      var Sn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      }, Tu = Ne(Sn), gr = Y({}, Sn, {
        view: 0,
        detail: 0
      }), Pf = Ne(gr), Yl, Xl, In, kl = Y({}, gr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Nu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
          return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? (Yl = e.screenX - In.screenX, Xl = e.screenY - In.screenY) : Xl = Yl = 0, In = e), Yl);
        },
        movementY: function(e) {
          return "movementY" in e ? e.movementY : Xl;
        }
      }), Si = Ne(kl), Df = Y({}, kl, {
        dataTransfer: 0
      }), Ff = Ne(Df), zf = Y({}, gr, {
        relatedTarget: 0
      }), Zl = Ne(zf), Mf = Y({}, Sn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), Uf = Ne(Mf), jf = Y({}, Sn, {
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
      }), Bf = Ne(jf), $f = Y({}, Sn, {
        data: 0
      }), ki = Ne($f), bf = {
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
      }, Hf = {
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
      }, Vf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
      function Wf(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Vf[e]) ? !!t[e] : false;
      }
      function Nu() {
        return Wf;
      }
      var Qf = Y({}, gr, {
        key: function(e) {
          if (e.key) {
            var t = bf[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress" ? (e = $r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hf[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Nu,
        charCode: function(e) {
          return e.type === "keypress" ? $r(e) : 0;
        },
        keyCode: function(e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
          return e.type === "keypress" ? $r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
      }), Gf = Ne(Qf), Kf = Y({}, kl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      }), Ci = Ne(Kf), Yf = Y({}, gr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Nu
      }), Xf = Ne(Yf), Zf = Y({}, Sn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      }), qf = Ne(Zf), Jf = Y({}, kl, {
        deltaX: function(e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      }), ed = Ne(Jf), td = [
        9,
        13,
        27,
        32
      ], Lu = ot && "CompositionEvent" in window, Bn = null;
      ot && "documentMode" in document && (Bn = document.documentMode);
      var nd = ot && "TextEvent" in window && !Bn, sa = ot && (!Lu || Bn && 8 < Bn && 11 >= Bn), xi = " ", Ti = false;
      function aa(e, t) {
        switch (e) {
          case "keyup":
            return td.indexOf(t.keyCode) !== -1;
          case "keydown":
            return t.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function ca(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
      }
      var Zt = false;
      function rd(e, t) {
        switch (e) {
          case "compositionend":
            return ca(t);
          case "keypress":
            return t.which !== 32 ? null : (Ti = true, xi);
          case "textInput":
            return e = t.data, e === xi && Ti ? null : e;
          default:
            return null;
        }
      }
      function ld(e, t) {
        if (Zt) return e === "compositionend" || !Lu && aa(e, t) ? (e = ia(), Br = xu = mt = null, Zt = false, e) : null;
        switch (e) {
          case "paste":
            return null;
          case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
              if (t.char && 1 < t.char.length) return t.char;
              if (t.which) return String.fromCharCode(t.which);
            }
            return null;
          case "compositionend":
            return sa && t.locale !== "ko" ? null : t.data;
          default:
            return null;
        }
      }
      var od = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      function Ni(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!od[e.type] : t === "textarea";
      }
      function fa(e, t, n, r) {
        bs(r), t = ll(t, "onChange"), 0 < t.length && (n = new Tu("onChange", "change", null, n, r), e.push({
          event: n,
          listeners: t
        }));
      }
      var $n = null, er = null;
      function ud(e) {
        Sa(e, 0);
      }
      function Cl(e) {
        var t = en(e);
        if (Fs(t)) return e;
      }
      function id(e, t) {
        if (e === "change") return t;
      }
      var da = false;
      if (ot) {
        var ql;
        if (ot) {
          var Jl = "oninput" in document;
          if (!Jl) {
            var Li = document.createElement("div");
            Li.setAttribute("oninput", "return;"), Jl = typeof Li.oninput == "function";
          }
          ql = Jl;
        } else ql = false;
        da = ql && (!document.documentMode || 9 < document.documentMode);
      }
      function Ri() {
        $n && ($n.detachEvent("onpropertychange", pa), er = $n = null);
      }
      function pa(e) {
        if (e.propertyName === "value" && Cl(er)) {
          var t = [];
          fa(t, er, e, wu(e)), Qs(ud, t);
        }
      }
      function sd(e, t, n) {
        e === "focusin" ? (Ri(), $n = t, er = n, $n.attachEvent("onpropertychange", pa)) : e === "focusout" && Ri();
      }
      function ad(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Cl(er);
      }
      function cd(e, t) {
        if (e === "click") return Cl(t);
      }
      function fd(e, t) {
        if (e === "input" || e === "change") return Cl(t);
      }
      function dd(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
      }
      var be = typeof Object.is == "function" ? Object.is : dd;
      function tr(e, t) {
        if (be(e, t)) return true;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return false;
        for (r = 0; r < n.length; r++) {
          var l = n[r];
          if (!ho.call(t, l) || !be(e[l], t[l])) return false;
        }
        return true;
      }
      function Ii(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function Ai(e, t) {
        var n = Ii(e);
        e = 0;
        for (var r; n; ) {
          if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
              node: n,
              offset: t - e
            };
            e = r;
          }
          e: {
            for (; n; ) {
              if (n.nextSibling) {
                n = n.nextSibling;
                break e;
              }
              n = n.parentNode;
            }
            n = void 0;
          }
          n = Ii(n);
        }
      }
      function ga(e, t) {
        return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? ga(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
      }
      function _a() {
        for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = typeof t.contentWindow.location.href == "string";
          } catch {
            n = false;
          }
          if (n) e = t.contentWindow;
          else break;
          t = Zr(e.document);
        }
        return t;
      }
      function Ru(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
      }
      function pd(e) {
        var t = _a(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && ga(n.ownerDocument.documentElement, n)) {
          if (r !== null && Ru(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
              e = e.getSelection();
              var l = n.textContent.length, o = Math.min(r.start, l);
              r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ai(n, o);
              var u = Ai(n, r);
              l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
            }
          }
          for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
          });
          for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
        }
      }
      var gd = ot && "documentMode" in document && 11 >= document.documentMode, qt = null, zo = null, bn = null, Mo = false;
      function Oi(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Mo || qt == null || qt !== Zr(r) || (r = qt, "selectionStart" in r && Ru(r) ? r = {
          start: r.selectionStart,
          end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        }), bn && tr(bn, r) || (bn = r, r = ll(zo, "onSelect"), 0 < r.length && (t = new Tu("onSelect", "select", null, t, n), e.push({
          event: t,
          listeners: r
        }), t.target = qt)));
      }
      function Tr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
      }
      var Jt = {
        animationend: Tr("Animation", "AnimationEnd"),
        animationiteration: Tr("Animation", "AnimationIteration"),
        animationstart: Tr("Animation", "AnimationStart"),
        transitionend: Tr("Transition", "TransitionEnd")
      }, eo = {}, ma = {};
      ot && (ma = document.createElement("div").style, "AnimationEvent" in window || (delete Jt.animationend.animation, delete Jt.animationiteration.animation, delete Jt.animationstart.animation), "TransitionEvent" in window || delete Jt.transitionend.transition);
      function xl(e) {
        if (eo[e]) return eo[e];
        if (!Jt[e]) return e;
        var t = Jt[e], n;
        for (n in t) if (t.hasOwnProperty(n) && n in ma) return eo[e] = t[n];
        return e;
      }
      var ha = xl("animationend"), va = xl("animationiteration"), ya = xl("animationstart"), wa = xl("transitionend"), Ea = /* @__PURE__ */ new Map(), Pi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function Lt(e, t) {
        Ea.set(e, t), Vt(t, [
          e
        ]);
      }
      for (var to = 0; to < Pi.length; to++) {
        var no = Pi[to], _d = no.toLowerCase(), md = no[0].toUpperCase() + no.slice(1);
        Lt(_d, "on" + md);
      }
      Lt(ha, "onAnimationEnd");
      Lt(va, "onAnimationIteration");
      Lt(ya, "onAnimationStart");
      Lt("dblclick", "onDoubleClick");
      Lt("focusin", "onFocus");
      Lt("focusout", "onBlur");
      Lt(wa, "onTransitionEnd");
      gn("onMouseEnter", [
        "mouseout",
        "mouseover"
      ]);
      gn("onMouseLeave", [
        "mouseout",
        "mouseover"
      ]);
      gn("onPointerEnter", [
        "pointerout",
        "pointerover"
      ]);
      gn("onPointerLeave", [
        "pointerout",
        "pointerover"
      ]);
      Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      Vt("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
      ]);
      Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
      function Di(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, _f(r, t, void 0, e), e.currentTarget = null;
      }
      function Sa(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
          var r = e[n], l = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t) for (var u = r.length - 1; 0 <= u; u--) {
              var i = r[u], a = i.instance, d = i.currentTarget;
              if (i = i.listener, a !== o && l.isPropagationStopped()) break e;
              Di(l, i, d), o = a;
            }
            else for (u = 0; u < r.length; u++) {
              if (i = r[u], a = i.instance, d = i.currentTarget, i = i.listener, a !== o && l.isPropagationStopped()) break e;
              Di(l, i, d), o = a;
            }
          }
        }
        if (Jr) throw e = Oo, Jr = false, Oo = null, e;
      }
      function H(e, t) {
        var n = t[bo];
        n === void 0 && (n = t[bo] = /* @__PURE__ */ new Set());
        var r = e + "__bubble";
        n.has(r) || (ka(t, e, 2, false), n.add(r));
      }
      function ro(e, t, n) {
        var r = 0;
        t && (r |= 4), ka(n, e, r, t);
      }
      var Nr = "_reactListening" + Math.random().toString(36).slice(2);
      function nr(e) {
        if (!e[Nr]) {
          e[Nr] = true, Is.forEach(function(n) {
            n !== "selectionchange" && (hd.has(n) || ro(n, false, e), ro(n, true, e));
          });
          var t = e.nodeType === 9 ? e : e.ownerDocument;
          t === null || t[Nr] || (t[Nr] = true, ro("selectionchange", false, t));
        }
      }
      function ka(e, t, n, r) {
        switch (ua(t)) {
          case 1:
            var l = Af;
            break;
          case 4:
            l = Of;
            break;
          default:
            l = Cu;
        }
        n = l.bind(null, t, n, e), l = void 0, !Ao || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
          capture: true,
          passive: l
        }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
          passive: l
        }) : e.addEventListener(t, n, false);
      }
      function lo(e, t, n, r, l) {
        var o = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
          if (r === null) return;
          var u = r.tag;
          if (u === 3 || u === 4) {
            var i = r.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l) break;
            if (u === 4) for (u = r.return; u !== null; ) {
              var a = u.tag;
              if ((a === 3 || a === 4) && (a = u.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
              u = u.return;
            }
            for (; i !== null; ) {
              if (u = Pt(i), u === null) return;
              if (a = u.tag, a === 5 || a === 6) {
                r = o = u;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
        Qs(function() {
          var d = o, v = wu(n), h = [];
          e: {
            var m = Ea.get(e);
            if (m !== void 0) {
              var C = Tu, T = e;
              switch (e) {
                case "keypress":
                  if ($r(n) === 0) break e;
                case "keydown":
                case "keyup":
                  C = Gf;
                  break;
                case "focusin":
                  T = "focus", C = Zl;
                  break;
                case "focusout":
                  T = "blur", C = Zl;
                  break;
                case "beforeblur":
                case "afterblur":
                  C = Zl;
                  break;
                case "click":
                  if (n.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  C = Si;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  C = Ff;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  C = Xf;
                  break;
                case ha:
                case va:
                case ya:
                  C = Uf;
                  break;
                case wa:
                  C = qf;
                  break;
                case "scroll":
                  C = Pf;
                  break;
                case "wheel":
                  C = ed;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  C = Bf;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  C = Ci;
              }
              var E = (t & 4) !== 0, P = !E && e === "scroll", f = E ? m !== null ? m + "Capture" : null : m;
              E = [];
              for (var s = d, c; s !== null; ) {
                c = s;
                var p = c.stateNode;
                if (c.tag === 5 && p !== null && (c = p, f !== null && (p = Xn(s, f), p != null && E.push(rr(s, p, c)))), P) break;
                s = s.return;
              }
              0 < E.length && (m = new C(m, T, null, n, v), h.push({
                event: m,
                listeners: E
              }));
            }
          }
          if (!(t & 7)) {
            e: {
              if (m = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", m && n !== Ro && (T = n.relatedTarget || n.fromElement) && (Pt(T) || T[ut])) break e;
              if ((C || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window, C ? (T = n.relatedTarget || n.toElement, C = d, T = T ? Pt(T) : null, T !== null && (P = Wt(T), T !== P || T.tag !== 5 && T.tag !== 6) && (T = null)) : (C = null, T = d), C !== T)) {
                if (E = Si, p = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (E = Ci, p = "onPointerLeave", f = "onPointerEnter", s = "pointer"), P = C == null ? m : en(C), c = T == null ? m : en(T), m = new E(p, s + "leave", C, n, v), m.target = P, m.relatedTarget = c, p = null, Pt(v) === d && (E = new E(f, s + "enter", T, n, v), E.target = c, E.relatedTarget = P, p = E), P = p, C && T) t: {
                  for (E = C, f = T, s = 0, c = E; c; c = Kt(c)) s++;
                  for (c = 0, p = f; p; p = Kt(p)) c++;
                  for (; 0 < s - c; ) E = Kt(E), s--;
                  for (; 0 < c - s; ) f = Kt(f), c--;
                  for (; s--; ) {
                    if (E === f || f !== null && E === f.alternate) break t;
                    E = Kt(E), f = Kt(f);
                  }
                  E = null;
                }
                else E = null;
                C !== null && Fi(h, m, C, E, false), T !== null && P !== null && Fi(h, P, T, E, true);
              }
            }
            e: {
              if (m = d ? en(d) : window, C = m.nodeName && m.nodeName.toLowerCase(), C === "select" || C === "input" && m.type === "file") var g = id;
              else if (Ni(m)) if (da) g = fd;
              else {
                g = ad;
                var _ = sd;
              }
              else (C = m.nodeName) && C.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (g = cd);
              if (g && (g = g(e, d))) {
                fa(h, g, n, v);
                break e;
              }
              _ && _(e, m, d), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && Co(m, "number", m.value);
            }
            switch (_ = d ? en(d) : window, e) {
              case "focusin":
                (Ni(_) || _.contentEditable === "true") && (qt = _, zo = d, bn = null);
                break;
              case "focusout":
                bn = zo = qt = null;
                break;
              case "mousedown":
                Mo = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Mo = false, Oi(h, n, v);
                break;
              case "selectionchange":
                if (gd) break;
              case "keydown":
              case "keyup":
                Oi(h, n, v);
            }
            var y;
            if (Lu) e: {
              switch (e) {
                case "compositionstart":
                  var S = "onCompositionStart";
                  break e;
                case "compositionend":
                  S = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  S = "onCompositionUpdate";
                  break e;
              }
              S = void 0;
            }
            else Zt ? aa(e, n) && (S = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
            S && (sa && n.locale !== "ko" && (Zt || S !== "onCompositionStart" ? S === "onCompositionEnd" && Zt && (y = ia()) : (mt = v, xu = "value" in mt ? mt.value : mt.textContent, Zt = true)), _ = ll(d, S), 0 < _.length && (S = new ki(S, e, null, n, v), h.push({
              event: S,
              listeners: _
            }), y ? S.data = y : (y = ca(n), y !== null && (S.data = y)))), (y = nd ? rd(e, n) : ld(e, n)) && (d = ll(d, "onBeforeInput"), 0 < d.length && (v = new ki("onBeforeInput", "beforeinput", null, n, v), h.push({
              event: v,
              listeners: d
            }), v.data = y));
          }
          Sa(h, t);
        });
      }
      function rr(e, t, n) {
        return {
          instance: e,
          listener: t,
          currentTarget: n
        };
      }
      function ll(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
          var l = e, o = l.stateNode;
          l.tag === 5 && o !== null && (l = o, o = Xn(e, n), o != null && r.unshift(rr(e, o, l)), o = Xn(e, t), o != null && r.push(rr(e, o, l))), e = e.return;
        }
        return r;
      }
      function Kt(e) {
        if (e === null) return null;
        do
          e = e.return;
        while (e && e.tag !== 5);
        return e || null;
      }
      function Fi(e, t, n, r, l) {
        for (var o = t._reactName, u = []; n !== null && n !== r; ) {
          var i = n, a = i.alternate, d = i.stateNode;
          if (a !== null && a === r) break;
          i.tag === 5 && d !== null && (i = d, l ? (a = Xn(n, o), a != null && u.unshift(rr(n, a, i))) : l || (a = Xn(n, o), a != null && u.push(rr(n, a, i)))), n = n.return;
        }
        u.length !== 0 && e.push({
          event: t,
          listeners: u
        });
      }
      var vd = /\r\n?/g, yd = /\u0000|\uFFFD/g;
      function zi(e) {
        return (typeof e == "string" ? e : "" + e).replace(vd, `
`).replace(yd, "");
      }
      function Lr(e, t, n) {
        if (t = zi(t), zi(e) !== t && n) throw Error(w(425));
      }
      function ol() {
      }
      var Uo = null, jo = null;
      function Bo(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
      }
      var $o = typeof setTimeout == "function" ? setTimeout : void 0, wd = typeof clearTimeout == "function" ? clearTimeout : void 0, Mi = typeof Promise == "function" ? Promise : void 0, Ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mi < "u" ? function(e) {
        return Mi.resolve(null).then(e).catch(Sd);
      } : $o;
      function Sd(e) {
        setTimeout(function() {
          throw e;
        });
      }
      function oo(e, t) {
        var n = t, r = 0;
        do {
          var l = n.nextSibling;
          if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
            if (r === 0) {
              e.removeChild(l), Jn(t);
              return;
            }
            r--;
          } else n !== "$" && n !== "$?" && n !== "$!" || r++;
          n = l;
        } while (n);
        Jn(t);
      }
      function Et(e) {
        for (; e != null; e = e.nextSibling) {
          var t = e.nodeType;
          if (t === 1 || t === 3) break;
          if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null;
          }
        }
        return e;
      }
      function Ui(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0) return e;
              t--;
            } else n === "/$" && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var kn = Math.random().toString(36).slice(2), Qe = "__reactFiber$" + kn, lr = "__reactProps$" + kn, ut = "__reactContainer$" + kn, bo = "__reactEvents$" + kn, kd = "__reactListeners$" + kn, Cd = "__reactHandles$" + kn;
      function Pt(e) {
        var t = e[Qe];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if (t = n[ut] || n[Qe]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ui(e); e !== null; ) {
              if (n = e[Qe]) return n;
              e = Ui(e);
            }
            return t;
          }
          e = n, n = e.parentNode;
        }
        return null;
      }
      function _r(e) {
        return e = e[Qe] || e[ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
      }
      function en(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(w(33));
      }
      function Tl(e) {
        return e[lr] || null;
      }
      var Ho = [], tn = -1;
      function Rt(e) {
        return {
          current: e
        };
      }
      function V(e) {
        0 > tn || (e.current = Ho[tn], Ho[tn] = null, tn--);
      }
      function b(e, t) {
        tn++, Ho[tn] = e.current, e.current = t;
      }
      var Nt = {}, fe = Rt(Nt), ye = Rt(false), jt = Nt;
      function _n(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Nt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {}, o;
        for (o in n) l[o] = t[o];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
      }
      function we(e) {
        return e = e.childContextTypes, e != null;
      }
      function ul() {
        V(ye), V(fe);
      }
      function ji(e, t, n) {
        if (fe.current !== Nt) throw Error(w(168));
        b(fe, t), b(ye, n);
      }
      function Ca(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var l in r) if (!(l in t)) throw Error(w(108, sf(e) || "Unknown", l));
        return Y({}, n, r);
      }
      function il(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nt, jt = fe.current, b(fe, e), b(ye, ye.current), true;
      }
      function Bi(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(w(169));
        n ? (e = Ca(e, t, jt), r.__reactInternalMemoizedMergedChildContext = e, V(ye), V(fe), b(fe, e)) : V(ye), b(ye, n);
      }
      var et = null, Nl = false, uo = false;
      function xa(e) {
        et === null ? et = [
          e
        ] : et.push(e);
      }
      function xd(e) {
        Nl = true, xa(e);
      }
      function It() {
        if (!uo && et !== null) {
          uo = true;
          var e = 0, t = j;
          try {
            var n = et;
            for (j = 1; e < n.length; e++) {
              var r = n[e];
              do
                r = r(true);
              while (r !== null);
            }
            et = null, Nl = false;
          } catch (l) {
            throw et !== null && (et = et.slice(e + 1)), Xs(Eu, It), l;
          } finally {
            j = t, uo = false;
          }
        }
        return null;
      }
      var nn = [], rn = 0, sl = null, al = 0, Re = [], Ie = 0, Bt = null, nt = 1, rt = "";
      function At(e, t) {
        nn[rn++] = al, nn[rn++] = sl, sl = e, al = t;
      }
      function Ta(e, t, n) {
        Re[Ie++] = nt, Re[Ie++] = rt, Re[Ie++] = Bt, Bt = e;
        var r = nt;
        e = rt;
        var l = 32 - Be(r) - 1;
        r &= ~(1 << l), n += 1;
        var o = 32 - Be(t) + l;
        if (30 < o) {
          var u = l - l % 5;
          o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, nt = 1 << 32 - Be(t) + l | n << l | r, rt = o + e;
        } else nt = 1 << o | n << l | r, rt = e;
      }
      function Iu(e) {
        e.return !== null && (At(e, 1), Ta(e, 1, 0));
      }
      function Au(e) {
        for (; e === sl; ) sl = nn[--rn], nn[rn] = null, al = nn[--rn], nn[rn] = null;
        for (; e === Bt; ) Bt = Re[--Ie], Re[Ie] = null, rt = Re[--Ie], Re[Ie] = null, nt = Re[--Ie], Re[Ie] = null;
      }
      var Ce = null, ke = null, W = false, je = null;
      function Na(e, t) {
        var n = Oe(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
          n
        ], e.flags |= 16) : t.push(n);
      }
      function $i(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ce = e, ke = Et(t.firstChild), true) : false;
          case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ce = e, ke = null, true) : false;
          case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Bt !== null ? {
              id: nt,
              overflow: rt
            } : null, e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }, n = Oe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ce = e, ke = null, true) : false;
          default:
            return false;
        }
      }
      function Vo(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
      }
      function Wo(e) {
        if (W) {
          var t = ke;
          if (t) {
            var n = t;
            if (!$i(e, t)) {
              if (Vo(e)) throw Error(w(418));
              t = Et(n.nextSibling);
              var r = Ce;
              t && $i(e, t) ? Na(r, n) : (e.flags = e.flags & -4097 | 2, W = false, Ce = e);
            }
          } else {
            if (Vo(e)) throw Error(w(418));
            e.flags = e.flags & -4097 | 2, W = false, Ce = e;
          }
        }
      }
      function bi(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
        Ce = e;
      }
      function Rr(e) {
        if (e !== Ce) return false;
        if (!W) return bi(e), W = true, false;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Bo(e.type, e.memoizedProps)), t && (t = ke)) {
          if (Vo(e)) throw La(), Error(w(418));
          for (; t; ) Na(e, t), t = Et(t.nextSibling);
        }
        if (bi(e), e.tag === 13) {
          if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                  if (t === 0) {
                    ke = Et(e.nextSibling);
                    break e;
                  }
                  t--;
                } else n !== "$" && n !== "$!" && n !== "$?" || t++;
              }
              e = e.nextSibling;
            }
            ke = null;
          }
        } else ke = Ce ? Et(e.stateNode.nextSibling) : null;
        return true;
      }
      function La() {
        for (var e = ke; e; ) e = Et(e.nextSibling);
      }
      function mn() {
        ke = Ce = null, W = false;
      }
      function Ou(e) {
        je === null ? je = [
          e
        ] : je.push(e);
      }
      var Td = at.ReactCurrentBatchConfig;
      function An(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
          if (n._owner) {
            if (n = n._owner, n) {
              if (n.tag !== 1) throw Error(w(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(w(147, e));
            var l = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
              var i = l.refs;
              u === null ? delete i[o] : i[o] = u;
            }, t._stringRef = o, t);
          }
          if (typeof e != "string") throw Error(w(284));
          if (!n._owner) throw Error(w(290, e));
        }
        return e;
      }
      function Ir(e, t) {
        throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
      }
      function Hi(e) {
        var t = e._init;
        return t(e._payload);
      }
      function Ra(e) {
        function t(f, s) {
          if (e) {
            var c = f.deletions;
            c === null ? (f.deletions = [
              s
            ], f.flags |= 16) : c.push(s);
          }
        }
        function n(f, s) {
          if (!e) return null;
          for (; s !== null; ) t(f, s), s = s.sibling;
          return null;
        }
        function r(f, s) {
          for (f = /* @__PURE__ */ new Map(); s !== null; ) s.key !== null ? f.set(s.key, s) : f.set(s.index, s), s = s.sibling;
          return f;
        }
        function l(f, s) {
          return f = xt(f, s), f.index = 0, f.sibling = null, f;
        }
        function o(f, s, c) {
          return f.index = c, e ? (c = f.alternate, c !== null ? (c = c.index, c < s ? (f.flags |= 2, s) : c) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
        }
        function u(f) {
          return e && f.alternate === null && (f.flags |= 2), f;
        }
        function i(f, s, c, p) {
          return s === null || s.tag !== 6 ? (s = go(c, f.mode, p), s.return = f, s) : (s = l(s, c), s.return = f, s);
        }
        function a(f, s, c, p) {
          var g = c.type;
          return g === Xt ? v(f, s, c.props.children, p, c.key) : s !== null && (s.elementType === g || typeof g == "object" && g !== null && g.$$typeof === dt && Hi(g) === s.type) ? (p = l(s, c.props), p.ref = An(f, s, c), p.return = f, p) : (p = Kr(c.type, c.key, c.props, null, f.mode, p), p.ref = An(f, s, c), p.return = f, p);
        }
        function d(f, s, c, p) {
          return s === null || s.tag !== 4 || s.stateNode.containerInfo !== c.containerInfo || s.stateNode.implementation !== c.implementation ? (s = _o(c, f.mode, p), s.return = f, s) : (s = l(s, c.children || []), s.return = f, s);
        }
        function v(f, s, c, p, g) {
          return s === null || s.tag !== 7 ? (s = Mt(c, f.mode, p, g), s.return = f, s) : (s = l(s, c), s.return = f, s);
        }
        function h(f, s, c) {
          if (typeof s == "string" && s !== "" || typeof s == "number") return s = go("" + s, f.mode, c), s.return = f, s;
          if (typeof s == "object" && s !== null) {
            switch (s.$$typeof) {
              case yr:
                return c = Kr(s.type, s.key, s.props, null, f.mode, c), c.ref = An(f, null, s), c.return = f, c;
              case Yt:
                return s = _o(s, f.mode, c), s.return = f, s;
              case dt:
                var p = s._init;
                return h(f, p(s._payload), c);
            }
            if (Fn(s) || Tn(s)) return s = Mt(s, f.mode, c, null), s.return = f, s;
            Ir(f, s);
          }
          return null;
        }
        function m(f, s, c, p) {
          var g = s !== null ? s.key : null;
          if (typeof c == "string" && c !== "" || typeof c == "number") return g !== null ? null : i(f, s, "" + c, p);
          if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
              case yr:
                return c.key === g ? a(f, s, c, p) : null;
              case Yt:
                return c.key === g ? d(f, s, c, p) : null;
              case dt:
                return g = c._init, m(f, s, g(c._payload), p);
            }
            if (Fn(c) || Tn(c)) return g !== null ? null : v(f, s, c, p, null);
            Ir(f, c);
          }
          return null;
        }
        function C(f, s, c, p, g) {
          if (typeof p == "string" && p !== "" || typeof p == "number") return f = f.get(c) || null, i(s, f, "" + p, g);
          if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
              case yr:
                return f = f.get(p.key === null ? c : p.key) || null, a(s, f, p, g);
              case Yt:
                return f = f.get(p.key === null ? c : p.key) || null, d(s, f, p, g);
              case dt:
                var _ = p._init;
                return C(f, s, c, _(p._payload), g);
            }
            if (Fn(p) || Tn(p)) return f = f.get(c) || null, v(s, f, p, g, null);
            Ir(s, p);
          }
          return null;
        }
        function T(f, s, c, p) {
          for (var g = null, _ = null, y = s, S = s = 0, N = null; y !== null && S < c.length; S++) {
            y.index > S ? (N = y, y = null) : N = y.sibling;
            var I = m(f, y, c[S], p);
            if (I === null) {
              y === null && (y = N);
              break;
            }
            e && y && I.alternate === null && t(f, y), s = o(I, s, S), _ === null ? g = I : _.sibling = I, _ = I, y = N;
          }
          if (S === c.length) return n(f, y), W && At(f, S), g;
          if (y === null) {
            for (; S < c.length; S++) y = h(f, c[S], p), y !== null && (s = o(y, s, S), _ === null ? g = y : _.sibling = y, _ = y);
            return W && At(f, S), g;
          }
          for (y = r(f, y); S < c.length; S++) N = C(y, f, S, c[S], p), N !== null && (e && N.alternate !== null && y.delete(N.key === null ? S : N.key), s = o(N, s, S), _ === null ? g = N : _.sibling = N, _ = N);
          return e && y.forEach(function(B) {
            return t(f, B);
          }), W && At(f, S), g;
        }
        function E(f, s, c, p) {
          var g = Tn(c);
          if (typeof g != "function") throw Error(w(150));
          if (c = g.call(c), c == null) throw Error(w(151));
          for (var _ = g = null, y = s, S = s = 0, N = null, I = c.next(); y !== null && !I.done; S++, I = c.next()) {
            y.index > S ? (N = y, y = null) : N = y.sibling;
            var B = m(f, y, I.value, p);
            if (B === null) {
              y === null && (y = N);
              break;
            }
            e && y && B.alternate === null && t(f, y), s = o(B, s, S), _ === null ? g = B : _.sibling = B, _ = B, y = N;
          }
          if (I.done) return n(f, y), W && At(f, S), g;
          if (y === null) {
            for (; !I.done; S++, I = c.next()) I = h(f, I.value, p), I !== null && (s = o(I, s, S), _ === null ? g = I : _.sibling = I, _ = I);
            return W && At(f, S), g;
          }
          for (y = r(f, y); !I.done; S++, I = c.next()) I = C(y, f, S, I.value, p), I !== null && (e && I.alternate !== null && y.delete(I.key === null ? S : I.key), s = o(I, s, S), _ === null ? g = I : _.sibling = I, _ = I);
          return e && y.forEach(function(me) {
            return t(f, me);
          }), W && At(f, S), g;
        }
        function P(f, s, c, p) {
          if (typeof c == "object" && c !== null && c.type === Xt && c.key === null && (c = c.props.children), typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
              case yr:
                e: {
                  for (var g = c.key, _ = s; _ !== null; ) {
                    if (_.key === g) {
                      if (g = c.type, g === Xt) {
                        if (_.tag === 7) {
                          n(f, _.sibling), s = l(_, c.props.children), s.return = f, f = s;
                          break e;
                        }
                      } else if (_.elementType === g || typeof g == "object" && g !== null && g.$$typeof === dt && Hi(g) === _.type) {
                        n(f, _.sibling), s = l(_, c.props), s.ref = An(f, _, c), s.return = f, f = s;
                        break e;
                      }
                      n(f, _);
                      break;
                    } else t(f, _);
                    _ = _.sibling;
                  }
                  c.type === Xt ? (s = Mt(c.props.children, f.mode, p, c.key), s.return = f, f = s) : (p = Kr(c.type, c.key, c.props, null, f.mode, p), p.ref = An(f, s, c), p.return = f, f = p);
                }
                return u(f);
              case Yt:
                e: {
                  for (_ = c.key; s !== null; ) {
                    if (s.key === _) if (s.tag === 4 && s.stateNode.containerInfo === c.containerInfo && s.stateNode.implementation === c.implementation) {
                      n(f, s.sibling), s = l(s, c.children || []), s.return = f, f = s;
                      break e;
                    } else {
                      n(f, s);
                      break;
                    }
                    else t(f, s);
                    s = s.sibling;
                  }
                  s = _o(c, f.mode, p), s.return = f, f = s;
                }
                return u(f);
              case dt:
                return _ = c._init, P(f, s, _(c._payload), p);
            }
            if (Fn(c)) return T(f, s, c, p);
            if (Tn(c)) return E(f, s, c, p);
            Ir(f, c);
          }
          return typeof c == "string" && c !== "" || typeof c == "number" ? (c = "" + c, s !== null && s.tag === 6 ? (n(f, s.sibling), s = l(s, c), s.return = f, f = s) : (n(f, s), s = go(c, f.mode, p), s.return = f, f = s), u(f)) : n(f, s);
        }
        return P;
      }
      var hn = Ra(true), Ia = Ra(false), cl = Rt(null), fl = null, ln = null, Pu = null;
      function Du() {
        Pu = ln = fl = null;
      }
      function Fu(e) {
        var t = cl.current;
        V(cl), e._currentValue = t;
      }
      function Qo(e, t, n) {
        for (; e !== null; ) {
          var r = e.alternate;
          if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
          e = e.return;
        }
      }
      function dn(e, t) {
        fl = e, Pu = ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ve = true), e.firstContext = null);
      }
      function De(e) {
        var t = e._currentValue;
        if (Pu !== e) if (e = {
          context: e,
          memoizedValue: t,
          next: null
        }, ln === null) {
          if (fl === null) throw Error(w(308));
          ln = e, fl.dependencies = {
            lanes: 0,
            firstContext: e
          };
        } else ln = ln.next = e;
        return t;
      }
      var Dt = null;
      function zu(e) {
        Dt === null ? Dt = [
          e
        ] : Dt.push(e);
      }
      function Aa(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, zu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, it(e, r);
      }
      function it(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
      }
      var pt = false;
      function Mu(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        };
      }
      function Oa(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects
        });
      }
      function lt(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function St(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, M & 2) {
          var l = r.pending;
          return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, it(e, n);
        }
        return l = r.interleaved, l === null ? (t.next = t, zu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, it(e, n);
      }
      function br(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
          var r = t.lanes;
          r &= e.pendingLanes, n |= r, t.lanes = n, Su(e, n);
        }
      }
      function Vi(e, t) {
        var n = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
          var l = null, o = null;
          if (n = n.firstBaseUpdate, n !== null) {
            do {
              var u = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              };
              o === null ? l = o = u : o = o.next = u, n = n.next;
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t;
          } else l = o = t;
          n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
          }, e.updateQueue = n;
          return;
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
      }
      function dl(e, t, n, r) {
        var l = e.updateQueue;
        pt = false;
        var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
        if (i !== null) {
          l.shared.pending = null;
          var a = i, d = a.next;
          a.next = null, u === null ? o = d : u.next = d, u = a;
          var v = e.alternate;
          v !== null && (v = v.updateQueue, i = v.lastBaseUpdate, i !== u && (i === null ? v.firstBaseUpdate = d : i.next = d, v.lastBaseUpdate = a));
        }
        if (o !== null) {
          var h = l.baseState;
          u = 0, v = d = a = null, i = o;
          do {
            var m = i.lane, C = i.eventTime;
            if ((r & m) === m) {
              v !== null && (v = v.next = {
                eventTime: C,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null
              });
              e: {
                var T = e, E = i;
                switch (m = t, C = n, E.tag) {
                  case 1:
                    if (T = E.payload, typeof T == "function") {
                      h = T.call(C, h, m);
                      break e;
                    }
                    h = T;
                    break e;
                  case 3:
                    T.flags = T.flags & -65537 | 128;
                  case 0:
                    if (T = E.payload, m = typeof T == "function" ? T.call(C, h, m) : T, m == null) break e;
                    h = Y({}, h, m);
                    break e;
                  case 2:
                    pt = true;
                }
              }
              i.callback !== null && i.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [
                i
              ] : m.push(i));
            } else C = {
              eventTime: C,
              lane: m,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null
            }, v === null ? (d = v = C, a = h) : v = v.next = C, u |= m;
            if (i = i.next, i === null) {
              if (i = l.shared.pending, i === null) break;
              m = i, i = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
            }
          } while (true);
          if (v === null && (a = h), l.baseState = a, l.firstBaseUpdate = d, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
            l = t;
            do
              u |= l.lane, l = l.next;
            while (l !== t);
          } else o === null && (l.shared.lanes = 0);
          bt |= u, e.lanes = u, e.memoizedState = h;
        }
      }
      function Wi(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
          var r = e[t], l = r.callback;
          if (l !== null) {
            if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
            l.call(r);
          }
        }
      }
      var mr = {}, Ke = Rt(mr), or = Rt(mr), ur = Rt(mr);
      function Ft(e) {
        if (e === mr) throw Error(w(174));
        return e;
      }
      function Uu(e, t) {
        switch (b(ur, t), b(or, e), b(Ke, mr), e = t.nodeType, e) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : To(null, "");
            break;
          default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = To(t, e);
        }
        V(Ke), b(Ke, t);
      }
      function vn() {
        V(Ke), V(or), V(ur);
      }
      function Pa(e) {
        Ft(ur.current);
        var t = Ft(Ke.current), n = To(t, e.type);
        t !== n && (b(or, e), b(Ke, n));
      }
      function ju(e) {
        or.current === e && (V(Ke), V(or));
      }
      var G = Rt(0);
      function pl(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
          } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
          } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
        return null;
      }
      var io = [];
      function Bu() {
        for (var e = 0; e < io.length; e++) io[e]._workInProgressVersionPrimary = null;
        io.length = 0;
      }
      var Hr = at.ReactCurrentDispatcher, so = at.ReactCurrentBatchConfig, $t = 0, K = null, J = null, te = null, gl = false, Hn = false, ir = 0, Nd = 0;
      function se() {
        throw Error(w(321));
      }
      function $u(e, t) {
        if (t === null) return false;
        for (var n = 0; n < t.length && n < e.length; n++) if (!be(e[n], t[n])) return false;
        return true;
      }
      function bu(e, t, n, r, l, o) {
        if ($t = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hr.current = e === null || e.memoizedState === null ? Ad : Od, e = n(r, l), Hn) {
          o = 0;
          do {
            if (Hn = false, ir = 0, 25 <= o) throw Error(w(301));
            o += 1, te = J = null, t.updateQueue = null, Hr.current = Pd, e = n(r, l);
          } while (Hn);
        }
        if (Hr.current = _l, t = J !== null && J.next !== null, $t = 0, te = J = K = null, gl = false, t) throw Error(w(300));
        return e;
      }
      function Hu() {
        var e = ir !== 0;
        return ir = 0, e;
      }
      function Ve() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return te === null ? K.memoizedState = te = e : te = te.next = e, te;
      }
      function Fe() {
        if (J === null) {
          var e = K.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = J.next;
        var t = te === null ? K.memoizedState : te.next;
        if (t !== null) te = t, J = e;
        else {
          if (e === null) throw Error(w(310));
          J = e, e = {
            memoizedState: J.memoizedState,
            baseState: J.baseState,
            baseQueue: J.baseQueue,
            queue: J.queue,
            next: null
          }, te === null ? K.memoizedState = te = e : te = te.next = e;
        }
        return te;
      }
      function sr(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function ao(e) {
        var t = Fe(), n = t.queue;
        if (n === null) throw Error(w(311));
        n.lastRenderedReducer = e;
        var r = J, l = r.baseQueue, o = n.pending;
        if (o !== null) {
          if (l !== null) {
            var u = l.next;
            l.next = o.next, o.next = u;
          }
          r.baseQueue = l = o, n.pending = null;
        }
        if (l !== null) {
          o = l.next, r = r.baseState;
          var i = u = null, a = null, d = o;
          do {
            var v = d.lane;
            if (($t & v) === v) a !== null && (a = a.next = {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
              var h = {
                lane: v,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
              };
              a === null ? (i = a = h, u = r) : a = a.next = h, K.lanes |= v, bt |= v;
            }
            d = d.next;
          } while (d !== null && d !== o);
          a === null ? u = r : a.next = i, be(r, t.memoizedState) || (ve = true), t.memoizedState = r, t.baseState = u, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
          l = e;
          do
            o = l.lane, K.lanes |= o, bt |= o, l = l.next;
          while (l !== e);
        } else l === null && (n.lanes = 0);
        return [
          t.memoizedState,
          n.dispatch
        ];
      }
      function co(e) {
        var t = Fe(), n = t.queue;
        if (n === null) throw Error(w(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, l = n.pending, o = t.memoizedState;
        if (l !== null) {
          n.pending = null;
          var u = l = l.next;
          do
            o = e(o, u.action), u = u.next;
          while (u !== l);
          be(o, t.memoizedState) || (ve = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
        }
        return [
          o,
          r
        ];
      }
      function Da() {
      }
      function Fa(e, t) {
        var n = K, r = Fe(), l = t(), o = !be(r.memoizedState, l);
        if (o && (r.memoizedState = l, ve = true), r = r.queue, Vu(Ua.bind(null, n, r, e), [
          e
        ]), r.getSnapshot !== t || o || te !== null && te.memoizedState.tag & 1) {
          if (n.flags |= 2048, ar(9, Ma.bind(null, n, r, l, t), void 0, null), re === null) throw Error(w(349));
          $t & 30 || za(n, t, l);
        }
        return l;
      }
      function za(e, t, n) {
        e.flags |= 16384, e = {
          getSnapshot: t,
          value: n
        }, t = K.updateQueue, t === null ? (t = {
          lastEffect: null,
          stores: null
        }, K.updateQueue = t, t.stores = [
          e
        ]) : (n = t.stores, n === null ? t.stores = [
          e
        ] : n.push(e));
      }
      function Ma(e, t, n, r) {
        t.value = n, t.getSnapshot = r, ja(t) && Ba(e);
      }
      function Ua(e, t, n) {
        return n(function() {
          ja(t) && Ba(e);
        });
      }
      function ja(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !be(e, n);
        } catch {
          return true;
        }
      }
      function Ba(e) {
        var t = it(e, 1);
        t !== null && $e(t, e, 1, -1);
      }
      function Qi(e) {
        var t = Ve();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: sr,
          lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Id.bind(null, K, e), [
          t.memoizedState,
          e
        ];
      }
      function ar(e, t, n, r) {
        return e = {
          tag: e,
          create: t,
          destroy: n,
          deps: r,
          next: null
        }, t = K.updateQueue, t === null ? (t = {
          lastEffect: null,
          stores: null
        }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
      }
      function $a() {
        return Fe().memoizedState;
      }
      function Vr(e, t, n, r) {
        var l = Ve();
        K.flags |= e, l.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r);
      }
      function Ll(e, t, n, r) {
        var l = Fe();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (J !== null) {
          var u = J.memoizedState;
          if (o = u.destroy, r !== null && $u(r, u.deps)) {
            l.memoizedState = ar(t, n, o, r);
            return;
          }
        }
        K.flags |= e, l.memoizedState = ar(1 | t, n, o, r);
      }
      function Gi(e, t) {
        return Vr(8390656, 8, e, t);
      }
      function Vu(e, t) {
        return Ll(2048, 8, e, t);
      }
      function ba(e, t) {
        return Ll(4, 2, e, t);
      }
      function Ha(e, t) {
        return Ll(4, 4, e, t);
      }
      function Va(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
          t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
          t.current = null;
        };
      }
      function Wa(e, t, n) {
        return n = n != null ? n.concat([
          e
        ]) : null, Ll(4, 4, Va.bind(null, t, e), n);
      }
      function Wu() {
      }
      function Qa(e, t) {
        var n = Fe();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && $u(t, r[1]) ? r[0] : (n.memoizedState = [
          e,
          t
        ], e);
      }
      function Ga(e, t) {
        var n = Fe();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && $u(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
          e,
          t
        ], e);
      }
      function Ka(e, t, n) {
        return $t & 21 ? (be(n, t) || (n = Js(), K.lanes |= n, bt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, ve = true), e.memoizedState = n);
      }
      function Ld(e, t) {
        var n = j;
        j = n !== 0 && 4 > n ? n : 4, e(true);
        var r = so.transition;
        so.transition = {};
        try {
          e(false), t();
        } finally {
          j = n, so.transition = r;
        }
      }
      function Ya() {
        return Fe().memoizedState;
      }
      function Rd(e, t, n) {
        var r = Ct(e);
        if (n = {
          lane: r,
          action: n,
          hasEagerState: false,
          eagerState: null,
          next: null
        }, Xa(e)) Za(t, n);
        else if (n = Aa(e, t, n, r), n !== null) {
          var l = pe();
          $e(n, e, r, l), qa(n, t, r);
        }
      }
      function Id(e, t, n) {
        var r = Ct(e), l = {
          lane: r,
          action: n,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (Xa(e)) Za(t, l);
        else {
          var o = e.alternate;
          if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var u = t.lastRenderedState, i = o(u, n);
            if (l.hasEagerState = true, l.eagerState = i, be(i, u)) {
              var a = t.interleaved;
              a === null ? (l.next = l, zu(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
              return;
            }
          } catch {
          } finally {
          }
          n = Aa(e, t, l, r), n !== null && (l = pe(), $e(n, e, r, l), qa(n, t, r));
        }
      }
      function Xa(e) {
        var t = e.alternate;
        return e === K || t !== null && t === K;
      }
      function Za(e, t) {
        Hn = gl = true;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
      }
      function qa(e, t, n) {
        if (n & 4194240) {
          var r = t.lanes;
          r &= e.pendingLanes, n |= r, t.lanes = n, Su(e, n);
        }
      }
      var _l = {
        readContext: De,
        useCallback: se,
        useContext: se,
        useEffect: se,
        useImperativeHandle: se,
        useInsertionEffect: se,
        useLayoutEffect: se,
        useMemo: se,
        useReducer: se,
        useRef: se,
        useState: se,
        useDebugValue: se,
        useDeferredValue: se,
        useTransition: se,
        useMutableSource: se,
        useSyncExternalStore: se,
        useId: se,
        unstable_isNewReconciler: false
      }, Ad = {
        readContext: De,
        useCallback: function(e, t) {
          return Ve().memoizedState = [
            e,
            t === void 0 ? null : t
          ], e;
        },
        useContext: De,
        useEffect: Gi,
        useImperativeHandle: function(e, t, n) {
          return n = n != null ? n.concat([
            e
          ]) : null, Vr(4194308, 4, Va.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
          return Vr(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
          return Vr(4, 2, e, t);
        },
        useMemo: function(e, t) {
          var n = Ve();
          return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
            e,
            t
          ], e;
        },
        useReducer: function(e, t, n) {
          var r = Ve();
          return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
          }, r.queue = e, e = e.dispatch = Rd.bind(null, K, e), [
            r.memoizedState,
            e
          ];
        },
        useRef: function(e) {
          var t = Ve();
          return e = {
            current: e
          }, t.memoizedState = e;
        },
        useState: Qi,
        useDebugValue: Wu,
        useDeferredValue: function(e) {
          return Ve().memoizedState = e;
        },
        useTransition: function() {
          var e = Qi(false), t = e[0];
          return e = Ld.bind(null, e[1]), Ve().memoizedState = e, [
            t,
            e
          ];
        },
        useMutableSource: function() {
        },
        useSyncExternalStore: function(e, t, n) {
          var r = K, l = Ve();
          if (W) {
            if (n === void 0) throw Error(w(407));
            n = n();
          } else {
            if (n = t(), re === null) throw Error(w(349));
            $t & 30 || za(r, t, n);
          }
          l.memoizedState = n;
          var o = {
            value: n,
            getSnapshot: t
          };
          return l.queue = o, Gi(Ua.bind(null, r, o, e), [
            e
          ]), r.flags |= 2048, ar(9, Ma.bind(null, r, o, n, t), void 0, null), n;
        },
        useId: function() {
          var e = Ve(), t = re.identifierPrefix;
          if (W) {
            var n = rt, r = nt;
            n = (r & ~(1 << 32 - Be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
          } else n = Nd++, t = ":" + t + "r" + n.toString(32) + ":";
          return e.memoizedState = t;
        },
        unstable_isNewReconciler: false
      }, Od = {
        readContext: De,
        useCallback: Qa,
        useContext: De,
        useEffect: Vu,
        useImperativeHandle: Wa,
        useInsertionEffect: ba,
        useLayoutEffect: Ha,
        useMemo: Ga,
        useReducer: ao,
        useRef: $a,
        useState: function() {
          return ao(sr);
        },
        useDebugValue: Wu,
        useDeferredValue: function(e) {
          var t = Fe();
          return Ka(t, J.memoizedState, e);
        },
        useTransition: function() {
          var e = ao(sr)[0], t = Fe().memoizedState;
          return [
            e,
            t
          ];
        },
        useMutableSource: Da,
        useSyncExternalStore: Fa,
        useId: Ya,
        unstable_isNewReconciler: false
      }, Pd = {
        readContext: De,
        useCallback: Qa,
        useContext: De,
        useEffect: Vu,
        useImperativeHandle: Wa,
        useInsertionEffect: ba,
        useLayoutEffect: Ha,
        useMemo: Ga,
        useReducer: co,
        useRef: $a,
        useState: function() {
          return co(sr);
        },
        useDebugValue: Wu,
        useDeferredValue: function(e) {
          var t = Fe();
          return J === null ? t.memoizedState = e : Ka(t, J.memoizedState, e);
        },
        useTransition: function() {
          var e = co(sr)[0], t = Fe().memoizedState;
          return [
            e,
            t
          ];
        },
        useMutableSource: Da,
        useSyncExternalStore: Fa,
        useId: Ya,
        unstable_isNewReconciler: false
      };
      function Me(e, t) {
        if (e && e.defaultProps) {
          t = Y({}, t), e = e.defaultProps;
          for (var n in e) t[n] === void 0 && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      function Go(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
      }
      var Rl = {
        isMounted: function(e) {
          return (e = e._reactInternals) ? Wt(e) === e : false;
        },
        enqueueSetState: function(e, t, n) {
          e = e._reactInternals;
          var r = pe(), l = Ct(e), o = lt(r, l);
          o.payload = t, n != null && (o.callback = n), t = St(e, o, l), t !== null && ($e(t, e, l, r), br(t, e, l));
        },
        enqueueReplaceState: function(e, t, n) {
          e = e._reactInternals;
          var r = pe(), l = Ct(e), o = lt(r, l);
          o.tag = 1, o.payload = t, n != null && (o.callback = n), t = St(e, o, l), t !== null && ($e(t, e, l, r), br(t, e, l));
        },
        enqueueForceUpdate: function(e, t) {
          e = e._reactInternals;
          var n = pe(), r = Ct(e), l = lt(n, r);
          l.tag = 2, t != null && (l.callback = t), t = St(e, l, r), t !== null && ($e(t, e, r, n), br(t, e, r));
        }
      };
      function Ki(e, t, n, r, l, o, u) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !tr(n, r) || !tr(l, o) : true;
      }
      function Ja(e, t, n) {
        var r = false, l = Nt, o = t.contextType;
        return typeof o == "object" && o !== null ? o = De(o) : (l = we(t) ? jt : fe.current, r = t.contextTypes, o = (r = r != null) ? _n(e, l) : Nt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
      }
      function Yi(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
      }
      function Ko(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, Mu(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? l.context = De(o) : (o = we(t) ? jt : fe.current, l.context = _n(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Go(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Rl.enqueueReplaceState(l, l.state, null), dl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
      }
      function yn(e, t) {
        try {
          var n = "", r = t;
          do
            n += uf(r), r = r.return;
          while (r);
          var l = n;
        } catch (o) {
          l = `
Error generating stack: ` + o.message + `
` + o.stack;
        }
        return {
          value: e,
          source: t,
          stack: l,
          digest: null
        };
      }
      function fo(e, t, n) {
        return {
          value: e,
          source: null,
          stack: n ?? null,
          digest: t ?? null
        };
      }
      function Yo(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function() {
            throw n;
          });
        }
      }
      var Dd = typeof WeakMap == "function" ? WeakMap : Map;
      function ec(e, t, n) {
        n = lt(-1, n), n.tag = 3, n.payload = {
          element: null
        };
        var r = t.value;
        return n.callback = function() {
          hl || (hl = true, ou = r), Yo(e, t);
        }, n;
      }
      function tc(e, t, n) {
        n = lt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var l = t.value;
          n.payload = function() {
            return r(l);
          }, n.callback = function() {
            Yo(e, t);
          };
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
          Yo(e, t), typeof r != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([
            this
          ]) : kt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : ""
          });
        }), n;
      }
      function Xi(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
          r = e.pingCache = new Dd();
          var l = /* @__PURE__ */ new Set();
          r.set(t, l);
        } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
        l.has(n) || (l.add(n), e = Kd.bind(null, e, t, n), t.then(e, e));
      }
      function Zi(e) {
        do {
          var t;
          if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
          e = e.return;
        } while (e !== null);
        return null;
      }
      function qi(e, t, n, r, l) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, St(n, t, 1))), n.lanes |= 1), e);
      }
      var Fd = at.ReactCurrentOwner, ve = false;
      function de(e, t, n, r) {
        t.child = e === null ? Ia(t, null, n, r) : hn(t, e.child, n, r);
      }
      function Ji(e, t, n, r, l) {
        n = n.render;
        var o = t.ref;
        return dn(t, l), r = bu(e, t, n, r, o, l), n = Hu(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, st(e, t, l)) : (W && n && Iu(t), t.flags |= 1, de(e, t, r, l), t.child);
      }
      function es(e, t, n, r, l) {
        if (e === null) {
          var o = n.type;
          return typeof o == "function" && !Ju(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, nc(e, t, o, r, l)) : (e = Kr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (o = e.child, !(e.lanes & l)) {
          var u = o.memoizedProps;
          if (n = n.compare, n = n !== null ? n : tr, n(u, r) && e.ref === t.ref) return st(e, t, l);
        }
        return t.flags |= 1, e = xt(o, r), e.ref = t.ref, e.return = t, t.child = e;
      }
      function nc(e, t, n, r, l) {
        if (e !== null) {
          var o = e.memoizedProps;
          if (tr(o, r) && e.ref === t.ref) if (ve = false, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ve = true);
          else return t.lanes = e.lanes, st(e, t, l);
        }
        return Xo(e, t, n, r, l);
      }
      function rc(e, t, n) {
        var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        }, b(un, Se), Se |= n;
        else {
          if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }, t.updateQueue = null, b(un, Se), Se |= e, null;
          t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
          }, r = o !== null ? o.baseLanes : n, b(un, Se), Se |= r;
        }
        else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, b(un, Se), Se |= r;
        return de(e, t, l, n), t.child;
      }
      function lc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
      }
      function Xo(e, t, n, r, l) {
        var o = we(n) ? jt : fe.current;
        return o = _n(t, o), dn(t, l), n = bu(e, t, n, r, o, l), r = Hu(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, st(e, t, l)) : (W && r && Iu(t), t.flags |= 1, de(e, t, n, l), t.child);
      }
      function ts(e, t, n, r, l) {
        if (we(n)) {
          var o = true;
          il(t);
        } else o = false;
        if (dn(t, l), t.stateNode === null) Wr(e, t), Ja(t, n, r), Ko(t, n, r, l), r = true;
        else if (e === null) {
          var u = t.stateNode, i = t.memoizedProps;
          u.props = i;
          var a = u.context, d = n.contextType;
          typeof d == "object" && d !== null ? d = De(d) : (d = we(n) ? jt : fe.current, d = _n(t, d));
          var v = n.getDerivedStateFromProps, h = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function";
          h || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || a !== d) && Yi(t, u, r, d), pt = false;
          var m = t.memoizedState;
          u.state = m, dl(t, r, u, l), a = t.memoizedState, i !== r || m !== a || ye.current || pt ? (typeof v == "function" && (Go(t, n, v, r), a = t.memoizedState), (i = pt || Ki(t, n, i, r, m, a, d)) ? (h || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), u.props = r, u.state = a, u.context = d, r = i) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = false);
        } else {
          u = t.stateNode, Oa(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : Me(t.type, i), u.props = d, h = t.pendingProps, m = u.context, a = n.contextType, typeof a == "object" && a !== null ? a = De(a) : (a = we(n) ? jt : fe.current, a = _n(t, a));
          var C = n.getDerivedStateFromProps;
          (v = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== h || m !== a) && Yi(t, u, r, a), pt = false, m = t.memoizedState, u.state = m, dl(t, r, u, l);
          var T = t.memoizedState;
          i !== h || m !== T || ye.current || pt ? (typeof C == "function" && (Go(t, n, C, r), T = t.memoizedState), (d = pt || Ki(t, n, d, r, m, T, a) || false) ? (v || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, T, a), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, T, a)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = T), u.props = r, u.state = T, u.context = a, r = d) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = false);
        }
        return Zo(e, t, n, r, o, l);
      }
      function Zo(e, t, n, r, l, o) {
        lc(e, t);
        var u = (t.flags & 128) !== 0;
        if (!r && !u) return l && Bi(t, n, false), st(e, t, o);
        r = t.stateNode, Fd.current = t;
        var i = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && u ? (t.child = hn(t, e.child, null, o), t.child = hn(t, null, i, o)) : de(e, t, i, o), t.memoizedState = r.state, l && Bi(t, n, true), t.child;
      }
      function oc(e) {
        var t = e.stateNode;
        t.pendingContext ? ji(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ji(e, t.context, false), Uu(e, t.containerInfo);
      }
      function ns(e, t, n, r, l) {
        return mn(), Ou(l), t.flags |= 256, de(e, t, n, r), t.child;
      }
      var qo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };
      function Jo(e) {
        return {
          baseLanes: e,
          cachePool: null,
          transitions: null
        };
      }
      function uc(e, t, n) {
        var r = t.pendingProps, l = G.current, o = false, u = (t.flags & 128) !== 0, i;
        if ((i = u) || (i = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), i ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), b(G, l & 1), e === null) return Wo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, u = {
          mode: "hidden",
          children: u
        }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = Ol(u, r, 0, null), e = Mt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Jo(n), t.memoizedState = qo, e) : Qu(t, u));
        if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return zd(e, t, u, r, i, l, n);
        if (o) {
          o = r.fallback, u = t.mode, l = e.child, i = l.sibling;
          var a = {
            mode: "hidden",
            children: r.children
          };
          return !(u & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = xt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = xt(i, o) : (o = Mt(o, u, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, u = e.child.memoizedState, u = u === null ? Jo(n) : {
            baseLanes: u.baseLanes | n,
            cachePool: null,
            transitions: u.transitions
          }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = qo, r;
        }
        return o = e.child, e = o.sibling, r = xt(o, {
          mode: "visible",
          children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
          e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
      }
      function Qu(e, t) {
        return t = Ol({
          mode: "visible",
          children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
      }
      function Ar(e, t, n, r) {
        return r !== null && Ou(r), hn(t, e.child, null, n), e = Qu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
      }
      function zd(e, t, n, r, l, o, u) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = fo(Error(w(422))), Ar(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Ol({
          mode: "visible",
          children: r.children
        }, l, 0, null), o = Mt(o, l, u, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && hn(t, e.child, null, u), t.child.memoizedState = Jo(u), t.memoizedState = qo, o);
        if (!(t.mode & 1)) return Ar(e, t, u, null);
        if (l.data === "$!") {
          if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
          return r = i, o = Error(w(419)), r = fo(o, r, void 0), Ar(e, t, u, r);
        }
        if (i = (u & e.childLanes) !== 0, ve || i) {
          if (r = re, r !== null) {
            switch (u & -u) {
              case 4:
                l = 2;
                break;
              case 16:
                l = 8;
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
                l = 32;
                break;
              case 536870912:
                l = 268435456;
                break;
              default:
                l = 0;
            }
            l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, it(e, l), $e(r, e, l, -1));
          }
          return qu(), r = fo(Error(w(421))), Ar(e, t, u, r);
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ke = Et(l.nextSibling), Ce = t, W = true, je = null, e !== null && (Re[Ie++] = nt, Re[Ie++] = rt, Re[Ie++] = Bt, nt = e.id, rt = e.overflow, Bt = t), t = Qu(t, r.children), t.flags |= 4096, t);
      }
      function rs(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Qo(e.return, t, n);
      }
      function po(e, t, n, r, l) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
      }
      function ic(e, t, n) {
        var r = t.pendingProps, l = r.revealOrder, o = r.tail;
        if (de(e, t, r.children, n), r = G.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
          if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && rs(e, n, t);
            else if (e.tag === 19) rs(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
          r &= 1;
        }
        if (b(G, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (l) {
          case "forwards":
            for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && pl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), po(t, false, l, n, o);
            break;
          case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null; ) {
              if (e = l.alternate, e !== null && pl(e) === null) {
                t.child = l;
                break;
              }
              e = l.sibling, l.sibling = n, n = l, l = e;
            }
            po(t, true, n, null, o);
            break;
          case "together":
            po(t, false, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function Wr(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
      }
      function st(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), bt |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(w(153));
        if (t.child !== null) {
          for (e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = xt(e, e.pendingProps), n.return = t;
          n.sibling = null;
        }
        return t.child;
      }
      function Md(e, t, n) {
        switch (t.tag) {
          case 3:
            oc(t), mn();
            break;
          case 5:
            Pa(t);
            break;
          case 1:
            we(t.type) && il(t);
            break;
          case 4:
            Uu(t, t.stateNode.containerInfo);
            break;
          case 10:
            var r = t.type._context, l = t.memoizedProps.value;
            b(cl, r._currentValue), r._currentValue = l;
            break;
          case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (b(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? uc(e, t, n) : (b(G, G.current & 1), e = st(e, t, n), e !== null ? e.sibling : null);
            b(G, G.current & 1);
            break;
          case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
              if (r) return ic(e, t, n);
              t.flags |= 128;
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), b(G, G.current), r) break;
            return null;
          case 22:
          case 23:
            return t.lanes = 0, rc(e, t, n);
        }
        return st(e, t, n);
      }
      var sc, eu, ac, cc;
      sc = function(e, t) {
        for (var n = t.child; n !== null; ) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      };
      eu = function() {
      };
      ac = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
          e = t.stateNode, Ft(Ke.current);
          var o = null;
          switch (n) {
            case "input":
              l = So(e, l), r = So(e, r), o = [];
              break;
            case "select":
              l = Y({}, l, {
                value: void 0
              }), r = Y({}, r, {
                value: void 0
              }), o = [];
              break;
            case "textarea":
              l = xo(e, l), r = xo(e, r), o = [];
              break;
            default:
              typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol);
          }
          No(n, r);
          var u;
          n = null;
          for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
            var i = l[d];
            for (u in i) i.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
          } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Kn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
          for (d in r) {
            var a = r[d];
            if (i = l == null ? void 0 : l[d], r.hasOwnProperty(d) && a !== i && (a != null || i != null)) if (d === "style") if (i) {
              for (u in i) !i.hasOwnProperty(u) || a && a.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
              for (u in a) a.hasOwnProperty(u) && i[u] !== a[u] && (n || (n = {}), n[u] = a[u]);
            } else n || (o || (o = []), o.push(d, n)), n = a;
            else d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, i = i ? i.__html : void 0, a != null && i !== a && (o = o || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Kn.hasOwnProperty(d) ? (a != null && d === "onScroll" && H("scroll", e), o || i === a || (o = [])) : (o = o || []).push(d, a));
          }
          n && (o = o || []).push("style", n);
          var d = o;
          (t.updateQueue = d) && (t.flags |= 4);
        }
      };
      cc = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
      function On(e, t) {
        if (!W) switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
      }
      function ae(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
      }
      function Ud(e, t, n) {
        var r = t.pendingProps;
        switch (Au(t), t.tag) {
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
            return ae(t), null;
          case 1:
            return we(t.type) && ul(), ae(t), null;
          case 3:
            return r = t.stateNode, vn(), V(ye), V(fe), Bu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, je !== null && (su(je), je = null))), eu(e, t), ae(t), null;
          case 5:
            ju(t);
            var l = Ft(ur.current);
            if (n = t.type, e !== null && t.stateNode != null) ac(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
              if (!r) {
                if (t.stateNode === null) throw Error(w(166));
                return ae(t), null;
              }
              if (e = Ft(Ke.current), Rr(t)) {
                r = t.stateNode, n = t.type;
                var o = t.memoizedProps;
                switch (r[Qe] = t, r[lr] = o, e = (t.mode & 1) !== 0, n) {
                  case "dialog":
                    H("cancel", r), H("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    H("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < Mn.length; l++) H(Mn[l], r);
                    break;
                  case "source":
                    H("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    H("error", r), H("load", r);
                    break;
                  case "details":
                    H("toggle", r);
                    break;
                  case "input":
                    di(r, o), H("invalid", r);
                    break;
                  case "select":
                    r._wrapperState = {
                      wasMultiple: !!o.multiple
                    }, H("invalid", r);
                    break;
                  case "textarea":
                    gi(r, o), H("invalid", r);
                }
                No(n, o), l = null;
                for (var u in o) if (o.hasOwnProperty(u)) {
                  var i = o[u];
                  u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== true && Lr(r.textContent, i, e), l = [
                    "children",
                    i
                  ]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== true && Lr(r.textContent, i, e), l = [
                    "children",
                    "" + i
                  ]) : Kn.hasOwnProperty(u) && i != null && u === "onScroll" && H("scroll", r);
                }
                switch (n) {
                  case "input":
                    wr(r), pi(r, o, true);
                    break;
                  case "textarea":
                    wr(r), _i(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof o.onClick == "function" && (r.onclick = ol);
                }
                r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
              } else {
                u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Us(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, {
                  is: r.is
                }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = true : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Qe] = t, e[lr] = r, sc(e, t, false, false), t.stateNode = e;
                e: {
                  switch (u = Lo(n, r), n) {
                    case "dialog":
                      H("cancel", e), H("close", e), l = r;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      H("load", e), l = r;
                      break;
                    case "video":
                    case "audio":
                      for (l = 0; l < Mn.length; l++) H(Mn[l], e);
                      l = r;
                      break;
                    case "source":
                      H("error", e), l = r;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      H("error", e), H("load", e), l = r;
                      break;
                    case "details":
                      H("toggle", e), l = r;
                      break;
                    case "input":
                      di(e, r), l = So(e, r), H("invalid", e);
                      break;
                    case "option":
                      l = r;
                      break;
                    case "select":
                      e._wrapperState = {
                        wasMultiple: !!r.multiple
                      }, l = Y({}, r, {
                        value: void 0
                      }), H("invalid", e);
                      break;
                    case "textarea":
                      gi(e, r), l = xo(e, r), H("invalid", e);
                      break;
                    default:
                      l = r;
                  }
                  No(n, l), i = l;
                  for (o in i) if (i.hasOwnProperty(o)) {
                    var a = i[o];
                    o === "style" ? $s(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && js(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Yn(e, a) : typeof a == "number" && Yn(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Kn.hasOwnProperty(o) ? a != null && o === "onScroll" && H("scroll", e) : a != null && mu(e, o, a, u));
                  }
                  switch (n) {
                    case "input":
                      wr(e), pi(e, r, false);
                      break;
                    case "textarea":
                      wr(e), _i(e);
                      break;
                    case "option":
                      r.value != null && e.setAttribute("value", "" + Tt(r.value));
                      break;
                    case "select":
                      e.multiple = !!r.multiple, o = r.value, o != null ? sn(e, !!r.multiple, o, false) : r.defaultValue != null && sn(e, !!r.multiple, r.defaultValue, true);
                      break;
                    default:
                      typeof l.onClick == "function" && (e.onclick = ol);
                  }
                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = true;
                      break e;
                    default:
                      r = false;
                  }
                }
                r && (t.flags |= 4);
              }
              t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
            }
            return ae(t), null;
          case 6:
            if (e && t.stateNode != null) cc(e, t, e.memoizedProps, r);
            else {
              if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
              if (n = Ft(ur.current), Ft(Ke.current), Rr(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[Qe] = t, (o = r.nodeValue !== n) && (e = Ce, e !== null)) switch (e.tag) {
                  case 3:
                    Lr(r.nodeValue, n, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== true && Lr(r.nodeValue, n, (e.mode & 1) !== 0);
                }
                o && (t.flags |= 4);
              } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Qe] = t, t.stateNode = r;
            }
            return ae(t), null;
          case 13:
            if (V(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
              if (W && ke !== null && t.mode & 1 && !(t.flags & 128)) La(), mn(), t.flags |= 98560, o = false;
              else if (o = Rr(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                  if (!o) throw Error(w(318));
                  if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(w(317));
                  o[Qe] = t;
                } else mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                ae(t), o = false;
              } else je !== null && (su(je), je = null), o = true;
              if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? ee === 0 && (ee = 3) : qu())), t.updateQueue !== null && (t.flags |= 4), ae(t), null);
          case 4:
            return vn(), eu(e, t), e === null && nr(t.stateNode.containerInfo), ae(t), null;
          case 10:
            return Fu(t.type._context), ae(t), null;
          case 17:
            return we(t.type) && ul(), ae(t), null;
          case 19:
            if (V(G), o = t.memoizedState, o === null) return ae(t), null;
            if (r = (t.flags & 128) !== 0, u = o.rendering, u === null) if (r) On(o, false);
            else {
              if (ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
                if (u = pl(e), u !== null) {
                  for (t.flags |= 128, On(o, false), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                  }), n = n.sibling;
                  return b(G, G.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
              o.tail !== null && Z() > wn && (t.flags |= 128, r = true, On(o, false), t.lanes = 4194304);
            }
            else {
              if (!r) if (e = pl(u), e !== null) {
                if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), On(o, true), o.tail === null && o.tailMode === "hidden" && !u.alternate && !W) return ae(t), null;
              } else 2 * Z() - o.renderingStartTime > wn && n !== 1073741824 && (t.flags |= 128, r = true, On(o, false), t.lanes = 4194304);
              o.isBackwards ? (u.sibling = t.child, t.child = u) : (n = o.last, n !== null ? n.sibling = u : t.child = u, o.last = u);
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = G.current, b(G, r ? n & 1 | 2 : n & 1), t) : (ae(t), null);
          case 22:
          case 23:
            return Zu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Se & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(w(156, t.tag));
      }
      function jd(e, t) {
        switch (Au(t), t.tag) {
          case 1:
            return we(t.type) && ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 3:
            return vn(), V(ye), V(fe), Bu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
          case 5:
            return ju(t), null;
          case 13:
            if (V(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
              if (t.alternate === null) throw Error(w(340));
              mn();
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
          case 19:
            return V(G), null;
          case 4:
            return vn(), null;
          case 10:
            return Fu(t.type._context), null;
          case 22:
          case 23:
            return Zu(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Or = false, ce = false, Bd = typeof WeakSet == "function" ? WeakSet : Set, L = null;
      function on(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
          n(null);
        } catch (r) {
          X(e, t, r);
        }
        else n.current = null;
      }
      function tu(e, t, n) {
        try {
          n();
        } catch (r) {
          X(e, t, r);
        }
      }
      var ls = false;
      function $d(e, t) {
        if (Uo = nl, e = _a(), Ru(e)) {
          if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
          else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var l = r.anchorOffset, o = r.focusNode;
              r = r.focusOffset;
              try {
                n.nodeType, o.nodeType;
              } catch {
                n = null;
                break e;
              }
              var u = 0, i = -1, a = -1, d = 0, v = 0, h = e, m = null;
              t: for (; ; ) {
                for (var C; h !== n || l !== 0 && h.nodeType !== 3 || (i = u + l), h !== o || r !== 0 && h.nodeType !== 3 || (a = u + r), h.nodeType === 3 && (u += h.nodeValue.length), (C = h.firstChild) !== null; ) m = h, h = C;
                for (; ; ) {
                  if (h === e) break t;
                  if (m === n && ++d === l && (i = u), m === o && ++v === r && (a = u), (C = h.nextSibling) !== null) break;
                  h = m, m = h.parentNode;
                }
                h = C;
              }
              n = i === -1 || a === -1 ? null : {
                start: i,
                end: a
              };
            } else n = null;
          }
          n = n || {
            start: 0,
            end: 0
          };
        } else n = null;
        for (jo = {
          focusedElem: e,
          selectionRange: n
        }, nl = false, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else for (; L !== null; ) {
          t = L;
          try {
            var T = t.alternate;
            if (t.flags & 1024) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (T !== null) {
                  var E = T.memoizedProps, P = T.memoizedState, f = t.stateNode, s = f.getSnapshotBeforeUpdate(t.elementType === t.type ? E : Me(t.type, E), P);
                  f.__reactInternalSnapshotBeforeUpdate = s;
                }
                break;
              case 3:
                var c = t.stateNode.containerInfo;
                c.nodeType === 1 ? c.textContent = "" : c.nodeType === 9 && c.documentElement && c.removeChild(c.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
          } catch (p) {
            X(t, t.return, p);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, L = e;
            break;
          }
          L = t.return;
        }
        return T = ls, ls = false, T;
      }
      function Vn(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
          var l = r = r.next;
          do {
            if ((l.tag & e) === e) {
              var o = l.destroy;
              l.destroy = void 0, o !== void 0 && tu(t, n, o);
            }
            l = l.next;
          } while (l !== r);
        }
      }
      function Il(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
          var n = t = t.next;
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function nu(e) {
        var t = e.ref;
        if (t !== null) {
          var n = e.stateNode;
          switch (e.tag) {
            case 5:
              e = n;
              break;
            default:
              e = n;
          }
          typeof t == "function" ? t(e) : t.current = e;
        }
      }
      function fc(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, fc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Qe], delete t[lr], delete t[bo], delete t[kd], delete t[Cd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
      function dc(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
      }
      function os(e) {
        e: for (; ; ) {
          for (; e.sibling === null; ) {
            if (e.return === null || dc(e.return)) return null;
            e = e.return;
          }
          for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child;
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function ru(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ol));
        else if (r !== 4 && (e = e.child, e !== null)) for (ru(e, t, n), e = e.sibling; e !== null; ) ru(e, t, n), e = e.sibling;
      }
      function lu(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for (lu(e, t, n), e = e.sibling; e !== null; ) lu(e, t, n), e = e.sibling;
      }
      var le = null, Ue = false;
      function ft(e, t, n) {
        for (n = n.child; n !== null; ) pc(e, t, n), n = n.sibling;
      }
      function pc(e, t, n) {
        if (Ge && typeof Ge.onCommitFiberUnmount == "function") try {
          Ge.onCommitFiberUnmount(Sl, n);
        } catch {
        }
        switch (n.tag) {
          case 5:
            ce || on(n, t);
          case 6:
            var r = le, l = Ue;
            le = null, ft(e, t, n), le = r, Ue = l, le !== null && (Ue ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
            break;
          case 18:
            le !== null && (Ue ? (e = le, n = n.stateNode, e.nodeType === 8 ? oo(e.parentNode, n) : e.nodeType === 1 && oo(e, n), Jn(e)) : oo(le, n.stateNode));
            break;
          case 4:
            r = le, l = Ue, le = n.stateNode.containerInfo, Ue = true, ft(e, t, n), le = r, Ue = l;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
              l = r = r.next;
              do {
                var o = l, u = o.destroy;
                o = o.tag, u !== void 0 && (o & 2 || o & 4) && tu(n, t, u), l = l.next;
              } while (l !== r);
            }
            ft(e, t, n);
            break;
          case 1:
            if (!ce && (on(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
              r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            } catch (i) {
              X(n, t, i);
            }
            ft(e, t, n);
            break;
          case 21:
            ft(e, t, n);
            break;
          case 22:
            n.mode & 1 ? (ce = (r = ce) || n.memoizedState !== null, ft(e, t, n), ce = r) : ft(e, t, n);
            break;
          default:
            ft(e, t, n);
        }
      }
      function us(e) {
        var t = e.updateQueue;
        if (t !== null) {
          e.updateQueue = null;
          var n = e.stateNode;
          n === null && (n = e.stateNode = new Bd()), t.forEach(function(r) {
            var l = Xd.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l));
          });
        }
      }
      function ze(e, t) {
        var n = t.deletions;
        if (n !== null) for (var r = 0; r < n.length; r++) {
          var l = n[r];
          try {
            var o = e, u = t, i = u;
            e: for (; i !== null; ) {
              switch (i.tag) {
                case 5:
                  le = i.stateNode, Ue = false;
                  break e;
                case 3:
                  le = i.stateNode.containerInfo, Ue = true;
                  break e;
                case 4:
                  le = i.stateNode.containerInfo, Ue = true;
                  break e;
              }
              i = i.return;
            }
            if (le === null) throw Error(w(160));
            pc(o, u, l), le = null, Ue = false;
            var a = l.alternate;
            a !== null && (a.return = null), l.return = null;
          } catch (d) {
            X(l, t, d);
          }
        }
        if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) gc(t, e), t = t.sibling;
      }
      function gc(e, t) {
        var n = e.alternate, r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (ze(t, e), He(e), r & 4) {
              try {
                Vn(3, e, e.return), Il(3, e);
              } catch (E) {
                X(e, e.return, E);
              }
              try {
                Vn(5, e, e.return);
              } catch (E) {
                X(e, e.return, E);
              }
            }
            break;
          case 1:
            ze(t, e), He(e), r & 512 && n !== null && on(n, n.return);
            break;
          case 5:
            if (ze(t, e), He(e), r & 512 && n !== null && on(n, n.return), e.flags & 32) {
              var l = e.stateNode;
              try {
                Yn(l, "");
              } catch (E) {
                X(e, e.return, E);
              }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
              var o = e.memoizedProps, u = n !== null ? n.memoizedProps : o, i = e.type, a = e.updateQueue;
              if (e.updateQueue = null, a !== null) try {
                i === "input" && o.type === "radio" && o.name != null && zs(l, o), Lo(i, u);
                var d = Lo(i, o);
                for (u = 0; u < a.length; u += 2) {
                  var v = a[u], h = a[u + 1];
                  v === "style" ? $s(l, h) : v === "dangerouslySetInnerHTML" ? js(l, h) : v === "children" ? Yn(l, h) : mu(l, v, h, d);
                }
                switch (i) {
                  case "input":
                    ko(l, o);
                    break;
                  case "textarea":
                    Ms(l, o);
                    break;
                  case "select":
                    var m = l._wrapperState.wasMultiple;
                    l._wrapperState.wasMultiple = !!o.multiple;
                    var C = o.value;
                    C != null ? sn(l, !!o.multiple, C, false) : m !== !!o.multiple && (o.defaultValue != null ? sn(l, !!o.multiple, o.defaultValue, true) : sn(l, !!o.multiple, o.multiple ? [] : "", false));
                }
                l[lr] = o;
              } catch (E) {
                X(e, e.return, E);
              }
            }
            break;
          case 6:
            if (ze(t, e), He(e), r & 4) {
              if (e.stateNode === null) throw Error(w(162));
              l = e.stateNode, o = e.memoizedProps;
              try {
                l.nodeValue = o;
              } catch (E) {
                X(e, e.return, E);
              }
            }
            break;
          case 3:
            if (ze(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
              Jn(t.containerInfo);
            } catch (E) {
              X(e, e.return, E);
            }
            break;
          case 4:
            ze(t, e), He(e);
            break;
          case 13:
            ze(t, e), He(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Yu = Z())), r & 4 && us(e);
            break;
          case 22:
            if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (ce = (d = ce) || v, ze(t, e), ce = d) : ze(t, e), He(e), r & 8192) {
              if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v && e.mode & 1) for (L = e, v = e.child; v !== null; ) {
                for (h = L = v; L !== null; ) {
                  switch (m = L, C = m.child, m.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Vn(4, m, m.return);
                      break;
                    case 1:
                      on(m, m.return);
                      var T = m.stateNode;
                      if (typeof T.componentWillUnmount == "function") {
                        r = m, n = m.return;
                        try {
                          t = r, T.props = t.memoizedProps, T.state = t.memoizedState, T.componentWillUnmount();
                        } catch (E) {
                          X(r, n, E);
                        }
                      }
                      break;
                    case 5:
                      on(m, m.return);
                      break;
                    case 22:
                      if (m.memoizedState !== null) {
                        ss(h);
                        continue;
                      }
                  }
                  C !== null ? (C.return = m, L = C) : ss(h);
                }
                v = v.sibling;
              }
              e: for (v = null, h = e; ; ) {
                if (h.tag === 5) {
                  if (v === null) {
                    v = h;
                    try {
                      l = h.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = h.stateNode, a = h.memoizedProps.style, u = a != null && a.hasOwnProperty("display") ? a.display : null, i.style.display = Bs("display", u));
                    } catch (E) {
                      X(e, e.return, E);
                    }
                  }
                } else if (h.tag === 6) {
                  if (v === null) try {
                    h.stateNode.nodeValue = d ? "" : h.memoizedProps;
                  } catch (E) {
                    X(e, e.return, E);
                  }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                  h.child.return = h, h = h.child;
                  continue;
                }
                if (h === e) break e;
                for (; h.sibling === null; ) {
                  if (h.return === null || h.return === e) break e;
                  v === h && (v = null), h = h.return;
                }
                v === h && (v = null), h.sibling.return = h.return, h = h.sibling;
              }
            }
            break;
          case 19:
            ze(t, e), He(e), r & 4 && us(e);
            break;
          case 21:
            break;
          default:
            ze(t, e), He(e);
        }
      }
      function He(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            e: {
              for (var n = e.return; n !== null; ) {
                if (dc(n)) {
                  var r = n;
                  break e;
                }
                n = n.return;
              }
              throw Error(w(160));
            }
            switch (r.tag) {
              case 5:
                var l = r.stateNode;
                r.flags & 32 && (Yn(l, ""), r.flags &= -33);
                var o = os(e);
                lu(e, o, l);
                break;
              case 3:
              case 4:
                var u = r.stateNode.containerInfo, i = os(e);
                ru(e, i, u);
                break;
              default:
                throw Error(w(161));
            }
          } catch (a) {
            X(e, e.return, a);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function bd(e, t, n) {
        L = e, _c(e);
      }
      function _c(e, t, n) {
        for (var r = (e.mode & 1) !== 0; L !== null; ) {
          var l = L, o = l.child;
          if (l.tag === 22 && r) {
            var u = l.memoizedState !== null || Or;
            if (!u) {
              var i = l.alternate, a = i !== null && i.memoizedState !== null || ce;
              i = Or;
              var d = ce;
              if (Or = u, (ce = a) && !d) for (L = l; L !== null; ) u = L, a = u.child, u.tag === 22 && u.memoizedState !== null ? as(l) : a !== null ? (a.return = u, L = a) : as(l);
              for (; o !== null; ) L = o, _c(o), o = o.sibling;
              L = l, Or = i, ce = d;
            }
            is(e);
          } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, L = o) : is(e);
        }
      }
      function is(e) {
        for (; L !== null; ) {
          var t = L;
          if (t.flags & 8772) {
            var n = t.alternate;
            try {
              if (t.flags & 8772) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  ce || Il(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !ce) if (n === null) r.componentDidMount();
                  else {
                    var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                  var o = t.updateQueue;
                  o !== null && Wi(t, o, r);
                  break;
                case 3:
                  var u = t.updateQueue;
                  if (u !== null) {
                    if (n = null, t.child !== null) switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                    Wi(t, u, n);
                  }
                  break;
                case 5:
                  var i = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = i;
                    var a = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        a.autoFocus && n.focus();
                        break;
                      case "img":
                        a.src && (n.src = a.src);
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
                  if (t.memoizedState === null) {
                    var d = t.alternate;
                    if (d !== null) {
                      var v = d.memoizedState;
                      if (v !== null) {
                        var h = v.dehydrated;
                        h !== null && Jn(h);
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
                  throw Error(w(163));
              }
              ce || t.flags & 512 && nu(t);
            } catch (m) {
              X(t, t.return, m);
            }
          }
          if (t === e) {
            L = null;
            break;
          }
          if (n = t.sibling, n !== null) {
            n.return = t.return, L = n;
            break;
          }
          L = t.return;
        }
      }
      function ss(e) {
        for (; L !== null; ) {
          var t = L;
          if (t === e) {
            L = null;
            break;
          }
          var n = t.sibling;
          if (n !== null) {
            n.return = t.return, L = n;
            break;
          }
          L = t.return;
        }
      }
      function as(e) {
        for (; L !== null; ) {
          var t = L;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  Il(4, t);
                } catch (a) {
                  X(t, n, a);
                }
                break;
              case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                  var l = t.return;
                  try {
                    r.componentDidMount();
                  } catch (a) {
                    X(t, l, a);
                  }
                }
                var o = t.return;
                try {
                  nu(t);
                } catch (a) {
                  X(t, o, a);
                }
                break;
              case 5:
                var u = t.return;
                try {
                  nu(t);
                } catch (a) {
                  X(t, u, a);
                }
            }
          } catch (a) {
            X(t, t.return, a);
          }
          if (t === e) {
            L = null;
            break;
          }
          var i = t.sibling;
          if (i !== null) {
            i.return = t.return, L = i;
            break;
          }
          L = t.return;
        }
      }
      var Hd = Math.ceil, ml = at.ReactCurrentDispatcher, Gu = at.ReactCurrentOwner, Pe = at.ReactCurrentBatchConfig, M = 0, re = null, q = null, oe = 0, Se = 0, un = Rt(0), ee = 0, cr = null, bt = 0, Al = 0, Ku = 0, Wn = null, he = null, Yu = 0, wn = 1 / 0, Je = null, hl = false, ou = null, kt = null, Pr = false, ht = null, vl = 0, Qn = 0, uu = null, Qr = -1, Gr = 0;
      function pe() {
        return M & 6 ? Z() : Qr !== -1 ? Qr : Qr = Z();
      }
      function Ct(e) {
        return e.mode & 1 ? M & 2 && oe !== 0 ? oe & -oe : Td.transition !== null ? (Gr === 0 && (Gr = Js()), Gr) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ua(e.type)), e) : 1;
      }
      function $e(e, t, n, r) {
        if (50 < Qn) throw Qn = 0, uu = null, Error(w(185));
        pr(e, n, r), (!(M & 2) || e !== re) && (e === re && (!(M & 2) && (Al |= n), ee === 4 && _t(e, oe)), Ee(e, r), n === 1 && M === 0 && !(t.mode & 1) && (wn = Z() + 500, Nl && It()));
      }
      function Ee(e, t) {
        var n = e.callbackNode;
        Tf(e, t);
        var r = tl(e, e === re ? oe : 0);
        if (r === 0) n !== null && vi(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
          if (n != null && vi(n), t === 1) e.tag === 0 ? xd(cs.bind(null, e)) : xa(cs.bind(null, e)), Ed(function() {
            !(M & 6) && It();
          }), n = null;
          else {
            switch (ea(r)) {
              case 1:
                n = Eu;
                break;
              case 4:
                n = Zs;
                break;
              case 16:
                n = el;
                break;
              case 536870912:
                n = qs;
                break;
              default:
                n = el;
            }
            n = kc(n, mc.bind(null, e));
          }
          e.callbackPriority = t, e.callbackNode = n;
        }
      }
      function mc(e, t) {
        if (Qr = -1, Gr = 0, M & 6) throw Error(w(327));
        var n = e.callbackNode;
        if (pn() && e.callbackNode !== n) return null;
        var r = tl(e, e === re ? oe : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
        else {
          t = r;
          var l = M;
          M |= 2;
          var o = vc();
          (re !== e || oe !== t) && (Je = null, wn = Z() + 500, zt(e, t));
          do
            try {
              Qd();
              break;
            } catch (i) {
              hc(e, i);
            }
          while (true);
          Du(), ml.current = o, M = l, q !== null ? t = 0 : (re = null, oe = 0, t = ee);
        }
        if (t !== 0) {
          if (t === 2 && (l = Po(e), l !== 0 && (r = l, t = iu(e, l))), t === 1) throw n = cr, zt(e, 0), _t(e, r), Ee(e, Z()), n;
          if (t === 6) _t(e, r);
          else {
            if (l = e.current.alternate, !(r & 30) && !Vd(l) && (t = yl(e, r), t === 2 && (o = Po(e), o !== 0 && (r = o, t = iu(e, o))), t === 1)) throw n = cr, zt(e, 0), _t(e, r), Ee(e, Z()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
              case 0:
              case 1:
                throw Error(w(345));
              case 2:
                Ot(e, he, Je);
                break;
              case 3:
                if (_t(e, r), (r & 130023424) === r && (t = Yu + 500 - Z(), 10 < t)) {
                  if (tl(e, 0) !== 0) break;
                  if (l = e.suspendedLanes, (l & r) !== r) {
                    pe(), e.pingedLanes |= e.suspendedLanes & l;
                    break;
                  }
                  e.timeoutHandle = $o(Ot.bind(null, e, he, Je), t);
                  break;
                }
                Ot(e, he, Je);
                break;
              case 4:
                if (_t(e, r), (r & 4194240) === r) break;
                for (t = e.eventTimes, l = -1; 0 < r; ) {
                  var u = 31 - Be(r);
                  o = 1 << u, u = t[u], u > l && (l = u), r &= ~o;
                }
                if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hd(r / 1960)) - r, 10 < r) {
                  e.timeoutHandle = $o(Ot.bind(null, e, he, Je), r);
                  break;
                }
                Ot(e, he, Je);
                break;
              case 5:
                Ot(e, he, Je);
                break;
              default:
                throw Error(w(329));
            }
          }
        }
        return Ee(e, Z()), e.callbackNode === n ? mc.bind(null, e) : null;
      }
      function iu(e, t) {
        var n = Wn;
        return e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256), e = yl(e, t), e !== 2 && (t = he, he = n, t !== null && su(t)), e;
      }
      function su(e) {
        he === null ? he = e : he.push.apply(he, e);
      }
      function Vd(e) {
        for (var t = e; ; ) {
          if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
              var l = n[r], o = l.getSnapshot;
              l = l.value;
              try {
                if (!be(o(), l)) return false;
              } catch {
                return false;
              }
            }
          }
          if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
          else {
            if (t === e) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return true;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
        }
        return true;
      }
      function _t(e, t) {
        for (t &= ~Ku, t &= ~Al, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
          var n = 31 - Be(t), r = 1 << n;
          e[n] = -1, t &= ~r;
        }
      }
      function cs(e) {
        if (M & 6) throw Error(w(327));
        pn();
        var t = tl(e, 0);
        if (!(t & 1)) return Ee(e, Z()), null;
        var n = yl(e, t);
        if (e.tag !== 0 && n === 2) {
          var r = Po(e);
          r !== 0 && (t = r, n = iu(e, r));
        }
        if (n === 1) throw n = cr, zt(e, 0), _t(e, t), Ee(e, Z()), n;
        if (n === 6) throw Error(w(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ot(e, he, Je), Ee(e, Z()), null;
      }
      function Xu(e, t) {
        var n = M;
        M |= 1;
        try {
          return e(t);
        } finally {
          M = n, M === 0 && (wn = Z() + 500, Nl && It());
        }
      }
      function Ht(e) {
        ht !== null && ht.tag === 0 && !(M & 6) && pn();
        var t = M;
        M |= 1;
        var n = Pe.transition, r = j;
        try {
          if (Pe.transition = null, j = 1, e) return e();
        } finally {
          j = r, Pe.transition = n, M = t, !(M & 6) && It();
        }
      }
      function Zu() {
        Se = un.current, V(un);
      }
      function zt(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, wd(n)), q !== null) for (n = q.return; n !== null; ) {
          var r = n;
          switch (Au(r), r.tag) {
            case 1:
              r = r.type.childContextTypes, r != null && ul();
              break;
            case 3:
              vn(), V(ye), V(fe), Bu();
              break;
            case 5:
              ju(r);
              break;
            case 4:
              vn();
              break;
            case 13:
              V(G);
              break;
            case 19:
              V(G);
              break;
            case 10:
              Fu(r.type._context);
              break;
            case 22:
            case 23:
              Zu();
          }
          n = n.return;
        }
        if (re = e, q = e = xt(e.current, null), oe = Se = t, ee = 0, cr = null, Ku = Al = bt = 0, he = Wn = null, Dt !== null) {
          for (t = 0; t < Dt.length; t++) if (n = Dt[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var l = r.next, o = n.pending;
            if (o !== null) {
              var u = o.next;
              o.next = l, r.next = u;
            }
            n.pending = r;
          }
          Dt = null;
        }
        return e;
      }
      function hc(e, t) {
        do {
          var n = q;
          try {
            if (Du(), Hr.current = _l, gl) {
              for (var r = K.memoizedState; r !== null; ) {
                var l = r.queue;
                l !== null && (l.pending = null), r = r.next;
              }
              gl = false;
            }
            if ($t = 0, te = J = K = null, Hn = false, ir = 0, Gu.current = null, n === null || n.return === null) {
              ee = 1, cr = t, q = null;
              break;
            }
            e: {
              var o = e, u = n.return, i = n, a = t;
              if (t = oe, i.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                var d = a, v = i, h = v.tag;
                if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                  var m = v.alternate;
                  m ? (v.updateQueue = m.updateQueue, v.memoizedState = m.memoizedState, v.lanes = m.lanes) : (v.updateQueue = null, v.memoizedState = null);
                }
                var C = Zi(u);
                if (C !== null) {
                  C.flags &= -257, qi(C, u, i, o, t), C.mode & 1 && Xi(o, d, t), t = C, a = d;
                  var T = t.updateQueue;
                  if (T === null) {
                    var E = /* @__PURE__ */ new Set();
                    E.add(a), t.updateQueue = E;
                  } else T.add(a);
                  break e;
                } else {
                  if (!(t & 1)) {
                    Xi(o, d, t), qu();
                    break e;
                  }
                  a = Error(w(426));
                }
              } else if (W && i.mode & 1) {
                var P = Zi(u);
                if (P !== null) {
                  !(P.flags & 65536) && (P.flags |= 256), qi(P, u, i, o, t), Ou(yn(a, i));
                  break e;
                }
              }
              o = a = yn(a, i), ee !== 4 && (ee = 2), Wn === null ? Wn = [
                o
              ] : Wn.push(o), o = u;
              do {
                switch (o.tag) {
                  case 3:
                    o.flags |= 65536, t &= -t, o.lanes |= t;
                    var f = ec(o, a, t);
                    Vi(o, f);
                    break e;
                  case 1:
                    i = a;
                    var s = o.type, c = o.stateNode;
                    if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (kt === null || !kt.has(c)))) {
                      o.flags |= 65536, t &= -t, o.lanes |= t;
                      var p = tc(o, i, t);
                      Vi(o, p);
                      break e;
                    }
                }
                o = o.return;
              } while (o !== null);
            }
            wc(n);
          } catch (g) {
            t = g, q === n && n !== null && (q = n = n.return);
            continue;
          }
          break;
        } while (true);
      }
      function vc() {
        var e = ml.current;
        return ml.current = _l, e === null ? _l : e;
      }
      function qu() {
        (ee === 0 || ee === 3 || ee === 2) && (ee = 4), re === null || !(bt & 268435455) && !(Al & 268435455) || _t(re, oe);
      }
      function yl(e, t) {
        var n = M;
        M |= 2;
        var r = vc();
        (re !== e || oe !== t) && (Je = null, zt(e, t));
        do
          try {
            Wd();
            break;
          } catch (l) {
            hc(e, l);
          }
        while (true);
        if (Du(), M = n, ml.current = r, q !== null) throw Error(w(261));
        return re = null, oe = 0, ee;
      }
      function Wd() {
        for (; q !== null; ) yc(q);
      }
      function Qd() {
        for (; q !== null && !hf(); ) yc(q);
      }
      function yc(e) {
        var t = Sc(e.alternate, e, Se);
        e.memoizedProps = e.pendingProps, t === null ? wc(e) : q = t, Gu.current = null;
      }
      function wc(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (e = t.return, t.flags & 32768) {
            if (n = jd(n, t), n !== null) {
              n.flags &= 32767, q = n;
              return;
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
              ee = 6, q = null;
              return;
            }
          } else if (n = Ud(n, t, Se), n !== null) {
            q = n;
            return;
          }
          if (t = t.sibling, t !== null) {
            q = t;
            return;
          }
          q = t = e;
        } while (t !== null);
        ee === 0 && (ee = 5);
      }
      function Ot(e, t, n) {
        var r = j, l = Pe.transition;
        try {
          Pe.transition = null, j = 1, Gd(e, t, n, r);
        } finally {
          Pe.transition = l, j = r;
        }
        return null;
      }
      function Gd(e, t, n, r) {
        do
          pn();
        while (ht !== null);
        if (M & 6) throw Error(w(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if (Nf(e, o), e === re && (q = re = null, oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = true, kc(el, function() {
          return pn(), null;
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
          o = Pe.transition, Pe.transition = null;
          var u = j;
          j = 1;
          var i = M;
          M |= 4, Gu.current = null, $d(e, n), gc(n, e), pd(jo), nl = !!Uo, jo = Uo = null, e.current = n, bd(n), vf(), M = i, j = u, Pe.transition = o;
        } else e.current = n;
        if (Pr && (Pr = false, ht = e, vl = l), o = e.pendingLanes, o === 0 && (kt = null), Ef(n.stateNode), Ee(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
          componentStack: l.stack,
          digest: l.digest
        });
        if (hl) throw hl = false, e = ou, ou = null, e;
        return vl & 1 && e.tag !== 0 && pn(), o = e.pendingLanes, o & 1 ? e === uu ? Qn++ : (Qn = 0, uu = e) : Qn = 0, It(), null;
      }
      function pn() {
        if (ht !== null) {
          var e = ea(vl), t = Pe.transition, n = j;
          try {
            if (Pe.transition = null, j = 16 > e ? 16 : e, ht === null) var r = false;
            else {
              if (e = ht, ht = null, vl = 0, M & 6) throw Error(w(331));
              var l = M;
              for (M |= 4, L = e.current; L !== null; ) {
                var o = L, u = o.child;
                if (L.flags & 16) {
                  var i = o.deletions;
                  if (i !== null) {
                    for (var a = 0; a < i.length; a++) {
                      var d = i[a];
                      for (L = d; L !== null; ) {
                        var v = L;
                        switch (v.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Vn(8, v, o);
                        }
                        var h = v.child;
                        if (h !== null) h.return = v, L = h;
                        else for (; L !== null; ) {
                          v = L;
                          var m = v.sibling, C = v.return;
                          if (fc(v), v === d) {
                            L = null;
                            break;
                          }
                          if (m !== null) {
                            m.return = C, L = m;
                            break;
                          }
                          L = C;
                        }
                      }
                    }
                    var T = o.alternate;
                    if (T !== null) {
                      var E = T.child;
                      if (E !== null) {
                        T.child = null;
                        do {
                          var P = E.sibling;
                          E.sibling = null, E = P;
                        } while (E !== null);
                      }
                    }
                    L = o;
                  }
                }
                if (o.subtreeFlags & 2064 && u !== null) u.return = o, L = u;
                else e: for (; L !== null; ) {
                  if (o = L, o.flags & 2048) switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(9, o, o.return);
                  }
                  var f = o.sibling;
                  if (f !== null) {
                    f.return = o.return, L = f;
                    break e;
                  }
                  L = o.return;
                }
              }
              var s = e.current;
              for (L = s; L !== null; ) {
                u = L;
                var c = u.child;
                if (u.subtreeFlags & 2064 && c !== null) c.return = u, L = c;
                else e: for (u = s; L !== null; ) {
                  if (i = L, i.flags & 2048) try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Il(9, i);
                    }
                  } catch (g) {
                    X(i, i.return, g);
                  }
                  if (i === u) {
                    L = null;
                    break e;
                  }
                  var p = i.sibling;
                  if (p !== null) {
                    p.return = i.return, L = p;
                    break e;
                  }
                  L = i.return;
                }
              }
              if (M = l, It(), Ge && typeof Ge.onPostCommitFiberRoot == "function") try {
                Ge.onPostCommitFiberRoot(Sl, e);
              } catch {
              }
              r = true;
            }
            return r;
          } finally {
            j = n, Pe.transition = t;
          }
        }
        return false;
      }
      function fs(e, t, n) {
        t = yn(n, t), t = ec(e, t, 1), e = St(e, t, 1), t = pe(), e !== null && (pr(e, 1, t), Ee(e, t));
      }
      function X(e, t, n) {
        if (e.tag === 3) fs(e, e, n);
        else for (; t !== null; ) {
          if (t.tag === 3) {
            fs(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))) {
              e = yn(n, e), e = tc(t, e, 1), t = St(t, e, 1), e = pe(), t !== null && (pr(t, 1, e), Ee(t, e));
              break;
            }
          }
          t = t.return;
        }
      }
      function Kd(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (oe & n) === n && (ee === 4 || ee === 3 && (oe & 130023424) === oe && 500 > Z() - Yu ? zt(e, 0) : Ku |= n), Ee(e, t);
      }
      function Ec(e, t) {
        t === 0 && (e.mode & 1 ? (t = kr, kr <<= 1, !(kr & 130023424) && (kr = 4194304)) : t = 1);
        var n = pe();
        e = it(e, t), e !== null && (pr(e, t, n), Ee(e, n));
      }
      function Yd(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), Ec(e, n);
      }
      function Xd(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode, l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(w(314));
        }
        r !== null && r.delete(t), Ec(e, n);
      }
      var Sc;
      Sc = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || ye.current) ve = true;
        else {
          if (!(e.lanes & n) && !(t.flags & 128)) return ve = false, Md(e, t, n);
          ve = !!(e.flags & 131072);
        }
        else ve = false, W && t.flags & 1048576 && Ta(t, al, t.index);
        switch (t.lanes = 0, t.tag) {
          case 2:
            var r = t.type;
            Wr(e, t), e = t.pendingProps;
            var l = _n(t, fe.current);
            dn(t, n), l = bu(null, t, r, e, l, n);
            var o = Hu();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (o = true, il(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Mu(t), l.updater = Rl, t.stateNode = l, l._reactInternals = t, Ko(t, r, e, n), t = Zo(null, t, r, true, o, n)) : (t.tag = 0, W && o && Iu(t), de(null, t, l, n), t = t.child), t;
          case 16:
            r = t.elementType;
            e: {
              switch (Wr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = qd(r), e = Me(r, e), l) {
                case 0:
                  t = Xo(null, t, r, e, n);
                  break e;
                case 1:
                  t = ts(null, t, r, e, n);
                  break e;
                case 11:
                  t = Ji(null, t, r, e, n);
                  break e;
                case 14:
                  t = es(null, t, r, Me(r.type, e), n);
                  break e;
              }
              throw Error(w(306, r, ""));
            }
            return t;
          case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Xo(e, t, r, l, n);
          case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), ts(e, t, r, l, n);
          case 3:
            e: {
              if (oc(t), e === null) throw Error(w(387));
              r = t.pendingProps, o = t.memoizedState, l = o.element, Oa(e, t), dl(t, r, null, n);
              var u = t.memoizedState;
              if (r = u.element, o.isDehydrated) if (o = {
                element: r,
                isDehydrated: false,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions
              }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                l = yn(Error(w(423)), t), t = ns(e, t, r, n, l);
                break e;
              } else if (r !== l) {
                l = yn(Error(w(424)), t), t = ns(e, t, r, n, l);
                break e;
              } else for (ke = Et(t.stateNode.containerInfo.firstChild), Ce = t, W = true, je = null, n = Ia(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
              else {
                if (mn(), r === l) {
                  t = st(e, t, n);
                  break e;
                }
                de(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return Pa(t), e === null && Wo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, Bo(r, l) ? u = null : o !== null && Bo(r, o) && (t.flags |= 32), lc(e, t), de(e, t, u, n), t.child;
          case 6:
            return e === null && Wo(t), null;
          case 13:
            return uc(e, t, n);
          case 4:
            return Uu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hn(t, null, r, n) : de(e, t, r, n), t.child;
          case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Ji(e, t, r, l, n);
          case 7:
            return de(e, t, t.pendingProps, n), t.child;
          case 8:
            return de(e, t, t.pendingProps.children, n), t.child;
          case 12:
            return de(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, u = l.value, b(cl, r._currentValue), r._currentValue = u, o !== null) if (be(o.value, u)) {
                if (o.children === l.children && !ye.current) {
                  t = st(e, t, n);
                  break e;
                }
              } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var i = o.dependencies;
                if (i !== null) {
                  u = o.child;
                  for (var a = i.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (o.tag === 1) {
                        a = lt(-1, n & -n), a.tag = 2;
                        var d = o.updateQueue;
                        if (d !== null) {
                          d = d.shared;
                          var v = d.pending;
                          v === null ? a.next = a : (a.next = v.next, v.next = a), d.pending = a;
                        }
                      }
                      o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Qo(o.return, n, t), i.lanes |= n;
                      break;
                    }
                    a = a.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (u = o.return, u === null) throw Error(w(341));
                  u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Qo(u, n, t), u = o.sibling;
                } else u = o.child;
                if (u !== null) u.return = o;
                else for (u = o; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (o = u.sibling, o !== null) {
                    o.return = u.return, u = o;
                    break;
                  }
                  u = u.return;
                }
                o = u;
              }
              de(e, t, l.children, n), t = t.child;
            }
            return t;
          case 9:
            return l = t.type, r = t.pendingProps.children, dn(t, n), l = De(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
          case 14:
            return r = t.type, l = Me(r, t.pendingProps), l = Me(r.type, l), es(e, t, r, l, n);
          case 15:
            return nc(e, t, t.type, t.pendingProps, n);
          case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Wr(e, t), t.tag = 1, we(r) ? (e = true, il(t)) : e = false, dn(t, n), Ja(t, r, l), Ko(t, r, l, n), Zo(null, t, r, true, e, n);
          case 19:
            return ic(e, t, n);
          case 22:
            return rc(e, t, n);
        }
        throw Error(w(156, t.tag));
      };
      function kc(e, t) {
        return Xs(e, t);
      }
      function Zd(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Oe(e, t, n, r) {
        return new Zd(e, t, n, r);
      }
      function Ju(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
      }
      function qd(e) {
        if (typeof e == "function") return Ju(e) ? 1 : 0;
        if (e != null) {
          if (e = e.$$typeof, e === vu) return 11;
          if (e === yu) return 14;
        }
        return 2;
      }
      function xt(e, t) {
        var n = e.alternate;
        return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
          lanes: t.lanes,
          firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
      }
      function Kr(e, t, n, r, l, o) {
        var u = 2;
        if (r = e, typeof e == "function") Ju(e) && (u = 1);
        else if (typeof e == "string") u = 5;
        else e: switch (e) {
          case Xt:
            return Mt(n.children, l, o, t);
          case hu:
            u = 8, l |= 8;
            break;
          case vo:
            return e = Oe(12, n, t, l | 2), e.elementType = vo, e.lanes = o, e;
          case yo:
            return e = Oe(13, n, t, l), e.elementType = yo, e.lanes = o, e;
          case wo:
            return e = Oe(19, n, t, l), e.elementType = wo, e.lanes = o, e;
          case Ps:
            return Ol(n, l, o, t);
          default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
              case As:
                u = 10;
                break e;
              case Os:
                u = 9;
                break e;
              case vu:
                u = 11;
                break e;
              case yu:
                u = 14;
                break e;
              case dt:
                u = 16, r = null;
                break e;
            }
            throw Error(w(130, e == null ? e : typeof e, ""));
        }
        return t = Oe(u, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
      }
      function Mt(e, t, n, r) {
        return e = Oe(7, e, r, t), e.lanes = n, e;
      }
      function Ol(e, t, n, r) {
        return e = Oe(22, e, r, t), e.elementType = Ps, e.lanes = n, e.stateNode = {
          isHidden: false
        }, e;
      }
      function go(e, t, n) {
        return e = Oe(6, e, null, t), e.lanes = n, e;
      }
      function _o(e, t, n) {
        return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }, t;
      }
      function Jd(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
      }
      function ei(e, t, n, r, l, o, u, i, a) {
        return e = new Jd(e, t, n, i, a), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = Oe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        }, Mu(o), e;
      }
      function ep(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Yt,
          key: r == null ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n
        };
      }
      function Cc(e) {
        if (!e) return Nt;
        e = e._reactInternals;
        e: {
          if (Wt(e) !== e || e.tag !== 1) throw Error(w(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (we(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (t !== null);
          throw Error(w(171));
        }
        if (e.tag === 1) {
          var n = e.type;
          if (we(n)) return Ca(e, n, t);
        }
        return t;
      }
      function xc(e, t, n, r, l, o, u, i, a) {
        return e = ei(n, r, true, e, l, o, u, i, a), e.context = Cc(null), n = e.current, r = pe(), l = Ct(n), o = lt(r, l), o.callback = t ?? null, St(n, o, l), e.current.lanes = l, pr(e, l, r), Ee(e, r), e;
      }
      function Pl(e, t, n, r) {
        var l = t.current, o = pe(), u = Ct(l);
        return n = Cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(o, u), t.payload = {
          element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = St(l, t, u), e !== null && ($e(e, l, u, o), br(e, l, u)), u;
      }
      function wl(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
          case 5:
            return e.child.stateNode;
          default:
            return e.child.stateNode;
        }
      }
      function ds(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
          var n = e.retryLane;
          e.retryLane = n !== 0 && n < t ? n : t;
        }
      }
      function ti(e, t) {
        ds(e, t), (e = e.alternate) && ds(e, t);
      }
      function tp() {
        return null;
      }
      var Tc = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
      };
      function ni(e) {
        this._internalRoot = e;
      }
      Dl.prototype.render = ni.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(w(409));
        Pl(e, t, null, null);
      };
      Dl.prototype.unmount = ni.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Ht(function() {
            Pl(null, e, null, null);
          }), t[ut] = null;
        }
      };
      function Dl(e) {
        this._internalRoot = e;
      }
      Dl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var t = ra();
          e = {
            blockedOn: null,
            target: e,
            priority: t
          };
          for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++) ;
          gt.splice(n, 0, e), n === 0 && oa(e);
        }
      };
      function ri(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
      }
      function Fl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
      }
      function ps() {
      }
      function np(e, t, n, r, l) {
        if (l) {
          if (typeof r == "function") {
            var o = r;
            r = function() {
              var d = wl(u);
              o.call(d);
            };
          }
          var u = xc(t, r, e, 0, null, false, false, "", ps);
          return e._reactRootContainer = u, e[ut] = u.current, nr(e.nodeType === 8 ? e.parentNode : e), Ht(), u;
        }
        for (; l = e.lastChild; ) e.removeChild(l);
        if (typeof r == "function") {
          var i = r;
          r = function() {
            var d = wl(a);
            i.call(d);
          };
        }
        var a = ei(e, 0, false, null, null, false, false, "", ps);
        return e._reactRootContainer = a, e[ut] = a.current, nr(e.nodeType === 8 ? e.parentNode : e), Ht(function() {
          Pl(t, a, n, r);
        }), a;
      }
      function zl(e, t, n, r, l) {
        var o = n._reactRootContainer;
        if (o) {
          var u = o;
          if (typeof l == "function") {
            var i = l;
            l = function() {
              var a = wl(u);
              i.call(a);
            };
          }
          Pl(t, u, e, l);
        } else u = np(n, t, e, l, r);
        return wl(u);
      }
      ta = function(e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = zn(t.pendingLanes);
              n !== 0 && (Su(t, n | 1), Ee(t, Z()), !(M & 6) && (wn = Z() + 500, It()));
            }
            break;
          case 13:
            Ht(function() {
              var r = it(e, 1);
              if (r !== null) {
                var l = pe();
                $e(r, e, 1, l);
              }
            }), ti(e, 1);
        }
      };
      ku = function(e) {
        if (e.tag === 13) {
          var t = it(e, 134217728);
          if (t !== null) {
            var n = pe();
            $e(t, e, 134217728, n);
          }
          ti(e, 134217728);
        }
      };
      na = function(e) {
        if (e.tag === 13) {
          var t = Ct(e), n = it(e, t);
          if (n !== null) {
            var r = pe();
            $e(n, e, t, r);
          }
          ti(e, t);
        }
      };
      ra = function() {
        return j;
      };
      la = function(e, t) {
        var n = j;
        try {
          return j = e, t();
        } finally {
          j = n;
        }
      };
      Io = function(e, t, n) {
        switch (t) {
          case "input":
            if (ko(e, n), t = n.name, n.type === "radio" && t != null) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var l = Tl(r);
                  if (!l) throw Error(w(90));
                  Fs(r), ko(r, l);
                }
              }
            }
            break;
          case "textarea":
            Ms(e, n);
            break;
          case "select":
            t = n.value, t != null && sn(e, !!n.multiple, t, false);
        }
      };
      Vs = Xu;
      Ws = Ht;
      var rp = {
        usingClientEntryPoint: false,
        Events: [
          _r,
          en,
          Tl,
          bs,
          Hs,
          Xu
        ]
      }, Pn = {
        findFiberByHostInstance: Pt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
      }, lp = {
        bundleType: Pn.bundleType,
        version: Pn.version,
        rendererPackageName: Pn.rendererPackageName,
        rendererConfig: Pn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: at.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
          return e = Ks(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Pn.findFiberByHostInstance || tp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Dr.isDisabled && Dr.supportsFiber) try {
          Sl = Dr.inject(lp), Ge = Dr;
        } catch {
        }
      }
      Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rp;
      Te.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ri(t)) throw Error(w(200));
        return ep(e, t, null, n);
      };
      Te.createRoot = function(e, t) {
        if (!ri(e)) throw Error(w(299));
        var n = false, r = "", l = Tc;
        return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ei(e, 1, false, null, null, n, false, r, l), e[ut] = t.current, nr(e.nodeType === 8 ? e.parentNode : e), new ni(t);
      };
      Te.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
        return e = Ks(t), e = e === null ? null : e.stateNode, e;
      };
      Te.flushSync = function(e) {
        return Ht(e);
      };
      Te.hydrate = function(e, t, n) {
        if (!Fl(t)) throw Error(w(200));
        return zl(null, e, t, true, n);
      };
      Te.hydrateRoot = function(e, t, n) {
        if (!ri(e)) throw Error(w(405));
        var r = n != null && n.hydratedSources || null, l = false, o = "", u = Tc;
        if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = xc(t, null, e, 1, n ?? null, l, false, o, u), e[ut] = t.current, nr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
          n,
          l
        ] : t.mutableSourceEagerHydrationData.push(n, l);
        return new Dl(t);
      };
      Te.render = function(e, t, n) {
        if (!Fl(t)) throw Error(w(200));
        return zl(null, e, t, false, n);
      };
      Te.unmountComponentAtNode = function(e) {
        if (!Fl(e)) throw Error(w(40));
        return e._reactRootContainer ? (Ht(function() {
          zl(null, null, e, false, function() {
            e._reactRootContainer = null, e[ut] = null;
          });
        }), true) : false;
      };
      Te.unstable_batchedUpdates = Xu;
      Te.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Fl(n)) throw Error(w(200));
        if (e == null || e._reactInternals === void 0) throw Error(w(38));
        return zl(e, t, n, false, r);
      };
      Te.version = "18.3.1-next-f1338f8080-20240426";
      function Nc() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nc);
        } catch (e) {
          console.error(e);
        }
      }
      Nc(), Ns.exports = Te;
      var op = Ns.exports, gs = op;
      mo.createRoot = gs.createRoot, mo.hydrateRoot = gs.hydrateRoot;
      const up = "/datafusion-wasm-cli/assets/datafusion_wasm_bg-BfRNeF7Z.wasm", ip = async (e = {}, t) => {
        let n;
        if (t.startsWith("data:")) {
          const r = t.replace(/^data:.*?base64,/, "");
          let l;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") l = Buffer.from(r, "base64");
          else if (typeof atob == "function") {
            const o = atob(r);
            l = new Uint8Array(o.length);
            for (let u = 0; u < o.length; u++) l[u] = o.charCodeAt(u);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(l, e);
        } else {
          const r = await fetch(t), l = r.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && l.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
          else {
            const o = await r.arrayBuffer();
            n = await WebAssembly.instantiate(o, e);
          }
        }
        return n.instance.exports;
      };
      let F;
      function sp(e) {
        F = e;
      }
      const ap = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let Lc = new ap("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Lc.decode();
      let Fr = null;
      function Yr() {
        return (Fr === null || Fr.byteLength === 0) && (Fr = new Uint8Array(F.memory.buffer)), Fr;
      }
      function Ye(e, t) {
        return e = e >>> 0, Lc.decode(Yr().subarray(e, e + t));
      }
      const tt = new Array(128).fill(void 0);
      tt.push(void 0, null, true, false);
      let Gn = tt.length;
      function R(e) {
        Gn === tt.length && tt.push(tt.length + 1);
        const t = Gn;
        return Gn = tt[t], tt[t] = e, t;
      }
      function k(e) {
        return tt[e];
      }
      function cp(e) {
        e < 132 || (tt[e] = Gn, Gn = e);
      }
      function Ml(e) {
        const t = k(e);
        return cp(e), t;
      }
      let Ae = 0;
      const fp = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
      let Xr = new fp("utf-8");
      const dp = typeof Xr.encodeInto == "function" ? function(e, t) {
        return Xr.encodeInto(e, t);
      } : function(e, t) {
        const n = Xr.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      };
      function We(e, t, n) {
        if (n === void 0) {
          const i = Xr.encode(e), a = t(i.length, 1) >>> 0;
          return Yr().subarray(a, a + i.length).set(i), Ae = i.length, a;
        }
        let r = e.length, l = t(r, 1) >>> 0;
        const o = Yr();
        let u = 0;
        for (; u < r; u++) {
          const i = e.charCodeAt(u);
          if (i > 127) break;
          o[l + u] = i;
        }
        if (u !== r) {
          u !== 0 && (e = e.slice(u)), l = n(l, r, r = u + e.length * 3, 1) >>> 0;
          const i = Yr().subarray(l + u, l + r), a = dp(e, i);
          u += a.written;
        }
        return Ae = u, l;
      }
      function Ul(e) {
        return e == null;
      }
      let zr = null;
      function Xe() {
        return (zr === null || zr.byteLength === 0) && (zr = new Int32Array(F.memory.buffer)), zr;
      }
      function au(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
          const l = e.description;
          return l == null ? "Symbol" : `Symbol(${l})`;
        }
        if (t == "function") {
          const l = e.name;
          return typeof l == "string" && l.length > 0 ? `Function(${l})` : "Function";
        }
        if (Array.isArray(e)) {
          const l = e.length;
          let o = "[";
          l > 0 && (o += au(e[0]));
          for (let u = 1; u < l; u++) o += ", " + au(e[u]);
          return o += "]", o;
        }
        const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let r;
        if (n.length > 1) r = n[1];
        else return toString.call(e);
        if (r == "Object") try {
          return "Object(" + JSON.stringify(e) + ")";
        } catch {
          return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
      }
      function Rc(e, t, n, r) {
        const l = {
          a: e,
          b: t,
          cnt: 1,
          dtor: n
        }, o = (...u) => {
          l.cnt++;
          const i = l.a;
          l.a = 0;
          try {
            return r(i, l.b, ...u);
          } finally {
            --l.cnt === 0 ? F.__wbindgen_export_2.get(l.dtor)(i, l.b) : l.a = i;
          }
        };
        return o.original = l, o;
      }
      function pp(e, t, n) {
        F.wasm_bindgen__convert__closures__invoke1_mut__h483e8df57983c0fc(e, t, R(n));
      }
      function gp(e, t, n) {
        F.wasm_bindgen__convert__closures__invoke1_mut__he75e6abfe046c9ea(e, t, R(n));
      }
      function Q(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          F.__wbindgen_exn_store(R(n));
        }
      }
      function _p(e, t, n, r) {
        F.wasm_bindgen__convert__closures__invoke2_mut__h58ef9e5f9bba9436(e, t, R(n), R(r));
      }
      class fr {
        static __wrap(t) {
          t = t >>> 0;
          const n = Object.create(fr.prototype);
          return n.__wbg_ptr = t, n;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          return this.__wbg_ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          F.__wbg_datafusioncontext_free(t);
        }
        static greet() {
          let t, n;
          try {
            const o = F.__wbindgen_add_to_stack_pointer(-16);
            F.datafusioncontext_greet(o);
            var r = Xe()[o / 4 + 0], l = Xe()[o / 4 + 1];
            return t = r, n = l, Ye(r, l);
          } finally {
            F.__wbindgen_add_to_stack_pointer(16), F.__wbindgen_free(t, n, 1);
          }
        }
        static new() {
          const t = F.datafusioncontext_new();
          return fr.__wrap(t);
        }
        execute_sql(t) {
          const n = We(t, F.__wbindgen_malloc, F.__wbindgen_realloc), r = Ae, l = F.datafusioncontext_execute_sql(this.__wbg_ptr, n, r);
          return Ml(l);
        }
        set_s3_config(t, n, r, l, o) {
          const u = We(t, F.__wbindgen_malloc, F.__wbindgen_realloc), i = Ae, a = We(n, F.__wbindgen_malloc, F.__wbindgen_realloc), d = Ae, v = We(r, F.__wbindgen_malloc, F.__wbindgen_realloc), h = Ae, m = We(l, F.__wbindgen_malloc, F.__wbindgen_realloc), C = Ae, T = We(o, F.__wbindgen_malloc, F.__wbindgen_realloc), E = Ae;
          F.datafusioncontext_set_s3_config(this.__wbg_ptr, u, i, a, d, v, h, m, C, T, E);
        }
      }
      function mp(e, t) {
        console.log(Ye(e, t));
      }
      function hp(e, t) {
        const n = Ye(e, t);
        return R(n);
      }
      function vp(e) {
        Ml(e);
      }
      function yp() {
        const e = new Error();
        return R(e);
      }
      function wp(e, t) {
        const n = k(t).stack, r = We(n, F.__wbindgen_malloc, F.__wbindgen_realloc), l = Ae;
        Xe()[e / 4 + 1] = l, Xe()[e / 4 + 0] = r;
      }
      function Ep(e, t) {
        let n, r;
        try {
          n = e, r = t, console.error(Ye(e, t));
        } finally {
          F.__wbindgen_free(n, r, 1);
        }
      }
      function Sp(e) {
        const t = Ml(e).original;
        return t.cnt-- == 1 ? (t.a = 0, true) : false;
      }
      function kp(e, t) {
        const n = k(t), r = typeof n == "string" ? n : void 0;
        var l = Ul(r) ? 0 : We(r, F.__wbindgen_malloc, F.__wbindgen_realloc), o = Ae;
        Xe()[e / 4 + 1] = o, Xe()[e / 4 + 0] = l;
      }
      function Cp(e) {
        const t = fetch(k(e));
        return R(t);
      }
      function xp(e) {
        const t = k(e);
        return R(t);
      }
      function Tp() {
        return Q(function(e) {
          const t = k(e).getReader();
          return R(t);
        }, arguments);
      }
      function Np(e) {
        return k(e).done;
      }
      function Lp(e) {
        const t = k(e).value;
        return R(t);
      }
      function Rp(e) {
        queueMicrotask(k(e));
      }
      function Ip(e) {
        const t = k(e).queueMicrotask;
        return R(t);
      }
      function Ap(e) {
        return typeof k(e) == "function";
      }
      function Op(e, t) {
        const n = k(e).fetch(k(t));
        return R(n);
      }
      function Pp(e) {
        const t = k(e).signal;
        return R(t);
      }
      function Dp() {
        return Q(function() {
          const e = new AbortController();
          return R(e);
        }, arguments);
      }
      function Fp(e) {
        k(e).abort();
      }
      function zp(e) {
        return k(e).now();
      }
      function Mp() {
        return Q(function(e, t, n) {
          const r = new Request(Ye(e, t), k(n));
          return R(r);
        }, arguments);
      }
      function Up(e) {
        const t = k(e).view;
        return Ul(t) ? 0 : R(t);
      }
      function jp() {
        return Q(function(e, t) {
          k(e).respond(t >>> 0);
        }, arguments);
      }
      function Bp() {
        return Q(function() {
          const e = new Headers();
          return R(e);
        }, arguments);
      }
      function $p() {
        return Q(function(e, t, n, r, l) {
          k(e).append(Ye(t, n), Ye(r, l));
        }, arguments);
      }
      function bp(e) {
        const t = k(e).byobRequest;
        return Ul(t) ? 0 : R(t);
      }
      function Hp() {
        return Q(function(e) {
          k(e).close();
        }, arguments);
      }
      function Vp() {
        return Q(function(e) {
          k(e).close();
        }, arguments);
      }
      function Wp() {
        return Q(function(e, t) {
          k(e).enqueue(k(t));
        }, arguments);
      }
      function Qp(e) {
        const t = k(e).read();
        return R(t);
      }
      function Gp(e) {
        k(e).releaseLock();
      }
      function Kp(e) {
        const t = k(e).cancel();
        return R(t);
      }
      function Yp(e) {
        let t;
        try {
          t = k(e) instanceof Response;
        } catch {
          t = false;
        }
        return t;
      }
      function Xp(e, t) {
        const n = k(t).url, r = We(n, F.__wbindgen_malloc, F.__wbindgen_realloc), l = Ae;
        Xe()[e / 4 + 1] = l, Xe()[e / 4 + 0] = r;
      }
      function Zp(e) {
        return k(e).status;
      }
      function qp(e) {
        const t = k(e).headers;
        return R(t);
      }
      function Jp(e) {
        const t = k(e).body;
        return Ul(t) ? 0 : R(t);
      }
      function eg() {
        return Q(function(e) {
          const t = k(e).text();
          return R(t);
        }, arguments);
      }
      function tg(e) {
        const t = k(e).crypto;
        return R(t);
      }
      function ng(e) {
        const t = k(e);
        return typeof t == "object" && t !== null;
      }
      function rg(e) {
        const t = k(e).process;
        return R(t);
      }
      function lg(e) {
        const t = k(e).versions;
        return R(t);
      }
      function og(e) {
        const t = k(e).node;
        return R(t);
      }
      function ug(e) {
        return typeof k(e) == "string";
      }
      function ig() {
        return Q(function() {
          const e = module.require;
          return R(e);
        }, arguments);
      }
      function sg(e) {
        const t = k(e).msCrypto;
        return R(t);
      }
      function ag() {
        return Q(function(e, t) {
          k(e).randomFillSync(Ml(t));
        }, arguments);
      }
      function cg() {
        return Q(function(e, t) {
          k(e).getRandomValues(k(t));
        }, arguments);
      }
      function fg(e, t) {
        const n = new Function(Ye(e, t));
        return R(n);
      }
      function dg(e) {
        const t = k(e).next;
        return R(t);
      }
      function pg() {
        return Q(function(e) {
          const t = k(e).next();
          return R(t);
        }, arguments);
      }
      function gg(e) {
        return k(e).done;
      }
      function _g(e) {
        const t = k(e).value;
        return R(t);
      }
      function mg() {
        return R(Symbol.iterator);
      }
      function hg() {
        return Q(function(e, t) {
          const n = Reflect.get(k(e), k(t));
          return R(n);
        }, arguments);
      }
      function vg() {
        return Q(function(e, t) {
          const n = k(e).call(k(t));
          return R(n);
        }, arguments);
      }
      function yg() {
        const e = new Object();
        return R(e);
      }
      function wg() {
        return Q(function() {
          const e = self.self;
          return R(e);
        }, arguments);
      }
      function Eg() {
        return Q(function() {
          const e = window.window;
          return R(e);
        }, arguments);
      }
      function Sg() {
        return Q(function() {
          const e = globalThis.globalThis;
          return R(e);
        }, arguments);
      }
      function kg() {
        return Q(function() {
          const e = global.global;
          return R(e);
        }, arguments);
      }
      function Cg(e) {
        return k(e) === void 0;
      }
      function xg(e, t) {
        const n = new Error(Ye(e, t));
        return R(n);
      }
      function Tg() {
        return Q(function(e, t, n) {
          const r = k(e).call(k(t), k(n));
          return R(r);
        }, arguments);
      }
      function Ng(e) {
        return k(e).getTime();
      }
      function Lg() {
        return R(/* @__PURE__ */ new Date());
      }
      function Rg(e, t) {
        try {
          var n = {
            a: e,
            b: t
          }, r = (o, u) => {
            const i = n.a;
            n.a = 0;
            try {
              return _p(i, n.b, o, u);
            } finally {
              n.a = i;
            }
          };
          const l = new Promise(r);
          return R(l);
        } finally {
          n.a = n.b = 0;
        }
      }
      function Ig(e) {
        const t = Promise.resolve(k(e));
        return R(t);
      }
      function Ag(e, t) {
        const n = k(e).catch(k(t));
        return R(n);
      }
      function Og(e, t) {
        const n = k(e).then(k(t));
        return R(n);
      }
      function Pg(e, t, n) {
        const r = k(e).then(k(t), k(n));
        return R(r);
      }
      function Dg(e) {
        const t = k(e).buffer;
        return R(t);
      }
      function Fg(e, t, n) {
        const r = new Uint8Array(k(e), t >>> 0, n >>> 0);
        return R(r);
      }
      function zg(e) {
        const t = new Uint8Array(k(e));
        return R(t);
      }
      function Mg(e, t, n) {
        k(e).set(k(t), n >>> 0);
      }
      function Ug(e) {
        return k(e).length;
      }
      function jg(e) {
        const t = new Uint8Array(e >>> 0);
        return R(t);
      }
      function Bg(e) {
        const t = k(e).buffer;
        return R(t);
      }
      function $g(e, t, n) {
        const r = k(e).subarray(t >>> 0, n >>> 0);
        return R(r);
      }
      function bg(e) {
        return k(e).byteLength;
      }
      function Hg(e) {
        return k(e).byteOffset;
      }
      function Vg() {
        return Q(function(e, t) {
          return Reflect.has(k(e), k(t));
        }, arguments);
      }
      function Wg() {
        return Q(function(e, t, n) {
          return Reflect.set(k(e), k(t), k(n));
        }, arguments);
      }
      function Qg() {
        return Q(function(e) {
          const t = JSON.stringify(k(e));
          return R(t);
        }, arguments);
      }
      function Gg(e, t) {
        const n = au(k(t)), r = We(n, F.__wbindgen_malloc, F.__wbindgen_realloc), l = Ae;
        Xe()[e / 4 + 1] = l, Xe()[e / 4 + 0] = r;
      }
      function Kg(e, t) {
        throw new Error(Ye(e, t));
      }
      function Yg() {
        const e = F.memory;
        return R(e);
      }
      function Xg(e, t, n) {
        const r = Rc(e, t, 2209, pp);
        return R(r);
      }
      function Zg(e, t, n) {
        const r = Rc(e, t, 2217, gp);
        return R(r);
      }
      URL = globalThis.URL;
      const A = await ip({
        "./datafusion_wasm_bg.js": {
          __wbg_log_4ff97616a5ce89f6: mp,
          __wbindgen_string_new: hp,
          __wbindgen_object_drop_ref: vp,
          __wbg_new_abda76e883ba8a5f: yp,
          __wbg_stack_658279fe44541cf6: wp,
          __wbg_error_f851667af71bcfc6: Ep,
          __wbindgen_cb_drop: Sp,
          __wbindgen_string_get: kp,
          __wbg_fetch_27eb4c0a08a9ca04: Cp,
          __wbindgen_object_clone_ref: xp,
          __wbg_getReader_ab94afcb5cb7689a: Tp,
          __wbg_done_2ffa852272310e47: Np,
          __wbg_value_9f6eeb1e2aab8d96: Lp,
          __wbg_queueMicrotask_118eeb525d584d9a: Rp,
          __wbg_queueMicrotask_26a89c14c53809c0: Ip,
          __wbindgen_is_function: Ap,
          __wbg_fetch_06d656a1b748ac0d: Op,
          __wbg_signal_7876560d9d0f914c: Pp,
          __wbg_new_fa36281638875de8: Dp,
          __wbg_abort_7792bf3f664d7bb3: Fp,
          __wbg_now_65ff8ec2b863300c: zp,
          __wbg_newwithstrandinit_9fd2fc855c6327eb: Mp,
          __wbg_view_d7afa0120e493b2d: Up,
          __wbg_respond_3233ecfa19b9b617: jp,
          __wbg_new_a979e9eedc5e81a3: Bp,
          __wbg_append_047382169b61373d: $p,
          __wbg_byobRequest_004146c1db53bc14: bp,
          __wbg_close_54a5b70c42a72ee3: Hp,
          __wbg_close_21d8fce01634cc74: Vp,
          __wbg_enqueue_61ebfae3475d5d91: Wp,
          __wbg_read_e8fd432a834b70f7: Qp,
          __wbg_releaseLock_a7d9325c42d31fa3: Gp,
          __wbg_cancel_c77410090bc02e06: Kp,
          __wbg_instanceof_Response_0d25bb8436a9cefe: Yp,
          __wbg_url_47f8307501523859: Xp,
          __wbg_status_351700a30c61ba61: Zp,
          __wbg_headers_e38c00d713e8888c: qp,
          __wbg_body_cf88172a13003d46: Jp,
          __wbg_text_10c88c5e55f873c7: eg,
          __wbg_crypto_d05b68a3572bb8ca: tg,
          __wbindgen_is_object: ng,
          __wbg_process_b02b3570280d0366: rg,
          __wbg_versions_c1cb42213cedf0f5: lg,
          __wbg_node_43b1089f407e4ec2: og,
          __wbindgen_is_string: ug,
          __wbg_require_9a7e0f667ead4995: ig,
          __wbg_msCrypto_10fc94afee92bd76: sg,
          __wbg_randomFillSync_b70ccbdf4926a99d: ag,
          __wbg_getRandomValues_7e42b4fb8779dc6d: cg,
          __wbg_newnoargs_5859b6d41c6fe9f7: fg,
          __wbg_next_1938cf110c9491d4: dg,
          __wbg_next_267398d0e0761bf9: pg,
          __wbg_done_506b44765ba84b9c: gg,
          __wbg_value_31485d8770eb06ab: _g,
          __wbg_iterator_364187e1ee96b750: mg,
          __wbg_get_5027b32da70f39b1: hg,
          __wbg_call_a79f1973a4f07d5e: vg,
          __wbg_new_87d841e70661f6e9: yg,
          __wbg_self_086b5302bcafb962: wg,
          __wbg_window_132fa5d7546f1de5: Eg,
          __wbg_globalThis_e5f801a37ad7d07b: Sg,
          __wbg_global_f9a61fce4af6b7c1: kg,
          __wbindgen_is_undefined: Cg,
          __wbg_new_3a66822ed076951c: xg,
          __wbg_call_f6a2bc58c19c53c6: Tg,
          __wbg_getTime_af7ca51c0bcefa08: Ng,
          __wbg_new0_c0e40662db0749ee: Lg,
          __wbg_new_1d93771b84541aa5: Rg,
          __wbg_resolve_97ecd55ee839391b: Ig,
          __wbg_catch_9aeb46e888e3b0d6: Ag,
          __wbg_then_7aeb7c5f1536640f: Og,
          __wbg_then_5842e4e97f7beace: Pg,
          __wbg_buffer_5d1b598a01b41a42: Dg,
          __wbg_newwithbyteoffsetandlength_d695c7957788f922: Fg,
          __wbg_new_ace717933ad7117f: zg,
          __wbg_set_74906aa30864df5a: Mg,
          __wbg_length_f0764416ba5bb237: Ug,
          __wbg_newwithlength_728575f3bba9959b: jg,
          __wbg_buffer_3da2aecfd9814cd8: Bg,
          __wbg_subarray_7f7a652672800851: $g,
          __wbg_byteLength_a8d894d93425b2e0: bg,
          __wbg_byteOffset_89d0a5265d5bde53: Hg,
          __wbg_has_a2919659b7b645b3: Vg,
          __wbg_set_37a50e901587b477: Wg,
          __wbg_stringify_daa6661e90c04140: Qg,
          __wbindgen_debug_string: Gg,
          __wbindgen_throw: Kg,
          __wbindgen_memory: Yg,
          __wbindgen_closure_wrapper4408: Xg,
          __wbindgen_closure_wrapper4444: Zg
        }
      }, up), qg = A.memory, Jg = A.__wbg_datafusioncontext_free, e_ = A.datafusioncontext_greet, t_ = A.datafusioncontext_new, n_ = A.datafusioncontext_execute_sql, r_ = A.datafusioncontext_set_s3_config, l_ = A.__wbg_intounderlyingsource_free, o_ = A.intounderlyingsource_pull, u_ = A.intounderlyingsource_cancel, i_ = A.__wbg_intounderlyingsink_free, s_ = A.intounderlyingsink_write, a_ = A.intounderlyingsink_close, c_ = A.intounderlyingsink_abort, f_ = A.__wbg_intounderlyingbytesource_free, d_ = A.intounderlyingbytesource_type, p_ = A.intounderlyingbytesource_autoAllocateChunkSize, g_ = A.intounderlyingbytesource_start, __ = A.intounderlyingbytesource_pull, m_ = A.intounderlyingbytesource_cancel, h_ = A.rust_zstd_wasm_shim_qsort, v_ = A.rust_zstd_wasm_shim_malloc, y_ = A.rust_zstd_wasm_shim_memcmp, w_ = A.rust_zstd_wasm_shim_calloc, E_ = A.rust_zstd_wasm_shim_free, S_ = A.rust_zstd_wasm_shim_memcpy, k_ = A.rust_zstd_wasm_shim_memmove, C_ = A.rust_zstd_wasm_shim_memset, x_ = A.BrotliDecoderCreateInstance, T_ = A.BrotliDecoderSetParameter, N_ = A.BrotliDecoderDecompressPrealloc, L_ = A.BrotliDecoderDecompressWithReturnInfo, R_ = A.BrotliDecoderDecompress, I_ = A.BrotliDecoderDecompressStream, A_ = A.BrotliDecoderDecompressStreaming, O_ = A.BrotliDecoderMallocU8, P_ = A.BrotliDecoderFreeU8, D_ = A.BrotliDecoderMallocUsize, F_ = A.BrotliDecoderFreeUsize, z_ = A.BrotliDecoderDestroyInstance, M_ = A.BrotliDecoderHasMoreOutput, U_ = A.BrotliDecoderTakeOutput, j_ = A.BrotliDecoderIsUsed, B_ = A.BrotliDecoderIsFinished, $_ = A.BrotliDecoderGetErrorCode, b_ = A.BrotliDecoderGetErrorString, H_ = A.BrotliDecoderErrorString, V_ = A.BrotliDecoderVersion, W_ = A.__wbindgen_malloc, Q_ = A.__wbindgen_realloc, G_ = A.__wbindgen_export_2, K_ = A.wasm_bindgen__convert__closures__invoke1_mut__h483e8df57983c0fc, Y_ = A.wasm_bindgen__convert__closures__invoke1_mut__he75e6abfe046c9ea, X_ = A.__wbindgen_add_to_stack_pointer, Z_ = A.__wbindgen_free, q_ = A.__wbindgen_exn_store, J_ = A.wasm_bindgen__convert__closures__invoke2_mut__h58ef9e5f9bba9436, em = Object.freeze(Object.defineProperty({
        __proto__: null,
        BrotliDecoderCreateInstance: x_,
        BrotliDecoderDecompress: R_,
        BrotliDecoderDecompressPrealloc: N_,
        BrotliDecoderDecompressStream: I_,
        BrotliDecoderDecompressStreaming: A_,
        BrotliDecoderDecompressWithReturnInfo: L_,
        BrotliDecoderDestroyInstance: z_,
        BrotliDecoderErrorString: H_,
        BrotliDecoderFreeU8: P_,
        BrotliDecoderFreeUsize: F_,
        BrotliDecoderGetErrorCode: $_,
        BrotliDecoderGetErrorString: b_,
        BrotliDecoderHasMoreOutput: M_,
        BrotliDecoderIsFinished: B_,
        BrotliDecoderIsUsed: j_,
        BrotliDecoderMallocU8: O_,
        BrotliDecoderMallocUsize: D_,
        BrotliDecoderSetParameter: T_,
        BrotliDecoderTakeOutput: U_,
        BrotliDecoderVersion: V_,
        __wbg_datafusioncontext_free: Jg,
        __wbg_intounderlyingbytesource_free: f_,
        __wbg_intounderlyingsink_free: i_,
        __wbg_intounderlyingsource_free: l_,
        __wbindgen_add_to_stack_pointer: X_,
        __wbindgen_exn_store: q_,
        __wbindgen_export_2: G_,
        __wbindgen_free: Z_,
        __wbindgen_malloc: W_,
        __wbindgen_realloc: Q_,
        datafusioncontext_execute_sql: n_,
        datafusioncontext_greet: e_,
        datafusioncontext_new: t_,
        datafusioncontext_set_s3_config: r_,
        intounderlyingbytesource_autoAllocateChunkSize: p_,
        intounderlyingbytesource_cancel: m_,
        intounderlyingbytesource_pull: __,
        intounderlyingbytesource_start: g_,
        intounderlyingbytesource_type: d_,
        intounderlyingsink_abort: c_,
        intounderlyingsink_close: a_,
        intounderlyingsink_write: s_,
        intounderlyingsource_cancel: u_,
        intounderlyingsource_pull: o_,
        memory: qg,
        rust_zstd_wasm_shim_calloc: w_,
        rust_zstd_wasm_shim_free: E_,
        rust_zstd_wasm_shim_malloc: v_,
        rust_zstd_wasm_shim_memcmp: y_,
        rust_zstd_wasm_shim_memcpy: S_,
        rust_zstd_wasm_shim_memmove: k_,
        rust_zstd_wasm_shim_memset: C_,
        rust_zstd_wasm_shim_qsort: h_,
        wasm_bindgen__convert__closures__invoke1_mut__h483e8df57983c0fc: K_,
        wasm_bindgen__convert__closures__invoke1_mut__he75e6abfe046c9ea: Y_,
        wasm_bindgen__convert__closures__invoke2_mut__h58ef9e5f9bba9436: J_
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      sp(em);
      var Ic = {
        exports: {}
      };
      (function(e) {
        var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
        var n = function(r) {
          var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, o = 0, u = {}, i = {
            manual: r.Prism && r.Prism.manual,
            disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
            util: {
              encode: function s(c) {
                return c instanceof a ? new a(c.type, s(c.content), c.alias) : Array.isArray(c) ? c.map(s) : c.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              },
              type: function(s) {
                return Object.prototype.toString.call(s).slice(8, -1);
              },
              objId: function(s) {
                return s.__id || Object.defineProperty(s, "__id", {
                  value: ++o
                }), s.__id;
              },
              clone: function s(c, p) {
                p = p || {};
                var g, _;
                switch (i.util.type(c)) {
                  case "Object":
                    if (_ = i.util.objId(c), p[_]) return p[_];
                    g = {}, p[_] = g;
                    for (var y in c) c.hasOwnProperty(y) && (g[y] = s(c[y], p));
                    return g;
                  case "Array":
                    return _ = i.util.objId(c), p[_] ? p[_] : (g = [], p[_] = g, c.forEach(function(S, N) {
                      g[N] = s(S, p);
                    }), g);
                  default:
                    return c;
                }
              },
              getLanguage: function(s) {
                for (; s; ) {
                  var c = l.exec(s.className);
                  if (c) return c[1].toLowerCase();
                  s = s.parentElement;
                }
                return "none";
              },
              setLanguage: function(s, c) {
                s.className = s.className.replace(RegExp(l, "gi"), ""), s.classList.add("language-" + c);
              },
              currentScript: function() {
                if (typeof document > "u") return null;
                if (document.currentScript && document.currentScript.tagName === "SCRIPT") return document.currentScript;
                try {
                  throw new Error();
                } catch (g) {
                  var s = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack) || [])[1];
                  if (s) {
                    var c = document.getElementsByTagName("script");
                    for (var p in c) if (c[p].src == s) return c[p];
                  }
                  return null;
                }
              },
              isActive: function(s, c, p) {
                for (var g = "no-" + c; s; ) {
                  var _ = s.classList;
                  if (_.contains(c)) return true;
                  if (_.contains(g)) return false;
                  s = s.parentElement;
                }
                return !!p;
              }
            },
            languages: {
              plain: u,
              plaintext: u,
              text: u,
              txt: u,
              extend: function(s, c) {
                var p = i.util.clone(i.languages[s]);
                for (var g in c) p[g] = c[g];
                return p;
              },
              insertBefore: function(s, c, p, g) {
                g = g || i.languages;
                var _ = g[s], y = {};
                for (var S in _) if (_.hasOwnProperty(S)) {
                  if (S == c) for (var N in p) p.hasOwnProperty(N) && (y[N] = p[N]);
                  p.hasOwnProperty(S) || (y[S] = _[S]);
                }
                var I = g[s];
                return g[s] = y, i.languages.DFS(i.languages, function(B, me) {
                  me === I && B != s && (this[B] = y);
                }), y;
              },
              DFS: function s(c, p, g, _) {
                _ = _ || {};
                var y = i.util.objId;
                for (var S in c) if (c.hasOwnProperty(S)) {
                  p.call(c, S, c[S], g || S);
                  var N = c[S], I = i.util.type(N);
                  I === "Object" && !_[y(N)] ? (_[y(N)] = true, s(N, p, null, _)) : I === "Array" && !_[y(N)] && (_[y(N)] = true, s(N, p, S, _));
                }
              }
            },
            plugins: {},
            highlightAll: function(s, c) {
              i.highlightAllUnder(document, s, c);
            },
            highlightAllUnder: function(s, c, p) {
              var g = {
                callback: p,
                container: s,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
              };
              i.hooks.run("before-highlightall", g), g.elements = Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)), i.hooks.run("before-all-elements-highlight", g);
              for (var _ = 0, y; y = g.elements[_++]; ) i.highlightElement(y, c === true, g.callback);
            },
            highlightElement: function(s, c, p) {
              var g = i.util.getLanguage(s), _ = i.languages[g];
              i.util.setLanguage(s, g);
              var y = s.parentElement;
              y && y.nodeName.toLowerCase() === "pre" && i.util.setLanguage(y, g);
              var S = s.textContent, N = {
                element: s,
                language: g,
                grammar: _,
                code: S
              };
              function I(me) {
                N.highlightedCode = me, i.hooks.run("before-insert", N), N.element.innerHTML = N.highlightedCode, i.hooks.run("after-highlight", N), i.hooks.run("complete", N), p && p.call(N.element);
              }
              if (i.hooks.run("before-sanity-check", N), y = N.element.parentElement, y && y.nodeName.toLowerCase() === "pre" && !y.hasAttribute("tabindex") && y.setAttribute("tabindex", "0"), !N.code) {
                i.hooks.run("complete", N), p && p.call(N.element);
                return;
              }
              if (i.hooks.run("before-highlight", N), !N.grammar) {
                I(i.util.encode(N.code));
                return;
              }
              if (c && r.Worker) {
                var B = new Worker(i.filename);
                B.onmessage = function(me) {
                  I(me.data);
                }, B.postMessage(JSON.stringify({
                  language: N.language,
                  code: N.code,
                  immediateClose: true
                }));
              } else I(i.highlight(N.code, N.grammar, N.language));
            },
            highlight: function(s, c, p) {
              var g = {
                code: s,
                grammar: c,
                language: p
              };
              if (i.hooks.run("before-tokenize", g), !g.grammar) throw new Error('The language "' + g.language + '" has no grammar.');
              return g.tokens = i.tokenize(g.code, g.grammar), i.hooks.run("after-tokenize", g), a.stringify(i.util.encode(g.tokens), g.language);
            },
            tokenize: function(s, c) {
              var p = c.rest;
              if (p) {
                for (var g in p) c[g] = p[g];
                delete c.rest;
              }
              var _ = new h();
              return m(_, _.head, s), v(s, _, c, _.head, 0), T(_);
            },
            hooks: {
              all: {},
              add: function(s, c) {
                var p = i.hooks.all;
                p[s] = p[s] || [], p[s].push(c);
              },
              run: function(s, c) {
                var p = i.hooks.all[s];
                if (!(!p || !p.length)) for (var g = 0, _; _ = p[g++]; ) _(c);
              }
            },
            Token: a
          };
          r.Prism = i;
          function a(s, c, p, g) {
            this.type = s, this.content = c, this.alias = p, this.length = (g || "").length | 0;
          }
          a.stringify = function s(c, p) {
            if (typeof c == "string") return c;
            if (Array.isArray(c)) {
              var g = "";
              return c.forEach(function(I) {
                g += s(I, p);
              }), g;
            }
            var _ = {
              type: c.type,
              content: s(c.content, p),
              tag: "span",
              classes: [
                "token",
                c.type
              ],
              attributes: {},
              language: p
            }, y = c.alias;
            y && (Array.isArray(y) ? Array.prototype.push.apply(_.classes, y) : _.classes.push(y)), i.hooks.run("wrap", _);
            var S = "";
            for (var N in _.attributes) S += " " + N + '="' + (_.attributes[N] || "").replace(/"/g, "&quot;") + '"';
            return "<" + _.tag + ' class="' + _.classes.join(" ") + '"' + S + ">" + _.content + "</" + _.tag + ">";
          };
          function d(s, c, p, g) {
            s.lastIndex = c;
            var _ = s.exec(p);
            if (_ && g && _[1]) {
              var y = _[1].length;
              _.index += y, _[0] = _[0].slice(y);
            }
            return _;
          }
          function v(s, c, p, g, _, y) {
            for (var S in p) if (!(!p.hasOwnProperty(S) || !p[S])) {
              var N = p[S];
              N = Array.isArray(N) ? N : [
                N
              ];
              for (var I = 0; I < N.length; ++I) {
                if (y && y.cause == S + "," + I) return;
                var B = N[I], me = B.inside, ct = !!B.lookbehind, Cn = !!B.greedy, jl = B.alias;
                if (Cn && !B.pattern.global) {
                  var xn = B.pattern.toString().match(/[imsuy]*$/)[0];
                  B.pattern = RegExp(B.pattern.source, xn + "g");
                }
                for (var Qt = B.pattern || B, x = g.next, O = _; x !== c.tail && !(y && O >= y.reach); O += x.value.length, x = x.next) {
                  var D = x.value;
                  if (c.length > s.length) return;
                  if (!(D instanceof a)) {
                    var $ = 1, U;
                    if (Cn) {
                      if (U = d(Qt, O, s, ct), !U || U.index >= s.length) break;
                      var Le = U.index, Gt = U.index + U[0].length, ie = O;
                      for (ie += x.value.length; Le >= ie; ) x = x.next, ie += x.value.length;
                      if (ie -= x.value.length, O = ie, x.value instanceof a) continue;
                      for (var Ze = x; Ze !== c.tail && (ie < Gt || typeof Ze.value == "string"); Ze = Ze.next) $++, ie += Ze.value.length;
                      $--, D = s.slice(O, ie), U.index -= O;
                    } else if (U = d(Qt, 0, D, ct), !U) continue;
                    var Le = U.index, qe = U[0], Bl = D.slice(0, Le), li = D.slice(Le + qe.length), $l = O + D.length;
                    y && $l > y.reach && (y.reach = $l);
                    var hr = x.prev;
                    Bl && (hr = m(c, hr, Bl), O += Bl.length), C(c, hr, $);
                    var Ac = new a(S, me ? i.tokenize(qe, me) : qe, jl, qe);
                    if (x = m(c, hr, Ac), li && m(c, x, li), $ > 1) {
                      var bl = {
                        cause: S + "," + I,
                        reach: $l
                      };
                      v(s, c, p, x.prev, O, bl), y && bl.reach > y.reach && (y.reach = bl.reach);
                    }
                  }
                }
              }
            }
          }
          function h() {
            var s = {
              value: null,
              prev: null,
              next: null
            }, c = {
              value: null,
              prev: s,
              next: null
            };
            s.next = c, this.head = s, this.tail = c, this.length = 0;
          }
          function m(s, c, p) {
            var g = c.next, _ = {
              value: p,
              prev: c,
              next: g
            };
            return c.next = _, g.prev = _, s.length++, _;
          }
          function C(s, c, p) {
            for (var g = c.next, _ = 0; _ < p && g !== s.tail; _++) g = g.next;
            c.next = g, g.prev = c, s.length -= _;
          }
          function T(s) {
            for (var c = [], p = s.head.next; p !== s.tail; ) c.push(p.value), p = p.next;
            return c;
          }
          if (!r.document) return r.addEventListener && (i.disableWorkerMessageHandler || r.addEventListener("message", function(s) {
            var c = JSON.parse(s.data), p = c.language, g = c.code, _ = c.immediateClose;
            r.postMessage(i.highlight(g, i.languages[p], p)), _ && r.close();
          }, false)), i;
          var E = i.util.currentScript();
          E && (i.filename = E.src, E.hasAttribute("data-manual") && (i.manual = true));
          function P() {
            i.manual || i.highlightAll();
          }
          if (!i.manual) {
            var f = document.readyState;
            f === "loading" || f === "interactive" && E && E.defer ? document.addEventListener("DOMContentLoaded", P) : window.requestAnimationFrame ? window.requestAnimationFrame(P) : window.setTimeout(P, 16);
          }
          return i;
        }(t);
        e.exports && (e.exports = n), typeof oi < "u" && (oi.Prism = n), n.languages.markup = {
          comment: {
            pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
            greedy: true
          },
          prolog: {
            pattern: /<\?[\s\S]+?\?>/,
            greedy: true
          },
          doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: true,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: true,
                greedy: true,
                inside: null
              },
              string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: true
              },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/
            }
          },
          cdata: {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            greedy: true
          },
          tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: true,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                  punctuation: /^<\/?/,
                  namespace: /^[^\s>\/:]+:/
                }
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    {
                      pattern: /^(\s*)["']|["']$/,
                      lookbehind: true
                    }
                  ]
                }
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                  namespace: /^[^\s>\/:]+:/
                }
              }
            }
          },
          entity: [
            {
              pattern: /&[\da-z]{1,8};/i,
              alias: "named-entity"
            },
            /&#x?[\da-f]{1,8};/i
          ]
        }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(r) {
          r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
        }), Object.defineProperty(n.languages.markup.tag, "addInlined", {
          value: function(l, o) {
            var u = {};
            u["language-" + o] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: true,
              inside: n.languages[o]
            }, u.cdata = /^<!\[CDATA\[|\]\]>$/i;
            var i = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: u
              }
            };
            i["language-" + o] = {
              pattern: /[\s\S]+/,
              inside: n.languages[o]
            };
            var a = {};
            a[l] = {
              pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                return l;
              }), "i"),
              lookbehind: true,
              greedy: true,
              inside: i
            }, n.languages.insertBefore("markup", "cdata", a);
          }
        }), Object.defineProperty(n.languages.markup.tag, "addAttribute", {
          value: function(r, l) {
            n.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp(/(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
              lookbehind: true,
              inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: true,
                      alias: [
                        l,
                        "language-" + l
                      ],
                      inside: n.languages[l]
                    },
                    punctuation: [
                      {
                        pattern: /^=/,
                        alias: "attr-equals"
                      },
                      /"|'/
                    ]
                  }
                }
              }
            });
          }
        }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, function(r) {
          var l = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          r.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + l.source + ")*?" + /(?:;|(?=\s*\{))/.source),
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: true,
                  alias: "selector"
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: true
                }
              }
            },
            url: {
              pattern: RegExp("\\burl\\((?:" + l.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
              greedy: true,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                  pattern: RegExp("^" + l.source + "$"),
                  alias: "url"
                }
              }
            },
            selector: {
              pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + l.source + ")*(?=\\s*\\{)"),
              lookbehind: true
            },
            string: {
              pattern: l,
              greedy: true
            },
            property: {
              pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: true
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: true
            },
            punctuation: /[(){};:,]/
          }, r.languages.css.atrule.inside.rest = r.languages.css;
          var o = r.languages.markup;
          o && (o.tag.addInlined("style", "css"), o.tag.addAttribute("style", "css"));
        }(n), n.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: true,
              greedy: true
            },
            {
              pattern: /(^|[^\\:])\/\/.*/,
              lookbehind: true,
              greedy: true
            }
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
          },
          "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: true,
            inside: {
              punctuation: /[.\\]/
            }
          },
          keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/
        }, n.languages.javascript = n.languages.extend("clike", {
          "class-name": [
            n.languages.clike["class-name"],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: true
            }
          ],
          keyword: [
            {
              pattern: /((?:^|\})\s*)catch\b/,
              lookbehind: true
            },
            {
              pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: true
            }
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
            lookbehind: true
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
            lookbehind: true,
            greedy: true,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: true,
                alias: "language-regex",
                inside: n.languages.regex
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/
            }
          },
          "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
          },
          parameter: [
            {
              pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: true,
              inside: n.languages.javascript
            },
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: true,
              inside: n.languages.javascript
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: true,
              inside: n.languages.javascript
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: true,
              inside: n.languages.javascript
            }
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), n.languages.insertBefore("javascript", "string", {
          hashbang: {
            pattern: /^#!.*/,
            greedy: true,
            alias: "comment"
          },
          "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: true,
            inside: {
              "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
              },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: true,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation"
                  },
                  rest: n.languages.javascript
                }
              },
              string: /[\s\S]+/
            }
          },
          "string-property": {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: true,
            greedy: true,
            alias: "property"
          }
        }), n.languages.insertBefore("javascript", "operator", {
          "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: true,
            alias: "property"
          }
        }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), n.languages.js = n.languages.javascript, function() {
          if (typeof n > "u" || typeof document > "u") return;
          Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
          var r = "Loading\u2026", l = function(E, P) {
            return "\u2716 Error " + E + " while fetching file: " + P;
          }, o = "\u2716 Error: File does not exist or is empty", u = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
          }, i = "data-src-status", a = "loading", d = "loaded", v = "failed", h = "pre[data-src]:not([" + i + '="' + d + '"]):not([' + i + '="' + a + '"])';
          function m(E, P, f) {
            var s = new XMLHttpRequest();
            s.open("GET", E, true), s.onreadystatechange = function() {
              s.readyState == 4 && (s.status < 400 && s.responseText ? P(s.responseText) : s.status >= 400 ? f(l(s.status, s.statusText)) : f(o));
            }, s.send(null);
          }
          function C(E) {
            var P = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(E || "");
            if (P) {
              var f = Number(P[1]), s = P[2], c = P[3];
              return s ? c ? [
                f,
                Number(c)
              ] : [
                f,
                void 0
              ] : [
                f,
                f
              ];
            }
          }
          n.hooks.add("before-highlightall", function(E) {
            E.selector += ", " + h;
          }), n.hooks.add("before-sanity-check", function(E) {
            var P = E.element;
            if (P.matches(h)) {
              E.code = "", P.setAttribute(i, a);
              var f = P.appendChild(document.createElement("CODE"));
              f.textContent = r;
              var s = P.getAttribute("data-src"), c = E.language;
              if (c === "none") {
                var p = (/\.(\w+)$/.exec(s) || [
                  ,
                  "none"
                ])[1];
                c = u[p] || p;
              }
              n.util.setLanguage(f, c), n.util.setLanguage(P, c);
              var g = n.plugins.autoloader;
              g && g.loadLanguages(c), m(s, function(_) {
                P.setAttribute(i, d);
                var y = C(P.getAttribute("data-range"));
                if (y) {
                  var S = _.split(/\r\n?|\n/g), N = y[0], I = y[1] == null ? S.length : y[1];
                  N < 0 && (N += S.length), N = Math.max(0, Math.min(N - 1, S.length)), I < 0 && (I += S.length), I = Math.max(0, Math.min(I, S.length)), _ = S.slice(N, I).join(`
`), P.hasAttribute("data-start") || P.setAttribute("data-start", String(N + 1));
                }
                f.textContent = _, n.highlightElement(f);
              }, function(_) {
                P.setAttribute(i, v), f.textContent = _;
              });
            }
          }), n.plugins.fileHighlight = {
            highlight: function(P) {
              for (var f = (P || document).querySelectorAll(h), s = 0, c; c = f[s++]; ) n.highlightElement(c);
            }
          };
          var T = false;
          n.fileHighlight = function() {
            T || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), T = true), n.plugins.fileHighlight.highlight.apply(this, arguments);
          };
        }();
      })(Ic);
      var tm = Ic.exports;
      const nm = _s(tm);
      Prism.languages.sql = {
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
          lookbehind: true
        },
        variable: [
          {
            pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
            greedy: true
          },
          /@[\w.$]+/
        ],
        string: {
          pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
          greedy: true,
          lookbehind: true
        },
        identifier: {
          pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
          greedy: true,
          lookbehind: true,
          inside: {
            punctuation: /^`|`$/
          }
        },
        function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
        keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
        boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
        number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
        operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
        punctuation: /[;[\]()`,.]/
      };
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      function rm(e) {
        const t = e.split(`
`).filter((l) => l.trim() !== ""), n = [];
        let r = [];
        for (const l of t) if (!l.startsWith("+") && l.startsWith("|")) {
          const o = l.split("|").slice(1, -1).map((u) => u.trim());
          if (r.length === 0) r = o;
          else {
            const u = {};
            o.forEach((i, a) => {
              const d = r[a];
              u[d] = lm(i);
            }), n.push(u);
          }
        }
        return n;
      }
      function lm(e) {
        const t = e.trim();
        if (!t) return "";
        const n = Number(t);
        return isNaN(n) ? t : n;
      }
      function om({ history: e }) {
        return Ut.useEffect(() => {
          nm.highlightAll();
        }), ne.jsx("div", {
          children: e.reverse().map((t) => ne.jsxs("div", {
            children: [
              ne.jsxs("div", {
                className: "query-div",
                children: [
                  ne.jsx("div", {
                    style: {
                      paddingRight: "0.5rem",
                      width: "fit-content"
                    },
                    children: "Datafusion >"
                  }),
                  ne.jsx("code", {
                    className: "language-sql query-input",
                    children: t.input
                  })
                ]
              }),
              t.output && ne.jsx("div", {
                children: t.output
              }),
              t.err && ne.jsx("div", {
                children: t.err
              })
            ]
          }))
        });
      }
      function um({ setHistory: e, history: t }) {
        const [n, r] = Ut.useState(""), [l, o] = Ut.useState(-1), u = (i) => {
          sm.execute_sql(n).then((d) => {
            console.log(d), e([
              ...t,
              {
                input: n,
                output: d
              }
            ]), console.log("convertTableToJson", rm(d));
          }).catch((d) => {
            e([
              ...t,
              {
                input: n,
                err: d
              }
            ]);
          }), r(""), o(-1), i.preventDefault();
        };
        return ne.jsxs("div", {
          className: "input-div",
          children: [
            ne.jsx("div", {
              style: {
                paddingRight: "0.5rem",
                width: "fit-content"
              },
              children: "Datafusion >"
            }),
            ne.jsx("form", {
              onSubmit: u,
              className: "input-form",
              children: ne.jsx("input", {
                type: "text",
                value: n,
                tabIndex: 0,
                onInput: (i) => {
                  console.log("event", i), r(i.target.value);
                },
                onKeyDown: (i) => {
                  if (console.log("key pressed", i.key), i.key == "ArrowUp") {
                    const a = Math.min(l + 1, t.length - 1);
                    o(a), console.log("historycursor", t[a].input), r(t[a].input);
                  }
                  if (i.key == "ArrowDown") {
                    const a = Math.min(l - 1, 0);
                    o(a), r(t[a].input);
                  }
                },
                onBlur: (i) => {
                  i.relatedTarget === null && i.target.focus();
                },
                autoFocus: true
              })
            })
          ]
        });
      }
      function im() {
        const [e, t] = Ut.useState([]);
        return ne.jsxs("div", {
          className: "datafusion-shell",
          children: [
            ne.jsx(om, {
              history: e
            }),
            ne.jsx(um, {
              history: e,
              setHistory: t
            })
          ]
        });
      }
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      console.log(fr.greet());
      const sm = fr.new();
      function am() {
        return ne.jsx("div", {
          className: "full-screen-div",
          children: ne.jsx(im, {})
        });
      }
      globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || {
        cache: /* @__PURE__ */ new Map(),
        get(e, t) {
          return this.cache.has(e) ? this.cache.get(e) : (this.cache.set(e, t), t);
        }
      };
      mo.createRoot(document.getElementById("root")).render(ne.jsx(Gc.StrictMode, {
        children: ne.jsx(am, {})
      }));
    })();
  }
});
export default require_stdin();
