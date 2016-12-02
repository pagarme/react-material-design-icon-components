"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconReceipt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M36 34H12v-4h24v4zm0-8H12v-4h24v4zm0-8H12v-4h24v4zM6 44l3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3V4l-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3-3 3-3-3v40z" })
  );
}

module.exports = IconReceipt;