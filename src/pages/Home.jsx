import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function Home() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) {
      params.set("location", location.trim());
    }

    if (propertyType) {
      params.set("type", propertyType);
    }

    if (purpose) {
      params.set("purpose", purpose);
    }

    const query = params.toString();

    navigate(
      query
        ? `/properties?${query}`
        : "/properties"
    );
  };

  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20">

          <div className="w-full max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              TOANIFOWOSE REAL ESTATE
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight text-white md:text-7xl">
              Find a place
              <br />
              you can call
              <br />
              <span className="text-amber-400">
                home.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Discover exceptional homes, apartments and investment
              properties in desirable locations.
            </p>

            {/* SEARCH */}
            <form
              onSubmit={handleSearch}
              className="mt-10 rounded-2xl bg-white p-3 shadow-2xl"
            >

              <div className="grid gap-3 md:grid-cols-4">

                {/* Location */}
                <div className="rounded-xl bg-gray-50 px-4 py-3">

                  <label
                    htmlFor="location"
                    className="block text-xs font-semibold text-gray-500"
                  >
                    Location
                  </label>

                  <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(event) =>
                      setLocation(event.target.value)
                    }
                    placeholder="City or area"
                    className="mt-1 w-full bg-transparent text-sm text-gray-900 outline-none"
                  />

                </div>

                {/* Property Type */}
                <div className="rounded-xl bg-gray-50 px-4 py-3">

                  <label
                    htmlFor="propertyType"
                    className="block text-xs font-semibold text-gray-500"
                  >
                    Property Type
                  </label>

                  <select
                    id="propertyType"
                    value={propertyType}
                    onChange={(event) =>
                      setPropertyType(event.target.value)
                    }
                    className="mt-1 w-full bg-transparent text-sm text-gray-900 outline-none"
                  >
                    <option value="">
                      Any Type
                    </option>

                    <option value="House">
                      House
                    </option>

                    <option value="Apartment">
                      Apartment
                    </option>

                    <option value="Duplex">
                      Duplex
                    </option>

                    <option value="Land">
                      Land
                    </option>
                  </select>

                </div>

                {/* Purpose */}
                <div className="rounded-xl bg-gray-50 px-4 py-3">

                  <label
                    htmlFor="purpose"
                    className="block text-xs font-semibold text-gray-500"
                  >
                    Purpose
                  </label>

                  <select
                    id="purpose"
                    value={purpose}
                    onChange={(event) =>
                      setPurpose(event.target.value)
                    }
                    className="mt-1 w-full bg-transparent text-sm text-gray-900 outline-none"
                  >
                    <option value="">
                      Buy or Rent
                    </option>

                    <option value="For Sale">
                      Buy
                    </option>

                    <option value="For Rent">
                      Rent
                    </option>
                  </select>

                </div>

                {/* Search */}
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-amber-600"
                >
                  Search Properties
                </button>

              </div>

            </form>

          </div>

        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                Featured Properties
              </p>

              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                Explore our finest properties
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                Discover carefully selected properties offering
                comfort, quality and exceptional value.
              </p>
            </div>

            <Link
              to="/properties"
              className="w-fit rounded-lg border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              View All Properties
            </Link>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {properties.map((property) => (
              <Link
                key={property.id}
                to={`/properties/${property.id}`}
                className="block"
              >
                <PropertyCard property={property} />
              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* WHY US */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
              Why Toanifowose
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Real estate made simpler
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              We make it easier to discover, evaluate and move
              into the property that's right for you.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-3xl">🏠</div>

              <h3 className="mt-5 text-xl font-bold">
                Quality Properties
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Carefully selected homes and properties.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-3xl">🤝</div>

              <h3 className="mt-5 text-xl font-bold">
                Trusted Guidance
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Professional assistance throughout your property journey.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-3xl">🔑</div>

              <h3 className="mt-5 text-xl font-bold">
                Easy Process
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                A straightforward path from discovery to inspection.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Your next move starts here
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Ready to find your dream property?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Let our team help you find a property that matches
            your lifestyle, needs and budget.
          </p>

          <Link
            to="/properties"
            className="mt-8 inline-block rounded-lg bg-amber-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Explore Properties
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;