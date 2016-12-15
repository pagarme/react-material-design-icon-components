"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSignalWifiStatusbar_1Bar(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "26", height: "24", viewBox: "0 0 26 24" }),
    _react2.default.createElement("path", { d: "M13 21.99l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95L13 21.99z" }),
    _react2.default.createElement("path", { fillOpacity: ".3", d: "M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z" })
  );
}

module.exports = IconSignalWifiStatusbar_1Bar;