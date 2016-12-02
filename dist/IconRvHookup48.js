"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRvHookup(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 34V22c0-2.21-1.79-4-4-4H14v-4l-6 6 6 6v-4h8v6H8v6c0 2.21 1.79 4 4 4h4c0 3.32 2.68 6 6 6s6-2.68 6-6h16v-4h-4zm-18 6c-1.11 0-2-.89-2-2 0-1.11.89-2 2-2s2 .89 2 2c0 1.11-.89 2-2 2zm14-12h-8v-6h8v6zM34 4v4H18v4h16v4l6-6z" })
  );
}

module.exports = IconRvHookup;