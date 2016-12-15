"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconControlPointDuplicate(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M32 16h-4v6h-6v4h6v6h4v-6h6v-4h-6zM4 24c0-5.58 3.29-10.39 8.02-12.64V7.05C5.03 9.51 0 16.17 0 24s5.03 14.49 12.02 16.95v-4.31C7.29 34.39 4 29.58 4 24zM30 6c-9.93 0-18 8.07-18 18s8.07 18 18 18 18-8.07 18-18S39.93 6 30 6zm0 32c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14z" })
  );
}

module.exports = IconControlPointDuplicate;