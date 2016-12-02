'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  "24": require('./IconFormatShapes24.js'),
  "48": require('./IconFormatShapes48.js')
};

function IconFormatShapes(props) {
  var size = props.size;

  var nearest = Object.keys(icons).reduce(function (prev, curr) {
    return Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev;
  });
  var component = icons[nearest];

  return component(props);
}

IconFormatShapes.propTypes = {
  size: _react2.default.PropTypes.oneOf(Object.keys(icons))
};

module.exports = IconFormatShapes;