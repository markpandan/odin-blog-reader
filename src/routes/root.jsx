import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useAuth } from "../utils/authUtils";
// import useGetData from "../hooks/useGetData";
// import { useState } from "react";

const Root = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar user={user} />
      <Outlet context={[user]} />
    </>
  );
};

export default Root;
