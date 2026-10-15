"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// Split the homepage and internal-page headers into separate route-specific chunks.
const HeaderMain = dynamic(() => import("./header"));
const HeaderTour = dynamic(() => import("./tour/header"));

export default function HeaderAll() {
  const pathname = usePathname() || "/";
  return pathname === "/" ? (
    <HeaderMain pathname={pathname} />
  ) : (
    <HeaderTour pathname={pathname} />
  );
}
