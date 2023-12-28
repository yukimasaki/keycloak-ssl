"use client"

import { HeaderComponent } from "@components/header";
import { ListboxWrapperComponent } from "@components/listBoxWrapper";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { GroupsIcon } from "@components/icons/groups";

export default function HomePage() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <>
      <HeaderComponent />
      <div className="flex items-center justify-center p-4">
        <ListboxWrapperComponent>
          <Listbox>
            <ListboxItem
              key="HomePage"
              startContent={<GroupsIcon className={iconClasses} />}
            >
              Home
            </ListboxItem>
            <ListboxItem
              key="TestPage"
              startContent={<GroupsIcon className={iconClasses} />}
            >
              Test
            </ListboxItem>
          </Listbox>
        </ListboxWrapperComponent>
      </div>
    </>
  );
}
