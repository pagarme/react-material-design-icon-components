"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBatteryUnknown(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M12 3h-1.5V1.5h-3V3H6c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM9.8 13.8H8.2v-1.6h1.6v1.6zm1.12-4.89s-.32.35-.56.59c-.4.4-.69 1.12-.69 1.5H8.2c0-.69.52-1.44.91-1.83l.78-.79c.23-.23.37-.54.37-.88 0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25H6.5C6.5 6.12 7.62 5 9 5s2.5 1.12 2.5 2.5c0 .55-.22 1.05-.58 1.41z" })
  );
}

module.exports = IconBatteryUnknown;