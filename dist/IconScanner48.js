"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconScanner(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { fill: "#fff", d: "M16 34h22v4H16z" }),
    _react2.default.createElement("path", { d: "M39.52 20.3L8.37 9 7 12.76 35.26 23H10c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24c0-1.67-1.03-3.1-2.48-3.7zM14 33h-4v-4h4v4zm24 0H18v-4h20v4z" })
  );
}

module.exports = IconScanner;