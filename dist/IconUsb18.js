"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUsb(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M11 6.5v2h.5V10h-2V5H11L9 2 7 5h1.5v5h-2V8.46c.35-.18.6-.54.6-.96 0-.61-.49-1.1-1.1-1.1-.61 0-1.1.49-1.1 1.1 0 .42.25.78.6.96V10c0 .55.45 1 1 1h2v2.09c-.58.21-1 .76-1 1.41 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.65-.42-1.2-1-1.41V11h2c.55 0 1-.45 1-1V8.5h.5v-2h-2z" })
  );
}

module.exports = IconUsb;