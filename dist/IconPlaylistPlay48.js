"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPlaylistPlay(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "-12 -12 48 48", enableBackground: "new -12 -12 48 48" }),
    _react2.default.createElement("path", { d: "M26 6H-8v4h34V6zm0-8H-8v4h34v-4zM-8 18h26v-4H-8v4zm30-4v12l10-6-10-6z" })
  );
}

module.exports = IconPlaylistPlay;