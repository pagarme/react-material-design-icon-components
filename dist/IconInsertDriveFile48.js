"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInsertDriveFile(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M12 4C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4H12zm14 14V7l11 11H26z" })
  );
}

module.exports = IconInsertDriveFile;