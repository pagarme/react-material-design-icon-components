"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDonutLarge(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M22 10.16V4C12 5 4 13.62 4 24s8 19 18 20v-6.16c-6-.96-12-6.8-12-13.84s6-12.88 12-13.84zM37.94 22H44c-.94-10-8-17.06-18-18v6.16C32 11.02 37.08 16 37.94 22zM26 37.84V44c10-.94 17.06-8 18-18h-6.06C37.08 32 32 36.98 26 37.84z" })
  );
}

module.exports = IconDonutLarge;