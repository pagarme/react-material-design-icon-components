const React = require('react')

const icons = {
  "18": require('./IconFormatClear18.js'),
  "24": require('./IconFormatClear24.js'),
  "48": require('./IconFormatClear48.js'),
}

module.exports = function IconFormatClear (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

