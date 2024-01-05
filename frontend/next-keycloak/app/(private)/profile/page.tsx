"use server";

import { HeaderComponent } from "@components/header";
import { ProfileFormComponent } from "@components/profileForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@common/next-auth/options";
import { Profile } from "@common/types/profile";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const profile: Profile = {
    userId: session?.user.id || "",
    email: session?.user.email || "",
    userName: session?.user.preferred_username || "",
  }

  return (
    <>
      <HeaderComponent />
      <ProfileFormComponent profile={profile} />
    </>
  );
}

export default ProfilePage;
