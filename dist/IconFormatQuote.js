const React = require('react')

const icons = {
  "18": require('./IconFormatQuote18.js'),
  "24": require('./IconFormatQuote24.js'),
  "48": require('./IconFormatQuote48.js'),
}

module.exports = function IconFormatQuote (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

