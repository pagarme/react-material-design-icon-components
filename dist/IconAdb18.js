"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAdb(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M4 12c0 2.76 2.24 5 5 5s5-2.24 5-5V9H4v3zm7.95-8.91l1.5-1.5-.59-.59-1.65 1.65c-.67-.34-1.41-.54-2.21-.54s-1.54.2-2.21.54L5.14 1l-.58.59 1.5 1.5C4.81 4 4 5.45 4 7.11V8h10v-.89c0-1.66-.81-3.11-2.05-4.02zM7 6H6V5h1v1zm5 0h-1V5h1v1z" })
  );
}

module.exports = IconAdb;