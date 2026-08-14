import { Link } from "react-router-dom";

function ComingSoon({ title }) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          T.O ANIFOWOSE Real Estate
        </p>

        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-500">
          We're currently building this section.
          Check back soon.
        </p>

        <Link
          to="/"
          className="mt-7 inline-block rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white"
        >
          Back Home
        </Link>

      </div>
    </main>
  );
}

export default ComingSoon;