"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlightLand(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M5 38h38v4H5zm14.37-11.46l8.69 2.33 10.63 2.85c1.6.43 3.24-.52 3.67-2.12.43-1.6-.52-3.24-2.12-3.67l-10.63-2.85L24.1 5.04 20.23 4v16.56L10.3 17.9l-1.86-4.64-2.9-.78v10.35l3.21.86 10.62 2.85z" })
  );
}

module.exports = IconFlightLand;