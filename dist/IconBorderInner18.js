"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBorderInner(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M2 16h2v-2H2v2zM4 5H2v2h2V5zm1 11h2v-2H5v2zm8-14h-2v2h2V2zM4 2H2v2h2V2zm3 0H5v2h2V2zM2 13h2v-2H2v2zm9 3h2v-2h-2v2zM10 2H8v6H2v2h6v6h2v-6h6V8h-6V2zm4 0v2h2V2h-2zm0 5h2V5h-2v2zm0 9h2v-2h-2v2zm0-3h2v-2h-2v2z" })
  );
}

module.exports = IconBorderInner;