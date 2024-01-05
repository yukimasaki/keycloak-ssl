"use client";

import { GroupsIcon } from "@components/icons/groups";
import { ListboxWrapperComponent } from "@components/listBoxWrapper";
import { Listbox, ListboxItem } from "@nextui-org/react";

export const PageListComponent = () => {
  const iconClasses = "text-xl text-blue-500 pointer-events-none flex-shrink-0";

  const pages = [
    {
      name: "Home",
      path: "/",
      icon: GroupsIcon({ className: iconClasses }),
    },
    {
      name: "Test",
      path: "/test",
      icon: GroupsIcon({ className: iconClasses }),
    },
    {
      name: "Profile",
      path: "/profile",
      icon: GroupsIcon({ className: iconClasses }),
    },
    {
      name: "Books",
      path: "/books",
      icon: GroupsIcon({ className: iconClasses }),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <ListboxWrapperComponent>
          <Listbox variant="faded" aria-label="Listbox menu with icons">
            {pages.map(page => {
              return (
                <ListboxItem
                  key={page.name}
                  startContent={page.icon}
                  href={page.path}
                >
                  {page.name}
                </ListboxItem>
              );
            })}
          </Listbox>
        </ListboxWrapperComponent>
      </div>
    </>
  );
}
