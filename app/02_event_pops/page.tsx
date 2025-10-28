"use client"
import { useState } from "react"
import Card from "@/components/Card"
import Layout from "@/components/Layout"

export default function StatePage() {
  const attractions = [
    {
      id: 1,
      name: "Phi Phi Islands",
      img: "/1.jpg",
      detail: "Phi Phi Islands are a group of islands in Thailand between Phuket and the Malacca Coastal Strait.",
    },
    {
      id: 2,
      name: "Eiffel Tower",
      img: "/2.jpg",
      detail:
        "Eiffel Tower is one of the most famous structures in the world, built in 1889 as a symbol of the World Fair.",
    },
    {
      id: 3,
      name: "Times Square",
      img: "/3.jpg",
      detail:
        "Times Square has become a global landmark and has become a symbol of New York City. This is a result of Times Square being a modern.",
    },
  ]

  // Track likes per card using id as key
  const [likes, setLikes] = useState({ 1: 0, 2: 0, 3: 0 })

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  return (
    <Layout title="State Page" description="Interactive attractions with like functionality">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4 tracking-wide">Attractions UseEffect Like</h2>
          <p className="text-lg md:text-xl text-[#2E7D32] font-semibold max-w-2xl mx-auto leading-relaxed">
           Like your favorites 
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                name={item.name}
                desc={item.detail}
                likes={likes[item.id] || 0}
                onLike={() => handleLike(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
