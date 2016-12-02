"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAcUnit(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M44 22h-8.34l6.48-6.49-2.83-2.82L30 22h-4v-4l9.31-9.31-2.82-2.83L26 12.34V4h-4v8.34l-6.49-6.48-2.82 2.83L22 18v4h-4l-9.31-9.31-2.83 2.82L12.34 22H4v4h8.34l-6.48 6.49 2.83 2.82L18 26h4v4l-9.31 9.31 2.82 2.83L22 35.66V44h4v-8.34l6.49 6.48 2.82-2.83L26 30v-4h4l9.31 9.31 2.83-2.82L35.66 26H44z" })
  );
}

module.exports = IconAcUnit;