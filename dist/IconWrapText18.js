"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWrapText(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M16 3H2v2h14V3zM2 15h4v-2H2v2zm11.5-7H2v2h11.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H11v-2l-3 3 3 3v-2h2.5c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8z" })
  );
}

module.exports = IconWrapText;