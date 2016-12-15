"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFormatTextdirectionRToL(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M7 7v5h2V2h1v10h2V2h1V1H7C5.34 1 4 2.34 4 4s1.34 3 3 3zM5 18v-2h11v-2H5v-2l-3 3 3 3z" })
  );
}

module.exports = IconFormatTextdirectionRToL;