import doctors from "@/data/doctors.json";
import Image from "next/image";

export default async function DoctorDetails({ params }) {
    // console.log("PARAMS:", params);
    const { id } = await params;
    
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl">
        Doctor Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl overflow-hidden">

        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <p className="text-blue-600 mt-1">{doctor.specialty}</p>

          <p className="text-gray-600 mt-4">
            {doctor.description}
          </p>

          <div className="mt-5 space-y-2">
            <p><b>Hospital:</b> {doctor.hospital}</p>
            <p><b>Location:</b> {doctor.location}</p>
            <p><b>Experience:</b> {doctor.experience}</p>
            <p><b>Fee:</b> ৳{doctor.fee}</p>
            <p><b>Rating:</b> ⭐ {doctor.rating}</p>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg">
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
}