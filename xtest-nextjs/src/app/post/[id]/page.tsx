interface POSTType {
	id: number
	title: string
	body: string
}

export async function generateStaticParams() {
	// 1) 构建期拉取所有可用的 ID
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		// 保证构建期可缓存
		cache: "force-cache",
	})
	const posts: POSTType[] = await res.json()

	return posts.map((post) => ({id: String(post.id)}))
}

export const dynamicParams = false // 需要 fallback 行为时改为 true

export default async function Page({params}: {params: {id: string}}) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	)

	const post = await res.json()

	return (
		<main>
			<h1>{post.title}</h1>
			<article>{post.content}</article>
		</main>
	)
}
