export const revalidate = 600;

export default async function Page(context: any) {
  const {params} = context;
  console.log({context});
  console.log({params});
  const symbols = Object.getOwnPropertySymbols(params);
  const kstoresymbol = symbols.find(s => s.toString().includes('kResourceStore'));
  let host = 'host';
  if (kstoresymbol) {
    const store = (params as any)[kstoresymbol];
    host = store.url.host;
  }
  const res = await fetch(`https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev/api/product/1?host=${host}`);
  const data = await res.json();

  return (
    <div>
      <h1>{data.msg}</h1>
      <div>Domain: {data.domain}</div>
      <div>Time: {data.time}</div>
    </div>
  );
}
