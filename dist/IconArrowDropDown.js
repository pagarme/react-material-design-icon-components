const React = require('react')

const icons = {
  "18": require('./IconArrowDropDown18.js'),
  "24": require('./IconArrowDropDown24.js'),
  "36": require('./IconArrowDropDown36.js'),
  "48": require('./IconArrowDropDown48.js'),
}

module.exports = function IconArrowDropDown (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

