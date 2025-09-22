export default async function User({params}: {params: Promise<{id: string}>}) {
	const {id} = await params
	return (
		<div style={{ padding: '20px' }}>
			<h1>hello user {id}</h1>
			<p>This is user page for ID: {id}</p>
		</div>
	)
}
