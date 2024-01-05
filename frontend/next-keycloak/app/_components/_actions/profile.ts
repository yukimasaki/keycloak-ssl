"use server";

import { authOptions } from "@common/next-auth/options";
import { getServerSession } from "next-auth";

export const upsertProfile = async (
  formData: FormData,
) => {
  const session = await getServerSession(authOptions);
  const token = session?.user.accessToken;

  const uuid = formData.get("userId");
  const userName = formData.get("userName");

  const profile = {
    uuid,
    userName,
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profiles`, {
    method: "POST",
    body: JSON.stringify(profile),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  console.log(response.status);
}
