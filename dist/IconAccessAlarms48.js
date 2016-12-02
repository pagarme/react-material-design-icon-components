"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAccessAlarms(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M44 11.5l-9.2-7.7-2.6 3.1 9.2 7.7 2.6-3.1zM15.7 6.8l-2.6-3.1L4 11.5l2.6 3.1 9.1-7.8zM25 16h-3v12l9.5 5.7 1.5-2.5-8-4.7V16zm-1-8C14 8 6 16.1 6 26s8 18 18 18c9.9 0 18-8.1 18-18S33.9 8 24 8zm0 32c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14c0 7.8-6.3 14-14 14z" })
  );
}

module.exports = IconAccessAlarms;