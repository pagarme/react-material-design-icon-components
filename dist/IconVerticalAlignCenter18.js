"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVerticalAlignCenter(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M12.5 3H10V0H8v3H5.5L9 6.5 12.5 3zM3 8v2h12V8H3zm2.5 7H8v3h2v-3h2.5L9 11.5 5.5 15z" })
  );
}

module.exports = IconVerticalAlignCenter;