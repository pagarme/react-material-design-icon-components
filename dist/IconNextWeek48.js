"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNextWeek(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { fill: "#010101", d: "M40 14h-8v-4c0-1.1-.44-2.1-1.18-2.82C30.1 6.44 29.1 6 28 6h-8c-2.2 0-4 1.8-4 4v4H8c-2.2 0-4 1.8-4 4v22c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4zm-20-4h8v4h-8v-4zm2 27l-2-2 6-6-6-6 2-2 8 8-8 8z" })
  );
}

module.exports = IconNextWeek;