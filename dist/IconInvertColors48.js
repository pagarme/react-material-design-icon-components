"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInvertColors(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M35.31 15.86L24 4.54 12.69 15.86c-6.25 6.25-6.25 16.38 0 22.63 3.12 3.12 7.22 4.69 11.31 4.69s8.19-1.56 11.31-4.69c6.25-6.25 6.25-16.38 0-22.63zM24 39.17c-3.21 0-6.22-1.25-8.48-3.52-2.27-2.26-3.52-5.27-3.52-8.48s1.25-6.22 3.52-8.49L24 10.2v28.97z" })
  );
}

module.exports = IconInvertColors;