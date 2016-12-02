"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHighlight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", { d: "M12 28l6 6v10h12V34l6-6V18H12zM22 4h4v6h-4zM7 11.75l2.828-2.828 4.243 4.243-2.82 2.828zm26.923 1.422l4.242-4.242 2.83 2.828L36.75 16z" })
  );
}

module.exports = IconHighlight;