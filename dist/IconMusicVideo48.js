"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMusicVideo(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M46 10c0-2.21-1.79-4-4-4H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10zm-4 28H6V10h36v28zm-26-8c0-3.31 2.69-6 6-6 .71 0 1 .14 2 .37V12h10v4h-6l-.01 14.05C27.96 33.34 25.3 36 22 36c-3.31 0-6-2.69-6-6z" })
  );
}

module.exports = IconMusicVideo;