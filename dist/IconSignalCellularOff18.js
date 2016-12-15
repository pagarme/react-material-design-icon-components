"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSignalCellularOff(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M15.5 1L9.31 7.19l6.19 6.19V1zM3.58 3.37l-.96.96L7.4 9.1 1 15.5h12.8l.25.25 1.5 1.5.95-.95L3.58 3.37z" })
  );
}

module.exports = IconSignalCellularOff;