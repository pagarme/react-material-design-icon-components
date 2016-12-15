"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRestorePage(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M28 4H12C9.8 4 8.02 5.8 8.02 8L8 40c0 2.2 1.78 4 3.98 4H36c2.2 0 4-1.8 4-4V16L28 4zm-4 32c-4.1 0-7.61-2.47-9.16-6h3.42c1.27 1.81 3.36 3 5.73 3 3.87 0 7-3.13 7-7s-3.13-7-7-7c-2.71 0-5.03 1.55-6.19 3.81L21 26h-8v-8l2.6 2.6c1.78-2.76 4.87-4.6 8.4-4.6 5.52 0 10 4.48 10 10s-4.48 10-10 10z" })
  );
}

module.exports = IconRestorePage;