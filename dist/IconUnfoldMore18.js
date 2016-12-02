"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnfoldMore(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M9 4.12l2.38 2.38 1.06-1.06L9 2 5.56 5.44 6.62 6.5 9 4.12zm0 9.76L6.62 11.5l-1.06 1.06L9 16l3.44-3.44-1.06-1.06L9 13.88z" })
  );
}

module.exports = IconUnfoldMore;