import React from 'react';
import facilities from "../assets/facilities-9.webp";
import { Link } from 'react-router-dom';


const CallToActionSection = () => {
  return (
    <section id="call-to-action" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Excellence in Medical Care, Every Day
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/experts"> <a 
                 
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a></Link>
             <Link to="/experts"> <a 
                className="border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <span>Explore Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a></Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src={facilities} 
              alt="Medical Excellence" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 hover:shadow-xl transition-shadow rounded-2xl bg-white">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
            <p className="text-gray-600 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="text-center p-8 hover:shadow-xl transition-shadow rounded-2xl bg-white">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
            <p className="text-gray-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.
            </p>
          </div>
          <div className="text-center p-8 hover:shadow-xl transition-shadow rounded-2xl bg-white">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
            <p className="text-gray-600 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.
            </p>
          </div>
        </div>

        {/* Contact Block */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-12 items-center gap-12">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Need Immediate Medical Assistance?
              </h2>
              <p className="text-xl text-gray-600">
                Our emergency response team is available around the clock to provide immediate medical support when you need it most.
              </p>
            </div>
            <div className="md:col-span-4 text-center md:text-right">
              <a 
                href="tel:5551234567" 
                className="block bg-red-600 text-white px-8 py-4 rounded-2xl font-bold mb-4 hover:bg-red-700 transition-colors shadow-lg inline-flex items-center gap-3 justify-center md:justify-end"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(555) 123-4567</span>
              </a>
              <a 
                href="" 
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors text-lg"
              >
                Find Location →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
