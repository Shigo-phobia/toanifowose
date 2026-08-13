import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Trash2,
} from "lucide-react";

import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const {
    favorites,
    removeFavorite,
    clearFavorites,
  } = useFavorites();

  const favoriteProperties = properties.filter(
    (property) =>
      favorites.includes(Number(property.id))
  );

  return (
    <main className="min-h-[70vh] bg-gray-50">

      {/* ================= HEADER ================= */}

      <section className="bg-slate-900 px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Saved Properties
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <h1 className="text-4xl font-bold text-white md:text-5xl">
                Your Favorites
              </h1>

              <p className="mt-4 max-w-xl leading-7 text-white/70">
                Keep track of the properties you love and
                come back to them whenever you're ready.
              </p>

            </div>

            {favoriteProperties.length > 0 && (

              <button
                onClick={clearFavorites}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                <Trash2 size={17} />
                Clear All
              </button>

            )}

          </div>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="px-6 py-12">

        <div className="mx-auto max-w-7xl">

          {favoriteProperties.length > 0 ? (

            <>
              <div className="mb-8 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
                  <Heart
                    size={19}
                    className="fill-red-500 text-red-500"
                  />
                </div>

                <div>

                  <p className="font-bold text-slate-900">
                    {favoriteProperties.length}{" "}
                    {favoriteProperties.length === 1
                      ? "Property"
                      : "Properties"}{" "}
                    Saved
                  </p>

                  <p className="text-sm text-gray-500">
                    Your saved properties
                  </p>

                </div>

              </div>

              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                {favoriteProperties.map((property) => (

                  <div
                    key={property.id}
                    className="relative"
                  >

                    <PropertyCard
                      property={property}
                    />

                    {/* Remove button */}

                    <button
                      onClick={() =>
                        removeFavorite(property.id)
                      }
                      className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow transition hover:text-red-500"
                      title="Remove from favorites"
                      aria-label="Remove from favorites"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                ))}

              </div>
            </>

          ) : (

            /* ================= EMPTY STATE ================= */

            <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">

                <Heart
                  size={34}
                  className="text-gray-400"
                />

              </div>

              <h2 className="mt-7 text-2xl font-bold text-slate-900">
                No saved properties yet
              </h2>

              <p className="mx-auto mt-3 max-w-md leading-7 text-gray-500">
                When you find a property you love, click the
                heart icon to save it here.
              </p>

              <Link
                to="/properties"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                Explore Properties
                <ArrowRight size={18} />
              </Link>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Favorites;