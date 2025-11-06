import { BoothMate, Notification } from 'boothmate';
import 'dotenv/config';

const client = new BoothMate({
  sessionToken: process.env.SESSION_TOKEN!,
});

// すべてのサンプルにおいて，変数の型は省略可能です。必要に応じて指定してください。

(async () => {
  // 最新の通知(最大10件)の取得
  const notifications: Notification[] = await client.notification.list();

  // 未読の通知数の取得
  const unreadCount = await client.notification.getUnreadCount();
})();
