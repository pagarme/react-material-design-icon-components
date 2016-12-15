"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFolderShared(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M16 4h-6L8 2H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-4.5 2.75c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75-1.75-.78-1.75-1.75.78-1.75 1.75-1.75zM15 14H8v-1.25C8 11.58 10.33 11 11.5 11s3.5.58 3.5 1.75V14z" })
  );
}

module.exports = IconFolderShared;