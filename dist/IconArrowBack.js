const React = require('react')

const icons = {
  "18": require('./IconArrowBack18.js'),
  "24": require('./IconArrowBack24.js'),
  "36": require('./IconArrowBack36.js'),
  "48": require('./IconArrowBack48.js'),
}

module.exports = function IconArrowBack (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

