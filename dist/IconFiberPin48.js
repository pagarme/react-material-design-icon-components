"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFiberPin(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M11 21h4v2h-4zM40 8H8c-2.22 0-3.98 1.78-3.98 4L4 36c0 2.22 1.78 4 4 4h32c2.22 0 4-1.78 4-4V12c0-2.22-1.78-4-4-4zM18 23c0 1.7-1.3 3-3 3h-4v4H8V18h7c1.7 0 3 1.3 3 3v2zm7 7h-3V18h3v12zm15 0h-2.4l-5.1-7v7H30V18h2.5l5 7v-7H40v12z" })
  );
}

module.exports = IconFiberPin;