"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconContentCut(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M19.28 15.28c.45-1 .72-2.11.72-3.28 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c1.17 0 2.28-.27 3.28-.72L20 24l-4.72 4.72c-1-.45-2.11-.72-3.28-.72-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8c0-1.17-.27-2.28-.72-3.28L24 28l14 14h6v-2L19.28 15.28zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 24c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm12-15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM38 6L26 18l4 4L44 8V6z" })
  );
}

module.exports = IconContentCut;