export async function POST(request) {
  const data = await request.json();
  return Response.json({ data });
}

export async function GET(request) {
  const data = {
    name: "siyam",
    email: "ssiyam563@gmail.com",
  };

  return Response.json({ data });
}
