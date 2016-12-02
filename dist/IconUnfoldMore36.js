"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnfoldMore(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "36", height: "36", viewBox: "0 0 36 36" }),
    _react2.default.createElement("path", { d: "M18 9.24L22.76 14l2.12-2.12L18 5l-6.88 6.88L13.24 14 18 9.24zm0 17.52L13.24 22l-2.12 2.12L18 31l6.88-6.88L22.76 22 18 26.76z" })
  );
}

module.exports = IconUnfoldMore;