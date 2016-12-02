"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFiberDvr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M35 21h4v2h-4zM9 21h4v6H9zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM16 27c0 1.7-1.3 3-3 3H6V18h7c1.7 0 3 1.3 3 3v6zm9.24 3h-3l-3.5-12h3l2 6.86 2-6.86h3l-3.5 12zM42 23c0 1.2-.8 2.3-1.8 2.8L42 30h-3l-1.7-4H35v4h-3V18h7c1.7 0 3 1.3 3 3v2z" })
  );
}

module.exports = IconFiberDvr;