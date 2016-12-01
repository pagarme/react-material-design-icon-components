const React = require('react')

const icons = {
  "18": require('./IconPersonAdd18.js'),
  "24": require('./IconPersonAdd24.js'),
  "48": require('./IconPersonAdd48.js'),
}

module.exports = function IconPersonAdd (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

