"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatColorText(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { fillOpacity: ".36", d: "M0 15h18v3H0z" }),
    _react2.default.createElement("path", { d: "M10 1H8L3.5 13h2l1.12-3h4.75l1.12 3h2L10 1zM7.38 8L9 3.67 10.62 8H7.38z" })
  );
}

module.exports = IconFormatColorText;