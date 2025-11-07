import { NextResponse } from "next/server"
import supabase from "@/utils/db" // ใช้ client จาก utils/db.js

// GET all attractions
export async function GET() {
  try {
    // ดึงข้อมูลทั้งหมดจากตาราง 'attraction'
    const { data, error } = await supabase
      .from("attraction") // ชื่อตารางใน Supabase
      .select("*")
      .order("id", { ascending: false })

    if (error) throw error

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error("Error fetching attractions:", error)
    return NextResponse.json(
      { error: "Failed to fetch attractions", details: error?.message || String(error) },
      { status: 500 }
    )
  }
}
