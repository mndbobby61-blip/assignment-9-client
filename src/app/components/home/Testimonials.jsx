export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-100 text-center">

            <h2 className="text-4xl font-bold mb-14">
                What Patients Say
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">

                {/* Testimonial 1 */}
                <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                    <div className="text-yellow-400 text-xl mb-4">★★★★★</div>

                    <p className="text-gray-600 italic">
                        “Best doctor appointment system ever! Very smooth experience.”
                    </p>

                    <div className="mt-5 font-semibold text-gray-800">
                        - Rahim Ahmed
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                    <div className="text-yellow-400 text-xl mb-4">★★★★★</div>

                    <p className="text-gray-600 italic">
                        “Very easy to book doctors. UI is clean and modern.”
                    </p>

                    <div className="mt-5 font-semibold text-gray-800">
                        - Sarah Khan
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                    <div className="text-yellow-400 text-xl mb-4">★★★★★</div>

                    <p className="text-gray-600 italic">
                        “Doctors are very professional and helpful.”
                    </p>

                    <div className="mt-5 font-semibold text-gray-800">
                        - Mehedi Hasan
                    </div>
                </div>

                {/* Testimonial 4 */}
                <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                    <div className="text-yellow-400 text-xl mb-4">★★★★★</div>

                    <p className="text-gray-600 italic">
                        “Highly recommended platform for booking doctors.”
                    </p>

                    <div className="mt-5 font-semibold text-gray-800">
                        - Nusrat Jahan
                    </div>
                </div>

            </div>
        </section>
    );
}