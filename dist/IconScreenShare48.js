"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconScreenShare(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 36c2.2 0 3.98-1.8 3.98-4L44 12c0-2.22-1.8-4-4-4H8c-2.22 0-4 1.78-4 4v20c0 2.2 1.78 4 4 4H0v4h48v-4h-8zm-14-7.06v-4.38c-5.56 0-9.22 1.7-12 5.44 1.12-5.34 4.22-10.66 12-11.74V14l8 7.46-8 7.48z" })
  );
}

module.exports = IconScreenShare;