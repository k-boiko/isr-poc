export default async function Page(context: any) {
  const {params} = context;
  const symbols = Object.getOwnPropertySymbols(params);
  const kstoresymbol = symbols.find(s => s.toString().includes('kResourceStore'));
  let host = 'host';
  if (kstoresymbol) {
    const store = (params as any)[kstoresymbol];
    host = store?.url?.host;
  }
  console.log('ISR for /product is called');

  async function onClick() {
    'use server';
    const apiUrl = 'https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev';
    const res = await fetch(`${apiUrl}/api/product/1`);
    const data = await res.json();
    console.log('from server action', data);
  }
  return <div>
    <div><button onClick={onClick}>call server action</button></div>
  </div>
}
