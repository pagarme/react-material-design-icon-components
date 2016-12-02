"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderRight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M2 4h2V2H2v2zm3 0h2V2H5v2zm0 6h2V8H5v2zm0 6h2v-2H5v2zM2 7h2V5H2v2zm0 3h2V8H2v2zm0 6h2v-2H2v2zm0-3h2v-2H2v2zm9-3h2V8h-2v2zm-3 6h2v-2H8v2zm3 0h2v-2h-2v2zm3-14v14h2V2h-2zM8 4h2V2H8v2zm3 0h2V2h-2v2zm-3 9h2v-2H8v2zm0-6h2V5H8v2zm0 3h2V8H8v2z" })
  );
}

module.exports = IconBorderRight;