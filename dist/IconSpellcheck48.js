"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSpellcheck(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M24.89 32h4.18L18.86 6h-3.71L4.93 32h4.18l2.25-6h11.29l2.24 6zM12.86 22L17 10.95 21.14 22h-8.28zm30.31 1.17L27 39.34 19.66 32l-2.83 2.83L27 45l19-19-2.83-2.83z" })
  );
}

module.exports = IconSpellcheck;