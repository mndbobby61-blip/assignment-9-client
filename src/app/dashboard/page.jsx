"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Dashboard() {

  const router = useRouter();

  // ================= STATES =================
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const [bookings, setBookings] = useState([]);

  const [showBookings, setShowBookings] = useState(false);

  const [editingBooking, setEditingBooking] = useState(null);

  const [profileModal, setProfileModal] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    image: "",
  });

  // ================= AUTH CHECK =================
  useEffect(() => {

    const loadData = async () => {

      const session = await authClient.getSession();

      // ❌ NOT LOGGED IN
      if (!session?.data?.user) {

        router.push("/login");

        return;
      }

      // ✅ LOGGED IN
      const currentUser = session.data.user;

      setUser(currentUser);

      setProfileData({
        name: currentUser.name || "",
        image: currentUser.image || "",
      });

      // LOAD BOOKINGS
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings?email=${currentUser.email}`
      );

      const data = await res.json();

      setBookings(data);

      setLoading(false);
    };

    loadData();

  }, [router]);

  // ================= LOADING =================
  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  // ================= DELETE BOOKING =================
  const handleDelete = async (id) => {

    const confirmDelete = confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`, {
      method: "DELETE",
    });

    const remaining = bookings.filter(
      (booking) => booking._id !== id
    );

    setBookings(remaining);

    toast.success("Appointment deleted successfully!");
  };

  // ================= UPDATE BOOKING =================
  const handleUpdateBooking = async (e) => {

    e.preventDefault();

    const form = e.target;

    const updatedBooking = {
      patientName: form.patientName.value,
      phone: form.phone.value,
      appointmentDate: form.appointmentDate.value,
      appointmentTime: form.appointmentTime.value,
    };

    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${editingBooking._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBooking),
      }
    );

    const updated = bookings.map((booking) => {

      if (booking._id === editingBooking._id) {

        return {
          ...booking,
          ...updatedBooking,
        };
      }

      return booking;
    });

    setBookings(updated);

    setEditingBooking(null);

    toast.success("Appointment updated successfully!");
  };

  // ================= UPDATE PROFILE =================
  const handleProfileUpdate = async (e) => {

    e.preventDefault();

    const updatedUser = {
      ...user,
      name: profileData.name,
      image: profileData.image,
    };

    setUser(updatedUser);

    setProfileModal(false);

    toast.success("Profile updated successfully!");
  };

  // ================= UI =================
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-10">
        Dashboard
      </h1>

      {/* PROFILE CARD */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-10">

        <div className="flex flex-col md:flex-row md:items-center gap-8">

          {/* IMAGE */}
          <img
            src={
              user?.image ||
              "https://i.ibb.co/4pDNDk1/avatar.png"
            }
            alt="user"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          {/* INFO */}
          <div className="flex-1">

            <h2 className="text-3xl font-bold">
              {user?.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {user?.email}
            </p>

            <div className="flex gap-4 mt-6 flex-wrap">

              <button
                onClick={() => setProfileModal(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl"
              >
                Update Profile
              </button>

              <button
                onClick={() =>
                  setShowBookings(!showBookings)
                }
                className="px-6 py-3 bg-green-600 text-white rounded-xl"
              >
                {
                  showBookings
                    ? "Hide Bookings"
                    : "My Bookings"
                }
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* BOOKINGS */}
      {
        showBookings && (

          <div>

            <h2 className="text-3xl font-bold mb-8">
              My Appointments
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {
                bookings.map((booking) => (

                  <div
                    key={booking._id}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >

                    <h3 className="text-2xl font-bold">
                      {booking.doctorName}
                    </h3>

                    <p className="text-blue-600 mt-1">
                      {booking.specialty}
                    </p>

                    <div className="mt-4 space-y-2">

                      <p>
                        <b>Patient:</b> {booking.patientName}
                      </p>

                      <p>
                        <b>Email:</b> {booking.userEmail}
                      </p>

                      <p>
                        <b>Phone:</b> {booking.phone}
                      </p>

                      <p>
                        <b>Date:</b> {booking.appointmentDate}
                      </p>

                      <p>
                        <b>Time:</b> {booking.appointmentTime}
                      </p>

                    </div>

                    <div className="flex gap-3 mt-6">

                      <button
                        onClick={() =>
                          setEditingBooking(booking)
                        }
                        className="flex-1 py-2 bg-blue-600 text-white rounded-xl"
                      >
                        Update
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(booking._id)
                        }
                        className="flex-1 py-2 bg-red-500 text-white rounded-xl"
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                ))
              }

            </div>

          </div>
        )
      }

    </div>
  );
}