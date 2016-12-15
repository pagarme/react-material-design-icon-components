"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatTextdirectionLToR(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M18 20v10h4V8h4v22h4V8h4V4H18c-4.42 0-8 3.58-8 8s3.58 8 8 8zm24 16l-8-8v6H10v4h24v6l8-8z" })
  );
}

module.exports = IconFormatTextdirectionLToR;