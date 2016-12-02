"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBugReport(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 16h-5.62c-.9-1.56-2.14-2.91-3.63-3.92L34 8.83 31.17 6l-4.35 4.35c-.9-.22-1.85-.35-2.82-.35-.97 0-1.92.13-2.82.35L16.83 6 14 8.83l3.25 3.25c-1.49 1.01-2.73 2.36-3.63 3.92H8v4h4.18c-.11.65-.18 1.32-.18 2v2H8v4h4v2c0 .68.07 1.35.18 2H8v4h5.62c2.07 3.58 5.94 6 10.38 6s8.31-2.42 10.38-6H40v-4h-4.18c.11-.65.18-1.32.18-2v-2h4v-4h-4v-2c0-.68-.07-1.35-.18-2H40v-4zM28 32h-8v-4h8v4zm0-8h-8v-4h8v4z" })
  );
}

module.exports = IconBugReport;