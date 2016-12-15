"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMemory(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M30 18H18v12h12V18zm-4 8h-4v-4h4v4zm16-4v-4h-4v-4c0-2.21-1.79-4-4-4h-4V6h-4v4h-4V6h-4v4h-4c-2.21 0-4 1.79-4 4v4H6v4h4v4H6v4h4v4c0 2.21 1.79 4 4 4h4v4h4v-4h4v4h4v-4h4c2.21 0 4-1.79 4-4v-4h4v-4h-4v-4h4zm-8 12H14V14h20v20z" })
  );
}

module.exports = IconMemory;