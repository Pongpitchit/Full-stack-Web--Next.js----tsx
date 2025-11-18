import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { supabase } from '@/lib/db'

export async function GET() {
  try {
    const payload = await getUser()

    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { data: users, error: fetchError } = await supabase
      .from('users')
      .select('id, email, name, created_at')
      .eq('id', payload.userId)

    if (fetchError) {
      console.error('[v0] Database fetch error:', fetchError)
      return NextResponse.json(
        { error: 'Database error: ' + fetchError.message },
        { status: 500 }
      )
    }

    if (!users || users.length === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const user = users[0]

    return NextResponse.json({ 
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.created_at
      }
    })
  } catch (error) {
    console.error('[v0] Get user error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
