"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLocalParking(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "24", height: "24", viewBox: "0 0 24 24" }),
    _react2.default.createElement("path", { d: "M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" })
  );
}

module.exports = IconLocalParking;