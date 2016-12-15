"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDevicesOther(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: "48", height: "48" }, props, { viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M6 12h36V8H6c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h8v-4H6V12zm20 12h-8v3.56c-1.22 1.1-2 2.67-2 4.44s.78 3.34 2 4.44V40h8v-3.56c1.22-1.1 2-2.67 2-4.44s-.78-3.34-2-4.44V24zm-4 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22-19H32c-1 0-2 1-2 2v20c0 1 1 2 2 2h12c1 0 2-1 2-2V18c0-1-1-2-2-2zm-2 20h-8V20h8v16z" })
  );
}

module.exports = IconDevicesOther;