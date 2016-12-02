"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDirectionsCar(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M37.84 12.02C37.43 10.84 36.31 10 35 10H13c-1.31 0-2.43.84-2.84 2.02L6 24v16c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h24v2c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2V24l-4.16-11.98zM13 32c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 22l3-9h22l3 9H10z" })
  );
}

module.exports = IconDirectionsCar;