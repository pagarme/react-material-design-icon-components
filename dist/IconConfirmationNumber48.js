"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconConfirmationNumber(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M44 20v-8c0-2.21-1.79-4-4-4H8c-2.21 0-3.98 1.79-3.98 4v8c2.2.01 3.98 1.8 3.98 4 0 2.21-1.79 4-3.99 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-8c-2.21 0-4-1.79-4-4s1.79-4 4-4zM26 35h-4v-4h4v4zm0-9h-4v-4h4v4zm0-9h-4v-4h4v4z" })
  );
}

module.exports = IconConfirmationNumber;