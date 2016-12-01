const React = require('react')

const icons = {
  "26x24": require('./IconSignalWifiStatusbar_2Bar26x24.js'),
}

module.exports = function IconSignalWifiStatusbar_2Bar (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

