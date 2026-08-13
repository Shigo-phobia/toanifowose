import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Search,
} from "lucide-react";

import agents from "../data/agents";

function Agents() {
  const [search, setSearch] = useState("");

  const filteredAgents = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return agents;
    }

    return agents.filter((agent) =>
      `${agent.name} ${agent.role} ${agent.location}`
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  return (
    <main className="bg-gray-50">

      {/* ================= HERO ================= */}

      <section className="bg-slate-900 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Our Team
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Meet the people behind
            <span className="text-amber-400">
              {" "}your property journey.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Our property professionals are here to help you
            buy, rent, sell and manage real estate with confidence.
          </p>

          {/* Search */}

          <div className="mt-10 max-w-xl">

            <div className="flex items-center rounded-xl bg-white px-4">

              <Search
                size={20}
                className="text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search agents..."
                className="w-full bg-transparent px-3 py-4 text-sm outline-none"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= AGENTS ================= */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                Our Professionals
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Find your property expert
              </h2>

            </div>

            <p className="hidden text-sm text-gray-500 sm:block">
              {filteredAgents.length} agents
            </p>

          </div>

          {filteredAgents.length > 0 ? (

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredAgents.map((agent) => (

                <AgentCard
                  key={agent.id}
                  agent={agent}
                />

              ))}

            </div>

          ) : (

            <div className="rounded-2xl bg-white px-6 py-20 text-center">

              <h2 className="text-2xl font-bold text-slate-900">
                No agents found
              </h2>

              <p className="mt-3 text-gray-500">
                Try searching for another name or location.
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-6 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white"
              >
                View All Agents
              </button>

            </div>

          )}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Need Help?
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Not sure which property is right for you?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
            Speak with our team and we'll help you find properties
            that match your needs and budget.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-amber-600"
          >
            Talk to Our Team
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =====================================================
   AGENT CARD
===================================================== */

function AgentCard({ agent }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}

      <div className="relative h-72 overflow-hidden bg-gray-100">

        <img
          src={agent.image}
          alt={agent.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">

          <p className="text-sm font-medium text-white">
            {agent.role}
          </p>

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-xl font-bold text-slate-900">
          {agent.name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

          <MapPin size={16} />

          {agent.location}

        </div>

        <div className="mt-5 border-t border-gray-100 pt-5">

          <p className="text-sm text-gray-500">
            Properties handled
          </p>

          <p className="mt-1 text-2xl font-bold text-amber-600">
            {agent.properties}
          </p>

        </div>

        {/* Contact */}

        <div className="mt-5 grid grid-cols-2 gap-2">

          <a
            href={`tel:${agent.phone}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
          >
            <Phone size={16} />
            Call
          </a>

          <a
            href={`mailto:${agent.email}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
          >
            <Mail size={16} />
            Email
          </a>

        </div>

        <Link
          to={`/contact?agent=${agent.id}`}
          className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
        >
          Contact Agent
          <ArrowRight size={16} />
        </Link>

      </div>

    </article>
  );
}

export default Agents;