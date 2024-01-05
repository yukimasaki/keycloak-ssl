"use server";

import { HeaderComponent } from "@components/header";
import { PageListComponent } from "@components/pageList";

const HomePage = async () => {
  return (
    <>
      <HeaderComponent />
      <PageListComponent />
    </>
  );
}

export default HomePage;
