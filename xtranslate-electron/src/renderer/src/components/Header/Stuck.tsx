import { FC, useRef } from 'react'
import NailSVG from '@renderer/assets/nail.svg'

const Stuck: FC = () => {
  const isStuck = useRef(false)
  return (
    <button
      aria-label="Stuck"
      className="no-drag cursor-pointer"
      onClick={() => {
        window.api.setAlwaysOnTop(isStuck.current)
        isStuck.current = !isStuck.current
      }}
    >
      <img
        className="fill-black"
        src={NailSVG}
        alt="nail"
        width={16}
        height={16}
        draggable={false}
      />
    </button>
  )
}

export default Stuck
