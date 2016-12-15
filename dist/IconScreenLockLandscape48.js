"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconScreenLockLandscape(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42 10H6c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm-4 24H10V14h28v20zm-18-2h8c1.11 0 2-.9 2-2v-6c0-1.1-.89-2-2-2v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2c-1.11 0-2 .9-2 2v6c0 1.1.89 2 2 2zm1.6-12c0-1.33 1.07-2.4 2.4-2.4 1.33 0 2.4 1.08 2.4 2.4v2h-4.8v-2z" })
  );
}

module.exports = IconScreenLockLandscape;