"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWifi(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M2 18l4 4c9.94-9.94 26.06-9.94 36 0l4-4C33.85 5.85 14.15 5.85 2 18zm16 16l6 6 6-6c-3.31-3.31-8.69-3.31-12 0zm-8-8l4 4c5.52-5.52 14.48-5.52 20 0l4-4c-7.73-7.73-20.27-7.73-28 0z" })
  );
}

module.exports = IconWifi;