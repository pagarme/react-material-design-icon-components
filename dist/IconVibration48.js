"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVibration(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M0 30h4V18H0v12zm6 4h4V14H6v20zm38-16v12h4V18h-4zm-6 16h4V14h-4v20zM33 6H15c-1.66 0-3 1.34-3 3v30c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3zm-1 32H16V10h16v28z" })
  );
}

module.exports = IconVibration;