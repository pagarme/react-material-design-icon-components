"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLoyalty(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42.82 23.16L24.83 5.17C24.11 4.45 23.11 4 22 4H8C5.79 4 4 5.79 4 8v14c0 1.11.45 2.11 1.18 2.83l18 18C23.9 43.55 24.9 44 26 44c1.11 0 2.11-.45 2.83-1.17l14-14C43.55 28.1 44 27.1 44 26c0-1.11-.45-2.11-1.18-2.84zM11 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm23.54 16.54L26 39.08l-8.54-8.54C16.56 29.63 16 28.38 16 27c0-2.76 2.24-5 5-5 1.38 0 2.64.56 3.54 1.47L26 24.93l1.46-1.46C28.37 22.56 29.62 22 31 22c2.76 0 5 2.24 5 5 0 1.38-.56 2.63-1.46 3.54z" })
  );
}

module.exports = IconLoyalty;