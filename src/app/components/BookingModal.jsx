"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function BookingModal({ open, setOpen, doctor }) {
  const [formData, setFormData] = useState({
    patientName: "",
    gender: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  if (!open || !doctor) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const session = await authClient.getSession();

    const bookingData = {
      userEmail: session?.data?.user?.email,
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      ...formData,
    };

    const res = await fetch("https://assignment-9-server-1vpk.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (data.insertedId || data.acknowledged) {
      alert("Appointment booked successfully!");
      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            value={doctor.name}
            readOnly
            className="w-full border p-3 rounded-lg bg-gray-100"
          />

          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select name="gender" onChange={handleChange} className="w-full border p-3 rounded-lg">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="date"
            name="appointmentDate"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select name="appointmentTime" onChange={handleChange} className="w-full border p-3 rounded-lg">
            <option value="">Select Time</option>
            {doctor.availability?.map((t, i) => (
              <option key={i}>{t}</option>
            ))}
          </select>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
}