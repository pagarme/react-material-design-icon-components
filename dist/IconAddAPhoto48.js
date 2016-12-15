"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAddAPhoto(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M6 8V2h4v6h6v4h-6v6H6v-6H0V8h6zm6 12v-6h6V8h14l3.66 4H42c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V20h6zm14 18c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10zm-6.4-10c0 3.54 2.86 6.4 6.4 6.4s6.4-2.86 6.4-6.4-2.86-6.4-6.4-6.4-6.4 2.86-6.4 6.4z" })
  );
}

module.exports = IconAddAPhoto;