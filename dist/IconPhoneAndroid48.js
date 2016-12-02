"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPhoneAndroid(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M32 2H16c-3.31 0-6 2.69-6 6v32c0 3.31 2.69 6 6 6h16c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-4 40h-8v-2h8v2zm6.5-6h-21V8h21v28z" })
  );
}

module.exports = IconPhoneAndroid;