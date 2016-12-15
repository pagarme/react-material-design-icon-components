"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNotificationsOff(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { fill: "#010101", d: "M40 37.39L15.68 12.3l-5.13-5.29L8 9.55l5.6 5.6.01.01C12.56 17.14 12 19.48 12 22v10l-4 4v2h27.46l4 4L42 39.45l-2-2.06zM24 44c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4zm12-14.64V22c0-6.15-3.27-11.28-9-12.64V8c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36c-.29.07-.57.15-.85.24-.21.07-.41.14-.61.22 0 0-.01 0-.01.01-.01 0-.02.01-.03.01-.46.18-.91.39-1.35.62-.01 0-.02.01-.03.01L36 29.36z" })
  );
}

module.exports = IconNotificationsOff;