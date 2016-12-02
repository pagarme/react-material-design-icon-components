"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLeakAdd(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M12 6H6v6c3.31 0 6-2.69 6-6zm16 0h-4c0 9.94-8.06 18-18 18v4c12.15 0 22-9.85 22-22zm-8 0h-4c0 5.52-4.48 10-10 10v4c7.73 0 14-6.27 14-14zm0 36h4c0-9.94 8.06-18 18-18v-4c-12.15 0-22 9.85-22 22zm16 0h6v-6c-3.31 0-6 2.69-6 6zm-8 0h4c0-5.52 4.48-10 10-10v-4c-7.73 0-14 6.27-14 14z" })
  );
}

module.exports = IconLeakAdd;