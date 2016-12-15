"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMotorcycle(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38.88 18.06L30.82 10H22v4h7.18l4 4H10C4.4 18 0 22.4 0 28s4.4 10 10 10c4.92 0 8.9-3.38 9.8-8h3.3l5.54-5.54C28.22 25.54 28 26.74 28 28c0 5.6 4.4 10 10 10s10-4.4 10-10c0-5.3-3.94-9.54-9.12-9.94zM15.64 30c-.84 2.3-3.08 4-5.64 4-3.26 0-6-2.74-6-6s2.74-6 6-6c2.56 0 4.8 1.7 5.64 4H10v4h5.64zM38 34c-3.32 0-6-2.68-6-6s2.68-6 6-6 6 2.68 6 6-2.68 6-6 6z" })
  );
}

module.exports = IconMotorcycle;