"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVerifiedUser(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 2L6 10v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V10L24 2zm-4 32l-8-8 2.83-2.83L20 28.34l13.17-13.17L36 18 20 34z" })
  );
}

module.exports = IconVerifiedUser;