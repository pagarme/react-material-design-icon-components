"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStayCurrentLandscape(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M2.02 14L2 34c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4H6c-2.21 0-3.98 1.79-3.98 4zM38 14v20H10V14h28z" })
  );
}

module.exports = IconStayCurrentLandscape;