import useAuth from "@renderer/utils/hooks/useAuth";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginLayout: FC = () => {
  const { isAuthed, isLoading } = useAuth()
  if (isLoading) {
    return <div>Loading...</div>
  }

  return isAuthed ? <Outlet /> : <Navigate to="/login" />
}

export default LoginLayout