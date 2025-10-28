"use client"
import AttractionViewer from "@/components/AttractionViewer"
import Layout from "@/components/Layout"

export default function Dashboard() {
  return (
    <Layout title="Dashboard" description="Explore beautiful destinations in Netflix-style grid">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4 tracking-wide">
              Beautiful Destinations
            </h2>
            <p className="text-lg md:text-xl text-[#2E7D32] font-semibold leading-relaxed">
              Curated attractions rendered in a Netflix-style grid. Browse and enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#008000] tracking-wide">Featured Destinations</h3>
            <div className="hidden sm:flex items-center gap-3 text-sm text-[#1B5E20] font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-[#A5D6A7] animate-pulse"></span>
              Updated live
            </div>
          </div>
          <AttractionViewer />
        </div>
      </section>
    </Layout>
  )
}
