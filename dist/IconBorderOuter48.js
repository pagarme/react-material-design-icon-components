"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderOuter(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M26 14h-4v4h4v-4zm0 8h-4v4h4v-4zm8 0h-4v4h4v-4zM6 6v36h36V6H6zm32 32H10V10h28v28zm-12-8h-4v4h4v-4zm-8-8h-4v4h4v-4z" })
  );
}

module.exports = IconBorderOuter;