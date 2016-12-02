"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M11 44V29H8V18c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4v11h-3v15h-8zm25 0V32h6l-5.09-15.26C36.37 15.1 34.84 14 33.12 14h-.23c-1.72 0-3.25 1.1-3.79 2.74L24 32h6v12h6zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm18 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" })
  );
}

module.exports = IconWc;