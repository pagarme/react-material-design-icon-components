"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSignalWifi_1Bar(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { fillOpacity: ".3", d: "M9.01 15.99l8.8-10.96C17.47 4.77 14.08 2 9 2S.53 4.77.19 5.03l8.8 10.96h.02z" }),
    _react2.default.createElement("path", { d: "M5.24 11.31L9 16l3.76-4.68C12.57 11.17 11.14 10 9 10c-2.14 0-3.57 1.17-3.76 1.31z" })
  );
}

module.exports = IconSignalWifi_1Bar;