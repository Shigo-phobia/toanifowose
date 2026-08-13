import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { useFavorites } from "../context/FavoritesContext.jsx";

function PropertyCard({ property }) {
  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  const favorite = isFavorite(property.id);

  const handleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(property.id);
  };

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}

      <div className="relative h-64 overflow-hidden">

        <Link to={`/properties/${property.id}`}>

          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

        </Link>

        {/* PROPERTY TYPE */}

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow">
          {property.type}
        </span>

        {/* FAVORITE */}

        <button
          type="button"
          onClick={handleFavorite}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:scale-105"
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          <Heart
            size={19}
            className={
              favorite
                ? "fill-red-500 text-red-500"
                : "text-slate-700"
            }
          />
        </button>

      </div>

      {/* CONTENT */}

      <div className="p-5">

        <Link to={`/properties/${property.id}`}>

          <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition group-hover:text-amber-600">
            {property.title}
          </h3>

        </Link>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">

          <MapPin size={16} />

          {property.location}

        </div>

        {/* PRICE */}

        <p className="mt-4 text-xl font-bold text-amber-600">
          ₦{property.price.toLocaleString()}
        </p>

        {/* STATS */}

        <div className="mt-4 flex gap-5 border-t border-gray-100 pt-4 text-sm text-gray-500">

          <span>
            🛏 {property.bedrooms} Beds
          </span>

          <span>
            🛁 {property.bathrooms} Baths
          </span>

          <span>
            📐 {property.area} m²
          </span>

        </div>

      </div>

    </article>
  );
}

export default PropertyCard;