export const revalidate = 600;

export default async function Page(context: any) {
  const {params} = context;
  const symbols = Object.getOwnPropertySymbols(params);
  const kstoresymbol = symbols.find(s => s.toString().includes('kResourceStore'));
  let host = 'host';
  if (kstoresymbol) {
    const store = (params as any)[kstoresymbol];
    host = store?.url?.host;
  }
  const a = {
    d1: new Intl.DisplayNames(`de`, { type: 'language'}).of('gsw') ,
    d: new Intl.DisplayNames(`deu`, { type: 'language'}).of('gsw') ,
    s: new Intl.DisplayNames(`gsw`, { type: 'language'}).of('gsw') ,
    e: new Intl.DisplayNames(`en`, { type: 'language'}).of('gsw') 
  };

  return (
    <div>
      <div>{JSON.stringify(a)}</div>
    </div>
  );
}
