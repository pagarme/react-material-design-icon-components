"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatShapes(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M46 14V2H34v4H14V2H2v12h4v20H2v12h12v-4h20v4h12V34h-4V14h4zM6 6h4v4H6V6zm4 36H6v-4h4v4zm24-4H14v-4h-4V14h4v-4h20v4h4v20h-4v4zm8 4h-4v-4h4v4zm-4-32V6h4v4h-4zM27.47 28H20.5l-1.46 4h-3.25l6.8-18h2.81l6.81 18h-3.26l-1.48-4zm-6.1-2.52h5.22l-2.61-7.66-2.61 7.66z" })
  );
}

module.exports = IconFormatShapes;