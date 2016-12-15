"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLocalPharmacy(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42 10h-5.29L39 3.71 34.3 2l-2.91 8H6v4l4 12-4 12v4h36v-4l-4-12 4-12v-4zM32 28h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z" })
  );
}

module.exports = IconLocalPharmacy;