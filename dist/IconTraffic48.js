"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTraffic(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 20h-6v-2.28c3.45-.89 6-3.99 6-7.72h-6V8c0-1.1-.89-2-2-2H16c-1.1 0-2 .9-2 2v2H8c0 3.72 2.56 6.83 6 7.72V20H8c0 3.72 2.56 6.83 6 7.72V30H8c0 3.72 2.56 6.83 6 7.72V40c0 1.1.9 2 2 2h16c1.11 0 2-.9 2-2v-2.28c3.45-.89 6-3.99 6-7.72h-6v-2.28c3.45-.89 6-4 6-7.72zM24 38c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" })
  );
}

module.exports = IconTraffic;