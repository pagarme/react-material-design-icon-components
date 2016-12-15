"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTimerOff(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38.07 9.1l-2.85 2.85C32.15 9.48 28.24 8 23.99 8c-3.66 0-7.05 1.1-9.89 2.97l2.91 2.91C19.07 12.69 21.45 12 24 12c7.73 0 14 6.27 14 14 0 2.55-.69 4.93-1.88 6.99l2.91 2.91C40.9 33.06 42 29.66 42 26c0-4.25-1.48-8.15-3.95-11.23l2.85-2.85-2.83-2.82zM30 2H18v4h12V2zm-8 16.87l4 4V16h-4v2.87zM6.04 8l-2.55 2.54L9 16.05C7.11 18.9 6 22.32 6 26c0 9.94 8.04 18 17.99 18 3.68 0 7.1-1.11 9.95-3l5 5 2.54-2.55-15.4-15.41L6.04 8zM24 40c-7.73 0-14-6.27-14-14 0-2.57.7-4.97 1.91-7.04l19.13 19.13C28.97 39.3 26.57 40 24 40z" })
  );
}

module.exports = IconTimerOff;