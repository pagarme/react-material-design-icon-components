"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWeekend(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42 20c-2.21 0-4 1.79-4 4v6H10v-6c0-2.21-1.79-4-4-4s-4 1.79-4 4v10c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V24c0-2.21-1.79-4-4-4zm-6-10H12c-2.2 0-4 1.8-4 4v4.31c2.32.83 4 3.03 4 5.63V28h24v-4.06c0-2.6 1.68-4.8 4-5.63V14c0-2.2-1.8-4-4-4z", fill: "#010101" })
  );
}

module.exports = IconWeekend;