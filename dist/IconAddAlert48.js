"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAddAlert(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M20.02 41.02c0 2.2 1.78 3.98 3.98 3.98s3.98-1.78 3.98-3.98h-7.96zm17.74-8.38V21c0-6.5-4.5-11.94-10.58-13.38V6.18C27.18 4.42 25.76 3 24 3s-3.18 1.42-3.18 3.18v1.44C14.74 9.06 10.24 14.5 10.24 21v11.64L6 36.88V39h36v-2.12l-4.24-4.24zM32 25.01h-6v6h-4v-6h-6V21h6v-6h4v6h6v4.01z" })
  );
}

module.exports = IconAddAlert;