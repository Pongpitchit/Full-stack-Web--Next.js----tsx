"use client"
import Cardcar from "@/components/Cardcar"
import Layout from "@/components/Layout"

export default function EventPage() {
  const evCars = [
    {
      id: 1,
      name: "Tesla Model S",
      detail:
        "Tesla Model S is a full-sized all-electric five-door liftback sedan, known for its long range and high performance.",
      coverimage: "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",
      topSpeed: "250 km/h",
      range: "652 km",
      price: "$89,990",
    },
    {
      id: 2,
      name: "Tesla Model 3",
      detail:
        "Tesla Model 3 is a compact all-electric sedan that offers great range, high safety ratings, and autopilot features.",
      coverimage: "https://www.9carthai.com/wp-content/uploads/2024/04/Tesla-Model-3-Performance-1.jpg",
      topSpeed: "261 km/h",
      range: "568 km",
      price: "$43,990",
    },
    {
      id: 3,
      name: "Tesla Model X",
      detail:
        "Tesla Model X is a mid-sized all-electric luxury SUV, famous for its falcon-wing doors and spacious interior.",
      coverimage:
        "https://images.prismic.io/carwow/c340a77d-af56-4562-abfb-bd5518ccb292_2023+Tesla+Model+X+front+quarter+moving.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
      topSpeed: "250 km/h",
      range: "580 km",
      price: "$99,990",
    },
    {
      id: 4,
      name: "Tesla Model Y",
      detail:
        "Tesla Model Y is a compact all-electric SUV with versatile seating, great range, and advanced autopilot features.",
      coverimage: "https://assets.brandinside.asia/uploads/2025/01/Model-Y-2-Hero-Desktop1.jpg",
      topSpeed: "250 km/h",
      range: "531 km",
      price: "$54,990",
    },
    {
      id: 5,
      name: "Tesla Cybertruck",
      detail:
        "Tesla Cybertruck is an all-electric pickup truck with futuristic design, extreme durability, and high performance.",
      coverimage:
        "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-cybertruck-3-672e75cce7814.jpg?crop=0.608xw:0.515xh;0.0992xw,0.400xh&resize=1200:*",
      topSpeed: "210 km/h",
      range: "805 km",
      price: "$49,900",
    },
    {
      id: 6,
      name: "Tesla Roadster",
      detail:
        "Tesla Roadster is an all-electric sports car with incredible acceleration, top speed, and long range for a supercar.",
      coverimage: "https://static.independent.co.uk/2024/12/31/15/0x0-Roadster_04.jpg?width=1200",
      topSpeed: "400 km/h",
      range: "1,000 km",
      price: "$200,000",
    },
  ]

  return (
    <Layout title="Tesla EV Cars" description="Explore Tesla's electric vehicle lineup">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4 tracking-wide">⚡ Tesla EV Collection</h2>
          <p className="text-lg md:text-xl text-[#2E7D32] font-semibold max-w-2xl mx-auto leading-relaxed">
            Discover the future of electric mobility. Browse Tesla's innovative lineup of high-performance EVs.
          </p>
        </div>
      </section>

      {/* Car Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {evCars.map((car) => (
              <Cardcar
                key={car.id}
                img={car.coverimage}
                name={car.name}
                desc={car.detail}
                range={car.range}
                price={car.price}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
