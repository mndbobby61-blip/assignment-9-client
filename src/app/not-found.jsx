import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
            <div className="flex flex-col items-center gap-6">

                {/* card */}
                <div className="flex flex-col gap-2 w-72 sm:w-96 text-sm">
                    <div className="flex items-center justify-between w-full rounded-xl bg-[#232531] px-4 py-4 shadow-xl">

                        <div className="flex gap-3">
                            <div className="text-red-400 bg-white/5 p-8 rounded-lg flex items-center justify-center">
                                <AlertTriangle size={28} />
                            </div>

                            <div className="flex flex-col gap-3 text-center">
                                <h1 className="text-7xl font-bold text-cyan-600">
                                    404
                                </h1>

                                <p className="text-white font-semibold text-base">
                                    Page Not Found
                                </p>
                                <p className="text-gray-400 text-xs mt-1">
                                    Sorry, this page doesn’t exist or was moved.
                                </p>
                                <Link href="/">
                                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition">
                                        Back To Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}