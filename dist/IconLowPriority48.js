"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLowPriority(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M28 10h16v4H28zm0 11h16v4H28zm0 11h16v4H28zM4 23c0 7.17 5.83 13 13 13h1v4l6-6-6-6v4h-1c-4.96 0-9-4.04-9-9s4.04-9 9-9h7v-4h-7C9.83 10 4 15.83 4 23z" })
  );
}

module.exports = IconLowPriority;