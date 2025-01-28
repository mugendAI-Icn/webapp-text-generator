import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  PlayIcon,
} from '@heroicons/react/24/solid'
import Select from '@/app/components/base/select'
import type { PromptConfig, VisionFile, VisionSettings } from '@/types/app'
import Button from '@/app/components/base/button'
import { DEFAULT_VALUE_MAX_LEN } from '@/config'
import TextGenerationImageUploader from '@/app/components/base/image-uploader/text-generation-image-uploader'

export type IRunOnceProps = {
  promptConfig: PromptConfig
  inputs: Record<string, any>
  onInputsChange: (inputs: Record<string, any>) => void
  onSend: () => void
  visionConfig: VisionSettings
  onVisionFilesChange: (files: VisionFile[]) => void
}
const RunOnce: FC<IRunOnceProps> = ({
  promptConfig,
  inputs,
  onInputsChange,
  onSend,
  visionConfig,
  onVisionFilesChange,
}) => {
  const { t } = useTranslation()

  const generateDemoValue = (name: string) => {
    const nameIncludes = (keywords: string[]) => {
      return keywords.some(keyword => name.toLowerCase().includes(keyword.toLowerCase()))
    }

    if (nameIncludes(['大学でどのような学び']))
      return 'メディア学部では、技術と創造性を組み合わせた学びを追求したいと考えています。特に以下の3つの分野に注力したいと思います：\n\n1. AI・機械学習：最新のディープラーニング技術や自然言語処理の基礎から応用まで\n2. ユーザーインターフェース設計：人間中心設計の考え方に基づいた、使いやすいシステムの開発手法\n3. プロジェクトマネジメント：チームでの開発経験を通じた実践的なスキル習得'

    if (nameIncludes(['高校でやってきたこと']))
      return '高校では情報処理部に所属し、プログラミングの基礎を学びながら、文化祭でのデジタル展示物の制作を行ってきました。特に、Pythonを使用した簡単な画像認識システムを開発し、来場者の表情を認識して対応する音楽を自動で再生するインタラクティブな展示を実現しました。この経験は、技術を使って人々に新しい体験を提供することの面白さを教えてくれました。大学では、この経験を活かしてより高度な技術を学び、社会に貢献できるシステムの開発に取り組みたいと考えています。'

    if (nameIncludes(['大学']))
      return '東京工科大学'

    if (nameIncludes(['学部']))
      return 'メディア学部'

    if (nameIncludes(['学科']))
      return 'メディア学科'

    if (nameIncludes(['将来の目標']))
      return 'AIとメディアテクノロジーを融合させた革新的なサービスを開発し、人々の生活をより豊かにすることを目指しています。特に、高齢者や障がいを持つ方々のコミュニケーションを支援するAIシステムの開発に携わりたいと考えています。'

    if (nameIncludes(['目標までの過程']))
      return '1. 基礎的なプログラミングスキルの習得\n2. AIと機械学習の専門知識の獲得\n3. ユーザーインターフェース設計の学習\n4. 実践的なプロジェクトへの参加\n5. インターンシップでの実務経験\n6. 卒業研究でのプロトタイプ開発'

    if (nameIncludes(['経験level.1', 'きっかけ']))
      return '中学2年生の時、祖父が入院中にコミュニケーションの困難さを経験したことがきっかけです。医療スタッフとの意思疎通が難しい場面を目の当たりにし、テクノロジーで解決できないかと考え始めました。'

    if (nameIncludes(['経験level.2', '探求']))
      return '高校での情報処理部の活動を通じて、プログラミングの基礎を学び、簡単なコミュニケーション支援アプリの開発に挑戦しました。文化祭では、音声認識を使用した展示物を制作し、来場者から高い評価を得ることができました。'

    if (nameIncludes(['経験level.3', '成果']))
      return '開発したアプリケーションは地域の高齢者施設で試験的に導入され、実際のユーザーからフィードバックを得ることができました。この経験から、技術を通じて社会貢献することの重要性と、ユーザーニーズを理解することの大切さを学びました。'

    if (nameIncludes(['アドミッションポリシー']))
      return '貴学のアドミッションポリシーである「技術革新に貢献する創造力と、社会課題に取り組む探究心を持った人材の育成」に強く共感しています。特に、実践的な学びを重視する教育方針は、私の目指す方向性と合致しています。'

    if (nameIncludes(['教授', '情報']))
      return '山田教授の「AIと社会」に関する研究と、特に高齢者支援技術の開発に関する取り組みに強い関心を持っています。また、鈴木研究室で行われているユーザーインターフェースの研究にも興味があり、これらの研究室で学びたいと考えています。'

    if (nameIncludes(['カリキュラムポリシー']))
      return '1年次からプログラミングの基礎を学び、2年次以降は AI や機械学習を専門的に学べるカリキュラム構成に魅力を感じています。特に、3年次からの専門研究室配属制度は、早期から研究活動に携われる点で、私の学習意欲に合致しています。'

    if (nameIncludes(['文字数']))
      return '2000'

    if (nameIncludes(['設問文']))
      return '志望理由と、入学後にどのような学びを深めたいか、具体的に記述してください。'

    return ''
  }

  const onSetDemoValues = () => {
    const demoInputs: Record<string, any> = {}
    promptConfig.prompt_variables.forEach((item) => {
      demoInputs[item.key] = generateDemoValue(item.name)
    })
    onInputsChange(demoInputs)
  }

  const onClear = () => {
    const newInputs: Record<string, any> = {}
    promptConfig.prompt_variables.forEach((item) => {
      newInputs[item.key] = ''
    })
    onInputsChange(newInputs)
  }

  return (
    <div className="">
      <section>
        {/* input form */}
        <form>
          {promptConfig.prompt_variables.map(item => (
            <div className='w-full mt-4' key={item.key}>
              <label className='text-gray-900 text-sm font-medium flex items-center'>
                <span>{item.name}</span>
                {item.required && <span className='ml-1 text-red-500'>*必須</span>}
              </label>
              <div className='mt-2'>
                {item.type === 'select' && (
                  <Select
                    className='w-full'
                    defaultValue={inputs[item.key]}
                    onSelect={(i) => { onInputsChange({ ...inputs, [item.key]: i.value }) }}
                    items={(item.options || []).map(i => ({ name: i, value: i }))}
                    allowSearch={false}
                    bgClassName='bg-gray-50'
                  />
                )}
                {item.type === 'string' && (
                  <input
                    type="text"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                    placeholder={item.name}
                    value={inputs[item.key]}
                    onChange={(e) => { onInputsChange({ ...inputs, [item.key]: e.target.value }) }}
                    maxLength={item.max_length || DEFAULT_VALUE_MAX_LEN}
                  />
                )}
                {item.type === 'paragraph' && (
                  <textarea
                    className="block w-full h-[104px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                    placeholder={item.name}
                    value={inputs[item.key]}
                    onChange={(e) => { onInputsChange({ ...inputs, [item.key]: e.target.value }) }}
                  />
                )}
                {item.type === 'number' && (
                  <input
                    type="number"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                    placeholder={item.name}
                    value={inputs[item.key]}
                    onChange={(e) => { onInputsChange({ ...inputs, [item.key]: e.target.value }) }}
                  />
                )}
              </div>
            </div>
          ))}
          {
            visionConfig?.enabled && (
              <div className="w-full mt-4">
                <div className="text-gray-900 text-sm font-medium">{t('common.imageUploader.imageUpload')}</div>
                <div className='mt-2'>
                  <TextGenerationImageUploader
                    settings={visionConfig}
                    onFilesChange={files => onVisionFilesChange(files.filter(file => file.progress !== -1).map(fileItem => ({
                      type: 'image',
                      transfer_method: fileItem.type,
                      url: fileItem.url,
                      upload_file_id: fileItem.fileId,
                    })))}
                  />
                </div>
              </div>
            )
          }
          {promptConfig.prompt_variables.length > 0 && (
            <div className='mt-4 h-[1px] bg-gray-100'></div>
          )}
          <div className='w-full mt-4'>
            <div className="flex items-center justify-between">
              <Button
                className='!h-8 !p-3'
                onClick={onClear}
                disabled={false}
              >
                <span className='text-[13px]'>{t('common.operation.clear')}</span>
              </Button>
              <Button
                className='!h-8 !p-3'
                onClick={onSetDemoValues}
                disabled={false}
              >
                <span className='text-[13px]'>デモ値をセット</span>
              </Button>
              <Button
                type="primary"
                className='!h-8 !pl-3 !pr-4'
                onClick={onSend}
                disabled={false}
              >
                <PlayIcon className="shrink-0 w-4 h-4 mr-1" aria-hidden="true" />
                <span className='text-[13px]'>{t('app.generation.run')}</span>
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
export default React.memo(RunOnce)
