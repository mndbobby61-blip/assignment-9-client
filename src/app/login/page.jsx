"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // ✅ EMAIL LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await authClient.signIn.email({
        email: form.email,
        password: form.password,
      });

      router.push("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  // ✅ GOOGLE LOGIN
  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        {/* EMAIL LOGIN FORM */}
        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Login
          </button>

        </form>

        {/* OR */}
        <p className="text-center my-4 text-gray-500">OR</p>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogle}
          className="w-full bg-red-500 text-white py-3 rounded-lg"
        >
          Continue with Google
        </button>

        {/* REGISTER LINK */}
        <p className="text-center mt-4 text-sm">
          Don’t have account?{" "}
          <Link href="/register" className="text-blue-600">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}