interface BaiduTranslateParams {
  q: string
  from: string
  to: string
}
export interface BaiduTranslateResponse {
  code: number
  data: {
    from: string
    to: string
    trans_result: {
      src: string
      dst: string
    }[]
  }
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const baiduTranslate = async ({
  q,
  from,
  to
}: BaiduTranslateParams): Promise<BaiduTranslateResponse> => {
  const encodedData = new URLSearchParams({ q, from, to })
  return await fetch(`${BACKEND_URL}/baidu/translate`, {
    method: 'POST',
    body: encodedData
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Failed to translate')
    })
    .catch((err) => {
      console.log('url: /baidu/translate err', err)
    })
}
