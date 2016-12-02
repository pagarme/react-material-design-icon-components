"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBluetoothDisabled(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M26 11.83l3.76 3.76-3.2 3.2 2.83 2.83 6.03-6.03L24 4.17h-2v10.06l4 4v-6.4zM10.83 8.17L8 11l13.17 13.17L10 35.34l2.83 2.83L22 29v15.17h2l8.59-8.59 4.59 4.59L40 37.34 10.83 8.17zM26 36.51V29l3.76 3.76L26 36.51z" })
  );
}

module.exports = IconBluetoothDisabled;