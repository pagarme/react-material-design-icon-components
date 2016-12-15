"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLooks(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 20c-7.72 0-14 6.28-14 14h4c0-5.51 4.49-10 10-10s10 4.49 10 10h4c0-7.72-6.28-14-14-14zm0-8C11.87 12 2 21.87 2 34h4c0-9.92 8.08-18 18-18s18 8.08 18 18h4c0-12.13-9.87-22-22-22z" })
  );
}

module.exports = IconLooks;