"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVoicemail(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M37 12c-6.08 0-11 4.92-11 11 0 2.66.94 5.1 2.51 7h-9.03c1.57-1.9 2.51-4.34 2.51-7 0-6.08-4.92-11-11-11S0 16.92 0 23s4.92 11 11 11h26c6.08 0 11-4.92 11-11s-4.92-11-11-11zM11 30c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm26 0c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })
  );
}

module.exports = IconVoicemail;