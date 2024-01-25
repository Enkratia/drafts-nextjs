"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { FRONTEND_URL } from "../../utils/constants";

export const RoutesProtector: React.FC = () => {
  const { data: session, status } = useSession();

  const pathname = usePathname();
  const router = useRouter();

  const sP = useSearchParams().toString();
  const searchParams = sP ? "?" + sP : "";

  const isForbidden = status === "unauthenticated" && !!pathname.match(/^(\/account)/);

  React.useEffect(() => {
    if (isForbidden) {
      router.push(`/auth/signin?callbackUrl=${FRONTEND_URL}${pathname}${searchParams}`, {
        scroll: false,
      });
    }
  }, [isForbidden]);

  return <></>;
};
