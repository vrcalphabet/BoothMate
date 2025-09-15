import { Category, SubCategory } from '@/types';

export class CategoryConverter {
  private static categoryMapping: Map<SubCategory, Category>;

  private constructor() {}

  static {
    this.categoryMapping = new Map([
      // 漫画関連
      [SubCategory.MANGA, Category.MANGA],
      [SubCategory.FOUR_PANEL_MANGA, Category.MANGA],

      // イラスト関連
      [SubCategory.ILLUSTRATION_CG_COLLECTION, Category.ILLUSTRATION],
      [SubCategory.ILLUSTRATION_WORK, Category.ILLUSTRATION],
      [SubCategory.MAKING_TUTORIAL, Category.ILLUSTRATION],
      [SubCategory.WALLPAPER, Category.ILLUSTRATION],
      [SubCategory.THREE_D_CG_COLLECTION, Category.ILLUSTRATION],
      [SubCategory.ILLUSTRATION_OTHER, Category.ILLUSTRATION],

      // 小説・その他書籍関連
      [SubCategory.NOVEL_LIGHT_NOVEL, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.TECHNICAL_BOOK, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.PICTURE_BOOK, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.QUIZ, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.ESSAY, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.CRITICISM, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.POETRY_HAIKU_TANKA, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.TRAVEL, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.HISTORY, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.COOKING_GOURMET, Category.NOVEL_OTHER_BOOKS],
      [SubCategory.OTHER_BOOKS, Category.NOVEL_OTHER_BOOKS],

      // グッズ関連
      [SubCategory.ACRYLIC_KEYCHAIN, Category.GOODS],
      [SubCategory.KEYCHAIN_STRAP, Category.GOODS],
      [SubCategory.ACRYLIC_FIGURE, Category.GOODS],
      [SubCategory.SEAL_STICKER, Category.GOODS],
      [SubCategory.CAN_BADGE, Category.GOODS],
      [SubCategory.BADGE, Category.GOODS],
      [SubCategory.POSTCARD, Category.GOODS],
      [SubCategory.IPHONE_CASE_COVER, Category.GOODS],
      [SubCategory.SMARTPHONE_CASE_COVER, Category.GOODS],
      [SubCategory.DAKIMAKURA_COVER, Category.GOODS],
      [SubCategory.TAPESTRY, Category.GOODS],
      [SubCategory.STATIONERY, Category.GOODS],
      [SubCategory.POUCH, Category.GOODS],
      [SubCategory.MASKING_TAPE, Category.GOODS],
      [SubCategory.GLASS_TUMBLER_MUG, Category.GOODS],
      [SubCategory.CLEAR_FILE, Category.GOODS],
      [SubCategory.ACRYLIC_BLOCK, Category.GOODS],
      [SubCategory.CUSHION_CUSHION_COVER, Category.GOODS],
      [SubCategory.PILLOWCASE, Category.GOODS],
      [SubCategory.POSTER, Category.GOODS],
      [SubCategory.CALENDAR, Category.GOODS],
      [SubCategory.GLASSES_CLOTH, Category.GOODS],
      [SubCategory.PASS_CASE, Category.GOODS],
      [SubCategory.TOWEL, Category.GOODS],
      [SubCategory.COASTER, Category.GOODS],
      [SubCategory.MIRROR, Category.GOODS],
      [SubCategory.PIN_BADGE, Category.GOODS],
      [SubCategory.ACRYLIC_BADGE, Category.GOODS],
      [SubCategory.BLANKET, Category.GOODS],
      [SubCategory.MOUSE_PAD, Category.GOODS],
      [SubCategory.SMARTPHONE_RING, Category.GOODS],
      [SubCategory.SMARTPHONE_STAND, Category.GOODS],
      [SubCategory.MOBILE_BATTERY, Category.GOODS],
      [SubCategory.CARD_CASE, Category.GOODS],
      [SubCategory.PEN_CASE, Category.GOODS],
      [SubCategory.LAMINATED_CARD, Category.GOODS],
      [SubCategory.CARD_OTHER, Category.GOODS],
      [SubCategory.PUZZLE, Category.GOODS],
      [SubCategory.CLOCK, Category.GOODS],
      [SubCategory.STAMP_CASE, Category.GOODS],
      [SubCategory.STAMP_MAT, Category.GOODS],
      [SubCategory.SHITASHIKI, Category.GOODS],
      [SubCategory.LONG_UMBRELLA, Category.GOODS],
      [SubCategory.DESKTOP_MINI_UMBRELLA, Category.GOODS],
      [SubCategory.GOODS_OTHER, Category.GOODS],

      // ファッション関連
      [SubCategory.T_SHIRT, Category.FASHION],
      [SubCategory.HOODIE, Category.FASHION],
      [SubCategory.SWEATSHIRT, Category.FASHION],
      [SubCategory.TOTE_BAG, Category.FASHION],
      [SubCategory.BAG, Category.FASHION],
      [SubCategory.SACOCHE, Category.FASHION],
      [SubCategory.HAT, Category.FASHION],
      [SubCategory.TIGHTS, Category.FASHION],
      [SubCategory.FASHION_OTHER, Category.FASHION],

      // アクセサリー関連
      [SubCategory.EARRINGS_PIERCINGS, Category.ACCESSORY],
      [SubCategory.NECKLACE, Category.ACCESSORY],
      [SubCategory.BRACELET, Category.ACCESSORY],
      [SubCategory.HAIR_ACCESSORY, Category.ACCESSORY],
      [SubCategory.BROOCH, Category.ACCESSORY],
      [SubCategory.PENDANT, Category.ACCESSORY],
      [SubCategory.ACCESSORY_OTHER, Category.ACCESSORY],

      // フィギュア・ぬいぐるみ・ドール関連
      [SubCategory.FIGURE, Category.FIGURE_PLUSHIE_DOLL],
      [SubCategory.PLUSHIE, Category.FIGURE_PLUSHIE_DOLL],
      [SubCategory.DOLL, Category.FIGURE_PLUSHIE_DOLL],

      // 3Dモデル関連
      [SubCategory.THREE_D_CHARACTER, Category.THREE_D_MODEL],
      [SubCategory.THREE_D_OUTFIT, Category.THREE_D_MODEL],
      [SubCategory.THREE_D_ORNAMENT, Category.THREE_D_MODEL],
      [SubCategory.THREE_D_PROP, Category.THREE_D_MODEL],
      [SubCategory.THREE_D_TEXTURE, Category.THREE_D_MODEL],
      [SubCategory.THREE_D_TOOL_SYSTEM, Category.THREE_D_MODEL],
      [SubCategory.THREE_D_MOTION_ANIMATION, Category.THREE_D_MODEL],
      [SubCategory.THREE_D_ENVIRONMENT_WORLD, Category.THREE_D_MODEL],
      [SubCategory.V_ROID, Category.THREE_D_MODEL],
      [SubCategory.THREE_D_MODEL_OTHER, Category.THREE_D_MODEL],

      // 音楽関連
      [SubCategory.MUSIC_GENERAL, Category.MUSIC],
      [SubCategory.VOCALOID, Category.MUSIC],
      [SubCategory.GAME_MUSIC, Category.MUSIC],
      [SubCategory.MUSIC_OTHER, Category.MUSIC],

      // 音声作品関連
      [SubCategory.VOICE, Category.AUDIO_WORK],
      [SubCategory.VOICE_DRAMA_DRAMA_CD, Category.AUDIO_WORK],
      [SubCategory.WHISPER_HEALING, Category.AUDIO_WORK],
      [SubCategory.AUDIO_WORK_OTHER, Category.AUDIO_WORK],

      // ゲーム関連
      [SubCategory.PC_GAME, Category.GAME],
      [SubCategory.TABLETOP_GAME, Category.GAME],
      [SubCategory.TRPG, Category.GAME],
      [SubCategory.MURDER_MYSTERY, Category.GAME],
      [SubCategory.GAME_RELATED_PRODUCTS, Category.GAME],

      // ソフトウェア・ハードウェア関連
      [SubCategory.SOFTWARE, Category.SOFTWARE_HARDWARE],
      [SubCategory.HARDWARE_GADGET, Category.SOFTWARE_HARDWARE],

      // 素材データ関連
      [SubCategory.ILLUSTRATION_MATERIAL, Category.MATERIAL_DATA],
      [SubCategory.ILLUSTRATION_THREE_D_MATERIAL, Category.MATERIAL_DATA],
      [SubCategory.BACKGROUND_IMAGE, Category.MATERIAL_DATA],
      [SubCategory.FONT_TYPEFACE, Category.MATERIAL_DATA],
      [SubCategory.ICON, Category.MATERIAL_DATA],
      [SubCategory.LOGO, Category.MATERIAL_DATA],
      [SubCategory.BGM_MATERIAL, Category.MATERIAL_DATA],
      [SubCategory.SOUND_EFFECT, Category.MATERIAL_DATA],
      [SubCategory.MATERIAL_OTHER, Category.MATERIAL_DATA],

      // 映像作品関連
      [SubCategory.ANIMATION, Category.VIDEO_WORK],
      [SubCategory.LIVE_ACTION_WORK, Category.VIDEO_WORK],

      // 写真作品関連
      [SubCategory.PHOTO, Category.PHOTOGRAPHIC_WORK],
      [SubCategory.PHOTO_BOOK, Category.PHOTOGRAPHIC_WORK],

      // コスプレ関連
      [SubCategory.COSPLAY_PHOTO_BOOK, Category.COSPLAY],
      [SubCategory.COSPLAY_ROM, Category.COSPLAY],
      [SubCategory.COSPLAY_COSTUME, Category.COSPLAY],
      [SubCategory.COSPLAY_PROP, Category.COSPLAY],
      [SubCategory.COSPLAY_VIDEO, Category.COSPLAY],
      [SubCategory.COSPLAY_OTHER, Category.COSPLAY],

      // 絵画・アート作品関連
      [SubCategory.PAINTING, Category.PAINTING_ART_WORK],
      [SubCategory.REPRODUCTION_PAINTING, Category.PAINTING_ART_WORK],
      [SubCategory.CRAFTS, Category.PAINTING_ART_WORK],
      [SubCategory.SCULPTURE_OBJET, Category.PAINTING_ART_WORK],
      [SubCategory.PRINT, Category.PAINTING_ART_WORK],
      [SubCategory.BYOBU, Category.PAINTING_ART_WORK],
      [SubCategory.PAINTING_ART_WORK_OTHER, Category.PAINTING_ART_WORK],
    ]);
  }

  static fromSubCategory(subcategory: SubCategory): Category | undefined {
    return this.categoryMapping.get(subcategory);
  }
}
