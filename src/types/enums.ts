/** 商品の検索フィルタなどに使用する，商品のカテゴリ */
export enum Category {
  /** 漫画 */
  MANGA = '漫画',
  /** イラスト */
  ILLUSTRATION = 'イラスト',
  /** 小説・その他書籍 */
  NOVEL_OTHER_BOOKS = '小説・その他書籍',
  /** グッズ */
  GOODS = 'グッズ',
  /** ファッション */
  FASHION = 'ファッション',
  /** アクセサリー */
  ACCESSORY = 'アクセサリー',
  /** フィギュア・ぬいぐるみ・ドール */
  FIGURE_PLUSHIE_DOLL = 'フィギュア・ぬいぐるみ・ドール',
  /** 3Dモデル */
  THREE_D_MODEL = '3Dモデル',
  /** 音楽 */
  MUSIC = '音楽',
  /** 音声作品 */
  AUDIO_WORK = '音声作品',
  /** ゲーム */
  GAME = 'ゲーム',
  /** ソフトウェア・ハードウェア */
  SOFTWARE_HARDWARE = 'ソフトウェア・ハードウェア',
  /** 素材データ */
  MATERIAL_DATA = '素材データ',
  /** 映像作品 */
  VIDEO_WORK = '映像作品',
  /** 写真作品 */
  PHOTOGRAPHIC_WORK = '写真作品',
  /** コスプレ */
  COSPLAY = 'コスプレ',
  /** 絵画・アート作品 */
  PAINTING_ART_WORK = '絵画・アート作品',
}

/** 商品の検索フィルタなどに使用する，商品のサブカテゴリ */
export enum SubCategory {
  /** 漫画・マンガ */
  MANGA = '漫画・マンガ',
  /** 4コマ漫画 */
  FOUR_PANEL_MANGA = '4コマ漫画',
  /** イラスト集・CG集 */
  ILLUSTRATION_CG_COLLECTION = 'イラスト集・CG集',
  /** イラスト作品 */
  ILLUSTRATION_WORK = 'イラスト作品',
  /** メイキング・講座 */
  MAKING_TUTORIAL = 'メイキング・講座',
  /** 壁紙 */
  WALLPAPER = '壁紙',
  /** 3DCG・3DCG集 */
  THREE_D_CG_COLLECTION = '3DCG・3DCG集',
  /** イラスト（その他） */
  ILLUSTRATION_OTHER = 'イラスト（その他）',
  /** 小説・ライトノベル */
  NOVEL_LIGHT_NOVEL = '小説・ライトノベル',
  /** 技術書 */
  TECHNICAL_BOOK = '技術書',
  /** 絵本 */
  PICTURE_BOOK = '絵本',
  /** クイズ */
  QUIZ = 'クイズ',
  /** エッセイ */
  ESSAY = 'エッセイ',
  /** 評論 */
  CRITICISM = '評論',
  /** 詩・俳句・短歌 */
  POETRY_HAIKU_TANKA = '詩・俳句・短歌',
  /** 旅行 */
  TRAVEL = '旅行',
  /** 歴史 */
  HISTORY = '歴史',
  /** 料理・グルメ */
  COOKING_GOURMET = '料理・グルメ',
  /** その他書籍 */
  OTHER_BOOKS = 'その他書籍',
  /** アクリルキーホルダー */
  ACRYLIC_KEYCHAIN = 'アクリルキーホルダー',
  /** キーホルダー・ストラップ */
  KEYCHAIN_STRAP = 'キーホルダー・ストラップ',
  /** アクリルフィギュア */
  ACRYLIC_FIGURE = 'アクリルフィギュア',
  /** シール・ステッカー */
  SEAL_STICKER = 'シール・ステッカー',
  /** 缶バッジ */
  CAN_BADGE = '缶バッジ',
  /** バッジ */
  BADGE = 'バッジ',
  /** ポストカード */
  POSTCARD = 'ポストカード',
  /** iPhoneケース・カバー */
  IPHONE_CASE_COVER = 'iPhoneケース・カバー',
  /** スマホケース・カバー */
  SMARTPHONE_CASE_COVER = 'スマホケース・カバー',
  /** 抱き枕カバー */
  DAKIMAKURA_COVER = '抱き枕カバー',
  /** タペストリー */
  TAPESTRY = 'タペストリー',
  /** ステーショナリー */
  STATIONERY = 'ステーショナリー',
  /** ポーチ */
  POUCH = 'ポーチ',
  /** マスキングテープ */
  MASKING_TAPE = 'マスキングテープ',
  /** グラス・タンブラー・マグカップ */
  GLASS_TUMBLER_MUG = 'グラス・タンブラー・マグカップ',
  /** クリアファイル */
  CLEAR_FILE = 'クリアファイル',
  /** アクリルブロック */
  ACRYLIC_BLOCK = 'アクリルブロック',
  /** クッション・クッションカバー */
  CUSHION_CUSHION_COVER = 'クッション・クッションカバー',
  /** 枕カバー */
  PILLOWCASE = '枕カバー',
  /** ポスター */
  POSTER = 'ポスター',
  /** カレンダー */
  CALENDAR = 'カレンダー',
  /** メガネ拭き */
  GLASSES_CLOTH = 'メガネ拭き',
  /** パスケース */
  PASS_CASE = 'パスケース',
  /** タオル */
  TOWEL = 'タオル',
  /** コースター */
  COASTER = 'コースター',
  /** ミラー */
  MIRROR = 'ミラー',
  /** ピンバッジ */
  PIN_BADGE = 'ピンバッジ',
  /** アクリルバッジ */
  ACRYLIC_BADGE = 'アクリルバッジ',
  /** ブランケット */
  BLANKET = 'ブランケット',
  /** マウスパッド */
  MOUSE_PAD = 'マウスパッド',
  /** スマホリング */
  SMARTPHONE_RING = 'スマホリング',
  /** スマホスタンド */
  SMARTPHONE_STAND = 'スマホスタンド',
  /** モバイルバッテリー */
  MOBILE_BATTERY = 'モバイルバッテリー',
  /** 名刺入れ */
  CARD_CASE = '名刺入れ',
  /** ペンケース */
  PEN_CASE = 'ペンケース',
  /** ラミネートカード */
  LAMINATED_CARD = 'ラミネートカード',
  /** カード（その他） */
  CARD_OTHER = 'カード（その他）',
  /** パズル */
  PUZZLE = 'パズル',
  /** 時計 */
  CLOCK = '時計',
  /** 印鑑ケース */
  STAMP_CASE = '印鑑ケース',
  /** 捺印マット */
  STAMP_MAT = '捺印マット',
  /** 下敷き */
  SHITASHIKI = '下敷き',
  /** 長傘 */
  LONG_UMBRELLA = '長傘',
  /** 卓上ミニ傘 */
  DESKTOP_MINI_UMBRELLA = '卓上ミニ傘',
  /** グッズ（その他） */
  GOODS_OTHER = 'グッズ（その他）',
  /** Tシャツ */
  T_SHIRT = 'Tシャツ',
  /** パーカー */
  HOODIE = 'パーカー',
  /** スウェット */
  SWEATSHIRT = 'スウェット',
  /** トートバッグ */
  TOTE_BAG = 'トートバッグ',
  /** バッグ */
  BAG = 'バッグ',
  /** サコッシュ */
  SACOCHE = 'サコッシュ',
  /** 帽子 */
  HAT = '帽子',
  /** タイツ */
  TIGHTS = 'タイツ',
  /** ファッション（その他） */
  FASHION_OTHER = 'ファッション（その他）',
  /** イヤリング・ピアス */
  EARRINGS_PIERCINGS = 'イヤリング・ピアス',
  /** ネックレス */
  NECKLACE = 'ネックレス',
  /** ブレスレット */
  BRACELET = 'ブレスレット',
  /** ヘアアクセサリー */
  HAIR_ACCESSORY = 'ヘアアクセサリー',
  /** ブローチ */
  BROOCH = 'ブローチ',
  /** ペンダント */
  PENDANT = 'ペンダント',
  /** アクセサリー（その他） */
  ACCESSORY_OTHER = 'アクセサリー（その他）',
  /** フィギュア */
  FIGURE = 'フィギュア',
  /** ぬいぐるみ */
  PLUSHIE = 'ぬいぐるみ',
  /** ドール */
  DOLL = 'ドール',
  /** 3Dキャラクター */
  THREE_D_CHARACTER = '3Dキャラクター',
  /** 3D衣装 */
  THREE_D_OUTFIT = '3D衣装',
  /** 3D装飾品 */
  THREE_D_ORNAMENT = '3D装飾品',
  /** 3D小道具 */
  THREE_D_PROP = '3D小道具',
  /** 3Dテクスチャ */
  THREE_D_TEXTURE = '3Dテクスチャ',
  /** 3Dツール・システム */
  THREE_D_TOOL_SYSTEM = '3Dツール・システム',
  /** 3Dモーション・アニメーション */
  THREE_D_MOTION_ANIMATION = '3Dモーション・アニメーション',
  /** 3D環境・ワールド */
  THREE_D_ENVIRONMENT_WORLD = '3D環境・ワールド',
  /** VRoid */
  V_ROID = 'VRoid',
  /** 3Dモデル（その他） */
  THREE_D_MODEL_OTHER = '3Dモデル（その他）',
  /** 音楽一般 */
  MUSIC_GENERAL = '音楽一般',
  /** ボカロ */
  VOCALOID = 'ボカロ',
  /** ゲーム音楽 */
  GAME_MUSIC = 'ゲーム音楽',
  /** 音楽（その他） */
  MUSIC_OTHER = '音楽（その他）',
  /** ボイス */
  VOICE = 'ボイス',
  /** ボイスドラマ・ドラマCD */
  VOICE_DRAMA_DRAMA_CD = 'ボイスドラマ・ドラマCD',
  /** ささやき・癒し系 */
  WHISPER_HEALING = 'ささやき・癒し系',
  /** 音声作品（その他） */
  AUDIO_WORK_OTHER = '音声作品（その他）',
  /** PCゲーム */
  PC_GAME = 'PCゲーム',
  /** テーブルゲーム */
  TABLETOP_GAME = 'テーブルゲーム',
  /** TRPG */
  TRPG = 'TRPG',
  /** マーダーミステリー */
  MURDER_MYSTERY = 'マーダーミステリー',
  /** ゲーム関連商品 */
  GAME_RELATED_PRODUCTS = 'ゲーム関連商品',
  /** ソフトウェア */
  SOFTWARE = 'ソフトウェア',
  /** ハードウェア・ガジェット */
  HARDWARE_GADGET = 'ハードウェア・ガジェット',
  /** イラスト素材 */
  ILLUSTRATION_MATERIAL = 'イラスト素材',
  /** イラスト3D素材 */
  ILLUSTRATION_THREE_D_MATERIAL = 'イラスト3D素材',
  /** 背景画像 */
  BACKGROUND_IMAGE = '背景画像',
  /** フォント・書体 */
  FONT_TYPEFACE = 'フォント・書体',
  /** アイコン */
  ICON = 'アイコン',
  /** ロゴ */
  LOGO = 'ロゴ',
  /** BGM素材 */
  BGM_MATERIAL = 'BGM素材',
  /** 効果音 */
  SOUND_EFFECT = '効果音',
  /** 素材（その他） */
  MATERIAL_OTHER = '素材（その他）',
  /** アニメーション */
  ANIMATION = 'アニメーション',
  /** 実写作品 */
  LIVE_ACTION_WORK = '実写作品',
  /** 写真 */
  PHOTO = '写真',
  /** 写真集 */
  PHOTO_BOOK = '写真集',
  /** コスプレ写真集 */
  COSPLAY_PHOTO_BOOK = 'コスプレ写真集',
  /** コスプレROM */
  COSPLAY_ROM = 'コスプレROM',
  /** コスプレ衣装 */
  COSPLAY_COSTUME = 'コスプレ衣装',
  /** コスプレ小道具 */
  COSPLAY_PROP = 'コスプレ小道具',
  /** コスプレ動画 */
  COSPLAY_VIDEO = 'コスプレ動画',
  /** コスプレ（その他） */
  COSPLAY_OTHER = 'コスプレ（その他）',
  /** 絵画 */
  PAINTING = '絵画',
  /** 複製画 */
  REPRODUCTION_PAINTING = '複製画',
  /** 工芸品 */
  CRAFTS = '工芸品',
  /** 彫刻・オブジェ */
  SCULPTURE_OBJET = '彫刻・オブジェ',
  /** 版画 */
  PRINT = '版画',
  /** 屏風 */
  BYOBU = '屏風',
  /** 絵画・アート作品（その他） */
  PAINTING_ART_WORK_OTHER = '絵画・アート作品（その他）',
}

/**
 * 商品の検索フィルタなどに使用する，開催されたイベント。
 *
 * 新しいイベントが開催された場合は，末尾に追加してください。
 *
 * イベントIDと名前の対応は，`https://manage.booth.pm/items/{itemId}`から取得できます。
 */
export enum BoothEvent {
  /** コミックマーケット86 */
  c86 = 'c86',
  /** COMITIA109 */
  comitia109 = 'comitia109',
  /** COMITIA110 */
  comitia110 = 'comitia110',
  /** コミックマーケット87 */
  c87 = 'c87',
  /** COMITIA111 */
  comitia111 = 'comitia111',
  /** SC2015 Winter */
  sc2015w = 'sc2015w',
  /** コミケットスペシャル6 */
  cs6 = 'cs6',
  /** COMIC1☆9 */
  comic1_9 = 'comic1-9',
  /** COMITIA112 */
  comitia112 = 'comitia112',
  /** SC2015 Summer */
  sc2015s = 'sc2015s',
  /** コミックマーケット88 */
  c88 = 'c88',
  /** COMITIA113 */
  comitia113 = 'comitia113',
  /** こみっく★トレジャー26 */
  comic_treasure_26 = 'comic-treasure-26',
  /** COMIC CITY SPARK10 */
  comiccity_spark10 = 'comiccity-spark10',
  /** SC2015 Autumn */
  sc2015a = 'sc2015a',
  /** デザインフェスタ vol.42 */
  designfesta42 = 'designfesta42',
  /** M3-2015秋 */
  m3_2015a = 'm3-2015a',
  /** 関西コミティア47 */
  k_comitia47 = 'k-comitia47',
  /** COMIC CITY 大阪103 */
  comiccity_osaka103 = 'comiccity-osaka103',
  /** 関西コミティア46 */
  k_comitia46 = 'k-comitia46',
  /** COMITIA114 */
  comitia114 = 'comitia114',
  /** コミックマーケット89 */
  c89 = 'c89',
  /** 博麗神社秋季例大祭 第二回 */
  reitaisai_a2 = 'reitaisai-a2',
  /** ゲームマーケット2015秋 */
  gamemarket_2015a = 'gamemarket-2015a',
  /** 第十二回 博麗神社例大祭 */
  reitaisai_12 = 'reitaisai-12',
  /** COMIC CITY 大阪104 */
  comiccity_osaka104 = 'comiccity-osaka104',
  /** COMIC CITY 福岡39 */
  comiccity_hukuoka39 = 'comiccity-hukuoka39',
  /** COMITIA115 */
  comitia115 = 'comitia115',
  /** COMIC CITY 東京137 */
  comiccity_tokyo137 = 'comiccity-tokyo137',
  /** こみっく★トレジャー27 */
  comic_treasure_27 = 'comic-treasure-27',
  /** HARU COMIC CITY 21 */
  haru_comiccity21 = 'haru-comiccity21',
  /** SC2016 Winter */
  sc2016w = 'sc2016w',
  /** 名古屋コミティア48 */
  ngy_comitia48 = 'ngy-comitia48',
  /** COMIC CITY 大阪105 */
  comiccity_osaka105 = 'comiccity-osaka105',
  /** COMIC1☆10 */
  comic1_10 = 'comic1-10',
  /** SUPER COMIC CITY 25 */
  supercomiccity25 = 'supercomiccity25',
  /** COMITIA116 */
  comitia116 = 'comitia116',
  /** M3-2016春 */
  m3_2016s = 'm3-2016s',
  /** デザインフェスタ vol.43 */
  designfesta43 = 'designfesta43',
  /** 関西コミティア48 */
  k_comitia48 = 'k-comitia48',
  /** コミックマーケット90 */
  c90 = 'c90',
  /** COMIC CITY 東京138 */
  comiccity_tokyo138 = 'comiccity-tokyo138',
  /** SC2016 Summer */
  sc2016s = 'sc2016s',
  /** SUPER COMIC CITY 関西 22 */
  supercomiccity_kansai22 = 'supercomiccity-kansai22',
  /** COMITIA117 */
  comitia117 = 'comitia117',
  /** 関西コミティア49 */
  k_comitia49 = 'k-comitia49',
  /** COMIC CITY 福岡41 */
  comiccity_hukuoka41 = 'comiccity-hukuoka41',
  /** COMITIA118 */
  comitia118 = 'comitia118',
  /** COMIC CITY SPARK11 */
  comiccity_spark11 = 'comiccity-spark11',
  /** COMIC CITY 大阪108 */
  comiccity_osaka108 = 'comiccity-osaka108',
  /** M3-2016秋 */
  m3_2016a = 'm3-2016a',
  /** デザインフェスタ vol.44 */
  designfesta44 = 'designfesta44',
  /** コミックマーケット91 */
  c91 = 'c91',
  /** SC2016 Autumn */
  sc2016a = 'sc2016a',
  /** こみっく★トレジャー29 */
  comic_treasure_29 = 'comic-treasure-29',
  /** COMIC CITY 東京139 */
  comiccity_tokyo139 = 'comiccity-tokyo139',
  /** COMIC CITY 大阪109 */
  comiccity_osaka109 = 'comiccity-osaka109',
  /** COMITIA119 */
  comitia119 = 'comitia119',
  /** SC2017 Winter */
  sc2017w = 'sc2017w',
  /** COMIC CITY 福岡42 */
  comiccity_hukuoka42 = 'comiccity-hukuoka42',
  /** デザインフェスタ vol.45 */
  designfesta45 = 'designfesta45',
  /** HARU COMIC CITY 22 */
  haru_comiccity22 = 'haru-comiccity22',
  /** SUPER COMIC CITY 26 */
  supercomiccity26 = 'supercomiccity26',
  /** M3-2017春 */
  m3_2017s = 'm3-2017s',
  /** COMITIA120 */
  comitia120 = 'comitia120',
  /** 関西コミティア50 */
  k_comitia50 = 'k-comitia50',
  /** コミックマーケット92 */
  c92 = 'c92',
  /** SC2017 Summer */
  sc2017s = 'sc2017s',
  /** COMIC CITY 東京140 */
  comiccity_tokyo140 = 'comiccity-tokyo140',
  /** COMIC CITY 大阪110 */
  comiccity_osaka110 = 'comiccity-osaka110',
  /** COMIC CITY 大阪111 */
  comiccity_osaka111 = 'comiccity-osaka111',
  /** COMITIA121 */
  comitia121 = 'comitia121',
  /** SC2017 Autumn */
  sc2017a = 'sc2017a',
  /** こみっく★トレジャー30 */
  comic_treasure_30 = 'comic-treasure-30',
  /** COMIC CITY 福岡44 */
  comiccity_hukuoka44 = 'comiccity-hukuoka44',
  /** 関西コミティア51 */
  k_comitia51 = 'k-comitia51',
  /** COMIC CITY 大阪112 */
  comiccity_osaka112 = 'comiccity-osaka112',
  /** COMIC CITY SPARK12 */
  comiccity_spark12 = 'comiccity-spark12',
  /** M3-2017秋 */
  m3_2017a = 'm3-2017a',
  /** GOOD COMIC CITY 24 */
  good_comiccity24 = 'good-comiccity24',
  /** COMIC1☆12 */
  comic1_12 = 'comic1-12',
  /** COMITIA122 */
  comitia122 = 'comitia122',
  /** デザインフェスタ vol.46 */
  designfesta46 = 'designfesta46',
  /** 技術書典3 */
  techbookfest_3 = 'techbookfest-3',
  /** 技術書典2 */
  techbookfest_2 = 'techbookfest-2',
  /** コミックマーケット93 */
  c93 = 'c93',
  /** 第二十五回文学フリマ東京 */
  bunfree25 = 'bunfree25',
  /** ゲームマーケット2017秋 */
  gamemarket_2017a = 'gamemarket-2017a',
  /** こみっく★トレジャー31 */
  comic_treasure_31 = 'comic-treasure-31',
  /** COMIC CITY 大阪113 */
  comiccity_osaka113 = 'comiccity-osaka113',
  /** COMIC CITY 福岡45 */
  comiccity_hukuoka45 = 'comiccity-hukuoka45',
  /** COMIC CITY 東京141 */
  comiccity_tokyo141 = 'comiccity-tokyo141',
  /** COMITIA123 */
  comitia123 = 'comitia123',
  /** COMITIA124 */
  comitia124 = 'comitia124',
  /** COMITIA125 */
  comitia125 = 'comitia125',
  /** 関西コミティア52 */
  k_comitia52 = 'k-comitia52',
  /** ゲームマーケット2018春 */
  gamemarket_2018s = 'gamemarket-2018s',
  /** ゲームマーケット2018大阪 */
  gamemarket_2018o = 'gamemarket-2018o',
  /** SC2018 Spring */
  sc2018p = 'sc2018p',
  /** COMIC CITY 大阪114 */
  comiccity_osaka114 = 'comiccity-osaka114',
  /** HARU COMIC CITY 23 */
  haru_comiccity23 = 'haru-comiccity23',
  /** COMIC1☆13 */
  comic1_13 = 'comic1-13',
  /** M3-2018春 */
  m3_2018s = 'm3-2018s',
  /** SUPER COMIC CITY 27 */
  supercomiccity27 = 'supercomiccity27',
  /** デザインフェスタ vol.47 */
  designfesta47 = 'designfesta47',
  /** COMIC CITY 大阪115 */
  comiccity_osaka115 = 'comiccity-osaka115',
  /** 技術書典4 */
  techbookfest_4 = 'techbookfest-4',
  /** COMIC CITY 福岡46 */
  comiccity_hukuoka46 = 'comiccity-hukuoka46',
  /** SC2018 Summer */
  sc2018s = 'sc2018s',
  /** COMIC CITY 東京142 */
  comiccity_tokyo142 = 'comiccity-tokyo142',
  /** マッハソン */
  machthon = 'machthon',
  /** TOKYO FES Jul.2018 */
  tokyofes_jul2018 = 'tokyofes-jul2018',
  /** pixiv MARKET */
  pixivmarket = 'pixivmarket',
  /** コミックマーケット94 */
  c94 = 'c94',
  /** Youに夢中！ */
  you_vtuber1 = 'you-vtuber1',
  /** GOOD COMIC CITY 25 */
  good_comiccity25 = 'good-comiccity25',
  /** SUPER COMIC CITY 関西 24 */
  supercomiccity_kansai24 = 'supercomiccity-kansai24',
  /** コスホリック23 */
  cosholic23 = 'cosholic23',
  /** 関西コミティア53 */
  k_comitia53 = 'k-comitia53',
  /** こみっく★トレジャー32 */
  comic_treasure_32 = 'comic-treasure-32',
  /** COMIC CITY SPARK13 */
  comiccity_spark13 = 'comiccity-spark13',
  /** COMIC1☆14 */
  comic1_14 = 'comic1-14',
  /** M3-2018秋 */
  m3_2018a = 'm3-2018a',
  /** 博麗神社秋季例大祭 第五回 */
  reitaisai_a5 = 'reitaisai-a5',
  /** TOKYO FES Sep.2018 */
  tokyofes_sep2018 = 'tokyofes-sep2018',
  /** 技術書典5 */
  techbookfest_5 = 'techbookfest-5',
  /** COMIC CITY 大阪117 */
  comiccity_osaka117 = 'comiccity-osaka117',
  /** COMIC CITY 福岡47 */
  comiccity_hukuoka47 = 'comiccity-hukuoka47',
  /** 閃華展覧会2018 */
  senkatenrankai181028 = 'senkatenrankai181028',
  /** 第16次ROOT 4 to 5 */
  root4to5_16 = 'root4to5-16',
  /** 第17次ROOT 4 to 5 */
  root4to5_17 = 'root4to5-17',
  /** COMITIA126 */
  comitia126 = 'comitia126',
  /** デザインフェスタ vol.48 */
  designfesta48 = 'designfesta48',
  /** SC2018 Autumn */
  sc2018a = 'sc2018a',
  /** TOKYO FES Nov.2018 */
  tokyofes_nov2018 = 'tokyofes-nov2018',
  /** 第18次ROOT 4 to 5 */
  root4to5_18 = 'root4to5-18',
  /** 閃華大合戦2018 */
  senkadaigassen = 'senkadaigassen',
  /** コミックマーケット95 */
  c95 = 'c95',
  /** コスホリック24 */
  cosholic24 = 'cosholic24',
  /** ゲームマーケット2018秋 */
  gamemarket_2018a = 'gamemarket-2018a',
  /** 関西コミティア54 */
  k_comitia54 = 'k-comitia54',
  /** こみっく★トレジャー33 */
  comic_treasure_33 = 'comic-treasure-33',
  /** COMIC CITY 大阪118 */
  comiccity_osaka118 = 'comiccity-osaka118',
  /** TOKYO FES  Jan.2019 */
  tokyofes_jan2019 = 'tokyofes-jan2019',
  /** 閃華の刻25 -初夢- */
  senkanotoki = 'senkanotoki',
  /** 第19次ROOT 4 to 5 */
  root4to5_19 = 'root4to5-19',
  /** SUPER COMIC CITY 28-起承転-｜東京 */
  supercomiccity28_kishoten = 'supercomiccity28-kishoten',
  /** SUPER COMIC CITY 28-結-｜大阪  */
  supercomiccity28_ketsu = 'supercomiccity28-ketsu',
  /** COMITIA127 */
  comitia127 = 'comitia127',
  /** COMIC CITY 福岡48 */
  comiccity_fukuoka48 = 'comiccity-fukuoka48',
  /** HARU COMIC CITY 24 東京 */
  harucomiccity24tokyo = 'harucomiccity24tokyo',
  /** 閃華の刻 26 */
  senkanotoki26 = 'senkanotoki26',
  /** 閃華春大祭 東2019 */
  senkahigashi2019 = 'senkahigashi2019',
  /** 第20次ROOT 4 to 5 */
  root4to5_20 = 'root4to5-20',
  /** バーチャルマーケット2 */
  v_market2 = 'v-market2',
  /** HARU COMIC CITY 25 大阪 */
  harucomiccity25osaka = 'harucomiccity25osaka',
  /** SC2019 Spring */
  sc2019spring = 'sc2019spring',
  /** ゲームマーケット2019大阪 */
  gamemarket_2019o = 'gamemarket-2019o',
  /** TOKYO FES Mar.2019 */
  tokyofes_mar2019 = 'tokyofes-mar2019',
  /** 閃華春大祭 西2019 */
  senkanishi2019 = 'senkanishi2019',
  /** 第21次ROOT 4 to 5 */
  root4to5_21 = 'root4to5-21',
  /** COMIC1☆15 */
  comic1_15 = 'comic1-15',
  /** M3-2019春 */
  m3_2019s = 'm3-2019s',
  /** 技術書典6 */
  techbookfest_6 = 'techbookfest-6',
  /** COMITIA128 */
  comitia128 = 'comitia128',
  /** 関西コミティア55 */
  k_comitia55 = 'k-comitia55',
  /** デザインフェスタ vol.49 */
  designfesta49 = 'designfesta49',
  /** 第十六回 博麗神社例大祭 */
  reitaisai_16 = 'reitaisai-16',
  /** ゲームマーケット2019春 */
  gamemarket_2019s = 'gamemarket-2019s',
  /** 超閃華大合戦 2019  */
  senkadaigassen2019 = 'senkadaigassen2019',
  /** SC2019 Summer */
  sc2019summer = 'sc2019summer',
  /** TOKYO FES Jun.2019 */
  tokyofes_jun2019 = 'tokyofes-jun2019',
  /** COMIC CITY 東京143 */
  comiccity_tokyo143 = 'comiccity-tokyo143',
  /** COMIC CITY 福岡49 */
  comiccity_fukuoka49 = 'comiccity-fukuoka49',
  /** TOKYO FES Jul.2019 */
  tokyofes_jul2019 = 'tokyofes-jul2019',
  /** 閃華の刻 27 */
  senkanotoki27 = 'senkanotoki27',
  /** 第22次ROOT 4 to 5 */
  root4to5_22 = 'root4to5-22',
  /** 第一回技術書同人誌博覧会 */
  gishohaku1 = 'gishohaku1',
  /** COMITIA129 */
  comitia129 = 'comitia129',
  /** コミックマーケット96 */
  c96 = 'c96',
  /** コスホリック26 */
  cosholic26 = 'cosholic26',
  /** SUPER COMIC CITY 関西 25 */
  supercomiccity_kansai25 = 'supercomiccity-kansai25',
  /** 閃華夏大祭 2019 */
  senka2019 = 'senka2019',
  /** 第23次ROOT 4 to 5 */
  root4to5_23 = 'root4to5-23',
  /** I・Doll VOL.56 */
  i_doll56 = 'i-doll56',
  /** ワンダーフェスティバル 2019[夏] */
  wonfes2019summer = 'wonfes2019summer',
  /** 関西コミティア56 */
  k_comitia56 = 'k-comitia56',
  /** こみっく★トレジャー34 */
  comic_treasure_34 = 'comic-treasure-34',
  /** ドールショウ57秋 */
  dollshow57 = 'dollshow57',
  /** GOOD COMIC CITY 26 */
  good_comiccity26 = 'good-comiccity26',
  /** COMIC1☆16 */
  comic1_16 = 'comic1-16',
  /** M3-2019秋 */
  m3_2019a = 'm3-2019a',
  /** COMIC CITY SPARK 14 */
  comiccity_spark14 = 'comiccity-spark14',
  /** OSAKA FES Oct.2019 */
  osakafes_oct2019 = 'osakafes-oct2019',
  /** 閃華の刻 火華2019 */
  senkanotoki2019 = 'senkanotoki2019',
  /** 第24次ROOT 4 to 5 */
  root4to5_24 = 'root4to5-24',
  /** 技術書典7 */
  techbookfest_7 = 'techbookfest-7',
  /** TOKYO FES Nov.2019 */
  tokyofes_nov2019 = 'tokyofes-nov2019',
  /** COMITIA130 */
  comitia130 = 'comitia130',
  /** SC2019 Autumn */
  sc2019autumn = 'sc2019autumn',
  /** デザインフェスタ vol.50 */
  designfesta50 = 'designfesta50',
  /** ゲームマーケット2019秋 */
  gamemarket_2019a = 'gamemarket-2019a',
  /** COMIC CITY 福岡50 */
  comiccity_fukuoka50 = 'comiccity-fukuoka50',
  /** 第25次ROOT 4 to 5 */
  root4to5_25 = 'root4to5-25',
  /** デジゲー博2019 */
  digigame_expo2019 = 'digigame-expo2019',
  /** コミックマーケット97 */
  c97 = 'c97',
  /** I・Doll VOL.57 */
  i_doll57 = 'i-doll57',
  /** ドールズ・パーティー42 */
  dollsparty42 = 'dollsparty42',
  /** TOKYO FES Dec.2019 */
  tokyofes_dec2019 = 'tokyofes-dec2019',
  /** 閃華の刻 28 */
  senkanotoki28 = 'senkanotoki28',
  /** 第二回技術書同人誌博覧会 */
  gishohaku2 = 'gishohaku2',
  /** コスホリック27 */
  cosholic27 = 'cosholic27',
  /** 関西コミティア57 */
  k_comitia57 = 'k-comitia57',
  /** こみっく★トレジャー35 */
  comic_treasure_35 = 'comic-treasure-35',
  /** ドールショウ58冬 */
  dollshow58 = 'dollshow58',
  /** COMIC CITY 東京144 */
  comiccity_tokyo144 = 'comiccity-tokyo144',
  /** 閃華の刻 29 -初夢- */
  senkanotoki29 = 'senkanotoki29',
  /** 第26次ROOT 4 to 5 */
  root4to5_26 = 'root4to5-26',
  /** COMIC CITY 大阪119 */
  comiccity_osaka119 = 'comiccity-osaka119',
  /** COMITIA131 */
  comitia131 = 'comitia131',
  /** 技術書典8 */
  techbookfest_8 = 'techbookfest-8',
  /** ワンダーフェスティバル 2020[冬] */
  wonfes2020winter = 'wonfes2020winter',
  /** HARU COMIC CITY 26 東京 */
  harucomiccity26tokyo = 'harucomiccity26tokyo',
  /** COMIC CITY 福岡51 */
  comiccity_fukuoka51 = 'comiccity-fukuoka51',
  /** TOKYO FES Feb.2020 */
  tokyofes_feb2020 = 'tokyofes-feb2020',
  /** 閃華春大祭 2020 */
  senkaharu2020 = 'senkaharu2020',
  /** 第27次ROOT 4 to 5 */
  root4to5_27 = 'root4to5-27',
  /** M3-2020春 */
  m3_2020s = 'm3-2020s',
  /** SC2020 Spring */
  sc2020Spring = 'sc2020Spring',
  /** 第十七回 博麗神社例大祭 */
  reitaisai_17 = 'reitaisai-17',
  /** ゲームマーケット2020大阪 */
  gamemarket_2020o = 'gamemarket-2020o',
  /** I・Doll VOL.58 */
  i_doll58 = 'i-doll58',
  /** ドールショウ59春 */
  dollshow59 = 'dollshow59',
  /** TOKYO FES Mar.2020 */
  tokyofes_mar2020 = 'tokyofes-mar2020',
  /** 第28次ROOT 4 to 5 */
  root4to5_28 = 'root4to5-28',
  /** デザインフェスタ vol.51 */
  designfesta51 = 'designfesta51',
  /** ゲームマーケット2020 */
  gamemarket_2020t = 'gamemarket-2020t',
  /** ドールズ・パーティー43 */
  dollsparty43 = 'dollsparty43',
  /** TOKYO FES 桜まつり */
  tokyofes_sakura12020 = 'tokyofes-sakura12020',
  /** 第29次ROOT 4 to 5 */
  root4to5_29 = 'root4to5-29',
  /** コスホリック28 */
  cosholic28 = 'cosholic28',
  /** HARU COMIC CITY 27 大阪 */
  harucomiccity27osaka = 'harucomiccity27osaka',
  /** エアコミケ(コミックマーケット98) */
  c98 = 'c98',
  /** COMITIA132extra */
  comitia132 = 'comitia132',
  /** 関西コミティア58 */
  k_comitia58 = 'k-comitia58',
  /** COMIC CITY 東京145 */
  comiccity_tokyo145 = 'comiccity-tokyo145',
  /** COMIC CITY 福岡52・53 */
  comiccity_fukuoka52_53 = 'comiccity-fukuoka52-53',
  /** SUPER COMIC CITY 関西 26 */
  supercomiccity_kansai26 = 'supercomiccity-kansai26',
  /** 第30次・32次ROOT 4 to 5 */
  root4to5_30_32 = 'root4to5-30-32',
  /** 閃華の刻 関西2020 */
  senkanotokikansai2020 = 'senkanotokikansai2020',
  /** エアブー超GWスペシャル */
  air_boo_gw = 'air-boo-gw',
  /** SC2020 Summer */
  sc2020summer = 'sc2020summer',
  /** 第三回技術書同人誌博覧会 */
  gishohaku3 = 'gishohaku3',
  /** ドールショウ60夏 */
  dollshow60 = 'dollshow60',
  /** エアブーCITY&FES */
  air_boo_cityfes = 'air-boo-cityfes',
  /** エアブーCITY&FES2020 */
  air_boo_cityfes2020 = 'air-boo-cityfes2020',
  /** 超SUPER COMIC CITY 2020 */
  supercomiccity2020 = 'supercomiccity2020',
  /** 超閃華夏大戦 2020 */
  senkanatu2020 = 'senkanatu2020',
  /** Super ROOT 4 to 5 2020 */
  root4to5_2020 = 'root4to5-2020',
  /** M3-2020秋 */
  m3_2020a = 'm3-2020a',
  /** エアコミティア133 */
  comitia133 = 'comitia133',
  /** 関西コミティア59 */
  k_comitia59 = 'k-comitia59',
  /** SC2020 Autumn */
  sc2020autumn = 'sc2020autumn',
  /** 超こみっく★トレジャー2020 */
  comic_treasure_2020 = 'comic-treasure-2020',
  /** 技術書典9 */
  techbookfest_9 = 'techbookfest-9',
  /** ドールショウ61秋 */
  dollshow61 = 'dollshow61',
  /** エアブー超夏祭り */
  air_boo_summer = 'air-boo-summer',
  /** COMIC1☆17 */
  comic1_17 = 'comic1-17',
  /** 博麗神社秋季例大祭 第7回 */
  reitaisai_a7 = 'reitaisai-a7',
  /** COMIC CITY SPARK 15 */
  comiccity_spark15 = 'comiccity-spark15',
  /** 閃華の刻 火華2020 */
  senkanotoki2020 = 'senkanotoki2020',
  /** 第31次ROOT 4 to 5 */
  root4to5_31 = 'root4to5-31',
  /** COMITIA134 */
  comitia134 = 'comitia134',
  /** デザインフェスタ vol.52 */
  designfesta52 = 'designfesta52',
  /** Youに夢中！ TOKYO #004 */
  you_vtuber4 = 'you-vtuber4',
  /** #にじそうさく04  */
  nijisousaku04 = 'nijisousaku04',
  /** 0927HELLO!!#エアブー */
  air_boo_0927 = 'air-boo-0927',
  /** 1018#エアブーSPARK!! */
  air_boo_sparc1018 = 'air-boo-sparc1018',
  /** HELLO!!TOKYO FES 2020 */
  tokyofes_hallo_2020 = 'tokyofes-hallo-2020',
  /** 閃華春大祭 -大阪-2020 */
  senkaharutaisai_oosaka_2020 = 'senkaharutaisai-oosaka-2020',
  /** 閃華の刻 30・31 */
  senkanotoki_30_31 = 'senkanotoki-30-31',
  /** ホロケット */
  holoketto = 'holoketto',
  /** ゲームマーケット2020秋 */
  gamemarket_2020a = 'gamemarket-2020a',
  /** デジゲー博2020 */
  digigame_expo2020 = 'digigame-expo2020',
  /** 1129#エアブーNov.2020 */
  air_boo_nov2020 = 'air-boo-nov2020',
  /** TOKYO FES Nov.2020 */
  tokyofes_nov2020 = 'tokyofes-nov2020',
  /** 1122FES.2020 */
  osakafes_2020 = 'osakafes-2020',
  /** コスホリック29 */
  cosholic29 = 'cosholic29',
  /** I・Doll VOL.60 */
  i_doll60 = 'i-doll60',
  /** ドールズ・パーティー44 */
  dollsparty44 = 'dollsparty44',
  /** 1213#エアブーDec.2020 */
  air_boo_dec2020 = 'air-boo-dec2020',
  /** 技術書典10 */
  techbookfest_10 = 'techbookfest-10',
  /** 関西コミティア60 */
  k_comitia60 = 'k-comitia60',
  /** こみっく★トレジャー37 */
  comic_treasure_37 = 'comic-treasure-37',
  /** ドールショウ62冬 */
  dollshow62 = 'dollshow62',
  /** エアブーCITY&FES2021 */
  air_boo_cityfes2021 = 'air-boo-cityfes2021',
  /** COMIC CITY 福岡54 */
  comiccity_fukuoka54 = 'comiccity-fukuoka54',
  /** COMIC CITY 東京146 */
  comiccity_tokyo146 = 'comiccity-tokyo146',
  /** COMIC CITY 大阪120 */
  comiccity_osaka120 = 'comiccity-osaka120',
  /** エアコミケ２ */
  aircomiket2 = 'aircomiket2',
  /** NEOKET */
  neoket = 'neoket',
  /** acosta!マルシェ */
  acosta_marche = 'acosta-marche',
  /** エアコミティア135 */
  comitia135 = 'comitia135',
  /** COMIC1☆18 */
  comic1_18 = 'comic1-18',
  /** ワンダーフェスティバル 2021[冬] */
  wonfes2021winter = 'wonfes2021winter',
  /** 0228#エアブーHARU2021 */
  air_boo_haru = 'air-boo-haru',
  /** HARU COMIC CITY 28 東京 */
  harucomiccity28tokyo = 'harucomiccity28tokyo',
  /** TOKYO FES Mar.2021 */
  tokyofes_mar2021 = 'tokyofes-mar2021',
  /** SC2021 Spring */
  sc2021Spring = 'sc2021Spring',
  /** ゲームマーケット2021大阪 */
  gamemarket_2021o = 'gamemarket-2021o',
  /** I・Doll VOL.61 */
  i_doll61 = 'i-doll61',
  /** HARU COMIC CITY 29 大阪 */
  harucomiccity29osaka = 'harucomiccity29osaka',
  /** 第十八回 博麗神社例大祭 */
  reitaisai_18 = 'reitaisai-18',
  /** ホロケット2nd */
  holoketto2 = 'holoketto2',
  /** M3-2021春 */
  m3_2021s = 'm3-2021s',
  /** ゲームマーケット2021春 */
  gamemarket_2021s = 'gamemarket-2021s',
  /** ドールズ・パーティー45 */
  dollsparty45 = 'dollsparty45',
  /** ドールショウ63春 */
  dollshow63 = 'dollshow63',
  /** 0411#エアブー2021 */
  air_boo_0411 = 'air-boo-0411',
  /** SUPER COMIC CITY GYU!!2021  */
  supercomiccity_gyu = 'supercomiccity-gyu',
  /** TOKYO FES Apr.2021 */
  tokyofes_apr2021 = 'tokyofes-apr2021',
  /** 関西コミティア61 */
  k_comitia61 = 'k-comitia61',
  /** エアコミケ3 */
  aircomiket3 = 'aircomiket3',
  /** デザインフェスタ vol.53 */
  designfesta53 = 'designfesta53',
  /** コスホリック30 */
  cosholic30 = 'cosholic30',
  /** 0509超#エアブー2021-day1- */
  air_boo_0509 = 'air-boo-0509',
  /** 0530超#エアブー2021-day2- */
  air_boo_0530 = 'air-boo-0530',
  /** SUPER COMIC CITY 関西 27 */
  supercomiccity_kansai27 = 'supercomiccity-kansai27',
  /** SUPER TOKYO FES.2021 */
  tokyofes_may2021 = 'tokyofes-may2021',
  /** 超Beckon of the Mirror 2021東京 */
  beckonofthemirror_2021tokyo = 'beckonofthemirror-2021tokyo',
  /** バーチャルクラフ特区2021春 */
  craftok21s = 'craftok21s',
  /** コミティア136 & エアコミティア136 */
  comitia136 = 'comitia136',
  /** SC2021 Summer */
  sc2021summer = 'sc2021summer',
  /** 0627#エアブーJUNEBRIDE2021 */
  air_boo_jb0627 = 'air-boo-jb0627',
  /** 第五回技術書同人誌博覧会 */
  gishohaku5 = 'gishohaku5',
  /** ホロケット3rd */
  holoketto3 = 'holoketto3',
  /** acosta!マルシェvol.1 */
  acosta_marche1 = 'acosta-marche1',
  /** 技術書典11 */
  techbookfest_11 = 'techbookfest-11',
  /** I・Doll VOL.62 */
  i_doll62 = 'i-doll62',
  /** 0711#エアブー2021 */
  air_boo_0711 = 'air-boo-0711',
  /** TOKYO FES Jul.2021 */
  tokyofes_jul2021 = 'tokyofes-jul2021',
  /** #にじそうさく05 */
  nijisousaku05 = 'nijisousaku05',
  /** Youに夢中！ TOKYO #005 */
  you_vtuber5 = 'you-vtuber5',
  /** 0822超SUPER#エアブー2021 */
  air_boo_0822 = 'air-boo-0822',
  /** 超SUPER COMIC CITY 2021 */
  supercomiccity2021 = 'supercomiccity2021',
  /** COMIC CITY 福岡55 */
  comiccity_fukuoka55 = 'comiccity-fukuoka55',
  /** エアコミティア137 */
  comitia137 = 'comitia137',
  /** こみっく★トレジャー38 */
  comic_treasure_38 = 'comic-treasure-38',
  /** ドールズ・パーティー46 */
  dollsparty46 = 'dollsparty46',
  /** ワンダーフェスティバル 2021[秋] */
  wonfes2021autumn = 'wonfes2021autumn',
  /** 0919#エアブーGOOD2021 */
  air_boo_0919 = 'air-boo-0919',
  /** GOOD COMIC CITY 27 */
  good_comiccity27 = 'good-comiccity27',
  /** 関西コミティア62 */
  k_comitia62 = 'k-comitia62',
  /** COMIC1☆19 */
  comic1_19 = 'comic1-19',
  /** M3-2021秋 */
  m3_2021a = 'm3-2021a',
  /** 第八回博麗神社秋季例大祭 */
  reitaisai_a8 = 'reitaisai-a8',
  /** 1010#エアブー2021 */
  air_boo_1010 = 'air-boo-1010',
  /** TOKYO FES Oct.2021 */
  tokyofes_oct2021 = 'tokyofes-oct2021',
  /** OSAKA FES Oct.2021 */
  osakafes_oct2021 = 'osakafes-oct2021',
  /** COMICUP 2021SP */
  comicup2021sp = 'comicup2021sp',
  /** ゲームマーケット2021秋 */
  gamemarket_2021a = 'gamemarket-2021a',
  /** TOKYO FES Nov.2021 */
  tokyofes_nov2021 = 'tokyofes-nov2021',
  /** コミティア138＆エアコミティア138 */
  comitia138 = 'comitia138',
  /** SC2021 Autumn */
  sc2021autumn = 'sc2021autumn',
  /** デザインフェスタ vol.54 */
  designfesta54 = 'designfesta54',
  /** デジゲー博2021 */
  digigame_expo2021 = 'digigame-expo2021',
  /** I・Doll VOL.63 */
  i_doll63 = 'i-doll63',
  /** ホロケット4th */
  holoketto4 = 'holoketto4',
  /** 1107#エアブー2021 */
  air_boo_1107 = 'air-boo-1107',
  /** COMIC CITY SPARK 16 */
  comiccity_spark16 = 'comiccity-spark16',
  /** コミックマーケット99 */
  c99 = 'c99',
  /** コスホリック31 */
  cosholic31 = 'cosholic31',
  /** ドールショウ64秋 */
  dollshow64 = 'dollshow64',
  /** COMICUP 29 */
  comicup29 = 'comicup29',
  /** 1212#エアブーSDRF2021 */
  air_boo_1212 = 'air-boo-1212',
  /** Dozen Rose Fes.2021 */
  dozenrose_fes2021 = 'dozenrose-fes2021',
  /** 関西コミティア63 */
  k_comitia63 = 'k-comitia63',
  /** SC2022 Winter */
  sc2022winter = 'sc2022winter',
  /** こみっく★トレジャー39 */
  comic_treasure_39 = 'comic-treasure-39',
  /** 技術書典12 */
  techbookfest_12 = 'techbookfest-12',
  /** ドールショウ65冬 */
  dollshow65 = 'dollshow65',
  /** 0123#エアブー2022 */
  air_boo_0123 = 'air-boo-0123',
  /** COMIC CITY 大阪121 */
  comiccity_osaka121 = 'comiccity-osaka121',
  /** COMIC CITY 東京147 */
  comiccity_tokyo147 = 'comiccity-tokyo147',
  /** COMITIA139 */
  comitia139 = 'comitia139',
  /** 第六回技術書同人誌博覧会 */
  gishohaku6 = 'gishohaku6',
  /** ゲームマーケット2022大阪 */
  gamemarket_2022o = 'gamemarket-2022o',
  /** I・Doll VOL.64 */
  i_doll64 = 'i-doll64',
  /** ワンダーフェスティバル 2022[冬] */
  wonfes2022winter = 'wonfes2022winter',
  /** ホロケット5th */
  holoketto5 = 'holoketto5',
  /** acosta!マルシェvol.2 */
  acosta_marche2 = 'acosta-marche2',
  /** 0220#エアブー2022 */
  air_boo_0220 = 'air-boo-0220',
  /** SC2022 Spring */
  sc2022Spring = 'sc2022Spring',
  /** 0327#エアブーHARU2022 */
  air_boo_haru0327 = 'air-boo-haru0327',
  /** HARU COMIC CITY 30 ～30回記念～ */
  harucomiccity30 = 'harucomiccity30',
  /** OSAKA FES Mar.2022 */
  osakafes_mar2022 = 'osakafes-mar2022',
  /** TOKYO FES Feb.2022 */
  tokyofes_feb2022 = 'tokyofes-feb2022',
  /** NEOKET2 */
  neoket2 = 'neoket2',
  /** M3-2022春 */
  m3_2022s = 'm3-2022s',
  /** ゲームマーケット2022春 */
  gamemarket_2022s = 'gamemarket-2022s',
  /** ドールズ・パーティー47 */
  dollsparty47 = 'dollsparty47',
  /** 立体乱舞3 */
  rittairanbu3 = 'rittairanbu3',
  /** COMITIA140 */
  comitia140 = 'comitia140',
  /** 関西コミティア64 */
  k_comitia64 = 'k-comitia64',
  /** COMIC1☆20 */
  comic1_20 = 'comic1-20',
  /** デザインフェスタ vol.55 */
  designfesta55 = 'designfesta55',
  /** コスホリック32 */
  cosholic32 = 'cosholic32',
  /** 第十九回 博麗神社例大祭 */
  reitaisai_19 = 'reitaisai-19',
  /** ドールショウ66夏 */
  dollshow66 = 'dollshow66',
  /** #にじそうさく06 */
  nijisousaku06 = 'nijisousaku06',
  /** SUPER COMIC CITY 29 */
  supercomiccity29 = 'supercomiccity29',
  /** COMIC CITY 大阪122 */
  comiccity_osaka122 = 'comiccity-osaka122',
  /**  0508#超エアブーGW2022 */
  air_boo_0508 = 'air-boo-0508',
  /** 0529#エアブー2022 */
  air_boo_0529 = 'air-boo-0529',
  /** SC2022 Summer */
  sc2022summer = 'sc2022summer',
  /** acosta!マルシェvol.3 */
  acosta_marche3 = 'acosta-marche3',
  /** 0626#エアブー2022 */
  air_boo_0626 = 'air-boo-0626',
  /** TOKYO FES Jun.2022 */
  tokyofes_Jun2022 = 'tokyofes-Jun2022',
  /** I・Doll VOL.65 */
  i_doll65 = 'i-doll65',
  /** ワンダーフェスティバル 2022[夏] */
  wonfes2022summer = 'wonfes2022summer',
  /** 0724#エアブー星に願いを2022 */
  air_boo_0724 = 'air-boo-0724',
  /** COMIC CITY 福岡56 */
  comiccity_fukuoka56 = 'comiccity-fukuoka56',
  /** 星に願いを。2022 */
  hoshininegaiwo2022 = 'hoshininegaiwo2022',
  /** コミックマーケット100 */
  c100 = 'c100',
  /** コスホリック33 */
  cosholic33 = 'cosholic33',
  /** 0828#超エアブー夏2022 */
  air_boo_0828 = 'air-boo-0828',
  /** SUPER COMIC CITY 関西 28 */
  supercomiccity_kansai28 = 'supercomiccity-kansai28',
  /** GOOD COMIC CITY 28 */
  good_comiccity28 = 'good-comiccity28',
  /** COMICUP 2022SP */
  comicup2022sp = 'comicup2022sp',
  /** COMITIA141 */
  comitia141 = 'comitia141',
  /** 関西コミティア65 */
  k_comitia65 = 'k-comitia65',
  /** SC2022 Autumn */
  sc2022autumn = 'sc2022autumn',
  /** こみっく★トレジャー40 */
  comic_treasure_40 = 'comic-treasure-40',
  /** 技術書典13 */
  techbookfest_13 = 'techbookfest-13',
  /** ドールショウ67秋 */
  dollshow67 = 'dollshow67',
  /** J.GARDEN52 */
  j_garden52 = 'j-garden52',
  /** 0918#エアブー2022 */
  air_boo_0918 = 'air-boo-0918',
  /** TOKYO FES Sep.2022 */
  tokyofes_sep2022 = 'tokyofes-sep2022',
  /** NEOKET3 */
  neoket3 = 'neoket3',
  /** M3-2022秋 */
  m3_2022a = 'm3-2022a',
  /** 第九回博麗神社秋季例大祭 */
  reitaisai_a9 = 'reitaisai-a9',
  /** ゲームマーケット2022秋 */
  gamemarket_2022a = 'gamemarket-2022a',
  /** COMIC1☆21 */
  comic1_21 = 'comic1-21',
  /** ホロケット6th */
  holoketto6 = 'holoketto6',
  /** 1016#エアブー2022 */
  air_boo_1016 = 'air-boo-1016',
  /** TOKYO FES Oct.2022 */
  tokyofes_oct2022 = 'tokyofes-oct2022',
  /** OSAKA FES Oct.2022 */
  osakafes_oct2022 = 'osakafes-oct2022',
  /** COMITIA142 */
  comitia142 = 'comitia142',
  /** SC2022 Autumn 2ND */
  sc2022autumn2nd = 'sc2022autumn2nd',
  /** デザインフェスタ vol.56 */
  designfesta56 = 'designfesta56',
  /** 第七回技術書同人誌博覧会 */
  gishohaku7 = 'gishohaku7',
  /** デジゲー博2022 */
  digigame_expo2022 = 'digigame-expo2022',
  /** 1106#エアブー感謝SPECIAL */
  air_boo_1106 = 'air-boo-1106',
  /** COMIC CITY 福岡57 */
  comiccity_fukuoka57 = 'comiccity-fukuoka57',
  /** バーチャルマーケット2022 Winter Next Journey */
  virtualmarket2022winter = 'virtualmarket2022winter',
  /** コミックマーケット101 */
  c101 = 'c101',
  /** コスホリック34 */
  cosholic34 = 'cosholic34',
  /** I・Doll VOL.66 */
  i_doll66 = 'i-doll66',
  /** 1218#エアブーSPARK+DRF2022 */
  air_boo_1218 = 'air-boo-1218',
  /** COMIC CITY SPARK 17 */
  comiccity_spark17 = 'comiccity-spark17',
  /** Dozen Rose Fes.2022 */
  dozenrosefes2022 = 'dozenrosefes2022',
  /** 関西コミティア66 */
  k_comitia66 = 'k-comitia66',
  /** こみっく★トレジャー41 */
  comic_treasure_41 = 'comic-treasure-41',
  /** ドールショウ68冬 */
  dollshow68 = 'dollshow68',
  /** #エアブー230108 */
  air_boo_0108 = 'air-boo-0108',
  /** ドールズ・パーティー48 */
  dollsparty48 = 'dollsparty48',
  /** COMIC CITY 東京148 */
  comiccity_tokyo148 = 'comiccity-tokyo148',
  /** COMIC CITY 大阪123 */
  comiccity_osaka123 = 'comiccity-osaka123',
  /** COMITIA143 */
  comitia143 = 'comitia143',
  /** COMIC CITY 福岡58 */
  comiccity_fukuoka58 = 'comiccity-fukuoka58',
  /** TOKYO FES Feb.2023 */
  tokyofes_feb2023 = 'tokyofes-feb2023',
  /** ワンダーフェスティバル2023[冬] */
  wonfes2023winter = 'wonfes2023winter',
  /** #エアブー230212 */
  air_boo_0212 = 'air-boo-0212',
  /** SC2023 Spring */
  sc2023Spring = 'sc2023Spring',
  /** I・Doll VOL.67 */
  i_doll67 = 'i-doll67',
  /** #エアブー230319 */
  air_boo_0319 = 'air-boo-0319',
  /** HARU COMIC CITY 31 */
  harucomiccity31 = 'harucomiccity31',
  /** NEOKET4 */
  neoket4 = 'neoket4',
  /** M3-2023春 */
  m3_2023s = 'm3-2023s',
  /** ドールズ パーティー49 */
  dollsparty49 = 'dollsparty49',
  /** acosta!マルシェvol.4 */
  acosta_marche4 = 'acosta-marche4',
  /** J.GARDEN53 */
  j_garden53 = 'j-garden53',
  /** COMITIA144 */
  comitia144 = 'comitia144',
  /** 関西コミティア67 */
  k_comitia67 = 'k-comitia67',
  /** デザインフェスタ vol.57 */
  designfesta57 = 'designfesta57',
  /** 第二十回 博麗神社例大祭 */
  reitaisai_20 = 'reitaisai-20',
  /** ゲームマーケット2023春 */
  gamemarket_2023s = 'gamemarket-2023s',
  /** COMIC1☆22 */
  comic1_22 = 'comic1-22',
  /** 技術書典14 */
  techbookfest_14 = 'techbookfest-14',
  /** コスホリック35 */
  cosholic35 = 'cosholic35',
  /** 第八回技術書同人誌博覧会 */
  gishohaku8 = 'gishohaku8',
  /** #にじそうさく07 */
  nijisousaku07 = 'nijisousaku07',
  /** #超エアブー230505 */
  air_boo_0505 = 'air-boo-0505',
  /** #エアブー230528 */
  air_boo_0528 = 'air-boo-0528',
  /** SUPER COMIC CITY 30 */
  supercomiccity30 = 'supercomiccity30',
  /** COMIC CITY 大阪124 */
  comiccity_osaka124 = 'comiccity-osaka124',
  /** SC2023 Summer */
  sc2023summer = 'sc2023summer',
  /** ドールショウ69夏 */
  dollshow69 = 'dollshow69',
  /** ホロケット7th */
  holoketto7 = 'holoketto7',
  /** JUNE BRIDE FES 2023 */
  junebridefes2023 = 'junebridefes2023',
  /** COMIC CITY ONLINE-230623- */
  comiccity_online_0623 = 'comiccity-online-0623',
  /** I・Doll VOL.68 */
  i_doll68 = 'i-doll68',
  /** COMIC CITY ONLINE-230728-  */
  comiccity_online_230728 = 'comiccity-online-230728',
  /** COMIC CITY TOKYO149 */
  comiccity_tokyo149 = 'comiccity-tokyo149',
  /** コミックマーケット102 */
  c102 = 'c102',
  /** コスホリック36 */
  cosholic36 = 'cosholic36',
  /** SUPER COMIC CITY 関西 29 */
  supercomiccity_kansai29 = 'supercomiccity-kansai29',
  /** TOKYO FES Aug.2023 */
  tokyofes_aug2023 = 'tokyofes-aug2023',
  /** ワンダーフェスティバル 2023[夏] */
  wonfes2023summer = 'wonfes2023summer',
  /** 超COMIC CITY ONLINE-230825- */
  comiccity_online_230825 = 'comiccity-online-230825',
  /** COMITIA145 */
  comitia145 = 'comitia145',
  /** こみっく★トレジャー42 */
  comic_treasure_42 = 'comic-treasure-42',
  /** COMIC CITY ONLINE-230922- */
  comiccity_online_230922 = 'comiccity-online-230922',
  /** GOOD COMIC CITY 29 */
  good_comiccity29 = 'good-comiccity29',
  /** acosta!マルシェvol.5 */
  acosta_marche5 = 'acosta-marche5',
  /** NEOKET5 */
  neoket5 = 'neoket5',
  /** 関西コミティア68 */
  k_comitia68 = 'k-comitia68',
  /** M3-2023秋 */
  m3_2023a = 'm3-2023a',
  /** COMIC1☆23 */
  comic1_23 = 'comic1-23',
  /** #にじそうさく08 */
  nijisousaku08 = 'nijisousaku08',
  /** J.GARDEN54 */
  j_garden54 = 'j-garden54',
  /** #エアブー感謝祭-231027- */
  air_boo_1027 = 'air-boo-1027',
  /** TOKYO FES Oct.2023 */
  tokyofes_oct2023 = 'tokyofes-oct2023',
  /** SC2023 Autumn */
  sc2023autumn = 'sc2023autumn',
  /** デザインフェスタ vol.58 */
  designfesta58 = 'designfesta58',
  /** 第十回博麗神社秋季例大祭 */
  reitaisai_a10 = 'reitaisai-a10',
  /** 技術書典15 */
  techbookfest_15 = 'techbookfest-15',
  /** 第九回技術書同人誌博覧会 */
  gishohaku9 = 'gishohaku9',
  /** デジゲー博2023 */
  digigame_expo2023 = 'digigame-expo2023',
  /** ホロケット8th */
  holoketto8 = 'holoketto8',
  /** COMIC CITY SPARK ONLINE-231119- */
  comiccity_spark_online231119 = 'comiccity-spark-online231119',
  /** COMIC CITY SPARK 18 */
  comiccity_spark18 = 'comiccity-spark18',
  /** ドールズ・パーティー50 */
  dollsparty50 = 'dollsparty50',
  /** Dozen Rose Fes.2023 */
  dozenrosefes2023 = 'dozenrosefes2023',
  /** COMIC CITY 福岡59 */
  comiccity_fukuoka59 = 'comiccity-fukuoka59',
  /** COMIC CITY ONLINE-231215- */
  comiccity_online_231215 = 'comiccity-online-231215',
  /** I・Doll VOL.69 */
  i_doll69 = 'i-doll69',
  /** コスホリック37 */
  cosholic37 = 'cosholic37',
  /** コミックマーケット103 */
  c103 = 'c103',
  /** COMITIA146 */
  comitia146 = 'comitia146',
  /** ゲームマーケット2023秋 */
  gamemarket_2023a = 'gamemarket-2023a',
  /** 関西コミティア69 */
  k_comitia69 = 'k-comitia69',
  /** こみっく★トレジャー43 */
  comic_treasure_43 = 'comic-treasure-43',
  /** ドールショウ71冬 */
  dollshow71 = 'dollshow71',
  /** COMIC CITY ONLINE-240105- */
  comiccity_online_240105 = 'comiccity-online-240105',
  /** COMIC CITY 東京150 */
  comiccity_tokyo150 = 'comiccity-tokyo150',
  /** COMIC CITY 大阪 125 */
  comiccity_osaka125 = 'comiccity-osaka125',
  /** エア即売会2023冬 */
  air2023w = 'air2023w',
  /** COMITIA147 */
  comitia147 = 'comitia147',
  /** COMIC CITY ONLINE-240209- */
  comiccity_online_240209 = 'comiccity-online-240209',
  /** TOKYO FES Feb.2024 */
  tokyofes_feb2024 = 'tokyofes-feb2024',
  /** ワンダーフェスティバル 2024冬 */
  wonfes2024winter = 'wonfes2024winter',
  /** SC2024 Spring */
  sc2024spring = 'sc2024spring',
  /** コスホリック38 */
  cosholic38 = 'cosholic38',
  /** I・Doll VOL.70 */
  i_doll70 = 'i-doll70',
  /** acosta!マルシェvol.6 */
  acosta_marche6 = 'acosta-marche6',
  /** J.GARDEN55 */
  j_garden55 = 'j-garden55',
  /** COMIC CITY ONLINE -240317- */
  comiccity_online_240317 = 'comiccity-online-240317',
  /** HARU COMIC CITY 32 東京 */
  harucomiccity32tokyo = 'harucomiccity32tokyo',
  /** HARU COMIC CITY 33 大阪 */
  harucomiccity33osaka = 'harucomiccity33osaka',
  /** M3-2024春 */
  m3_2024s = 'm3-2024s',
  /** ゲームマーケット2024春 */
  gamemarket_2024s = 'gamemarket-2024s',
  /** COMIC1☆24 */
  comic1_24 = 'comic1-24',
  /** ドールズ・パーティー51 */
  dollsparty51 = 'dollsparty51',
  /** COMICUP 2024 SP */
  comicup2024sp = 'comicup2024sp',
  /** COMITIA148 */
  comitia148 = 'comitia148',
  /** 関西コミティア70 */
  k_comitia70 = 'k-comitia70',
  /** デザインフェスタ vol.59 */
  designfesta59 = 'designfesta59',
  /** 第二十一回博麗神社例大祭 */
  reitaisai_a21 = 'reitaisai-a21',
  /** 技術書典16 */
  techbookfest_16 = 'techbookfest-16',
  /** 第十回技術書同人誌博覧会 */
  gishohaku10 = 'gishohaku10',
  /** ドールショウ72夏 */
  dollshow72 = 'dollshow72',
  /** 超COMIC CITY ONLINE -240506- */
  comiccity_online_240506 = 'comiccity-online-240506',
  /** SUPER COMIC CITY 31 */
  supercomiccity31 = 'supercomiccity31',
  /** COMIC CITY 大阪 126 */
  comiccity_osaka126 = 'comiccity-osaka126',
  /** COMIC CITY ONLINE -240331- */
  comiccity_online_240331 = 'comiccity-online-240331',
  /** SC2024 Summer */
  sc2024summer = 'sc2024summer',
  /** JUNE BRIDE FES.2024 */
  junebridefes2024 = 'junebridefes2024',
  /** COMIC CITY ONLINE -240630- */
  comiccity_online_240630 = 'comiccity-online-240630',
  /** コミックマーケット104 */
  c104 = 'c104',
  /** コスホリック39 */
  cosholic39 = 'cosholic39',
  /** ワンダーフェスティバル 2024夏 */
  wonfes2024summer = 'wonfes2024summer',
  /** COMIC CITY ONLINE -240728- */
  comiccity_online_240728 = 'comiccity-online-240728',
  /** COMIC CITY 福岡60 */
  comiccity_fukuoka60 = 'comiccity-fukuoka60',
  /** TOKYO FES Jul.2024 */
  tokyofes_jul2024 = 'tokyofes-jul2024',
  /** X-NEOKET */
  x_neoket = 'x-neoket',
  /** #にじそうさく09 */
  nijisousaku09 = 'nijisousaku09',
  /** COMITIA149 */
  comitia149 = 'comitia149',
  /** COMIC CITY VEGA 2024 */
  comiccity_vega2024 = 'comiccity-vega2024',
  /** I・Doll VOL.71 */
  i_doll71 = 'i-doll71',
  /** こみっく★トレジャー44 */
  comic_treasure_44 = 'comic-treasure-44',
  /** ゲームマーケット2024京都 */
  gamemarket_2024k = 'gamemarket-2024k',
  /** コスホリックSPECIAL */
  cosholicsp = 'cosholicsp',
  /** ドールショウ73秋 */
  dollshow73 = 'dollshow73',
  /** ホロケット11th */
  holoketto11 = 'holoketto11',
  /** acosta!マルシェ vol.7 */
  acosta_marche7 = 'acosta-marche7',
  /** J.GARDEN56 */
  j_garden56 = 'j-garden56',
  /** VEGA & GOOD ONLINE -240901- */
  vegagood_online_240901 = 'vegagood-online-240901',
  /** GOOD COMIC CITY 30 大阪 */
  good_comiccity30 = 'good-comiccity30',
  /** TOKYO FES Sep.2024 */
  tokyofes_sep2024 = 'tokyofes-sep2024',
  /** COMIC CITY ONLINE -240922- */
  comiccity_online_240922 = 'comiccity-online-240922',
  /** SC2024 Autumn */
  sc2024autumn = 'sc2024autumn',
  /** 関西コミティア71 */
  k_comitia71 = 'k-comitia71',
  /** M3-2024秋 */
  m3_2024a = 'm3-2024a',
  /** 第十一回博麗神社秋季例大祭 */
  reitaisai_a11 = 'reitaisai-a11',
  /** COMIC1☆25 */
  comic1_25 = 'comic1-25',
  /** COMICUP 30 */
  comicup30 = 'comicup30',
  /** COMIC CITY SPARK ONLINE -241027- */
  comiccity_spark_online_241027 = 'comiccity-spark-online-241027',
  /** COMIC CITY SPARK 19 */
  comiccity_spark19 = 'comiccity-spark19',
  /** GOOD COMIC CITY 30 神戸 */
  comiccity_koube30 = 'comiccity-koube30',
  /** COMITIA150 */
  comitia150 = 'comitia150',
  /** デザインフェスタ vol.60 */
  designfesta60 = 'designfesta60',
  /** ゲームマーケット2024秋 */
  gamemarket_2024a = 'gamemarket-2024a',
  /** 技術書典 17 */
  techbookfest_17 = 'techbookfest-17',
  /** デジゲー博2024 */
  digigame_expo2024 = 'digigame-expo2024',
  /** #エアブー感謝祭 -241123- */
  air_boo_1123 = 'air-boo-1123',
  /** コミックマーケット105 */
  c105 = 'c105',
  /** I・Doll VOL.72 */
  i_doll72 = 'i-doll72',
  /** ドールズ・パーティー52 */
  dollsparty52 = 'dollsparty52',
  /** ROSE&CITY ONLINE -241215- */
  rosecity_online_241215 = 'rosecity-online-241215',
  /** COMIC CITY 東京 151 */
  comiccity_tokyo151 = 'comiccity-tokyo151',
  /** DOZEN ROSE FES 2024 */
  dozenrosefes2024 = 'dozenrosefes2024',
  /** 文学フリマ 東京39 */
  bunfree_tokyo39 = 'bunfree-tokyo39',
  /** 関西コミティア72 */
  k_comitia72 = 'k-comitia72',
  /** こみっく★トレジャー45 */
  comic_treasure_45 = 'comic-treasure-45',
  /** 第十一回技術書同人誌博覧会 */
  gishohaku11 = 'gishohaku11',
  /** ドールショウ74冬 */
  dollshow74 = 'dollshow74',
  /** SUPER COMIC CITY 関西30 */
  supercomiccity_kansai30 = 'supercomiccity-kansai30',
  /** 超COMIC CITY ONLINE -250113- */
  comiccity_online_250113 = 'comiccity-online-250113',
  /** TOKYO FES Jan.2025 */
  tokyofes_jan2025 = 'tokyofes-jan2025',
  /** COMITIA151 */
  comitia151 = 'comitia151',
  /** SC2025 Winter */
  sc2025winter = 'sc2025winter',
  /** コスホリック40 */
  cosholic40 = 'cosholic40',
  /** ワンダーフェスティバル 2025冬 */
  wonfes2025winter = 'wonfes2025winter',
  /** acosta!マルシェ vol.8 */
  acosta_marche8 = 'acosta-marche8',
  /** CITY&ROSE ONLINE -250209- */
  cityrose_online_250209 = 'cityrose-online-250209',
  /** COMIC CITY 福岡61 */
  comiccity_fukuoka61 = 'comiccity-fukuoka61',
  /** VALENTINE ROSE FES 2025 */
  valentinerosefes2025 = 'valentinerosefes2025',
  /** I・Doll VOL.73 */
  i_doll73 = 'i-doll73',
  /** ホロケット12th */
  holoketto12 = 'holoketto12',
  /** J.GARDEN57 */
  j_garden57 = 'j-garden57',
  /** HARU COMIC CITY ONLINE -250316- */
  harucomiccity_online_250316 = 'harucomiccity-online-250316',
  /** HARU COMIC CITY 34 */
  harucomiccity34tokyo = 'harucomiccity34tokyo',
  /** OSAKA FES Mar.2025 */
  osakafes_mar2025 = 'osakafes-mar2025',
  /** M3-2025春 */
  m3_2025s = 'm3-2025s',
  /** COMIC1☆26 */
  comic1_26 = 'comic1-26',
  /** ドールズ・パーティー53 */
  dollsparty53 = 'dollsparty53',
  /** エアブー春の感謝祭 -250405- */
  air_boo_0405 = 'air-boo-0405',
  /** 出張版！VRCくりえいてぃ部 */
  vrcreative = 'vrcreative',
  /** 関西コミティア73 */
  k_comitia73 = 'k-comitia73',
  /** 第二十二回博麗神社例大祭 */
  reitaisai_22 = 'reitaisai-22',
  /** ゲームマーケット2025春 */
  gamemarket_2025s = 'gamemarket-2025s',
  /** 技術書典 18 */
  techbookfest_18 = 'techbookfest-18',
  /** コスホリック41 */
  cosholic41 = 'cosholic41',
  /** ドールショウ75夏 */
  dollshow75 = 'dollshow75',
  /** COMICUP 31 */
  comicup31 = 'comicup31',
  /** COMIC CITY ONLINE -250525- */
  comiccity_online_250525 = 'comiccity-online-250525',
  /** 超COMIC CITY ONLINE -250505- */
  comiccity_online_250505 = 'comiccity-online-250505',
  /** SUPER COMIC CITY 32 東京 */
  supercomiccity32tokyo = 'supercomiccity32tokyo',
  /** SUPER COMIC CITY 32 大阪 */
  supercomiccity32osaka = 'supercomiccity32osaka',
  /** 文学フリマ 東京40 */
  bunfree_tokyo40 = 'bunfree-tokyo40',
  /** COMITIA152 */
  comitia152 = 'comitia152',
  /** SC2025 Summer */
  sc2025summer = 'sc2025summer',
  /** #にじそうさく10 */
  nijisousaku10 = 'nijisousaku10',
  /** ホロケット13th */
  holoketto13 = 'holoketto13',
  /** 星に願いを。ONLINE -250622- */
  hoshininegaiwo_online_250622 = 'hoshininegaiwo-online-250622',
  /** 星に願いを 2025 -day1- */
  hoshininegaiwo2025_1 = 'hoshininegaiwo2025-1',
  /** デザインフェスタ vol.61 */
  designfesta61 = 'designfesta61',
  /** I・Doll VOL.74 */
  i_doll74 = 'i-doll74',
  /** ワンダーフェスティバル 2025夏 */
  wonfes2025summer = 'wonfes2025summer',
  /** acosta!マルシェ vol.9 */
  acosta_marche9 = 'acosta-marche9',
  /** 星に願いを。ONLINE -250720- */
  hoshininegaiwo_online_250720 = 'hoshininegaiwo-online-250720',
  /** COMIC CITY 福岡62 */
  comiccity_fukuoka62 = 'comiccity-fukuoka62',
  /** 星に願いを 2025 -day2- */
  hoshininegaiwo2025_2 = 'hoshininegaiwo2025-2',
  /** バーチャルマーケット2025 Summer */
  Vket2025Summer = 'Vket2025Summer',
  /** VketReal 2025 Summer */
  VketReal2025Summer = 'VketReal2025Summer',
  /** コミックマーケット106 */
  c106 = 'c106',
  /** コスホリック42 */
  cosholic42 = 'cosholic42',
  /** GOOD COMIC CITY ONLINE -250824- */
  goodcomiccity_online_250824 = 'goodcomiccity-online-250824',
  /** COMIC CITY VEGA 2025 */
  comiccity_vega2025 = 'comiccity-vega2025',
  /** GOOD COMIC CITY 31 大阪 */
  good_comiccity31osaka = 'good-comiccity31osaka',
  /** COMITIA153 */
  comitia153 = 'comitia153',
  /** ドールショウ76秋 */
  dollshow76 = 'dollshow76',
  /** COMIC CITY VEGA ONLINE -250907- */
  comiccity_vega_online_250907 = 'comiccity-vega-online-250907',
  /** TOKYO FES Sep.2025 */
  tokyofes_sep2025 = 'tokyofes-sep2025',
  /** 関西コミティア74 */
  k_comitia74 = 'k-comitia74',
  /** M3-2025秋 */
  m3_2025a = 'm3-2025a',
  /** 第十二回博麗神社秋季例大祭 */
  reitaisai_a12 = 'reitaisai-a12',
  /** COMIC1☆27 */
  comic1_27 = 'comic1-27',
  /** 第十二回技術書同人誌博覧会 */
  gishohaku12 = 'gishohaku12',
  /** J.GARDEN58 */
  j_garden58 = 'j-garden58',
  /** COMIC CITY SPARK 20 -day1- */
  comiccity_spark20_1 = 'comiccity-spark20-1',
}

/** 商品の検索フィルタに使用する，商品の種類 */
export enum ItemType {
  /** 物販 */
  PHYSICAL = 'physical',
  /** 物販 (自宅から発送) */
  DIRECT = 'direct',
  /** ダウンロード商品 */
  DIGITAL = 'digital',
  /** 物販 (倉庫から発送) */
  VIA_WAREHOUSE = 'via_warehouse',
  /** 物販 (pixivFACTORYから発送) */
  FACTORY_ITEM = 'factory_item',
  /** 指定なし */
  UNSPECIFIED = '',
}

/** 商品の検索フィルタに使用する，年齢制限 */
export enum AgeRestriction {
  /** R18商品のみ */
  ADULT_ONLY = 'only',
  /** 指定なし */
  INCLUDE = 'include',
  /** 全年齢のみ */
  GENERAL = '',
}

/** 商品の検索フィルタに使用する，商品の並び替え */
export enum SortOrder {
  /** 人気順（順番はアルゴリズム依存です。アクセスするたびに順番が変化するので，おすすめしません。） */
  POPULARITY = '',
  /** 新着順 */
  NEW = 'new',
  /** スキ順 */
  LIKES = 'wish_lists',
  /** 価格が高い順 */
  PRICE_DESC = 'price_desc',
  /** 価格が低い順 */
  PRICE_ASC = 'price_asc',
}

/** リンクの種類 */
export enum LinkType {
  /** ショップとのメッセージ */
  Conversation = 'conversation',
  /** Facebook */
  Facebook = 'facebook',
  /** FANBOX */
  Fanbox = 'fanbox',
  /** GitHub */
  GitHub = 'github',
  /** Instagram */
  Instagram = 'instagram',
  /** LINE */
  Line = 'line',
  /** ニコニコ動画 */
  NicoNico = 'niconico',
  /** pixiv */
  Pixiv = 'pixiv',
  /** SoundCloud */
  SoundCloud = 'soundcloud',
  /** Bandcamp */
  Bandcamp = 'bandcamp',
  /** Tumblr */
  Tumblr = 'tumblr',
  /** Vimeo */
  Vimeo = 'vimeo',
  /** VRoid */
  VRoid = 'vroid',
  /** YouTube */
  YouTube = 'youtube',
  /** X（旧Twitter） */
  XTwitter = 'xtwitter',
  /** Googleマップ */
  GoogleMaps = 'google_maps',
  /** SlideShare */
  SlideShare = 'slide_share',
  /** Sketchfab */
  Sketchfab = 'sketchfab',
  /** その他 */
  Other = 'other',
}

/** 埋め込みコンテンツの種類 */
export enum EmbedType {
  /** VRoid */
  VRoid = 'vroid',
  /** Vimeo */
  Vimeo = 'vimeo',
  /** YouTube */
  YouTube = 'youtube',
  /** SoundCloud */
  SoundCloud = 'soundcloud',
  /** Bandcamp */
  Bandcamp = 'bandcamp',
  /** Googleマップ */
  GoogleMaps = 'google_maps',
  /** SlideShare */
  SlideShare = 'slide_share',
  /** Sketchfab */
  Sketchfab = 'sketchfab',
  /** ニコニコ動画 */
  NicoNico = 'niconico',
}
