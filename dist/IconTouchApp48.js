"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTouchApp(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M18 22.48V15c0-2.76 2.24-5 5-5s5 2.24 5 5v7.48c2.41-1.61 4-4.36 4-7.48 0-4.97-4.03-9-9-9s-9 4.03-9 9c0 3.12 1.59 5.87 4 7.48zm19.67 9.26l-9.08-4.52c-.34-.14-.7-.22-1.09-.22H26V15c0-1.66-1.34-3-3-3s-3 1.34-3 3v21.47l-6.85-1.43c-.15-.03-.31-.05-.47-.05-.62 0-1.18.26-1.59.66l-1.58 1.6 9.88 9.88c.55.54 1.3.88 2.12.88H35.1c1.51 0 2.66-1.11 2.87-2.56l1.51-10.54c.02-.14.03-.27.03-.41-.01-1.24-.77-2.31-1.84-2.76z" })
  );
}

module.exports = IconTouchApp;