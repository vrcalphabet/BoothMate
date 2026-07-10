import { BoothMate, AuthError } from '../../../src/main'
import 'dotenv/config'

if (!process.env.SESSION_TOKEN) {
  throw new Error('.envにSESSION_TOKENを設定してください')
}

const clientWithoutToken = new BoothMate({
  debug: true,
})
const client = new BoothMate({
  sessionToken: process.env.SESSION_TOKEN,
  debug: true,
})

describe('BoothMate.notification', () => {
  describe('BoothMate.notification.list', () => {
    it('トークン未指定でエラーが発生するか？', async () => {
      const p = clientWithoutToken.notification.list()
      await expect(p).rejects.toThrow(AuthError)
    })

    it('連想配列が返るか？', async () => {
      const result = await client.notification.list()
      expect(result).toBeDefined()
      expect(Array.isArray(result)).toBe(true)
    })
  })

  describe('BoothMate.notification.getUnreadCount', () => {
    it('トークン未指定でエラーが発生するか？', async () => {
      const p = clientWithoutToken.notification.getUnreadCount()
      await expect(p).rejects.toThrow(AuthError)
    })

    it('数値が返るか？', async () => {
      const result = await client.notification.getUnreadCount()
      expect(result).toBeDefined()
      expect(typeof result).toBe('number')
    })
  })
})
