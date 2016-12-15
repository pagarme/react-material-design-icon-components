"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBatteryCharging_20(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M22 40v-6h-8v7.33C14 42.8 15.19 44 16.67 44h14.67c1.47 0 2.67-1.19 2.67-2.67V34h-8.8L22 40z" }),
    _react2.default.createElement("path", { fillOpacity: ".3", d: "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V34h8v-5h-4l8-15v11h4l-4.8 9H34V10.67C34 9.19 32.81 8 31.33 8z" })
  );
}

module.exports = IconBatteryCharging_20;