import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react"

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      {session.user.email}
      This is a protected route.
      <br />
      You will only see this if you are authenticated.
    </div>
  );
}
