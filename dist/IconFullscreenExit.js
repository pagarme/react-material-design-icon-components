const React = require('react')

const icons = {
  "18": require('./IconFullscreenExit18.js'),
  "24": require('./IconFullscreenExit24.js'),
  "36": require('./IconFullscreenExit36.js'),
  "48": require('./IconFullscreenExit48.js'),
}

module.exports = function IconFullscreenExit (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

