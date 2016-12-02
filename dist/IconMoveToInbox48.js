"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveToInbox(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38 6H9.98c-2.21 0-3.96 1.79-3.96 4L6 38c0 2.21 1.77 4 3.98 4H38c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 24h-8c0 3.31-2.69 6-6 6s-6-2.69-6-6H9.98V10H38v20zm-6-10h-4v-6h-8v6h-4l8 8 8-8z" })
  );
}

module.exports = IconMoveToInbox;