"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNotificationsActive(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { fill: "#010101", d: "M15.16 8.16L12.3 5.3C7.51 8.95 4.35 14.59 4.05 21h4c.31-5.3 3.04-9.94 7.11-12.84zM39.95 21h4c-.3-6.41-3.46-12.05-8.25-15.7l-2.85 2.85c4.06 2.91 6.79 7.55 7.1 12.85zM36 22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-5.73 1.36-9 6.49-9 12.64v10l-4 4v2h32v-2l-4-4V22zM24 44c.28 0 .55-.03.81-.08 1.3-.27 2.37-1.17 2.88-2.36.2-.48.31-1 .31-1.56h-8c0 2.21 1.79 4 4 4z" })
  );
}

module.exports = IconNotificationsActive;