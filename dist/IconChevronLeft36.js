"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconChevronLeft(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "36", height: "36", viewBox: "0 0 36 36" }),
    _react2.default.createElement("path", { d: "M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z" })
  );
}

module.exports = IconChevronLeft;