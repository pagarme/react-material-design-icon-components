"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCameraFront(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M20 40H10v4h10v4l6-6-6-6v4zm8 0v4h10v-4H28zm-4-24c2.21 0 4-1.79 4-4s-1.79-4-4-4-3.99 1.79-3.99 4c.01 2.21 1.78 4 3.99 4zM34 0H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM14 4h20v21c0-3.33-6.67-5-10-5s-10 1.67-10 5V4z" })
  );
}

module.exports = IconCameraFront;