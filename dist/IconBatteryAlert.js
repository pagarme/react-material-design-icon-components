'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  "18": require('./IconBatteryAlert18.js'),
  "24": require('./IconBatteryAlert24.js'),
  "48": require('./IconBatteryAlert48.js')
};

function IconBatteryAlert(props) {
  var size = props.size;

  var nearest = Object.keys(icons).reduce(function (prev, curr) {
    return Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev;
  });
  var component = icons[nearest];

  return component(props);
}

IconBatteryAlert.propTypes = {
  size: _react2.default.PropTypes.oneOf(Object.keys(icons))
};

module.exports = IconBatteryAlert;