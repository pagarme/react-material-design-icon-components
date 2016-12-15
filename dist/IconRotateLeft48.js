"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRotateLeft(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M14.22 17.05l-2.83-2.83c-1.8 2.32-2.91 5-3.25 7.78h4.04c.29-1.75.97-3.44 2.04-4.95zM12.18 26H8.14c.34 2.78 1.45 5.46 3.25 7.78l2.83-2.83c-1.07-1.51-1.75-3.2-2.04-4.95zm2.02 10.63c2.32 1.81 5.02 2.88 7.8 3.22v-4.04c-1.75-.29-3.43-.98-4.93-2.05l-2.87 2.87zM26 8.14V2l-9.1 9.1L26 20v-7.82c5.67.95 10 5.88 10 11.82s-4.33 10.87-10 11.82v4.04c7.89-.99 14-7.7 14-15.86S33.89 9.13 26 8.14z" })
  );
}

module.exports = IconRotateLeft;