"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRowing(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M17 29l-9 9 3 3 7-7h4l-5-5zM30 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm12 40.02L36 48l-5.98-6.02V39l-14.2-14.18c-.62.1-1.22.14-1.82.14v-4.32c3.32.06 7.22-1.74 9.34-4.08l2.8-3.1c.38-.42.86-.76 1.38-1 .58-.28 1.24-.46 1.92-.46h.06c2.48.02 4.5 2.04 4.5 4.52v11.5c0 1.68-.7 3.22-1.84 4.32L25 25.18v-4.54c-1.26 1.04-2.86 2.04-4.58 2.78L33 36h3l6 6.02z" })
  );
}

module.exports = IconRowing;