"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAttachment(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M15 5H4C1.8 5 0 6.8 0 9s1.8 4 4 4h10v-1H4c-1.7 0-3-1.3-3-3s1.3-3 3-3h11c1.1 0 2 .9 2 2s-.9 2-2 2H6c-.6 0-1-.4-1-1s.4-1 1-1h8V7H6c-1.1 0-2 .9-2 2s.9 2 2 2h9c1.7 0 3-1.3 3-3s-1.3-3-3-3z" })
  );
}

module.exports = IconAttachment;