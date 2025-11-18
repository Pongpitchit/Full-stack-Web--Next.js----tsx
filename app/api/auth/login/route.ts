import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { supabase } from '@/lib/db'
import { signToken } from '@/lib/jwt'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    console.log('[v0] Login attempt:', { email })

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const { data: users, error: fetchError } = await supabase
      .from('users')
      .select('id, email, name, password')
      .eq('email', email)

    if (fetchError) {
      console.error('[v0] Database fetch error:', fetchError)
      return NextResponse.json(
        { error: 'Database error: ' + fetchError.message },
        { status: 500 }
      )
    }

    console.log('[v0] User found:', users && users.length > 0)

    if (!users || users.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const user = users[0]

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password)

    console.log('[v0] Password valid:', isValidPassword)

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate JWT token
    const token = await signToken({ userId: user.id, email: user.email })

    // Create response with cookie
    const response = NextResponse.json(
      { 
        success: true, 
        user: { id: user.id, email: user.email, name: user.name } 
      },
      { status: 200 }
    )

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('[v0] Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
