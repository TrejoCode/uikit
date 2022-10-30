'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var SizesRecord$1 = {
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
 * @description Icons set
 */
var icons = {
    load: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "m12.017 3-.034 2.587H12c3.537-.003 6.414 2.878 6.414 6.416a6.428 6.428 0 0 1-3.682 5.805l1.162 2.31C18.91 18.662 21 15.572 21 12.003c0-4.96-4.03-8.994-8.983-9.003ZM11.869 18.416a6.423 6.423 0 0 1-6.283-6.413 6.426 6.426 0 0 1 3.377-5.65L7.8 4.042A9.009 9.009 0 0 0 3 12.002C3 16.91 6.948 20.914 11.834 21l.035-2.584Z" }))),
    chevronRight: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" }))),
    chevronLeft: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.707 18.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L10.414 12l5.293 5.293a1 1 0 0 1 0 1.414Z" }))),
    chevronUp: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6Z" }))),
    chevronDown: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z" }))),
    checkmark: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0Z" }))),
    share: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.844 3.074a1 1 0 0 0-.622.926v3.689c-3.687.715-6.414 2.447-8.37 4.727-2.088 2.434-3.255 5.444-3.833 8.392a1 1 0 0 0 1.8.766c2.393-3.418 5.659-5.127 10.403-5.333v3.626a1 1 0 0 0 1.714.7l7.778-7.934a1 1 0 0 0 0-1.4L14.936 3.3a1 1 0 0 0-1.092-.226Zm6.756 8.86-5.378 5.484V15.22a1 1 0 0 0-1-1c-4.08 0-7.376.947-10.015 2.988.554-1.261 1.266-2.445 2.163-3.49 1.785-2.08 4.343-3.663 7.996-4.195a1 1 0 0 0 .856-.99V6.448l5.378 5.485Z" })),
    heart: (React__default["default"].createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })),
    sun: (React__default["default"].createElement("path", { d: "M3 11a1 1 0 1 0 0 2.001A1 1 0 0 0 3 11Zm1.93 6.66a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418ZM6.34 6.34a1 1 0 1 0-1.41-1.418A1 1 0 0 0 6.34 6.34ZM12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5.66 13.66a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418ZM21 11a1 1 0 1 0 0 2.002A1 1 0 0 0 21 11Zm-3.34-6.07a1 1 0 1 0 1.41 1.418 1 1 0 0 0-1.41-1.418ZM12 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" })),
    moon: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.081 2.509a1 1 0 0 1-.067 1.085 6 6 0 0 0 8.392 8.392 1 1 0 0 1 1.59.896A10 10 0 1 1 11.118 2.004a1 1 0 0 1 .963.505Zm-2.765 1.93a8 8 0 1 0 10.245 10.245A8.001 8.001 0 0 1 9.316 4.439Z" })),
    notification: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.05 3.05A7 7 0 0 1 19 8c0 3.353.717 5.435 1.378 6.646.332.608.655 1.007.88 1.244a3.03 3.03 0 0 0 .305.284A1 1 0 0 1 21 18H3a1 1 0 0 1-.563-1.826 3.037 3.037 0 0 0 .306-.283c.224-.238.547-.637.88-1.245C4.282 13.435 5 11.353 5 8a7 7 0 0 1 2.05-4.95ZM2.444 16.17ZM5.149 16h13.702a9.422 9.422 0 0 1-.229-.396C17.782 14.065 17 11.647 17 8A5 5 0 0 0 7 8c0 3.647-.783 6.065-1.622 7.604-.076.14-.153.271-.229.396ZM9.768 20.135a1 1 0 0 1 1.367.363 1 1 0 0 0 1.73 0 1 1 0 0 1 1.73 1.004 3 3 0 0 1-5.19 0 1 1 0 0 1 .363-1.367Z" })),
    wallet: (React__default["default"].createElement("path", { d: "M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3ZM5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2Zm15 10h-1a1 1 0 0 1 0-2h1v2Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1v1Z" })),
    menu: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" })),
    search: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.943 15.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z" }))),
    close: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.293 5.293a1 1 0 0 1 1.414 0l12 12a1 1 0 0 1-1.414 1.414l-12-12a1 1 0 0 1 0-1.414Z" }))),
    copy: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 10a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-9Zm-3 1a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1H4Z" }))),
    more: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" })),
    share2: (React__default["default"].createElement("path", { d: "M8.71 7.71 11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-4-4a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1.004 1.004 0 1 0 1.42 1.42ZM21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 1 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Z" })),
    externalLink: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 1 1 2 0v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h6a1 1 0 1 1 0 2H5ZM14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4h-5a1 1 0 0 1-1-1Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.707 2.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11a1 1 0 0 1 1.414 0Z" }))),
    expand: (React__default["default"].createElement("path", { d: "M8.5 14.1 4 18.6V17c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .1 0 .3.1.4.1.2.3.4.5.5.1.1.3.1.4.1h4c.6 0 1-.4 1-1s-.4-1-1-1H5.4l4.5-4.5c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0ZM21.7 2.3c-.2-.2-.5-.3-.7-.3h-4c-.6 0-1 .4-1 1s.4 1 1 1h1.6l-4.5 4.5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L20 5.4V7c0 .6.4 1 1 1s1-.4 1-1V3c0-.2-.1-.5-.3-.7Zm-6.2 11.8L9.9 8.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.7 5.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3.3-.4.3-1.1-.1-1.5Z" })),
    reply: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.156 3.074a1 1 0 0 1 .622.926v3.689c3.687.715 6.414 2.447 8.37 4.727 2.088 2.434 3.255 5.444 3.833 8.392a1 1 0 0 1-1.8.766c-2.393-3.418-5.659-5.127-10.403-5.333v3.626a1 1 0 0 1-1.714.7l-7.778-7.934a1 1 0 0 1 0-1.4L9.064 3.3a1 1 0 0 1 1.092-.226ZM3.4 11.934l5.378 5.484V15.22a1 1 0 0 1 1-1c4.08 0 7.376.947 10.015 2.988-.555-1.261-1.266-2.445-2.163-3.49-1.785-2.08-4.343-3.663-7.996-4.195a1 1 0 0 1-.856-.99V6.448L3.4 11.933Z" })),
    user: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M15.71 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1.006 1.006 0 1 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" }))),
    eye: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.14 12a18.68 18.68 0 0 0 2.464 3.316C6.397 17.226 8.9 19 12 19c3.1 0 5.605-1.774 7.395-3.684A18.684 18.684 0 0 0 21.86 12a18.681 18.681 0 0 0-2.464-3.316C17.605 6.774 15.101 5 12 5 8.9 5 6.396 6.774 4.605 8.684A18.678 18.678 0 0 0 2.14 12ZM23 12l.894-.448-.002-.003-.003-.007-.011-.022a10.615 10.615 0 0 0-.192-.354 20.675 20.675 0 0 0-2.831-3.85C18.895 5.226 15.899 3 12 3 8.1 3 5.104 5.226 3.145 7.316a20.674 20.674 0 0 0-2.831 3.85 12.375 12.375 0 0 0-.192.354l-.011.022-.003.007-.002.002s0 .002.894.449l-.894-.447a1 1 0 0 0 0 .894L1 12l-.894.447.002.004.003.007.011.022a8.267 8.267 0 0 0 .192.354 20.67 20.67 0 0 0 2.831 3.85C5.105 18.774 8.1 21 12 21c3.9 0 6.895-2.226 8.855-4.316a20.672 20.672 0 0 0 2.831-3.85 11.81 11.81 0 0 0 .192-.354l.011-.022.003-.007.002-.002s0-.002-.894-.449Zm0 0 .894.447c.141-.281.14-.613 0-.895L23 12Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" }))),
    save: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.821 15.506c.17 0 .34.043.492.129L17 18.285V5.335c0-.201-.12-.334-.2-.334H7.2c-.08 0-.2.133-.2.334v12.9l4.306-2.585c.16-.095.337-.143.515-.143ZM6.001 21a1 1 0 0 1-1-1V5.334C5 4.047 5.986 3 7.2 3h9.6C18.012 3 19 4.047 19 5.334V20a1 1 0 0 1-1.493.87l-5.672-3.207-5.322 3.195A1.006 1.006 0 0 1 6 21Z" })),
    favorite: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 16.486c.159 0 .318.038.463.113l3.769 1.97-.717-4.157a.999.999 0 0 1 .29-.89l3.036-2.936-4.203-.612a.999.999 0 0 1-.752-.544L12 5.636 10.114 9.43a.999.999 0 0 1-.752.544l-4.204.612 3.036 2.937a.999.999 0 0 1 .29.889l-.717 4.157 3.77-1.97c.145-.075.304-.113.463-.113Zm5.562 4.905a.996.996 0 0 1-.463-.113L12 18.614l-5.1 2.664a1 1 0 0 1-1.448-1.057l.973-5.628-4.12-3.985a.998.998 0 0 1 .55-1.708l5.702-.828 2.547-5.127c.338-.68 1.454-.68 1.792 0l2.547 5.127 5.702.828a.998.998 0 0 1 .551 1.708l-4.12 3.985.971 5.628a1 1 0 0 1-.985 1.17Z" })),
    watchlist: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 6a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 12a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 18a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM2 6a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 18a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" })),
    message: (React__default["default"].createElement("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })),
    play: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 4 21V3a1 1 0 0 1 .52-.878ZM6 4.832v14.336L17.15 12 6 4.832Z" })),
    report: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM11 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" }))),
    add: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" }))),
    music: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.646 2.237A1 1 0 0 1 22 3v13a1 1 0 1 1-2 0V4.18L10 5.847V18a1 1 0 1 1-2 0V5a1 1 0 0 1 .836-.986l12-2a1 1 0 0 1 .81.223Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM18 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" }))),
    help: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.258 8.024a2 2 0 0 0-2.225 1.308 1 1 0 1 1-1.886-.664 4 4 0 0 1 7.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8.049 8.049 0 0 1-1.686.848l-.035.013-.011.003-.004.002h-.002L11.92 13l.316.949a1 1 0 0 1-.633-1.897H11.6h.002l.016-.006.074-.027a6.06 6.06 0 0 0 1.172-.6c.69-.46 1.055-.95 1.055-1.419v-.001a2 2 0 0 0-1.662-1.975ZM11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" }))),
    fraction: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" })),
    delete: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1h-4Zm7 2V4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H5a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a1 1 0 0 0-1-1h-2ZM6 7v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7H6Z" }))),
    edit: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 3.172a1.829 1.829 0 0 0-1.293.535L4.395 17.02l-.97 3.556 3.556-.97L20.293 6.293A1.829 1.829 0 0 0 19 3.172Zm-1.465-1.709a3.829 3.829 0 0 1 4.172 6.244l-13.5 13.5a1 1 0 0 1-.444.258l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 .258-.444l13.5-13.5a3.83 3.83 0 0 1 1.242-.83Z" })),
    alert: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.528 2.283a3 3 0 0 1 4.037 1.058l.003.005 8.47 14.14.008.014a3 3 0 0 1-2.565 4.5H3.519a2.999 2.999 0 0 1-2.565-4.5l.008-.014 8.47-14.14.858.514-.855-.519a3 3 0 0 1 1.093-1.058Zm.618 2.094L2.683 18.506A1 1 0 0 0 3.536 20h16.928a1 1 0 0 0 .853-1.494L12.855 4.379l-.001-.002a1 1 0 0 0-1.708 0Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1ZM11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" }))),
    calendar: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5ZM2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM8 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1ZM2 10a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z" }))),
    filter: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.093 2.58A1 1 0 0 1 2 2h20a1 1 0 0 1 .764 1.646L15 12.826V21a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 9 19v-6.174l-7.764-9.18a1 1 0 0 1-.143-1.067ZM4.155 4l6.609 7.814a1 1 0 0 1 .236.646v5.922l2 1V12.46a1 1 0 0 1 .236-.646L19.845 4H4.155Z" })),
    website: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 12a14.3 14.3 0 0 0 3 8.45A14.3 14.3 0 0 0 15 12a14.3 14.3 0 0 0-3-8.45A14.3 14.3 0 0 0 9 12Zm3-10-.738-.674A16.3 16.3 0 0 0 7 12.02a16.3 16.3 0 0 0 4.262 10.653 1 1 0 0 0 1.476 0A16.3 16.3 0 0 0 17 11.98a16.3 16.3 0 0 0-4.262-10.653L12 2Z" }))),
    twitter: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.212 4.311a4.733 4.733 0 0 1 4.767.827 8.083 8.083 0 0 0 1.778-.947 1 1 0 0 1 1.548 1.054 7.433 7.433 0 0 1-1.652 3.163c.009.116.013.231.014.347v.003c0 5.142-2.479 8.93-6.051 10.831-3.548 1.889-8.075 1.864-12.102-.373a1 1 0 0 1 .526-1.873 8.7 8.7 0 0 0 3.703-.668c-1.136-.749-1.973-1.623-2.57-2.564-.855-1.35-1.176-2.779-1.234-4.057a11.085 11.085 0 0 1 .356-3.239 11.07 11.07 0 0 1 .41-1.264 4.99 4.99 0 0 1 .032-.079l.01-.024.004-.007v-.003l.001-.001.915.405-.914-.406a1 1 0 0 1 1.732-.169 7.883 7.883 0 0 0 5.684 3.315 4.734 4.734 0 0 1 3.043-4.27ZM5.103 7.877a8.8 8.8 0 0 0-.167 2.086c.047 1.013.298 2.085.927 3.078.625.987 1.661 1.958 3.376 2.72a1 1 0 0 1 .156 1.741c-.768.522-1.596.938-2.462 1.242 2.404.476 4.778.125 6.743-.92 2.885-1.536 4.99-4.623 4.99-9.064 0-.17-.016-.339-.048-.506a1 1 0 0 1 .28-.9l.114-.115-.007.002a1 1 0 0 1-1.043-.301 2.734 2.734 0 0 0-4.795 1.83v.847a1 1 0 0 1-.974 1 9.883 9.883 0 0 1-7.09-2.74Z" })),
    medium: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.976 7.7a.645.645 0 0 0-.21-.545L4.21 5.28V5h4.832l3.735 8.191L16.06 5h4.607v.28l-1.33 1.276a.39.39 0 0 0-.149.373v9.374a.39.39 0 0 0 .148.373l1.3 1.275v.28h-6.537v-.28l1.347-1.307c.132-.131.132-.17.132-.372V8.694l-3.743 9.506h-.505L6.972 8.695v6.371a.879.879 0 0 0 .241.73l1.75 2.124v.28H4v-.28l1.75-2.124a.846.846 0 0 0 .226-.73V7.699Z" })),
    instagram: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.167 5A3.167 3.167 0 0 0 5 8.167V16.5a3.167 3.167 0 0 0 3.167 3.167H16.5a3.167 3.167 0 0 0 3.167-3.167V8.167A3.167 3.167 0 0 0 16.5 5H8.167ZM3 8.167A5.167 5.167 0 0 1 8.167 3H16.5a5.167 5.167 0 0 1 5.167 5.167V16.5a5.167 5.167 0 0 1-5.167 5.167H8.167A5.167 5.167 0 0 1 3 16.5V8.167Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.711 9.99a2.333 2.333 0 1 0-.684 4.616 2.333 2.333 0 0 0 .684-4.617ZM10.373 8.45a4.334 4.334 0 1 1 3.992 7.693 4.334 4.334 0 0 1-3.992-7.693ZM15.916 7.75a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1Z" }))),
    telegram: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.707 1.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414-1.414l11-11a1 1 0 0 1 1.414 0Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.707 1.293a1 1 0 0 1 .237 1.037l-7 20a1 1 0 0 1-1.858.076l-3.844-8.648-8.648-3.844a1 1 0 0 1 .076-1.858l20-7a1 1 0 0 1 1.037.237ZM4.711 9.11l6.695 2.975a1 1 0 0 1 .508.508l2.975 6.695L20.37 3.63 4.711 9.11Z" }))),
    discord: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M8.5 10a2.744 2.744 0 0 0-1.815.781 2.271 2.271 0 0 0-.682 1.719c-.032.633.214 1.25.682 1.719.467.468 1.12.75 1.815.781a2.745 2.745 0 0 0 1.816-.781 2.271 2.271 0 0 0 .681-1.719 2.271 2.271 0 0 0-.681-1.719A2.745 2.745 0 0 0 8.5 10Zm0 3.636a1.18 1.18 0 0 1-.752-.384.982.982 0 0 1-.247-.752.982.982 0 0 1 .247-.752 1.18 1.18 0 0 1 .752-.384c.296.034.566.172.752.384a.982.982 0 0 1 .247.752c.028.27-.06.54-.247.752a1.18 1.18 0 0 1-.752.384ZM15.5 10a2.745 2.745 0 0 0-1.816.781 2.271 2.271 0 0 0-.681 1.719c-.032.633.214 1.25.681 1.719.469.468 1.121.75 1.816.781a2.745 2.745 0 0 0 1.816-.781 2.271 2.271 0 0 0 .681-1.719 2.271 2.271 0 0 0-.681-1.719A2.745 2.745 0 0 0 15.5 10Zm0 3.636a1.18 1.18 0 0 1-.752-.384.981.981 0 0 1-.247-.752.981.981 0 0 1 .247-.752 1.18 1.18 0 0 1 .752-.384c.296.034.566.172.752.384a.981.981 0 0 1 .247.752c.028.27-.06.54-.247.752a1.18 1.18 0 0 1-.752.384Z", strokeWidth: 0.5 }),
        React__default["default"].createElement("path", { d: "M21.89 9.894a20.723 20.723 0 0 0-.96-2.56 4.55 4.55 0 0 0-.935-1.526l-.061-.04c-2.008-1.537-4.943-1.756-5.055-1.765h-.16a.711.711 0 0 0-.328.133.689.689 0 0 0-.22.274 4.345 4.345 0 0 0-.228.662A14.732 14.732 0 0 0 12 4.917c-.65.009-1.3.06-1.943.155a4.584 4.584 0 0 0-.229-.662.677.677 0 0 0-.28-.315.701.701 0 0 0-.417-.092c-.145 0-3.062.228-5.037 1.76l-.065.045a4.55 4.55 0 0 0-.936 1.527 20.7 20.7 0 0 0-.937 2.56A23.323 23.323 0 0 0 1 16.571a.655.655 0 0 0 .09.347c.612 1.024 1.684 1.833 3.234 2.423.92.364 1.893.586 2.883.658a.745.745 0 0 0 .58-.279L8.836 18.3c2.076.439 4.224.439 6.3 0l1.077 1.421a.693.693 0 0 0 .566.279h.028a9.784 9.784 0 0 0 2.884-.658c1.535-.59 2.607-1.399 3.22-2.427a.646.646 0 0 0 .089-.343 23.326 23.326 0 0 0-1.11-6.678Zm-4.517 7.702a7.791 7.791 0 0 0 1.873-1.083.676.676 0 0 0 .056-.969.713.713 0 0 0-.992-.055 6.12 6.12 0 0 1-1.503.86c-.438.18-.889.332-1.348.456a.624.624 0 0 0-.43.119c-.993.225-2.01.337-3.029.334a13.213 13.213 0 0 1-3.052-.343.727.727 0 0 0-.412-.092 10.16 10.16 0 0 1-1.343-.457 5.894 5.894 0 0 1-1.498-.859.708.708 0 0 0-.523-.212.72.72 0 0 0-.515.231.687.687 0 0 0-.175.527.678.678 0 0 0 .277.482c.57.444 1.2.807 1.872 1.08.258.109.524.214.796.305l-.52.686a9.551 9.551 0 0 1-2.073-.53 4.972 4.972 0 0 1-2.41-1.71c.068-2.063.418-4.11 1.038-6.083.242-.808.536-1.6.88-2.372.168-.386.382-.751.637-1.088.69-.5 1.474-.864 2.308-1.07-.602.22-1.18.496-1.728.823a.699.699 0 0 0-.309.247.675.675 0 0 0 .281 1.005.707.707 0 0 0 .726-.073C8.597 6.33 11.658 6.288 12 6.288c.342 0 3.389.041 5.715 1.445a.71.71 0 0 0 1.053-.165.674.674 0 0 0-.294-.974 10.116 10.116 0 0 0-1.77-.845 6.658 6.658 0 0 1 2.317 1.065c.263.338.482.706.65 1.097.345.772.639 1.564.88 2.372.622 1.968.973 4.007 1.045 6.065a4.972 4.972 0 0 1-2.411 1.71 9.54 9.54 0 0 1-2.074.53l-.52-.686c.258-.091.525-.196.782-.306Z", strokeWidth: 0.5 }))),
    facebook: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.757 2.757A6 6 0 0 1 15 1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v2h3a1 1 0 0 1 .97 1.242l-1 4A1 1 0 0 1 17 15h-2v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-7H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2V7a6 6 0 0 1 1.757-4.243ZM15 3a4 4 0 0 0-4 4v3a1 1 0 0 1-1 1H8v2h2a1 1 0 0 1 1 1v7h2v-7a1 1 0 0 1 1-1h2.22l.5-2H14a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h2V3h-2Z" })),
    sports: (React__default["default"].createElement("path", { d: "M20.07 6.11a9.85 9.85 0 0 0-4.3-3.36A10 10 0 0 0 2 12v.56A9.94 9.94 0 0 0 3.33 17a10 10 0 0 0 5.89 4.65c.906.245 1.842.363 2.78.35a10 10 0 0 0 9.88-8.59A9.46 9.46 0 0 0 22 12a9.83 9.83 0 0 0-1.93-5.89Zm-2 .77L17 9.74l-1.62.44L13 8.49V6.64l2.49-1.81a7.81 7.81 0 0 1 2.62 2.05h-.04ZM14 11.67 13.22 14h-2.45L10 11.67l2-1.43 2 1.43ZM12 4c.372.004.742.034 1.11.09l-1.11.8-1.11-.8A8.002 8.002 0 0 1 12 4ZM4.88 8.37l.4 1.32-1.13.79a7.88 7.88 0 0 1 .73-2.11Zm1.37 9.17 1.38.05.37 1.33a8.319 8.319 0 0 1-1.75-1.38ZM8 15.6l-3.15-.11A7.83 7.83 0 0 1 4.07 13l2.49-1.74 1.44.62.89 2.76-.89.96Zm.86-5.53-1.56-.7-.91-3A7.93 7.93 0 0 1 8.5 4.83L11 6.64v1.85l-2.14 1.58ZM13 19.93a8.08 8.08 0 0 1-2.63-.12l-.83-2.92.83-.89h3.07l.67 1L13 19.93Zm2.41-.7.46-1.23 1.36.07a7.832 7.832 0 0 1-1.85 1.16h.03Zm3.46-3.12L15.76 16l-.71-1.1.89-2.76 1.51-.41 2.36 2a7.839 7.839 0 0 1-.97 2.38h.03Zm.05-5.83L19.4 9c.282.68.46 1.398.53 2.13l-1.01-.85Z" })),
    edit2: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 20a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1ZM18 3.879c-.297 0-.583.118-.793.328L4.903 16.511l-.529 2.115 2.115-.529L18.793 5.793A1.123 1.123 0 0 0 18 3.879Zm-2.207-1.086a3.121 3.121 0 0 1 4.414 4.414l-12.5 12.5a1 1 0 0 1-.464.263l-4 1a1 1 0 0 1-1.213-1.212l1-4a1 1 0 0 1 .263-.465l12.5-12.5Z" })),
    game: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.632 8.221a5.43 5.43 0 0 1 3.771 1.537h.038a5.317 5.317 0 0 1-3.772 9.08 5.111 5.111 0 0 1-2.027-.396 5.272 5.272 0 0 1-1.376-.877H9.693a5.251 5.251 0 0 1-3.375 1.291 5.318 5.318 0 1 1 0-10.635h4.667a4.62 4.62 0 0 1 .132-.83 4.79 4.79 0 0 1 .858-1.744 5.12 5.12 0 0 1 1.942-1.3 5.232 5.232 0 0 1 2.281-.33.943.943 0 0 1 .651.273.942.942 0 0 1 .273.669.943.943 0 0 1-.942.943 3.479 3.479 0 0 0-1.5.188c-.47.175-.894.452-1.244.811-.28.39-.457.844-.519 1.32h4.715Zm3.426 5.29a3.45 3.45 0 0 0-.994-2.424h.028a3.299 3.299 0 0 0-1.112-.735 3.412 3.412 0 0 0-1.216-.245H6.252a3.43 3.43 0 0 0-1.273.245c-.426.17-.812.426-1.132.754a3.442 3.442 0 0 0 0 4.846 3.47 3.47 0 0 0 2.414.943 3.535 3.535 0 0 0 2.433-.943.943.943 0 0 1 .66-.273h5.1a1.17 1.17 0 0 1 .764.255 3.47 3.47 0 0 0 2.414.942 3.536 3.536 0 0 0 2.432-.942 3.45 3.45 0 0 0 .994-2.423ZM5.988 12.7a.942.942 0 0 0-.726 0 .943.943 0 0 0-.51 1.206.942.942 0 0 0 .208.33.944.944 0 0 0 .679.274 1 1 0 0 0 .377-.076 1.15 1.15 0 0 0 .302-.226.943.943 0 0 0 .207-.349.811.811 0 0 0 0-.292.943.943 0 0 0-.273-.66.783.783 0 0 0-.264-.207Zm11.021.198a1.198 1.198 0 0 0-.207.31.943.943 0 0 0 .207 1.066c.181.173.42.27.67.274a.943.943 0 0 0 .358-.076.84.84 0 0 0 .302-.198.82.82 0 0 0 .207-.31.944.944 0 0 0 .076-.36.793.793 0 0 0-.076-.357.944.944 0 0 0-.198-.302.811.811 0 0 0-.311-.217.942.942 0 0 0-.547-.047 1 1 0 0 0-.48.217Z" })),
    metaverse: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.335 15.385c-.8-1.2-2.31-1.588-3.663-1.935l-.063-.016a12.488 12.488 0 0 1-1.379-.39l-.293-.722a5.949 5.949 0 0 0 1.124-1.951 1.782 1.782 0 0 0 1.643-1.805V6.478a1.784 1.784 0 0 0-.42-1.161 1.771 1.771 0 0 0-.978-.576 4.751 4.751 0 0 0-8.606 0 1.78 1.78 0 0 0-1.379 1.737v2.088a1.764 1.764 0 0 0 1.585 1.766c.249.716.634 1.379 1.134 1.95l-.264.732a13.1 13.1 0 0 1-1.379.39l-.038.01c-1.36.34-2.903.724-3.678 1.942-.313.361-1.35 1.854-1.672 5.717a.779.779 0 0 0 .215.664.801.801 0 0 0 .596.263h18.366a.804.804 0 0 0 .596-.263.78.78 0 0 0 .215-.605c-.313-3.873-1.34-5.366-1.662-5.747ZM12.003 3.61a3.116 3.116 0 0 1 2.367 1.083H9.637a3.109 3.109 0 0 1 2.366-1.083ZM8.091 8.732a.167.167 0 0 1-.176-.166V6.478a.175.175 0 0 1 .176-.176h7.824a.176.176 0 0 1 .166.176v2.088a.166.166 0 0 1-.166.166h-1.252a3.048 3.048 0 0 1-1.056-.186 4.517 4.517 0 0 0-1.604-.283 4.576 4.576 0 0 0-1.613.283 2.94 2.94 0 0 1-1.047.186H8.091Zm5.164 3.678.342.975a3.38 3.38 0 0 1-3.227 0l.342-.975a.808.808 0 0 0-.185-.84 4.535 4.535 0 0 1-.89-1.229 4.63 4.63 0 0 0 1.32-.312 3 3 0 0 1 2.102 0c.418.158.856.253 1.3.283a4.79 4.79 0 0 1-.899 1.23.81.81 0 0 0-.186.868h-.02ZM3.71 20.35c.07-1.379.48-2.72 1.193-3.902a.624.624 0 0 0 .098-.127c.412-.652 1.44-.928 2.489-1.21l.289-.078c.513-.118 1.019-.264 1.515-.439a4.996 4.996 0 0 0 5.418 0c.5.176 1.009.322 1.526.44 1.144.282 2.317.575 2.767 1.287l.088.117s.831.976 1.203 3.902l-16.586.01ZM15.044 8.195a.676.676 0 0 0 .651-.81.672.672 0 0 0-.92-.484.675.675 0 0 0-.363.88.674.674 0 0 0 .632.414Zm-2.69 8.544c.143-.058.296-.088.451-.085a1.206 1.206 0 0 1 1.037.585 1.228 1.228 0 0 1 0 1.19 1.202 1.202 0 0 1-1.037.586.382.382 0 0 1-.381-.38.39.39 0 0 1 .381-.381.422.422 0 0 0 .399-.584.42.42 0 0 0-.399-.256.413.413 0 0 0-.42.42 1.189 1.189 0 0 1-.353.84 1.194 1.194 0 0 1-1.931-.385 1.179 1.179 0 0 1 .26-1.294 1.153 1.153 0 0 1 .84-.341.382.382 0 0 1 .382.38.39.39 0 0 1-.382.38.422.422 0 0 0-.432.42.419.419 0 0 0 .432.42.413.413 0 0 0 .294-.117.429.429 0 0 0 .127-.303 1.19 1.19 0 0 1 .732-1.095Z" })),
    brand: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("g", { clipPath: "url(#a)", fillRule: "evenodd", clipRule: "evenodd" },
            React__default["default"].createElement("path", { d: "M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM4 8a8 8 0 1 1 16 0A8 8 0 0 1 4 8Z" }),
            React__default["default"].createElement("path", { d: "M15.659 12.889a1 1 0 0 1 1.122.86l1.21 9.12a1 1 0 0 1-1.506.989L12 21.166l-4.485 2.692a1 1 0 0 1-1.506-.99l1.21-9.11a1 1 0 0 1 1.982.264l-.937 7.053 3.222-1.933a1 1 0 0 1 1.028 0l3.222 1.933-.937-7.063a1 1 0 0 1 .86-1.123Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "a" },
                React__default["default"].createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }))))),
    idea: (React__default["default"].createElement("path", { d: "M17.09 2.82a8 8 0 0 0-6.68-1.66 8 8 0 0 0-6.27 6.32 8.07 8.07 0 0 0 1.72 6.65A4.54 4.54 0 0 1 7 17v3a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2.81A5.17 5.17 0 0 1 18.22 14a8 8 0 0 0-1.13-11.2v.02ZM15 20a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1h6v1Zm1.67-7.24A7.13 7.13 0 0 0 15 17h-2v-3a1 1 0 1 0-2 0v3H9a6.5 6.5 0 0 0-1.6-4.16 6 6 0 0 1 3.39-9.72A6 6 0 0 1 18 9a5.89 5.89 0 0 1-1.33 3.76Z" })),
    logOut: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 0 1 0 2H5ZM15.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L19.586 12l-4.293-4.293a1 1 0 0 1 0-1.414Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z" }))),
    settings: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.374 20h1.252v-.767c0-.935.575-1.775 1.463-2.142.92-.383 1.926-.195 2.588.471l.538.541.889-.888-.546-.544c-.663-.662-.85-1.666-.477-2.557l.002-.002.01-.028a2.324 2.324 0 0 1 2.14-1.459H20v-1.25h-.767c-.934 0-1.776-.575-2.142-1.464-.385-.92-.196-1.925.47-2.588l.541-.539-.887-.887-.544.545c-.662.662-1.665.849-2.556.477-.914-.377-1.49-1.217-1.49-2.152V4h-1.25v.767c0 .935-.575 1.775-1.464 2.142-.92.385-1.924.196-2.587-.471l-.54-.541-.887.888.545.544c.662.662.85 1.666.477 2.557-.376.913-1.217 1.489-2.152 1.489H4v1.25h.767c.935 0 1.776.575 2.142 1.464.385.92.196 1.925-.47 2.588l-.541.539.887.887.545-.545c.662-.662 1.665-.849 2.556-.477.913.377 1.489 1.217 1.489 2.152V20Zm1.569 2H11.05a1.678 1.678 0 0 1-1.675-1.676v-1.091c0-.147-.117-.248-.227-.293-.144-.059-.298-.071-.404.032l-.77.771a1.683 1.683 0 0 1-2.377 0l-1.34-1.34a1.67 1.67 0 0 1-.492-1.19c0-.449.176-.871.495-1.189l.768-.765c.105-.105.094-.259.047-.37-.06-.147-.16-.264-.308-.264H3.683A1.684 1.684 0 0 1 2 12.943v-1.892c0-.925.752-1.676 1.677-1.676h1.09c.147 0 .248-.118.293-.228.06-.144.072-.299-.032-.403l-.771-.77a1.685 1.685 0 0 1 0-2.377l1.34-1.34a1.667 1.667 0 0 1 1.188-.492h.002c.449 0 .872.175 1.189.494l.765.769c.105.106.26.094.37.047.147-.061.264-.161.264-.308V3.683c0-.928.755-1.683 1.682-1.683h1.893c.924 0 1.676.752 1.676 1.676v1.091c0 .147.117.248.226.293.146.06.3.073.405-.032l.77-.771a1.683 1.683 0 0 1 2.377 0l1.34 1.341c.319.317.492.739.491 1.189 0 .448-.174.871-.494 1.188l-.768.766c-.105.105-.095.259-.047.37.06.147.16.264.308.264h1.083c.928 0 1.683.754 1.683 1.682v1.892c0 .925-.752 1.676-1.677 1.676h-1.09c-.146 0-.248.118-.293.228l-.014.033c-.045.111-.057.266.047.37l.77.77a1.685 1.685 0 0 1 0 2.377l-1.34 1.34a1.667 1.667 0 0 1-1.188.492h-.002c-.448 0-.872-.175-1.189-.494l-.765-.769c-.104-.105-.26-.093-.37-.047-.146.061-.263.161-.263.308v1.084c0 .928-.755 1.683-1.683 1.683ZM12 10.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5Zm0 5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Z" })),
    art: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.5 6.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 10.5 6.5Zm4.201 2.75a1.5 1.5 0 1 1 2.6-1.5 1.5 1.5 0 0 1-2.6 1.5ZM8.75 7.201a1.5 1.5 0 1 0-1.5 2.6 1.5 1.5 0 0 0 1.5-2.6ZM5.757 13.34a1.499 1.499 0 1 1 2.486-1.678 1.5 1.5 0 1 1-2.486 1.678ZM15.881 15h-1.65a2.502 2.502 0 0 0-2.5 2.5c0 .606.224 1.193.63 1.653.125.14.166.305.122.488-.05.205-.285.338-.594.358a8.01 8.01 0 0 1-5.946-2.773c-1.515-1.755-2.18-4.004-1.87-6.332.512-3.833 3.959-6.862 7.85-6.895h.075c2.357 0 4.578.9 6.107 2.478 1.288 1.329 1.96 3.024 1.89 4.772-.08 1.998-2.002 3.751-4.114 3.751Zm3.659-9.916C17.617 3.101 14.815 1.993 11.906 2h-.001c-4.944.042-9.164 3.752-9.813 8.631a10.057 10.057 0 0 0 2.338 7.903A10.006 10.006 0 0 0 11.86 22h.039c1.2 0 2.258-.787 2.527-1.886a2.517 2.517 0 0 0-.567-2.288.494.494 0 0 1-.128-.325.5.5 0 0 1 .5-.5h1.65c3.192 0 5.99-2.598 6.112-5.672.092-2.3-.78-4.517-2.453-6.244Z" })),
    eyeOff: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m12.073 5 8.68 8.688c.4-.542.77-1.106 1.105-1.69a18.681 18.681 0 0 0-2.463-3.314C17.62 6.789 15.14 5.028 12.073 5ZM23 12l.894-.447a1 1 0 0 1-.012.918 19.5 19.5 0 0 1-2.277 3.363 1 1 0 0 1-1.472.063L9.193 4.947a1 1 0 0 1 .48-1.68A10.12 10.12 0 0 1 12 3h.001L12 4V3h.001c3.9 0 6.895 2.227 8.854 4.316a20.675 20.675 0 0 1 2.831 3.85 11.81 11.81 0 0 1 .192.354l.011.022.003.007.002.004L23 12ZM5.453 5.265a1 1 0 0 1 1.314.088l3.816 3.816.007.007 4.234 4.234.007.007 3.816 3.816a1 1 0 0 1-.1 1.502A11.07 11.07 0 0 1 12.016 21H12c-3.9 0-6.896-2.226-8.855-4.316a20.67 20.67 0 0 1-2.831-3.85 12.375 12.375 0 0 1-.192-.354l-.011-.022-.003-.007-.002-.002s0-.002.894-.449l-.894.447a1 1 0 0 1 .013-.92 19.45 19.45 0 0 1 5.334-6.262Zm-3.31 6.738a18.68 18.68 0 0 0 2.462 3.313c1.789 1.909 4.29 3.68 7.387 3.684a9.07 9.07 0 0 0 4.38-1.214l-2.322-2.322a4.006 4.006 0 0 1-3.623.32A4 4 0 0 1 8.536 9.95L5.987 7.401a17.45 17.45 0 0 0-3.844 4.602Zm7.885-.56a2 2 0 0 0 2.53 2.53l-2.53-2.53Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414Z" }))),
    notificationBadge: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.05 3.05A7 7 0 0 1 19 8c0 3.353.717 5.435 1.378 6.646.332.608.655 1.007.88 1.244a3.03 3.03 0 0 0 .305.284A1 1 0 0 1 21 18H3a1 1 0 0 1-.563-1.826 3.037 3.037 0 0 0 .306-.283c.224-.238.547-.637.88-1.245C4.282 13.435 5 11.353 5 8a7 7 0 0 1 2.05-4.95ZM2.444 16.17ZM5.149 16h13.702a9.422 9.422 0 0 1-.229-.396C17.782 14.065 17 11.647 17 8A5 5 0 0 0 7 8c0 3.647-.783 6.065-1.622 7.604-.076.14-.153.271-.229.396ZM9.768 20.135a1 1 0 0 1 1.367.363 1 1 0 0 0 1.73 0 1 1 0 0 1 1.73 1.004 3 3 0 0 1-5.19 0 1 1 0 0 1 .363-1.367Z" }),
        React__default["default"].createElement("path", { d: "M21 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z", fill: "#FF2828" }))),
    drag: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM6 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM6 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM14 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM14 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM14 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" })),
    skipBack: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.433 3.099A1 1 0 0 1 20 4v16a1 1 0 0 1-1.625.78l-10-8a1 1 0 0 1 0-1.56l10-8a1 1 0 0 1 1.058-.121ZM10.601 12 18 17.92V6.08L10.6 12ZM5 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" })),
    skipFoward: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.567 3.099a1 1 0 0 1 1.058.12l10 8a1 1 0 0 1 0 1.562l-10 8A1 1 0 0 1 4 20V4a1 1 0 0 1 .567-.901ZM6 6.08v11.838L13.4 12 6 6.08ZM19 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z" })),
    collection: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.846 7A.846.846 0 0 0 7 7.846v8.308c0 .467.379.846.846.846h8.308a.846.846 0 0 0 .846-.846v-1.846a1 1 0 1 1 2 0v1.846A2.846 2.846 0 0 1 16.154 19H7.846A2.846 2.846 0 0 1 5 16.154V7.846A2.846 2.846 0 0 1 7.846 5h1.846a1 1 0 0 1 0 2H7.846Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.846 11a.846.846 0 0 0-.846.846v8.308c0 .467.379.846.846.846h8.308a.846.846 0 0 0 .846-.846v-1.846a1 1 0 1 1 2 0v1.846A2.846 2.846 0 0 1 12.154 23H3.846A2.846 2.846 0 0 1 1 20.154v-8.308A2.846 2.846 0 0 1 3.846 9h1.846a1 1 0 0 1 0 2H3.846Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.846 3a.846.846 0 0 0-.846.846v8.308c0 .467.379.846.846.846h8.308a.846.846 0 0 0 .846-.846V3.846A.846.846 0 0 0 20.154 3h-8.308ZM9 3.846A2.846 2.846 0 0 1 11.846 1h8.308A2.846 2.846 0 0 1 23 3.846v8.308A2.846 2.846 0 0 1 20.154 15h-8.308A2.846 2.846 0 0 1 9 12.154V3.846Z" }))),
    linkedin: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 9a5 5 0 0 0-5 5v6h2v-6a3 3 0 0 1 6 0v6h2v-6a5 5 0 0 0-5-5Zm0-2a7 7 0 0 0-7 7v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a7 7 0 0 0-7-7ZM1 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9Zm2 1v10h2V10H3ZM4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM1 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" })),
    download: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.293 9.293a1 1 0 0 1 1.414 0L12 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" }))),
    happy: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.797 13.396A1 1 0 0 0 7.2 14.6L8 14l-.8.6.001.001.001.002.003.004.007.009.021.027.07.086a6.942 6.942 0 0 0 1.171 1.08c.798.58 2 1.191 3.526 1.191 1.526 0 2.728-.61 3.526-1.191a6.944 6.944 0 0 0 1.17-1.08c.03-.035.053-.064.07-.086l.022-.027.007-.01.003-.003.001-.002S16.8 14.6 16 14l.8.6a1 1 0 0 0-1.597-1.204l-.004.006a3.601 3.601 0 0 1-.194.219 4.951 4.951 0 0 1-.656.57c-.577.42-1.374.809-2.349.809-.974 0-1.772-.39-2.35-.809a4.952 4.952 0 0 1-.815-.748 1.932 1.932 0 0 1-.033-.041l-.005-.006ZM8 9a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z" }))),
    back: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.707 4.293a1 1 0 0 1 0 1.414L6.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" }))),
    home: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.456 5.177a4 4 0 0 0-4.912 0l-4 3.111A4 4 0 0 0 4 11.445V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8.555a4 4 0 0 0-1.544-3.157l-4-3.111Zm-6.14-1.579a6 6 0 0 1 7.368 0l4 3.111A6 6 0 0 1 22 11.445V20a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8.555A6 6 0 0 1 4.316 6.71l4-3.11Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 13a2 2 0 0 0-2 2v7a1 1 0 1 1-2 0v-7a4 4 0 0 1 8 0v7a1 1 0 1 1-2 0v-7a2 2 0 0 0-2-2Z" }))),
    activity: (React__default["default"].createElement("path", { d: "M7 16a1.5 1.5 0 0 0 1.5-1.5.77.77 0 0 0 0-.15l2.79-2.79h.46l1.61 1.61v.08a1.5 1.5 0 1 0 3 0v-.08L20 9.5A1.5 1.5 0 1 0 18.5 8a.767.767 0 0 0 0 .15l-3.61 3.61h-.16L13 10a1.5 1.5 0 1 0-3 0l-3 3a1.5 1.5 0 1 0 0 3Zm13.5 4h-17V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2Z" })),
    chat: (React__default["default"].createElement("path", { d: "M19 8h-1V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a1 1 0 0 0 .62.92 1 1 0 0 0 1.09-.21l2.81-2.82H8v1.44a3 3 0 0 0 3 3h6.92l2.37 2.38A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V11a3 3 0 0 0-3-3ZM8 11v1.89H6.11a1 1 0 0 0-.71.29L4 14.59V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3h-5a3 3 0 0 0-3 3Zm12 7.59-1-1a1 1 0 0 0-.71-.3H11a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7.59Z" })),
    addFriend: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.464 15.464A5 5 0 0 1 5 14h7a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536ZM8.5 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM20 7a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" }))),
    friendRequestCancel: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.464 15.464A5 5 0 0 1 7 14h7a5 5 0 0 1 3.536 1.464m-14.072 0A5 5 0 0 0 2 19v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-1.464-3.536M5 7.75a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM23.207 6.793a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414l4.5-4.5a1 1 0 0 1 1.414 0Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.293 6.793a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1-1.414 1.414l-4.5-4.5a1 1 0 0 1 0-1.414Z" }))),
    friendRequestRemove: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.965 15.464A5 5 0 0 1 6.5 14h7a5 5 0 0 1 3.536 1.464m-14.071 0A5 5 0 0 0 1.5 19v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-1.464-3.536M5 7.75a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.5 10.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" })),
    friendRequestSent: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.146 15.462a4.938 4.938 0 0 1 3.492-1.447h6.893a4.938 4.938 0 0 1 3.492 1.447m-13.17.707-.707-.707m13.877 0a4.938 4.938 0 0 1 1.446 3.492v1.97a1 1 0 1 1-2 0v-1.97a2.938 2.938 0 0 0-2.939-2.938H5.639A2.938 2.938 0 0 0 2.7 18.953v1.97a1 1 0 1 1-2 0v-1.97c0-1.31.52-2.566 1.446-3.492M4.146 7.688a4.938 4.938 0 1 1 9.877 0 4.938 4.938 0 0 1-9.877 0ZM9.084 4.75a2.938 2.938 0 1 0 0 5.877 2.938 2.938 0 0 0 0-5.877ZM22.898 8.893a1 1 0 0 1 0 1.414l-4.513 4.513a1 1 0 0 1-1.414 0l-2.051-2.052a1 1 0 0 1 1.414-1.414l1.344 1.344 3.806-3.805a1 1 0 0 1 1.414 0Z" })),
    burn: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("g", { clipPath: "url(#a)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.78.596a1 1 0 0 1 .562 1.042l-1.027 7.395H22.5a1 1 0 0 1 .72 1.694l-12 12.466a1 1 0 0 1-1.7-.892l1.423-7.001H1.5a1 1 0 0 1-.734-1.68L12.618.82A1 1 0 0 1 13.78.597ZM3.79 13.3h8.378a1 1 0 0 1 .98 1.2l-.982 4.828 7.985-8.295h-7.983a1 1 0 0 1-.99-1.137l.747-5.382L3.789 13.3Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "a" },
                React__default["default"].createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }))))),
    reveal: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("g", { clipPath: "url(#a)", fillRule: "evenodd", clipRule: "evenodd" },
            React__default["default"].createElement("path", { d: "M22.688 5.274a1 1 0 0 1 .038 1.414l-9 9.5a1 1 0 0 1-1.433.02l-4.268-4.269-6.294 6.743A1 1 0 1 1 .27 17.318l7-7.5a1 1 0 0 1 1.438-.025l4.274 4.273 8.293-8.754a1 1 0 0 1 1.414-.038Z" }),
            React__default["default"].createElement("path", { d: "M16 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6h-5a1 1 0 0 1-1-1Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "a" },
                React__default["default"].createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }))))),
    shareOptions: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12.4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7Zm3-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.998 2.4a4 4 0 0 0-4 4v4a1 1 0 1 1-2 0v-4a6 6 0 0 1 10.243-4.243l-.707.708.707-.708A6 6 0 0 1 18 6.4v4a1 1 0 0 1-2 0v-4a4 4 0 0 0-1.172-2.828M11.998 2.4a4 4 0 0 1 2.829 1.172L11.998 2.4Z" }))),
    pending: (React__default["default"].createElement("path", { d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Zm-.503-14a1 1 0 0 1 1 1v4.93l3.37 3.37a1.003 1.003 0 0 1-1.74 1l-3.5-3.6a1 1 0 0 1-.11-.59l-.02-.11V7a1 1 0 0 1 1-1Z" })),
    redeem: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M8 12a4 4 0 1 0 8 0", strokeWidth: 2, strokeLinecap: "round" }),
        React__default["default"].createElement("path", { d: "M3 7.811c0-.601 0-.902.086-1.185.086-.283.252-.534.586-1.034l.54-.81c.582-.873.872-1.309 1.315-1.545C5.969 3 6.493 3 7.54 3h8.918c1.048 0 1.572 0 2.014.237.443.236.733.672 1.315 1.544l.54.811c.334.5.5.75.586 1.034.086.283.086.584.086 1.185V17c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7.811Z", strokeWidth: 2 }),
        React__default["default"].createElement("path", { d: "M3 9h18", strokeWidth: 2, strokeLinecap: "round" }))),
    powerOn: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M19.092 5.344a1.206 1.206 0 0 0-.85-.344 1.229 1.229 0 0 0-.852.344 1.174 1.174 0 0 0-.352.832 1.152 1.152 0 0 0 .352.831 7.396 7.396 0 0 1 2.087 3.813 7.288 7.288 0 0 1-.433 4.304 7.488 7.488 0 0 1-2.808 3.343A7.753 7.753 0 0 1 12 19.722a7.753 7.753 0 0 1-4.236-1.255 7.488 7.488 0 0 1-2.808-3.343 7.288 7.288 0 0 1-.433-4.304A7.396 7.396 0 0 1 6.61 7.007a1.174 1.174 0 0 0 .352-.831 1.152 1.152 0 0 0-.352-.832A1.206 1.206 0 0 0 5.759 5a1.228 1.228 0 0 0-.851.344 9.7 9.7 0 0 0-2.72 5.003 9.56 9.56 0 0 0 .579 5.636 9.822 9.822 0 0 0 3.684 4.375A10.17 10.17 0 0 0 12 22a10.17 10.17 0 0 0 5.55-1.642 9.823 9.823 0 0 0 3.683-4.375 9.56 9.56 0 0 0 .58-5.636 9.7 9.7 0 0 0-2.72-5.003Z", fill: "#000" }),
        React__default["default"].createElement("path", { d: "M12 12V2", strokeWidth: 2, strokeLinecap: "round" }))),
    fixedPrice: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "m21.393 13.906-7.48 7.482a2.085 2.085 0 0 1-2.952 0l-8.668-8.66A1 1 0 0 1 2 12.02V2h10.018a1 1 0 0 1 .707.293l8.668 8.67a2.087 2.087 0 0 1 0 2.943Z", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 7c0-.552.445-1 .995-1h.01C7.555 6 8 6.448 8 7s-.445 1-.995 1h-.01A.998.998 0 0 1 6 7Z" }))),
    auctionTime: (React__default["default"].createElement("path", { d: "M15 2H9v2h6V2Zm-4 13h2V9h-2v6Zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 5a9 9 0 0 0-9 9c0 4.97 4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61ZM12 21c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7Z" })),
    openForOffers: (React__default["default"].createElement("path", { d: "M19.143 11.783h-1.905c0-1.148-.714-2.181-1.78-2.583L9.59 7H2v10.522h5.714v-1.378L14.381 18 22 15.609v-.957a2.86 2.86 0 0 0-2.857-2.87ZM3.905 15.609V8.913H5.81v6.696H3.905ZM14.352 16l-6.638-1.846V8.913h1.534l5.542 2.076c.324.124.543.44.543.794 0 0-1.895-.048-2.19-.144l-2.267-.755-.6 1.817 2.267.755c.486.163.99.25 1.505.25h5.095a.96.96 0 0 1 .857.535L14.352 16Z" })),
    infoFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.01 17a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1ZM13.01 8a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1Z", fill: "#fff" }))),
    checkmarkFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.873 8.26a1 1 0 0 1 .067 1.413l-6 6.6a1 1 0 0 1-1.477.003l-3-3.273a1 1 0 1 1 1.474-1.351l2.26 2.465 5.263-5.79a1 1 0 0 1 1.413-.067Z", fill: "#fff" }))),
    errorFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.707 8.707a1 1 0 0 0-1.414-1.414L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293Z", fill: "#fff" }))),
    warningFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM11 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z", fill: "#fff" }))),
    equalizerFilled: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 11.333V18H4v-6.667h3ZM11.333 6v12h-3V6h3ZM15.667 9.333V18h-3V9.333h3ZM20 14v4h-3v-4h3Z" })),
    pauseFilled: React__default["default"].createElement("path", { d: "M10 18V6a2 2 0 1 0-4 0v12a2 2 0 1 0 4 0ZM18 18V6a2 2 0 1 0-4 0v12a2 2 0 1 0 4 0Z" }),
    documentFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7Z" }),
        React__default["default"].createElement("path", { d: "M13 2v7h7", strokeLinecap: "round", strokeLinejoin: "round" }))),
    volumeInactiveFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M14 4.066a1 1 0 0 0-1.62-.784L7.05 7.5a1 1 0 0 1-.62.215H2a1 1 0 0 0-1 1v6.572a1 1 0 0 0 1 1h4.43a1 1 0 0 1 .62.215l5.33 4.217a1 1 0 0 0 1.62-.784V4.066Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.707 9.707a1 1 0 0 0-1.414-1.414L19 10.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L17.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414L19 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L20.414 12l2.293-2.293Z" }))),
    volumeActiveFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M15 4.066a1 1 0 0 0-1.62-.784L8.05 7.5a1 1 0 0 1-.62.215H3a1 1 0 0 0-1 1v6.572a1 1 0 0 0 1 1h4.43a1 1 0 0 1 .62.215l5.33 4.217a1 1 0 0 0 1.62-.784V4.066Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.483 7.144a1 1 0 0 1 1.373.34C18.61 8.73 19 10.355 19 12c0 1.644-.391 3.27-1.144 4.517a1 1 0 0 1-1.712-1.034c.528-.875.856-2.127.856-3.483 0-1.357-.328-2.608-.856-3.483a1 1 0 0 1 .34-1.373Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.432 4.177a1 1 0 0 1 1.391.255C22.237 6.482 23 9.206 23 12c0 2.794-.763 5.518-2.177 7.568a1 1 0 0 1-1.646-1.136C20.324 16.77 21 14.457 21 12c0-2.457-.676-4.769-1.823-6.432a1 1 0 0 1 .255-1.391Z" }))),
    playFilled: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 4 21V3a1 1 0 0 1 .52-.878ZM6 4.832v14.336L17.15 12 6 4.832Z" })),
    largeDisplayFilled: (React__default["default"].createElement("path", { d: "M4 4h6.857v6.857H4zM4 13.143h6.857V20H4zM13.143 4H20v6.857h-6.857zM13.143 13.143H20V20h-6.857z" })),
    smallDisplayFilled: (React__default["default"].createElement("path", { d: "M4 15.429h4.571V20H4zM4 9.714h4.571v4.571H4zM4 4h4.571v4.571H4zM15.429 15.429H20V20h-4.571zM15.429 9.714H20v4.571h-4.571zM15.429 4H20v4.571h-4.571zM9.714 15.429h4.571V20H9.714zM9.714 9.714h4.571v4.571H9.714zM9.714 4h4.571v4.571H9.714z" })),
    saveFilled: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.507 20.87a.996.996 0 0 0 1.007-.012l5.322-3.195 5.672 3.208A1 1 0 0 0 19 20V5.334C19 4.047 18.013 3 16.8 3H7.2C5.987 3 5 4.047 5 5.334V20a1 1 0 0 0 .507.87Z" })),
    musicFilled: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.947 14.992V4a1 1 0 0 0-1.217-.976L8.76 5.017a1.001 1.001 0 0 0-.785.976v8.341c-.44-.2-.924-.319-1.439-.319a3.496 3.496 0 0 0-3.492 3.493A3.496 3.496 0 0 0 6.536 21a3.496 3.496 0 0 0 3.492-3.492c0-.179-.026-.35-.053-.522V6.796l6.972-1.55v7.095a3.45 3.45 0 0 0-1.439-.319 3.496 3.496 0 0 0-3.493 3.492 3.496 3.496 0 0 0 3.493 3.492A3.496 3.496 0 0 0 19 15.514c0-.179-.027-.35-.053-.522Z" })),
    podcastFilled: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.214 21a.643.643 0 1 1 0-1.286h1.929v-2.607A5.793 5.793 0 0 1 6 11.357v-2.57a.643.643 0 1 1 1.286 0v2.57c0 2.481 2.018 4.5 4.5 4.5 2.481 0 4.5-2.019 4.5-4.5v-2.57a.643.643 0 1 1 1.285 0v2.57a5.794 5.794 0 0 1-5.142 5.75v2.607h1.928a.643.643 0 0 1 0 1.286H9.214Zm-.643-9.643V6.214A3.218 3.218 0 0 1 11.785 3 3.218 3.218 0 0 1 15 6.214v5.143a3.218 3.218 0 0 1-3.215 3.215 3.218 3.218 0 0 1-3.214-3.215Z" })),
    videoFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("circle", { cx: 11.5, cy: 12.334, r: 4.5, fill: "#fff" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.11 9.477-4.5 2.813a.562.562 0 0 1-.86-.477V9.188a.562.562 0 0 1 .86-.478l4.5 2.813a.563.563 0 0 1 0 .954Z" }))),
    imageFilled: (React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17.834c0 .644-.448 1.166-1 1.166H6l7.566-6.817c.246-.245.692-.244.933-.001L19 16.66v1.174ZM8 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8 7Zm10-4H6C4.346 3 3 4.346 3 6v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3Z" })),
    starFilled: (React__default["default"].createElement("path", { d: "M11.715 2.878a.3.3 0 0 1 .57 0l1.893 5.825a.3.3 0 0 0 .285.207h6.124a.3.3 0 0 1 .177.543l-4.955 3.6a.3.3 0 0 0-.109.335l1.893 5.824a.3.3 0 0 1-.462.335l-4.955-3.6a.3.3 0 0 0-.352 0l-4.955 3.6a.3.3 0 0 1-.462-.335L8.3 13.388a.3.3 0 0 0-.109-.336l-4.955-3.6a.3.3 0 0 1 .177-.542h6.124a.3.3 0 0 0 .285-.207l1.893-5.825Z" })),
    addFilled: (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 8a1 1 0 1 0-2 0v3H8a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3V8Z", fill: "#fff" }))),
};

/**
 * Type definition for Icon
 */
var SizesRecord = {
    1: 'w-1 h-1',
    2: 'w-2 h-2',
    3: 'w-3 h-3',
    4: 'w-4 h-4',
    5: 'w-5 h-5',
    6: 'w-6 h-6',
    7: 'w-7 h-7',
    8: 'w-8 h-8',
    9: 'w-9 h-9',
    10: 'w-10 h-10',
    11: 'w-11 h-11',
    12: 'w-12 h-12',
    14: 'w-14 h-14',
    16: 'w-16 h-16',
    20: 'w-20 h-20',
};

/**
 * @description <Icon> Atom Component
 */
var Icon = function (_a) {
    var icon = _a.icon, _b = _a.size, size = _b === void 0 ? 4 : _b, _c = _a.fillClassName, fillClassName = _c === void 0 ? 'currentColor' : _c, strokeClassName = _a.strokeClassName, _d = _a.spin, spin = _d === void 0 ? false : _d, props = __rest(_a, ["icon", "size", "fillClassName", "strokeClassName", "spin"]);
    return (React__default["default"].createElement("svg", __assign({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: classnames(SizesRecord[size], fillClassName, strokeClassName, {
            'animate-spin': spin,
        }) }, props),
        React__default["default"].createElement(React__default["default"].Fragment, null, icons[icon])));
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
    return (React__default["default"].createElement("button", __assign({ ref: ref, className: classnames('tc-button', SizesRecord$1[size], ColorsRecord[color], VariationsRecord[variation], (_b = {
                '--transparent': variation === 'outline' && !disabled
            },
            _b["text-".concat(color, "-base")] = variation === 'outline' && !disabled,
            _b), classNames), disabled: disabled, onClick: onClick }, rest),
        children,
        loading && (React__default["default"].createElement("span", { "aria-live": "polite", "aria-busy": "true", className: "ml-1" },
            React__default["default"].createElement(Icon, { icon: "load", spin: true, fillClassName: getIconClassNames() })))));
});

exports.Button = Button;
exports.Icon = Icon;
//# sourceMappingURL=index.cjs.js.map
