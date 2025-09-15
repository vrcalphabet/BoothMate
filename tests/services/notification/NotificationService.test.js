"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BoothMate_1 = require("@/BoothMate");
require("dotenv/config");
if (!process.env.SESSION_TOKEN || !process.env.CSRF_TOKEN) {
    throw new Error('.envにSESSION_TOKENとCSRF_TOKENを設定してください');
}
const client = new BoothMate_1.BoothMate(process.env.SESSION_TOKEN, process.env.CSRF_TOKEN, true);
describe('BoothMate.notification', () => {
    describe('BoothMate.notification.list', () => {
        it('連想配列が返るか？', async () => {
            const result = await client.notification.list();
            expect(result).toBeDefined();
            expect(Array.isArray(result)).toBe(true);
        });
    });
});
//# sourceMappingURL=NotificationService.test.js.map