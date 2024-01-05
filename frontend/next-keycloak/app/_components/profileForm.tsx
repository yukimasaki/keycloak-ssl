"use client";

import { Profile } from "@common/types/profile";
import { upsertProfile } from "@components/_actions/profile";
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";
import React, { useState } from "react";

export const ProfileFormComponent = ({
  profile,
}: {
  profile: Profile,
}) => {
  const [state, setState] = useState<Record<string, string>>(profile);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      }
    });
  }

  const clearEmail = (
  ) => {
    setState((prevalue) => {
      return {
        ...prevalue,
        email: "",
      }
    });
  }

  const clearUserName = (
  ) => {
    setState((prevalue) => {
      return {
        ...prevalue,
        userName: "",
      }
    });
  }

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <Card className="w-full max-w-[720px]">
          <CardHeader className="flex gap-3">
            <p>プロフィール設定</p>
          </CardHeader>
          <form action={upsertProfile}>
            <CardBody className="space-y-3">
              <Input value={state.userId} onChange={handleChange} name="userId" type="text" label="ユーザーID" readOnly />
              <Input value={state.email} onChange={handleChange} name="email" type="email" label="メールアドレス" isClearable onClear={clearEmail} />
              <Input value={state.userName} onChange={handleChange} name="userName" type="text" label="ユーザー名" isClearable onClear={clearUserName} />
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
