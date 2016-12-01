const React = require('react')

const icons = {
  "24": require('./IconDragHandle24.js'),
  "48": require('./IconDragHandle48.js'),
}

module.exports = function IconDragHandle (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

