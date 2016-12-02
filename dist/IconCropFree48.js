"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCropFree(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M6 10v8h4v-8h8V6h-8c-2.21 0-4 1.79-4 4zm4 20H6v8c0 2.21 1.79 4 4 4h8v-4h-8v-8zm28 8h-8v4h8c2.21 0 4-1.79 4-4v-8h-4v8zm0-32h-8v4h8v8h4v-8c0-2.21-1.79-4-4-4z" })
  );
}

module.exports = IconCropFree;