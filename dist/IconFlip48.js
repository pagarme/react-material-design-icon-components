"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlip(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M30 42h4v-4h-4v4zm8-24h4v-4h-4v4zM6 10v28c0 2.21 1.79 4 4 4h8v-4h-8V10h8V6h-8c-2.21 0-4 1.79-4 4zm32-4v4h4c0-2.21-1.79-4-4-4zM22 46h4V2h-4v44zm16-12h4v-4h-4v4zm-8-24h4V6h-4v4zm8 16h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4z" })
  );
}

module.exports = IconFlip;