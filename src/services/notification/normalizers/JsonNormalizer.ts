import { Notification, Notifications } from '@/types';
import { BNotification, BNotifications } from '@/types/boothApi';

export class JsonNormalizer {
  private constructor() {}

  static list(notifications: BNotifications): Notifications {
    const notificationsList: Notification[] = [];

    notifications.unread.forEach((notification) => {
      notificationsList.push(this.normalize(notification, false));
    });

    notifications.read.forEach((notification) => {
      notificationsList.push(this.normalize(notification, true));
    });

    return notificationsList;
  }

  private static normalize(notification: BNotification, isRead: boolean): Notification {
    const type = notification.activityType == 'message.create' ? 'message' : 'reaction';
    const { from, name } = notification;

    return {
      type: type,
      date: notification.date,
      from: from,
      name: notification.name,
      content:
        type === 'message' ?
          `${name}${from === 'user' ? 'さん' : ''}よりメッセージが届いています`
        : `${name}${from === 'user' ? 'さん' : ''}がリアクションしました`,
      url: notification.url,
      isRead: isRead,
    };
  }
}
