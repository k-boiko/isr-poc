
export const revalidate = 600;

export async function generateStaticParams() {
  return []
}

export default async function Product({ params }: { params: Promise<{id: string}>}) {
  const {id} = await params;
  const host = await (await fetch('https://isr-poc-alpha.vercel.app/api/host')).json();
  const res = await fetch(`https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev/api/product/${id}?host=${host}`);
  const data = await res.json();
  return <div>{JSON.stringify(data)}
  </div>
}
