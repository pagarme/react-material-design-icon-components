"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPageview(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M23 18c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-6.41 28.41l-5.81-5.81c-1.39.88-3.02 1.4-4.78 1.4-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9c0 1.76-.52 3.39-1.4 4.77l5.82 5.8-2.83 2.84z" })
  );
}

module.exports = IconPageview;