"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SubServicesPage() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.toLowerCase().replace("#", "");
    if (hash === "professional" || hash === "observability") {
      router.replace("/services/professional-services");
    } else {
      router.replace("/services/consulting-advisory");
    }
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-[#f7f9fc]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#080357]"></div>
    </div>
  );
}
