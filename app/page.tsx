import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getUser } from '@/lib/auth'

export default async function HomePage() {
  const user = await getUser()

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            Welcome to Your App
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            A modern authentication system with JWT tokens and secure user management
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {user ? (
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="/login">Sign in</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link href="/register">Create account</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
