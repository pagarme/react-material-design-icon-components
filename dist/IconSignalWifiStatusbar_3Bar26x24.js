"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSignalWifiStatusbar_3Bar(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "26", height: "24", viewBox: "0 0 26 24" }),
    _react2.default.createElement("path", { d: "M13.01 21.99l9.43-11.75C22.07 9.97 18.44 7 13 7c-5.44 0-9.07 2.97-9.44 3.24l9.43 11.75h.02z" }),
    _react2.default.createElement("path", { fillOpacity: ".3", d: "M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z" })
  );
}

module.exports = IconSignalWifiStatusbar_3Bar;