"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHdrOff(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M35 30v-4h2.3l1.7 4h3l-1.8-4.2c1.1-.5 1.8-1.5 1.8-2.8v-2c0-1.7-1.3-3-3-3h-7v9.8l2.2 2.2h.8zm0-9h4v2h-4v-2zm-9 0v.8l3 3V21c0-1.7-1.3-3-3-3h-3.8l3 3h.8zm-7-2L4.9 4.9 2.8 7l11 11H13v4H9v-4H6v12h3v-5h4v5h3v-9.8l3 3V30h6.8L41 45.2l2.1-2.1L19 19z" })
  );
}

module.exports = IconHdrOff;