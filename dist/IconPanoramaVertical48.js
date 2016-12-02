"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPanoramaVertical(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M39.88 42.24c-2.19-5.88-3.29-12.06-3.29-18.24 0-6.18 1.1-12.36 3.29-18.24.08-.22.12-.43.12-.63C40 4.47 39.53 4 38.75 4H9.25C8.47 4.01 8 4.47 8 5.13c0 .19.04.4.12.62 2.19 5.88 3.29 12.06 3.29 18.24 0 6.18-1.1 12.36-3.29 18.24-.08.23-.12.44-.12.64 0 .66.47 1.13 1.25 1.13h29.5c.78 0 1.25-.48 1.25-1.14 0-.19-.04-.4-.12-.62zM13.09 40c1.54-5.19 2.32-10.56 2.32-16 0-5.44-.78-10.8-2.32-16h21.82c-1.54 5.19-2.32 10.56-2.32 16 0 5.44.78 10.8 2.32 16H13.09z" })
  );
}

module.exports = IconPanoramaVertical;