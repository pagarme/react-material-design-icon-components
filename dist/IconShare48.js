"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconShare(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31 0 3.22 2.61 5.83 5.83 5.83s5.83-2.61 5.83-5.83-2.61-5.83-5.83-5.83z" })
  );
}

module.exports = IconShare;