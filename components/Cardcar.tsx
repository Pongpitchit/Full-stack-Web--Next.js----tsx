interface CardcarProps {
  img: string
  name: string
  desc: string
  range: string
  price: string
}

export default function Cardcar({ img, name, desc, range, price }: CardcarProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#A5D6A7]/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
      {/* Card Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={img || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Subtle White Overlay */}
        <div className="absolute inset-0 bg-white/[0.02]" />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-[#008000] text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
          {price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 bg-gradient-to-br from-white to-[#F5FFF5]">
        <h4 className="text-xl font-bold text-[#1B5E20] mb-2 tracking-wide">{name}</h4>
        <p className="text-[#2E7D32] font-medium leading-relaxed mb-4 line-clamp-2">{desc}</p>

        {/* Specs */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#008000] font-bold">⚡</span>
            <span className="text-sm text-[#2E7D32] font-semibold">Range: {range}</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full px-4 py-2 bg-[#008000] hover:bg-[#006400] text-white rounded-lg font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
          View Details
        </button>
      </div>

      {/* Accent Border on Hover */}
      <div className="absolute inset-0 border-2 border-[#A5D6A7] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
