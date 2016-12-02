"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTabletAndroid(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M36 0H12C8.68 0 6 2.68 6 6v36c0 3.32 2.68 6 6 6h24c3.32 0 6-2.68 6-6V6c0-3.32-2.68-6-6-6zm-8 44h-8v-2h8v2zm10.5-6h-29V6h29v32z" })
  );
}

module.exports = IconTabletAndroid;