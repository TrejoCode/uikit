import React, { forwardRef } from "react";

/**
 * @description Design system colors
 */
const colors = {
  primary: {
    base: "#3E816D",
    darken: "#316757",
    lighten: "#649A8A",
  },
  "primary-alt": {
    base: "#288091",
    darken: "#206674",
    lighten: "#5299A7",
  },
  secondary: {
    base: "#263D54",
    darken: "#1E3043",
    lighten: "#516376",
  },
  "secondary-alt": {
    base: "#516376",
    darken: "#404F5E",
    lighten: "#738291",
  },
  success: {
    base: "#008537",
    darken: "#006A2C",
    lighten: "#329D5E",
  },
  warning: {
    base: "#706700",
    darken: "#595200",
    lighten: "#8C8532",
  },
  danger: {
    base: "#C0392B",
    darken: "#992D22",
    lighten: "#CC6055",
  },
  info: {
    base: "#207B8D",
    darken: "#196270",
    lighten: "#4C95A3",
  },
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

typeof SuppressedError === "function"
  ? SuppressedError
  : function (error, suppressed, message) {
      var e = new Error(message);
      return (
        (e.name = "SuppressedError"),
        (e.error = error),
        (e.suppressed = suppressed),
        e
      );
    };

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
    ? x["default"]
    : x;
}

var jsxRuntime = { exports: {} };

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production() {
  if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
  hasRequiredReactJsxRuntime_production = 1;
  var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
    REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
  function jsxProd(type, config, maybeKey) {
    var key = null;
    void 0 !== maybeKey && (key = "" + maybeKey);
    void 0 !== config.key && (key = "" + config.key);
    if ("key" in config) {
      maybeKey = {};
      for (var propName in config)
        "key" !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    config = maybeKey.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key,
      ref: void 0 !== config ? config : null,
      props: maybeKey,
    };
  }
  reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_production.jsx = jsxProd;
  reactJsxRuntime_production.jsxs = jsxProd;
  return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development)
    return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  "production" !== process.env.NODE_ENV &&
    (function () {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE
            ? null
            : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch (
            ("number" === typeof type.tag &&
              console.error(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
              ),
            type.$$typeof)
          ) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type ||
                ((type = innerType.displayName || innerType.name || ""),
                (type =
                  "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
              return type;
            case REACT_MEMO_TYPE:
              return (
                (innerType = type.displayName || null),
                null !== innerType
                  ? innerType
                  : getComponentNameFromType(type.type) || "Memo"
              );
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {}
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = !1;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 =
            ("function" === typeof Symbol &&
              Symbol.toStringTag &&
              value[Symbol.toStringTag]) ||
            value.constructor.name ||
            "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0,
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if (
          "object" === typeof type &&
          null !== type &&
          type.$$typeof === REACT_LAZY_TYPE
        )
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown ||
            ((specialPropKeyWarningShown = true),
            console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName,
            ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true,
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] ||
          ((didWarnAboutElementRef[componentName] = true),
          console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
          ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(
        type,
        key,
        self,
        source,
        owner,
        props,
        debugStack,
        debugTask,
      ) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type: type,
          key: key,
          props: props,
          _owner: owner,
        };
        null !== (void 0 !== self ? self : null)
          ? Object.defineProperty(type, "ref", {
              enumerable: false,
              get: elementRefGetterWithDeprecationWarning,
            })
          : Object.defineProperty(type, "ref", {
              enumerable: false,
              value: null,
            });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0,
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null,
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack,
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask,
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(
        type,
        config,
        maybeKey,
        isStaticChildren,
        source,
        self,
        debugStack,
        debugTask,
      ) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (
                isStaticChildren = 0;
                isStaticChildren < children.length;
                isStaticChildren++
              )
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function (k) {
            return "key" !== k;
          });
          isStaticChildren =
            0 < keys.length
              ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
              : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] ||
            ((keys =
              0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
            console.error(
              'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
              isStaticChildren,
              children,
              keys,
              children,
            ),
            (didWarnAboutKeySpread[children + isStaticChildren] = true));
        }
        children = null;
        void 0 !== maybeKey &&
          (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (children = "" + config.key));
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children &&
          defineKeyPropWarningGetter(
            maybeKey,
            "function" === typeof type
              ? type.displayName || type.name || "Unknown"
              : type,
          );
        return ReactElement(
          type,
          children,
          self,
          source,
          getOwner(),
          maybeKey,
          debugStack,
          debugTask,
        );
      }
      function validateChildKeys(node) {
        "object" === typeof node &&
          null !== node &&
          node.$$typeof === REACT_ELEMENT_TYPE &&
          node._store &&
          (node._store.validated = 1);
      }
      var React$1 = React,
        REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
        REACT_PORTAL_TYPE = Symbol.for("react.portal"),
        REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
        REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
        REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
        REACT_CONTEXT_TYPE = Symbol.for("react.context"),
        REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
        REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
        REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
        REACT_MEMO_TYPE = Symbol.for("react.memo"),
        REACT_LAZY_TYPE = Symbol.for("react.lazy"),
        REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
        REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
        ReactSharedInternals =
          React$1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        isArrayImpl = Array.isArray,
        createTask = console.createTask
          ? console.createTask
          : function () {
              return null;
            };
      React$1 = {
        react_stack_bottom_frame: function (callStackForError) {
          return callStackForError();
        },
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React$1.react_stack_bottom_frame.bind(
        React$1,
        UnknownOwner,
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = function (
        type,
        config,
        maybeKey,
        source,
        self,
      ) {
        var trackActualOwner =
          1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          source,
          self,
          trackActualOwner
            ? Error("react-stack-top-frame")
            : unknownOwnerDebugStack,
          trackActualOwner
            ? createTask(getTaskName(type))
            : unknownOwnerDebugTask,
        );
      };
      reactJsxRuntime_development.jsxs = function (
        type,
        config,
        maybeKey,
        source,
        self,
      ) {
        var trackActualOwner =
          1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          source,
          self,
          trackActualOwner
            ? Error("react-stack-top-frame")
            : unknownOwnerDebugStack,
          trackActualOwner
            ? createTask(getTaskName(type))
            : unknownOwnerDebugTask,
        );
      };
    })();
  return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;

  if (process.env.NODE_ENV === "production") {
    jsxRuntime.exports = requireReactJsxRuntime_production();
  } else {
    jsxRuntime.exports = requireReactJsxRuntime_development();
  }
  return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var propTypes = { exports: {} };

var reactIs = { exports: {} };

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (((a = a.type), a)) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return (
      "string" === typeof a ||
      "function" === typeof a ||
      a === e ||
      a === m ||
      a === g ||
      a === f ||
      a === p ||
      a === q ||
      ("object" === typeof a &&
        null !== a &&
        (a.$$typeof === t ||
          a.$$typeof === r ||
          a.$$typeof === h ||
          a.$$typeof === k ||
          a.$$typeof === n ||
          a.$$typeof === w ||
          a.$$typeof === x ||
          a.$$typeof === y ||
          a.$$typeof === v))
    );
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;

  if (process.env.NODE_ENV !== "production") {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for("react.async_mode")
        : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for("react.suspense_list")
        : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for("react.fundamental")
        : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for("react.responder")
        : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API.",
            );
          }
        }

        return (
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;

  if (process.env.NODE_ENV === "production") {
    reactIs.exports = requireReactIs_production_min();
  } else {
    reactIs.exports = requireReactIs_development();
  }
  return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined",
      );
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function (letter) {
        test3[letter] = letter;
      });
      if (
        Object.keys(Object.assign({}, test3)).join("") !==
        "abcdefghijklmnopqrst"
      ) {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
  return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;

  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;

  var printWarning = function () {};

  if (process.env.NODE_ENV !== "production") {
    var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = /*@__PURE__*/ requireHas();

    printWarning = function (text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {
        /**/
      }
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack,
  ) {
    if (process.env.NODE_ENV !== "production") {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") +
                  ": " +
                  location +
                  " type `" +
                  typeSpecName +
                  "` is invalid; " +
                  "it must be a function, usually from the `prop-types` package, but received `" +
                  typeof typeSpecs[typeSpecName] +
                  "`." +
                  "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret,
            );
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") +
                ": type specification of " +
                location +
                " `" +
                typeSpecName +
                "` is invalid; the type checker " +
                "function must return `null` or an `Error` but returned a " +
                typeof error +
                ". " +
                "You may have forgotten to pass an argument to the type checker " +
                "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                "shape all require an argument).",
            );
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : "";

            printWarning(
              "Failed " +
                location +
                " type: " +
                error.message +
                (stack != null ? stack : ""),
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== "production") {
      loggedTypeFailures = {};
    }
  };

  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;

  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();

  var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
  var has = /*@__PURE__*/ requireHas();
  var checkPropTypes = /*@__PURE__*/ requireCheckPropTypes();

  var printWarning = function () {};

  if (process.env.NODE_ENV !== "production") {
    printWarning = function (text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = "<<anonymous>>";

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === "object" ? data : {};
      this.stack = "";
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== "production") {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret,
      ) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                "Use `PropTypes.checkPropTypes()` to call them. " +
                "Read more at http://fb.me/use-check-prop-types",
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (
            process.env.NODE_ENV !== "production" &&
            typeof console !== "undefined"
          ) {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ":" + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                "You are manually calling a React.PropTypes validation " +
                  "function for the `" +
                  propFullName +
                  "` prop on `" +
                  componentName +
                  "`. This is deprecated " +
                  "and will throw in the standalone `prop-types` package. " +
                  "You may be seeing this warning due to a third-party PropTypes " +
                  "library. See https://fb.me/react-warning-dont-call-proptypes " +
                  "for details.",
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required " +
                  ("in `" + componentName + "`, but its value is `null`."),
              );
            }
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required in " +
                ("`" + componentName + "`, but its value is `undefined`."),
            );
          }
          return null;
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName,
          );
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret,
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                preciseType +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("`" + expectedType + "`."),
            { expectedType: expectedType },
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside arrayOf.",
          );
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an array."),
          );
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + "[" + i + "]",
            ReactPropTypesSecret,
          );
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement."),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement type."),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                actualClassName +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("instance of `" + expectedClassName + "`."),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== "production") {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " +
                arguments.length +
                " arguments. " +
                "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).",
            );
          } else {
            printWarning(
              "Invalid argument supplied to oneOf, expected an array.",
            );
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(
          expectedValues,
          function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          },
        );
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of value `" +
            String(propValue) +
            "` " +
            ("supplied to `" +
              componentName +
              "`, expected one of " +
              valuesString +
              "."),
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside objectOf.",
          );
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an object."),
          );
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret,
            );
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== "production"
          ? printWarning(
              "Invalid argument supplied to oneOfType, expected an instance of array.",
            )
          : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
              "received " +
              getPostfixForTypeWarning(checker) +
              " at index " +
              i +
              ".",
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret,
          );
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage =
          expectedTypes.length > 0
            ? ", expected one of type [" + expectedTypes.join(", ") + "]"
            : "";
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`" + expectedTypesMessage + "."),
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`, expected a ReactNode."),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function invalidValidatorError(
      componentName,
      location,
      propFullName,
      key,
      type,
    ) {
      return new PropTypeError(
        (componentName || "React class") +
          ": " +
          location +
          " type `" +
          propFullName +
          "." +
          key +
          "` is invalid; " +
          "it must be a function, usually from the `prop-types` package, but received `" +
          type +
          "`.",
      );
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`."),
          );
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker),
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret,
          );
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`."),
          );
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker),
            );
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` key `" +
                key +
                "` supplied to `" +
                componentName +
                "`." +
                "\nBad object: " +
                JSON.stringify(props[propName], null, "  ") +
                "\nValid keys: " +
                JSON.stringify(Object.keys(shapeTypes), null, "  "),
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret,
          );
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === "symbol") {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;

  var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  factoryWithThrowingShims = function () {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret,
    ) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
          "Use PropTypes.checkPropTypes() to call them. " +
          "Read more at http://fb.me/use-check-prop-types",
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredPropTypes;

function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  if (process.env.NODE_ENV !== "production") {
    var ReactIs = requireReactIs();

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    propTypes.exports = /*@__PURE__*/ requireFactoryWithTypeCheckers()(
      ReactIs.isElement,
      throwOnDirectAccess,
    );
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = /*@__PURE__*/ requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}

var propTypesExports = /*@__PURE__*/ requirePropTypes();
var PropTypes = /*@__PURE__*/ getDefaultExportFromCjs(propTypesExports);

function _extends$4u() {
  _extends$4u =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4u.apply(this, arguments);
}

function _objectWithoutProperties$4u(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4u(source, excluded);
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

function _objectWithoutPropertiesLoose$4u(source, excluded) {
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
var Activity = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4u(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4u(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "22 12 18 12 15 21 9 3 6 12 2 12",
    }),
  );
});
Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Activity.displayName = "Activity";

function _extends$4t() {
  _extends$4t =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4t.apply(this, arguments);
}

function _objectWithoutProperties$4t(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4t(source, excluded);
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

function _objectWithoutPropertiesLoose$4t(source, excluded) {
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
var Airplay = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4t(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4t(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
    }),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "12 15 17 21 7 21 12 15",
    }),
  );
});
Airplay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Airplay.displayName = "Airplay";

function _extends$4s() {
  _extends$4s =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4s.apply(this, arguments);
}

function _objectWithoutProperties$4s(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4s(source, excluded);
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

function _objectWithoutPropertiesLoose$4s(source, excluded) {
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
var AlertCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4s(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4s(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16",
    }),
  );
});
AlertCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlertCircle.displayName = "AlertCircle";

function _extends$4r() {
  _extends$4r =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4r.apply(this, arguments);
}

function _objectWithoutProperties$4r(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4r(source, excluded);
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

function _objectWithoutPropertiesLoose$4r(source, excluded) {
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
var AlertOctagon = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4r(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4r(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points:
        "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16",
    }),
  );
});
AlertOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlertOctagon.displayName = "AlertOctagon";

function _extends$4q() {
  _extends$4q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4q.apply(this, arguments);
}

function _objectWithoutProperties$4q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4q(source, excluded);
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

function _objectWithoutPropertiesLoose$4q(source, excluded) {
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
var AlertTriangle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17",
    }),
  );
});
AlertTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlertTriangle.displayName = "AlertTriangle";

function _extends$4p() {
  _extends$4p =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4p.apply(this, arguments);
}

function _objectWithoutProperties$4p(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4p(source, excluded);
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

function _objectWithoutPropertiesLoose$4p(source, excluded) {
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
var AlignCenter = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4p(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4p(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "10",
      x2: "6",
      y2: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "18",
      x2: "6",
      y2: "18",
    }),
  );
});
AlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlignCenter.displayName = "AlignCenter";

function _extends$4o() {
  _extends$4o =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4o.apply(this, arguments);
}

function _objectWithoutProperties$4o(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4o(source, excluded);
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

function _objectWithoutPropertiesLoose$4o(source, excluded) {
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
var AlignJustify = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4o(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4o(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "10",
      x2: "3",
      y2: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "18",
      x2: "3",
      y2: "18",
    }),
  );
});
AlignJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlignJustify.displayName = "AlignJustify";

function _extends$4n() {
  _extends$4n =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4n.apply(this, arguments);
}

function _objectWithoutProperties$4n(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4n(source, excluded);
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

function _objectWithoutPropertiesLoose$4n(source, excluded) {
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
var AlignLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4n(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4n(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "10",
      x2: "3",
      y2: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "18",
      x2: "3",
      y2: "18",
    }),
  );
});
AlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlignLeft.displayName = "AlignLeft";

function _extends$4m() {
  _extends$4m =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4m.apply(this, arguments);
}

function _objectWithoutProperties$4m(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4m(source, excluded);
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

function _objectWithoutPropertiesLoose$4m(source, excluded) {
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
var AlignRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4m(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4m(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "10",
      x2: "7",
      y2: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "6",
      x2: "3",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "14",
      x2: "3",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "18",
      x2: "7",
      y2: "18",
    }),
  );
});
AlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlignRight.displayName = "AlignRight";

function _extends$4l() {
  _extends$4l =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4l.apply(this, arguments);
}

function _objectWithoutProperties$4l(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4l(source, excluded);
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

function _objectWithoutPropertiesLoose$4l(source, excluded) {
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
var Anchor = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4l(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4l(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "5",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "8",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 12H2a10 10 0 0 0 20 0h-3",
    }),
  );
});
Anchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Anchor.displayName = "Anchor";

function _extends$4k() {
  _extends$4k =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4k.apply(this, arguments);
}

function _objectWithoutProperties$4k(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4k(source, excluded);
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

function _objectWithoutPropertiesLoose$4k(source, excluded) {
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
var Aperture = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4k(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4k(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14.31",
      y1: "8",
      x2: "20.05",
      y2: "17.94",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9.69",
      y1: "8",
      x2: "21.17",
      y2: "8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "7.38",
      y1: "12",
      x2: "13.12",
      y2: "2.06",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9.69",
      y1: "16",
      x2: "3.95",
      y2: "6.06",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14.31",
      y1: "16",
      x2: "2.83",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16.62",
      y1: "12",
      x2: "10.88",
      y2: "21.94",
    }),
  );
});
Aperture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Aperture.displayName = "Aperture";

function _extends$4j() {
  _extends$4j =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4j.apply(this, arguments);
}

function _objectWithoutProperties$4j(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4j(source, excluded);
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

function _objectWithoutPropertiesLoose$4j(source, excluded) {
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
var Archive = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4j(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4j(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "21 8 21 21 3 21 3 8",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "1",
      y: "3",
      width: "22",
      height: "5",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "10",
      y1: "12",
      x2: "14",
      y2: "12",
    }),
  );
});
Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Archive.displayName = "Archive";

function _extends$4i() {
  _extends$4i =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4i.apply(this, arguments);
}

function _objectWithoutProperties$4i(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4i(source, excluded);
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

function _objectWithoutPropertiesLoose$4i(source, excluded) {
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
var ArrowDownCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4i(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4i(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "8 12 12 16 16 12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16",
    }),
  );
});
ArrowDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowDownCircle.displayName = "ArrowDownCircle";

function _extends$4h() {
  _extends$4h =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4h.apply(this, arguments);
}

function _objectWithoutProperties$4h(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4h(source, excluded);
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

function _objectWithoutPropertiesLoose$4h(source, excluded) {
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
var ArrowDownLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4h(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4h(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "7",
      x2: "7",
      y2: "17",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 17 7 17 7 7",
    }),
  );
});
ArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowDownLeft.displayName = "ArrowDownLeft";

function _extends$4g() {
  _extends$4g =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4g.apply(this, arguments);
}

function _objectWithoutProperties$4g(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4g(source, excluded);
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

function _objectWithoutPropertiesLoose$4g(source, excluded) {
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
var ArrowDownRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4g(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4g(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "7",
      y1: "7",
      x2: "17",
      y2: "17",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 7 17 17 7 17",
    }),
  );
});
ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowDownRight.displayName = "ArrowDownRight";

function _extends$4f() {
  _extends$4f =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4f.apply(this, arguments);
}

function _objectWithoutProperties$4f(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4f(source, excluded);
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

function _objectWithoutPropertiesLoose$4f(source, excluded) {
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
var ArrowDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4f(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4f(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "19 12 12 19 5 12",
    }),
  );
});
ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowDown.displayName = "ArrowDown";

function _extends$4e() {
  _extends$4e =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4e.apply(this, arguments);
}

function _objectWithoutProperties$4e(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4e(source, excluded);
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

function _objectWithoutPropertiesLoose$4e(source, excluded) {
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
var ArrowLeftCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4e(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4e(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "12 8 8 12 12 16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "12",
      x2: "8",
      y2: "12",
    }),
  );
});
ArrowLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowLeftCircle.displayName = "ArrowLeftCircle";

function _extends$4d() {
  _extends$4d =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4d.apply(this, arguments);
}

function _objectWithoutProperties$4d(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4d(source, excluded);
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

function _objectWithoutPropertiesLoose$4d(source, excluded) {
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
var ArrowLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4d(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4d(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "12 19 5 12 12 5",
    }),
  );
});
ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowLeft.displayName = "ArrowLeft";

function _extends$4c() {
  _extends$4c =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4c.apply(this, arguments);
}

function _objectWithoutProperties$4c(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4c(source, excluded);
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

function _objectWithoutPropertiesLoose$4c(source, excluded) {
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
var ArrowRightCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4c(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4c(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "12 16 16 12 12 8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
});
ArrowRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowRightCircle.displayName = "ArrowRightCircle";

function _extends$4b() {
  _extends$4b =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4b.apply(this, arguments);
}

function _objectWithoutProperties$4b(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4b(source, excluded);
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

function _objectWithoutPropertiesLoose$4b(source, excluded) {
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
var ArrowRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4b(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4b(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "12 5 19 12 12 19",
    }),
  );
});
ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowRight.displayName = "ArrowRight";

function _extends$4a() {
  _extends$4a =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4a.apply(this, arguments);
}

function _objectWithoutProperties$4a(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4a(source, excluded);
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

function _objectWithoutPropertiesLoose$4a(source, excluded) {
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
var ArrowUpCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4a(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4a(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 12 12 8 8 12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "8",
    }),
  );
});
ArrowUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowUpCircle.displayName = "ArrowUpCircle";

function _extends$49() {
  _extends$49 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$49.apply(this, arguments);
}

function _objectWithoutProperties$49(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$49(source, excluded);
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

function _objectWithoutPropertiesLoose$49(source, excluded) {
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
var ArrowUpLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$49(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$49(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "17",
      x2: "7",
      y2: "7",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7 17 7 7 17 7",
    }),
  );
});
ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowUpLeft.displayName = "ArrowUpLeft";

function _extends$48() {
  _extends$48 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$48.apply(this, arguments);
}

function _objectWithoutProperties$48(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$48(source, excluded);
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

function _objectWithoutPropertiesLoose$48(source, excluded) {
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
var ArrowUpRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$48(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$48(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "7",
      y1: "17",
      x2: "17",
      y2: "7",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7 7 17 7 17 17",
    }),
  );
});
ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowUpRight.displayName = "ArrowUpRight";

function _extends$47() {
  _extends$47 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$47.apply(this, arguments);
}

function _objectWithoutProperties$47(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$47(source, excluded);
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

function _objectWithoutPropertiesLoose$47(source, excluded) {
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
var ArrowUp = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$47(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$47(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "5",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "5 12 12 5 19 12",
    }),
  );
});
ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowUp.displayName = "ArrowUp";

function _extends$46() {
  _extends$46 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$46.apply(this, arguments);
}

function _objectWithoutProperties$46(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$46(source, excluded);
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

function _objectWithoutPropertiesLoose$46(source, excluded) {
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
var AtSign = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$46(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$46(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94",
    }),
  );
});
AtSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AtSign.displayName = "AtSign";

function _extends$45() {
  _extends$45 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$45.apply(this, arguments);
}

function _objectWithoutProperties$45(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$45(source, excluded);
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

function _objectWithoutPropertiesLoose$45(source, excluded) {
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
var Award = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$45(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$45(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "7",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88",
    }),
  );
});
Award.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Award.displayName = "Award";

function _extends$44() {
  _extends$44 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$44.apply(this, arguments);
}

function _objectWithoutProperties$44(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$44(source, excluded);
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

function _objectWithoutPropertiesLoose$44(source, excluded) {
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
var BarChart2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$44(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$44(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "14",
    }),
  );
});
BarChart2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
BarChart2.displayName = "BarChart2";

function _extends$43() {
  _extends$43 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$43.apply(this, arguments);
}

function _objectWithoutProperties$43(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$43(source, excluded);
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

function _objectWithoutPropertiesLoose$43(source, excluded) {
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
var BarChart = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$43(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$43(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "16",
    }),
  );
});
BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
BarChart.displayName = "BarChart";

function _extends$42() {
  _extends$42 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$42.apply(this, arguments);
}

function _objectWithoutProperties$42(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$42(source, excluded);
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

function _objectWithoutPropertiesLoose$42(source, excluded) {
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
var BatteryCharging = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$42(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$42(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "13",
      x2: "23",
      y2: "11",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "11 6 7 12 13 12 9 18",
    }),
  );
});
BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
BatteryCharging.displayName = "BatteryCharging";

function _extends$41() {
  _extends$41 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$41.apply(this, arguments);
}

function _objectWithoutProperties$41(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$41(source, excluded);
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

function _objectWithoutPropertiesLoose$41(source, excluded) {
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
var Battery = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$41(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$41(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "1",
      y: "6",
      width: "18",
      height: "12",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "13",
      x2: "23",
      y2: "11",
    }),
  );
});
Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Battery.displayName = "Battery";

function _extends$40() {
  _extends$40 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$40.apply(this, arguments);
}

function _objectWithoutProperties$40(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$40(source, excluded);
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

function _objectWithoutPropertiesLoose$40(source, excluded) {
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
var BellOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$40(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$40(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M13.73 21a2 2 0 0 1-3.46 0",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18.63 13A17.89 17.89 0 0 1 18 8",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 8a6 6 0 0 0-9.33-5",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
  );
});
BellOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
BellOff.displayName = "BellOff";

function _extends$3$() {
  _extends$3$ =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3$.apply(this, arguments);
}

function _objectWithoutProperties$3$(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3$(source, excluded);
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

function _objectWithoutPropertiesLoose$3$(source, excluded) {
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
var Bell = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3$(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3$(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M13.73 21a2 2 0 0 1-3.46 0",
    }),
  );
});
Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Bell.displayName = "Bell";

function _extends$3_() {
  _extends$3_ =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3_.apply(this, arguments);
}

function _objectWithoutProperties$3_(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3_(source, excluded);
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

function _objectWithoutPropertiesLoose$3_(source, excluded) {
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
var Bluetooth = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3_(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3_(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5",
    }),
  );
});
Bluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Bluetooth.displayName = "Bluetooth";

function _extends$3Z() {
  _extends$3Z =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3Z.apply(this, arguments);
}

function _objectWithoutProperties$3Z(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3Z(source, excluded);
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

function _objectWithoutPropertiesLoose$3Z(source, excluded) {
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
var Bold = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3Z(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3Z(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
    }),
  );
});
Bold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Bold.displayName = "Bold";

function _extends$3Y() {
  _extends$3Y =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3Y.apply(this, arguments);
}

function _objectWithoutProperties$3Y(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3Y(source, excluded);
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

function _objectWithoutPropertiesLoose$3Y(source, excluded) {
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
var BookOpen = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3Y(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3Y(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    }),
  );
});
BookOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
BookOpen.displayName = "BookOpen";

function _extends$3X() {
  _extends$3X =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3X.apply(this, arguments);
}

function _objectWithoutProperties$3X(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3X(source, excluded);
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

function _objectWithoutPropertiesLoose$3X(source, excluded) {
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
var Book = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3X(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3X(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
    }),
  );
});
Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Book.displayName = "Book";

function _extends$3W() {
  _extends$3W =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3W.apply(this, arguments);
}

function _objectWithoutProperties$3W(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3W(source, excluded);
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

function _objectWithoutPropertiesLoose$3W(source, excluded) {
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
var Bookmark = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3W(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3W(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
    }),
  );
});
Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Bookmark.displayName = "Bookmark";

function _extends$3V() {
  _extends$3V =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3V.apply(this, arguments);
}

function _objectWithoutProperties$3V(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3V(source, excluded);
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

function _objectWithoutPropertiesLoose$3V(source, excluded) {
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
var Box = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3V(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3V(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "3.27 6.96 12 12.01 20.73 6.96",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12",
    }),
  );
});
Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Box.displayName = "Box";

function _extends$3U() {
  _extends$3U =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3U.apply(this, arguments);
}

function _objectWithoutProperties$3U(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3U(source, excluded);
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

function _objectWithoutPropertiesLoose$3U(source, excluded) {
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
var Briefcase = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3U(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3U(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    }),
  );
});
Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Briefcase.displayName = "Briefcase";

function _extends$3T() {
  _extends$3T =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3T.apply(this, arguments);
}

function _objectWithoutProperties$3T(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3T(source, excluded);
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

function _objectWithoutPropertiesLoose$3T(source, excluded) {
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
var Calendar = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3T(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3T(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10",
    }),
  );
});
Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Calendar.displayName = "Calendar";

function _extends$3S() {
  _extends$3S =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3S.apply(this, arguments);
}

function _objectWithoutProperties$3S(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3S(source, excluded);
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

function _objectWithoutPropertiesLoose$3S(source, excluded) {
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
var CameraOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3S(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3S(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56",
    }),
  );
});
CameraOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CameraOff.displayName = "CameraOff";

function _extends$3R() {
  _extends$3R =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3R.apply(this, arguments);
}

function _objectWithoutProperties$3R(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3R(source, excluded);
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

function _objectWithoutPropertiesLoose$3R(source, excluded) {
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
var Camera = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3R(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3R(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "13",
      r: "4",
    }),
  );
});
Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Camera.displayName = "Camera";

function _extends$3Q() {
  _extends$3Q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3Q.apply(this, arguments);
}

function _objectWithoutProperties$3Q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3Q(source, excluded);
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

function _objectWithoutPropertiesLoose$3Q(source, excluded) {
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
var Cast = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3Q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3Q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "2",
      y1: "20",
      x2: "2.01",
      y2: "20",
    }),
  );
});
Cast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Cast.displayName = "Cast";

function _extends$3P() {
  _extends$3P =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3P.apply(this, arguments);
}

function _objectWithoutProperties$3P(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3P(source, excluded);
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

function _objectWithoutPropertiesLoose$3P(source, excluded) {
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
var CheckCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3P(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3P(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "22 4 12 14.01 9 11.01",
    }),
  );
});
CheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CheckCircle.displayName = "CheckCircle";

function _extends$3O() {
  _extends$3O =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3O.apply(this, arguments);
}

function _objectWithoutProperties$3O(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3O(source, excluded);
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

function _objectWithoutPropertiesLoose$3O(source, excluded) {
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
var CheckSquare = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3O(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3O(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "9 11 12 14 22 4",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    }),
  );
});
CheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CheckSquare.displayName = "CheckSquare";

function _extends$3N() {
  _extends$3N =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3N.apply(this, arguments);
}

function _objectWithoutProperties$3N(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3N(source, excluded);
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

function _objectWithoutPropertiesLoose$3N(source, excluded) {
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
var Check = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3N(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3N(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "20 6 9 17 4 12",
    }),
  );
});
Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Check.displayName = "Check";

function _extends$3M() {
  _extends$3M =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3M.apply(this, arguments);
}

function _objectWithoutProperties$3M(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3M(source, excluded);
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

function _objectWithoutPropertiesLoose$3M(source, excluded) {
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
var ChevronDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3M(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3M(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "6 9 12 15 18 9",
    }),
  );
});
ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ChevronDown.displayName = "ChevronDown";

function _extends$3L() {
  _extends$3L =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3L.apply(this, arguments);
}

function _objectWithoutProperties$3L(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3L(source, excluded);
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

function _objectWithoutPropertiesLoose$3L(source, excluded) {
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
var ChevronLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3L(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3L(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "15 18 9 12 15 6",
    }),
  );
});
ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ChevronLeft.displayName = "ChevronLeft";

function _extends$3K() {
  _extends$3K =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3K.apply(this, arguments);
}

function _objectWithoutProperties$3K(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3K(source, excluded);
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

function _objectWithoutPropertiesLoose$3K(source, excluded) {
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
var ChevronRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3K(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3K(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "9 18 15 12 9 6",
    }),
  );
});
ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ChevronRight.displayName = "ChevronRight";

function _extends$3J() {
  _extends$3J =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3J.apply(this, arguments);
}

function _objectWithoutProperties$3J(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3J(source, excluded);
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

function _objectWithoutPropertiesLoose$3J(source, excluded) {
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
var ChevronUp = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3J(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3J(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "18 15 12 9 6 15",
    }),
  );
});
ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ChevronUp.displayName = "ChevronUp";

function _extends$3I() {
  _extends$3I =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3I.apply(this, arguments);
}

function _objectWithoutProperties$3I(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3I(source, excluded);
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

function _objectWithoutPropertiesLoose$3I(source, excluded) {
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
var ChevronsDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3I(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3I(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7 13 12 18 17 13",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7 6 12 11 17 6",
    }),
  );
});
ChevronsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ChevronsDown.displayName = "ChevronsDown";

function _extends$3H() {
  _extends$3H =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3H.apply(this, arguments);
}

function _objectWithoutProperties$3H(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3H(source, excluded);
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

function _objectWithoutPropertiesLoose$3H(source, excluded) {
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
var ChevronsLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3H(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3H(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "11 17 6 12 11 7",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "18 17 13 12 18 7",
    }),
  );
});
ChevronsLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ChevronsLeft.displayName = "ChevronsLeft";

function _extends$3G() {
  _extends$3G =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3G.apply(this, arguments);
}

function _objectWithoutProperties$3G(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3G(source, excluded);
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

function _objectWithoutPropertiesLoose$3G(source, excluded) {
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
var ChevronsRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3G(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3G(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "13 17 18 12 13 7",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "6 17 11 12 6 7",
    }),
  );
});
ChevronsRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ChevronsRight.displayName = "ChevronsRight";

function _extends$3F() {
  _extends$3F =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3F.apply(this, arguments);
}

function _objectWithoutProperties$3F(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3F(source, excluded);
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

function _objectWithoutPropertiesLoose$3F(source, excluded) {
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
var ChevronsUp = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3F(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3F(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 11 12 6 7 11",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 18 12 13 7 18",
    }),
  );
});
ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ChevronsUp.displayName = "ChevronsUp";

function _extends$3E() {
  _extends$3E =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3E.apply(this, arguments);
}

function _objectWithoutProperties$3E(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3E(source, excluded);
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

function _objectWithoutPropertiesLoose$3E(source, excluded) {
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
var Chrome = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3E(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3E(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21.17",
      y1: "8",
      x2: "12",
      y2: "8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3.95",
      y1: "6.06",
      x2: "8.54",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "10.88",
      y1: "21.94",
      x2: "15.46",
      y2: "14",
    }),
  );
});
Chrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Chrome.displayName = "Chrome";

function _extends$3D() {
  _extends$3D =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3D.apply(this, arguments);
}

function _objectWithoutProperties$3D(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3D(source, excluded);
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

function _objectWithoutPropertiesLoose$3D(source, excluded) {
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
var Circle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3D(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3D(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
  );
});
Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Circle.displayName = "Circle";

function _extends$3C() {
  _extends$3C =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3C.apply(this, arguments);
}

function _objectWithoutProperties$3C(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3C(source, excluded);
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

function _objectWithoutPropertiesLoose$3C(source, excluded) {
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
var Clipboard = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3C(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3C(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "8",
      y: "2",
      width: "8",
      height: "4",
      rx: "1",
      ry: "1",
    }),
  );
});
Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Clipboard.displayName = "Clipboard";

function _extends$3B() {
  _extends$3B =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3B.apply(this, arguments);
}

function _objectWithoutProperties$3B(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3B(source, excluded);
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

function _objectWithoutPropertiesLoose$3B(source, excluded) {
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
var Clock = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3B(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3B(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "12 6 12 12 16 14",
    }),
  );
});
Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Clock.displayName = "Clock";

function _extends$3A() {
  _extends$3A =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3A.apply(this, arguments);
}

function _objectWithoutProperties$3A(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3A(source, excluded);
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

function _objectWithoutPropertiesLoose$3A(source, excluded) {
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
var CloudDrizzle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3A(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3A(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "19",
      x2: "8",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "13",
      x2: "8",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "19",
      x2: "16",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "13",
      x2: "16",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "17",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25",
    }),
  );
});
CloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CloudDrizzle.displayName = "CloudDrizzle";

function _extends$3z() {
  _extends$3z =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3z.apply(this, arguments);
}

function _objectWithoutProperties$3z(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3z(source, excluded);
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

function _objectWithoutPropertiesLoose$3z(source, excluded) {
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
var CloudLightning = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3z(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3z(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "13 11 9 17 15 17 11 23",
    }),
  );
});
CloudLightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CloudLightning.displayName = "CloudLightning";

function _extends$3y() {
  _extends$3y =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3y.apply(this, arguments);
}

function _objectWithoutProperties$3y(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3y(source, excluded);
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

function _objectWithoutPropertiesLoose$3y(source, excluded) {
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
var CloudOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3y(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3y(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
  );
});
CloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CloudOff.displayName = "CloudOff";

function _extends$3x() {
  _extends$3x =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3x.apply(this, arguments);
}

function _objectWithoutProperties$3x(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3x(source, excluded);
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

function _objectWithoutPropertiesLoose$3x(source, excluded) {
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
var CloudRain = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3x(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3x(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "13",
      x2: "16",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "13",
      x2: "8",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25",
    }),
  );
});
CloudRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CloudRain.displayName = "CloudRain";

function _extends$3w() {
  _extends$3w =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3w.apply(this, arguments);
}

function _objectWithoutProperties$3w(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3w(source, excluded);
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

function _objectWithoutPropertiesLoose$3w(source, excluded) {
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
var CloudSnow = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3w(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3w(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "16",
      x2: "8.01",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "20",
      x2: "8.01",
      y2: "20",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "22",
      x2: "12.01",
      y2: "22",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "16",
      x2: "16.01",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "20",
      x2: "16.01",
      y2: "20",
    }),
  );
});
CloudSnow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CloudSnow.displayName = "CloudSnow";

function _extends$3v() {
  _extends$3v =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3v.apply(this, arguments);
}

function _objectWithoutProperties$3v(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3v(source, excluded);
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

function _objectWithoutPropertiesLoose$3v(source, excluded) {
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
var Cloud = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3v(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3v(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
    }),
  );
});
Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Cloud.displayName = "Cloud";

function _extends$3u() {
  _extends$3u =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3u.apply(this, arguments);
}

function _objectWithoutProperties$3u(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3u(source, excluded);
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

function _objectWithoutPropertiesLoose$3u(source, excluded) {
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
var Code = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3u(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3u(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 18 22 12 16 6",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "8 6 2 12 8 18",
    }),
  );
});
Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Code.displayName = "Code";

function _extends$3t() {
  _extends$3t =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3t.apply(this, arguments);
}

function _objectWithoutProperties$3t(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3t(source, excluded);
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

function _objectWithoutPropertiesLoose$3t(source, excluded) {
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
var Codepen = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3t(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3t(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "15.5",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "22 8.5 12 15.5 2 8.5",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "2 15.5 12 8.5 22 15.5",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "8.5",
    }),
  );
});
Codepen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Codepen.displayName = "Codepen";

function _extends$3s() {
  _extends$3s =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3s.apply(this, arguments);
}

function _objectWithoutProperties$3s(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3s(source, excluded);
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

function _objectWithoutPropertiesLoose$3s(source, excluded) {
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
var Codesandbox = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3s(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3s(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7.5 4.21 12 6.81 16.5 4.21",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7.5 19.79 7.5 14.6 3 12",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "21 12 16.5 14.6 16.5 19.79",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "3.27 6.96 12 12.01 20.73 6.96",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12",
    }),
  );
});
Codesandbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Codesandbox.displayName = "Codesandbox";

function _extends$3r() {
  _extends$3r =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3r.apply(this, arguments);
}

function _objectWithoutProperties$3r(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3r(source, excluded);
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

function _objectWithoutPropertiesLoose$3r(source, excluded) {
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
var Coffee = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3r(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3r(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 8h1a4 4 0 0 1 0 8h-1",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "1",
      x2: "6",
      y2: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "10",
      y1: "1",
      x2: "10",
      y2: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14",
      y1: "1",
      x2: "14",
      y2: "4",
    }),
  );
});
Coffee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Coffee.displayName = "Coffee";

function _extends$3q() {
  _extends$3q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3q.apply(this, arguments);
}

function _objectWithoutProperties$3q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3q(source, excluded);
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

function _objectWithoutPropertiesLoose$3q(source, excluded) {
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
var Columns = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18",
    }),
  );
});
Columns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Columns.displayName = "Columns";

function _extends$3p() {
  _extends$3p =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3p.apply(this, arguments);
}

function _objectWithoutProperties$3p(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3p(source, excluded);
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

function _objectWithoutPropertiesLoose$3p(source, excluded) {
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
var Command = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3p(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3p(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
    }),
  );
});
Command.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Command.displayName = "Command";

function _extends$3o() {
  _extends$3o =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3o.apply(this, arguments);
}

function _objectWithoutProperties$3o(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3o(source, excluded);
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

function _objectWithoutPropertiesLoose$3o(source, excluded) {
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
var Compass = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3o(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3o(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
    }),
  );
});
Compass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Compass.displayName = "Compass";

function _extends$3n() {
  _extends$3n =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3n.apply(this, arguments);
}

function _objectWithoutProperties$3n(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3n(source, excluded);
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

function _objectWithoutPropertiesLoose$3n(source, excluded) {
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
var Copy = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3n(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3n(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
    }),
  );
});
Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Copy.displayName = "Copy";

function _extends$3m() {
  _extends$3m =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3m.apply(this, arguments);
}

function _objectWithoutProperties$3m(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3m(source, excluded);
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

function _objectWithoutPropertiesLoose$3m(source, excluded) {
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
var CornerDownLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3m(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3m(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "9 10 4 15 9 20",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20 4v7a4 4 0 0 1-4 4H4",
    }),
  );
});
CornerDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CornerDownLeft.displayName = "CornerDownLeft";

function _extends$3l() {
  _extends$3l =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3l.apply(this, arguments);
}

function _objectWithoutProperties$3l(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3l(source, excluded);
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

function _objectWithoutPropertiesLoose$3l(source, excluded) {
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
var CornerDownRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3l(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3l(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "15 10 20 15 15 20",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 4v7a4 4 0 0 0 4 4h12",
    }),
  );
});
CornerDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CornerDownRight.displayName = "CornerDownRight";

function _extends$3k() {
  _extends$3k =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3k.apply(this, arguments);
}

function _objectWithoutProperties$3k(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3k(source, excluded);
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

function _objectWithoutPropertiesLoose$3k(source, excluded) {
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
var CornerLeftDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3k(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3k(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "14 15 9 20 4 15",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20 4h-7a4 4 0 0 0-4 4v12",
    }),
  );
});
CornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CornerLeftDown.displayName = "CornerLeftDown";

function _extends$3j() {
  _extends$3j =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3j.apply(this, arguments);
}

function _objectWithoutProperties$3j(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3j(source, excluded);
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

function _objectWithoutPropertiesLoose$3j(source, excluded) {
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
var CornerLeftUp = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3j(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3j(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "14 9 9 4 4 9",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20 20h-7a4 4 0 0 1-4-4V4",
    }),
  );
});
CornerLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CornerLeftUp.displayName = "CornerLeftUp";

function _extends$3i() {
  _extends$3i =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3i.apply(this, arguments);
}

function _objectWithoutProperties$3i(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3i(source, excluded);
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

function _objectWithoutPropertiesLoose$3i(source, excluded) {
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
var CornerRightDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3i(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3i(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "10 15 15 20 20 15",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 4h7a4 4 0 0 1 4 4v12",
    }),
  );
});
CornerRightDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CornerRightDown.displayName = "CornerRightDown";

function _extends$3h() {
  _extends$3h =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3h.apply(this, arguments);
}

function _objectWithoutProperties$3h(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3h(source, excluded);
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

function _objectWithoutPropertiesLoose$3h(source, excluded) {
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
var CornerRightUp = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3h(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3h(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "10 9 15 4 20 9",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 20h7a4 4 0 0 0 4-4V4",
    }),
  );
});
CornerRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CornerRightUp.displayName = "CornerRightUp";

function _extends$3g() {
  _extends$3g =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3g.apply(this, arguments);
}

function _objectWithoutProperties$3g(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3g(source, excluded);
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

function _objectWithoutPropertiesLoose$3g(source, excluded) {
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
var CornerUpLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3g(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3g(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "9 14 4 9 9 4",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20 20v-7a4 4 0 0 0-4-4H4",
    }),
  );
});
CornerUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CornerUpLeft.displayName = "CornerUpLeft";

function _extends$3f() {
  _extends$3f =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3f.apply(this, arguments);
}

function _objectWithoutProperties$3f(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3f(source, excluded);
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

function _objectWithoutPropertiesLoose$3f(source, excluded) {
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
var CornerUpRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3f(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3f(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "15 14 20 9 15 4",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 20v-7a4 4 0 0 1 4-4h12",
    }),
  );
});
CornerUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CornerUpRight.displayName = "CornerUpRight";

function _extends$3e() {
  _extends$3e =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3e.apply(this, arguments);
}

function _objectWithoutProperties$3e(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3e(source, excluded);
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

function _objectWithoutPropertiesLoose$3e(source, excluded) {
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
var Cpu = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3e(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3e(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "9",
      y: "9",
      width: "6",
      height: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "1",
      x2: "9",
      y2: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "1",
      x2: "15",
      y2: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "20",
      x2: "9",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "20",
      x2: "15",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "20",
      y1: "9",
      x2: "23",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "20",
      y1: "14",
      x2: "23",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "9",
      x2: "4",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "14",
      x2: "4",
      y2: "14",
    }),
  );
});
Cpu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Cpu.displayName = "Cpu";

function _extends$3d() {
  _extends$3d =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3d.apply(this, arguments);
}

function _objectWithoutProperties$3d(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3d(source, excluded);
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

function _objectWithoutPropertiesLoose$3d(source, excluded) {
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
var CreditCard = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3d(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3d(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "1",
      y: "4",
      width: "22",
      height: "16",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "10",
      x2: "23",
      y2: "10",
    }),
  );
});
CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
CreditCard.displayName = "CreditCard";

function _extends$3c() {
  _extends$3c =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3c.apply(this, arguments);
}

function _objectWithoutProperties$3c(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3c(source, excluded);
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

function _objectWithoutPropertiesLoose$3c(source, excluded) {
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
var Crop = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3c(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3c(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6.13 1L6 16a2 2 0 0 0 2 2h15",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M1 6.13L16 6a2 2 0 0 1 2 2v15",
    }),
  );
});
Crop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Crop.displayName = "Crop";

function _extends$3b() {
  _extends$3b =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3b.apply(this, arguments);
}

function _objectWithoutProperties$3b(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3b(source, excluded);
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

function _objectWithoutPropertiesLoose$3b(source, excluded) {
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
var Crosshair = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3b(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3b(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "22",
      y1: "12",
      x2: "18",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "12",
      x2: "2",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "6",
      x2: "12",
      y2: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "18",
    }),
  );
});
Crosshair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Crosshair.displayName = "Crosshair";

function _extends$3a() {
  _extends$3a =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3a.apply(this, arguments);
}

function _objectWithoutProperties$3a(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3a(source, excluded);
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

function _objectWithoutPropertiesLoose$3a(source, excluded) {
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
var Database = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3a(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3a(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("ellipse", {
      cx: "12",
      cy: "5",
      rx: "9",
      ry: "3",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5",
    }),
  );
});
Database.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Database.displayName = "Database";

function _extends$39() {
  _extends$39 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$39.apply(this, arguments);
}

function _objectWithoutProperties$39(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$39(source, excluded);
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

function _objectWithoutPropertiesLoose$39(source, excluded) {
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
var Delete = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$39(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$39(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "9",
      x2: "12",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "18",
      y2: "15",
    }),
  );
});
Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Delete.displayName = "Delete";

function _extends$38() {
  _extends$38 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$38.apply(this, arguments);
}

function _objectWithoutProperties$38(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$38(source, excluded);
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

function _objectWithoutPropertiesLoose$38(source, excluded) {
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
var Disc = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$38(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$38(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3",
    }),
  );
});
Disc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Disc.displayName = "Disc";

function _extends$37() {
  _extends$37 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$37.apply(this, arguments);
}

function _objectWithoutProperties$37(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$37(source, excluded);
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

function _objectWithoutPropertiesLoose$37(source, excluded) {
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
var DivideCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$37(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$37(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "8",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
  );
});
DivideCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
DivideCircle.displayName = "DivideCircle";

function _extends$36() {
  _extends$36 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$36.apply(this, arguments);
}

function _objectWithoutProperties$36(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$36(source, excluded);
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

function _objectWithoutPropertiesLoose$36(source, excluded) {
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
var DivideSquare = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$36(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$36(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "8",
    }),
  );
});
DivideSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
DivideSquare.displayName = "DivideSquare";

function _extends$35() {
  _extends$35 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$35.apply(this, arguments);
}

function _objectWithoutProperties$35(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$35(source, excluded);
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

function _objectWithoutPropertiesLoose$35(source, excluded) {
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
var Divide = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$35(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$35(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "6",
      r: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "18",
      r: "2",
    }),
  );
});
Divide.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Divide.displayName = "Divide";

function _extends$34() {
  _extends$34 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$34.apply(this, arguments);
}

function _objectWithoutProperties$34(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$34(source, excluded);
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

function _objectWithoutPropertiesLoose$34(source, excluded) {
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
var DollarSign = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$34(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$34(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    }),
  );
});
DollarSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
DollarSign.displayName = "DollarSign";

function _extends$33() {
  _extends$33 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$33.apply(this, arguments);
}

function _objectWithoutProperties$33(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$33(source, excluded);
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

function _objectWithoutPropertiesLoose$33(source, excluded) {
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
var DownloadCloud = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$33(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$33(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "8 17 12 21 16 17",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29",
    }),
  );
});
DownloadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
DownloadCloud.displayName = "DownloadCloud";

function _extends$32() {
  _extends$32 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$32.apply(this, arguments);
}

function _objectWithoutProperties$32(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$32(source, excluded);
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

function _objectWithoutPropertiesLoose$32(source, excluded) {
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
var Download = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$32(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$32(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7 10 12 15 17 10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3",
    }),
  );
});
Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Download.displayName = "Download";

function _extends$31() {
  _extends$31 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$31.apply(this, arguments);
}

function _objectWithoutProperties$31(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$31(source, excluded);
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

function _objectWithoutPropertiesLoose$31(source, excluded) {
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
var Dribbble = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$31(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$31(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32",
    }),
  );
});
Dribbble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Dribbble.displayName = "Dribbble";

function _extends$30() {
  _extends$30 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$30.apply(this, arguments);
}

function _objectWithoutProperties$30(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$30(source, excluded);
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

function _objectWithoutPropertiesLoose$30(source, excluded) {
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
var Droplet = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$30(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$30(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
    }),
  );
});
Droplet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Droplet.displayName = "Droplet";

function _extends$2$() {
  _extends$2$ =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2$.apply(this, arguments);
}

function _objectWithoutProperties$2$(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2$(source, excluded);
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

function _objectWithoutPropertiesLoose$2$(source, excluded) {
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
var Edit2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2$(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2$(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
    }),
  );
});
Edit2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Edit2.displayName = "Edit2";

function _extends$2_() {
  _extends$2_ =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2_.apply(this, arguments);
}

function _objectWithoutProperties$2_(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2_(source, excluded);
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

function _objectWithoutPropertiesLoose$2_(source, excluded) {
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
var Edit3 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2_(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2_(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 20h9",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
    }),
  );
});
Edit3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Edit3.displayName = "Edit3";

function _extends$2Z() {
  _extends$2Z =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2Z.apply(this, arguments);
}

function _objectWithoutProperties$2Z(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2Z(source, excluded);
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

function _objectWithoutPropertiesLoose$2Z(source, excluded) {
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
var Edit = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2Z(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2Z(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    }),
  );
});
Edit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Edit.displayName = "Edit";

function _extends$2Y() {
  _extends$2Y =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2Y.apply(this, arguments);
}

function _objectWithoutProperties$2Y(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2Y(source, excluded);
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

function _objectWithoutPropertiesLoose$2Y(source, excluded) {
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
var ExternalLink = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2Y(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2Y(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "15 3 21 3 21 9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3",
    }),
  );
});
ExternalLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ExternalLink.displayName = "ExternalLink";

function _extends$2X() {
  _extends$2X =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2X.apply(this, arguments);
}

function _objectWithoutProperties$2X(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2X(source, excluded);
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

function _objectWithoutPropertiesLoose$2X(source, excluded) {
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
var EyeOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2X(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2X(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
  );
});
EyeOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
EyeOff.displayName = "EyeOff";

function _extends$2W() {
  _extends$2W =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2W.apply(this, arguments);
}

function _objectWithoutProperties$2W(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2W(source, excluded);
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

function _objectWithoutPropertiesLoose$2W(source, excluded) {
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
var Eye = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2W(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2W(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3",
    }),
  );
});
Eye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Eye.displayName = "Eye";

function _extends$2V() {
  _extends$2V =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2V.apply(this, arguments);
}

function _objectWithoutProperties$2V(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2V(source, excluded);
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

function _objectWithoutPropertiesLoose$2V(source, excluded) {
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
var Facebook = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2V(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2V(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    }),
  );
});
Facebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Facebook.displayName = "Facebook";

function _extends$2U() {
  _extends$2U =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2U.apply(this, arguments);
}

function _objectWithoutProperties$2U(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2U(source, excluded);
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

function _objectWithoutPropertiesLoose$2U(source, excluded) {
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
var FastForward = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2U(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2U(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "13 19 22 12 13 5 13 19",
    }),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "2 19 11 12 2 5 2 19",
    }),
  );
});
FastForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FastForward.displayName = "FastForward";

function _extends$2T() {
  _extends$2T =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2T.apply(this, arguments);
}

function _objectWithoutProperties$2T(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2T(source, excluded);
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

function _objectWithoutPropertiesLoose$2T(source, excluded) {
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
var Feather$1 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2T(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2T(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "8",
      x2: "2",
      y2: "22",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17.5",
      y1: "15",
      x2: "9",
      y2: "15",
    }),
  );
});
Feather$1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Feather$1.displayName = "Feather";

function _extends$2S() {
  _extends$2S =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2S.apply(this, arguments);
}

function _objectWithoutProperties$2S(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2S(source, excluded);
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

function _objectWithoutPropertiesLoose$2S(source, excluded) {
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
var Figma = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2S(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2S(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
    }),
  );
});
Figma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Figma.displayName = "Figma";

function _extends$2R() {
  _extends$2R =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2R.apply(this, arguments);
}

function _objectWithoutProperties$2R(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2R(source, excluded);
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

function _objectWithoutPropertiesLoose$2R(source, excluded) {
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
var FileMinus = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2R(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2R(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "14 2 14 8 20 8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "15",
      x2: "15",
      y2: "15",
    }),
  );
});
FileMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FileMinus.displayName = "FileMinus";

function _extends$2Q() {
  _extends$2Q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2Q.apply(this, arguments);
}

function _objectWithoutProperties$2Q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2Q(source, excluded);
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

function _objectWithoutPropertiesLoose$2Q(source, excluded) {
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
var FilePlus = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2Q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2Q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "14 2 14 8 20 8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "15",
      x2: "15",
      y2: "15",
    }),
  );
});
FilePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FilePlus.displayName = "FilePlus";

function _extends$2P() {
  _extends$2P =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2P.apply(this, arguments);
}

function _objectWithoutProperties$2P(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2P(source, excluded);
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

function _objectWithoutPropertiesLoose$2P(source, excluded) {
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
var FileText = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2P(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2P(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "14 2 14 8 20 8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "13",
      x2: "8",
      y2: "13",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "17",
      x2: "8",
      y2: "17",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "10 9 9 9 8 9",
    }),
  );
});
FileText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FileText.displayName = "FileText";

function _extends$2O() {
  _extends$2O =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2O.apply(this, arguments);
}

function _objectWithoutProperties$2O(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2O(source, excluded);
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

function _objectWithoutPropertiesLoose$2O(source, excluded) {
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
var File = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2O(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2O(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "13 2 13 9 20 9",
    }),
  );
});
File.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
File.displayName = "File";

function _extends$2N() {
  _extends$2N =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2N.apply(this, arguments);
}

function _objectWithoutProperties$2N(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2N(source, excluded);
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

function _objectWithoutPropertiesLoose$2N(source, excluded) {
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
var Film = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2N(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2N(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "2.18",
      ry: "2.18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "7",
      y1: "2",
      x2: "7",
      y2: "22",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "2",
      x2: "17",
      y2: "22",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "2",
      y1: "7",
      x2: "7",
      y2: "7",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "2",
      y1: "17",
      x2: "7",
      y2: "17",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "17",
      x2: "22",
      y2: "17",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "7",
      x2: "22",
      y2: "7",
    }),
  );
});
Film.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Film.displayName = "Film";

function _extends$2M() {
  _extends$2M =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2M.apply(this, arguments);
}

function _objectWithoutProperties$2M(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2M(source, excluded);
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

function _objectWithoutPropertiesLoose$2M(source, excluded) {
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
var Filter = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2M(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2M(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    }),
  );
});
Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Filter.displayName = "Filter";

function _extends$2L() {
  _extends$2L =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2L.apply(this, arguments);
}

function _objectWithoutProperties$2L(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2L(source, excluded);
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

function _objectWithoutPropertiesLoose$2L(source, excluded) {
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
var Flag = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2L(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2L(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4",
      y1: "22",
      x2: "4",
      y2: "15",
    }),
  );
});
Flag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Flag.displayName = "Flag";

function _extends$2K() {
  _extends$2K =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2K.apply(this, arguments);
}

function _objectWithoutProperties$2K(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2K(source, excluded);
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

function _objectWithoutPropertiesLoose$2K(source, excluded) {
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
var FolderMinus = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2K(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2K(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "14",
      x2: "15",
      y2: "14",
    }),
  );
});
FolderMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FolderMinus.displayName = "FolderMinus";

function _extends$2J() {
  _extends$2J =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2J.apply(this, arguments);
}

function _objectWithoutProperties$2J(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2J(source, excluded);
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

function _objectWithoutPropertiesLoose$2J(source, excluded) {
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
var FolderPlus = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2J(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2J(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "11",
      x2: "12",
      y2: "17",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "14",
      x2: "15",
      y2: "14",
    }),
  );
});
FolderPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FolderPlus.displayName = "FolderPlus";

function _extends$2I() {
  _extends$2I =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2I.apply(this, arguments);
}

function _objectWithoutProperties$2I(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2I(source, excluded);
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

function _objectWithoutPropertiesLoose$2I(source, excluded) {
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
var Folder = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2I(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2I(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
    }),
  );
});
Folder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Folder.displayName = "Folder";

function _extends$2H() {
  _extends$2H =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2H.apply(this, arguments);
}

function _objectWithoutProperties$2H(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2H(source, excluded);
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

function _objectWithoutPropertiesLoose$2H(source, excluded) {
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
var Framer = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2H(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2H(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7",
    }),
  );
});
Framer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Framer.displayName = "Framer";

function _extends$2G() {
  _extends$2G =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2G.apply(this, arguments);
}

function _objectWithoutProperties$2G(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2G(source, excluded);
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

function _objectWithoutPropertiesLoose$2G(source, excluded) {
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
var Frown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2G(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2G(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 16s-1.5-2-4-2-4 2-4 2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9",
    }),
  );
});
Frown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Frown.displayName = "Frown";

function _extends$2F() {
  _extends$2F =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2F.apply(this, arguments);
}

function _objectWithoutProperties$2F(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2F(source, excluded);
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

function _objectWithoutPropertiesLoose$2F(source, excluded) {
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
var Gift = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2F(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2F(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "20 12 20 22 4 22 4 12",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "5",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "22",
      x2: "12",
      y2: "7",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
    }),
  );
});
Gift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Gift.displayName = "Gift";

function _extends$2E() {
  _extends$2E =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2E.apply(this, arguments);
}

function _objectWithoutProperties$2E(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2E(source, excluded);
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

function _objectWithoutPropertiesLoose$2E(source, excluded) {
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
var GitBranch = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2E(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2E(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "3",
      x2: "6",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "18",
      cy: "6",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 9a9 9 0 0 1-9 9",
    }),
  );
});
GitBranch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
GitBranch.displayName = "GitBranch";

function _extends$2D() {
  _extends$2D =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2D.apply(this, arguments);
}

function _objectWithoutProperties$2D(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2D(source, excluded);
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

function _objectWithoutPropertiesLoose$2D(source, excluded) {
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
var GitCommit = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2D(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2D(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1.05",
      y1: "12",
      x2: "7",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17.01",
      y1: "12",
      x2: "22.96",
      y2: "12",
    }),
  );
});
GitCommit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
GitCommit.displayName = "GitCommit";

function _extends$2C() {
  _extends$2C =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2C.apply(this, arguments);
}

function _objectWithoutProperties$2C(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2C(source, excluded);
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

function _objectWithoutPropertiesLoose$2C(source, excluded) {
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
var GitMerge = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2C(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2C(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6 21V9a9 9 0 0 0 9 9",
    }),
  );
});
GitMerge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
GitMerge.displayName = "GitMerge";

function _extends$2B() {
  _extends$2B =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2B.apply(this, arguments);
}

function _objectWithoutProperties$2B(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2B(source, excluded);
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

function _objectWithoutPropertiesLoose$2B(source, excluded) {
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
var GitPullRequest = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2B(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2B(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M13 6h3a2 2 0 0 1 2 2v7",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "9",
      x2: "6",
      y2: "21",
    }),
  );
});
GitPullRequest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
GitPullRequest.displayName = "GitPullRequest";

function _extends$2A() {
  _extends$2A =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2A.apply(this, arguments);
}

function _objectWithoutProperties$2A(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2A(source, excluded);
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

function _objectWithoutPropertiesLoose$2A(source, excluded) {
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
var GitHub = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2A(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2A(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    }),
  );
});
GitHub.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
GitHub.displayName = "GitHub";

function _extends$2z() {
  _extends$2z =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2z.apply(this, arguments);
}

function _objectWithoutProperties$2z(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2z(source, excluded);
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

function _objectWithoutPropertiesLoose$2z(source, excluded) {
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
var Gitlab = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2z(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2z(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z",
    }),
  );
});
Gitlab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Gitlab.displayName = "Gitlab";

function _extends$2y() {
  _extends$2y =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2y.apply(this, arguments);
}

function _objectWithoutProperties$2y(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2y(source, excluded);
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

function _objectWithoutPropertiesLoose$2y(source, excluded) {
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
var Globe = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2y(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2y(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
    }),
  );
});
Globe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Globe.displayName = "Globe";

function _extends$2x() {
  _extends$2x =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2x.apply(this, arguments);
}

function _objectWithoutProperties$2x(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2x(source, excluded);
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

function _objectWithoutPropertiesLoose$2x(source, excluded) {
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
var Grid = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2x(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2x(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
    }),
  );
});
Grid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Grid.displayName = "Grid";

function _extends$2w() {
  _extends$2w =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2w.apply(this, arguments);
}

function _objectWithoutProperties$2w(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2w(source, excluded);
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

function _objectWithoutPropertiesLoose$2w(source, excluded) {
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
var HardDrive = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2w(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2w(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "22",
      y1: "12",
      x2: "2",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "16",
      x2: "6.01",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "10",
      y1: "16",
      x2: "10.01",
      y2: "16",
    }),
  );
});
HardDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
HardDrive.displayName = "HardDrive";

function _extends$2v() {
  _extends$2v =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2v.apply(this, arguments);
}

function _objectWithoutProperties$2v(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2v(source, excluded);
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

function _objectWithoutPropertiesLoose$2v(source, excluded) {
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
var Hash = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2v(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2v(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4",
      y1: "9",
      x2: "20",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4",
      y1: "15",
      x2: "20",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "10",
      y1: "3",
      x2: "8",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "3",
      x2: "14",
      y2: "21",
    }),
  );
});
Hash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Hash.displayName = "Hash";

function _extends$2u() {
  _extends$2u =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2u.apply(this, arguments);
}

function _objectWithoutProperties$2u(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2u(source, excluded);
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

function _objectWithoutPropertiesLoose$2u(source, excluded) {
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
var Headphones = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2u(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2u(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3 18v-6a9 9 0 0 1 18 0v6",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",
    }),
  );
});
Headphones.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Headphones.displayName = "Headphones";

function _extends$2t() {
  _extends$2t =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2t.apply(this, arguments);
}

function _objectWithoutProperties$2t(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2t(source, excluded);
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

function _objectWithoutPropertiesLoose$2t(source, excluded) {
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
var Heart = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2t(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2t(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    }),
  );
});
Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Heart.displayName = "Heart";

function _extends$2s() {
  _extends$2s =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2s.apply(this, arguments);
}

function _objectWithoutProperties$2s(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2s(source, excluded);
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

function _objectWithoutPropertiesLoose$2s(source, excluded) {
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
var HelpCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2s(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2s(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17",
    }),
  );
});
HelpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
HelpCircle.displayName = "HelpCircle";

function _extends$2r() {
  _extends$2r =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2r.apply(this, arguments);
}

function _objectWithoutProperties$2r(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2r(source, excluded);
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

function _objectWithoutPropertiesLoose$2r(source, excluded) {
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
var Hexagon = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2r(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2r(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    }),
  );
});
Hexagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Hexagon.displayName = "Hexagon";

function _extends$2q() {
  _extends$2q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2q.apply(this, arguments);
}

function _objectWithoutProperties$2q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2q(source, excluded);
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

function _objectWithoutPropertiesLoose$2q(source, excluded) {
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
var Home = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "9 22 9 12 15 12 15 22",
    }),
  );
});
Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Home.displayName = "Home";

function _extends$2p() {
  _extends$2p =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2p.apply(this, arguments);
}

function _objectWithoutProperties$2p(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2p(source, excluded);
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

function _objectWithoutPropertiesLoose$2p(source, excluded) {
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
var Image = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2p(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2p(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "21 15 16 10 5 21",
    }),
  );
});
Image.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Image.displayName = "Image";

function _extends$2o() {
  _extends$2o =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2o.apply(this, arguments);
}

function _objectWithoutProperties$2o(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2o(source, excluded);
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

function _objectWithoutPropertiesLoose$2o(source, excluded) {
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
var Inbox = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2o(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2o(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "22 12 16 12 14 15 10 15 8 12 2 12",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
    }),
  );
});
Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Inbox.displayName = "Inbox";

function _extends$2n() {
  _extends$2n =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2n.apply(this, arguments);
}

function _objectWithoutProperties$2n(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2n(source, excluded);
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

function _objectWithoutPropertiesLoose$2n(source, excluded) {
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
var Info = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2n(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2n(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8",
    }),
  );
});
Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Info.displayName = "Info";

function _extends$2m() {
  _extends$2m =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2m.apply(this, arguments);
}

function _objectWithoutProperties$2m(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2m(source, excluded);
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

function _objectWithoutPropertiesLoose$2m(source, excluded) {
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
var Instagram = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2m(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2m(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5",
    }),
  );
});
Instagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Instagram.displayName = "Instagram";

function _extends$2l() {
  _extends$2l =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2l.apply(this, arguments);
}

function _objectWithoutProperties$2l(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2l(source, excluded);
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

function _objectWithoutPropertiesLoose$2l(source, excluded) {
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
var Italic = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2l(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2l(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "19",
      y1: "4",
      x2: "10",
      y2: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14",
      y1: "20",
      x2: "5",
      y2: "20",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "4",
      x2: "9",
      y2: "20",
    }),
  );
});
Italic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Italic.displayName = "Italic";

function _extends$2k() {
  _extends$2k =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2k.apply(this, arguments);
}

function _objectWithoutProperties$2k(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2k(source, excluded);
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

function _objectWithoutPropertiesLoose$2k(source, excluded) {
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
var Key = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2k(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2k(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
    }),
  );
});
Key.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Key.displayName = "Key";

function _extends$2j() {
  _extends$2j =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2j.apply(this, arguments);
}

function _objectWithoutProperties$2j(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2j(source, excluded);
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

function _objectWithoutPropertiesLoose$2j(source, excluded) {
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
var Layers = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2j(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2j(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "12 2 2 7 12 12 22 7 12 2",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "2 17 12 22 22 17",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "2 12 12 17 22 12",
    }),
  );
});
Layers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Layers.displayName = "Layers";

function _extends$2i() {
  _extends$2i =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2i.apply(this, arguments);
}

function _objectWithoutProperties$2i(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2i(source, excluded);
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

function _objectWithoutPropertiesLoose$2i(source, excluded) {
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
var Layout = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2i(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2i(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "21",
      x2: "9",
      y2: "9",
    }),
  );
});
Layout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Layout.displayName = "Layout";

function _extends$2h() {
  _extends$2h =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2h.apply(this, arguments);
}

function _objectWithoutProperties$2h(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2h(source, excluded);
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

function _objectWithoutPropertiesLoose$2h(source, excluded) {
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
var LifeBuoy = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2h(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2h(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.93",
      y1: "4.93",
      x2: "9.17",
      y2: "9.17",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14.83",
      y1: "14.83",
      x2: "19.07",
      y2: "19.07",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14.83",
      y1: "9.17",
      x2: "19.07",
      y2: "4.93",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14.83",
      y1: "9.17",
      x2: "18.36",
      y2: "5.64",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.93",
      y1: "19.07",
      x2: "9.17",
      y2: "14.83",
    }),
  );
});
LifeBuoy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
LifeBuoy.displayName = "LifeBuoy";

function _extends$2g() {
  _extends$2g =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2g.apply(this, arguments);
}

function _objectWithoutProperties$2g(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2g(source, excluded);
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

function _objectWithoutPropertiesLoose$2g(source, excluded) {
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
var Link2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2g(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2g(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
});
Link2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Link2.displayName = "Link2";

function _extends$2f() {
  _extends$2f =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2f.apply(this, arguments);
}

function _objectWithoutProperties$2f(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2f(source, excluded);
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

function _objectWithoutPropertiesLoose$2f(source, excluded) {
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
var Link = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2f(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2f(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    }),
  );
});
Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Link.displayName = "Link";

function _extends$2e() {
  _extends$2e =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2e.apply(this, arguments);
}

function _objectWithoutProperties$2e(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2e(source, excluded);
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

function _objectWithoutPropertiesLoose$2e(source, excluded) {
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
var Linkedin = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2e(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2e(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "9",
      width: "4",
      height: "12",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2",
    }),
  );
});
Linkedin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Linkedin.displayName = "Linkedin";

function _extends$2d() {
  _extends$2d =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2d.apply(this, arguments);
}

function _objectWithoutProperties$2d(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2d(source, excluded);
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

function _objectWithoutPropertiesLoose$2d(source, excluded) {
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
var List = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2d(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2d(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "6",
      x2: "21",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "21",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "18",
      x2: "21",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "3.01",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "3.01",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "3.01",
      y2: "18",
    }),
  );
});
List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
List.displayName = "List";

function _extends$2c() {
  _extends$2c =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2c.apply(this, arguments);
}

function _objectWithoutProperties$2c(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2c(source, excluded);
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

function _objectWithoutPropertiesLoose$2c(source, excluded) {
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
var Loader = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2c(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2c(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "22",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.93",
      y1: "4.93",
      x2: "7.76",
      y2: "7.76",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16.24",
      y1: "16.24",
      x2: "19.07",
      y2: "19.07",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "6",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "12",
      x2: "22",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.93",
      y1: "19.07",
      x2: "7.76",
      y2: "16.24",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16.24",
      y1: "7.76",
      x2: "19.07",
      y2: "4.93",
    }),
  );
});
Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Loader.displayName = "Loader";

function _extends$2b() {
  _extends$2b =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2b.apply(this, arguments);
}

function _objectWithoutProperties$2b(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2b(source, excluded);
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

function _objectWithoutPropertiesLoose$2b(source, excluded) {
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
var Lock = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2b(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2b(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4",
    }),
  );
});
Lock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Lock.displayName = "Lock";

function _extends$2a() {
  _extends$2a =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2a.apply(this, arguments);
}

function _objectWithoutProperties$2a(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2a(source, excluded);
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

function _objectWithoutPropertiesLoose$2a(source, excluded) {
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
var LogIn = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2a(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2a(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "10 17 15 12 10 7",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "12",
      x2: "3",
      y2: "12",
    }),
  );
});
LogIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
LogIn.displayName = "LogIn";

function _extends$29() {
  _extends$29 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$29.apply(this, arguments);
}

function _objectWithoutProperties$29(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$29(source, excluded);
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

function _objectWithoutPropertiesLoose$29(source, excluded) {
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
var LogOut = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$29(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$29(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 17 21 12 16 7",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12",
    }),
  );
});
LogOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
LogOut.displayName = "LogOut";

function _extends$28() {
  _extends$28 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$28.apply(this, arguments);
}

function _objectWithoutProperties$28(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$28(source, excluded);
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

function _objectWithoutPropertiesLoose$28(source, excluded) {
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
var Mail = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$28(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$28(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "22,6 12,13 2,6",
    }),
  );
});
Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Mail.displayName = "Mail";

function _extends$27() {
  _extends$27 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$27.apply(this, arguments);
}

function _objectWithoutProperties$27(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$27(source, excluded);
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

function _objectWithoutPropertiesLoose$27(source, excluded) {
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
var MapPin = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$27(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$27(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3",
    }),
  );
});
MapPin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MapPin.displayName = "MapPin";

function _extends$26() {
  _extends$26 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$26.apply(this, arguments);
}

function _objectWithoutProperties$26(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$26(source, excluded);
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

function _objectWithoutPropertiesLoose$26(source, excluded) {
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
var Map$1 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$26(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$26(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "6",
      x2: "16",
      y2: "22",
    }),
  );
});
Map$1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Map$1.displayName = "Map";

function _extends$25() {
  _extends$25 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$25.apply(this, arguments);
}

function _objectWithoutProperties$25(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$25(source, excluded);
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

function _objectWithoutPropertiesLoose$25(source, excluded) {
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
var Maximize2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$25(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$25(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "15 3 21 3 21 9",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "9 21 3 21 3 15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "3",
      x2: "14",
      y2: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14",
    }),
  );
});
Maximize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Maximize2.displayName = "Maximize2";

function _extends$24() {
  _extends$24 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$24.apply(this, arguments);
}

function _objectWithoutProperties$24(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$24(source, excluded);
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

function _objectWithoutPropertiesLoose$24(source, excluded) {
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
var Maximize = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$24(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$24(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3",
    }),
  );
});
Maximize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Maximize.displayName = "Maximize";

function _extends$23() {
  _extends$23 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$23.apply(this, arguments);
}

function _objectWithoutProperties$23(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$23(source, excluded);
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

function _objectWithoutPropertiesLoose$23(source, excluded) {
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
var Meh = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$23(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$23(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "15",
      x2: "16",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9",
    }),
  );
});
Meh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Meh.displayName = "Meh";

function _extends$22() {
  _extends$22 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$22.apply(this, arguments);
}

function _objectWithoutProperties$22(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$22(source, excluded);
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

function _objectWithoutPropertiesLoose$22(source, excluded) {
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
var Menu = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$22(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$22(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18",
    }),
  );
});
Menu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Menu.displayName = "Menu";

function _extends$21() {
  _extends$21 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$21.apply(this, arguments);
}

function _objectWithoutProperties$21(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$21(source, excluded);
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

function _objectWithoutPropertiesLoose$21(source, excluded) {
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
var MessageCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$21(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$21(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
    }),
  );
});
MessageCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MessageCircle.displayName = "MessageCircle";

function _extends$20() {
  _extends$20 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$20.apply(this, arguments);
}

function _objectWithoutProperties$20(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$20(source, excluded);
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

function _objectWithoutPropertiesLoose$20(source, excluded) {
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
var MessageSquare = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$20(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$20(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    }),
  );
});
MessageSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MessageSquare.displayName = "MessageSquare";

function _extends$1$() {
  _extends$1$ =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1$.apply(this, arguments);
}

function _objectWithoutProperties$1$(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1$(source, excluded);
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

function _objectWithoutPropertiesLoose$1$(source, excluded) {
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
var MicOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1$(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1$(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "23",
      x2: "16",
      y2: "23",
    }),
  );
});
MicOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MicOff.displayName = "MicOff";

function _extends$1_() {
  _extends$1_ =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1_.apply(this, arguments);
}

function _objectWithoutProperties$1_(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1_(source, excluded);
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

function _objectWithoutPropertiesLoose$1_(source, excluded) {
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
var Mic = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1_(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1_(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 10v2a7 7 0 0 1-14 0v-2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "23",
      x2: "16",
      y2: "23",
    }),
  );
});
Mic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Mic.displayName = "Mic";

function _extends$1Z() {
  _extends$1Z =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1Z.apply(this, arguments);
}

function _objectWithoutProperties$1Z(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1Z(source, excluded);
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

function _objectWithoutPropertiesLoose$1Z(source, excluded) {
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
var Minimize2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1Z(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1Z(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "4 14 10 14 10 20",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "20 10 14 10 14 4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14",
      y1: "10",
      x2: "21",
      y2: "3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "21",
      x2: "10",
      y2: "14",
    }),
  );
});
Minimize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Minimize2.displayName = "Minimize2";

function _extends$1Y() {
  _extends$1Y =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1Y.apply(this, arguments);
}

function _objectWithoutProperties$1Y(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1Y(source, excluded);
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

function _objectWithoutPropertiesLoose$1Y(source, excluded) {
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
var Minimize = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1Y(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1Y(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3",
    }),
  );
});
Minimize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Minimize.displayName = "Minimize";

function _extends$1X() {
  _extends$1X =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1X.apply(this, arguments);
}

function _objectWithoutProperties$1X(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1X(source, excluded);
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

function _objectWithoutPropertiesLoose$1X(source, excluded) {
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
var MinusCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1X(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1X(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
});
MinusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MinusCircle.displayName = "MinusCircle";

function _extends$1W() {
  _extends$1W =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1W.apply(this, arguments);
}

function _objectWithoutProperties$1W(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1W(source, excluded);
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

function _objectWithoutPropertiesLoose$1W(source, excluded) {
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
var MinusSquare = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1W(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1W(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
});
MinusSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MinusSquare.displayName = "MinusSquare";

function _extends$1V() {
  _extends$1V =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1V.apply(this, arguments);
}

function _objectWithoutProperties$1V(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1V(source, excluded);
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

function _objectWithoutPropertiesLoose$1V(source, excluded) {
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
var Minus = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1V(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1V(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
  );
});
Minus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Minus.displayName = "Minus";

function _extends$1U() {
  _extends$1U =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1U.apply(this, arguments);
}

function _objectWithoutProperties$1U(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1U(source, excluded);
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

function _objectWithoutPropertiesLoose$1U(source, excluded) {
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
var Monitor = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1U(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1U(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "3",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "21",
      x2: "16",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12",
      y2: "21",
    }),
  );
});
Monitor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Monitor.displayName = "Monitor";

function _extends$1T() {
  _extends$1T =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1T.apply(this, arguments);
}

function _objectWithoutProperties$1T(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1T(source, excluded);
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

function _objectWithoutPropertiesLoose$1T(source, excluded) {
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
var Moon = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1T(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1T(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
    }),
  );
});
Moon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Moon.displayName = "Moon";

function _extends$1S() {
  _extends$1S =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1S.apply(this, arguments);
}

function _objectWithoutProperties$1S(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1S(source, excluded);
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

function _objectWithoutPropertiesLoose$1S(source, excluded) {
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
var MoreHorizontal = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1S(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1S(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1",
    }),
  );
});
MoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MoreHorizontal.displayName = "MoreHorizontal";

function _extends$1R() {
  _extends$1R =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1R.apply(this, arguments);
}

function _objectWithoutProperties$1R(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1R(source, excluded);
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

function _objectWithoutPropertiesLoose$1R(source, excluded) {
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
var MoreVertical = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1R(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1R(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "5",
      r: "1",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "19",
      r: "1",
    }),
  );
});
MoreVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MoreVertical.displayName = "MoreVertical";

function _extends$1Q() {
  _extends$1Q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1Q.apply(this, arguments);
}

function _objectWithoutProperties$1Q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1Q(source, excluded);
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

function _objectWithoutPropertiesLoose$1Q(source, excluded) {
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
var MousePointer = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1Q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1Q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M13 13l6 6",
    }),
  );
});
MousePointer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MousePointer.displayName = "MousePointer";

function _extends$1P() {
  _extends$1P =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1P.apply(this, arguments);
}

function _objectWithoutProperties$1P(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1P(source, excluded);
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

function _objectWithoutPropertiesLoose$1P(source, excluded) {
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
var Move = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1P(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1P(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "5 9 2 12 5 15",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "9 5 12 2 15 5",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "15 19 12 22 9 19",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "19 9 22 12 19 15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "22",
    }),
  );
});
Move.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Move.displayName = "Move";

function _extends$1O() {
  _extends$1O =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1O.apply(this, arguments);
}

function _objectWithoutProperties$1O(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1O(source, excluded);
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

function _objectWithoutPropertiesLoose$1O(source, excluded) {
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
var Music = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1O(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1O(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 18V5l12-2v13",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "18",
      cy: "16",
      r: "3",
    }),
  );
});
Music.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Music.displayName = "Music";

function _extends$1N() {
  _extends$1N =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1N.apply(this, arguments);
}

function _objectWithoutProperties$1N(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1N(source, excluded);
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

function _objectWithoutPropertiesLoose$1N(source, excluded) {
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
var Navigation2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1N(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1N(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "12 2 19 21 12 17 5 21 12 2",
    }),
  );
});
Navigation2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Navigation2.displayName = "Navigation2";

function _extends$1M() {
  _extends$1M =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1M.apply(this, arguments);
}

function _objectWithoutProperties$1M(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1M(source, excluded);
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

function _objectWithoutPropertiesLoose$1M(source, excluded) {
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
var Navigation = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1M(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1M(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "3 11 22 2 13 21 11 13 3 11",
    }),
  );
});
Navigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Navigation.displayName = "Navigation";

function _extends$1L() {
  _extends$1L =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1L.apply(this, arguments);
}

function _objectWithoutProperties$1L(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1L(source, excluded);
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

function _objectWithoutPropertiesLoose$1L(source, excluded) {
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
var Octagon = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1L(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1L(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points:
        "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
    }),
  );
});
Octagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Octagon.displayName = "Octagon";

function _extends$1K() {
  _extends$1K =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1K.apply(this, arguments);
}

function _objectWithoutProperties$1K(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1K(source, excluded);
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

function _objectWithoutPropertiesLoose$1K(source, excluded) {
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
var Package = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1K(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1K(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16.5",
      y1: "9.4",
      x2: "7.5",
      y2: "4.21",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "3.27 6.96 12 12.01 20.73 6.96",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "22.08",
      x2: "12",
      y2: "12",
    }),
  );
});
Package.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Package.displayName = "Package";

function _extends$1J() {
  _extends$1J =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1J.apply(this, arguments);
}

function _objectWithoutProperties$1J(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1J(source, excluded);
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

function _objectWithoutPropertiesLoose$1J(source, excluded) {
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
var Paperclip = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1J(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1J(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48",
    }),
  );
});
Paperclip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Paperclip.displayName = "Paperclip";

function _extends$1I() {
  _extends$1I =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1I.apply(this, arguments);
}

function _objectWithoutProperties$1I(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1I(source, excluded);
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

function _objectWithoutPropertiesLoose$1I(source, excluded) {
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
var PauseCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1I(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1I(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "10",
      y1: "15",
      x2: "10",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14",
      y1: "15",
      x2: "14",
      y2: "9",
    }),
  );
});
PauseCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PauseCircle.displayName = "PauseCircle";

function _extends$1H() {
  _extends$1H =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1H.apply(this, arguments);
}

function _objectWithoutProperties$1H(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1H(source, excluded);
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

function _objectWithoutPropertiesLoose$1H(source, excluded) {
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
var Pause = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1H(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1H(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "6",
      y: "4",
      width: "4",
      height: "16",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "14",
      y: "4",
      width: "4",
      height: "16",
    }),
  );
});
Pause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Pause.displayName = "Pause";

function _extends$1G() {
  _extends$1G =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1G.apply(this, arguments);
}

function _objectWithoutProperties$1G(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1G(source, excluded);
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

function _objectWithoutPropertiesLoose$1G(source, excluded) {
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
var PenTool = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1G(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1G(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 19l7-7 3 3-7 7-3-3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M2 2l7.586 7.586",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "2",
    }),
  );
});
PenTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PenTool.displayName = "PenTool";

function _extends$1F() {
  _extends$1F =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1F.apply(this, arguments);
}

function _objectWithoutProperties$1F(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1F(source, excluded);
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

function _objectWithoutPropertiesLoose$1F(source, excluded) {
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
var Percent = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1F(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1F(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "19",
      y1: "5",
      x2: "5",
      y2: "19",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "6.5",
      cy: "6.5",
      r: "2.5",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "17.5",
      cy: "17.5",
      r: "2.5",
    }),
  );
});
Percent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Percent.displayName = "Percent";

function _extends$1E() {
  _extends$1E =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1E.apply(this, arguments);
}

function _objectWithoutProperties$1E(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1E(source, excluded);
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

function _objectWithoutPropertiesLoose$1E(source, excluded) {
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
var PhoneCall = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1E(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1E(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    }),
  );
});
PhoneCall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PhoneCall.displayName = "PhoneCall";

function _extends$1D() {
  _extends$1D =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1D.apply(this, arguments);
}

function _objectWithoutProperties$1D(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1D(source, excluded);
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

function _objectWithoutPropertiesLoose$1D(source, excluded) {
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
var PhoneForwarded = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1D(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1D(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "19 1 23 5 19 9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "5",
      x2: "23",
      y2: "5",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    }),
  );
});
PhoneForwarded.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PhoneForwarded.displayName = "PhoneForwarded";

function _extends$1C() {
  _extends$1C =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1C.apply(this, arguments);
}

function _objectWithoutProperties$1C(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1C(source, excluded);
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

function _objectWithoutPropertiesLoose$1C(source, excluded) {
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
var PhoneIncoming = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1C(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1C(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 2 16 8 22 8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "1",
      x2: "16",
      y2: "8",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    }),
  );
});
PhoneIncoming.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PhoneIncoming.displayName = "PhoneIncoming";

function _extends$1B() {
  _extends$1B =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1B.apply(this, arguments);
}

function _objectWithoutProperties$1B(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1B(source, excluded);
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

function _objectWithoutPropertiesLoose$1B(source, excluded) {
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
var PhoneMissed = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1B(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1B(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "1",
      x2: "17",
      y2: "7",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "1",
      x2: "23",
      y2: "7",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    }),
  );
});
PhoneMissed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PhoneMissed.displayName = "PhoneMissed";

function _extends$1A() {
  _extends$1A =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1A.apply(this, arguments);
}

function _objectWithoutProperties$1A(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1A(source, excluded);
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

function _objectWithoutPropertiesLoose$1A(source, excluded) {
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
var PhoneOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1A(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1A(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "1",
      x2: "1",
      y2: "23",
    }),
  );
});
PhoneOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PhoneOff.displayName = "PhoneOff";

function _extends$1z() {
  _extends$1z =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1z.apply(this, arguments);
}

function _objectWithoutProperties$1z(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1z(source, excluded);
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

function _objectWithoutPropertiesLoose$1z(source, excluded) {
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
var PhoneOutgoing = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1z(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1z(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "23 7 23 1 17 1",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "16",
      y1: "8",
      x2: "23",
      y2: "1",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    }),
  );
});
PhoneOutgoing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PhoneOutgoing.displayName = "PhoneOutgoing";

function _extends$1y() {
  _extends$1y =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1y.apply(this, arguments);
}

function _objectWithoutProperties$1y(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1y(source, excluded);
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

function _objectWithoutPropertiesLoose$1y(source, excluded) {
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
var Phone = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1y(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1y(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    }),
  );
});
Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Phone.displayName = "Phone";

function _extends$1x() {
  _extends$1x =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1x.apply(this, arguments);
}

function _objectWithoutProperties$1x(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1x(source, excluded);
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

function _objectWithoutPropertiesLoose$1x(source, excluded) {
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
var PieChart = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1x(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1x(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21.21 15.89A10 10 0 1 1 8 2.83",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22 12A10 10 0 0 0 12 2v10z",
    }),
  );
});
PieChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PieChart.displayName = "PieChart";

function _extends$1w() {
  _extends$1w =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1w.apply(this, arguments);
}

function _objectWithoutProperties$1w(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1w(source, excluded);
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

function _objectWithoutPropertiesLoose$1w(source, excluded) {
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
var PlayCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1w(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1w(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "10 8 16 12 10 16 10 8",
    }),
  );
});
PlayCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PlayCircle.displayName = "PlayCircle";

function _extends$1v() {
  _extends$1v =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1v.apply(this, arguments);
}

function _objectWithoutProperties$1v(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1v(source, excluded);
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

function _objectWithoutPropertiesLoose$1v(source, excluded) {
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
var Play = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1v(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1v(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3",
    }),
  );
});
Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Play.displayName = "Play";

function _extends$1u() {
  _extends$1u =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1u.apply(this, arguments);
}

function _objectWithoutProperties$1u(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1u(source, excluded);
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

function _objectWithoutPropertiesLoose$1u(source, excluded) {
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
var PlusCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1u(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1u(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
});
PlusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PlusCircle.displayName = "PlusCircle";

function _extends$1t() {
  _extends$1t =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1t.apply(this, arguments);
}

function _objectWithoutProperties$1t(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1t(source, excluded);
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

function _objectWithoutPropertiesLoose$1t(source, excluded) {
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
var PlusSquare = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1t(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1t(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12",
    }),
  );
});
PlusSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PlusSquare.displayName = "PlusSquare";

function _extends$1s() {
  _extends$1s =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1s.apply(this, arguments);
}

function _objectWithoutProperties$1s(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1s(source, excluded);
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

function _objectWithoutPropertiesLoose$1s(source, excluded) {
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
var Plus = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1s(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1s(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
    }),
  );
});
Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Plus.displayName = "Plus";

function _extends$1r() {
  _extends$1r =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1r.apply(this, arguments);
}

function _objectWithoutProperties$1r(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1r(source, excluded);
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

function _objectWithoutPropertiesLoose$1r(source, excluded) {
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
var Pocket = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1r(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1r(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "8 10 12 14 16 10",
    }),
  );
});
Pocket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Pocket.displayName = "Pocket";

function _extends$1q() {
  _extends$1q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1q.apply(this, arguments);
}

function _objectWithoutProperties$1q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1q(source, excluded);
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

function _objectWithoutPropertiesLoose$1q(source, excluded) {
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
var Power = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M18.36 6.64a9 9 0 1 1-12.73 0",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "12",
    }),
  );
});
Power.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Power.displayName = "Power";

function _extends$1p() {
  _extends$1p =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1p.apply(this, arguments);
}

function _objectWithoutProperties$1p(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1p(source, excluded);
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

function _objectWithoutPropertiesLoose$1p(source, excluded) {
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
var Printer = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1p(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1p(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "6 9 6 2 18 2 18 9",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "6",
      y: "14",
      width: "12",
      height: "8",
    }),
  );
});
Printer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Printer.displayName = "Printer";

function _extends$1o() {
  _extends$1o =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1o.apply(this, arguments);
}

function _objectWithoutProperties$1o(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1o(source, excluded);
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

function _objectWithoutPropertiesLoose$1o(source, excluded) {
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
var Radio = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1o(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1o(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14",
    }),
  );
});
Radio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Radio.displayName = "Radio";

function _extends$1n() {
  _extends$1n =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1n.apply(this, arguments);
}

function _objectWithoutProperties$1n(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1n(source, excluded);
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

function _objectWithoutPropertiesLoose$1n(source, excluded) {
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
var RefreshCcw = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1n(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1n(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "1 4 1 10 7 10",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "23 20 23 14 17 14",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15",
    }),
  );
});
RefreshCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
RefreshCcw.displayName = "RefreshCcw";

function _extends$1m() {
  _extends$1m =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1m.apply(this, arguments);
}

function _objectWithoutProperties$1m(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1m(source, excluded);
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

function _objectWithoutPropertiesLoose$1m(source, excluded) {
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
var RefreshCw = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1m(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1m(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "23 4 23 10 17 10",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "1 20 1 14 7 14",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15",
    }),
  );
});
RefreshCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
RefreshCw.displayName = "RefreshCw";

function _extends$1l() {
  _extends$1l =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1l.apply(this, arguments);
}

function _objectWithoutProperties$1l(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1l(source, excluded);
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

function _objectWithoutPropertiesLoose$1l(source, excluded) {
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
var Repeat = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1l(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1l(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 1 21 5 17 9",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3 11V9a4 4 0 0 1 4-4h14",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7 23 3 19 7 15",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 13v2a4 4 0 0 1-4 4H3",
    }),
  );
});
Repeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Repeat.displayName = "Repeat";

function _extends$1k() {
  _extends$1k =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1k.apply(this, arguments);
}

function _objectWithoutProperties$1k(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1k(source, excluded);
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

function _objectWithoutPropertiesLoose$1k(source, excluded) {
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
var Rewind = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1k(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1k(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "11 19 2 12 11 5 11 19",
    }),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "22 19 13 12 22 5 22 19",
    }),
  );
});
Rewind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Rewind.displayName = "Rewind";

function _extends$1j() {
  _extends$1j =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1j.apply(this, arguments);
}

function _objectWithoutProperties$1j(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1j(source, excluded);
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

function _objectWithoutPropertiesLoose$1j(source, excluded) {
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
var RotateCcw = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1j(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1j(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "1 4 1 10 7 10",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10",
    }),
  );
});
RotateCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
RotateCcw.displayName = "RotateCcw";

function _extends$1i() {
  _extends$1i =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1i.apply(this, arguments);
}

function _objectWithoutProperties$1i(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1i(source, excluded);
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

function _objectWithoutPropertiesLoose$1i(source, excluded) {
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
var RotateCw = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1i(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1i(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "23 4 23 10 17 10",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10",
    }),
  );
});
RotateCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
RotateCw.displayName = "RotateCw";

function _extends$1h() {
  _extends$1h =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1h.apply(this, arguments);
}

function _objectWithoutProperties$1h(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1h(source, excluded);
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

function _objectWithoutPropertiesLoose$1h(source, excluded) {
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
var Rss = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1h(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1h(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 11a9 9 0 0 1 9 9",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 4a16 16 0 0 1 16 16",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "5",
      cy: "19",
      r: "1",
    }),
  );
});
Rss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Rss.displayName = "Rss";

function _extends$1g() {
  _extends$1g =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1g.apply(this, arguments);
}

function _objectWithoutProperties$1g(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1g(source, excluded);
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

function _objectWithoutPropertiesLoose$1g(source, excluded) {
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
var Save = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1g(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1g(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 21 17 13 7 13 7 21",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "7 3 7 8 15 8",
    }),
  );
});
Save.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Save.displayName = "Save";

function _extends$1f() {
  _extends$1f =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1f.apply(this, arguments);
}

function _objectWithoutProperties$1f(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1f(source, excluded);
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

function _objectWithoutPropertiesLoose$1f(source, excluded) {
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
var Scissors = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1f(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1f(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "20",
      y1: "4",
      x2: "8.12",
      y2: "15.88",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14.47",
      y1: "14.48",
      x2: "20",
      y2: "20",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8.12",
      y1: "8.12",
      x2: "12",
      y2: "12",
    }),
  );
});
Scissors.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Scissors.displayName = "Scissors";

function _extends$1e() {
  _extends$1e =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1e.apply(this, arguments);
}

function _objectWithoutProperties$1e(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1e(source, excluded);
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

function _objectWithoutPropertiesLoose$1e(source, excluded) {
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
var Search = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1e(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1e(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65",
    }),
  );
});
Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Search.displayName = "Search";

function _extends$1d() {
  _extends$1d =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1d.apply(this, arguments);
}

function _objectWithoutProperties$1d(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1d(source, excluded);
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

function _objectWithoutPropertiesLoose$1d(source, excluded) {
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
var Send = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1d(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1d(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13",
    }),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "22 2 15 22 11 13 2 9 22 2",
    }),
  );
});
Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Send.displayName = "Send";

function _extends$1c() {
  _extends$1c =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1c.apply(this, arguments);
}

function _objectWithoutProperties$1c(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1c(source, excluded);
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

function _objectWithoutPropertiesLoose$1c(source, excluded) {
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
var Server = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1c(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1c(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "14",
      width: "20",
      height: "8",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "6.01",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "18",
      x2: "6.01",
      y2: "18",
    }),
  );
});
Server.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Server.displayName = "Server";

function _extends$1b() {
  _extends$1b =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1b.apply(this, arguments);
}

function _objectWithoutProperties$1b(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1b(source, excluded);
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

function _objectWithoutPropertiesLoose$1b(source, excluded) {
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
var Settings = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1b(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1b(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",
    }),
  );
});
Settings.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Settings.displayName = "Settings";

function _extends$1a() {
  _extends$1a =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1a.apply(this, arguments);
}

function _objectWithoutProperties$1a(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1a(source, excluded);
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

function _objectWithoutPropertiesLoose$1a(source, excluded) {
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
var Share2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1a(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1a(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8.59",
      y1: "13.51",
      x2: "15.42",
      y2: "17.49",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15.41",
      y1: "6.51",
      x2: "8.59",
      y2: "10.49",
    }),
  );
});
Share2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Share2.displayName = "Share2";

function _extends$19() {
  _extends$19 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$19.apply(this, arguments);
}

function _objectWithoutProperties$19(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$19(source, excluded);
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

function _objectWithoutPropertiesLoose$19(source, excluded) {
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
var Share = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$19(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$19(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 6 12 2 8 6",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "15",
    }),
  );
});
Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Share.displayName = "Share";

function _extends$18() {
  _extends$18 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$18.apply(this, arguments);
}

function _objectWithoutProperties$18(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$18(source, excluded);
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

function _objectWithoutPropertiesLoose$18(source, excluded) {
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
var ShieldOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$18(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$18(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
  );
});
ShieldOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ShieldOff.displayName = "ShieldOff";

function _extends$17() {
  _extends$17 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$17.apply(this, arguments);
}

function _objectWithoutProperties$17(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$17(source, excluded);
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

function _objectWithoutPropertiesLoose$17(source, excluded) {
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
var Shield = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$17(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$17(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    }),
  );
});
Shield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Shield.displayName = "Shield";

function _extends$16() {
  _extends$16 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$16.apply(this, arguments);
}

function _objectWithoutProperties$16(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$16(source, excluded);
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

function _objectWithoutPropertiesLoose$16(source, excluded) {
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
var ShoppingBag = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$16(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$16(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 10a4 4 0 0 1-8 0",
    }),
  );
});
ShoppingBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ShoppingBag.displayName = "ShoppingBag";

function _extends$15() {
  _extends$15 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$15.apply(this, arguments);
}

function _objectWithoutProperties$15(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$15(source, excluded);
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

function _objectWithoutPropertiesLoose$15(source, excluded) {
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
var ShoppingCart = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$15(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$15(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "9",
      cy: "21",
      r: "1",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "20",
      cy: "21",
      r: "1",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
    }),
  );
});
ShoppingCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ShoppingCart.displayName = "ShoppingCart";

function _extends$14() {
  _extends$14 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$14.apply(this, arguments);
}

function _objectWithoutProperties$14(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$14(source, excluded);
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

function _objectWithoutPropertiesLoose$14(source, excluded) {
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
var Shuffle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$14(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$14(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 3 21 3 21 8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4",
      y1: "20",
      x2: "21",
      y2: "3",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "21 16 21 21 16 21",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "15",
      x2: "21",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4",
      y1: "4",
      x2: "9",
      y2: "9",
    }),
  );
});
Shuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Shuffle.displayName = "Shuffle";

function _extends$13() {
  _extends$13 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$13.apply(this, arguments);
}

function _objectWithoutProperties$13(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$13(source, excluded);
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

function _objectWithoutPropertiesLoose$13(source, excluded) {
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
var Sidebar = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$13(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$13(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "3",
      x2: "9",
      y2: "21",
    }),
  );
});
Sidebar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Sidebar.displayName = "Sidebar";

function _extends$12() {
  _extends$12 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$12.apply(this, arguments);
}

function _objectWithoutProperties$12(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$12(source, excluded);
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

function _objectWithoutPropertiesLoose$12(source, excluded) {
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
var SkipBack = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$12(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$12(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "19 20 9 12 19 4 19 20",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "5",
      y1: "19",
      x2: "5",
      y2: "5",
    }),
  );
});
SkipBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SkipBack.displayName = "SkipBack";

function _extends$11() {
  _extends$11 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$11.apply(this, arguments);
}

function _objectWithoutProperties$11(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$11(source, excluded);
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

function _objectWithoutPropertiesLoose$11(source, excluded) {
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
var SkipForward = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$11(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$11(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "5 4 15 12 5 20 5 4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "19",
      y1: "5",
      x2: "19",
      y2: "19",
    }),
  );
});
SkipForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
SkipForward.displayName = "SkipForward";

function _extends$10() {
  _extends$10 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$10.apply(this, arguments);
}

function _objectWithoutProperties$10(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$10(source, excluded);
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

function _objectWithoutPropertiesLoose$10(source, excluded) {
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
var Slack = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$10(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$10(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z",
    }),
  );
});
Slack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Slack.displayName = "Slack";

function _extends$$() {
  _extends$$ =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$$.apply(this, arguments);
}

function _objectWithoutProperties$$(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$$(source, excluded);
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

function _objectWithoutPropertiesLoose$$(source, excluded) {
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
var Slash = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$$(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$$(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.93",
      y1: "4.93",
      x2: "19.07",
      y2: "19.07",
    }),
  );
});
Slash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Slash.displayName = "Slash";

function _extends$_() {
  _extends$_ =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$_.apply(this, arguments);
}

function _objectWithoutProperties$_(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$_(source, excluded);
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

function _objectWithoutPropertiesLoose$_(source, excluded) {
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
var Sliders = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$_(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$_(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4",
      y1: "21",
      x2: "4",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4",
      y1: "10",
      x2: "4",
      y2: "3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "20",
      y1: "21",
      x2: "20",
      y2: "16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "20",
      y1: "12",
      x2: "20",
      y2: "3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "14",
      x2: "7",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "8",
      x2: "15",
      y2: "8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "16",
      x2: "23",
      y2: "16",
    }),
  );
});
Sliders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Sliders.displayName = "Sliders";

function _extends$Z() {
  _extends$Z =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$Z.apply(this, arguments);
}

function _objectWithoutProperties$Z(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$Z(source, excluded);
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

function _objectWithoutPropertiesLoose$Z(source, excluded) {
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
var Smartphone = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$Z(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$Z(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "5",
      y: "2",
      width: "14",
      height: "20",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18",
    }),
  );
});
Smartphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Smartphone.displayName = "Smartphone";

function _extends$Y() {
  _extends$Y =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$Y.apply(this, arguments);
}

function _objectWithoutProperties$Y(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$Y(source, excluded);
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

function _objectWithoutPropertiesLoose$Y(source, excluded) {
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
var Smile = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$Y(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$Y(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8 14s1.5 2 4 2 4-2 4-2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9",
    }),
  );
});
Smile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Smile.displayName = "Smile";

function _extends$X() {
  _extends$X =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$X.apply(this, arguments);
}

function _objectWithoutProperties$X(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$X(source, excluded);
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

function _objectWithoutPropertiesLoose$X(source, excluded) {
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
var Speaker = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$X(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$X(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "14",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "6",
      x2: "12.01",
      y2: "6",
    }),
  );
});
Speaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Speaker.displayName = "Speaker";

function _extends$W() {
  _extends$W =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$W.apply(this, arguments);
}

function _objectWithoutProperties$W(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$W(source, excluded);
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

function _objectWithoutPropertiesLoose$W(source, excluded) {
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
var Square = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$W(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$W(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
  );
});
Square.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Square.displayName = "Square";

function _extends$V() {
  _extends$V =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$V.apply(this, arguments);
}

function _objectWithoutProperties$V(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$V(source, excluded);
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

function _objectWithoutPropertiesLoose$V(source, excluded) {
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
var Star = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$V(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$V(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    }),
  );
});
Star.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Star.displayName = "Star";

function _extends$U() {
  _extends$U =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$U.apply(this, arguments);
}

function _objectWithoutProperties$U(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$U(source, excluded);
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

function _objectWithoutPropertiesLoose$U(source, excluded) {
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
var StopCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$U(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$U(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "9",
      y: "9",
      width: "6",
      height: "6",
    }),
  );
});
StopCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
StopCircle.displayName = "StopCircle";

function _extends$T() {
  _extends$T =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$T.apply(this, arguments);
}

function _objectWithoutProperties$T(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$T(source, excluded);
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

function _objectWithoutPropertiesLoose$T(source, excluded) {
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
var Sun = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$T(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$T(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "5",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.22",
      y1: "4.22",
      x2: "5.64",
      y2: "5.64",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18.36",
      y1: "18.36",
      x2: "19.78",
      y2: "19.78",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "12",
      x2: "3",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "23",
      y2: "12",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.22",
      y1: "19.78",
      x2: "5.64",
      y2: "18.36",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18.36",
      y1: "5.64",
      x2: "19.78",
      y2: "4.22",
    }),
  );
});
Sun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Sun.displayName = "Sun";

function _extends$S() {
  _extends$S =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$S.apply(this, arguments);
}

function _objectWithoutProperties$S(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$S(source, excluded);
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

function _objectWithoutPropertiesLoose$S(source, excluded) {
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
var Sunrise = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$S(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$S(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 18a5 5 0 0 0-10 0",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "9",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.22",
      y1: "10.22",
      x2: "5.64",
      y2: "11.64",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "18",
      x2: "3",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "18",
      x2: "23",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18.36",
      y1: "11.64",
      x2: "19.78",
      y2: "10.22",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "22",
      x2: "1",
      y2: "22",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "8 6 12 2 16 6",
    }),
  );
});
Sunrise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Sunrise.displayName = "Sunrise";

function _extends$R() {
  _extends$R =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$R.apply(this, arguments);
}

function _objectWithoutProperties$R(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$R(source, excluded);
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

function _objectWithoutPropertiesLoose$R(source, excluded) {
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
var Sunset = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$R(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$R(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 18a5 5 0 0 0-10 0",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4.22",
      y1: "10.22",
      x2: "5.64",
      y2: "11.64",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "18",
      x2: "3",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "18",
      x2: "23",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18.36",
      y1: "11.64",
      x2: "19.78",
      y2: "10.22",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "22",
      x2: "1",
      y2: "22",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 5 12 9 8 5",
    }),
  );
});
Sunset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Sunset.displayName = "Sunset";

function _extends$Q() {
  _extends$Q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$Q.apply(this, arguments);
}

function _objectWithoutProperties$Q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$Q(source, excluded);
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

function _objectWithoutPropertiesLoose$Q(source, excluded) {
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
var Table = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$Q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$Q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
    }),
  );
});
Table.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Table.displayName = "Table";

function _extends$P() {
  _extends$P =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$P.apply(this, arguments);
}

function _objectWithoutProperties$P(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$P(source, excluded);
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

function _objectWithoutPropertiesLoose$P(source, excluded) {
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
var Tablet = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$P(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$P(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12.01",
      y2: "18",
    }),
  );
});
Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Tablet.displayName = "Tablet";

function _extends$O() {
  _extends$O =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$O.apply(this, arguments);
}

function _objectWithoutProperties$O(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$O(source, excluded);
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

function _objectWithoutPropertiesLoose$O(source, excluded) {
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
var Tag = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$O(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$O(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "7",
      y1: "7",
      x2: "7.01",
      y2: "7",
    }),
  );
});
Tag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Tag.displayName = "Tag";

function _extends$N() {
  _extends$N =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$N.apply(this, arguments);
}

function _objectWithoutProperties$N(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$N(source, excluded);
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

function _objectWithoutPropertiesLoose$N(source, excluded) {
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
var Target = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$N(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$N(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "6",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2",
    }),
  );
});
Target.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Target.displayName = "Target";

function _extends$M() {
  _extends$M =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$M.apply(this, arguments);
}

function _objectWithoutProperties$M(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$M(source, excluded);
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

function _objectWithoutPropertiesLoose$M(source, excluded) {
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
var Terminal = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$M(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$M(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "4 17 10 11 4 5",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "20",
      y2: "19",
    }),
  );
});
Terminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Terminal.displayName = "Terminal";

function _extends$L() {
  _extends$L =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$L.apply(this, arguments);
}

function _objectWithoutProperties$L(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$L(source, excluded);
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

function _objectWithoutPropertiesLoose$L(source, excluded) {
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
var Thermometer = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$L(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$L(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z",
    }),
  );
});
Thermometer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Thermometer.displayName = "Thermometer";

function _extends$K() {
  _extends$K =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$K.apply(this, arguments);
}

function _objectWithoutProperties$K(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$K(source, excluded);
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

function _objectWithoutPropertiesLoose$K(source, excluded) {
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
var ThumbsDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$K(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$K(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17",
    }),
  );
});
ThumbsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ThumbsDown.displayName = "ThumbsDown";

function _extends$J() {
  _extends$J =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$J.apply(this, arguments);
}

function _objectWithoutProperties$J(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$J(source, excluded);
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

function _objectWithoutPropertiesLoose$J(source, excluded) {
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
var ThumbsUp = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$J(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$J(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3",
    }),
  );
});
ThumbsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ThumbsUp.displayName = "ThumbsUp";

function _extends$I() {
  _extends$I =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$I.apply(this, arguments);
}

function _objectWithoutProperties$I(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$I(source, excluded);
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

function _objectWithoutPropertiesLoose$I(source, excluded) {
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
var ToggleLeft = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$I(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$I(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "1",
      y: "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "8",
      cy: "12",
      r: "3",
    }),
  );
});
ToggleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ToggleLeft.displayName = "ToggleLeft";

function _extends$H() {
  _extends$H =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$H.apply(this, arguments);
}

function _objectWithoutProperties$H(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$H(source, excluded);
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

function _objectWithoutPropertiesLoose$H(source, excluded) {
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
var ToggleRight = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$H(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$H(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "1",
      y: "5",
      width: "22",
      height: "14",
      rx: "7",
      ry: "7",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "16",
      cy: "12",
      r: "3",
    }),
  );
});
ToggleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ToggleRight.displayName = "ToggleRight";

function _extends$G() {
  _extends$G =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$G.apply(this, arguments);
}

function _objectWithoutProperties$G(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$G(source, excluded);
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

function _objectWithoutPropertiesLoose$G(source, excluded) {
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
var Tool = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$G(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$G(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    }),
  );
});
Tool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Tool.displayName = "Tool";

function _extends$F() {
  _extends$F =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$F.apply(this, arguments);
}

function _objectWithoutProperties$F(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$F(source, excluded);
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

function _objectWithoutPropertiesLoose$F(source, excluded) {
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
var Trash2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$F(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$F(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "3 6 5 6 21 6",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "10",
      y1: "11",
      x2: "10",
      y2: "17",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "14",
      y1: "11",
      x2: "14",
      y2: "17",
    }),
  );
});
Trash2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Trash2.displayName = "Trash2";

function _extends$E() {
  _extends$E =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$E.apply(this, arguments);
}

function _objectWithoutProperties$E(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$E(source, excluded);
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

function _objectWithoutPropertiesLoose$E(source, excluded) {
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
var Trash = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$E(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$E(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "3 6 5 6 21 6",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    }),
  );
});
Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Trash.displayName = "Trash";

function _extends$D() {
  _extends$D =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$D.apply(this, arguments);
}

function _objectWithoutProperties$D(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$D(source, excluded);
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

function _objectWithoutPropertiesLoose$D(source, excluded) {
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
var Trello = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$D(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$D(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "7",
      y: "7",
      width: "3",
      height: "9",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "14",
      y: "7",
      width: "3",
      height: "5",
    }),
  );
});
Trello.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Trello.displayName = "Trello";

function _extends$C() {
  _extends$C =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$C.apply(this, arguments);
}

function _objectWithoutProperties$C(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$C(source, excluded);
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

function _objectWithoutPropertiesLoose$C(source, excluded) {
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
var TrendingDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$C(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$C(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "23 18 13.5 8.5 8.5 13.5 1 6",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 18 23 18 23 12",
    }),
  );
});
TrendingDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
TrendingDown.displayName = "TrendingDown";

function _extends$B() {
  _extends$B =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$B.apply(this, arguments);
}

function _objectWithoutProperties$B(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$B(source, excluded);
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

function _objectWithoutPropertiesLoose$B(source, excluded) {
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
var TrendingUp = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$B(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$B(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "23 6 13.5 15.5 8.5 10.5 1 18",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 6 23 6 23 12",
    }),
  );
});
TrendingUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
TrendingUp.displayName = "TrendingUp";

function _extends$A() {
  _extends$A =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$A.apply(this, arguments);
}

function _objectWithoutProperties$A(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$A(source, excluded);
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

function _objectWithoutPropertiesLoose$A(source, excluded) {
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
var Triangle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$A(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$A(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
    }),
  );
});
Triangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Triangle.displayName = "Triangle";

function _extends$z() {
  _extends$z =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$z.apply(this, arguments);
}

function _objectWithoutProperties$z(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$z(source, excluded);
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

function _objectWithoutPropertiesLoose$z(source, excluded) {
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
var Truck = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$z(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$z(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "1",
      y: "3",
      width: "15",
      height: "13",
    }),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "16 8 20 8 23 11 23 16 16 16 16 8",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "5.5",
      cy: "18.5",
      r: "2.5",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "18.5",
      cy: "18.5",
      r: "2.5",
    }),
  );
});
Truck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Truck.displayName = "Truck";

function _extends$y() {
  _extends$y =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$y.apply(this, arguments);
}

function _objectWithoutProperties$y(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$y(source, excluded);
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

function _objectWithoutPropertiesLoose$y(source, excluded) {
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
var Tv = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$y(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$y(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "15",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 2 12 7 7 2",
    }),
  );
});
Tv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Tv.displayName = "Tv";

function _extends$x() {
  _extends$x =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$x.apply(this, arguments);
}

function _objectWithoutProperties$x(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$x(source, excluded);
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

function _objectWithoutPropertiesLoose$x(source, excluded) {
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
var Twitch = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$x(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$x(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",
    }),
  );
});
Twitch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Twitch.displayName = "Twitch";

function _extends$w() {
  _extends$w =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$w.apply(this, arguments);
}

function _objectWithoutProperties$w(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$w(source, excluded);
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

function _objectWithoutPropertiesLoose$w(source, excluded) {
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
var Twitter = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$w(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$w(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    }),
  );
});
Twitter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Twitter.displayName = "Twitter";

function _extends$v() {
  _extends$v =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$v.apply(this, arguments);
}

function _objectWithoutProperties$v(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$v(source, excluded);
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

function _objectWithoutPropertiesLoose$v(source, excluded) {
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
var Type = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$v(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$v(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "4 7 4 4 20 4 20 7",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "20",
      x2: "15",
      y2: "20",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "4",
      x2: "12",
      y2: "20",
    }),
  );
});
Type.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Type.displayName = "Type";

function _extends$u() {
  _extends$u =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$u.apply(this, arguments);
}

function _objectWithoutProperties$u(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$u(source, excluded);
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

function _objectWithoutPropertiesLoose$u(source, excluded) {
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
var Umbrella = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$u(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$u(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7",
    }),
  );
});
Umbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Umbrella.displayName = "Umbrella";

function _extends$t() {
  _extends$t =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$t.apply(this, arguments);
}

function _objectWithoutProperties$t(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$t(source, excluded);
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

function _objectWithoutPropertiesLoose$t(source, excluded) {
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
var Underline = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$t(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$t(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "4",
      y1: "21",
      x2: "20",
      y2: "21",
    }),
  );
});
Underline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Underline.displayName = "Underline";

function _extends$s() {
  _extends$s =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$s.apply(this, arguments);
}

function _objectWithoutProperties$s(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$s(source, excluded);
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

function _objectWithoutPropertiesLoose$s(source, excluded) {
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
var Unlock = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$s(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$s(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "11",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 9.9-1",
    }),
  );
});
Unlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Unlock.displayName = "Unlock";

function _extends$r() {
  _extends$r =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$r.apply(this, arguments);
}

function _objectWithoutProperties$r(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$r(source, excluded);
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

function _objectWithoutPropertiesLoose$r(source, excluded) {
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
var UploadCloud = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$r(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$r(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 16 12 12 8 16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "21",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "16 16 12 12 8 16",
    }),
  );
});
UploadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
UploadCloud.displayName = "UploadCloud";

function _extends$q() {
  _extends$q =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$q.apply(this, arguments);
}

function _objectWithoutProperties$q(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$q(source, excluded);
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

function _objectWithoutPropertiesLoose$q(source, excluded) {
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
var Upload = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$q(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$q(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 8 12 3 7 8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "3",
      x2: "12",
      y2: "15",
    }),
  );
});
Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Upload.displayName = "Upload";

function _extends$p() {
  _extends$p =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$p.apply(this, arguments);
}

function _objectWithoutProperties$p(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$p(source, excluded);
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

function _objectWithoutPropertiesLoose$p(source, excluded) {
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
var UserCheck = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$p(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$p(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "8.5",
      cy: "7",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "17 11 19 13 23 9",
    }),
  );
});
UserCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
UserCheck.displayName = "UserCheck";

function _extends$o() {
  _extends$o =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$o.apply(this, arguments);
}

function _objectWithoutProperties$o(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$o(source, excluded);
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

function _objectWithoutPropertiesLoose$o(source, excluded) {
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
var UserMinus = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$o(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$o(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "8.5",
      cy: "7",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "11",
      x2: "17",
      y2: "11",
    }),
  );
});
UserMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
UserMinus.displayName = "UserMinus";

function _extends$n() {
  _extends$n =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$n.apply(this, arguments);
}

function _objectWithoutProperties$n(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$n(source, excluded);
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

function _objectWithoutPropertiesLoose$n(source, excluded) {
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
var UserPlus = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$n(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$n(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "8.5",
      cy: "7",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "20",
      y1: "8",
      x2: "20",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "11",
      x2: "17",
      y2: "11",
    }),
  );
});
UserPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
UserPlus.displayName = "UserPlus";

function _extends$m() {
  _extends$m =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$m.apply(this, arguments);
}

function _objectWithoutProperties$m(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$m(source, excluded);
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

function _objectWithoutPropertiesLoose$m(source, excluded) {
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
var UserX = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$m(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$m(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "8.5",
      cy: "7",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "8",
      x2: "23",
      y2: "13",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "8",
      x2: "18",
      y2: "13",
    }),
  );
});
UserX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
UserX.displayName = "UserX";

function _extends$l() {
  _extends$l =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$l.apply(this, arguments);
}

function _objectWithoutProperties$l(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$l(source, excluded);
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

function _objectWithoutPropertiesLoose$l(source, excluded) {
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
var User = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$l(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$l(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "7",
      r: "4",
    }),
  );
});
User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
User.displayName = "User";

function _extends$k() {
  _extends$k =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$k.apply(this, arguments);
}

function _objectWithoutProperties$k(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$k(source, excluded);
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

function _objectWithoutPropertiesLoose$k(source, excluded) {
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
var Users = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$k(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$k(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75",
    }),
  );
});
Users.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Users.displayName = "Users";

function _extends$j() {
  _extends$j =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$j.apply(this, arguments);
}

function _objectWithoutProperties$j(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$j(source, excluded);
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

function _objectWithoutPropertiesLoose$j(source, excluded) {
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
var VideoOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$j(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$j(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
  );
});
VideoOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
VideoOff.displayName = "VideoOff";

function _extends$i() {
  _extends$i =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$i.apply(this, arguments);
}

function _objectWithoutProperties$i(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$i(source, excluded);
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

function _objectWithoutPropertiesLoose$i(source, excluded) {
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
var Video = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$i(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$i(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "23 7 16 12 23 17 23 7",
    }),
    /*#__PURE__*/ React.createElement("rect", {
      x: "1",
      y: "5",
      width: "15",
      height: "14",
      rx: "2",
      ry: "2",
    }),
  );
});
Video.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Video.displayName = "Video";

function _extends$h() {
  _extends$h =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$h.apply(this, arguments);
}

function _objectWithoutProperties$h(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$h(source, excluded);
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

function _objectWithoutPropertiesLoose$h(source, excluded) {
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
var Voicemail = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$h(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$h(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "5.5",
      cy: "11.5",
      r: "4.5",
    }),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "18.5",
      cy: "11.5",
      r: "4.5",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "5.5",
      y1: "16",
      x2: "18.5",
      y2: "16",
    }),
  );
});
Voicemail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Voicemail.displayName = "Voicemail";

function _extends$g() {
  _extends$g =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$g.apply(this, arguments);
}

function _objectWithoutProperties$g(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$g(source, excluded);
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

function _objectWithoutPropertiesLoose$g(source, excluded) {
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
var Volume1 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$g(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$g(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M15.54 8.46a5 5 0 0 1 0 7.07",
    }),
  );
});
Volume1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Volume1.displayName = "Volume1";

function _extends$f() {
  _extends$f =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$f.apply(this, arguments);
}

function _objectWithoutProperties$f(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$f(source, excluded);
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

function _objectWithoutPropertiesLoose$f(source, excluded) {
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
var Volume2 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$f(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$f(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",
    }),
  );
});
Volume2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Volume2.displayName = "Volume2";

function _extends$e() {
  _extends$e =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$e.apply(this, arguments);
}

function _objectWithoutProperties$e(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$e(source, excluded);
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

function _objectWithoutPropertiesLoose$e(source, excluded) {
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
var VolumeX = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$e(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$e(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "23",
      y1: "9",
      x2: "17",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "17",
      y1: "9",
      x2: "23",
      y2: "15",
    }),
  );
});
VolumeX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
VolumeX.displayName = "VolumeX";

function _extends$d() {
  _extends$d =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$d.apply(this, arguments);
}

function _objectWithoutProperties$d(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$d(source, excluded);
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

function _objectWithoutPropertiesLoose$d(source, excluded) {
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
var Volume = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$d(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$d(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    }),
  );
});
Volume.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Volume.displayName = "Volume";

function _extends$c() {
  _extends$c =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$c.apply(this, arguments);
}

function _objectWithoutProperties$c(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$c(source, excluded);
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

function _objectWithoutPropertiesLoose$c(source, excluded) {
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
var Watch = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$c(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$c(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "7",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "12 9 12 12 13.5 13.5",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83",
    }),
  );
});
Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Watch.displayName = "Watch";

function _extends$b() {
  _extends$b =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$b.apply(this, arguments);
}

function _objectWithoutProperties$b(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$b(source, excluded);
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

function _objectWithoutPropertiesLoose$b(source, excluded) {
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
var WifiOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$b(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$b(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M10.71 5.05A16 16 0 0 1 22.58 9",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.53 16.11a6 6 0 0 1 6.95 0",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12.01",
      y2: "20",
    }),
  );
});
WifiOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
WifiOff.displayName = "WifiOff";

function _extends$a() {
  _extends$a =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$a.apply(this, arguments);
}

function _objectWithoutProperties$a(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$a(source, excluded);
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

function _objectWithoutPropertiesLoose$a(source, excluded) {
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
var Wifi = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$a(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$a(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M5 12.55a11 11 0 0 1 14.08 0",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M1.42 9a16 16 0 0 1 21.16 0",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M8.53 16.11a6 6 0 0 1 6.95 0",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12.01",
      y2: "20",
    }),
  );
});
Wifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Wifi.displayName = "Wifi";

function _extends$9() {
  _extends$9 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$9.apply(this, arguments);
}

function _objectWithoutProperties$9(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$9(source, excluded);
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

function _objectWithoutPropertiesLoose$9(source, excluded) {
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
var Wind = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$9(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$9(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2",
    }),
  );
});
Wind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Wind.displayName = "Wind";

function _extends$8() {
  _extends$8 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$8.apply(this, arguments);
}

function _objectWithoutProperties$8(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$8(source, excluded);
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

function _objectWithoutPropertiesLoose$8(source, excluded) {
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
var XCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$8(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$8(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15",
    }),
  );
});
XCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
XCircle.displayName = "XCircle";

function _extends$7() {
  _extends$7 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$7.apply(this, arguments);
}

function _objectWithoutProperties$7(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$7(source, excluded);
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

function _objectWithoutPropertiesLoose$7(source, excluded) {
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
var XOctagon = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$7(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$7(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points:
        "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15",
    }),
  );
});
XOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
XOctagon.displayName = "XOctagon";

function _extends$6() {
  _extends$6 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$6.apply(this, arguments);
}

function _objectWithoutProperties$6(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$6(source, excluded);
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

function _objectWithoutPropertiesLoose$6(source, excluded) {
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
var XSquare = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$6(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$6(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15",
    }),
  );
});
XSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
XSquare.displayName = "XSquare";

function _extends$5() {
  _extends$5 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$5.apply(this, arguments);
}

function _objectWithoutProperties$5(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$5(source, excluded);
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

function _objectWithoutPropertiesLoose$5(source, excluded) {
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
var X$1 = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$5(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$5(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    }),
  );
});
X$1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
X$1.displayName = "X";

function _extends$4() {
  _extends$4 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4.apply(this, arguments);
}

function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4(source, excluded);
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

function _objectWithoutPropertiesLoose$4(source, excluded) {
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
var Youtube = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$4(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$4(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("path", {
      d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z",
    }),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02",
    }),
  );
});
Youtube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Youtube.displayName = "Youtube";

function _extends$3() {
  _extends$3 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3.apply(this, arguments);
}

function _objectWithoutProperties$3(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3(source, excluded);
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

function _objectWithoutPropertiesLoose$3(source, excluded) {
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
var ZapOff = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$3(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$3(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "12.41 6.75 13 2 10.57 4.92",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "18.57 12.91 21 10 15.66 10",
    }),
    /*#__PURE__*/ React.createElement("polyline", {
      points: "8 8 3 14 12 14 11 22 16 16",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23",
    }),
  );
});
ZapOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ZapOff.displayName = "ZapOff";

function _extends$2() {
  _extends$2 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2.apply(this, arguments);
}

function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
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

function _objectWithoutPropertiesLoose$2(source, excluded) {
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
var Zap = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$2(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$2(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    }),
  );
});
Zap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Zap.displayName = "Zap";

function _extends$1() {
  _extends$1 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1.apply(this, arguments);
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
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

function _objectWithoutPropertiesLoose$1(source, excluded) {
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
var ZoomIn = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties$1(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "11",
      y1: "8",
      x2: "11",
      y2: "14",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11",
    }),
  );
});
ZoomIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ZoomIn.displayName = "ZoomIn";

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
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
var ZoomOut = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? "currentColor" : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    /*#__PURE__*/ React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65",
    }),
    /*#__PURE__*/ React.createElement("line", {
      x1: "8",
      y1: "11",
      x2: "14",
      y2: "11",
    }),
  );
});
ZoomOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ZoomOut.displayName = "ZoomOut";

var FeatherIcon = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  Activity: Activity,
  Airplay: Airplay,
  AlertCircle: AlertCircle,
  AlertOctagon: AlertOctagon,
  AlertTriangle: AlertTriangle,
  AlignCenter: AlignCenter,
  AlignJustify: AlignJustify,
  AlignLeft: AlignLeft,
  AlignRight: AlignRight,
  Anchor: Anchor,
  Aperture: Aperture,
  Archive: Archive,
  ArrowDown: ArrowDown,
  ArrowDownCircle: ArrowDownCircle,
  ArrowDownLeft: ArrowDownLeft,
  ArrowDownRight: ArrowDownRight,
  ArrowLeft: ArrowLeft,
  ArrowLeftCircle: ArrowLeftCircle,
  ArrowRight: ArrowRight,
  ArrowRightCircle: ArrowRightCircle,
  ArrowUp: ArrowUp,
  ArrowUpCircle: ArrowUpCircle,
  ArrowUpLeft: ArrowUpLeft,
  ArrowUpRight: ArrowUpRight,
  AtSign: AtSign,
  Award: Award,
  BarChart: BarChart,
  BarChart2: BarChart2,
  Battery: Battery,
  BatteryCharging: BatteryCharging,
  Bell: Bell,
  BellOff: BellOff,
  Bluetooth: Bluetooth,
  Bold: Bold,
  Book: Book,
  BookOpen: BookOpen,
  Bookmark: Bookmark,
  Box: Box,
  Briefcase: Briefcase,
  Calendar: Calendar,
  Camera: Camera,
  CameraOff: CameraOff,
  Cast: Cast,
  Check: Check,
  CheckCircle: CheckCircle,
  CheckSquare: CheckSquare,
  ChevronDown: ChevronDown,
  ChevronLeft: ChevronLeft,
  ChevronRight: ChevronRight,
  ChevronUp: ChevronUp,
  ChevronsDown: ChevronsDown,
  ChevronsLeft: ChevronsLeft,
  ChevronsRight: ChevronsRight,
  ChevronsUp: ChevronsUp,
  Chrome: Chrome,
  Circle: Circle,
  Clipboard: Clipboard,
  Clock: Clock,
  Cloud: Cloud,
  CloudDrizzle: CloudDrizzle,
  CloudLightning: CloudLightning,
  CloudOff: CloudOff,
  CloudRain: CloudRain,
  CloudSnow: CloudSnow,
  Code: Code,
  Codepen: Codepen,
  Codesandbox: Codesandbox,
  Coffee: Coffee,
  Columns: Columns,
  Command: Command,
  Compass: Compass,
  Copy: Copy,
  CornerDownLeft: CornerDownLeft,
  CornerDownRight: CornerDownRight,
  CornerLeftDown: CornerLeftDown,
  CornerLeftUp: CornerLeftUp,
  CornerRightDown: CornerRightDown,
  CornerRightUp: CornerRightUp,
  CornerUpLeft: CornerUpLeft,
  CornerUpRight: CornerUpRight,
  Cpu: Cpu,
  CreditCard: CreditCard,
  Crop: Crop,
  Crosshair: Crosshair,
  Database: Database,
  Delete: Delete,
  Disc: Disc,
  Divide: Divide,
  DivideCircle: DivideCircle,
  DivideSquare: DivideSquare,
  DollarSign: DollarSign,
  Download: Download,
  DownloadCloud: DownloadCloud,
  Dribbble: Dribbble,
  Droplet: Droplet,
  Edit: Edit,
  Edit2: Edit2,
  Edit3: Edit3,
  ExternalLink: ExternalLink,
  Eye: Eye,
  EyeOff: EyeOff,
  Facebook: Facebook,
  FastForward: FastForward,
  Feather: Feather$1,
  Figma: Figma,
  File: File,
  FileMinus: FileMinus,
  FilePlus: FilePlus,
  FileText: FileText,
  Film: Film,
  Filter: Filter,
  Flag: Flag,
  Folder: Folder,
  FolderMinus: FolderMinus,
  FolderPlus: FolderPlus,
  Framer: Framer,
  Frown: Frown,
  Gift: Gift,
  GitBranch: GitBranch,
  GitCommit: GitCommit,
  GitHub: GitHub,
  GitMerge: GitMerge,
  GitPullRequest: GitPullRequest,
  Gitlab: Gitlab,
  Globe: Globe,
  Grid: Grid,
  HardDrive: HardDrive,
  Hash: Hash,
  Headphones: Headphones,
  Heart: Heart,
  HelpCircle: HelpCircle,
  Hexagon: Hexagon,
  Home: Home,
  Image: Image,
  Inbox: Inbox,
  Info: Info,
  Instagram: Instagram,
  Italic: Italic,
  Key: Key,
  Layers: Layers,
  Layout: Layout,
  LifeBuoy: LifeBuoy,
  Link: Link,
  Link2: Link2,
  Linkedin: Linkedin,
  List: List,
  Loader: Loader,
  Lock: Lock,
  LogIn: LogIn,
  LogOut: LogOut,
  Mail: Mail,
  Map: Map$1,
  MapPin: MapPin,
  Maximize: Maximize,
  Maximize2: Maximize2,
  Meh: Meh,
  Menu: Menu,
  MessageCircle: MessageCircle,
  MessageSquare: MessageSquare,
  Mic: Mic,
  MicOff: MicOff,
  Minimize: Minimize,
  Minimize2: Minimize2,
  Minus: Minus,
  MinusCircle: MinusCircle,
  MinusSquare: MinusSquare,
  Monitor: Monitor,
  Moon: Moon,
  MoreHorizontal: MoreHorizontal,
  MoreVertical: MoreVertical,
  MousePointer: MousePointer,
  Move: Move,
  Music: Music,
  Navigation: Navigation,
  Navigation2: Navigation2,
  Octagon: Octagon,
  Package: Package,
  Paperclip: Paperclip,
  Pause: Pause,
  PauseCircle: PauseCircle,
  PenTool: PenTool,
  Percent: Percent,
  Phone: Phone,
  PhoneCall: PhoneCall,
  PhoneForwarded: PhoneForwarded,
  PhoneIncoming: PhoneIncoming,
  PhoneMissed: PhoneMissed,
  PhoneOff: PhoneOff,
  PhoneOutgoing: PhoneOutgoing,
  PieChart: PieChart,
  Play: Play,
  PlayCircle: PlayCircle,
  Plus: Plus,
  PlusCircle: PlusCircle,
  PlusSquare: PlusSquare,
  Pocket: Pocket,
  Power: Power,
  Printer: Printer,
  Radio: Radio,
  RefreshCcw: RefreshCcw,
  RefreshCw: RefreshCw,
  Repeat: Repeat,
  Rewind: Rewind,
  RotateCcw: RotateCcw,
  RotateCw: RotateCw,
  Rss: Rss,
  Save: Save,
  Scissors: Scissors,
  Search: Search,
  Send: Send,
  Server: Server,
  Settings: Settings,
  Share: Share,
  Share2: Share2,
  Shield: Shield,
  ShieldOff: ShieldOff,
  ShoppingBag: ShoppingBag,
  ShoppingCart: ShoppingCart,
  Shuffle: Shuffle,
  Sidebar: Sidebar,
  SkipBack: SkipBack,
  SkipForward: SkipForward,
  Slack: Slack,
  Slash: Slash,
  Sliders: Sliders,
  Smartphone: Smartphone,
  Smile: Smile,
  Speaker: Speaker,
  Square: Square,
  Star: Star,
  StopCircle: StopCircle,
  Sun: Sun,
  Sunrise: Sunrise,
  Sunset: Sunset,
  Table: Table,
  Tablet: Tablet,
  Tag: Tag,
  Target: Target,
  Terminal: Terminal,
  Thermometer: Thermometer,
  ThumbsDown: ThumbsDown,
  ThumbsUp: ThumbsUp,
  ToggleLeft: ToggleLeft,
  ToggleRight: ToggleRight,
  Tool: Tool,
  Trash: Trash,
  Trash2: Trash2,
  Trello: Trello,
  TrendingDown: TrendingDown,
  TrendingUp: TrendingUp,
  Triangle: Triangle,
  Truck: Truck,
  Tv: Tv,
  Twitch: Twitch,
  Twitter: Twitter,
  Type: Type,
  Umbrella: Umbrella,
  Underline: Underline,
  Unlock: Unlock,
  Upload: Upload,
  UploadCloud: UploadCloud,
  User: User,
  UserCheck: UserCheck,
  UserMinus: UserMinus,
  UserPlus: UserPlus,
  UserX: UserX,
  Users: Users,
  Video: Video,
  VideoOff: VideoOff,
  Voicemail: Voicemail,
  Volume: Volume,
  Volume1: Volume1,
  Volume2: Volume2,
  VolumeX: VolumeX,
  Watch: Watch,
  Wifi: Wifi,
  WifiOff: WifiOff,
  Wind: Wind,
  X: X$1,
  XCircle: XCircle,
  XOctagon: XOctagon,
  XSquare: XSquare,
  Youtube: Youtube,
  Zap: Zap,
  ZapOff: ZapOff,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut,
});

const Feather = (_a) => {
  var { icon, size } = _a,
    rest = __rest(_a, ["icon", "size"]);
  // @ts-expect-error No types for Feather as signatures
  const Icon = FeatherIcon[String(icon)] || Activity;
  return jsxRuntimeExports.jsx(Icon, Object.assign({ size: size }, rest));
};

const Icon = (_a) => {
  var {
      icon,
      size = 32,
      color = colors.primary.base,
      ariaLabel = undefined,
      ariaHidden = undefined,
    } = _a,
    props = __rest(_a, ["icon", "size", "color", "ariaLabel", "ariaHidden"]);
  return jsxRuntimeExports.jsx("span", {
    role: "img",
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    children: jsxRuntimeExports.jsx(
      Feather,
      Object.assign({ icon: icon, size: size, color: color }, props),
    ),
  });
};

var classnames$1 = { exports: {} };

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

var hasRequiredClassnames;

function requireClassnames() {
  if (hasRequiredClassnames) return classnames$1.exports;
  hasRequiredClassnames = 1;
  (function (module) {
    /* global define */

    (function () {
      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = "";

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }

        return classes;
      }

      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }

        if (typeof arg !== "object") {
          return "";
        }

        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }

        if (
          arg.toString !== Object.prototype.toString &&
          !arg.toString.toString().includes("[native code]")
        ) {
          return arg.toString();
        }

        var classes = "";

        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }

        return classes;
      }

      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }

        if (value) {
          return value + " " + newClass;
        }

        return value + newClass;
      }

      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  })(classnames$1);
  return classnames$1.exports;
}

var classnamesExports = requireClassnames();
var classnames = /*@__PURE__*/ getDefaultExportFromCjs(classnamesExports);

var u = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] })
      : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var y = (e) =>
    e === false ? "false" : e === true ? "true" : e === 0 ? "0" : e,
  p$1 = (e) => {
    if (!e || typeof e != "object") return true;
    for (let t in e) return false;
    return true;
  },
  g = (e, t) => {
    if (e === t) return true;
    if (!e || !t) return false;
    let n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (let s = 0; s < n.length; s++) {
      let f = n[s];
      if (!r.includes(f) || e[f] !== t[f]) return false;
    }
    return true;
  };
function o(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    Array.isArray(r) ? o(r, t) : t.push(r);
  }
}
var i = (...e) => {
    let t = [];
    o(e, t);
    let n = [];
    for (let r = 0; r < t.length; r++) t[r] && n.push(t[r]);
    return n;
  },
  c = (e, t) => {
    let n = {};
    for (let r in e) {
      let s = e[r];
      if (r in t) {
        let f = t[r];
        Array.isArray(s) || Array.isArray(f)
          ? (n[r] = i(f, s))
          : typeof s == "object" && typeof f == "object" && s && f
            ? (n[r] = c(s, f))
            : (n[r] = f + " " + s);
      } else n[r] = s;
    }
    for (let r in t) r in e || (n[r] = t[r]);
    return n;
  },
  l = /\s+/g,
  h = (e) => (!e || typeof e != "string" ? e : e.replace(l, " ").trim());

var r = null,
  s = null,
  p = async () =>
    r ||
    s ||
    ((s = Promise.resolve()
      .then(function () {
        return bundleMjs;
      })
      .then((t) => ((r = t), t))
      .catch(() => null)),
    s),
  m = (t) => (n) => {
    if (s && !r) return n;
    if (r) {
      let { twMerge: e, extendTailwindMerge: l } = r;
      return (
        p$1(t)
          ? e
          : l({
              ...t,
              extend: {
                theme: t.theme,
                classGroups: t.classGroups,
                conflictingClassGroupModifiers:
                  t.conflictingClassGroupModifiers,
                conflictingClassGroups: t.conflictingClassGroups,
                ...t.extend,
              },
            })
      )(n);
    }
    try {
      let { twMerge: e, extendTailwindMerge: l } = u("tailwind-merge");
      return (
        (r = { twMerge: e, extendTailwindMerge: l }),
        (p$1(t)
          ? e
          : l({
              ...t,
              extend: {
                theme: t.theme,
                classGroups: t.classGroups,
                conflictingClassGroupModifiers:
                  t.conflictingClassGroupModifiers,
                conflictingClassGroups: t.conflictingClassGroups,
                ...t.extend,
              },
            }))(n)
      );
    } catch {
      return (p(), n);
    }
  };

var st = { twMerge: true, twMergeConfig: {}, responsiveVariants: false },
  x = (...l) => {
    let u = [];
    X(l, u);
    let t = "";
    for (let d = 0; d < u.length; d++) u[d] && (t && (t += " "), (t += u[d]));
    return t || void 0;
  };
function X(l, u) {
  for (let t = 0; t < l.length; t++) {
    let d = l[t];
    Array.isArray(d) ? X(d, u) : d && u.push(d);
  }
}
var P = null,
  B = {},
  F = false,
  S =
    (...l) =>
    (u) => {
      let t = x(l);
      return !t || !u.twMerge
        ? t
        : ((!P || F) && ((F = false), (P = m(B))), P(t) || void 0);
    },
  Q = (l, u) => {
    for (let t in u) t in l ? (l[t] = x(l[t], u[t])) : (l[t] = u[t]);
    return l;
  },
  rt = (l, u) => {
    let {
        extend: t = null,
        slots: d$1 = {},
        variants: R = {},
        compoundVariants: q = [],
        compoundSlots: A = [],
        defaultVariants: L = {},
      } = l,
      m = { ...st, ...u },
      M = t?.base ? x(t.base, l?.base) : l?.base,
      y$1 = t?.variants && !p$1(t.variants) ? c(R, t.variants) : R,
      T =
        t?.defaultVariants && !p$1(t.defaultVariants)
          ? { ...t.defaultVariants, ...L }
          : L;
    !p$1(m.twMergeConfig) &&
      !g(m.twMergeConfig, B) &&
      ((F = true), (B = m.twMergeConfig));
    let j = p$1(t?.slots),
      $ = p$1(d$1) ? {} : { base: x(l?.base, j && t?.base), ...d$1 },
      N = j ? $ : Q({ ...t?.slots }, p$1($) ? { base: l?.base } : $),
      w = p$1(t?.compoundVariants) ? q : i(t?.compoundVariants, q),
      V = (b$1) => {
        if (p$1(y$1) && p$1(d$1) && j)
          return S(M, b$1?.class, b$1?.className)(m);
        if (w && !Array.isArray(w))
          throw new TypeError(
            `The "compoundVariants" prop must be an array. Received: ${typeof w}`,
          );
        if (A && !Array.isArray(A))
          throw new TypeError(
            `The "compoundSlots" prop must be an array. Received: ${typeof A}`,
          );
        let Z = (n, e, s = [], o) => {
            let a = s;
            if (typeof e == "string") {
              let c = h(e).split(" ");
              for (let f = 0; f < c.length; f++) a.push(`${n}:${c[f]}`);
            } else if (Array.isArray(e))
              for (let r = 0; r < e.length; r++) a.push(`${n}:${e[r]}`);
            else if (typeof e == "object" && typeof o == "string" && o in e) {
              let r = e[o];
              if (r && typeof r == "string") {
                let f = h(r).split(" "),
                  p = [];
                for (let i = 0; i < f.length; i++) p.push(`${n}:${f[i]}`);
                a[o] = a[o] ? a[o].concat(p) : p;
              } else if (Array.isArray(r) && r.length > 0) {
                let c = [];
                for (let f = 0; f < r.length; f++) c.push(`${n}:${r[f]}`);
                a[o] = c;
              }
            }
            return a;
          },
          U = (n, e = y$1, s = null, o = null) => {
            let a = e[n];
            if (!a || p$1(a)) return null;
            let r = o?.[n] ?? b$1?.[n];
            if (r === null) return null;
            let c$1 = y(r),
              f =
                (Array.isArray(m.responsiveVariants) &&
                  m.responsiveVariants.length > 0) ||
                m.responsiveVariants === true,
              p = T?.[n],
              i = [];
            if (typeof c$1 == "object" && f)
              for (let [C, G] of Object.entries(c$1)) {
                let nt = a[G];
                if (C === "initial") {
                  p = G;
                  continue;
                }
                (Array.isArray(m.responsiveVariants) &&
                  !m.responsiveVariants.includes(C)) ||
                  (i = Z(C, nt, i, s));
              }
            let v = c$1 != null && typeof c$1 != "object" ? c$1 : y(p),
              h = a[v || "false"];
            return typeof i == "object" && typeof s == "string" && i[s]
              ? Q(i, h)
              : i.length > 0
                ? (i.push(h), s === "base" ? i.join(" ") : i)
                : h;
          },
          _ = () => {
            if (!y$1) return null;
            let n = Object.keys(y$1),
              e = [];
            for (let s = 0; s < n.length; s++) {
              let o = U(n[s], y$1);
              o && e.push(o);
            }
            return e;
          },
          K = (n, e) => {
            if (!y$1 || typeof y$1 != "object") return null;
            let s = [];
            for (let o in y$1) {
              let a = U(o, y$1, n, e),
                r = n === "base" && typeof a == "string" ? a : a && a[n];
              r && s.push(r);
            }
            return s;
          },
          W = {};
        for (let n in b$1) {
          let e = b$1[n];
          e !== void 0 && (W[n] = e);
        }
        let z = (n, e) => {
            let s = typeof b$1?.[n] == "object" ? { [n]: b$1[n]?.initial } : {};
            return { ...T, ...W, ...s, ...e };
          },
          D = (n = [], e) => {
            let s = [],
              o = n.length;
            for (let a = 0; a < o; a++) {
              let { class: r, className: c, ...f } = n[a],
                p = true,
                i = z(null, e);
              for (let v in f) {
                let h = f[v],
                  C = i[v];
                if (Array.isArray(h)) {
                  if (!h.includes(C)) {
                    p = false;
                    break;
                  }
                } else {
                  if ((h == null || h === false) && (C == null || C === false))
                    continue;
                  if (C !== h) {
                    p = false;
                    break;
                  }
                }
              }
              p && (r && s.push(r), c && s.push(c));
            }
            return s;
          },
          tt = (n) => {
            let e = D(w, n);
            if (!Array.isArray(e)) return e;
            let s = {},
              o = S;
            for (let a = 0; a < e.length; a++) {
              let r = e[a];
              if (typeof r == "string") s.base = o(s.base, r)(m);
              else if (typeof r == "object")
                for (let c in r) s[c] = o(s[c], r[c])(m);
            }
            return s;
          },
          et = (n) => {
            if (A.length < 1) return null;
            let e = {},
              s = z(null, n);
            for (let o = 0; o < A.length; o++) {
              let { slots: a = [], class: r, className: c$1, ...f } = A[o];
              if (!p$1(f)) {
                let p = true;
                for (let i in f) {
                  let v = s[i],
                    h = f[i];
                  if (
                    v === void 0 ||
                    (Array.isArray(h) ? !h.includes(v) : h !== v)
                  ) {
                    p = false;
                    break;
                  }
                }
                if (!p) continue;
              }
              for (let p = 0; p < a.length; p++) {
                let i = a[p];
                (e[i] || (e[i] = []), e[i].push([r, c$1]));
              }
            }
            return e;
          };
        if (!p$1(d$1) || !j) {
          let n = {};
          if (typeof N == "object" && !p$1(N)) {
            let e = S;
            for (let s in N)
              n[s] = (o) => {
                let a = tt(o),
                  r = et(o);
                return e(
                  N[s],
                  K(s, o),
                  a ? a[s] : void 0,
                  r ? r[s] : void 0,
                  o?.class,
                  o?.className,
                )(m);
              };
          }
          return n;
        }
        return S(M, _(), D(w), b$1?.class, b$1?.className)(m);
      },
      Y = () => {
        if (!(!y$1 || typeof y$1 != "object")) return Object.keys(y$1);
      };
    return (
      (V.variantKeys = Y()),
      (V.extend = t),
      (V.base = M),
      (V.slots = N),
      (V.variants = y$1),
      (V.defaultVariants = T),
      (V.compoundSlots = A),
      (V.compoundVariants = w),
      V
    );
  };

/**
 * @description Controller for Button component
 */
const useButtonController = () => {
  const buttonComposed = rt({
    base: "text-white transition-all duration-200 ease-out flex items-center border-2 focus:outline-hidden focus:ring-2 font-semibold rounded-xl",
    variants: {
      color: {
        primary: `bg-primary-base hover:bg-primary-lighten focus:bg-primary-darken focus:ring-primary-lighten focus:border-primary-lighten border-primary-base disabled:bg-primary-lighten`,
        "primary-alt": `bg-primary-alt-base hover:bg-primary-alt-lighten focus:bg-primary-alt-darken focus:ring-primary-alt-lighten focus:border-primary-alt-lighten border-primary-alt-base disabled:bg-primary-alt-lighten`,
        secondary: `bg-secondary-base hover:bg-secondary-lighten focus:bg-secondary-darken focus:ring-secondary-lighten focus:border-secondary-lighten border-secondary-base disabled:bg-secondary-lighten`,
        "secondary-alt": `bg-secondary-alt-base hover:bg-secondary-alt-lighten focus:bg-secondary-alt-darken focus:ring-secondary-alt-lighten focus:border-secondary-alt-lighten border-secondary-alt-base disabled:bg-secondary-alt-lighten`,
        success: `bg-success-base hover:bg-success-lighten focus:bg-success-darken focus:ring-success-lighten focus:border-success-lighten border-success-base disabled:bg-success-lighten`,
        info: `bg-info-base hover:bg-info-lighten focus:bg-info-darken focus:ring-info-lighten focus:border-info-lighten border-info-base disabled:bg-info-lighten`,
        warning: `bg-warning-base hover:bg-warning-lighten focus:bg-warning-darken focus:ring-warning-lighten focus:border-warning-lighten border-warning-base disabled:bg-warning-lighten`,
        danger: `bg-danger-base hover:bg-danger-lighten focus:bg-danger-darken focus:ring-danger-lighten focus:border-danger-lighten border-danger-base disabled:bg-danger-lighten`,
      },
      disabled: {
        true: "cursor-not-allowed",
      },
      loading: {
        true: "pointer-events-none",
      },
      variant: {
        filled: "",
        outline: "bg-transparent",
      },
      size: {
        small: "text-sm py-2 px-4",
        default: "text-base py-3 px-6",
        large: "text-lg py-3 px-7",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "outline",
        class:
          "text-primary-base hover:bg-primary-lighten/25 focus:bg-primary-darken/25 disabled:bg-primary-lighten/25",
      },
      {
        color: "primary-alt",
        variant: "outline",
        class:
          "text-primary-alt-base hover:bg-primary-alt-lighten/25 focus:bg-primary-alt-darken/25 disabled:bg-primary-alt-lighten/25",
      },
      {
        color: "secondary",
        variant: "outline",
        class:
          "text-secondary-base hover:bg-secondary-lighten/25 focus:bg-secondary-darken/25 disabled:bg-secondary-lighten/25",
      },
      {
        color: "secondary-alt",
        variant: "outline",
        class:
          "text-secondary-alt-base hover:bg-secondary-alt-lighten/25 focus:bg-secondary-alt-darken/25 disabled:bg-secondary-alt-lighten/25",
      },
      {
        color: "success",
        variant: "outline",
        class:
          "text-success-base hover:bg-success-lighten/25 focus:bg-success-darken/25 disabled:bg-success-lighten/25",
      },
      {
        color: "info",
        variant: "outline",
        class:
          "text-info-base hover:bg-info-lighten/25 focus:bg-info-darken/25 disabled:bg-info-lighten/25",
      },
      {
        color: "warning",
        variant: "outline",
        class:
          "text-warning-base hover:bg-warning-lighten/25 focus:bg-warning-darken/25 disabled:bg-warning-lighten/25",
      },
      {
        color: "danger",
        variant: "outline",
        class:
          "text-danger-base hover:bg-danger-lighten/25 focus:bg-danger-darken/25 disabled:bg-danger-lighten/25",
      },
    ],
    defaultVariants: {
      size: "default",
      color: "primary",
    },
  });
  /**
   * Get the color of the icon based on the color and variant of the button
   * @returns {string} The color of the icon
   */
  const getIconColor = (color, variant) => {
    var _a;
    if (variant === "filled") {
      return "#FFFFFF";
    }
    return (
      ((_a = colors[color]) === null || _a === void 0 ? void 0 : _a.base) ||
      colors.primary.base
    );
  };
  return {
    getIconColor,
    buttonComposed,
  };
};

const Button = forwardRef((_a, ref) => {
  var {
      children,
      size = "default",
      color = "primary",
      variant = "filled",
      disabled = false,
      loading = false,
      className,
      onClick,
    } = _a,
    rest = __rest(_a, [
      "children",
      "size",
      "color",
      "variant",
      "disabled",
      "loading",
      "className",
      "onClick",
    ]);
  const { buttonComposed, getIconColor } = useButtonController();
  return jsxRuntimeExports.jsxs(
    "button",
    Object.assign(
      {
        ref: ref,
        className: classnames(
          buttonComposed({ size, color, variant, disabled }),
          className,
        ),
        disabled: disabled,
        onClick: onClick,
      },
      rest,
      {
        children: [
          children,
          loading &&
            jsxRuntimeExports.jsx("span", {
              "aria-live": "polite",
              "aria-busy": "true",
              className: "ml-1",
              children: jsxRuntimeExports.jsx(Icon, {
                icon: "Loader",
                color: getIconColor(color, variant),
                size: 16,
                className: "animate-spin",
              }),
            }),
        ],
      },
    ),
  );
});

const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return (
      getGroupRecursive(classParts, classMap) ||
      getGroupIdForArbitraryProperty(className)
    );
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds,
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject
    ? getGroupRecursive(classParts.slice(1), nextClassPartObject)
    : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({ validator }) =>
    validator(classRest),
  )?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName =
      arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(
      0,
      arbitraryPropertyClassName.indexOf(":"),
    );
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return "arbitrary.." + property;
    }
  }
};
/**
 * Exported for testing only
 */
const createClassMap = (config) => {
  const { theme, classGroups } = config;
  const classMap = {
    nextPart: new Map(),
    validators: [],
  };
  for (const classGroupId in classGroups) {
    processClassesRecursively(
      classGroups[classGroupId],
      classMap,
      classGroupId,
      theme,
    );
  }
  return classMap;
};
const processClassesRecursively = (
  classGroup,
  classPartObject,
  classGroupId,
  theme,
) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit =
        classDefinition === ""
          ? classPartObject
          : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(
          classDefinition(theme),
          classPartObject,
          classGroupId,
          theme,
        );
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId,
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(
        classGroup,
        getPart(classPartObject, key),
        classGroupId,
        theme,
      );
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: [],
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = (func) => func.isThemeGetter;

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {},
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    },
  };
};
const IMPORTANT_MODIFIER = "!";
const MODIFIER_SEPARATOR = ":";
const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
const createParseClassName = (config) => {
  const { prefix, experimentalParseClassName } = config;
  /**
   * Parse class name into parts.
   *
   * Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
   * @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
   */
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      } else if (currentCharacter === "(") {
        parenDepth++;
      } else if (currentCharacter === ")") {
        parenDepth--;
      }
    }
    const baseClassNameWithImportantModifier =
      modifiers.length === 0 ? className : className.substring(modifierStart);
    const baseClassName = stripImportantModifier(
      baseClassNameWithImportantModifier,
    );
    const hasImportantModifier =
      baseClassName !== baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition =
      postfixModifierPosition && postfixModifierPosition > modifierStart
        ? postfixModifierPosition - modifierStart
        : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition,
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) =>
      className.startsWith(fullPrefix)
        ? parseClassNameOriginal(className.substring(fullPrefix.length))
        : {
            isExternal: true,
            modifiers: [],
            hasImportantModifier: false,
            baseClassName: className,
            maybePostfixModifierPosition: undefined,
          };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) =>
      experimentalParseClassName({
        className,
        parseClassName: parseClassNameOriginal,
      });
  }
  return parseClassName;
};
const stripImportantModifier = (baseClassName) => {
  if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(0, baseClassName.length - 1);
  }
  /**
   * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
   * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
   */
  if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(1);
  }
  return baseClassName;
};

/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(
    config.orderSensitiveModifiers.map((modifier) => [modifier, true]),
  );
  const sortModifiers = (modifiers) => {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier) => {
      const isPositionSensitive =
        modifier[0] === "[" || orderSensitiveModifiers[modifier];
      if (isPositionSensitive) {
        sortedModifiers.push(...unsortedModifiers.sort(), modifier);
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
  };
  return sortModifiers;
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config),
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers,
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition,
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(
      hasPostfixModifier
        ? baseClassName.substring(0, maybePostfixModifierPosition)
        : baseClassName,
    );
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result =
          originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result =
          originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier
      ? variantModifier + IMPORTANT_MODIFIER
      : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(
      classGroupId,
      hasPostfixModifier,
    );
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if ((argument = arguments[index++])) {
      if ((resolvedValue = toValue(argument))) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if ((resolvedValue = toValue(mix[k]))) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce(
      (previousConfig, createConfigCurrent) =>
        createConfigCurrent(previousConfig),
      createConfigFirst(),
    );
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+\/\d+$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex =
  /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex =
  /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex =
  /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = (value) => fractionRegex.test(value);
const isNumber = (value) => !!value && !Number.isNaN(Number(value));
const isInteger = (value) => !!value && Number.isInteger(Number(value));
const isPercent = (value) =>
  value.endsWith("%") && isNumber(value.slice(0, -1));
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const isAny = () => true;
const isLengthOnly = (value) =>
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const isAnyNonArbitrary = (value) =>
  !isArbitraryValue(value) && !isArbitraryVariable(value);
const isArbitrarySize = (value) =>
  getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isArbitraryLength = (value) =>
  getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = (value) =>
  getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryPosition = (value) =>
  getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = (value) =>
  getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = (value) =>
  getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = (value) =>
  getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = (value) =>
  getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = (value) =>
  getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = (value) =>
  getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = (value) =>
  getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = (value) =>
  getIsArbitraryVariable(value, isLabelShadow, true);
// Helpers
const getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const getIsArbitraryVariable = (
  value,
  testLabel,
  shouldMatchNoLabel = false,
) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
// Labels
const isLabelPosition = (label) =>
  label === "position" || label === "percentage";
const isLabelImage = (label) => label === "image" || label === "url";
const isLabelSize = (label) =>
  label === "length" || label === "size" || label === "bg-size";
const isLabelLength = (label) => label === "length";
const isLabelNumber = (label) => label === "number";
const isLabelFamilyName = (label) => label === "family-name";
const isLabelShadow = (label) => label === "shadow";
const validators = /*#__PURE__*/ Object.defineProperty(
  {
    __proto__: null,
    isAny,
    isAnyNonArbitrary,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isArbitraryVariable,
    isArbitraryVariableFamilyName,
    isArbitraryVariableImage,
    isArbitraryVariableLength,
    isArbitraryVariablePosition,
    isArbitraryVariableShadow,
    isArbitraryVariableSize,
    isFraction,
    isInteger,
    isNumber,
    isPercent,
    isTshirtSize,
  },
  Symbol.toStringTag,
  {
    value: "Module",
  },
);
const getDefaultConfig = () => {
  /**
   * Theme getters for theme variable namespaces
   * @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
   */
  /***/
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  /**
   * Helpers to avoid repeating the same scales
   *
   * We use functions that create a new array every time they're called instead of static arrays.
   * This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
   */
  /***/
  const scaleBreak = () => [
    "auto",
    "avoid",
    "all",
    "avoid-page",
    "page",
    "left",
    "right",
    "column",
  ];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom",
  ];
  const scalePositionWithArbitrary = () => [
    ...scalePosition(),
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [
    isArbitraryVariable,
    isArbitraryValue,
    themeSpacing,
  ];
  const scaleInset = () => [
    isFraction,
    "full",
    "auto",
    ...scaleUnambiguousSpacing(),
  ];
  const scaleGridTemplateColsRows = () => [
    isInteger,
    "none",
    "subgrid",
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleGridColRowStartAndEnd = () => [
    "auto",
    {
      span: ["full", isInteger, isArbitraryVariable, isArbitraryValue],
    },
    isInteger,
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleGridColRowStartOrEnd = () => [
    isInteger,
    "auto",
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleGridAutoColsRows = () => [
    "auto",
    "min",
    "max",
    "fr",
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleAlignPrimaryAxis = () => [
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
    "stretch",
    "baseline",
    "center-safe",
    "end-safe",
  ];
  const scaleAlignSecondaryAxis = () => [
    "start",
    "end",
    "center",
    "stretch",
    "center-safe",
    "end-safe",
  ];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [
    isFraction,
    "auto",
    "full",
    "dvw",
    "dvh",
    "lvw",
    "lvh",
    "svw",
    "svh",
    "min",
    "max",
    "fit",
    ...scaleUnambiguousSpacing(),
  ];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [
    ...scalePosition(),
    isArbitraryVariablePosition,
    isArbitraryPosition,
    {
      position: [isArbitraryVariable, isArbitraryValue],
    },
  ];
  const scaleBgRepeat = () => [
    "no-repeat",
    {
      repeat: ["", "x", "y", "space", "round"],
    },
  ];
  const scaleBgSize = () => [
    "auto",
    "cover",
    "contain",
    isArbitraryVariableSize,
    isArbitrarySize,
    {
      size: [isArbitraryVariable, isArbitraryValue],
    },
  ];
  const scaleGradientStopPosition = () => [
    isPercent,
    isArbitraryVariableLength,
    isArbitraryLength,
  ];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleBorderWidth = () => [
    "",
    isNumber,
    isArbitraryVariableLength,
    isArbitraryLength,
  ];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
  ];
  const scaleMaskImagePosition = () => [
    isNumber,
    isPercent,
    isArbitraryVariablePosition,
    isArbitraryPosition,
  ];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleRotate = () => [
    "none",
    isNumber,
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleScale = () => [
    "none",
    isNumber,
    isArbitraryVariable,
    isArbitraryValue,
  ];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [
    isFraction,
    "full",
    ...scaleUnambiguousSpacing(),
  ];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": [
        "thin",
        "extralight",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
        "black",
      ],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: [
        "dramatic",
        "near",
        "normal",
        "midrange",
        "distant",
        "none",
      ],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [
        {
          aspect: [
            "auto",
            "square",
            isFraction,
            isArbitraryValue,
            isArbitraryVariable,
            themeAspect,
          ],
        },
      ],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [
        {
          columns: [
            isNumber,
            isArbitraryValue,
            isArbitraryVariable,
            themeContainer,
          ],
        },
      ],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [
        {
          "break-after": scaleBreak(),
        },
      ],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [
        {
          "break-before": scaleBreak(),
        },
      ],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [
        {
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
        },
      ],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [
        {
          "box-decoration": ["slice", "clone"],
        },
      ],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [
        {
          box: ["border", "content"],
        },
      ],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [
        {
          float: ["right", "left", "none", "start", "end"],
        },
      ],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [
        {
          clear: ["left", "right", "both", "none", "start", "end"],
        },
      ],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [
        {
          object: ["contain", "cover", "fill", "none", "scale-down"],
        },
      ],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [
        {
          object: scalePositionWithArbitrary(),
        },
      ],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [
        {
          overflow: scaleOverflow(),
        },
      ],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [
        {
          "overflow-x": scaleOverflow(),
        },
      ],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [
        {
          "overflow-y": scaleOverflow(),
        },
      ],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [
        {
          overscroll: scaleOverscroll(),
        },
      ],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [
        {
          "overscroll-x": scaleOverscroll(),
        },
      ],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [
        {
          "overscroll-y": scaleOverscroll(),
        },
      ],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [
        {
          inset: scaleInset(),
        },
      ],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [
        {
          "inset-x": scaleInset(),
        },
      ],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [
        {
          "inset-y": scaleInset(),
        },
      ],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [
        {
          start: scaleInset(),
        },
      ],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [
        {
          end: scaleInset(),
        },
      ],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [
        {
          top: scaleInset(),
        },
      ],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [
        {
          right: scaleInset(),
        },
      ],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [
        {
          bottom: scaleInset(),
        },
      ],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [
        {
          left: scaleInset(),
        },
      ],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [
        {
          z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue],
        },
      ],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [
        {
          basis: [
            isFraction,
            "full",
            "auto",
            themeContainer,
            ...scaleUnambiguousSpacing(),
          ],
        },
      ],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [
        {
          flex: ["row", "row-reverse", "col", "col-reverse"],
        },
      ],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [
        {
          flex: ["nowrap", "wrap", "wrap-reverse"],
        },
      ],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [
        {
          flex: [
            isNumber,
            isFraction,
            "auto",
            "initial",
            "none",
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [
        {
          grow: ["", isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [
        {
          shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [
        {
          order: [
            isInteger,
            "first",
            "last",
            "none",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [
        {
          "grid-cols": scaleGridTemplateColsRows(),
        },
      ],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [
        {
          col: scaleGridColRowStartAndEnd(),
        },
      ],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [
        {
          "col-start": scaleGridColRowStartOrEnd(),
        },
      ],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [
        {
          "col-end": scaleGridColRowStartOrEnd(),
        },
      ],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [
        {
          "grid-rows": scaleGridTemplateColsRows(),
        },
      ],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [
        {
          row: scaleGridColRowStartAndEnd(),
        },
      ],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [
        {
          "row-start": scaleGridColRowStartOrEnd(),
        },
      ],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [
        {
          "row-end": scaleGridColRowStartOrEnd(),
        },
      ],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [
        {
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
        },
      ],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [
        {
          "auto-cols": scaleGridAutoColsRows(),
        },
      ],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [
        {
          "auto-rows": scaleGridAutoColsRows(),
        },
      ],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [
        {
          gap: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [
        {
          "gap-x": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [
        {
          "gap-y": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [
        {
          justify: [...scaleAlignPrimaryAxis(), "normal"],
        },
      ],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [
        {
          "justify-items": [...scaleAlignSecondaryAxis(), "normal"],
        },
      ],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [
        {
          "justify-self": ["auto", ...scaleAlignSecondaryAxis()],
        },
      ],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [
        {
          content: ["normal", ...scaleAlignPrimaryAxis()],
        },
      ],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [
        {
          items: [
            ...scaleAlignSecondaryAxis(),
            {
              baseline: ["", "last"],
            },
          ],
        },
      ],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [
        {
          self: [
            "auto",
            ...scaleAlignSecondaryAxis(),
            {
              baseline: ["", "last"],
            },
          ],
        },
      ],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [
        {
          "place-content": scaleAlignPrimaryAxis(),
        },
      ],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [
        {
          "place-items": [...scaleAlignSecondaryAxis(), "baseline"],
        },
      ],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [
        {
          "place-self": ["auto", ...scaleAlignSecondaryAxis()],
        },
      ],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [
        {
          p: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [
        {
          px: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [
        {
          py: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [
        {
          ps: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [
        {
          pe: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [
        {
          pt: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [
        {
          pr: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [
        {
          pb: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [
        {
          pl: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [
        {
          m: scaleMargin(),
        },
      ],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [
        {
          mx: scaleMargin(),
        },
      ],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [
        {
          my: scaleMargin(),
        },
      ],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [
        {
          ms: scaleMargin(),
        },
      ],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [
        {
          me: scaleMargin(),
        },
      ],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [
        {
          mt: scaleMargin(),
        },
      ],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [
        {
          mr: scaleMargin(),
        },
      ],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [
        {
          mb: scaleMargin(),
        },
      ],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [
        {
          ml: scaleMargin(),
        },
      ],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [
        {
          "space-x": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [
        {
          "space-y": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [
        {
          size: scaleSizing(),
        },
      ],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [
        {
          w: [themeContainer, "screen", ...scaleSizing()],
        },
      ],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [
        {
          "min-w": [
            themeContainer,
            "screen" /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */,
            "none",
            ...scaleSizing(),
          ],
        },
      ],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [
        {
          "max-w": [
            themeContainer,
            "screen",
            "none" /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */,
            "prose" /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */,
            {
              screen: [themeBreakpoint],
            },
            ...scaleSizing(),
          ],
        },
      ],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [
        {
          h: ["screen", "lh", ...scaleSizing()],
        },
      ],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [
        {
          "min-h": ["screen", "lh", "none", ...scaleSizing()],
        },
      ],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [
        {
          "max-h": ["screen", "lh", ...scaleSizing()],
        },
      ],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [
        {
          text: [
            "base",
            themeText,
            isArbitraryVariableLength,
            isArbitraryLength,
          ],
        },
      ],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [
        {
          font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber],
        },
      ],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [
        {
          "font-stretch": [
            "ultra-condensed",
            "extra-condensed",
            "condensed",
            "semi-condensed",
            "normal",
            "semi-expanded",
            "expanded",
            "extra-expanded",
            "ultra-expanded",
            isPercent,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [
        {
          font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont],
        },
      ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [
        {
          tracking: [themeTracking, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [
        {
          "line-clamp": [
            isNumber,
            "none",
            isArbitraryVariable,
            isArbitraryNumber,
          ],
        },
      ],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [
        {
          leading: [
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            themeLeading,
            ...scaleUnambiguousSpacing(),
          ],
        },
      ],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [
        {
          "list-image": ["none", isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [
        {
          list: ["inside", "outside"],
        },
      ],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [
        {
          list: [
            "disc",
            "decimal",
            "none",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [
        {
          text: ["left", "center", "right", "justify", "start", "end"],
        },
      ],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [
        {
          placeholder: scaleColor(),
        },
      ],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [
        {
          text: scaleColor(),
        },
      ],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [
        {
          decoration: [...scaleLineStyle(), "wavy"],
        },
      ],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [
        {
          decoration: [
            isNumber,
            "from-font",
            "auto",
            isArbitraryVariable,
            isArbitraryLength,
          ],
        },
      ],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [
        {
          decoration: scaleColor(),
        },
      ],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [
        {
          "underline-offset": [
            isNumber,
            "auto",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [
        {
          text: ["wrap", "nowrap", "balance", "pretty"],
        },
      ],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [
        {
          indent: scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [
        {
          break: ["normal", "words", "all", "keep"],
        },
      ],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [
        {
          wrap: ["break-word", "anywhere", "normal"],
        },
      ],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [
        {
          hyphens: ["none", "manual", "auto"],
        },
      ],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [
        {
          content: ["none", isArbitraryVariable, isArbitraryValue],
        },
      ],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [
        {
          bg: ["fixed", "local", "scroll"],
        },
      ],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [
        {
          "bg-clip": ["border", "padding", "content", "text"],
        },
      ],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [
        {
          "bg-origin": ["border", "padding", "content"],
        },
      ],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [
        {
          bg: scaleBgPosition(),
        },
      ],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [
        {
          bg: scaleBgRepeat(),
        },
      ],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [
        {
          bg: scaleBgSize(),
        },
      ],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [
        {
          bg: [
            "none",
            {
              linear: [
                {
                  to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                },
                isInteger,
                isArbitraryVariable,
                isArbitraryValue,
              ],
              radial: ["", isArbitraryVariable, isArbitraryValue],
              conic: [isInteger, isArbitraryVariable, isArbitraryValue],
            },
            isArbitraryVariableImage,
            isArbitraryImage,
          ],
        },
      ],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [
        {
          bg: scaleColor(),
        },
      ],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [
        {
          from: scaleGradientStopPosition(),
        },
      ],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [
        {
          via: scaleGradientStopPosition(),
        },
      ],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [
        {
          to: scaleGradientStopPosition(),
        },
      ],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [
        {
          from: scaleColor(),
        },
      ],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [
        {
          via: scaleColor(),
        },
      ],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [
        {
          to: scaleColor(),
        },
      ],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [
        {
          rounded: scaleRadius(),
        },
      ],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [
        {
          "rounded-s": scaleRadius(),
        },
      ],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [
        {
          "rounded-e": scaleRadius(),
        },
      ],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [
        {
          "rounded-t": scaleRadius(),
        },
      ],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [
        {
          "rounded-r": scaleRadius(),
        },
      ],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [
        {
          "rounded-b": scaleRadius(),
        },
      ],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [
        {
          "rounded-l": scaleRadius(),
        },
      ],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [
        {
          "rounded-ss": scaleRadius(),
        },
      ],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [
        {
          "rounded-se": scaleRadius(),
        },
      ],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [
        {
          "rounded-ee": scaleRadius(),
        },
      ],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [
        {
          "rounded-es": scaleRadius(),
        },
      ],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [
        {
          "rounded-tl": scaleRadius(),
        },
      ],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [
        {
          "rounded-tr": scaleRadius(),
        },
      ],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [
        {
          "rounded-br": scaleRadius(),
        },
      ],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [
        {
          "rounded-bl": scaleRadius(),
        },
      ],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [
        {
          border: scaleBorderWidth(),
        },
      ],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [
        {
          "border-x": scaleBorderWidth(),
        },
      ],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [
        {
          "border-y": scaleBorderWidth(),
        },
      ],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [
        {
          "border-s": scaleBorderWidth(),
        },
      ],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [
        {
          "border-e": scaleBorderWidth(),
        },
      ],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [
        {
          "border-t": scaleBorderWidth(),
        },
      ],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [
        {
          "border-r": scaleBorderWidth(),
        },
      ],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [
        {
          "border-b": scaleBorderWidth(),
        },
      ],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [
        {
          "border-l": scaleBorderWidth(),
        },
      ],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [
        {
          "divide-x": scaleBorderWidth(),
        },
      ],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [
        {
          "divide-y": scaleBorderWidth(),
        },
      ],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [
        {
          border: [...scaleLineStyle(), "hidden", "none"],
        },
      ],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [
        {
          divide: [...scaleLineStyle(), "hidden", "none"],
        },
      ],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [
        {
          border: scaleColor(),
        },
      ],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [
        {
          "border-x": scaleColor(),
        },
      ],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [
        {
          "border-y": scaleColor(),
        },
      ],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [
        {
          "border-s": scaleColor(),
        },
      ],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [
        {
          "border-e": scaleColor(),
        },
      ],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [
        {
          "border-t": scaleColor(),
        },
      ],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [
        {
          "border-r": scaleColor(),
        },
      ],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [
        {
          "border-b": scaleColor(),
        },
      ],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [
        {
          "border-l": scaleColor(),
        },
      ],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [
        {
          divide: scaleColor(),
        },
      ],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [
        {
          outline: [...scaleLineStyle(), "none", "hidden"],
        },
      ],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [
        {
          "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [
        {
          outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength],
        },
      ],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [
        {
          outline: scaleColor(),
        },
      ],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [
        {
          shadow: [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow,
          ],
        },
      ],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [
        {
          shadow: scaleColor(),
        },
      ],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [
        {
          "inset-shadow": [
            "none",
            themeInsetShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow,
          ],
        },
      ],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [
        {
          "inset-shadow": scaleColor(),
        },
      ],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [
        {
          ring: scaleBorderWidth(),
        },
      ],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [
        {
          ring: scaleColor(),
        },
      ],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [
        {
          "ring-offset": [isNumber, isArbitraryLength],
        },
      ],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [
        {
          "ring-offset": scaleColor(),
        },
      ],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [
        {
          "inset-ring": scaleBorderWidth(),
        },
      ],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [
        {
          "inset-ring": scaleColor(),
        },
      ],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [
        {
          "text-shadow": [
            "none",
            themeTextShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow,
          ],
        },
      ],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [
        {
          "text-shadow": scaleColor(),
        },
      ],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [
        {
          opacity: [isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [
        {
          "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"],
        },
      ],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [
        {
          "bg-blend": scaleBlendMode(),
        },
      ],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [
        {
          "mask-clip": [
            "border",
            "padding",
            "content",
            "fill",
            "stroke",
            "view",
          ],
        },
        "mask-no-clip",
      ],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [
        {
          mask: ["add", "subtract", "intersect", "exclude"],
        },
      ],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [
        {
          "mask-linear": [isNumber],
        },
      ],
      "mask-image-linear-from-pos": [
        {
          "mask-linear-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-linear-to-pos": [
        {
          "mask-linear-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-linear-from-color": [
        {
          "mask-linear-from": scaleColor(),
        },
      ],
      "mask-image-linear-to-color": [
        {
          "mask-linear-to": scaleColor(),
        },
      ],
      "mask-image-t-from-pos": [
        {
          "mask-t-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-t-to-pos": [
        {
          "mask-t-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-t-from-color": [
        {
          "mask-t-from": scaleColor(),
        },
      ],
      "mask-image-t-to-color": [
        {
          "mask-t-to": scaleColor(),
        },
      ],
      "mask-image-r-from-pos": [
        {
          "mask-r-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-r-to-pos": [
        {
          "mask-r-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-r-from-color": [
        {
          "mask-r-from": scaleColor(),
        },
      ],
      "mask-image-r-to-color": [
        {
          "mask-r-to": scaleColor(),
        },
      ],
      "mask-image-b-from-pos": [
        {
          "mask-b-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-b-to-pos": [
        {
          "mask-b-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-b-from-color": [
        {
          "mask-b-from": scaleColor(),
        },
      ],
      "mask-image-b-to-color": [
        {
          "mask-b-to": scaleColor(),
        },
      ],
      "mask-image-l-from-pos": [
        {
          "mask-l-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-l-to-pos": [
        {
          "mask-l-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-l-from-color": [
        {
          "mask-l-from": scaleColor(),
        },
      ],
      "mask-image-l-to-color": [
        {
          "mask-l-to": scaleColor(),
        },
      ],
      "mask-image-x-from-pos": [
        {
          "mask-x-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-x-to-pos": [
        {
          "mask-x-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-x-from-color": [
        {
          "mask-x-from": scaleColor(),
        },
      ],
      "mask-image-x-to-color": [
        {
          "mask-x-to": scaleColor(),
        },
      ],
      "mask-image-y-from-pos": [
        {
          "mask-y-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-y-to-pos": [
        {
          "mask-y-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-y-from-color": [
        {
          "mask-y-from": scaleColor(),
        },
      ],
      "mask-image-y-to-color": [
        {
          "mask-y-to": scaleColor(),
        },
      ],
      "mask-image-radial": [
        {
          "mask-radial": [isArbitraryVariable, isArbitraryValue],
        },
      ],
      "mask-image-radial-from-pos": [
        {
          "mask-radial-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-radial-to-pos": [
        {
          "mask-radial-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-radial-from-color": [
        {
          "mask-radial-from": scaleColor(),
        },
      ],
      "mask-image-radial-to-color": [
        {
          "mask-radial-to": scaleColor(),
        },
      ],
      "mask-image-radial-shape": [
        {
          "mask-radial": ["circle", "ellipse"],
        },
      ],
      "mask-image-radial-size": [
        {
          "mask-radial": [
            {
              closest: ["side", "corner"],
              farthest: ["side", "corner"],
            },
          ],
        },
      ],
      "mask-image-radial-pos": [
        {
          "mask-radial-at": scalePosition(),
        },
      ],
      "mask-image-conic-pos": [
        {
          "mask-conic": [isNumber],
        },
      ],
      "mask-image-conic-from-pos": [
        {
          "mask-conic-from": scaleMaskImagePosition(),
        },
      ],
      "mask-image-conic-to-pos": [
        {
          "mask-conic-to": scaleMaskImagePosition(),
        },
      ],
      "mask-image-conic-from-color": [
        {
          "mask-conic-from": scaleColor(),
        },
      ],
      "mask-image-conic-to-color": [
        {
          "mask-conic-to": scaleColor(),
        },
      ],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [
        {
          mask: ["alpha", "luminance", "match"],
        },
      ],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [
        {
          "mask-origin": [
            "border",
            "padding",
            "content",
            "fill",
            "stroke",
            "view",
          ],
        },
      ],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [
        {
          mask: scaleBgPosition(),
        },
      ],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [
        {
          mask: scaleBgRepeat(),
        },
      ],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [
        {
          mask: scaleBgSize(),
        },
      ],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [
        {
          "mask-type": ["alpha", "luminance"],
        },
      ],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [
        {
          mask: ["none", isArbitraryVariable, isArbitraryValue],
        },
      ],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [
        {
          filter: [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [
        {
          blur: scaleBlur(),
        },
      ],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [
        {
          brightness: [isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [
        {
          contrast: [isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [
        {
          "drop-shadow": [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeDropShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow,
          ],
        },
      ],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [
        {
          "drop-shadow": scaleColor(),
        },
      ],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [
        {
          grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [
        {
          "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [
        {
          invert: ["", isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [
        {
          saturate: [isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [
        {
          sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [
        {
          "backdrop-filter": [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [
        {
          "backdrop-blur": scaleBlur(),
        },
      ],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [
        {
          "backdrop-brightness": [
            isNumber,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [
        {
          "backdrop-contrast": [
            isNumber,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [
        {
          "backdrop-grayscale": [
            "",
            isNumber,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [
        {
          "backdrop-hue-rotate": [
            isNumber,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [
        {
          "backdrop-invert": [
            "",
            isNumber,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [
        {
          "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [
        {
          "backdrop-saturate": [
            isNumber,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [
        {
          "backdrop-sepia": [
            "",
            isNumber,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [
        {
          border: ["collapse", "separate"],
        },
      ],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [
        {
          "border-spacing": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [
        {
          "border-spacing-x": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [
        {
          "border-spacing-y": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [
        {
          table: ["auto", "fixed"],
        },
      ],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [
        {
          caption: ["top", "bottom"],
        },
      ],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [
        {
          transition: [
            "",
            "all",
            "colors",
            "opacity",
            "shadow",
            "transform",
            "none",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [
        {
          transition: ["normal", "discrete"],
        },
      ],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [
        {
          duration: [
            isNumber,
            "initial",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [
        {
          ease: [
            "linear",
            "initial",
            themeEase,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [
        {
          delay: [isNumber, isArbitraryVariable, isArbitraryValue],
        },
      ],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [
        {
          animate: [
            "none",
            themeAnimate,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [
        {
          backface: ["hidden", "visible"],
        },
      ],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [
        {
          perspective: [
            themePerspective,
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [
        {
          "perspective-origin": scalePositionWithArbitrary(),
        },
      ],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [
        {
          rotate: scaleRotate(),
        },
      ],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [
        {
          "rotate-x": scaleRotate(),
        },
      ],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [
        {
          "rotate-y": scaleRotate(),
        },
      ],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [
        {
          "rotate-z": scaleRotate(),
        },
      ],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [
        {
          scale: scaleScale(),
        },
      ],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [
        {
          "scale-x": scaleScale(),
        },
      ],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [
        {
          "scale-y": scaleScale(),
        },
      ],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [
        {
          "scale-z": scaleScale(),
        },
      ],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [
        {
          skew: scaleSkew(),
        },
      ],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [
        {
          "skew-x": scaleSkew(),
        },
      ],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [
        {
          "skew-y": scaleSkew(),
        },
      ],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [
        {
          transform: [
            isArbitraryVariable,
            isArbitraryValue,
            "",
            "none",
            "gpu",
            "cpu",
          ],
        },
      ],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [
        {
          origin: scalePositionWithArbitrary(),
        },
      ],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [
        {
          transform: ["3d", "flat"],
        },
      ],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [
        {
          translate: scaleTranslate(),
        },
      ],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [
        {
          "translate-x": scaleTranslate(),
        },
      ],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [
        {
          "translate-y": scaleTranslate(),
        },
      ],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [
        {
          "translate-z": scaleTranslate(),
        },
      ],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [
        {
          accent: scaleColor(),
        },
      ],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [
        {
          appearance: ["none", "auto"],
        },
      ],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [
        {
          caret: scaleColor(),
        },
      ],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [
        {
          scheme: [
            "normal",
            "dark",
            "light",
            "light-dark",
            "only-dark",
            "only-light",
          ],
        },
      ],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [
        {
          "field-sizing": ["fixed", "content"],
        },
      ],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [
        {
          "pointer-events": ["auto", "none"],
        },
      ],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [
        {
          resize: ["none", "", "y", "x"],
        },
      ],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [
        {
          scroll: ["auto", "smooth"],
        },
      ],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [
        {
          "scroll-m": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [
        {
          "scroll-mx": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [
        {
          "scroll-my": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [
        {
          "scroll-ms": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [
        {
          "scroll-me": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [
        {
          "scroll-mt": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [
        {
          "scroll-mr": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [
        {
          "scroll-mb": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [
        {
          "scroll-ml": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [
        {
          "scroll-p": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [
        {
          "scroll-px": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [
        {
          "scroll-py": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [
        {
          "scroll-ps": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [
        {
          "scroll-pe": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [
        {
          "scroll-pt": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [
        {
          "scroll-pr": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [
        {
          "scroll-pb": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [
        {
          "scroll-pl": scaleUnambiguousSpacing(),
        },
      ],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [
        {
          snap: ["start", "end", "center", "align-none"],
        },
      ],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [
        {
          snap: ["normal", "always"],
        },
      ],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [
        {
          snap: ["none", "x", "y", "both"],
        },
      ],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [
        {
          snap: ["mandatory", "proximity"],
        },
      ],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [
        {
          touch: ["auto", "none", "manipulation"],
        },
      ],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [
        {
          "touch-pan": ["x", "left", "right"],
        },
      ],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [
        {
          "touch-pan": ["y", "up", "down"],
        },
      ],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [
        {
          select: ["none", "text", "all", "auto"],
        },
      ],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [
        {
          "will-change": [
            "auto",
            "scroll",
            "contents",
            "transform",
            isArbitraryVariable,
            isArbitraryValue,
          ],
        },
      ],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [
        {
          fill: ["none", ...scaleColor()],
        },
      ],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [
        {
          stroke: [
            isNumber,
            isArbitraryVariableLength,
            isArbitraryLength,
            isArbitraryNumber,
          ],
        },
      ],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [
        {
          stroke: ["none", ...scaleColor()],
        },
      ],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [
        {
          "forced-color-adjust": ["auto", "none"],
        },
      ],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-x",
        "border-w-y",
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-x",
        "border-color-y",
        "border-color-s",
        "border-color-e",
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": [
        "translate",
        "translate-x",
        "translate-y",
        "translate-z",
      ],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"],
    },
    orderSensitiveModifiers: [
      "*",
      "**",
      "after",
      "backdrop",
      "before",
      "details-content",
      "file",
      "first-letter",
      "first-line",
      "marker",
      "placeholder",
      "selection",
    ],
  };
};

/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */
const mergeConfigs = (
  baseConfig,
  { cacheSize, prefix, experimentalParseClassName, extend = {}, override = {} },
) => {
  overrideProperty(baseConfig, "cacheSize", cacheSize);
  overrideProperty(baseConfig, "prefix", prefix);
  overrideProperty(
    baseConfig,
    "experimentalParseClassName",
    experimentalParseClassName,
  );
  overrideConfigProperties(baseConfig.theme, override.theme);
  overrideConfigProperties(baseConfig.classGroups, override.classGroups);
  overrideConfigProperties(
    baseConfig.conflictingClassGroups,
    override.conflictingClassGroups,
  );
  overrideConfigProperties(
    baseConfig.conflictingClassGroupModifiers,
    override.conflictingClassGroupModifiers,
  );
  overrideProperty(
    baseConfig,
    "orderSensitiveModifiers",
    override.orderSensitiveModifiers,
  );
  mergeConfigProperties(baseConfig.theme, extend.theme);
  mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
  mergeConfigProperties(
    baseConfig.conflictingClassGroups,
    extend.conflictingClassGroups,
  );
  mergeConfigProperties(
    baseConfig.conflictingClassGroupModifiers,
    extend.conflictingClassGroupModifiers,
  );
  mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
  return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== undefined) {
    baseObject[overrideKey] = overrideValue;
  }
};
const overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
};
const mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      mergeArrayProperties(baseObject, mergeObject, key);
    }
  }
};
const mergeArrayProperties = (baseObject, mergeObject, key) => {
  const mergeValue = mergeObject[key];
  if (mergeValue !== undefined) {
    baseObject[key] = baseObject[key]
      ? baseObject[key].concat(mergeValue)
      : mergeValue;
  }
};
const extendTailwindMerge = (configExtension, ...createConfig) =>
  typeof configExtension === "function"
    ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig)
    : createTailwindMerge(
        () => mergeConfigs(getDefaultConfig(), configExtension),
        ...createConfig,
      );
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);

var bundleMjs = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  createTailwindMerge: createTailwindMerge,
  extendTailwindMerge: extendTailwindMerge,
  fromTheme: fromTheme,
  getDefaultConfig: getDefaultConfig,
  mergeConfigs: mergeConfigs,
  twJoin: twJoin,
  twMerge: twMerge,
  validators: validators,
});

export { Button, colors as Colors, Icon };
//# sourceMappingURL=bundle.js.map
