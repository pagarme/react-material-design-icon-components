"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderVertical(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M5 16h2v-2H5v2zM2 7h2V5H2v2zm0-3h2V2H2v2zm3 6h2V8H5v2zm0-6h2V2H5v2zM2 16h2v-2H2v2zm0-6h2V8H2v2zm0 3h2v-2H2v2zM14 2v2h2V2h-2zm0 8h2V8h-2v2zm-6 6h2V2H8v14zm6 0h2v-2h-2v2zm0-9h2V5h-2v2zm0 6h2v-2h-2v2zm-3 3h2v-2h-2v2zm0-6h2V8h-2v2zm0-6h2V2h-2v2z" })
  );
}

module.exports = IconBorderVertical;