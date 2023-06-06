// SubPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

function Page2(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Sub Page: {id}</h1>
      {/* Sub page content */}
    </div>
  );
}

export default Page2;
