"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNature(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M26 32.24c6.95-.82 12.34-6.72 12.34-13.89 0-7.73-6.27-14-14-14s-14 6.27-14 14c0 6.93 5.04 12.67 11.66 13.79V40H10v4h28v-4H26v-7.76z" })
  );
}

module.exports = IconNature;