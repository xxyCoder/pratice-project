export default async function User({params}: PageProps<"/users/[id]">) {
	const {id} = await params
	return <h1>hello user {id}</h1>
}
