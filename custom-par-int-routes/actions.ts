"use server";

import { headers } from "next/headers";

// прочитать заголок из middleware
export const getTest = async () => {
  const header = headers().get("x-middleware-custom-test");
  return !!header;
};
