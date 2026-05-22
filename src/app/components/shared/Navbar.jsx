import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Stethoscope className="text-white" />
          </div>

          <h1 className="text-2xl font-bold text-slate-800">
            DocAppoint
          </h1>
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-slate-700">
          <Link href="/">Home</Link>
          <Link href="/all-appointments">All Appointment</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-blue-600 text-white">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}