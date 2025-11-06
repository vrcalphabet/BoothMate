/**
 * セッショントークンやCSRFトークンが必要なリクエストで、未指定の場合に発生するエラーです。
 */
export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
