"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAdb(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M10 32c0 7.73 6.27 14 14 14s14-6.27 14-14v-8H10v8zM32.25 8.74l4.2-4.2-1.65-1.65-4.61 4.61C28.31 6.57 26.23 6 24 6c-2.23 0-4.31.57-6.19 1.5L13.2 2.89l-1.65 1.65 4.2 4.2C12.28 11.28 10 15.36 10 20v2h28v-2c0-4.64-2.28-8.72-5.75-11.26zM18 18c-1.11 0-2-.9-2-2s.89-2 2-2c1.11 0 2 .9 2 2s-.89 2-2 2zm12 0c-1.11 0-2-.9-2-2s.89-2 2-2c1.11 0 2 .9 2 2s-.89 2-2 2z" })
  );
}

module.exports = IconAdb;