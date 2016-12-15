"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPages(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M5.5 10H2v5c0 .55.45 1 1 1h5v-3.5l-3.5 1 1-3.5zM2 3v5h3.5l-1-3.5 3.5 1V2H3c-.55 0-1 .45-1 1zm13-1h-5v3.5l3.5-1-1 3.5H16V3c0-.55-.45-1-1-1zm-1.5 11.5l-3.5-1V16h5c.55 0 1-.45 1-1v-5h-3.5l1 3.5z" })
  );
}

module.exports = IconPages;