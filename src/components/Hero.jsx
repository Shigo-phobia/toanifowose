import { Search } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/55" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            Find Your Perfect Place
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Find a place
            <br />
            you can call
            <br />
            <span className="text-amber-400">home.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Explore carefully selected homes, apartments and luxury properties
            in some of the most desirable locations.
          </p>

          {/* Search Box */}
          <div className="mt-10 rounded-2xl bg-white p-3 shadow-2xl md:p-4">
            <div className="grid gap-3 md:grid-cols-4">
              
              <div className="rounded-xl bg-gray-50 px-4 py-3">
                <label className="block text-xs font-semibold text-gray-500">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Where do you want to live?"
                  className="mt-1 w-full bg-transparent text-sm text-gray-900 outline-none"
                />
              </div>

              <div className="rounded-xl bg-gray-50 px-4 py-3">
                <label className="block text-xs font-semibold text-gray-500">
                  Property Type
                </label>

                <select className="mt-1 w-full bg-transparent text-sm text-gray-900 outline-none">
                  <option>Any Type</option>
                  <option>Apartment</option>
                  <option>Duplex</option>
                  <option>House</option>
                  <option>Land</option>
                </select>
              </div>

              <div className="rounded-xl bg-gray-50 px-4 py-3">
                <label className="block text-xs font-semibold text-gray-500">
                  Purpose
                </label>

                <select className="mt-1 w-full bg-transparent text-sm text-gray-900 outline-none">
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-amber-600">
                <Search size={19} />
                Search
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;