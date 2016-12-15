"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRoundedCorner(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38 38h4v4h-4v-4zm0-4h4v-4h-4v4zM6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm0-8h4V6H6v4zm8 0h4V6h-4v4zm16 32h4v-4h-4v4zm-8 0h4v-4h-4v4zm8 0h4v-4h-4v4zm-16 0h4v-4h-4v4zm-8 0h4v-4H6v4zm36-26c0-5.51-4.49-10-10-10H22v4h10c3.31 0 6 2.69 6 6v10h4V16z" })
  );
}

module.exports = IconRoundedCorner;