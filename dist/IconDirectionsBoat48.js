"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDirectionsBoat(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M40 42c-2.78 0-5.56-.94-8-2.65-4.88 3.42-11.12 3.42-16 0C13.56 41.06 10.78 42 8 42H4v4h4c2.75 0 5.48-.69 8-1.99 5.04 2.59 10.96 2.59 16 0C34.52 45.3 37.25 46 40 46h4v-4h-4zM7.89 38H8c3.2 0 6.05-1.76 8-4 1.95 2.24 4.8 4 8 4s6.05-1.76 8-4c1.96 2.24 4.79 4 8 4h.11l3.79-13.37c.17-.51.12-1.07-.12-1.55-.25-.48-.68-.84-1.2-.99L40 21.24V12c0-2.21-1.79-4-4-4h-6V2H18v6h-6c-2.21 0-4 1.79-4 4v9.24l-2.57.84c-.52.16-.95.51-1.2.99s-.29 1.04-.12 1.55L7.89 38zM12 12h24v7.93L24 16l-12 3.93V12z" })
  );
}

module.exports = IconDirectionsBoat;