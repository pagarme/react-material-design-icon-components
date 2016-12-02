"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEvStation(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M39.54 14.46l.03-.03L32.12 7 30 9.12l4.22 4.22C32.34 14.06 31 15.87 31 18c0 2.76 2.24 5 5 5 .71 0 1.39-.15 2-.42V37c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-2.21-1.79-4-4-4h-2V10c0-2.21-1.79-4-4-4H12c-2.21 0-4 1.79-4 4v32h20V27h3v10c0 2.76 2.24 5 5 5s5-2.24 5-5V18c0-1.38-.56-2.63-1.46-3.54zM16 36v-9h-4l8-15v10h4l-8 14zm20-16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" })
  );
}

module.exports = IconEvStation;