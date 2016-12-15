"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNoEncryption(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M42 43.56L8.44 10 6 12.44l4.08 4.08C8.85 17.2 8 18.5 8 20v20c0 2.2 1.8 4 4 4h24c.47 0 .91-.09 1.32-.24L39.56 46 42 43.56zM17.8 12c0-3.42 2.78-6.2 6.2-6.2s6.2 2.78 6.2 6.2v4H19.31L40 36.69V20c0-2.2-1.8-4-4-4h-2v-4c0-5.52-4.48-10-10-10-5.11 0-9.28 3.86-9.88 8.81l3.68 3.68V12z" })
  );
}

module.exports = IconNoEncryption;