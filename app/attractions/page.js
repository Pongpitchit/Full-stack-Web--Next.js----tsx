"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function AttractionsPage() {
  const [attractions, setAttractions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const res = await fetch("/api/attractions")
        if (!res.ok) throw new Error("Failed to fetch attractions")
        const data = await res.json()
        setAttractions(data)
      } catch (err) {
        console.error("[v0] Error fetching attractions:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAttractions()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5FFF5] to-[#E8F5E9] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#008000] border-r-transparent mb-4"></div>
          <p className="text-xl text-[#1B5E20] font-semibold">Loading attractions...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5FFF5] to-[#E8F5E9] flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg border-2 border-red-300">
          <p className="text-xl text-red-600 font-semibold mb-4">Error: {error}</p>
          <p className="text-[#1B5E20] mb-4">Please check your MySQL connection settings</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#008000] hover:bg-[#006400] text-white rounded-lg font-semibold transition-all duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5FFF5] to-[#E8F5E9]">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">DIT205 CRUD Web</h1>
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto">
            <Link
              href="/"
              className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              href="/attractions"
              className="px-3 py-2 md:px-4 text-sm md:text-base bg-[#008000] hover:bg-[#006400] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Attractions
            </Link>
            <Link
              href="/users"
              className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Users
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4 tracking-wide">Attractions</h2>
          <p className="text-lg md:text-xl text-[#2E7D32] font-semibold leading-relaxed">
            Explore amazing destinations from our MySQL database
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          {attractions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <p className="text-xl text-[#1B5E20] font-semibold">No attractions found in database</p>
              <p className="text-[#2E7D32] mt-2">Please run the setup SQL script to create sample data</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {attractions.map((attraction) => (
                <Link key={attraction.id} href={`/attractions/${attraction.id}`}>
                  <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#A5D6A7]/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-white h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={attraction.coverimage || "/placeholder.svg?height=200&width=400"}
                        alt={attraction.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-white/[0.02]" />
                    </div>

                    {/* Content */}
                    <div className="p-5 bg-gradient-to-br from-white to-[#F5FFF5]">
                      <h3 className="text-xl font-bold text-[#1B5E20] mb-2 tracking-wide">{attraction.name}</h3>
                      <p className="text-[#2E7D32] font-medium leading-relaxed line-clamp-3">
                        {attraction.detail || "No description available"}
                      </p>

                      {/* View Details Button */}
                      <div className="mt-4 px-4 py-2 bg-[#008000] hover:bg-[#006400] text-white rounded-lg font-semibold text-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                        View Details
                      </div>
                    </div>

                    {/* Accent Border */}
                    <div className="absolute inset-0 border-2 border-[#A5D6A7] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
