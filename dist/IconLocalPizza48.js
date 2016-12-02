"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLocalPizza(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 4c-7.13 0-13.55 3.09-17.98 8L24 44l17.99-31.99C37.56 7.09 31.14 4 24 4zM14 14c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm10 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" })
  );
}

module.exports = IconLocalPizza;