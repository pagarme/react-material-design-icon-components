"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWidgets(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M10 10v6h6v-6h-6zM2 8h6V2H2v6zm0 8h6v-6H2v6zm8 0h6v-6h-6v6zm7.25-11L13 .75 8.75 5 13 9.25 17.25 5z" })
  );
}

module.exports = IconWidgets;