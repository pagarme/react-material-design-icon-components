"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatColorFill(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { fillOpacity: ".36", d: "M0 15h18v3H0z" }),
    _react2.default.createElement("path", { d: "M14.5 8.87S13 10.49 13 11.49c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.99-1.5-2.62-1.5-2.62zm-1.79-2.08L5.91 0 4.85 1.06l1.59 1.59-4.15 4.14c-.39.39-.39 1.02 0 1.41l4.5 4.5c.2.2.45.3.71.3s.51-.1.71-.29l4.5-4.5c.39-.39.39-1.03 0-1.42zM4.21 7L7.5 3.71 10.79 7H4.21z" })
  );
}

module.exports = IconFormatColorFill;