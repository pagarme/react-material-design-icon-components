"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconContentPaste(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38 4h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4H10C7.79 4 6 5.79 6 8v32c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM24 4c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm14 36H10V8h4v6h20V8h4v32z" })
  );
}

module.exports = IconContentPaste;