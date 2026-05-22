"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Search, Calendar } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Swiper */}
            <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000 }}
                effect="fade"
                loop={true}
                className="absolute inset-0 z-0 w-full h-full"
            >
                <SwiperSlide>
                    <div
                        className="w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/hero (1).jpg')" }}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/hero (2).jpg')" }}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/hero (3).jpg')" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/hero (4).jpg')" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/hero (5).jpg')" }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-screen bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/hero (6).jpg')" }}
                    />
                </SwiperSlide>
            </Swiper>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Hero content */}
            <div className="absolute inset-0 z-20 h-full flex items-center">
                <div className="max-w-6xl px-6 md:px-12 text-white">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 px-4 py-2 rounded-full mb-5">
                        <Search size={18} />
                        <span className="text-sm">Online Medical Consultation</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
                        Your Health, Our Priority
                    </h1>

                    {/* Description */}
                    <p className="mt-5 text-lg text-gray-200 max-w-2xl">
                        Trusted clinics, real reviews, and seamless management of every
                        appointment.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-medium transition">
                            <Search size={18} />
                            Browse Doctors
                        </button>

                        <button className="flex items-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-medium transition">
                            <Calendar size={18} />
                            My Bookings
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex flex-wrap gap-10 border-t border-white/20 pt-8">
                        <div>
                            <h3 className="text-3xl font-bold">500+</h3>
                            <p className="text-gray-300">Verified Doctors</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">4.9</h3>
                            <p className="text-gray-300">Avg. Rating</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">50k+</h3>
                            <p className="text-gray-300">Appointments</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}