"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconToll(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M6 24c0-5.22 3.34-9.65 8-11.3V8.52C7.1 10.3 2 16.55 2 24s5.1 13.7 12 15.48V35.3C9.34 33.65 6 29.22 6 24zM30 8c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16S38.84 8 30 8zm0 28c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z" })
  );
}

module.exports = IconToll;