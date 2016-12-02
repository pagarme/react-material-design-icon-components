"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPanTool(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M46 11v29c0 4.4-3.6 8-8 8H23.4c-2.16 0-4.2-.86-5.7-2.38L2 29.66s2.52-2.46 2.6-2.5c.44-.38.98-.58 1.58-.58.44 0 .84.12 1.2.32.08.02 8.62 4.92 8.62 4.92V8c0-1.66 1.34-3 3-3s3 1.34 3 3v14h2V3c0-1.66 1.34-3 3-3s3 1.34 3 3v19h2V5c0-1.66 1.34-3 3-3s3 1.34 3 3v17h2V11c0-1.66 1.34-3 3-3s3 1.34 3 3z" })
  );
}

module.exports = IconPanTool;