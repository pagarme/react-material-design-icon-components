"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMailOutline(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: "48", height: "48" }, props, { viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H8V16l16 10 16-10v20zM24 22L8 12h32L24 22z" })
  );
}

module.exports = IconMailOutline;