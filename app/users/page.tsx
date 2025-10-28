import UserList from "@/components/UserList"

export default function UsersPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-[#008000] to-[#1B5E20] text-white py-16 px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">User Management</h1>
          <p className="text-xl text-white/90">Browse and manage all user s</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="/"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#008000] transition-all duration-300"
            >
              ← Back to Home
            </a>
            <a
              href="/users/create"
              className="inline-block bg-white text-[#008000] font-semibold px-6 py-3 rounded-lg hover:bg-[#F5FFF5] transition-all duration-300"
            >
              + Create New User
            </a>
          </div>
        </div>
      </div>
      <UserList />
    </div>
  );
}
