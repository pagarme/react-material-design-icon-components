"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPictureAsPdf(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 4H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM23 19c0 1.66-1.34 3-3 3h-2v4h-3V14h5c1.66 0 3 1.34 3 3v2zm10 4c0 1.66-1.34 3-3 3h-5V14h5c1.66 0 3 1.34 3 3v6zm8-6h-3v2h3v3h-3v4h-3V14h6v3zm-23 2h2v-2h-2v2zM8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm20 11h2v-6h-2v6z" })
  );
}

module.exports = IconPictureAsPdf;