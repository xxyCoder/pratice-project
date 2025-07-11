import { FC } from 'react'
import { TranslateResult } from '../utils'
import Header from './Header'

const TranslateOutput: FC<TranslateResult> = ({ trans_result, from, type }) => {
  return (
    <div className="rounded-xl bg-gray-100 overflow-hidden">
      <Header from={from} type={type} />
      <div className="my-2 rounded-xl max-h-52 no-drag">
        {trans_result.map((item, idx) => {
          return <div key={idx}>{item}</div>
        })}
      </div>
    </div>
  )
}

export default TranslateOutput
