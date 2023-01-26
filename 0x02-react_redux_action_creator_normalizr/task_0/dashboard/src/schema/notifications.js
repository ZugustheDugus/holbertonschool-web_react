const notifications = require('../notifications.json');

function getAllNotificationsByUser(userId) {
  return notifications.filter((notification) => notification.author.id === userId)
  .map((notification) => notification.context);
}

module.exports = getAllNotificationsByUser;
