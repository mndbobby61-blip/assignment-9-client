"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await authClient.signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      alert("Account created");
      router.push("/login");
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleRegister}
        className="bg-white p-8 w-96 rounded-xl shadow-md space-y-4"
      >

        <h1 className="text-2xl font-bold text-center">
          Register
        </h1>

        <input
          placeholder="Name"
          className="border p-3 w-full rounded-lg"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          className="border p-3 w-full rounded-lg"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full rounded-lg"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg">
          Register
        </button>

        <p className="text-center text-sm">
          Already have account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}