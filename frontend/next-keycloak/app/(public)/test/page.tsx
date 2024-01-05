"use server";

import { HeaderComponent } from "@components/header";

const TestPage = async () => {
  return (
    <>
      <HeaderComponent />
      <p>
        Test Page
      </p>
    </>
  );
}

export default TestPage;
