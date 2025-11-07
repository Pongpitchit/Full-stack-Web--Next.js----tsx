import { NextResponse } from "next/server"
import supabase from "@/utils/db"

// GET single attraction by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params // ✅ ต้อง await ก่อน

    const numericId = Number(id)
    if (!Number.isInteger(numericId) || numericId <= 0) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 })
    }

    // ดึงข้อมูลจาก Supabase
    const { data, error } = await supabase
      .from("attraction") // ชื่อตารางใน Supabase
      .select("*")
      .eq("id", numericId)
      .single()

    if (error) {
      if (error.code === "PGRST116") {
        return NextResponse.json({ error: "Attraction not found" }, { status: 404 })
      }
      throw error
    }

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error("Error fetching attraction:", error)
    return NextResponse.json(
      { error: "Failed to fetch attraction", details: error.message },
      { status: 500 }
    )
  }
}
