import Link from "next/link";
import { Stethoscope } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 py-16 bg-blue-500 dark:bg-[#020817] transition-all duration-500">

      <div className="max-w-7xl mx-auto rounded-[32px] p-10 md:p-14 shadow-2xl bg-white dark:bg-[#0f172a] border border-transparent dark:border-white/10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}
          <div>

            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Stethoscope className="text-white" />
              </div>
              <h1 className="text-2xl font-bold">DocAppoint</h1>
            </Link>

            <p className="leading-7 mb-6 text-gray-500 dark:text-gray-400">
              Book appointments with trusted doctors, manage your health records.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              <SocialIcon><FaTwitter /></SocialIcon>
              <SocialIcon><FaLinkedinIn /></SocialIcon>
            </div>

          </div>

          <FooterLinks
            title="Quick Links"
            links={["Home", "Find Doctors", "Appointments", "Health Blog"]}
          />

          <FooterLinks
            title="Services"
            links={["Online Consultation", "Emergency Care", "Lab Tests", "Medicine Delivery"]}
          />

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4 text-gray-500">
              <li>📍 Dhaka, Bangladesh</li>
              <li>📞 +880 1234-567890</li>
              <li>✉️ support@docappoint.com</li>
              <li>🕒 24/7 Support</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ children }) {
  return (
    <a className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-blue-600 text-white">
      {children}
    </a>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-5">{title}</h3>
      <ul className="space-y-4 text-gray-500">
        {links.map((l, i) => (
          <li key={i}>
            <a href="#" className="hover:text-blue-500">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}