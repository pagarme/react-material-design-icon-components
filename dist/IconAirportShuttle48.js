"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAirportShuttle(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M34 10H6c-2.21 0-4 1.79-4 4v18h4c0 3.31 2.69 6 6 6s6-2.69 6-6h11c0 3.31 2.69 6 6 6s6-2.69 6-6h5V22L34 10zM6 22v-8h8v8H6zm6 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm14-13h-8v-8h8v8zm9 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-5-13v-8h2l8 8H30z" })
  );
}

module.exports = IconAirportShuttle;