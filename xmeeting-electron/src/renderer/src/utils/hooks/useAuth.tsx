import { useEffect, useState } from "react"
import { localStorage, storageKey } from "../cache/storage"

const useAuth = () => {
  const [isLoading, setLoading] = useState(true)
  const [isAuthed, setAuthed] = useState(false)

  const checkAuth = async () => {
    try {
      setLoading(true)
      const token = localStorage.decryptAndGetCache<string>(storageKey.TOKEN)
      // TODO: 发送请求 判断是否有这个用户
      throw new Error('no login api')
      setAuthed(true)
    } catch (error) {
      setAuthed(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return {
    isLoading,
    isAuthed
  }
}

export default useAuth