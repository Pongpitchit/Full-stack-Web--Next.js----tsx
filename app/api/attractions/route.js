import { NextResponse } from "next/server"
import pool from "@/utils/db"

// GET all attractions
export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM attractions ORDER BY id DESC")

    return NextResponse.json(rows, { status: 200 })
  } catch (error) {
    console.error("[v0] Error fetching attractions:", error)
    return NextResponse.json({ error: "Failed to fetch attractions", details: error?.message || String(error) }, { status: 500 })
  }
}
