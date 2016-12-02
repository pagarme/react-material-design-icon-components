"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDeveloperBoard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M44 18v-4h-4v-4c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-4h4v-4h-4v-4h4v-4h-4v-4h4zm-8 20H8V10h28v28zM12 26h10v8H12zm12-12h8v6h-8zm-12 0h10v10H12zm12 8h8v12h-8z" })
  );
}

module.exports = IconDeveloperBoard;