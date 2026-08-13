import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Mail,
  MapPin,
  Maximize,
  Phone,
  Share2,
} from "lucide-react";

import { useFavorites } from "../context/FavoritesContext.jsx";

import properties from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const [currentImage, setCurrentImage] = useState(0);

  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  const property = properties.find(
    (item) => String(item.id) === String(id)
  );

  if (!property) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Property not found
          </h1>

          <Link
            to="/properties"
            className="mt-4 inline-block rounded-lg bg-slate-900 px-5 py-3 text-white"
          >
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }



  const images =
    property.images?.length > 0
      ? property.images
      : [property.image];

  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  return (
    <main className="bg-white">

      {/* ================= BREADCRUMB ================= */}

      <div className="mx-auto max-w-7xl px-6 pt-8">

        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-amber-600"
        >
          <ArrowLeft size={17} />
          Back to properties
        </Link>

      </div>

      {/* ================= IMAGE GALLERY ================= */}

<section className="mx-auto mt-6 max-w-7xl px-6">

  <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">

    {/* Main Image */}

    <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gray-100 md:h-[550px]">

      <img
        src={images[currentImage]}
        alt={property.title}
        className="h-full w-full object-cover"
      />

      {/* Property Type */}

      <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow">
        {property.type}
      </span>

      {/* Favorite */}

      <button
        type="button"
        onClick={() => toggleFavorite(property.id)}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition hover:scale-105"
        aria-label={
          isFavorite(property.id)
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        <Heart
          size={20}
          className={
            isFavorite(property.id)
              ? "fill-red-500 text-red-500"
              : "text-slate-700"
          }
        />
      </button>

      {/* Previous / Next */}

      {images.length > 1 && (
        <>
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Counter */}

      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
          {currentImage + 1} / {images.length}
        </div>
      )}

    </div>

    {/* Side Images */}

    <div className="hidden gap-3 lg:grid">

      {images.slice(1, 3).map((image, index) => (
        <button
          key={image}
          onClick={() => setCurrentImage(index + 1)}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={image}
            alt={`${property.title} ${index + 2}`}
            className="h-full w-full object-cover transition hover:scale-105"
          />
        </button>
      ))}

    </div>

  </div>

</section>
      {/* ================= PROPERTY INFO ================= */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

          {/* Main Content */}

          <div>

            {/* Title */}

            <div className="flex flex-col justify-between gap-6 md:flex-row">

              <div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={17} />
                  {property.location}
                </div>

                <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  {property.title}
                </h1>

              </div>

              <div className="md:text-right">

                <p className="text-3xl font-bold text-amber-600">
                  ₦{property.price.toLocaleString()}
                </p>

                {property.type === "For Rent" && (
                  <p className="mt-1 text-sm text-gray-500">
                    per year
                  </p>
                )}

              </div>

            </div>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-2 gap-3 border-y border-gray-100 py-6 sm:grid-cols-4">

              <PropertyStat
                icon={<BedDouble size={20} />}
                label="Bedrooms"
                value={property.bedrooms}
              />

              <PropertyStat
                icon={<Bath size={20} />}
                label="Bathrooms"
                value={property.bathrooms}
              />

              <PropertyStat
                icon={<Maximize size={20} />}
                label="Area"
                value={`${property.area} m²`}
              />

              <PropertyStat
                icon={<HomeIcon />}
                label="Type"
                value={property.propertyType}
              />

            </div>

            {/* Description */}

            <section className="mt-10">

              <h2 className="text-2xl font-bold text-slate-900">
                About this property
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {property.description ||
                  "This exceptional property offers comfortable living spaces, quality finishes and a desirable location. It is an excellent choice for individuals or families looking for a beautiful place to call home."}
              </p>

            </section>

            {/* Amenities */}

            <section className="mt-10">

              <h2 className="text-2xl font-bold text-slate-900">
                Property Features
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                {(
                  property.amenities || [
                    "Modern kitchen",
                    "Spacious living room",
                    "Secure parking",
                    "24/7 security",
                    "Reliable water supply",
                    "Power supply",
                  ]
                ).map((amenity) => (

                  <div
                    key={amenity}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                      <Check size={15} />
                    </span>

                    {amenity}

                  </div>

                ))}

              </div>

            </section>

            {/* Location */}

            <section className="mt-12">

              <h2 className="text-2xl font-bold text-slate-900">
                Location
              </h2>

              <div className="mt-5 flex h-72 items-center justify-center rounded-2xl bg-gray-100">

                <div className="text-center">

                  <MapPin
                    size={40}
                    className="mx-auto text-amber-500"
                  />

                  <p className="mt-3 font-semibold text-slate-900">
                    {property.location}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Map integration will be added later.
                  </p>

                </div>

              </div>

            </section>

          </div>

          {/* ================= CONTACT CARD ================= */}

          <aside>

            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">

              <p className="text-sm text-gray-500">
                Interested in this property?
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Contact our agent
              </h2>

              {/* Agent */}

              <div className="mt-6 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
                  TF
                </div>

                <div>

                  <p className="font-bold text-slate-900">
                    Toanifowose Team
                  </p>

                  <p className="text-sm text-gray-500">
                    Property Consultant
                  </p>

                </div>

              </div>

              {/* Contact */}

              <div className="mt-6 space-y-3">

                <a
                  href="tel:+2348000000000"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 font-semibold text-slate-900 transition hover:border-slate-900"
                >
                  <Phone size={18} />
                  Call Agent
                </a>

                <a
                  href="mailto:hello@toanifowose.com"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 font-semibold text-slate-900 transition hover:border-slate-900"
                >
                  <Mail size={18} />
                  Email Agent
                </a>

              </div>

              {/* Inspection */}

              <Link
                to={`/contact?property=${property.id}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                <CalendarDays size={18} />
                Book an Inspection
              </Link>

              {/* Share */}

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: property.title,
                      text: `Check out this property: ${property.title}`,
                      url: window.location.href,
                    });
                  }
                }}
                className="mt-3 flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold text-gray-500 hover:text-slate-900"
              >
                <Share2 size={17} />
                Share Property
              </button>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}


/* ================= STAT ================= */

function PropertyStat({
  icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="text-amber-600">
        {icon}
      </div>

      <div>
        <p className="text-xs text-gray-400">
          {label}
        </p>

        <p className="mt-1 font-semibold text-slate-900">
          {value}
        </p>
      </div>

    </div>
  );
}


/* ================= HOME ICON ================= */

function HomeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7" />
      <path d="M9 22V12h6v10" />
      <path d="M4 10v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10" />
    </svg>
  );
}

export default PropertyDetails;