"use client";

import React from "react";
import { usePathname } from "next/navigation";

// Серверный экшн для проверки наличия хедера в запросе (установленного в Middleware.ts)
import { getTest } from "../../utils/actions";

// Путь к модальному окно(окнам) (пока хардкод)
import TestRoot from "../../app/modal/auth/signin/page";

import { createPortal } from "react-dom";

export const RoutesProtector: React.FC = () => {
  const [isModal, setIsModal] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const testFunc = async () => {
      try {
        const res = await getTest();
        console.log("res", res);
        setIsModal(res);
      } catch {
        console.warn("Failed to get headers");
      }
    };
    if (pathname.startsWith("/auth")) {
      testFunc();
    }
  }, [pathname]);

  return (
    <>
      {isModal &&
        pathname.startsWith("/auth") &&
        createPortal(<TestRoot />, document.body, Date.now().toString())}
    </>
  );
};
