"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWallpaper(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M8 8h14V4H8C5.79 4 4 5.79 4 8v14h4V8zm12 18l-8 10h24l-6-8-4.06 5.42L20 26zm14-9c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm6-13H26v4h14v14h4V8c0-2.21-1.79-4-4-4zm0 36H26v4h14c2.21 0 4-1.79 4-4V26h-4v14zM8 26H4v14c0 2.21 1.79 4 4 4h14v-4H8V26z" })
  );
}

module.exports = IconWallpaper;