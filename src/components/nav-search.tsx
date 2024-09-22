"use client";
//client component should be placed as low as possible in the component tree
import { useState } from "react";

export const NavSearch = () => {
  const [search, setSearch] = useState("");

  console.log(`NavSearch rendered`);
  return <div>Nav search input</div>;
};