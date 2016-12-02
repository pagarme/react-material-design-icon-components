"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBrush(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M14 28c-3.31 0-6 2.69-6 6 0 2.62-2.31 4-4 4 1.84 2.44 4.99 4 8 4 4.42 0 8-3.58 8-8 0-3.31-2.69-6-6-6zM41.41 9.26l-2.67-2.67c-.78-.78-2.05-.78-2.83 0L18 24.5l5.5 5.5 17.91-17.91c.79-.79.79-2.05 0-2.83z" })
  );
}

module.exports = IconBrush;