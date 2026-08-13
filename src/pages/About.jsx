import {
  Award,
  Building2,
  CheckCircle,
  Handshake,
  Home,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-slate-900 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              About Toanifowose
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
              Helping you find a place
              <span className="text-amber-400">
                {" "}to call home.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Toanifowose Real Estate connects people with quality
              properties while making the buying, renting and
              selling experience simple and transparent.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/properties"
                className="rounded-lg bg-amber-500 px-7 py-4 text-center font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Explore Properties
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Talk to Our Team
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          {/* Visual */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl bg-gray-100">

              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                alt="Modern luxury home"
                className="h-[500px] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-6 right-6 rounded-2xl bg-slate-900 p-6 text-white shadow-xl sm:right-10">

              <p className="text-3xl font-bold text-amber-400">
                100+
              </p>

              <p className="mt-1 text-sm text-white/70">
                Properties listed
              </p>

            </div>

          </div>

          {/* Text */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Real estate built around people.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Toanifowose Real Estate, we believe finding the
              right property should be exciting, straightforward
              and stress-free.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our goal is to connect buyers, renters, investors
              and property owners with opportunities that match
              their needs. We focus on quality properties,
              professional service and long-term relationships.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Professional property guidance",
                "Carefully selected properties",
                "Transparent communication",
                "Customer-focused service",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="shrink-0 text-amber-500"
                  />

                  <span className="font-medium text-slate-800">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="bg-gray-50 px-6 py-16">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">

          <Stat
            number="100+"
            label="Properties"
          />

          <Stat
            number="50+"
            label="Happy Clients"
          />

          <Stat
            number="20+"
            label="Locations"
          />

          <Stat
            number="5+"
            label="Years Experience"
          />

        </div>

      </section>

      {/* ================= MISSION / VISION ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-7 md:grid-cols-2">

            <InfoCard
              icon={<Building2 size={25} />}
              title="Our Mission"
              text="To make quality real estate accessible through professional guidance, reliable information and exceptional customer service."
            />

            <InfoCard
              icon={<Award size={25} />}
              title="Our Vision"
              text="To become a trusted real estate brand known for integrity, quality properties and outstanding client experiences."
            />

          </div>

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="bg-slate-900 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A better way to navigate real estate.
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <Feature
              icon={<ShieldCheck size={24} />}
              title="Trust"
              text="We prioritize honest communication and transparent property information."
            />

            <Feature
              icon={<Home size={24} />}
              title="Quality"
              text="We showcase properties selected with our clients' needs in mind."
            />

            <Feature
              icon={<Users size={24} />}
              title="People First"
              text="Our clients are at the center of everything we do."
            />

            <Feature
              icon={<Handshake size={24} />}
              title="Support"
              text="We're here to guide you from your first enquiry to your final decision."
            />

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-amber-50 px-7 py-14 text-center md:px-14">

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Ready to find your next property?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
            Explore our available properties or speak directly
            with our team about what you're looking for.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/properties"
              className="rounded-lg bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Browse Properties
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-900 transition hover:border-slate-900"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ================= STAT ================= */

function Stat({ number, label }) {
  return (
    <div className="text-center">

      <p className="text-3xl font-bold text-slate-900 md:text-4xl">
        {number}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {label}
      </p>

    </div>
  );
}


/* ================= INFO CARD ================= */

function InfoCard({
  icon,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-gray-100 p-8">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {text}
      </p>

    </div>
  );
}


/* ================= FEATURE ================= */

function Feature({
  icon,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/60">
        {text}
      </p>

    </div>
  );
}

export default About;