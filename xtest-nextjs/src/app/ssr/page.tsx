export const dynamic = "force-dynamic"

export default function SSRPage() {
  console.log('SSR!')
	return <div>SSR: {Date.now()}</div>
}
