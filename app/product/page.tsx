export const revalidate = 600;

export default async function Page() {
  const res = await fetch(`https://your-api.com/api/product/1`);
  const data = await res.json();

  return (
    <div>
      <h1>{data.msg}</h1>
      <div>Domain: {data.domain}</div>
      <div>Time: {data.time}</div>
    </div>
  );
}
