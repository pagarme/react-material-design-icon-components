"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDesktopWindows(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42 4H6C3.79 4 2 5.79 2 8v24c0 2.21 1.79 4 4 4h14v4h-4v4h16v-4h-4v-4h14c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H6V8h36v24z" })
  );
}

module.exports = IconDesktopWindows;