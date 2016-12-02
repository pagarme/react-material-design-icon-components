"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMap(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M41 6c-.11 0-.21.01-.31.05L30 10.2 18 6 6.73 9.8c-.42.14-.73.5-.73.96V41c0 .55.45 1 1 1 .11 0 .21-.01.31-.05L18 37.8 30 42l11.28-3.79c.42-.15.72-.51.72-.97V7c0-.55-.45-1-1-1zM30 38l-12-4.21V10l12 4.21V38z" })
  );
}

module.exports = IconMap;