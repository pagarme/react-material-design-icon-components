"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGroupAdd(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M9 8c1.11 0 2-.9 2-2s-.89-2-2-2c-1.1 0-2 .9-2 2s.9 2 2 2zm4 0c1.11 0 2-.9 2-2s-.89-2-2-2c-.36 0-.69.1-.98.27.3.51.48 1.1.48 1.73s-.18 1.22-.48 1.73c.29.17.63.27.98.27zM9 9.2c-1.67 0-5 .83-5 2.5V13h10v-1.3c0-1.67-3.33-2.5-5-2.5zM5 7H3V5H2v2H0v1h2v2h1V8h2V7zm9.23 2.31c.75.6 1.27 1.38 1.27 2.39V13H18v-1.3c0-1.31-2.07-2.11-3.77-2.39z" })
  );
}

module.exports = IconGroupAdd;