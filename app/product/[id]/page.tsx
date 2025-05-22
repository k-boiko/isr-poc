
export const revalidate = 600;

export async function generateStaticParams() {
  return []
}

export default async function Product(ars: { params: Promise<{id: string}>}, ...ars2: any[]) {
  const { params } = ars;
  console.log({ars});
  const symbols = Object.getOwnPropertySymbols(ars);
  const kstoresymbol = symbols.find(s => s.toString().includes('kResourceStore'));
  console.log({kstoresymbol});
  console.log({symbols});
  if (kstoresymbol) {
    const store = (ars as any)[kstoresymbol];
    console.log({store});
  }
  console.log({ars2});
  const {id} = await params;
  const {host} = await (await fetch('https://isr-poc-alpha.vercel.app/api/host')).json();
  const res = await fetch(`https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev/api/product/${id}?host=${host}`);
  const data = await res.json();
  return <div>{JSON.stringify(data)}
  </div>
}
