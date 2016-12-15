"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconApps(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "36", height: "36", viewBox: "0 0 36 36" }),
    _react2.default.createElement("path", { d: "M6 12h6V6H6v6zm9 18h6v-6h-6v6zm-9 0h6v-6H6v6zm0-9h6v-6H6v6zm9 0h6v-6h-6v6zm9-15v6h6V6h-6zm-9 6h6V6h-6v6zm9 9h6v-6h-6v6zm0 9h6v-6h-6v6z" })
  );
}

module.exports = IconApps;