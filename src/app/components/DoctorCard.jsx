import Image from "next/image";

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

      <div className="relative w-full h-60">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">{doctor.name}</h2>
        <p className="text-blue-600">{doctor.specialty}</p>

        <p className="text-sm text-gray-500 mt-1">
          {doctor.hospital}
        </p>

        <p className="mt-2 font-semibold">
          Fee: ৳{doctor.fee}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
          View Details
        </button>
      </div>

    </div>
  );
}