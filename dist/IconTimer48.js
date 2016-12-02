"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTimer(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M30 2H18v4h12V2zm-8 26h4V16h-4v12zm16.05-13.23l2.85-2.85c-.86-1.03-1.8-1.97-2.83-2.83l-2.85 2.85C32.15 9.48 28.24 8 23.99 8 14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26c0-4.25-1.48-8.15-3.95-11.23zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z" })
  );
}

module.exports = IconTimer;