"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSupervisorAccount(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M33 24c2.76 0 4.98-2.24 4.98-5s-2.22-5-4.98-5c-2.76 0-5 2.24-5 5s2.24 5 5 5zm-15-2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm15 6c-3.67 0-11 1.84-11 5.5V38h22v-4.5c0-3.66-7.33-5.5-11-5.5zm-15-2c-4.67 0-14 2.34-14 7v5h14v-4.5c0-1.7.67-4.67 4.74-6.94C21 26.19 19.31 26 18 26z" })
  );
}

module.exports = IconSupervisorAccount;