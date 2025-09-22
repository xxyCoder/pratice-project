import {FC} from "react"

const ServerWithProps: FC<{greeting: string}> = ({greeting}) => {
	return <div>Server with props:{greeting}</div>
}

export default ServerWithProps
