'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Fi = require('react-feather');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Fi__namespace = /*#__PURE__*/_interopNamespace(Fi);

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

var classnames$1 = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames$1));

var classnames = classnames$1.exports;

/**
 * @description Type definition for Button
 */
/**
 * @description Export available options to match classes
 */
var SizesRecord = {
    small: '--small',
    default: '--default',
    large: '--large',
};
var ColorsRecord = {
    primary: '--primary',
    primaryAlt: '--primaryAlt',
    secondary: '--secondary',
    secondaryAlt: '--secondaryAlt',
    success: '--success',
    info: '--info',
    warning: '--warning',
    danger: '--danger',
};
var VariationsRecord = {
    filled: '',
    outline: '--outline',
};

/**
 * @description Custom Feather icon wrapper
 */
var Feather = function (_a) {
    var icon = _a.icon, size = _a.size, color = _a.color, rest = __rest(_a, ["icon", "size", "color"]);
    var Icono = Fi__namespace[String(icon)];
    return React__default["default"].createElement(Icono, __assign({ size: size, color: color }, rest));
};

/**
 * @description <Icon> Atom Component
 */
var Icon = function (_a) {
    var icon = _a.icon, _b = _a.size, size = _b === void 0 ? 32 : _b, color = _a.color, props = __rest(_a, ["icon", "size", "color"]);
    return (React__default["default"].createElement("span", null,
        React__default["default"].createElement(Feather, __assign({ icon: icon, size: size, color: color }, props))));
};

/**
 * @description <Button> Atom Component
 */
var Button = React.forwardRef(function (_a, ref) {
    var _b;
    var children = _a.children, _c = _a.size, size = _c === void 0 ? 'default' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.variation, variation = _e === void 0 ? 'filled' : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.loading, loading = _g === void 0 ? false : _g, classNames = _a.classNames, onClick = _a.onClick, rest = __rest(_a, ["children", "size", "color", "variation", "disabled", "loading", "classNames", "onClick"]);
    /**
     * Generate all icons classnames states
     */
    var getIconClassNames = function () {
        var _a;
        return classnames((_a = {
                'fill-white': variation === 'filled'
            },
            _a["fill-".concat(color, "-base")] = variation === 'outline',
            _a));
    };
    return (React__default["default"].createElement("button", __assign({ ref: ref, className: classnames('tc-button', SizesRecord[size], ColorsRecord[color], VariationsRecord[variation], (_b = {
                '--transparent': variation === 'outline' && !disabled
            },
            _b["text-".concat(color, "-base")] = variation === 'outline' && !disabled,
            _b), classNames), disabled: disabled, onClick: onClick }, rest),
        children,
        loading && (React__default["default"].createElement("span", { "aria-live": "polite", "aria-busy": "true", className: "ml-1" },
            React__default["default"].createElement(Icon, { icon: "Loader", size: 16, className: classnames(getIconClassNames(), 'animate-spin') })))));
});

exports.Button = Button;
exports.Icon = Icon;
//# sourceMappingURL=index.cjs.js.map
