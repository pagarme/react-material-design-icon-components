"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMouse(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M26 2.14V18h14c0-8.16-6.11-14.88-14-15.86zM8 30c0 8.84 7.16 16 16 16s16-7.16 16-16v-8H8v8zM22 2.14C14.11 3.12 8 9.84 8 18h14V2.14z" })
  );
}

module.exports = IconMouse;