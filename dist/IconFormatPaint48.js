"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatPaint(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M36 8V6c0-1.1-.9-2-2-2H10c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2v-2h2v8H18v22c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V24h16V8h-6z" })
  );
}

module.exports = IconFormatPaint;