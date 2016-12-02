"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTexture(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M39.02 6.15L6.15 39.02c.18.69.53 1.31 1.02 1.8l.01.01c.49.49 1.11.84 1.8 1.02L41.85 8.98c-.37-1.38-1.45-2.46-2.83-2.83zM23.76 6L6 23.76v5.66L29.42 6h-5.66zM10 6c-2.2 0-4 1.8-4 4v4.01L14.01 6H10zm28 36c1.1 0 2.1-.45 2.82-1.17C41.55 40.1 42 39.1 42 38v-4.01L33.99 42H38zm-19.42 0h5.66L42 24.24v-5.66L18.58 42z" })
  );
}

module.exports = IconTexture;