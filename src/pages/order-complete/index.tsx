import React from "react";
import Confirm from "@/components/Confirm";
import Layout from "@/components/Layout/Layout";

const OrderComplete = () => {
  return (
    <>
      <Confirm />
    </>
  );
};

OrderComplete.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default OrderComplete;
