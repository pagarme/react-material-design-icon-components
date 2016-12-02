"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSwapCalls(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M36 8l-8 8h6v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V16c0-4.41-3.59-8-8-8s-8 3.59-8 8v14H4l8 8 8-8h-6V16c0-2.21 1.79-4 4-4s4 1.79 4 4v14c0 4.41 3.59 8 8 8s8-3.59 8-8V16h6l-8-8z" })
  );
}

module.exports = IconSwapCalls;