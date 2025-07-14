import { FC } from 'react'
import { TranslateResult } from '../utils.js'
import Header from './Header.js'

const TranslateOutput: FC<TranslateResult> = ({ trans_result, from, type }) => {
  return (
    <div className="rounded-sm bg-gray-100 overflow-hidden">
      <Header from={from} type={type} />
      <div className="my-2 p-2 rounded-xl max-h-52 no-drag">
        {trans_result.map((item, idx) => {
          return <div key={idx}>{decodeURIComponent(decodeURIComponent(item))}</div>
        })}
      </div>
    </div>
  )
}

export default TranslateOutput
