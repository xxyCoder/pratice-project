import { Language } from '@renderer/constants'
import { useState } from 'react'
import SwitchLanguage from './SwitchLanguage'
import SwitchSVG from '@renderer/assets/switch.svg'

interface UseAutoDetectionProps {
  className?: string
}

const useAutoDetection = ({ className = '' }: UseAutoDetectionProps = {}) => {
  const [fromLanguage, setFromLanguage] = useState<Language>('auto')
  const [toLanguage, setToLanguage] = useState<Language>('en')

  const switchLanguageNode = (
    <div className={`flex items-center rounded-xl bg-gray-100 justify-center no-drag ${className}`}>
      <SwitchLanguage
        language={fromLanguage}
        updateLanguage={setFromLanguage}
        className="basis-1/2"
      />
      <img
        src={SwitchSVG}
        alt="switch"
        width={16}
        height={16}
        className="cursor-pointer"
        onClick={() => {
          setToLanguage(fromLanguage)
          setFromLanguage(toLanguage)
        }}
      />
      <SwitchLanguage className="basis-1/2" language={toLanguage} updateLanguage={setToLanguage} />
    </div>
  )

  return {
    switchLanguageNode,
    fromLanguage,
    toLanguage
  }
}

export default useAutoDetection
