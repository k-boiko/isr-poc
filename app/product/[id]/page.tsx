
import Link from 'next/link';

export const revalidate = 10000;
export const dynamic = 'force-static';
export const getStaticParams() {
  return [];
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
  console.log('ISR for product/[id] is called');

  async function onClick() {
    'use server';
    const apiUrl = 'https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev';
    const res = await fetch(`${apiUrl}/api/product/${id}`);
    const data = await res.json();
    console.log('from server action', data);
  }
  return <div>
    <div><button onClick={onClick}>call server action</button></div>
  </div>
}
