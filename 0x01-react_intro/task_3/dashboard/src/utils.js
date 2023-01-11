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

function getLatestNotification() {
  return (
    <p><strong>Urgent requirement</strong> - complete by EOD</p>
  )
}

module.exports = {
  getFullYear,
  getFooterCopy,
  getLatestNotification,
}