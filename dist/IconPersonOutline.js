const React = require('react')

const icons = {
  "18": require('./IconPersonOutline18.js'),
  "24": require('./IconPersonOutline24.js'),
  "48": require('./IconPersonOutline48.js'),
}

module.exports = function IconPersonOutline (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

