"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDoNotDisturb(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16 0-3.7 1.27-7.09 3.37-9.8L33.8 36.63C31.09 38.73 27.7 40 24 40zm12.63-6.2L14.2 11.37C16.91 9.27 20.3 8 24 8c8.84 0 16 7.16 16 16 0 3.7-1.27 7.09-3.37 9.8z" })
  );
}

module.exports = IconDoNotDisturb;