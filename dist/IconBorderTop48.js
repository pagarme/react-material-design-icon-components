"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderTop(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M14 42h4v-4h-4v4zm0-16h4v-4h-4v4zm8 0h4v-4h-4v4zm0 16h4v-4h-4v4zM6 34h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm0-8h4v-4H6v4zm16 16h4v-4h-4v4zm16-16h4v-4h-4v4zm0 8h4v-4h-4v4zM6 6v4h36V6H6zm32 28h4v-4h-4v4zm-8 8h4v-4h-4v4zm-8-24h4v-4h-4v4zm16 24h4v-4h-4v4zm-8-16h4v-4h-4v4z" })
  );
}

module.exports = IconBorderTop;