import { NextResponse } from "next/server"
import pool from "@/utils/db"

// GET single attraction by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params

    const numericId = Number(id)
    if (!Number.isInteger(numericId) || numericId <= 0) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 })
    }

    const [rows] = await pool.query("SELECT * FROM attractions WHERE id = ?", [numericId])

    if (rows.length === 0) {
      return NextResponse.json({ error: "Attraction not found" }, { status: 404 })
    }

    return NextResponse.json(rows[0], { status: 200 })
  } catch (error) {
    console.error("[v0] Error fetching attraction:", error)
    return NextResponse.json({ error: "Failed to fetch attraction", details: error.message }, { status: 500 })
  }
}
