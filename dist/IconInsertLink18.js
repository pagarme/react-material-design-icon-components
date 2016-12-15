"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInsertLink(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M1.9 9c0-1.16.94-2.1 2.1-2.1h4V5H4C1.79 5 0 6.79 0 9s1.79 4 4 4h4v-1.9H4c-1.16 0-2.1-.94-2.1-2.1zM14 5h-4v1.9h4c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1h-4V13h4c2.21 0 4-1.79 4-4s-1.79-4-4-4zm-8 5h6V8H6v2z" })
  );
}

module.exports = IconInsertLink;