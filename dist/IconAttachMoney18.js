"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAttachMoney(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "18", height: "18", viewBox: "0 0 18 18" }),
    _react2.default.createElement("path", { d: "M9.56 8.1c-1.6-.51-2.66-.71-2.66-1.88 0-.83.72-1.62 2.1-1.62 1.59 0 2.1.88 2.1 1.94H13c0-1.79-1.17-3.09-3-3.44V1H8v2.11c-1.58.32-3 1.37-3 3.12 0 2.25 1.78 2.8 4 3.52 1.88.61 2.25 1.04 2.25 2.09 0 .9-.67 1.56-2.25 1.56-1.2 0-2.25-.84-2.25-2.06h-2c0 1.88 1.38 3.2 3.25 3.56V17h2v-2.07c2.04-.29 3.2-1.49 3.2-3.1 0-1.87-.94-2.87-3.64-3.73z" })
  );
}

module.exports = IconAttachMoney;