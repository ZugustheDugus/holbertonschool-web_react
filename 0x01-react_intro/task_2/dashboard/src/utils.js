function getFullYear() {
  let date = new Date()
  return date.getYear()
}

function getFooterCopy(isIndex) {
  if (isIndex === True) {
    return "Holberton School"
  } else {
    return "Holberton School main dashboard"
  }
}

module.exports = {
  getFullYear,
  getFooterCopy,
}