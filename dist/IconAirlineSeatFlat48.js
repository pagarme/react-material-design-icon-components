"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAirlineSeatFlat(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M44 22v4H18V14h18c4.42 0 8 3.58 8 8zM4 28v4h12v4h16v-4h12v-4H4zm10.29-3.8c2.32-2.37 2.28-6.17-.09-8.48-2.37-2.32-6.17-2.28-8.48.09-2.32 2.37-2.28 6.17.09 8.48 2.36 2.32 6.16 2.28 8.48-.09z" })
  );
}

module.exports = IconAirlineSeatFlat;