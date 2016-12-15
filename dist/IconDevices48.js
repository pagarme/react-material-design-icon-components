"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDevices(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M8 12h36V8H8c-2.21 0-4 1.79-4 4v22H0v6h28v-6H8V12zm38 4H34c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm-2 18h-8V20h8v14z" })
  );
}

module.exports = IconDevices;