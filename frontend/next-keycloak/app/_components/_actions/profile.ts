"use server";

import { authOptions } from "@common/next-auth/options";
import { getServerSession } from "next-auth";
import { ZodError, z } from 'zod';

const upsertProfileSchema = z.object({
  uuid: z.string().uuid(),
  email: z.string().email(),
  userName: z.string().min(1).max(255),
});

export const upsertProfile = async (
  prevState: {
    message: string | null,
  },
  formData: FormData,
) => {
  const session = await getServerSession(authOptions);
  const token = session?.user.accessToken;

  const uuid = formData.get("uuid");
  const email = formData.get("email");
  const userName = formData.get("userName");

  const profile = {
    uuid,
    email,
    userName,
  }

  try {
    upsertProfileSchema.parse(profile);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profiles`, {
      method: "POST",
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      message: `入力内容に誤りがあります。`
    }
  }
  return {
    message: null,
  }
}

export const validateBeforeSubmit = async (
  prevState: {
    message: string | null,
  },
  value: string,
) => {
  try {
    console.log(value);

    upsertProfileSchema.parse({
      // issue: undefinedが返っているようだが原因不明
      userName: value,
    });
    return {
      message: null,
    }
  } catch (error) {
    if (error instanceof ZodError) {
      console.log(error.errors[0].path);
    }

    return {
      message: "userNameに誤りがあります。"
    }
  }
}
