import React from "react";
import Layout from "../user/layout/Layout";

function PageNotFound() {
  return (
    <Layout>
      <div className="font-bold text-2xl text-red-950">404 - Page Not Found</div>
      <p className="mt-2 text-sm">The Page you searching for not found. Please check the router or url..!</p>
    </Layout>
  );
}

export default PageNotFound;
