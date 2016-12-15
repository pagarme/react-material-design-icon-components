"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSubway(props) {
  return _react2.default.createElement(
    "svg",
    _extends({}, props, { width: "48", height: "48", viewBox: "0 0 48 48" }),
    _react2.default.createElement("circle", { cx: "31", cy: "32", r: "2" }),
    _react2.default.createElement("circle", { cx: "17", cy: "32", r: "2" }),
    _react2.default.createElement("path", { d: "M14.02 18h20v10h-20zM35.6 5.59C32 4.19 27.72 4 24 4c-3.72 0-8 .19-11.6 1.59C7.06 7.68 4 12.1 4 17.73V44h40V17.73c0-5.63-3.06-10.05-8.4-12.14zm.4 26.16c0 2.9-2.35 5.25-5.25 5.25L33 39.25V40h-3l-3-3h-5.66l-3 3H15v-.75L17.25 37c-2.9 0-5.25-2.35-5.25-5.25V18c0-5.25 6-6 12-6 6.63 0 12 .75 12 6v13.75z" })
  );
}

module.exports = IconSubway;