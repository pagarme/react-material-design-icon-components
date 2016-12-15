"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRedo(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M36.79 21.2C33.11 17.97 28.29 16 23 16c-9.3 0-17.17 6.06-19.92 14.44L7.81 32c2.1-6.39 8.1-11 15.19-11 3.91 0 7.46 1.44 10.23 3.77L26 32h18V14l-7.21 7.2z" })
  );
}

module.exports = IconRedo;