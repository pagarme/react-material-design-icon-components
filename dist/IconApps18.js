"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconApps(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M2 10h3V7H2v3zm0-5h3V2H2v3zm0 10h3v-3H2v3zm5 0h3v-3H7v3zm5-5h3V7h-3v3zm-5 0h3V7H7v3zm5 5h3v-3h-3v3zm0-13v3h3V2h-3zM7 5h3V2H7v3z" })
  );
}

module.exports = IconApps;