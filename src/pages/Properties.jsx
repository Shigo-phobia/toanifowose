import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ChevronDown,
  Filter,
  Search,
  X,
} from "lucide-react";

import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const location = searchParams.get("location") || "";
  const type = searchParams.get("type") || "";
  const purpose = searchParams.get("purpose") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const bedrooms = searchParams.get("bedrooms") || "";
  const bathrooms = searchParams.get("bathrooms") || "";
  const sort = searchParams.get("sort") || "";

  const [locationInput, setLocationInput] = useState(location);

  const updateFilter = (name, value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setLocationInput("");
  };

  const handleLocationSearch = (event) => {
    event.preventDefault();

    updateFilter(
      "location",
      locationInput.trim()
    );
  };

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {

      const matchesLocation =
        !location ||
        property.location
          .toLowerCase()
          .includes(location.toLowerCase());

      const matchesType =
        !type ||
        property.propertyType === type;

      const matchesPurpose =
        !purpose ||
        property.type === purpose;

      const matchesMinPrice =
        !minPrice ||
        property.price >= Number(minPrice);

      const matchesMaxPrice =
        !maxPrice ||
        property.price <= Number(maxPrice);

      const matchesBedrooms =
        !bedrooms ||
        property.bedrooms >= Number(bedrooms);

      const matchesBathrooms =
        !bathrooms ||
        property.bathrooms >= Number(bathrooms);

      return (
        matchesLocation &&
        matchesType &&
        matchesPurpose &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBedrooms &&
        matchesBathrooms
      );
    });

    if (sort === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [
    location,
    type,
    purpose,
    minPrice,
    maxPrice,
    bedrooms,
    bathrooms,
    sort,
  ]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ================= HEADER ================= */}

      <section className="bg-slate-900 px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Property Listings
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Find your next property
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Explore homes, apartments and investment opportunities
            that match your needs.
          </p>

          {/* Location Search */}

          <form
            onSubmit={handleLocationSearch}
            className="mt-8 flex max-w-3xl overflow-hidden rounded-xl bg-white"
          >

            <div className="flex flex-1 items-center px-4">

              <Search
                size={20}
                className="mr-3 text-gray-400"
              />

              <input
                value={locationInput}
                onChange={(event) =>
                  setLocationInput(event.target.value)
                }
                placeholder="Search by city or location..."
                className="w-full py-4 text-sm outline-none"
              />

            </div>

            <button
              type="submit"
              className="bg-amber-500 px-6 font-semibold text-slate-950 hover:bg-amber-400"
            >
              Search
            </button>

          </form>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="px-6 py-10">

        <div className="mx-auto max-w-7xl">

          {/* Mobile Filter Button */}

          <div className="mb-6 flex items-center justify-between lg:hidden">

            <p className="font-semibold text-slate-900">
              {filteredProperties.length} Properties
            </p>

            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold"
            >
              <Filter size={17} />
              Filters
            </button>

          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

            {/* ================= FILTER SIDEBAR ================= */}

            <aside className="hidden lg:block">

              <FilterPanel
                type={type}
                purpose={purpose}
                minPrice={minPrice}
                maxPrice={maxPrice}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                sort={sort}
                updateFilter={updateFilter}
                clearFilters={clearFilters}
              />

            </aside>

            {/* ================= RESULTS ================= */}

            <div>

              <div className="mb-6 flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Showing
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">
                    {filteredProperties.length}{" "}
                    {filteredProperties.length === 1
                      ? "Property"
                      : "Properties"}
                  </h2>
                </div>

                <div className="hidden items-center gap-2 sm:flex">
                  <span className="text-sm text-gray-500">
                    Sort:
                  </span>

                  <select
                    value={sort}
                    onChange={(event) =>
                      updateFilter(
                        "sort",
                        event.target.value
                      )
                    }
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none"
                  >
                    <option value="">
                      Recommended
                    </option>

                    <option value="low-high">
                      Price: Low to High
                    </option>

                    <option value="high-low">
                      Price: High to Low
                    </option>
                  </select>
                </div>

              </div>

              {/* Property Grid */}

              {filteredProperties.length > 0 ? (

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                  {filteredProperties.map((property) => (

                    <Link
                      key={property.id}
                      to={`/properties/${property.id}`}
                      className="block"
                    >
                      <PropertyCard
                        property={property}
                      />
                    </Link>

                  ))}

                </div>

              ) : (

                <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">

                  <div className="mx-auto max-w-md">

                    <div className="text-5xl">
                      🏠
                    </div>

                    <h2 className="mt-5 text-2xl font-bold text-slate-900">
                      No properties found
                    </h2>

                    <p className="mt-3 text-gray-500">
                      Try adjusting your filters or searching
                      another location.
                    </p>

                    <button
                      onClick={clearFilters}
                      className="mt-6 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-amber-600"
                    >
                      Clear All Filters
                    </button>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* ================= MOBILE FILTERS ================= */}

      {mobileFiltersOpen && (

        <div className="fixed inset-0 z-[100] lg:hidden">

          <div
            className="absolute inset-0 bg-black/50"
            onClick={() =>
              setMobileFiltersOpen(false)
            }
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b px-6 py-5">

              <h2 className="text-xl font-bold">
                Filters
              </h2>

              <button
                onClick={() =>
                  setMobileFiltersOpen(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
              >
                <X size={20} />
              </button>

            </div>

            <div className="p-6">

              <FilterPanel
                type={type}
                purpose={purpose}
                minPrice={minPrice}
                maxPrice={maxPrice}
                bedrooms={bedrooms}
                bathrooms={bathrooms}
                sort={sort}
                updateFilter={updateFilter}
                clearFilters={clearFilters}
              />

              <button
                onClick={() =>
                  setMobileFiltersOpen(false)
                }
                className="mt-8 w-full rounded-lg bg-slate-900 py-4 font-semibold text-white"
              >
                Show {filteredProperties.length} Properties
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}


/* =========================================================
   FILTER PANEL
========================================================= */

function FilterPanel({
  type,
  purpose,
  minPrice,
  maxPrice,
  bedrooms,
  bathrooms,
  sort,
  updateFilter,
  clearFilters,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-bold text-slate-900">
          Filters
        </h2>

        <button
          onClick={clearFilters}
          className="text-xs font-semibold text-amber-600 hover:text-amber-700"
        >
          Clear all
        </button>

      </div>

      {/* Purpose */}

      <div className="mt-7">

        <label className="text-sm font-semibold text-slate-900">
          Purpose
        </label>

        <div className="mt-3 grid grid-cols-2 gap-2">

          <button
            onClick={() =>
              updateFilter(
                "purpose",
                purpose === "For Sale"
                  ? ""
                  : "For Sale"
              )
            }
            className={`rounded-lg border px-3 py-3 text-sm font-medium ${
              purpose === "For Sale"
                ? "border-amber-500 bg-amber-50 text-amber-700"
                : "border-gray-200"
            }`}
          >
            Buy
          </button>

          <button
            onClick={() =>
              updateFilter(
                "purpose",
                purpose === "For Rent"
                  ? ""
                  : "For Rent"
              )
            }
            className={`rounded-lg border px-3 py-3 text-sm font-medium ${
              purpose === "For Rent"
                ? "border-amber-500 bg-amber-50 text-amber-700"
                : "border-gray-200"
            }`}
          >
            Rent
          </button>

        </div>

      </div>

      {/* Property Type */}

      <div className="mt-7">

        <label className="text-sm font-semibold text-slate-900">
          Property Type
        </label>

        <div className="relative mt-3">

          <select
            value={type}
            onChange={(event) =>
              updateFilter(
                "type",
                event.target.value
              )
            }
            className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
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

          <ChevronDown
            size={17}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

        </div>

      </div>

      {/* Price */}

      <div className="mt-7">

        <label className="text-sm font-semibold text-slate-900">
          Price Range
        </label>

        <div className="mt-3 grid grid-cols-2 gap-2">

          <input
            type="number"
            placeholder="Min ₦"
            value={minPrice}
            onChange={(event) =>
              updateFilter(
                "minPrice",
                event.target.value
              )
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none focus:border-amber-500"
          />

          <input
            type="number"
            placeholder="Max ₦"
            value={maxPrice}
            onChange={(event) =>
              updateFilter(
                "maxPrice",
                event.target.value
              )
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none focus:border-amber-500"
          />

        </div>

      </div>

      {/* Bedrooms */}

      <div className="mt-7">

        <label className="text-sm font-semibold text-slate-900">
          Bedrooms
        </label>

        <div className="mt-3 relative">

          <select
            value={bedrooms}
            onChange={(event) =>
              updateFilter(
                "bedrooms",
                event.target.value
              )
            }
            className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
          >

            <option value="">
              Any
            </option>

            <option value="1">
              1+
            </option>

            <option value="2">
              2+
            </option>

            <option value="3">
              3+
            </option>

            <option value="4">
              4+
            </option>

            <option value="5">
              5+
            </option>

          </select>

          <ChevronDown
            size={17}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

        </div>

      </div>

      {/* Bathrooms */}

      <div className="mt-7">

        <label className="text-sm font-semibold text-slate-900">
          Bathrooms
        </label>

        <div className="mt-3 relative">

          <select
            value={bathrooms}
            onChange={(event) =>
              updateFilter(
                "bathrooms",
                event.target.value
              )
            }
            className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
          >

            <option value="">
              Any
            </option>

            <option value="1">
              1+
            </option>

            <option value="2">
              2+
            </option>

            <option value="3">
              3+
            </option>

            <option value="4">
              4+
            </option>

            <option value="5">
              5+
            </option>

          </select>

          <ChevronDown
            size={17}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

        </div>

      </div>

      {/* Sort */}

      <div className="mt-7">

        <label className="text-sm font-semibold text-slate-900">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(event) =>
            updateFilter(
              "sort",
              event.target.value
            )
          }
          className="mt-3 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
        >

          <option value="">
            Recommended
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

        </select>

      </div>

    </div>
  );
}

export default Properties;