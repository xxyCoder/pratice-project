import Link from "next/link"

export default function Home() {
	return (
		<div>
			<h1>hello</h1>
			<Link href="/server">to server</Link>
			<Link href="/users/1">to user 1</Link>
		</div>
	)
}
