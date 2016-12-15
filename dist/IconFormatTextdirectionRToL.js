'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  "18": require('./IconFormatTextdirectionRToL18.js'),
  "24": require('./IconFormatTextdirectionRToL24.js'),
  "48": require('./IconFormatTextdirectionRToL48.js')
};

function IconFormatTextdirectionRToL(props) {
  var size = props.size;

  var nearest = Object.keys(icons).reduce(function (prev, curr) {
    return Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev;
  });
  var component = icons[nearest];

  return component(props);
}

IconFormatTextdirectionRToL.propTypes = {
  size: _react2.default.PropTypes.oneOf(Object.keys(icons))
};

module.exports = IconFormatTextdirectionRToL;