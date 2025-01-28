const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
export function randomString(length: number) {
  let result = ''
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
  return result
}

/**
 * 文字列の文字数を正確にカウントする
 * - サロゲートペア文字を1文字としてカウント
 * - 結合文字を考慮
 * - オブジェクトの場合はJSON文字列化して計算
 * - 改行と空白を除外
 */
export function countCharacters(content: any): number {
  if (!content)
    return 0

  let str: string
  if (typeof content === 'string')
    str = content
  else
    str = JSON.stringify(content)

  // 改行と空白を除去してからカウント
  return Array.from(str.replace(/[\r\n\s]/g, '')).length
}
