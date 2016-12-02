"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSubscriptions(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 16H8v-4h32v4zM36 4H12v4h24V4zm8 20v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V24c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4zm-12 8l-12-6.53v13.06L32 32z" })
  );
}

module.exports = IconSubscriptions;