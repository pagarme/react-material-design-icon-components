"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPower(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M32.02 14H32V6h-4v8h-8V6h-4v8h-.02C14 13.99 12 15.99 12 17.99v10.99L19 36v6h10v-6l7-7.03V17.98c0-1.99-2-3.99-3.98-3.98z" })
  );
}

module.exports = IconPower;