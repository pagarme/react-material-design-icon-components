const React = require('react')

const icons = {
  "12": require('./IconPriorityHigh12.js'),
  "24": require('./IconPriorityHigh24.js'),
  "48": require('./IconPriorityHigh48.js'),
}

module.exports = function IconPriorityHigh (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

