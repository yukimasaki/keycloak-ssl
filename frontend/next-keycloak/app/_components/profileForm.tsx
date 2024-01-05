"use client";

import { Profile } from "@common/types/profile";
import { saveProfile } from "@components/_actions/profile";
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";

export const ProfileFormComponent = ({
  profile,
}: {
  profile: Profile,
}) => {
  return (
    <>
      <div className="flex items-center justify-center p-4">
        <Card className="w-full max-w-[720px]">
          <CardHeader className="flex gap-3">
            <p>プロフィール設定</p>
          </CardHeader>
          <form action={saveProfile}>
            <CardBody className="space-y-3">
              <Input value={profile.userId} name="userId" type="text" label="ユーザーID" readOnly />
              <Input value={profile.email} name="email" type="email" label="メールアドレス" isClearable />
              <Input value={profile.userName} name="userName" type="text" label="ユーザー名" isClearable />
            </CardBody>
            <CardFooter>
              <Button type="submit" color="primary" variant="flat">
                保存
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
