"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlare(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M14 22H2v4h12v-4zm4.34-6.49l-4.24-4.24-2.83 2.83 4.24 4.24 2.83-2.83zM26 2h-4v12h4V2zm10.73 12.1l-2.83-2.83-4.24 4.24 2.83 2.83 4.24-4.24zM34 22v4h12v-4H34zm-10-4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm5.66 14.49l4.24 4.24 2.83-2.83-4.24-4.24-2.83 2.83zM11.27 33.9l2.83 2.83 4.24-4.24-2.83-2.83-4.24 4.24zM22 46h4V34h-4v12z" })
  );
}

module.exports = IconFlare;