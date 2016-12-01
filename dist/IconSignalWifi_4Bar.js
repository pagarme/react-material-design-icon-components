const React = require('react')

const icons = {
  "18": require('./IconSignalWifi_4Bar18.js'),
  "24": require('./IconSignalWifi_4Bar24.js'),
  "48": require('./IconSignalWifi_4Bar48.js'),
}

module.exports = function IconSignalWifi_4Bar (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}
