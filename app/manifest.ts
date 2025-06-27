import { headers } from 'next/headers';
export default async function manifest(context: any) {
    const host = (await headers()).get('host');
    console.log({host, context});
    if (!host) {
        return {};
    }
    console.log({context});
    return {};
}