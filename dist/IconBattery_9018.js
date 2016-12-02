"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBattery_90(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { fillOpacity: ".3", d: "M13 4c0-.55-.45-1-1-1h-1.5V1.5h-3V3H6c-.55 0-1 .45-1 1v1.5h8V4z" }),
    _react2.default.createElement("path", { d: "M5 5.5V15c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.5H5z" })
  );
}

module.exports = IconBattery_90;