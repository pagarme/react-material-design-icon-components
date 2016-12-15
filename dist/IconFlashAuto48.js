"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlashAuto(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M6 4v24h6v18l14-24h-8l8-18H6zm32 0h-4l-6.4 18h3.8l1.4-4h6.4l1.4 4h3.8L38 4zm-4.3 11.3L36 8l2.3 7.3h-4.6z" })
  );
}

module.exports = IconFlashAuto;