"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState as useToggle } from "react";

export default function Navbar() {

  const [session, setSession] = useState(null);
  const [open, setOpen] = useToggle(false); // mobile menu
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
    setSession(null);
    router.push("/login");
  };

  // 🔒 PROTECT ROUTE
  const protectRoute = async (path) => {
    const res = await authClient.getSession();

    if (!res?.data?.user) {
      router.push("/login");
    } else {
      router.push(path);
    }

    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Stethoscope className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">DocAppoint</h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>

          <button onClick={() => protectRoute("/all-appointments")}>
            All Appointment
          </button>

          <button onClick={() => protectRoute("/dashboard")}>
            Dashboard
          </button>
        </div>

        {/* USER DESKTOP */}
        <div className="hidden md:flex items-center gap-3">
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

              <span>{session.user.name}</span>

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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 border-t">

          <div className="flex flex-col gap-4 mt-4 text-base font-medium">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-2 border-b"
            >
              Home
            </Link>

            <button
              onClick={() => protectRoute("/all-appointments")}
              className="text-left py-2 border-b"
            >
              All Appointment
            </button>

            <button
              onClick={() => protectRoute("/dashboard")}
              className="text-left py-2 border-b"
            >
              Dashboard
            </button>

          </div>

          {/* USER SECTION */}
          <div className="mt-4 pt-4 border-t">

            {session?.user ? (
              <div className="flex flex-col gap-3">

                {/* USER INFO */}
                <div className="flex items-center gap-3">

                  <Image
                    src={
                      session.user.image ||
                      "/assets/user.png"
                    }
                    alt="user"
                    width={40}
                    height={40}
                    unoptimized
                    className="rounded-full"
                  />

                  <span className="font-medium">
                    {session.user.name}
                  </span>

                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Logout
                </button>

              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </div>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}