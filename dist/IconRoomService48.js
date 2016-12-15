"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRoomService(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M4 34h40v4H4zm23.67-18.42c.21-.48.33-1.02.33-1.58 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .56.12 1.1.33 1.58C12.5 17.2 6.54 23.86 6 32h36c-.54-8.14-6.5-14.8-14.33-16.42z" })
  );
}

module.exports = IconRoomService;