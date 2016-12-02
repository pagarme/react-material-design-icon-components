"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderBottom(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M7 2H5v2h2V2zm3 6H8v2h2V8zm0 3H8v2h2v-2zm3-3h-2v2h2V8zM7 8H5v2h2V8zm6-6h-2v2h2V2zm-3 3H8v2h2V5zm0-3H8v2h2V2zm-6 9H2v2h2v-2zm10 2h2v-2h-2v2zm0-6h2V5h-2v2zm0 3h2V8h-2v2zm0-8v2h2V2h-2zM4 2H2v2h2V2zM2 16h14v-2H2v2zM4 5H2v2h2V5zm0 3H2v2h2V8z" })
  );
}

module.exports = IconBorderBottom;