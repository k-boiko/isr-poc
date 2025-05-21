export const revalidate = 600

export default async function Product({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/product/${params.id}`)
  const data = await res.json()
  return <div>
    <h1>Product {params.id}</h1>
    <div>Content: {data.time}</div>
    <div>Domain: {data.domain}</div>
  </div>
}
