
import Link from 'next/link';

export const revalidate = 600;

export async function generateStaticParams() {
  return []
}

export default async function Product({ params }: { params: Promise<{id: string}>}) {
  const symbols = Object.getOwnPropertySymbols(params);
  const kstoresymbol = symbols.find(s => s.toString().includes('kResourceStore'));
  let host = 'host';
  if (kstoresymbol) {
    const store = (params as any)[kstoresymbol];
    host = store.url.host;
  }
  const {id} = await params;
  const data = {test:1};
  return <div>
    <div>{JSON.stringify(data)}</div>
    <div><Link href={`/api/invalidate?path=${encodeURIComponent(`/product/${id}`)}`} prefetch={false}>invalidate cache of this page</Link></div>
  </div>
}
