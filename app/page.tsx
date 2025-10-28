import AttractionsFetcher from "@/components/AttractionsFetcher";
import Layout from "@/components/Layout";

export default function AttractionsPage() {
  return (
    <Layout title="Home" description="Home">
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-[#008000] to-[#1B5E20] text-white py-16 px-4 mb-8 opacity-80 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Dashboard</h1>
            <p className="text-xl text-white/90">
              Explore amazing destinations around the world
            </p>
          </div>
        </div>
        <AttractionsFetcher />
      </div>
    </Layout>
  );
}
