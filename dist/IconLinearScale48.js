"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLinearScale(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M39 19c-2.05 0-3.81 1.23-4.58 3h-5.84c-.77-1.77-2.53-3-4.58-3s-3.81 1.23-4.58 3h-5.84c-.77-1.77-2.53-3-4.58-3-2.77 0-5 2.23-5 5s2.23 5 5 5c2.05 0 3.81-1.23 4.58-3h5.84c.77 1.77 2.53 3 4.58 3s3.81-1.23 4.58-3h5.84c.77 1.77 2.53 3 4.58 3 2.77 0 5-2.23 5-5s-2.23-5-5-5z" })
  );
}

module.exports = IconLinearScale;