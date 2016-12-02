"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExplore(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 21.8c-1.21 0-2.2.99-2.2 2.2s.99 2.2 2.2 2.2c1.22 0 2.2-.99 2.2-2.2s-.98-2.2-2.2-2.2zM24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20s20-8.96 20-20c0-11.05-8.95-20-20-20zm4.38 24.38L12 36l7.62-16.38L36 12l-7.62 16.38z" })
  );
}

module.exports = IconExplore;