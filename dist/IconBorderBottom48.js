"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderBottom(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M18 22h-4v4h4v-4zm8 8h-4v4h4v-4zM18 6h-4v4h4V6zm8 16h-4v4h4v-4zM10 6H6v4h4V6zm16 8h-4v4h4v-4zm8 8h-4v4h4v-4zM26 6h-4v4h4V6zm8 0h-4v4h4V6zm4 20h4v-4h-4v4zm0 8h4v-4h-4v4zM10 14H6v4h4v-4zm28-8v4h4V6h-4zm0 12h4v-4h-4v4zm-28 4H6v4h4v-4zM6 42h36v-4H6v4zm4-12H6v4h4v-4z" })
  );
}

module.exports = IconBorderBottom;