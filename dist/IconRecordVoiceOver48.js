"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRecordVoiceOver(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("circle", { cx: "18", cy: "18", r: "8" }),
    _react2.default.createElement("path", { d: "M18 30c-5.34 0-16 2.68-16 8v4h32v-4c0-5.32-10.66-8-16-8zm15.52-19.27l-3.37 3.38c1.68 2.37 1.68 5.41 0 7.78l3.37 3.38c4.04-4.06 4.04-10.15 0-14.54zM40.15 4l-3.26 3.26c5.54 6.05 5.54 15.11-.01 21.47L40.15 32c7.8-7.77 7.8-19.91 0-28z" })
  );
}

module.exports = IconRecordVoiceOver;