"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRemoveShoppingCart(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M45.46 45.46L5.54 5.54 4 4 2.54 2.54 0 5.08l8.78 8.78 4.42 9.32-2.7 4.9c-.32.56-.5 1.22-.5 1.92 0 2.2 1.8 4 4 4h14.92l2.76 2.76c-1 .73-1.66 1.91-1.66 3.24 0 2.2 1.78 4 3.98 4 1.33 0 2.51-.67 3.24-1.68L42.92 48l2.54-2.54zM14.84 30c-.28 0-.5-.22-.5-.5l.06-.24L16.2 26h4.72l4 4H14.84zm16.26-4c1.5 0 2.82-.82 3.5-2.06l7.16-12.98c.16-.28.24-.62.24-.96 0-1.1-.9-2-2-2H13.08l18 18h.02zM14 36c-2.2 0-3.98 1.8-3.98 4s1.78 4 3.98 4 4-1.8 4-4-1.8-4-4-4z" })
  );
}

module.exports = IconRemoveShoppingCart;