"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowDownward(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "24", height: "24", viewBox: "0 0 24 24" }),
    _react2.default.createElement("path", { fill: "#010101", d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })
  );
}

module.exports = IconArrowDownward;