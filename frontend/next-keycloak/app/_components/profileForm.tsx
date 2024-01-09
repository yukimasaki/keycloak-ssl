"use client";

import { Profile } from "@common/types/profile";
import { upsertProfile, validateOnBlurEmail, validateOnBlurUserName } from "@components/_actions/profile";
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

  const [emailValidateState, validateEmailAction] = useFormState(validateOnBlurEmail, {
    message: null,
  });

  const [userNameValidateState, validateUserNameAction] = useFormState(validateOnBlurUserName, {
    message: null,
  });

  const uuid = profile.uuid;
  const [email, setEmail] = useState<string>(profile.email);
  const [userName, setUserName] = useState<string>(profile.userName);

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
                readOnly
              />

              <Input
                label="メールアドレス"
                name="email"
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmailAction(e.target.value);
                }}
                onBlur={(e) => {
                  if (!(e.target instanceof HTMLInputElement)) return;
                  validateEmailAction(e.target.value);
                }}
                onClear={() => setEmail("")}
                isClearable
              />
              {
                emailValidateState.message &&
                <p className="text-red-500">{emailValidateState.message}</p>
              }

              <Input
                label="ユーザー名"
                name="userName"
                value={userName}
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                  validateUserNameAction(e.target.value);
                }}
                onBlur={(e) => {
                  if (!(e.target instanceof HTMLInputElement)) return;
                  validateUserNameAction(e.target.value);
                }}
                onClear={() => setUserName("")}
                isClearable
              />
              {
                userNameValidateState.message &&
                <p className="text-red-500">{userNameValidateState.message}</p>
              }
            </CardBody>
            <CardFooter>
              <div className="space-y-2">
                <Button
                  type="submit"
                  color="primary"
                  variant="flat"
                  isDisabled={!!emailValidateState.message || !!userNameValidateState.message}
                >
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
