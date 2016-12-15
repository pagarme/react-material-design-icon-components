"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTabUnselected(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M2 18h4v-4H2v4zm0 8h4v-4H2v4zm0-16h4V6c-2.21 0-4 1.79-4 4zm16 32h4v-4h-4v4zM2 34h4v-4H2v4zm4 8v-4H2c0 2.21 1.79 4 4 4zM42 6H26v12h20v-8c0-2.21-1.79-4-4-4zm0 28h4v-4h-4v4zM18 10h4V6h-4v4zm-8 32h4v-4h-4v4zm0-32h4V6h-4v4zm32 32c2.21 0 4-1.79 4-4h-4v4zm0-16h4v-4h-4v4zM26 42h4v-4h-4v4zm8 0h4v-4h-4v4z" })
  );
}

module.exports = IconTabUnselected;