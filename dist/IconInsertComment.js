const React = require('react')

const icons = {
  "18": require('./IconInsertComment18.js'),
  "24": require('./IconInsertComment24.js'),
  "48": require('./IconInsertComment48.js'),
}

module.exports = function IconInsertComment (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

