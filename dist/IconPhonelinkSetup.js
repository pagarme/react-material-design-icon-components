const React = require('react')

const icons = {
  "24": require('./IconPhonelinkSetup24.js'),
}

module.exports = function IconPhonelinkSetup (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

