"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHearing(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M34 40c-.57 0-1.13-.12-1.53-.3-1.41-.75-2.43-1.77-3.42-4.77-1.03-3.11-2.94-4.58-4.79-6.01-1.58-1.22-3.22-2.48-4.63-5.05C18.58 21.95 18 19.86 18 18c0-5.61 4.39-10 10-10s10 4.39 10 10h4c0-7.85-6.15-14-14-14s-14 6.15-14 14c0 2.53.76 5.3 2.13 7.8 1.82 3.31 3.97 4.96 5.7 6.3 1.62 1.25 2.79 2.15 3.43 4.09 1.2 3.63 2.75 5.68 5.45 7.1 1.04.47 2.14.71 3.29.71 4.41 0 8-3.59 8-8h-4c0 2.21-1.79 4-4 4zM15.27 5.27l-2.83-2.83C8.46 6.42 6 11.92 6 18s2.46 11.58 6.44 15.56l2.83-2.83C12.01 27.47 10 22.97 10 18s2.01-9.47 5.27-12.73zM23 18c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5z" })
  );
}

module.exports = IconHearing;