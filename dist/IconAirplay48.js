"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAirplay(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42 6H6c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h8v-4H6V10h36v24h-8v4h8c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM12 44h24L24 32z" })
  );
}

module.exports = IconAirplay;