"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPieChartOutlined(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm2 4.13c7.21.9 12.97 6.66 13.87 13.87H26V8.13zM8 24c0-8.12 6.13-14.88 14-15.87v31.74C14.13 38.88 8 32.12 8 24zm18 15.87V26h13.87c-.9 7.21-6.66 12.97-13.87 13.87z" })
  );
}

module.exports = IconPieChartOutlined;