import ClientComp from "@/components/ClientComp"
import ServerComp from "@/components/ServerComp"
import ServerWithProps from "@/components/ServerWithProps"
import {FC} from "react"

const Server: FC = () => {
	return (
		<div>
			<h1>Server pages</h1>
			<ServerComp />
			<ClientComp />
			<ServerWithProps greeting="wooo" />
		</div>
	)
}

export default Server
