import { FC, useState } from 'react'
import { Language, LANGUAGE_MAP, Languages } from '@renderer/constants'
import DropdwonSVG from '@renderer/assets/dropdown.svg'

const SwitchLanguage: FC<{
  language: Language
  updateLanguage: (language: Language) => void
  className?: string
}> = ({ language, updateLanguage, className }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className={`relative cursor-pointer ${className}`}>
      <button
        className="rounded-sm cursor-pointer w-full py-1 flex items-center justify-center gap-x-1 text-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        {LANGUAGE_MAP[language]}
        <img
          src={DropdwonSVG}
          alt="dropdwon"
          className={`transition-all ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          width={16}
          height={16}
        />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute left-0 right-0 mt-1 rounded-sm bg-white shadow-xl text-center overflow-auto max-h-52 ${isOpen ? 'block' : 'hidden'}`}
      >
        {Languages.filter((lang) => lang !== language).map((lang) => (
          <div
            key={lang}
            className="my-1"
            onClick={() => {
              updateLanguage(lang)
              setOpen(false)
            }}
          >
            {LANGUAGE_MAP[lang]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SwitchLanguage
