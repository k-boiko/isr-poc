export async function GET(request: Request) {
    const host = request.headers.get('host');
    return Response.json({
        host
    });
}
