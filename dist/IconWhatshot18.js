"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWhatshot(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M10.19 1.5s.49 1.99.49 3.6c0 1.55-1.01 2.8-2.56 2.8S5.4 6.65 5.4 5.1l.02-.27C3.91 6.64 3 8.96 3 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-4.05-1.88-7.65-4.81-10zM8.91 15c-1.34 0-2.42-1.05-2.42-2.35 0-1.22.78-2.07 2.11-2.34 1.33-.27 2.7-.91 3.46-1.93.29.97.45 1.99.45 3.03 0 1.98-1.62 3.59-3.6 3.59z" })
  );
}

module.exports = IconWhatshot;