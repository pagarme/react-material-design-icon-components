"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStreetview(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M25.12 28.66C24.44 29.21 24 30.05 24 31v11h14c2.2 0 4-1.8 4-4V26.05c-1.89-.67-3.91-1.05-6-1.05-4.05 0-7.87 1.4-10.88 3.66z" }),
    _react2.default.createElement("circle", { cx: "36", cy: "12", r: "10" }),
    _react2.default.createElement("path", { d: "M23 12c0-2.17.54-4.2 1.47-6H10c-2.2 0-4 1.8-4 4v28c0 1.1.45 2.1 1.18 2.83L26.81 21.2C24.46 18.84 23 15.59 23 12z" })
  );
}

module.exports = IconStreetview;