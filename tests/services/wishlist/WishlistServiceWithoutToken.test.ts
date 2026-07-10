import { BoothMate } from '@/BoothMate'
import { AuthError } from '@/types'
import 'dotenv/config'

if (!process.env.SESSION_TOKEN) {
  throw new Error('.envにSESSION_TOKENを設定してください')
}

const clientWithoutToken = new BoothMate({ debug: true })

describe('BoothMate.wishlist', () => {
  describe('BoothMate.wishlist.getNames', () => {
    it('トークン未指定でエラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.getNames()
      await expect(p).rejects.toThrow()
    })
  })

  describe('BoothMate.wishlist.getItems', () => {
    it('作成した非公開のウィッシュリストIDでエラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.getItems(global.INVISIBLE_WISHLIST_ID)
      await expect(p).rejects.toThrow()
    })
  })

  describe('BoothMate.wishlist.getDefaultItems', () => {
    it('エラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.getDefaultItems()
      await expect(p).rejects.toThrow()
    })
  })

  describe('BoothMate.wishlist.getUncategorizedItems', () => {
    it('エラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.getUncategorizedItems()
      await expect(p).rejects.toThrow()
    })
  })

  describe('BoothMate.wishlist.removeItem', () => {
    it('ウィッシュリストに含まれる商品IDの削除でエラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.removeItem(
        global.ITEM_ID_INCLUDED,
        global.WISHLIST_ID,
      )
      await expect(p).rejects.toThrow()
    })

    it('デフォルトのスキリストから有効な商品ID削除でエラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.removeItem(global.ITEM_ID_INCLUDED)
      await expect(p).rejects.toThrow()
    })
  })

  describe('BoothMate.wishlist.addItem', () => {
    it('デフォルトのスキリストに有効な商品ID追加でエラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.addItem(global.ITEM_ID_INCLUDED)
      await expect(p).rejects.toThrow()
    })

    it('有効な商品ID追加でエラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.addItem(
        global.ITEM_ID_INCLUDED,
        global.WISHLIST_ID,
      )
      await expect(p).rejects.toThrow()
    })
  })

  describe('BoothMate.wishlist.isItemInWishlist', () => {
    it('ウィッシュリストに含まれている商品ID確認でエラーが発生するか？', async () => {
      const p = clientWithoutToken.wishlist.hasItem(
        global.ITEM_ID_INCLUDED,
        global.WISHLIST_ID,
      )
      await expect(p).rejects.toThrow()
    })
  })
})
