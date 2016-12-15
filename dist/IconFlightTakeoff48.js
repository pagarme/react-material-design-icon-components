"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlightTakeoff(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M5 38h38v4H5zm39.14-18.73c-.43-1.6-2.07-2.55-3.67-2.12L29.84 20 16.04 7.13l-3.86 1.04 8.28 14.35-9.94 2.66-3.93-3.09-2.9.78 3.64 6.31 1.53 2.65 3.21-.86 10.63-2.85 8.69-2.33 10.63-2.85c1.6-.43 2.55-2.07 2.12-3.67z" })
  );
}

module.exports = IconFlightTakeoff;