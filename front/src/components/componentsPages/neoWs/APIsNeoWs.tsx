"use client";

import { Feed } from "@/components/componentsPages/neoWs/Feed";
import { Lookup } from "@/components/componentsPages/neoWs/Lookup"

export const APIsNeoWs = () => {

  //const GetFeed = async () => {};

  // https://universe-back.onrender.com
  // http://127.0.0.1:4000

  //const GetLookup = async () => {};

  return (
    <main>
      <Feed  />
      <div className="m-20"></div>
      <Lookup  />
    </main>
  );
};
