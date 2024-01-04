"use client";

import { HeaderComponent } from "@components/header";
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Skeleton } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = session?.user;

  const isLoaded = user ? true : false;

  return (
    <>
      <HeaderComponent />
      <div className="flex items-center justify-center p-4">
        <Card className="w-full max-w-[720px]">
          <CardHeader className="flex gap-3">
            <Skeleton isLoaded={isLoaded} className="rounded-xl">
              <p>プロフィール設定</p>
            </Skeleton>
          </CardHeader>
          <CardBody className="space-y-3">
            <Skeleton isLoaded={isLoaded} className="rounded-xl">
              <Input value={user?.id || ''} type="text" label="ユーザーID" disabled />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="rounded-xl">
              <Input value={user?.email || ''} type="email" label="メールアドレス" />
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="rounded-xl">
              <Input value={user?.preferred_username || ''} type="text" label="ユーザー名" />
            </Skeleton>
          </CardBody>
          <CardFooter>
            <Skeleton isLoaded={isLoaded} className="rounded-xl">
              <Button as={Link} color="primary" href="#" variant="flat">
                保存
              </Button>
            </Skeleton>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
