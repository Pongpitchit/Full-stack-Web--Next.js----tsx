"use client"
import { useState, useEffect } from "react"

export default function AttractionsFetcher() {
  const [attractions, setAttractions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const res = await fetch("https://www.melivecode.com/api/attractions")
        const data = await res.json()
        setAttractions(data)
      } catch (err) {
        console.error("Error fetching attractions:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchAttractions()
  }, [])

  if (loading) return <div className="text-center text-[#1B5E20] text-xl py-12">Loading attractions...</div>
  if (attractions.length === 0) return <div className="text-center text-[#1B5E20]">No attractions found.</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5FFF5] to-white py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {attractions.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-[0_10px_25px_-10px_rgba(165,214,167,0.7)] transition-all duration-300 hover:scale-105 border border-[#A5D6A7]"
          >
            <img src={a.coverimage || "/placeholder.svg"} alt={a.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold text-[#1B5E20]">{a.name}</h3>
              <p className="text-[#1B5E20]/70 text-sm leading-relaxed line-clamp-3">{a.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
