import { FC } from 'react'

const Login: FC = () => {
  return <>
    <h1 className='text-center font-bold text-2xl mb-10'>Login</h1>
    <form className='flex flex-col items-center gap-y-5'>
      <div className='flex items-center gap-x-2'>
        <label htmlFor="username" className='text-xl'>username:</label>
        <input type="text" id='username' className='border-1 rounded-sm px-2 py-1'/>
      </div>
      <div className='flex items-center gap-x-2'>
        <label htmlFor="password" className='text-xl'>password:</label>
        <input type="password" id='password' className='border-1 rounded-sm px-2 py-1'/>
      </div>
      <button className='border-1 px-4 rounded-sm cursor-pointer'>login</button>
    </form>
  </>
}

export default Login