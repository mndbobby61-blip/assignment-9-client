export default function WhyChoose() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-center">

            <h2 className="text-4xl font-bold mb-14">
                Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

                {/* Card 1 */}
                <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">

                    <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan-100 group-hover:bg-cyan-500 transition-all duration-500">
                        <img src="/assets/expert.png" alt="experts" className="w-full h-full p-3" />
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-cyan-600 transition">
                        Expert Doctors
                    </h3>

                    <p className="text-gray-500 mt-3">
                        Verified and highly experienced medical professionals.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">

                    <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-blue-100 group-hover:bg-blue-500 transition-all duration-500">
                        <img src="/assets/booking.png" alt="experts" className="w-full h-full p-3" />
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition">
                        Easy Booking
                    </h3>

                    <p className="text-gray-500 mt-3">
                        Book appointments instantly with simple steps.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">

                    <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-purple-100 group-hover:bg-purple-500 transition-all duration-500">
                        <img src="/assets/emergency.png" alt="experts" className="w-full h-full p-3" />
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-purple-600 transition">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=exclamation" />
                        24/7 Support
                    </h3>

                    <p className="text-gray-500 mt-3">
                        We are always available to help you anytime.
                    </p>
                </div>

            </div>
        </section>
    );
}