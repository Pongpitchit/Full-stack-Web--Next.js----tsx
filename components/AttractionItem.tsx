"use client"

export default function AttractionItem({ attraction }) {
  return (
    <div className="overflow-hidden rounded-xl group bg-white border border-[#A5D6A7]">
      <div className="relative">
        <img
          src={attraction.coverimage || "/placeholder.svg"}
          alt={attraction.name}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[#1B5E20] text-lg font-semibold mb-1">{attraction.name}</h3>
        <p className="hidden sm:block text-[#2E7D32] text-sm line-clamp-2">{attraction.detail}</p>
      </div>
    </div>
  )
}
