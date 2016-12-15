"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDrafts(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M43.98 16c0-1.44-.75-2.69-1.88-3.4L24 2 5.9 12.6C4.77 13.31 4 14.56 4 16v20c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4l-.02-20zM24 26L7.48 15.67 24 6l16.52 9.67L24 26z" })
  );
}

module.exports = IconDrafts;