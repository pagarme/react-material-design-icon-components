"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPhotoFilter(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38.04 20v18H10V10h18V6H10.04c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V20h-4zM34 20l1.88-4.12L40 14l-4.12-1.88L34 8l-1.88 4.12L28 14l4.12 1.88zm-7.5 1.5L24 16l-2.5 5.5L16 24l5.5 2.5L24 32l2.5-5.5L32 24z" })
  );
}

module.exports = IconPhotoFilter;