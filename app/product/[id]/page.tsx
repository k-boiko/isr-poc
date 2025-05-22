
export const revalidate = 600;

export async function generateStaticParams() {
  return []
}

export default async function Product({ params }: { params: Promise<{id: string}>}) {
  const paramsResolved = await params;
  console.log(paramsResolved);
  const symbolsResolved = Object.getOwnPropertySymbols(paramsResolved);
  const symbols = Object.getOwnPropertySymbols(params);
  const kstoresymbol = symbols.find(s => s.toString().includes('kResourceStore'));
  const kstoresymbolResolvied = symbolsResolved.find(s => s.toString().includes('kResourceStore'));
  console.log({kstoresymbol, kstoresymbolResolvied});
  console.log({symbols, l: symbols.length});
  console.log({symbolsResolved, l: symbolsResolved.length});
  if (kstoresymbol) {
    const store = (params as any)[kstoresymbol];
    console.log({store});
  }
  const {id} = paramsResolved;
  const {host} = await (await fetch('https://isr-poc-alpha.vercel.app/api/host')).json();
  const res = await fetch(`https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev/api/product/${id}?host=${host}`);
  const data = await res.json();
  return <div>{JSON.stringify(data)}
  </div>
}
