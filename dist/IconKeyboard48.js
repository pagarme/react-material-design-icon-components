"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconKeyboard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 10H8c-2.21 0-3.98 1.79-3.98 4L4 34c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm-18 6h4v4h-4v-4zm0 6h4v4h-4v-4zm-6-6h4v4h-4v-4zm0 6h4v4h-4v-4zm-2 4h-4v-4h4v4zm0-6h-4v-4h4v4zm18 14H16v-4h16v4zm0-8h-4v-4h4v4zm0-6h-4v-4h4v4zm6 6h-4v-4h4v4zm0-6h-4v-4h4v4z" })
  );
}

module.exports = IconKeyboard;