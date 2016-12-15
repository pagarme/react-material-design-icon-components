"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSyncDisabled(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M20 12.7V8.52c-1.6.41-3.09 1.07-4.46 1.92l2.93 2.93c.49-.25 1-.49 1.53-.67zM5.73 10.82l4.71 4.71C8.9 17.99 8 20.88 8 24c0 4.42 1.81 8.4 4.71 11.29L8 40h12V28l-4.47 4.47C13.35 30.3 12 27.31 12 24c0-2 .5-3.88 1.37-5.54l16.17 16.17c-.49.26-1 .49-1.53.68v4.17c1.6-.41 3.09-1.07 4.46-1.92l4.72 4.72 2.55-2.55L8.27 8.27l-2.54 2.55zM40 8H28v12l4.47-4.47C34.65 17.7 36 20.69 36 24c0 2-.5 3.88-1.37 5.54l2.93 2.93C39.1 30.01 40 27.12 40 24c0-4.42-1.81-8.4-4.71-11.29L40 8z" })
  );
}

module.exports = IconSyncDisabled;