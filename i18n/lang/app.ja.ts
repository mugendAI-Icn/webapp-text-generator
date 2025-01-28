const translation = {
  common: {
    welcome: 'ようこそ',
    appUnavailable: 'アプリは利用できません',
    appUnkonwError: 'アプリは利用できません',
    optional: '任意',
  },
  generation: {
    tabs: {
      create: '単一実行',
      batch: 'バッチ実行',
      saved: '保存済み',
    },
    queryTitle: '入力内容',
    completionResult: '生成結果',
    queryPlaceholder: 'テキストを入力してください...',
    run: '実行',
    copy: 'コピー',
    title: 'AI生成',
    resultTitle: 'AI生成',
    noData: 'AIがここに結果を表示します。',
    csvUploadTitle: 'CSVファイルをここにドラッグ&ドロップ、または',
    browse: '参照',
    csvStructureTitle: 'CSVファイルは以下の構造に従う必要があります：',
    downloadTemplate: 'テンプレートをダウンロード',
    field: 'フィールド',
    batchFailed: {
      info: '{{num}}件の実行が失敗しました',
      retry: '再試行',
      outputPlaceholder: '出力内容なし',
    },
    errorMsg: {
      empty: 'アップロードされたファイルの内容が空です。',
      fileStructNotMatch: 'アップロードされたCSVファイルの構造が一致しません。',
      emptyLine: '{{rowIndex}}行目が空です',
      invalidLine: '{{rowIndex}}行目: {{varName}}は必須項目です',
      moreThanMaxLengthLine: '{{rowIndex}}行目: {{varName}}は{{maxLength}}文字を超えることはできません',
      atLeastOne: 'アップロードされたファイルには少なくとも1行のデータが必要です。',
    },
    privacyPolicyLeft: 'アプリ開発者が提供する',
    privacyPolicyMiddle: 'プライバシーポリシー',
    privacyPolicyRight: 'をお読みください。',
  },
  errorMessage: {
    valueOfVarRequired: '必須項目が入力されていません',
    queryRequired: 'テキストを入力してください。',
    waitForResponse: '前回の応答が完了するまでお待ちください。',
    waitForImgUpload: '画像のアップロードが完了するまでお待ちください',
  },
}

export default translation
