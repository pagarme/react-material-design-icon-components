const React = require('react')

const icons = {
  "18": require('./IconBatteryCharging_8018.js'),
  "24": require('./IconBatteryCharging_8024.js'),
  "48": require('./IconBatteryCharging_8048.js'),
}

module.exports = function IconBatteryCharging_80 (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

