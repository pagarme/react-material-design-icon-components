"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderOuter(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M10 5H8v2h2V5zm3 3h-2v2h2V8zm-3 0H8v2h2V8zm0 3H8v2h2v-2zM7 8H5v2h2V8zM2 2v14h14V2H2zm12 12H4V4h10v10z" })
  );
}

module.exports = IconBorderOuter;