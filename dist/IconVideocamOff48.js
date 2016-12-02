"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVideocamOff(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42 13l-8 8v-7c0-1.1-.9-2-2-2H19.64L42 34.36V13zM6.55 4L4 6.55 9.45 12H8c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c.41 0 .77-.15 1.09-.37L39.46 42 42 39.45 6.55 4z" })
  );
}

module.exports = IconVideocamOff;