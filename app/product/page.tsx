export const revalidate = 600;

export default async function Page() {
  const res = await fetch(`https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev/api/product/1`);
  const data = await res.json();

  return (
    <div>
      <h1>{data.msg}</h1>
      <div>Domain: {data.domain}</div>
      <div>Time: {data.time}</div>
    </div>
  );
}
