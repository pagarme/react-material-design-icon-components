"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPanoramaHorizontal(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 13.09v21.82c-5.19-1.54-10.56-2.32-16-2.32-5.44 0-10.8.78-16 2.32V13.09c5.19 1.54 10.56 2.32 16 2.32 5.44 0 10.8-.78 16-2.32M42.86 8c-.19 0-.4.04-.62.12-5.88 2.19-12.06 3.29-18.24 3.29-6.18 0-12.36-1.1-18.24-3.29-.22-.08-.43-.12-.63-.12C4.47 8 4 8.47 4 9.25v29.5c.01.78.47 1.25 1.13 1.25.19 0 .4-.04.62-.12 5.88-2.19 12.06-3.29 18.24-3.29 6.18 0 12.36 1.1 18.24 3.29.22.08.43.12.62.12.66 0 1.14-.47 1.13-1.25V9.25C44 8.47 43.52 8 42.86 8z" })
  );
}

module.exports = IconPanoramaHorizontal;