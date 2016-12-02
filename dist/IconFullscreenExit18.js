"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFullscreenExit(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M3 12.5h2.5V15H7v-4H3v1.5zm2.5-7H3V7h4V3H5.5v2.5zM11 15h1.5v-2.5H15V11h-4v4zm1.5-9.5V3H11v4h4V5.5h-2.5z" })
  );
}

module.exports = IconFullscreenExit;