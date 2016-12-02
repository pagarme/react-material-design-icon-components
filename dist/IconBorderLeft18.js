"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderLeft(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M8 10h2V8H8v2zm0-3h2V5H8v2zm0 6h2v-2H8v2zm0 3h2v-2H8v2zm-6 0h2V2H2v14zm3 0h2v-2H5v2zM5 4h2V2H5v2zm0 6h2V8H5v2zm9 6h2v-2h-2v2zm0-6h2V8h-2v2zm0 3h2v-2h-2v2zm0-6h2V5h-2v2zM8 4h2V2H8v2zm6-2v2h2V2h-2zm-3 14h2v-2h-2v2zm0-6h2V8h-2v2zm0-6h2V2h-2v2z" })
  );
}

module.exports = IconBorderLeft;