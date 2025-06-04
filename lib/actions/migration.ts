/** @format */

"use server";

import connectDB from "@/config/db";
// import Dealer from "@/models/Dealer";
import User from "@/models/User";
import { NextResponse } from "next/server";

// pages/api/migrate.js
export async function migration() {
  try {
    await connectDB();

    // Find all documents missing the new field
    const docs = await User.find({ newField: { $exists: false } });

    // Update in batches
    for (const doc of docs) {
      doc.newField = "default value";
      await doc.save();
    }

    return NextResponse.json(
      {
        updatedCount: docs.length,
        message: "Migration completed successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    NextResponse.json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}
