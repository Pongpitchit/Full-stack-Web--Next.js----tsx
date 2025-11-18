import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'
import { supabase } from '@/lib/db'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LogoutButton } from '@/components/LogoutButton'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function DashboardPage() {
  const payload = await getUser()

  if (!payload) {
    redirect('/login')
  }

  const { data: user, error } = await supabase
    .from('users')
    .select('id, email, name, created_at')
    .eq('id', payload.userId)
    .single()

  if (error) {
    console.error('[v0] Dashboard user fetch error:', error)
    redirect('/login')
  }

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4">
      <div className="max-w-4xl mx-auto py-12 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-balance w-full ">User Stats</h1>
            <p className="text-muted-foreground mt-2">Welcome back, {user.name || 'User'}!</p>
          </div>

          <div className="flex items-center justify-end gap-10 w-full bg-white/10 rounded-lg p-2">
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>

          <LogoutButton />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Name:</span>
                <p className="text-base">{user.name || 'Not provided'}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Email:</span>
                <p className="text-base">{user.email}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Member since:</span>
                <p className="text-base">{new Date(user.created_at).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Your activity overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Account Status</span>
                <span className="text-sm px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">User ID</span>
                <span className="text-sm text-muted-foreground">#{user.id}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
