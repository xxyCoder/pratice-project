import { BaiduTranslateResponse } from '@renderer/api'
import { Language } from '@renderer/constants'

export interface TranslateResult {
  type: TranslateType
  from: Language
  trans_result: string[]
}

export const handleBaiduTranslateData = (data: BaiduTranslateResponse['data']): TranslateResult => {
  console.log(data)
  return {
    type: 'baidu',
    from: data?.from as Language,
    trans_result: data?.trans_result?.map((item) => item.dst) ?? []
  }
}
