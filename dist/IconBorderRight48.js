"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderRight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M14 42h4v-4h-4v4zM6 10h4V6H6v4zm8 0h4V6h-4v4zm0 16h4v-4h-4v4zM6 42h4v-4H6v4zm16 0h4v-4h-4v4zM6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm16 16h4v-4h-4v4zm8-8h4v-4h-4v4zm8-20v36h4V6h-4zm-8 36h4v-4h-4v4zm0-32h4V6h-4v4zm-8 16h4v-4h-4v4zm0-16h4V6h-4v4zm0 8h4v-4h-4v4z" })
  );
}

module.exports = IconBorderRight;