"use client"

import {FC} from "react"

const ClientComp: FC = () => {
	console.log("Client component.")
	return (
		<div onClick={() => console.log("ck client component")}>
			Client component
		</div>
	)
}

export default ClientComp
