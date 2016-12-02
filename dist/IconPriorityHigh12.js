"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPriorityHigh(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "12", height: "12", viewBox: "0 0 12 12" }),
    _react2.default.createElement("circle", { cx: "6", cy: "10", r: "1" }),
    _react2.default.createElement("path", { d: "M5 2h2v6H5z" })
  );
}

module.exports = IconPriorityHigh;