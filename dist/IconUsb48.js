"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUsb(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M30 14v8h2v4h-6V10h4l-6-8-6 8h4v16h-6v-4.14c1.41-.73 2.4-2.16 2.4-3.86 0-2.43-1.97-4.4-4.4-4.4-2.43 0-4.4 1.97-4.4 4.4 0 1.7.99 3.13 2.4 3.86V26c0 2.21 1.79 4 4 4h6v6.1c-1.42.73-2.4 2.19-2.4 3.9 0 2.43 1.97 4.4 4.4 4.4 2.43 0 4.4-1.97 4.4-4.4 0-1.71-.98-3.17-2.4-3.9V30h6c2.21 0 4-1.79 4-4v-4h2v-8h-8z" })
  );
}

module.exports = IconUsb;