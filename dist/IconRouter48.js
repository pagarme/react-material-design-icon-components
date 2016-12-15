"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRouter(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40.33 11.81L42 10.13C39.24 7.38 35.62 6 32 6s-7.24 1.39-10 4.13l1.66 1.66C25.97 9.5 28.98 8.35 32 8.35s6.03 1.16 8.33 3.46zm-1.66 1.52c-1.84-1.84-4.25-2.76-6.67-2.76s-4.83.92-6.67 2.76l1.66 1.66c1.39-1.37 3.19-2.06 5.01-2.06 1.81 0 3.62.69 4.99 2.07l1.68-1.67zM38 26h-4v-8h-4v8H10c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4zM16 36h-4v-4h4v4zm7 0h-4v-4h4v4zm7 0h-4v-4h4v4z" })
  );
}

module.exports = IconRouter;