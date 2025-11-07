import AttractionsFetcher from "@/components/AttractionsFetcher";
import Layout from "@/components/Layout";

export default function AttractionsPage() {
  return (
    <Layout title="Home" description="Home">
      <div className="min-h-screen">
        <div className="bg-gradient-to-r from-[#008000] to-[#1B5E20] text-white py-16 px-4 mb-8 opacity-80 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-5xl font-bold">Dashboard</h1>
              <a 
                href="/ballpython" 
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
              >
                🐍 Ball Python Gallery
              </a>
            </div>
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
