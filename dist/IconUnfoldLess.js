const React = require('react')

const icons = {
  "18": require('./IconUnfoldLess18.js'),
  "24": require('./IconUnfoldLess24.js'),
  "36": require('./IconUnfoldLess36.js'),
  "48": require('./IconUnfoldLess48.js'),
}

module.exports = function IconUnfoldLess (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

