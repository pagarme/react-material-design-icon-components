"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBeenhere(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38 2H10C7.79 2 6.02 3.79 6.02 6L6 31.87c0 1.38.7 2.6 1.76 3.32L23.99 46l16.23-10.81c1.06-.72 1.76-1.94 1.76-3.32L42 6c0-2.21-1.79-4-4-4zM20 32L10 22l2.83-2.83L20 26.34l15.17-15.17L38 14 20 32z" })
  );
}

module.exports = IconBeenhere;