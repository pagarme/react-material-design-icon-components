"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTimeline(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M46 16c0 2.2-1.8 4-4 4-.36 0-.7-.04-1.02-.14l-7.12 7.1c.1.32.14.68.14 1.04 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.36.04-.72.14-1.04l-5.1-5.1c-.32.1-.68.14-1.04.14s-.72-.04-1.04-.14l-9.1 9.12c.1.32.14.66.14 1.02 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.36 0 .7.04 1.02.14l9.12-9.1c-.1-.32-.14-.68-.14-1.04 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .36-.04.72-.14 1.04l5.1 5.1c.32-.1.68-.14 1.04-.14s.72.04 1.04.14l7.1-7.12c-.1-.32-.14-.66-.14-1.02 0-2.2 1.8-4 4-4s4 1.8 4 4z" })
  );
}

module.exports = IconTimeline;