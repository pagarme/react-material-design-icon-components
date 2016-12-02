"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPortrait(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 24.5c2.48 0 4.5-2.01 4.5-4.5 0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5c0 2.49 2.02 4.5 4.5 4.5zm9 8c0-3-6-4.5-9-4.5s-9 1.5-9 4.5V34h18v-1.5zM38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32H10V10h28v28z" })
  );
}

module.exports = IconPortrait;