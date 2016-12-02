"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPersonOutline(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 11.8c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2-4.2-1.88-4.2-4.2 1.88-4.2 4.2-4.2m0 18c5.95 0 12.2 2.91 12.2 4.2v2.2H11.8V34c0-1.29 6.25-4.2 12.2-4.2M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 18c-5.33 0-16 2.67-16 8v6h32v-6c0-5.33-10.67-8-16-8z" })
  );
}

module.exports = IconPersonOutline;