export const revalidate = 600

export default async function Product({ params }: Promise<{id: string}>) {
  const {id} = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/product/${id}`)
  const data = await res.json()
  return <div>{JSON.stringify(data)}
  </div>
}
