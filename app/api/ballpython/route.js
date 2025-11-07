export async function GET() {
    const res = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/ball_pythons?select=*`,
      {
        headers: {
          apikey: process.env.SUPABASE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
        },
      }
    );
  
    const data = await res.json();
    return Response.json(data);
  }
  