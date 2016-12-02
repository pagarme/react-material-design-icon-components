"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGavel(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M2 42h24v4H2zm8.49-25.858l5.658-5.657L44.432 38.77l-5.657 5.656zM24.627 2.006L35.94 13.32l-5.656 5.656L18.97 7.663zm-16.97 16.97L18.97 30.29l-5.656 5.657L2 24.633z" })
  );
}

module.exports = IconGavel;