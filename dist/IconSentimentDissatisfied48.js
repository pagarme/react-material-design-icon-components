"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSentimentDissatisfied(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M31 22c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm6.98-18C12.94 4 4 12.96 4 24s8.94 20 19.98 20C35.04 44 44 35.04 44 24S35.04 4 23.98 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm0-12c-4.66 0-8.64 2.91-10.24 7h3.35c1.39-2.38 3.94-4 6.89-4s5.5 1.62 6.89 4h3.35c-1.6-4.09-5.58-7-10.24-7z" })
  );
}

module.exports = IconSentimentDissatisfied;