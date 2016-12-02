"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconComment(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M43.98 8c0-2.21-1.77-4-3.98-4H8C5.79 4 4 5.79 4 8v24c0 2.21 1.79 4 4 4h28l8 8-.02-36zM36 28H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z" })
  );
}

module.exports = IconComment;