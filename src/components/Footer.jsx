import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-xl font-bold tracking-wide">
                T.O ANIFOWOSE
              </h2>

              <p className="mt-1 text-xs font-medium tracking-[0.3em] text-amber-400">
                REAL ESTATE
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Discover exceptional properties and find a place
              you can proudly call home.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">

              <Link
                to="/"
                className="block transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/properties"
                className="block transition hover:text-white"
              >
                Properties
              </Link>

              <Link
                to="/agents"
                className="block transition hover:text-white"
              >
                Our Agents
              </Link>

              <Link
                to="/contact"
                className="block transition hover:text-white"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold">
              Services
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <p>Property Sales</p>
              <p>Property Rentals</p>
              <p>Property Management</p>
              <p>Property Consultation</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <p>Osun Idi-Emi, Opposite  Osin Primary School, Ilorin Kwara State, Nigeria</p>
              <p>+234 802 476 2642</p>
              <p>management@T.O ANIFOWOSE.com</p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} T.O Anifowose Real Estate.
            All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;