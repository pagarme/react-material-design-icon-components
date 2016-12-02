"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnfoldLess(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M5.56 14.44l1.06 1.06L9 13.12l2.38 2.38 1.06-1.06L9 11l-3.44 3.44zm6.88-10.88L11.38 2.5 9 4.88 6.62 2.5 5.56 3.56 9 7l3.44-3.44z" })
  );
}

module.exports = IconUnfoldLess;