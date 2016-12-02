"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMultilineChart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M44 13.84l-2.82-2.82-5.71 6.41C31.36 12.81 25.66 10 19.22 10 13.44 10 8.14 12.32 4 16l2.84 2.84c3.4-2.98 7.7-4.84 12.38-4.84 5.48 0 10.18 2.51 13.54 6.49L27 26.96l-8-8L4 33.98l3 3 12-12.02 8 8 8.09-9.1c1.5 2.7 2.5 5.79 2.89 9.1H42c-.44-4.61-1.89-8.78-4.09-12.27L44 13.84z" })
  );
}

module.exports = IconMultilineChart;