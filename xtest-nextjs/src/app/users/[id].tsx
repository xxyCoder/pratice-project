export default async function User({params}: {params: Promise<{id: string}>}) {
	const {id} = await params
	return <h1>hello user {id}</h1>
}
