"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-100 font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Contact Us Today</h2>
          <p className="text-yellow-100 mt-3">Get a free consultation and quote for your solar system</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-white">
            {[
              { icon: "📍", label: "Address", value: "Main Bazar, Shahkar, District Nankana Sahib, Punjab, Pakistan" },
              { icon: "📞", label: "Phone", value: "+92 300 0000000" },
              { icon: "📧", label: "Email", value: "info@solarbazaarshahkar.com" },
              { icon: "🕐", label: "Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-yellow-100 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <span className="text-6xl">✅</span>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Thank You!</h3>
                <p className="text-gray-500 mt-2">We&#39;ll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    placeholder="Your city"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
