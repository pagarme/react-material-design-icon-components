"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAllOut(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M32 8l8 8V8zm8 24l-8 8h8zm-24 8l-8-8v8zM8 16l8-8H8zm25.9-1.9c-5.47-5.47-14.33-5.47-19.8 0s-5.47 14.33 0 19.8 14.33 5.47 19.8 0 5.47-14.33 0-19.8zm-2.2 17.6c-4.25 4.25-11.15 4.25-15.4 0s-4.25-11.15 0-15.4 11.15-4.25 15.4 0 4.25 11.15 0 15.4z", fill: "#010101" })
  );
}

module.exports = IconAllOut;