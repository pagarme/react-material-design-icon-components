"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDeveloperMode(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M14 10.17h20v4h4v-8c0-2.21-1.79-3.98-4-3.98l-20-.02c-2.21 0-4 1.79-4 4v8h4v-4zm16.83 23.17L40 24.17 30.83 15 28 17.83l6.34 6.34L28 30.52l2.83 2.82zM20 30.52l-6.34-6.34L20 17.83 17.17 15 8 24.17l9.17 9.17L20 30.52zm14 7.65H14v-4h-4v8c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4v-8h-4v4z" })
  );
}

module.exports = IconDeveloperMode;