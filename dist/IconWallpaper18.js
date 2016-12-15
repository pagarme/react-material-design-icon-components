"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWallpaper(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M13 6c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-4.71 6.93L6.5 10.79 4 14h10l-3.21-4.29-2.5 3.22zM3 3h5V1H3c-1.1 0-2 .9-2 2v5h2V3zm12 12h-5v2h5c1.1 0 2-.9 2-2v-5h-2v5zM3 10H1v5c0 1.1.9 2 2 2h5v-2H3v-5zm12-9h-5v2h5v5h2V3c0-1.1-.9-2-2-2z" })
  );
}

module.exports = IconWallpaper;