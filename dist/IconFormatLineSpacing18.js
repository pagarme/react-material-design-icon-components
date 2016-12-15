"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatLineSpacing(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M9 15h9v-2H9v2zM9 3v2h9V3H9zM7.5 5L4 1.5.5 5H3v8H.5L4 16.5 7.5 13H5V5h2.5zM9 10h9V8H9v2z" })
  );
}

module.exports = IconFormatLineSpacing;