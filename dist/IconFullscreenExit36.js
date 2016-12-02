"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFullscreenExit(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "36", height: "36", viewBox: "0 0 36 36" }),
    _react2.default.createElement("path", { d: "M7 24h5v5h3v-8H7v3zm5-12H7v3h8V7h-3v5zm9 17h3v-5h5v-3h-8v8zm3-17V7h-3v8h8v-3h-5z" })
  );
}

module.exports = IconFullscreenExit;