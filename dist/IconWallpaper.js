const React = require('react')

const icons = {
  "18": require('./IconWallpaper18.js'),
  "24": require('./IconWallpaper24.js'),
  "48": require('./IconWallpaper48.js'),
}

module.exports = function IconWallpaper (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

