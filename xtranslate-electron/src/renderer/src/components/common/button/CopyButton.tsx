import { FC } from 'react'
import copy from 'copy-to-clipboard'
import CopySVG from '@renderer/assets/copy.svg'

const CopyButton: FC<{ copyText: string; className?: string }> = ({ copyText, className = '' }) => {
  return (
    <button
      className={`no-drag cursor-pointer ${className}`}
      aria-label="copy"
      onClick={() => copy(copyText)}
    >
      {<img alt="copy" width={25} height={25} draggable={false} src={CopySVG} />}
    </button>
  )
}

export default CopyButton
