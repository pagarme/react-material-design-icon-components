const React = require('react')

const icons = {
  "18": require('./IconRefresh18.js'),
  "24": require('./IconRefresh24.js'),
  "36": require('./IconRefresh36.js'),
  "48": require('./IconRefresh48.js'),
}

module.exports = function IconRefresh (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

