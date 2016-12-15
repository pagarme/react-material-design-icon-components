"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStarHalf(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { fill: "#010101", d: "M44 18.48l-14.38-1.24L24 4l-5.62 13.26L4 18.48l10.92 9.46L11.64 42 24 34.54 36.36 42 33.1 27.94 44 18.48zM24 30.8V12.2l3.42 8.08 8.76.76-6.64 5.76 2 8.56L24 30.8z" })
  );
}

module.exports = IconStarHalf;