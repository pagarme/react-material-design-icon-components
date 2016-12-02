"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlipToBack(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M18 14h-4v4h4v-4zm0 8h-4v4h4v-4zm0-16c-2.21 0-4 1.79-4 4h4V6zm8 24h-4v4h4v-4zM38 6v4h4c0-2.21-1.79-4-4-4zM26 6h-4v4h4V6zm-8 28v-4h-4c0 2.21 1.79 4 4 4zm20-8h4v-4h-4v4zm0-8h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zM10 14H6v24c0 2.21 1.79 4 4 4h24v-4H10V14zm20-4h4V6h-4v4zm0 24h4v-4h-4v4z" })
  );
}

module.exports = IconFlipToBack;