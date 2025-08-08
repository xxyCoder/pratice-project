import { FC } from "react";

const ErrorBoundary: FC = () => {
  return <div className="h-full flex w-full items-center justify-center">
    <button className="border-none" onClick={() => location.reload()}>Reload</button>
  </div>
}

export default ErrorBoundary