import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") ?? '';
  try {
    // @ts-ignore
    await (NextResponse as any).revalidate(path);
    return NextResponse.redirect(new URL(path, request.url))
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
