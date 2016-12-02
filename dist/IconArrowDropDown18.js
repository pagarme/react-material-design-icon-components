"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowDropDown(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M5 8l4 4 4-4z" })
  );
}

module.exports = IconArrowDropDown;