"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQueuePlayNext(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42 6H6c-2.22 0-4 1.78-4 4v24c0 2.2 1.78 4 4 4h10v4h16v-4h4v-4H6V10h36v16h4V10c0-2.22-1.8-4-4-4zM26 20v-6h-4v6h-6v4h6v6h4v-6h6v-4h-6zm22 16l-9 9-3-3 6-6-6-6 3-3 9 9z" })
  );
}

module.exports = IconQueuePlayNext;