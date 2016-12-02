"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNfc(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 4.17H8c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm0 36H8v-32h32v32zm-4-28H26c-2.21 0-4 1.79-4 4v4.55c-1.19.69-2 1.97-2 3.45 0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.48-.81-2.75-2-3.45v-4.55h6v16H16v-16h4v-4h-8v24h24v-24z" })
  );
}

module.exports = IconNfc;