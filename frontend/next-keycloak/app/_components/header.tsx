"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Skeleton } from "@nextui-org/react";
import { LoginButtonComponent } from "@components/loginButton";
import { LogoutButtonComponent } from "@components/logoutButton";
import { useSession } from "next-auth/react";

export const HeaderComponent = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const isLoaded = session ? true : false;

  return (
    <Navbar className="shadow">
      <NavbarBrand>
        <NavbarItem>
          <p className="font-bold text-inherit">
            <Link href="/">Next Keycloak</Link>
          </p>
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Skeleton isLoaded={isLoaded} className="rounded-xl">
            {!user ? <LoginButtonComponent /> : <LogoutButtonComponent />}
          </Skeleton>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
