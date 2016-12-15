"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCached(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38 16l-8 8h6c0 6.63-5.37 12-12 12-2.03 0-3.93-.51-5.61-1.39l-2.92 2.92C17.95 39.08 20.86 40 24 40c8.84 0 16-7.16 16-16h6l-8-8zm-26 8c0-6.63 5.37-12 12-12 2.03 0 3.93.51 5.61 1.39l2.92-2.92C30.05 8.92 27.14 8 24 8 15.16 8 8 15.16 8 24H2l8 8 8-8h-6z" })
  );
}

module.exports = IconCached;