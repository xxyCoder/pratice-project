import { FC } from 'react'
import Stuck from './Stuck'

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Stuck />
      <div></div>
    </div>
  )
}

export default Header
