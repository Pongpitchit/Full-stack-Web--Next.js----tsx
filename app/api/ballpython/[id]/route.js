export async function GET(request, { params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/ball_pythons?id=eq.${id}&select=*`,
    {
      headers: {
        apikey: process.env.SUPABASE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
      },
    }
  );

  const data = await res.json();
  return Response.json(data[0] || null);
}
