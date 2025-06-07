"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTimer } from "@/contexts/TimerContext";

/**
 * Hook to protect navigation when timer is running
 */
export function useNavigationProtection() {
  const { isRunning, originPath } = useTimer();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isRunning && originPath && pathname !== originPath) {
      // Redirect back to the origin path if timer is running
      router.push(originPath);
    }
  }, [pathname, isRunning, originPath, router]);
}
