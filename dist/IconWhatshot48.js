"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWhatshot(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M27 1.34s1.48 5.3 1.48 9.6c0 4.12-2.7 7.47-6.83 7.47s-7.25-3.34-7.25-7.47l.05-.72C10.43 15.03 8 21.23 8 28c0 8.84 7.16 16 16 16s16-7.16 16-16c0-10.79-5.19-20.41-13-26.66zM23.42 38c-3.56 0-6.45-2.81-6.45-6.28 0-3.25 2.09-5.53 5.63-6.24s7.2-2.41 9.23-5.15c.78 2.58 1.19 5.3 1.19 8.07 0 5.29-4.3 9.6-9.6 9.6z" })
  );
}

module.exports = IconWhatshot;