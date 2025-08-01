
import Link from 'next/link';

export default async function Product({ params }: { params: Promise<{id: string}>}) {
  const symbols = Object.getOwnPropertySymbols(params);
  const kstoresymbol = symbols.find(s => s.toString().includes('kResourceStore'));
  let host = 'host';
  if (kstoresymbol) {
    const store = (params as any)[kstoresymbol];
    host = store.url.host;
  }
  const {id} = await params;
  const apiUrl = 'https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev';
  const res = await fetch(`${apiUrl}/api/product/${id}?host=${host}`, {
      // @ts-expect-error: next is Next.js-specific
      next: {
        revalidate: 24 * 60 * 60
      }
    });
  const data = await res.json();
  return <div>
    <div>{JSON.stringify(data)}</div>
    <div><Link href={`/api/invalidate?path=${encodeURIComponent(`/product/${id}`)}`} prefetch={false}>invalidate cache of this page</Link></div>
  </div>
}
