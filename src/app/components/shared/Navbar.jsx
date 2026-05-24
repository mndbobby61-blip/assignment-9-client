"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const [session, setSession] = useState(null);
  const router = useRouter();

  // 🔐 LOAD SESSION
  useEffect(() => {
    const loadSession = async () => {
      const res = await authClient.getSession();
      setSession(res.data);
    };

    loadSession();
  }, []);

  // 🚪 LOGOUT
  const handleLogout = async () => {
    await authClient.signOut();

    setSession(null); // instant UI update

    router.push("/login");
  };

  // 🔒 PROTECT ROUTE (FIXED)
  const protectRoute = async (path) => {

    const res = await authClient.getSession();

    if (!res?.data?.user) {
      router.push("/login");
    } else {
      router.push(path);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Stethoscope className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">
            DocAppoint
          </h1>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex gap-8 font-medium">

          <Link href="/">
            Home
          </Link>

          <button onClick={() => protectRoute("/all-appointments")}>
            All Appointment
          </button>

          <button onClick={() => protectRoute("/dashboard")}>
            Dashboard
          </button>

        </div>

        {/* USER */}
        <div className="flex items-center gap-3">

          {session?.user ? (
            <>
              <Image
                src={session.user.image || "/assets/user.png"}
                alt="user"
                width={40}
                height={40}
                unoptimized
                className="rounded-full"
              />

              <span className="hidden md:block">
                {session.user.name}
              </span>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}