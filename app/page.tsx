import Image from "next/image";

export default function Home() {
  console.log('ISR for / is called');
  async function onClick() {
    'use server';
    const apiUrl = 'https://b6e33301-2517-4d30-ae96-98e9a71a7f0d-00-1tghupfuenc4c.kirk.replit.dev';
    const res = await fetch(`${apiUrl}/api/product/1`);
    const data = await res.json();
    console.log('from server action', data);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={onClick}>call server action</button>
    </div>
  );
}
