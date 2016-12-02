"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRssFeed(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("circle", { cx: "12.36", cy: "35.64", r: "4.36" }),
    _react2.default.createElement("path", { d: "M8 8.89v5.66c14.06 0 25.46 11.4 25.46 25.46h5.66C39.11 22.82 25.18 8.89 8 8.89zM8 20.2v5.66c7.81 0 14.14 6.34 14.14 14.14h5.66c0-10.93-8.87-19.8-19.8-19.8z" })
  );
}

module.exports = IconRssFeed;