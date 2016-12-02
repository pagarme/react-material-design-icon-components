"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSyncProblem(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M6 24c0 4.42 1.82 8.4 4.71 11.29L6 40h12V28l-4.47 4.47C11.35 30.3 10 27.31 10 24c0-5.22 3.34-9.65 8-11.3V8.52C11.1 10.3 6 16.55 6 24zm16 10h4v-4h-4v4zM42 8H30v12l4.47-4.47C36.65 17.7 38 20.69 38 24c0 5.22-3.34 9.65-8 11.3v4.17C36.9 37.7 42 31.45 42 24c0-4.42-1.82-8.4-4.71-11.29L42 8zM22 26h4V14h-4v12z" })
  );
}

module.exports = IconSyncProblem;