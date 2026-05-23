import bookings from "@/data/bookings.json";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          My Bookings
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your appointments easily.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-2xl shadow-md p-6"
          >

            <h2 className="text-2xl font-bold">
              {booking.doctorName}
            </h2>

            <p className="text-blue-600 mt-1">
              {booking.specialty}
            </p>

            <div className="mt-4 space-y-2 text-slate-600">
              <p>
                <b>Patient:</b> {booking.patientName}
              </p>

              <p>
                <b>Date:</b> {booking.appointmentDate}
              </p>

              <p>
                <b>Time:</b> {booking.appointmentTime}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">

              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
                Update
              </button>

              <button className="flex-1 bg-red-500 text-white py-2 rounded-lg">
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}