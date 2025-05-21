export const revalidate = 600;
export const dynamicParams = true;
export async function generateStaticParams() {
  return [{
    id: 1
  }]
}

export default async function Product({ params }: { params: Promise<{id: string}>}) {
  const {id} = await params;
  const res = await fetch(`https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev/api/product/${id}`)
  const data = await res.json()
  return <div>{JSON.stringify(data)}
  </div>
}
