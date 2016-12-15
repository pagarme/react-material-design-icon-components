"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCropRotate(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M14.93 42.97C8.4 39.87 3.71 33.52 3 26H0c1.02 12.32 11.32 22 23.9 22 .45 0 .88-.04 1.32-.07L17.6 40.3l-2.67 2.67zM24.1 0c-.45 0-.88.04-1.32.07L30.4 7.7l2.66-2.66C39.6 8.13 44.29 14.48 45 22h3C46.98 9.68 36.68 0 24.1 0zM32 28h4V16c0-2.21-1.79-4-4-4H20v4h12v12zm-16 4V8h-4v4H8v4h4v16c0 2.21 1.79 4 4 4h16v4h4v-4h4v-4H16z" })
  );
}

module.exports = IconCropRotate;