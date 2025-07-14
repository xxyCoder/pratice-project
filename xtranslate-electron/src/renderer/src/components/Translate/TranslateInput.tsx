import { baiduTranslate } from '@renderer/api'
import { useState } from 'react'
import CopyButton from '../common/button/CopyButton'
import { handleBaiduTranslateData, TranslateResult } from './utils'

interface Props {
  fromLanguage?: string
  toLanguage?: string
  className?: string
}

const MAX_INPUT_LENGTH = 2000

const useTranslateInput = ({
  fromLanguage = 'en',
  toLanguage = 'zh',
  className = ''
}: Props = {}) => {
  const [sourceTxt, setSourceTxt] = useState('')
  const [translateResult, setTranslateResult] = useState<TranslateResult[]>([])

  const cleanInputTxt = () => {
    setSourceTxt('')
  }
  const handleKeydown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (e.altKey || e.ctrlKey) {
        setSourceTxt(sourceTxt + '\n')
        return
      }
      const [baiduReqResult] = await Promise.allSettled([
        baiduTranslate({
          q: sourceTxt,
          from: fromLanguage,
          to: toLanguage
        })
      ])

      const translateResult: TranslateResult[] = []
      if (baiduReqResult.status === 'fulfilled') {
        translateResult.push(handleBaiduTranslateData(baiduReqResult.value.data))
      }

      setTranslateResult(translateResult)
    }
  }

  const translateInput = (
    <div
      className={`relative my-2 p-2 rounded-xl bg-gray-100 h-40 no-drag flex flex-col ${className}`}
    >
      <textarea
        value={sourceTxt}
        onChange={(e) => setSourceTxt(e.target.value)}
        className="m-0 w-full flex-1 resize-none border-none"
        placeholder="请输入待翻译的内容，Enter翻译，Alt|Ctrl + Enter换行"
        onKeyDown={handleKeydown}
        maxLength={MAX_INPUT_LENGTH}
      />
      <div className="flex items-center justify-between">
        <CopyButton copyText={sourceTxt} />
        <span className="text-sm text-gray-500">
          {sourceTxt.length}&nbsp;/&nbsp;{MAX_INPUT_LENGTH}
        </span>
      </div>
    </div>
  )

  return {
    translateInput,
    cleanInputTxt,
    sourceTxt,
    translateResult
  }
}

export default useTranslateInput
