"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function UserForm() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("https://www.melivecode.com/api/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (res.ok && data.status === "ok") {
        alert("User created successfully!")
        router.push("/users")
      } else {
        alert(data.message || "Failed to create user")
      }
    } catch (err) {
      console.error("❌ Error creating user:", err)
      alert("Error creating user. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5FFF5] to-white py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-[#A5D6A7] p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h2 className="text-center mb-6 text-3xl font-bold text-[#1B5E20]">Create New User</h2>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">First Name</label>
            <input
              name="fname"
              type="text"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Last Name</label>
            <input
              name="lname"
              type="text"
              placeholder="Last Name"
              value={formData.lname}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#1B5E20]">Avatar URL</label>
            <input
              name="avatar"
              type="text"
              placeholder="Avatar URL"
              value={formData.avatar}
              onChange={handleChange}
              className="w-full rounded-lg border-2 border-[#A5D6A7] bg-[#F5FFF5] px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#008000] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1B5E20] hover:shadow-[0_10px_25px_-10px_rgba(165,214,167,0.7)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create User"}
          </button>
        </form>
      </div>
    </div>
  )
}
