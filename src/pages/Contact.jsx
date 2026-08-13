import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import properties from "../data/properties";

function Contact() {
  const [searchParams] = useSearchParams();

  const propertyId = searchParams.get("property");

  const selectedProperty = properties.find(
    (property) =>
      String(property.id) === String(propertyId)
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-[75vh] bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <CheckCircle
              size={34}
              className="text-green-600"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Request Received
          </h1>

          <p className="mt-4 leading-7 text-gray-500">
            Thank you, {formData.name}. Your inspection request
            has been recorded.
          </p>

          {selectedProperty && (
            <div className="mt-6 rounded-xl bg-gray-50 p-5 text-left">

              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Property
              </p>

              <p className="mt-2 font-bold text-slate-900">
                {selectedProperty.title}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {selectedProperty.location}
              </p>

              <p className="mt-3 text-sm text-gray-600">
                Requested date: {formData.date}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Requested time: {formData.time}
              </p>

            </div>
          )}

          <p className="mt-6 text-sm text-gray-500">
            Our property team will contact you to confirm the
            inspection details.
          </p>

          <Link
            to="/properties"
            className="mt-8 inline-block rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-amber-600"
          >
            Browse More Properties
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="bg-gray-50">

      {/* ================= HEADER ================= */}

      <section className="bg-slate-900 px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Let's find your next property
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            Have questions about a property or want to schedule
            an inspection? Our team is here to help.
          </p>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="px-6 py-12">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.5fr]">

          {/* ================= CONTACT INFO ================= */}

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Contact our team
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              Whether you're buying, renting or simply exploring
              your options, we'd be happy to speak with you.
            </p>

            <div className="mt-8 space-y-5">

              <ContactItem
                icon={<Phone size={20} />}
                title="Phone"
                value="+234 800 000 0000"
              />

              <ContactItem
                icon={<Mail size={20} />}
                title="Email"
                value="hello@toanifowose.com"
              />

              <ContactItem
                icon={<MapPin size={20} />}
                title="Office"
                value="Lagos, Nigeria"
              />

              <ContactItem
                icon={<Clock size={20} />}
                title="Opening Hours"
                value="Monday – Saturday, 8AM – 6PM"
              />

            </div>

            {/* Selected property */}

            {selectedProperty && (

              <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">

                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  You're enquiring about
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {selectedProperty.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} />
                  {selectedProperty.location}
                </div>

                <p className="mt-4 text-xl font-bold text-amber-600">
                  ₦{selectedProperty.price.toLocaleString()}
                </p>

              </div>

            )}

          </div>

          {/* ================= FORM ================= */}

          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <CalendarDays size={22} />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {selectedProperty
                    ? "Book an inspection"
                    : "Send us a message"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Fill out the form below and our team will
                  get back to you.
                </p>

              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}

              <div>

                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-900"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-amber-500"
                />

              </div>

              {/* Phone + Email */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500"
                  />

                </div>

              </div>

              {/* Date + Time */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="date"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    required={Boolean(selectedProperty)}
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500"
                  />

                </div>

                <div>

                  <label
                    htmlFor="time"
                    className="text-sm font-semibold text-slate-900"
                  >
                    Preferred Time
                  </label>

                  <select
                    id="time"
                    name="time"
                    required={Boolean(selectedProperty)}
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-amber-500"
                  >

                    <option value="">
                      Select a time
                    </option>

                    <option value="9:00 AM">
                      9:00 AM
                    </option>

                    <option value="10:00 AM">
                      10:00 AM
                    </option>

                    <option value="11:00 AM">
                      11:00 AM
                    </option>

                    <option value="12:00 PM">
                      12:00 PM
                    </option>

                    <option value="2:00 PM">
                      2:00 PM
                    </option>

                    <option value="3:00 PM">
                      3:00 PM
                    </option>

                    <option value="4:00 PM">
                      4:00 PM
                    </option>

                  </select>

                </div>

              </div>

              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-900"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="mt-2 w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500"
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                {selectedProperty
                  ? "Request Inspection"
                  : "Send Message"}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting this form, you agree to be
                contacted about your enquiry.
              </p>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ================= CONTACT ITEM ================= */

function ContactItem({
  icon,
  title,
  value,
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
        {icon}
      </div>

      <div>

        <p className="text-xs text-gray-400">
          {title}
        </p>

        <p className="mt-1 font-semibold text-slate-900">
          {value}
        </p>

      </div>

    </div>
  );
}

export default Contact;