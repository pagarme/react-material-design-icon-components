const React = require('react')

const icons = {
  "18": require('./IconNetworkWifi18.js'),
  "24": require('./IconNetworkWifi24.js'),
  "48": require('./IconNetworkWifi48.js'),
}

module.exports = function IconNetworkWifi (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

