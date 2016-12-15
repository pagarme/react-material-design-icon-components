"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSettingsInputComposite(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M10 4c0-1.1-.89-2-2-2s-2 .9-2 2v8H2v12h12V12h-4V4zm8 28c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H18v4zM2 32c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H2v4zm40-20V4c0-1.1-.89-2-2-2s-2 .9-2 2v8h-4v12h12V12h-4zM26 4c0-1.1-.89-2-2-2s-2 .9-2 2v8h-4v12h12V12h-4V4zm8 28c0 2.61 1.68 4.81 4 5.63V46h4v-8.37c2.32-.83 4-3.02 4-5.63v-4H34v4z" })
  );
}

module.exports = IconSettingsInputComposite;