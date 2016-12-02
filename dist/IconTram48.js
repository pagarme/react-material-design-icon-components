"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTram(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M38 33.88V17c0-5.59-5.22-6.8-12.01-6.97L27.5 7H34V4H14v3h9.5l-1.52 3.03C15.72 10.22 10 11.47 10 17v16.88c0 2.89 2.37 5.31 5.18 5.95L12 43v1h4.46l4-4H28l4 4h4v-1l-3-3h-.16c3.38 0 5.16-2.75 5.16-6.12zM24 37c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10-9H14V18h20v10z" })
  );
}

module.exports = IconTram;