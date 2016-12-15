'use strict';

var _icons;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var icons = (_icons = {
  "24": require('./IconRvHookup24.js'),
  "48": require('./IconRvHookup48.js')
}, _defineProperty(_icons, '24', require('./IconRvHookup24.js')), _defineProperty(_icons, '48', require('./IconRvHookup48.js')), _icons);

function IconRvHookup(props) {
  var size = props.size;

  var nearest = Object.keys(icons).reduce(function (prev, curr) {
    return Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev;
  });
  var component = icons[nearest];

  return component(props);
}

IconRvHookup.propTypes = {
  size: _react2.default.PropTypes.oneOf(Object.keys(icons))
};

module.exports = IconRvHookup;