"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTimelapse(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M32.49 15.51C30.14 13.17 27.07 12 24 12v12l-8.49 8.49c4.69 4.69 12.28 4.69 16.97 0 4.69-4.69 4.69-12.29.01-16.98zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.96 20-20c0-11.05-8.95-20-20-20zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" })
  );
}

module.exports = IconTimelapse;