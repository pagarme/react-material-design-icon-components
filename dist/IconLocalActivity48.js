"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLocalActivity(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 24c0-2.21 1.79-4 4-4v-8c0-2.21-1.79-4-4-4H8c-2.21 0-3.98 1.79-3.98 4l-.01 8C6.22 20.01 8 21.8 8 24c0 2.21-1.79 4-3.99 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-8c-2.21 0-4-1.79-4-4zm-8.84 9.6L24 29l-7.16 4.6L19 25.37l-6.58-5.38 8.49-.5L24 11.6l3.09 7.89 8.49.5L29 25.37l2.16 8.23z" })
  );
}

module.exports = IconLocalActivity;