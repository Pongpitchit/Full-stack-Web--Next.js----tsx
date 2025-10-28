"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

export default function UserDetailPage() {
  const params = useParams()
  const id = params?.id?.toString()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    fetch(`https://melivecode.com/api/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json.user)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="text-center text-[#1B5E20] text-xl py-12">Loading user...</div>

  if (!user) return <div className="text-center text-[#1B5E20] text-xl py-12">User not found</div>

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-[#008000] to-[#1B5E20] text-white py-16 px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">User Details</h1>
          <p className="text-xl text-white/90">View user information</p>
          <div className="mt-6 flex gap-3">
            <a
              href="/users"
              className="inline-block bg-white text-[#008000] font-semibold px-6 py-3 rounded-lg hover:bg-[#F5FFF5] transition-all duration-300"
            >
              ← Back to Users
            </a>
            <a
              href={`/users/${id}/edit`}
              className="inline-block bg-[#A5D6A7] text-[#1B5E20] font-semibold px-6 py-3 rounded-lg hover:bg-white transition-all duration-300"
            >
              Edit User
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-[#A5D6A7] p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.fname}
              className="w-32 h-32 rounded-full border-4 border-[#A5D6A7] object-cover mb-4"
            />
            <h2 className="text-3xl font-bold text-[#1B5E20] mb-2">
              {user.fname} {user.lname}
            </h2>
            <p className="text-xl text-[#1B5E20]/70">@{user.username}</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-2 p-4 bg-[#F5FFF5] rounded-lg">
              <span className="text-sm font-semibold text-[#1B5E20]/70">Email</span>
              <span className="text-lg text-[#1B5E20]">{user.email}</span>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-[#F5FFF5] rounded-lg">
              <span className="text-sm font-semibold text-[#1B5E20]/70">User ID</span>
              <span className="text-lg text-[#1B5E20]">{user.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
