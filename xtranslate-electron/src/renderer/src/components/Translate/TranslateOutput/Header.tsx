import { FC } from 'react'
import { TranslateResult } from '../utils.js'
import { LANGUAGE_MAP } from '@renderer/constants/language.js'

const TRANSLATE_TYPE_MAP: Record<TranslateType, string> = {
  baidu: '百度翻译',
  tencent: '腾讯翻译'
}

const Header: FC<Omit<TranslateResult, 'trans_result'>> = ({ from, type }) => {
  return (
    <h2 className="p-2 text-sm bg-gray-500 text-white">
      {TRANSLATE_TYPE_MAP[type]}
      {from === 'auto' && <>&nbsp;检测为&nbsp;{LANGUAGE_MAP[from] ?? from}</>}
    </h2>
  )
}

export default Header
