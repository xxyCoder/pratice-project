import { FC, Fragment } from 'react'
import { TranslateResult } from '../utils.js'
import Header from './Header.js'
import CopyButton from '@renderer/components/common/button/CopyButton.js'

const TranslateOutput: FC<TranslateResult> = ({ trans_result, from, type }) => {
  return (
    <div className="rounded-sm bg-gray-100 overflow-hidden">
      <Header from={from} type={type} />
      <div className="relative my-2 px-2 pt-2 rounded-xl no-drag">
        {trans_result.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <div className="hyphens-auto max-h-52 overflow-auto">{item}</div>
              <CopyButton className="mt-2" copyText={item} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default TranslateOutput
