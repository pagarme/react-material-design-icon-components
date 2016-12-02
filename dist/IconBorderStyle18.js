"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderStyle(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M11 16h2v-2h-2v2zm3 0h2v-2h-2v2zm-9 0h2v-2H5v2zm3 0h2v-2H8v2zm6-3h2v-2h-2v2zm0-3h2V8h-2v2zM2 2v14h2V4h12V2H2zm12 5h2V5h-2v2z" })
  );
}

module.exports = IconBorderStyle;