"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPhoneLocked(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 31c-2.49 0-4.9-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41c-5.67-2.88-10.29-7.51-13.18-13.17l4.4-4.41c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8c-1.1 0-2 .89-2 2 0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2zm0-23V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v1c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h10c1.11 0 2-.9 2-2v-8c0-1.1-.89-2-2-2zm-1.6 0h-6.8V7c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4v1z" })
  );
}

module.exports = IconPhoneLocked;