"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { LoginButtonComponent } from "@components/loginButton";
import { LogoutButtonComponent } from "@components/logoutButton";
import { useSession } from "next-auth/react";

export const HeaderComponent = () => {
  const { data: session } = useSession();
  const user = session?.user;

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
          {!user ? <LoginButtonComponent /> : <LogoutButtonComponent />}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
