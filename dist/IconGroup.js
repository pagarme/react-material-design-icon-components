const React = require('react')

const icons = {
  "18": require('./IconGroup18.js'),
  "24": require('./IconGroup24.js'),
  "48": require('./IconGroup48.js'),
}

module.exports = function IconGroup (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

