"use client";

import { authClient } from "@/lib/auth-client";

export const requireAuth = async (router) => {
  const session = await authClient.getSession();

  if (!session?.data?.user) {
    router.push("/login");
    return false;
  }

  return true;
};