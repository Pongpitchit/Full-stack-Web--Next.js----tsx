"use client"

interface CardProps {
  img: string
  name: string
  desc: string
  likes: number
  onLike: () => void
}

export default function Card({ img, name, desc, likes, onLike }: CardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#A5D6A7]/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
      {/* Card Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={img || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Subtle White Overlay */}
        <div className="absolute inset-0 bg-white/[0.02]" />
      </div>

      {/* Card Content */}
      <div className="p-5 bg-gradient-to-br from-white to-[#F5FFF5]">
        <h4 className="text-xl font-bold text-[#1B5E20] mb-2 tracking-wide">{name}</h4>
        <p className="text-[#2E7D32] font-medium leading-relaxed mb-4">{desc}</p>

        {/* Like Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={onLike}
            className="px-4 py-2 bg-[#008000] hover:bg-[#006400] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            ❤️ Like ({likes})
          </button>
          <button className="px-4 py-2 bg-transparent border-2 border-[#008000] hover:bg-[#008000] text-[#008000] hover:text-white rounded-lg font-semibold transition-all duration-300">
            View
          </button>
        </div>
      </div>

      {/* Accent Border on Hover */}
      <div className="absolute inset-0 border-2 border-[#A5D6A7] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
