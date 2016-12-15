"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatIndentDecrease(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M22 34h20v-4H22v4zM6 24l8 8V16l-8 8zm0 18h36v-4H6v4zM6 6v4h36V6H6zm16 12h20v-4H22v4zm0 8h20v-4H22v4z" })
  );
}

module.exports = IconFormatIndentDecrease;