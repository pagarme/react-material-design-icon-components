"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEditLocation(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 4c-7.72 0-14 6.28-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.72-6.28-14-14-14zm-3.12 20H18v-2.88l6.7-6.68 2.86 2.86-6.68 6.7zm8.9-8.9l-1.4 1.4-2.88-2.88 1.4-1.4c.3-.3.78-.3 1.08 0l1.8 1.8c.3.3.3.78 0 1.08z" })
  );
}

module.exports = IconEditLocation;