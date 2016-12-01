const React = require('react')

const icons = {
  "18": require('./IconFormatBold18.js'),
  "24": require('./IconFormatBold24.js'),
  "48": require('./IconFormatBold48.js'),
}

module.exports = function IconFormatBold (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

