'use server';

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = decodeURIComponent(searchParams.get("path") ?? '');
  console.log({path, url: request.url});
  try {
    // @ts-ignore
    await revalidatePath(path);
    return NextResponse.redirect(new URL(path, request.url))
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
