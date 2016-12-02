"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInsertComment(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M17 3c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11.5l3.5 3V3zm-4 8H5V9h8v2zm0-3H5V6h8v2z" })
  );
}

module.exports = IconInsertComment;