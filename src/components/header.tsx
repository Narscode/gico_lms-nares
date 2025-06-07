"use client";

import { useEffect, useState } from "react";
import { UserProfile, fetchUserProfile } from "@/lib/auth";

export function Header() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserProfile = async () => {
      const profile = await fetchUserProfile();
      setUser(profile);
      setLoading(false);
    };

    loadUserProfile();
  }, []);

  return (
    <div className="flex flex-row justify-between items-center border-b p-4 bg-white mb-5">
      <p className="text-xl font-semibold">Language Tests</p>
      <div className="flex flex-row items-center justify-center gap-4">
        <i className="bg-blue-600 text-white aspect-square rounded-md w-[36px] h-[36px] ri-inbox-2-fill flex items-center justify-center text-2xl"></i>
        <i className="bg-blue-600 text-white aspect-square rounded-md w-[36px] h-[36px] ri-notification-2-line flex items-center justify-center text-2xl"></i>
        <div className="flex flex-row gap-2 rounded-lg justify-center items-center border-2 border-gray-950/10 p-2">
          <div className="w-[25px] h-[25px] bg-blue-600 rounded-lg"></div>
          <p>{loading ? "Loading..." : user?.full_name || "Guest"}</p>
        </div>
      </div>
    </div>
  );
} 