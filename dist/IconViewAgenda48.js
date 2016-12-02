"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconViewAgenda(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 26H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2zm0-20H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" })
  );
}

module.exports = IconViewAgenda;