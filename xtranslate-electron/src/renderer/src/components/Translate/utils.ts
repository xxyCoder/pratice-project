import { BaiduTranslateResponse } from '@renderer/api'

export interface TranslateResult {
  type: TranslateType
  from: string
  trans_result: string[]
}

export const handleBaiduTranslateData = (data: BaiduTranslateResponse['data']): TranslateResult => {
  return {
    type: 'baidu',
    from: data?.from,
    trans_result: data?.trans_result?.map((item) => item.dst) ?? []
  }
}
