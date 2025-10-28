"use client"
import { useState, useEffect } from "react"

export default function UserEditForm({ id }) {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    avatar: "",
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://melivecode.com/api/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setForm(json.user)
        setLoading(false)
      })
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`https://melivecode.com/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (res.ok && data.status === "ok") {
      alert("User updated.")
      window.location.href = "/users"
    } else {
      alert(data.message)
    }
  }

  if (loading) return <div className="text-center text-[#1B5E20] text-xl py-12">Loading user data...</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5FFF5] to-white py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-[#A5D6A7] p-8">
        <h1 className="text-center mb-8 text-3xl font-bold text-[#1B5E20]">Edit User: {id}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">First Name</label>
            <input
              name="fname"
              value={form.fname}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Last Name</label>
            <input
              name="lname"
              value={form.lname}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              placeholder="Username"
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Avatar URL</label>
            <input
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              type="text"
              placeholder="Avatar URL"
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#008000] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1B5E20] hover:shadow-[0_10px_25px_-10px_rgba(165,214,167,0.7)] transition-all duration-300"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  )
}
