"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPersonOutline(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M9 10c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5zm5.29 4.29H3.71v-.79c.1-.49 2.59-1.79 5.29-1.79s5.19 1.3 5.29 1.79v.79zM9 9c2.22 0 4-1.79 4-4s-1.78-4-4-4C6.79 1 5.01 2.79 5.01 5S6.79 9 9 9zm0-6.29c1.26 0 2.28 1.03 2.28 2.29S10.26 7.29 9 7.29C7.75 7.29 6.72 6.26 6.72 5S7.75 2.71 9 2.71z" })
  );
}

module.exports = IconPersonOutline;