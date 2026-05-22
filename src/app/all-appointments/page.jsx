import doctors from "@/data/doctors";
import DoctorCard from "../components/DoctorCard";


export default function AllAppointments() {
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}