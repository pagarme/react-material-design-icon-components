const React = require('react')

const icons = {
  "18": require('./IconBattery_2018.js'),
  "24": require('./IconBattery_2024.js'),
  "48": require('./IconBattery_2048.js'),
}

module.exports = function IconBattery_20 (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

