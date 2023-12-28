"use client";

import { HeaderComponent } from "@components/header";
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <HeaderComponent />
      <div className="flex items-center justify-center p-4">
        <Card className="w-full max-w-[720px]">
          <CardHeader className="flex gap-3">
            <p>プロフィール設定</p>
          </CardHeader>
          <CardBody>
            <Input value={user?.id || ''} className="pb-4" type="text" label="ユーザーID" disabled />
            <Input value={user?.email || ''} className="pb-4" type="email" label="メールアドレス" />
            <Input value={user?.preferred_username || ''} className="pb-4" type="text" label="ユーザー名" />
          </CardBody>
          <CardFooter>
            <Button as={Link} color="primary" href="#" variant="flat">
              保存
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
