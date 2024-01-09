"use client";

import { Profile } from "@common/types/profile";
import { upsertProfile, validateBeforeSubmit } from "@components/_actions/profile";
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useFormState } from "react-dom";

export const ProfileFormComponent = ({
  profile,
}: {
  profile: Profile,
}) => {
  const [messageAfterSubmit, formAction] = useFormState(upsertProfile, {
    message: null,
  });

  const [userNameValidateState, validateUserNameAction] = useFormState(validateBeforeSubmit, {
    message: null,
  });

  const uuid = profile.uuid;
  const [email, setEmail] = useState<string>(profile.email);
  const [userName, setUserName] = useState<string>(profile.userName);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "userName":
        setUserName(e.target.value);
        break;
      default:
        console.log("key not found");
    }
  }

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <Card className="w-full max-w-[720px]">
          <CardHeader className="flex gap-3">
            <p>プロフィール設定</p>
          </CardHeader>
          <form action={formAction}>
            <CardBody className="space-y-3">
              <Input
                label="ユーザーID"
                name="uuid"
                value={uuid}
                type="text"
                readOnly />

              <Input
                label="メールアドレス"
                name="email"
                value={email}
                type="email"
                onChange={handleChange}
                isClearable
              />

              <Input
                label="ユーザー名"
                name="userName"
                value={userName}
                type="text"
                onBlur={(e) => {
                  if (!(e.target instanceof HTMLInputElement)) return;
                  validateUserNameAction(e.target.value);
                }}
                onChange={handleChange}
                isClearable
              />
              {
                userNameValidateState.message &&
                <p className="text-red-500">{userNameValidateState.message}</p>
              }
            </CardBody>
            <CardFooter>
              <div className="space-y-2">
                <Button type="submit" color="primary" variant="flat">
                  保存
                </Button>
                {
                  messageAfterSubmit.message &&
                  <p className="text-red-500">{messageAfterSubmit.message}</p>
                }

              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
