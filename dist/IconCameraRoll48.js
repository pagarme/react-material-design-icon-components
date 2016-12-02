"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCameraRoll(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M28 10c0-2.21-1.79-4-4-4h-2V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2H8c-2.21 0-4 1.79-4 4v30c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4h16V10H28zm-4 26h-4v-4h4v4zm0-18h-4v-4h4v4zm8 18h-4v-4h4v4zm0-18h-4v-4h4v4zm8 18h-4v-4h4v4zm0-18h-4v-4h4v4z" })
  );
}

module.exports = IconCameraRoll;