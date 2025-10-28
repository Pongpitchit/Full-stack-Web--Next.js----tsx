"use client"
import AttractionViewer from "@/components/AttractionViewer"
import Layout from "@/components/Layout"

export default function UseEffectPage() {
  return (
    <Layout title="Use Effect Page" description="Browse through amazing destinations with API data">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4 tracking-wide">Discover Destinations</h2>
          <p className="text-lg md:text-xl text-[#2E7D32] font-semibold max-w-2xl mx-auto leading-relaxed">
            Browse through curated attractions from around the world. Navigate with ease and find your next adventure.
          </p>
        </div>
      </section>

      {/* Attraction Viewer */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <AttractionViewer />
        </div>
      </section>
    </Layout>
  )
}
