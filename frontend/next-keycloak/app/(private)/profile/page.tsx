"use server";

import { HeaderComponent } from "@components/header";
import { ProfileFormComponent } from "@components/profileForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@common/next-auth/options";
import { Profile } from "@common/types/profile";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  // ユーザー名をDBから取得
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/profiles/me`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${session?.user.accessToken}`,
    },
  });
  const { userName }: { userName: string } = await response.json();

  const profile: Profile = {
    uuid: session?.user.id || "",
    email: session?.user.email || "",
    userName: userName || "",
  }

  return (
    <>
      <HeaderComponent />
      <ProfileFormComponent profile={profile} />
    </>
  );
}

export default ProfilePage;
