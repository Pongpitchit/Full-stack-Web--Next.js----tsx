"use client"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"

export default function AttractionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [attraction, setAttraction] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAttraction = async () => {
      try {
        const res = await fetch(`/api/attractions/${params.id}`)
        if (!res.ok) {
          if (res.status === 404) {
            setError("Attraction not found")
            setAttraction(null)
            return
          }
          throw new Error("Failed to fetch attraction")
        }
        const data = await res.json()
        setAttraction(data)
      } catch (err) {
        console.error("[v0] Error fetching attraction:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchAttraction()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5FFF5] to-[#E8F5E9] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#008000] border-r-transparent mb-4"></div>
          <p className="text-xl text-[#1B5E20] font-semibold">Loading attraction details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5FFF5] to-[#E8F5E9] flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg border-2 border-red-300 max-w-md">
          <p className="text-xl text-red-600 font-semibold mb-4">Error: {error}</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/attractions"
              className="px-6 py-3 bg-[#008000] hover:bg-[#006400] text-white rounded-lg font-semibold transition-all duration-300"
            >
              Back to List
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#1B5E20] hover:bg-[#2E7D32] text-white rounded-lg font-semibold transition-all duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!attraction) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5FFF5] to-[#E8F5E9]">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">DIT205 CRUD Web</h1>
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/"
              className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/attractions"
              className="px-3 py-2 md:px-4 text-sm md:text-base bg-[#008000] hover:bg-[#006400] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Attractions
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#A5D6A7] text-[#1B5E20] rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Attraction Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={attraction.coverimage || "/placeholder.svg?height=400&width=800"}
                alt={attraction.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/[0.02]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
                  {attraction.name}
                </h1>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1B5E20] mb-3 tracking-wide">Description</h2>
                <p className="text-[#2E7D32] text-lg leading-relaxed">
                  {attraction.detail || "No description available"}
                </p>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t-2 border-[#A5D6A7]">
                <div className="bg-gradient-to-br from-[#F5FFF5] to-[#E8F5E9] p-4 rounded-lg">
                  <p className="text-sm text-[#1B5E20] font-semibold mb-1">Attraction ID</p>
                  <p className="text-lg text-[#2E7D32] font-bold">#{attraction.id}</p>
                </div>
                <div className="bg-gradient-to-br from-[#F5FFF5] to-[#E8F5E9] p-4 rounded-lg">
                  <p className="text-sm text-[#1B5E20] font-semibold mb-1">Status</p>
                  <p className="text-lg text-[#008000] font-bold">Active</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/attractions"
                  className="flex-1 px-6 py-3 bg-[#008000] hover:bg-[#006400] text-white rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View All Attractions
                </Link>
                <button
                  onClick={() => router.back()}
                  className="flex-1 px-6 py-3 bg-white hover:bg-[#A5D6A7] text-[#1B5E20] border-2 border-[#008000] rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
