"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderVertical(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M6 18h4v-4H6v4zm0-8h4V6H6v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4H6v4zm0 16h4v-4H6v4zm0-8h4v-4H6v4zm8-24h4V6h-4v4zm24 24h4v-4h-4v4zm-16 8h4V6h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4V6h-4zm0 12h4v-4h-4v4zm-8-8h4V6h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z" })
  );
}

module.exports = IconBorderVertical;