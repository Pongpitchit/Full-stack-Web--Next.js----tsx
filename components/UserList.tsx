"use client"
import { useState, useEffect } from "react"

export default function UserList() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    setLoading(true)
    let url = `https://www.melivecode.com/api/users`
    if (query) url = `${url}?search=${encodeURIComponent(query)}`
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json)
        setLoading(false)
      })
  }, [query])

  const handleDelete = async (id) => {
    if (!confirm(`Delete User ID: ${id}`)) return
    const res = await fetch(`https://melivecode.com/api/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    if (res.ok && data.status === "ok") {
      alert(`User with ID ${id} deleted.`)
      window.location.href = "/users"
    } else {
      alert(data.message)
    }
  }

  if (loading) return <div className="text-center text-[#1B5E20] text-xl py-12">Loading users...</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5FFF5] to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-lg border-2 border-[#A5D6A7] bg-white px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
          />
          <button
            onClick={() => setQuery(search)}
            className="bg-[#008000] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1B5E20] hover:shadow-[0_10px_25px_-10px_rgba(165,214,167,0.7)] transition-all duration-300"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((u) => (
            <div
              key={u.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-[0_10px_25px_-10px_rgba(165,214,167,0.7)] transition-all duration-300 hover:scale-105 border border-[#A5D6A7] p-6 text-center"
            >
              <img
                src={u.avatar || "/placeholder.svg"}
                alt={u.fname}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#A5D6A7] object-cover"
              />
              <h3 className="mb-2 text-xl font-semibold text-[#1B5E20]">
                {u.fname} {u.lname}
              </h3>
              <p className="text-[#1B5E20]/70 mb-2">@{u.username}</p>
              <p className="text-[#1B5E20]/70 mb-6 text-sm">{u.email}</p>

              <div className="flex flex-col gap-2">
                <a
                  href={`/users/${u.id}`}
                  className="bg-[#A5D6A7] text-[#1B5E20] font-semibold py-2 px-4 rounded-lg hover:bg-[#008000] hover:text-white transition-all duration-300"
                >
                  View
                </a>
                <a
                  href={`/users/${u.id}/edit`}
                  className="bg-[#008000] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1B5E20] transition-all duration-300"
                >
                  Edit
                </a>
                <button
                  onClick={() => handleDelete(u.id)}
                  className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
