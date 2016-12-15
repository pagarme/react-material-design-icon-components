'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  "18": require('./IconArrowDropDown18.js'),
  "24": require('./IconArrowDropDown24.js'),
  "36": require('./IconArrowDropDown36.js'),
  "48": require('./IconArrowDropDown48.js')
};

function IconArrowDropDown(props) {
  var size = props.size;

  var nearest = Object.keys(icons).reduce(function (prev, curr) {
    return Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev;
  });
  var component = icons[nearest];

  return component(props);
}

IconArrowDropDown.propTypes = {
  size: _react2.default.PropTypes.oneOf(Object.keys(icons))
};

module.exports = IconArrowDropDown;