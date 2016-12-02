"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSettingsRemote(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M30 18H18c-1.11 0-2 .9-2 2v24c0 1.1.89 2 2 2h12c1.11 0 2-.9 2-2V20c0-1.1-.89-2-2-2zm-6 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-9.9-17.9l2.83 2.83C18.74 13.12 21.24 12 24 12s5.26 1.12 7.07 2.93l2.83-2.83C31.37 9.57 27.87 8 24 8s-7.37 1.57-9.9 4.1zM24 0C17.93 0 12.43 2.46 8.44 6.44l2.83 2.83C14.53 6.01 19.03 4 24 4s9.47 2.01 12.73 5.27l2.83-2.83C35.57 2.46 30.07 0 24 0z" })
  );
}

module.exports = IconSettingsRemote;