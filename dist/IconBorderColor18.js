"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderColor(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { fillOpacity: ".36", d: "M0 15h18v3H0z" }),
    _react2.default.createElement("path", { d: "M13.38 5.5L10.5 2.62 3 10.12V13h2.88l7.5-7.5zm2.47-2.48c.2-.2.2-.51 0-.71L13.68.14c-.2-.2-.51-.2-.71 0L11.62 1.5l2.88 2.88 1.35-1.36z" })
  );
}

module.exports = IconBorderColor;