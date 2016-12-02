"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStyle(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M5.06 39.31l2.69 1.11V22.37L2.9 34.08c-.84 2.03.13 4.38 2.16 5.23zm39-7.42L34.14 7.96c-.62-1.5-2.08-2.43-3.61-2.46-.53-.01-1.07.09-1.6.3L14.2 11.9c-1.5.62-2.42 2.07-2.46 3.6-.01.54.08 1.08.3 1.61l9.91 23.93c.63 1.52 2.1 2.44 3.66 2.46.52 0 1.04-.09 1.55-.3l14.73-6.1c2.03-.84 3.01-3.18 2.17-5.21zM15.75 17.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 22c0 2.2 1.8 4 4 4h2.91l-6.91-16.68V39.5z" })
  );
}

module.exports = IconStyle;