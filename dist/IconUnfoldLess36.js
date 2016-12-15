"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnfoldLess(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "36", height: "36", viewBox: "0 0 36 36" }),
    _react2.default.createElement("path", { d: "M11.12 27.88L13.24 30 18 25.24 22.76 30l2.12-2.12L18 21l-6.88 6.88zM24.88 8.12L22.76 6 18 10.76 13.24 6l-2.12 2.12L18 15l6.88-6.88z" })
  );
}

module.exports = IconUnfoldLess;