"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState } from "react"; 

import doctors from "@/data/doctors";
import DoctorCard from "../components/DoctorCard";

export default function AllAppointments() {

  const [search, setSearch] = useState("");

  const router = useRouter();

  // 🔐 AUTH CHECK
  useEffect(() => {

    const checkUser = async () => {

      const session = await authClient.getSession();

      if (!session?.data?.user) {
        router.push("/login");
      }

    };

    checkUser();

  }, [router]);
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
    doctor.hospital.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          All Doctors
        </h2>

        <p className="text-slate-500 mt-4">
          Browse all available appointments
        </p>
      </div>
      <form className="mt-6 flex justify-center" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search doctor, specialty..."
          className="w-full md:w-1/2 px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}

      </div>

    </section>
  );
}