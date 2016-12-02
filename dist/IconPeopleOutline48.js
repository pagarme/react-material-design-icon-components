"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPeopleOutline(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M33 26c-2.41 0-6.15.67-9 2.01-2.85-1.34-6.59-2.01-9-2.01-4.33 0-13 2.17-13 6.5V38h44v-5.5c0-4.33-8.67-6.5-13-6.5zm-8 9H5v-2.5c0-1.07 5.12-3.5 10-3.5s10 2.43 10 3.5V35zm18 0H28v-2.5c0-.91-.4-1.72-1.04-2.44C28.73 29.46 30.89 29 33 29c4.88 0 10 2.43 10 3.5V35zM15 24c3.87 0 7-3.14 7-7s-3.13-7-7-7c-3.86 0-7 3.14-7 7s3.14 7 7 7zm0-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm18 11c3.87 0 7-3.14 7-7s-3.13-7-7-7c-3.86 0-7 3.14-7 7s3.14 7 7 7zm0-11c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" })
  );
}

module.exports = IconPeopleOutline;