import { FC } from 'react'
import { TranslateResult } from '../utils'

const TRANSLATE_TYPE_MAP: Record<TranslateType, string> = {
  baidu: '百度翻译',
  tencent: '腾讯翻译'
}

const TRANSLATE_FROM_MAP: Record<string, string> = {
  en: '英文',
  zh: '中文'
}

const Header: FC<Omit<TranslateResult, 'trans_result'>> = ({ from, type }) => {
  return (
    <h2 className="p-1 text-sm bg-gray-500 text-white">
      {TRANSLATE_TYPE_MAP[type]}&nbsp;检测为&nbsp;{TRANSLATE_FROM_MAP[from] ?? from}
    </h2>
  )
}

export default Header
