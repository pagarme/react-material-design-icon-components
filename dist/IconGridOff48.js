"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGridOff(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M16 8v2.91l4 4V8h8v8h-6.91l4 4H28v2.91l4 4V20h8v8h-6.91l4 4H40v2.91l4 4V8c0-2.21-1.79-4-4-4H9.09l4 4H16zm16 0h8v8h-8V8zM2.55 2.55L0 5.09l4 4V40c0 2.21 1.79 4 4 4h30.91l4 4 2.54-2.55-42.9-42.9zM20 25.09L22.91 28H20v-2.91zm-12-12L10.91 16H8v-2.91zM16 40H8v-8h8v8zm0-12H8v-8h6.91L16 21.09V28zm12 12h-8v-8h6.91L28 33.09V40zm4 0v-2.91L34.91 40H32z" })
  );
}

module.exports = IconGridOff;