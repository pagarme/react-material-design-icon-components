"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWrapText(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M8 38h12v-4H8v4zm32-28H8v4h32v-4zm-6 12H8v4h26.5c2.21 0 4 1.79 4 4s-1.79 4-4 4H30v-4l-6 6 6 6v-4h4c4.41 0 8-3.59 8-8s-3.59-8-8-8z" })
  );
}

module.exports = IconWrapText;