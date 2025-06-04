import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

export default function Iletisim() {
  return (
    <div className="bg-slate-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-12">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-8 bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-5xl mx-auto">
          {/* Form Section */}
          <div className="w-full md:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-500 sr-only"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name *"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-slate-100 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-500 sr-only"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone *"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-slate-100 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-500 sr-only"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email *"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-slate-100 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-gray-500 sr-only"
                  >
                    Topic *
                  </label>
                  <input
                    type="text"
                    name="topic"
                    id="topic"
                    placeholder="Topic *"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-slate-100 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-500 sr-only"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"
                  className="mt-1 block w-full px-4 py-3 bg-slate-100 border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-md transition duration-150 ease-in-out text-lg"
                >
                  Send!
                </button>
              </div>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3 md:pl-8 pt-8 md:pt-0 md:border-l border-gray-200 flex flex-col justify-start space-y-10">
            <a
              href="https://twitter.com/dekoelectric"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-900 group"
            >
              <FaTwitter
                size={40}
                className="text-yellow-500 group-hover:text-blue-500 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Twitter</h3>
                <p className="text-gray-500 text-sm">
                  twitter.com/dekoelectric
                </p>
              </div>
            </a>
            <a
              href="https://instagram.com/dekoelektrik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-900 group"
            >
              <FaInstagram
                size={40}
                className="text-yellow-500 group-hover:text-pink-500 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">
                  Instagram
                </h3>
                <p className="text-gray-500 text-sm">
                  instagram.com/dekoelektrik
                </p>
              </div>
            </a>
            <a
              href="https://linkedin.com/company/deko-elektrik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-900 group"
            >
              <FaLinkedin
                size={40}
                className="text-yellow-500 group-hover:text-blue-800 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">
                  Linkedin
                </h3>
                <p className="text-gray-500 text-sm">
                  linkedin.com/company/deko-elektrik
                </p>
              </div>
            </a>
            <a
              href="https://youtube.com/deko-elektrik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-blue-900 group"
            >
              <FaYoutube
                size={40}
                className="text-yellow-500 group-hover:text-red-600 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Youtube</h3>
                <p className="text-gray-500 text-sm">
                  youtube.com/deko-elektrik
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-xl flex items-start space-x-4">
            <FiPhone size={32} className="text-yellow-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                Phone
              </h3>
              <p className="text-gray-600">+90 216 208 92 03</p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-lg shadow-xl flex items-start space-x-4">
            <FiMapPin size={40} className="text-yellow-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                Address
              </h3>
              <p className="text-gray-600">
                Aydınlı SB St., İstanbul Endüstri Ve
                <br />
                Ticaret Serbest Bölgesi, Orjin Cad.
                <br />
                No: 2/ Tuzla/İSTANBUL
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-xl flex items-start space-x-4">
            <FiMail size={32} className="text-yellow-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                Email
              </h3>
              <p className="text-gray-600">deko@dekoelektrik.com.tr</p>
              <p className="text-gray-600">sales@dekoelektrik.com.tr</p>
              <p className="text-gray-600">purchasing@dekoelektrik.com.tr</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 max-w-5xl mx-auto rounded-lg shadow-xl overflow-hidden">
          <div className="h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12067.60978970832!2d29.379224!3d40.874015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad8e4ce9f4c07%3A0x8857fd8d77c57f75!2sDeko%20Elektrik!5e0!3m2!1str!2str!4v1748638437910!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
