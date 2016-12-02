"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTheaters(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M36 6v4h-4V6H16v4h-4V6H8v36h4v-4h4v4h16v-4h4v4h4V6h-4zM16 34h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 16h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4z" })
  );
}

module.exports = IconTheaters;