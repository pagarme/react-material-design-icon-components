"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatPaint(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M13 3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5h1.5v3H7v8h2V9.5h7V4h-3V3z" })
  );
}

module.exports = IconFormatPaint;