"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatUnderlined(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M9 13c2.76 0 5-2.24 5-5V1h-2.5v7c0 1.38-1.12 2.5-2.5 2.5S6.5 9.38 6.5 8V1H4v7c0 2.76 2.24 5 5 5zm-6 2v2h12v-2H3z" })
  );
}

module.exports = IconFormatUnderlined;