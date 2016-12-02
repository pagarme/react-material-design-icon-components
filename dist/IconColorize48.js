"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconColorize(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M41.41 11.26l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-6.25 6.25L23.83 9 21 11.83l2.84 2.84L6 32.5V42h9.5l17.84-17.84L36.17 27 39 24.17l-3.84-3.84 6.25-6.25c.79-.78.79-2.04 0-2.82zM13.84 38L10 34.16l16.13-16.13 3.84 3.84L13.84 38z" })
  );
}

module.exports = IconColorize;