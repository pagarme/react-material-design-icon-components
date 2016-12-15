"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLinkedCamera(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("circle", { cx: "24", cy: "28", r: "6.4" }),
    _react2.default.createElement("path", { d: "M32 6.66c5.16 0 9.34 4.18 9.34 9.34H44c0-6.62-5.38-12-12-12v2.66M32 12c2.22 0 4 1.78 4 4h2.66c0-3.68-2.98-6.66-6.66-6.66V12" }),
    _react2.default.createElement("path", { d: "M34 18c0-2.22-1.78-4-4-4V8H18l-3.66 4H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V18H34zM24 38c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" })
  );
}

module.exports = IconLinkedCamera;