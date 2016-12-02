"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExposure(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M30 34v4h4v-4h4v-4h-4v-4h-4v4h-4v4h4zM40 4H8C5.79 4 4 5.79 4 8v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-30 6h12v4H10v-4zm30 30H8L40 8v32z" })
  );
}

module.exports = IconExposure;