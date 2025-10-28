import UserForm from "@/components/UserForm"

export default function CreateUserPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-[#008000] to-[#1B5E20] text-white py-16 px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Create New User</h1>
          <p className="text-xl text-white/90">Add a new user to the system</p>
          <div className="mt-6">
            <a
              href="/users"
              className="inline-block bg-white text-[#008000] font-semibold px-6 py-3 rounded-lg hover:bg-[#F5FFF5] transition-all duration-300"
            >
              ← Back to Users
            </a>
          </div>
        </div>
      </div>
      <UserForm />
    </div>
  )
}
