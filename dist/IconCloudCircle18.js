"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCloudCircle(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 11H6c-1.38 0-2.5-1.12-2.5-2.5S4.62 7 6 7h.18C6.6 5.84 7.7 5 9 5c1.66 0 3 1.34 3 3h.5c1.1 0 2 .9 2 2s-.9 2-2 2z" })
  );
}

module.exports = IconCloudCircle;