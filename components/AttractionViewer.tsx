"use client"
import { useState, useEffect } from "react"
import AttractionItem from "./AttractionItem"

export default function AttractionViewer() {
  const [attractions, setAttractions] = useState([])
  const [search, setSearch] = useState("")
  const [lastUpdate, setLastUpdate] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchAttractions = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/attractions")
      const data = await res.json()
      setAttractions(data)
      setLastUpdate(new Date().toLocaleString())
    } catch (err) {
      console.error("Failed to fetch attractions:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAttractions()
  }, [])

  const filteredAttractions = attractions.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))

  if (loading) return <div className="text-center text-[#1B5E20] text-xl py-12">Loading attractions...</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5FFF5] to-white py-12 px-4">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-96 rounded-lg border-2 border-[#A5D6A7] bg-white px-4 py-3 text-[#1B5E20] placeholder-[#1B5E20]/50 focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent transition-all"
            />
            <button
              onClick={fetchAttractions}
              className="bg-[#008000] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1B5E20] hover:shadow-[0_10px_25px_-10px_rgba(165,214,167,0.7)] transition-all duration-300 whitespace-nowrap"
            >
              Refresh
            </button>
          </div>
          <div className="text-sm text-[#1B5E20]">
            <span className="font-semibold">Total:</span> {filteredAttractions.length} items
            {lastUpdate && <span className="ml-3 opacity-80">Last updated: {lastUpdate}</span>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAttractions.map((a) => (
          <div
            key={a.id}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-[0_10px_25px_-10px_rgba(165,214,167,0.7)] transition-all duration-300 hover:scale-105 border border-[#A5D6A7]"
          >
            <AttractionItem attraction={a} />
          </div>
        ))}
      </div>
    </div>
  )
}
