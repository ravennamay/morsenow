"use client";

import { Toaster } from "./ui/toaster";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
