"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCancel(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "36", height: "36", viewBox: "0 0 36 36" }),
    _react2.default.createElement("path", { d: "M18 3C9.71 3 3 9.71 3 18s6.71 15 15 15 15-6.71 15-15S26.29 3 18 3zm7.5 20.38l-2.12 2.12L18 20.12l-5.38 5.38-2.12-2.12L15.88 18l-5.38-5.38 2.12-2.12L18 15.88l5.38-5.38 2.12 2.12L20.12 18l5.38 5.38z" })
  );
}

module.exports = IconCancel;