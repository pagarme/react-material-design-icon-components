"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBackspace(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M44 6H14c-1.38 0-2.47.7-3.19 1.76L0 23.99l10.81 16.23C11.53 41.28 12.62 42 14 42h30c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-6 25.17L35.17 34 28 26.83 20.83 34 18 31.17 25.17 24 18 16.83 20.83 14 28 21.17 35.17 14 38 16.83 30.83 24 38 31.17z" })
  );
}

module.exports = IconBackspace;