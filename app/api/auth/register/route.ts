import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { supabase } from '@/lib/db'
import { signToken } from '@/lib/jwt'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    console.log('[v0] Register attempt:', { email, hasPassword: !!password })

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const { data: existingUsers, error: checkError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)

    console.log('[v0] Existing users check:', existingUsers?.length || 0)

    if (checkError) {
      console.error('[v0] Database check error:', checkError)
      return NextResponse.json(
        { error: 'Database error: ' + checkError.message },
        { status: 500 }
      )
    }

    if (existingUsers && existingUsers.length > 0) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert({
        name: name || null,
        email,
        password: hashedPassword,
      })
      .select('id, email, name, created_at')
      .single()

    if (insertError) {
      console.error('[v0] Database insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to create user: ' + insertError.message },
        { status: 500 }
      )
    }

    console.log('[v0] User created:', { id: newUser.id, email: newUser.email })

    // Generate JWT token
    const token = await signToken({ userId: newUser.id, email: newUser.email })

    // Create response with cookie
    const response = NextResponse.json(
      { 
        success: true, 
        user: { id: newUser.id, email: newUser.email, name: newUser.name } 
      },
      { status: 201 }
    )

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('[v0] Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
