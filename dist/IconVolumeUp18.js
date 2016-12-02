"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVolumeUp(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M12.79 9c0-1.3-.72-2.42-1.79-3v6c1.06-.58 1.79-1.7 1.79-3zM2 7v4h3l4 4V3L5 7H2zm9-5v1.5c2.32.74 4 2.93 4 5.5s-1.68 4.76-4 5.5V16c3.15-.78 5.5-3.6 5.5-7S14.15 2.78 11 2z" })
  );
}

module.exports = IconVolumeUp;