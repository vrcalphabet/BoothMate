import { BoothMate } from '@/BoothMate';
import 'dotenv/config';

if (!process.env.SESSION_TOKEN || !process.env.CSRF_TOKEN) {
  throw new Error('.envにSESSION_TOKENとCSRF_TOKENを設定してください');
}

const client = new BoothMate(process.env.SESSION_TOKEN!, process.env.CSRF_TOKEN!, true);

describe('BoothMate.notification', () => {
  describe('BoothMate.notification.list', () => {
    it('連想配列が返るか？', async () => {
      const result = await client.notification.list();
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });
  });
  
  describe('BoothMate.notification.getUnreadCount', () => {
    it('数値が返るか？', async () => {
      const result = await client.notification.getUnreadCount();
      expect(result).toBeDefined();
      expect(typeof result).toBe('number');
    });
  });
});
