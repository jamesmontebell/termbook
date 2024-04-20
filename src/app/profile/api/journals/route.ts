import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  try {
    const response = await fetch(
      "http://18.226.82.203:1234/entries/bpb9629@gmail.com"
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
