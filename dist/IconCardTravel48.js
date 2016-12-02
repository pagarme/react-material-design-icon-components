"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCardTravel(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 12h-6V8c0-2.21-1.79-4-4-4H18c-2.21 0-4 1.79-4 4v4H8c-2.21 0-4 1.79-4 4v22c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zM18 8h12v4H18V8zm22 30H8v-4h32v4zm0-10H8V16h6v4h4v-4h12v4h4v-4h6v12z" })
  );
}

module.exports = IconCardTravel;