"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOpacity(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M35.32 15.99L24 4.69l-11.32 11.3C9.56 19.11 8 23.27 8 27.27s1.56 8.22 4.68 11.34 7.22 4.7 11.32 4.7 8.2-1.58 11.32-4.7S40 31.27 40 27.27s-1.56-8.16-4.68-11.28zM12 28c.02-4 1.24-6.55 3.52-8.81L24 10.53l8.48 8.75C34.76 21.55 35.98 24 36 28H12z" })
  );
}

module.exports = IconOpacity;