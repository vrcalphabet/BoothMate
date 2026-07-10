# BoothMate

[![npm version](https://badge.fury.io/js/boothmate.svg)](https://badge.fury.io/js/boothmate)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScriptで書かれたBooth用の非公式スクレイピングライブラリです。[Boothの利用規約](#謝辞)に抵触しない範囲でご自由に利用ください。

## 使い方

### インポート・初期化

```typescript
import { BoothMate } from 'boothmate'

const client = new BoothMate({
  sessionToken: 'your_session_token',
  csrfToken: 'your_csrf_token',
})

// もしくはトークンを省略して初期化も可能です
// const client = new BoothMate();
```

このライブラリでは，セッショントークンやCSRFトークンを省略することもできます。トークンを指定した場合はログイン状態でのAPI操作が可能になり，省略した場合は公開データのみ取得できます。トークンの取得方法については，[オプション・設定](#オプション・設定)をご覧ください。

### 商品の情報を取得

```typescript
// 商品検索
const searchResult = await client.item.search('VRChat', {
  category: Category.THREE_D_MODEL,
  min_price: 0,
  max_price: 5000,
})

console.log(`検索結果: ${searchResult.total_items}件`)
searchResult.items.forEach((item) => {
  console.log(`- ${item.name}: ¥${item.min_price}`)
})

// 特定の商品の詳細を取得
const item = await client.item.get(123456)
console.log(item.description)
```

### ショップ情報取得

```typescript
// ショップ情報の取得
const shop = await client.shop.get('vrcalphabet')
console.log(`ショップ名: ${shop.name}`)

// ショップの商品一覧の取得
const shopItems = await client.shop.getItems('vrcalphabet')
```

### ウィッシュリスト操作

```typescript
// 作成したウィッシュリスト一覧取得
const wishlists = await client.wishlist.getNames()
console.log(`ウィッシュリスト数: ${wishlists.length}`)

// ウィッシュリスト内の商品一覧を取得
const wishlistItems = await client.wishlist.getItems('pQ9TlbPV')
console.log(`アイテム数: ${wishlistItems.total_items}`)

// 商品をウィッシュリストに追加
await client.wishlist.addItem('pQ9TlbPV', 123456)

// ウィッシュリストから商品を削除
await client.wishlist.removeItem('pQ9TlbPV', 123456)
```

ここで紹介したAPIは，ほんの一部にしかすぎません。API一覧は，[ドキュメンテーション](https://vrcalphabet.github.io/BoothMate/classes/BoothMate.BoothMate.html)や[サンプル](https://github.com/vrcalphabet/BoothMate/tree/master/examples)をご覧ください。

**コードの書き方でお困りですか？[AIにご相談ください](https://gemini.google.com/gem/1VlPbawQ_8AcdBzhsGcxYKAUYTpXvhCSq?usp=sharing)！**

## インストール

```bash
npm install boothmate
# or
yarn add boothmate
# or
pnpm add boothmate
```

## オプション・設定

### 認証情報の取得

1. **セッショントークン** (Cookie `_plaza_session_nktz7u` の値):
   - [Booth](https://booth.pm/ja)にログイン後、[Cookie-Editor](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)などのCookie閲覧ツールを使用して値を取得

2. **CSRFトークン**:
   - 開発者ツールのコンソールで、`document.querySelector('meta[name="csrf-token"]').content`を実行して取得

### デバッグモード

デバッグモードを有効にするには，オプションの`debug`に`true`を指定します。

```typescript
const client = new BoothMate({ debug: true }) // デバッグモード有効
```

デバッグモードを有効にすると、HTTPリクエストの詳細がコンソールに出力されます(例)。

```
200  GET  https://alphahub.booth.pm/items?page=1 (224ms)
200  GET  https://accounts.booth.pm/wish_lists.json?item_ids%5B%5D=6794919 (132ms)
```

## 貢献

プロジェクトへの貢献を歓迎します！以下のルールに従うと，あなたの貢献がスムーズになります！

### Issue / PR

Issueを立てる際は，バグ報告・機能要望のどちらかを明記してください。
PRの説明には，目的・変更点・影響範囲・サンプルコードがあるとありがたいです。

## ライセンス

MIT License

詳細は[LICENSE](./LICENSE)ファイルを参照してください。

## 変更履歴・リリース情報

### v0.1.0 (2025-09ｰ15)

- 初回リリース

### v0.1.4 (2025-09-15)

- コードの統一やREADMEなどを修正

### v0.2.0 (2025-09-16)

- サンプルコードの追加やenumプロパティの変更を行った

### v0.3.0 (2025-09-17)

- utilityサービスクラスへのアクセスをutilsに名前変更した

### v0.4.0 (2025-11-07)

- トークンを省略して初期化できるようにした

### v0.5.0 (2026-07-10)

- [OR条件での検索](https://booth.pm/announcements/939)をできるようにした
- [サブカテゴリを追加](https://booth.pm/announcements/935)した
- イベントをたくさん追加した
- Webマニフェストを取得するAPIを削除した

## 短期目標

- より詳細なエラーハンドリング
- メッセージの取得・送信
- カート内商品の取得
- 購入履歴とライブラリの取得
- URLから直接データを取得できるようにする
- 無料や購入したデジタル商品をダウンロードできるようにする

## 作者・クレジット

**あるふぁべっと (vrcalphabet)** - プロジェクト作成者・メンテナー

### 謝辞

- [Booth.pm](https://booth.pm/ja) - 素晴らしいプラットフォームを提供
- TypeScriptコミュニティ - 優れた型システム
- オープンソースコミュニティ - 継続的なサポート

---

**注意**: このライブラリは非公式です。Booth.pmの利用規約([サービス共通利用規約](https://policies.pixiv.net/#terms), [Booth利用規約](https://policies.pixiv.net/#booth))を遵守してご利用ください。また，各APIは1秒以上ごとに実行するなどしてBoothのサーバに負荷が掛からないように配慮してください。\
https://booth.pm/announcements/863
