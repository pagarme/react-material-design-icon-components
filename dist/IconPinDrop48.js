"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPinDrop(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M36 16c0-6.63-5.37-12-12-12S12 9.37 12 16c0 9 12 22 12 22s12-13 12-22zm-16 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zM10 40v4h28v-4H10z" })
  );
}

module.exports = IconPinDrop;