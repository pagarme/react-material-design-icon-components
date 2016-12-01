const React = require('react')

const icons = {
  "24": require('./IconRvHookup24.js'),
  "48": require('./IconRvHookup48.js'),
  "24": require('./IconRvHookup24.js'),
  "48": require('./IconRvHookup48.js'),
}

module.exports = function IconRvHookup (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

