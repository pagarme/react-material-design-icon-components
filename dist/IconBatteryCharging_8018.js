"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBatteryCharging_80(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { fillOpacity: ".3", d: "M12 3h-1.5V1.5h-3V3H6c-.55 0-1 .45-1 1v2.5h3.5l1-2v2H13V4c0-.55-.45-1-1-1z" }),
    _react2.default.createElement("path", { d: "M9.5 8.5h2l-3 6v-4h-2l2-4H5V15c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V6.5H9.5v2z" })
  );
}

module.exports = IconBatteryCharging_80;