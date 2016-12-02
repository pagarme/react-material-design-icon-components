"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBatteryUnknown(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67c0 1.47 1.19 2.67 2.67 2.67h14.67c1.47 0 2.67-1.19 2.67-2.67V10.67C34 9.19 32.81 8 31.33 8zM25.9 35.9h-3.8v-3.8h3.8v3.8zm2.7-10.52s-.76.84-1.34 1.42c-.97.97-1.66 2.29-1.66 3.2h-3.2c0-1.66.92-3.05 1.86-3.99l1.86-1.89c.54-.54.88-1.29.88-2.12 0-1.66-1.34-3-3-3s-3 1.34-3 3h-3c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.32-.53 2.52-1.4 3.38z" })
  );
}

module.exports = IconBatteryUnknown;