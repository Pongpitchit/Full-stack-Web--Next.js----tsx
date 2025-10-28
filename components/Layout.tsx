import type React from "react";

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5FFF5] via-[#E8F5E9] to-[#C8E6C9]">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide whitespace-nowrap">
              DIT205 CRUD Web
            </h1>
            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide max-w-[60vw] md:max-w-none">
              <a
                href="/"
                className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Home
              </a>
              <a
                href="/01_state"
                className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                State
              </a>
              <a
                href="/02_event_pops"
                className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Event
              </a>
              <a
                href="/03_use_effect"
                className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Array Of Objects
              </a>
              <a
                href="/attractions"
                className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Attractions
              </a>
              <a
                href="/users"
                className="px-3 py-2 md:px-4 text-sm md:text-base bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Users
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>
    </div>
  );
}
