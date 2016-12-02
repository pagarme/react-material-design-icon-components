"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVideoCall(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M34 21v-7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-7l8 8V13l-8 8zm-6 5h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z" })
  );
}

module.exports = IconVideoCall;