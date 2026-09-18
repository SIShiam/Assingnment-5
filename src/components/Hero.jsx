export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Build your perfect{' '}
          <span className="text-brand-gradient">Dev Stack</span>
        </h1>
        <p className="mt-5 max-w-md text-base text-gray-400">
          Explore modern frontend, backend, database, and DevOps technologies,
          then curate your own personal tech stack for your next project — all
          in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-full border border-gray-500 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-white hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80"
          alt="Developer workspace with code on screen"
          className="w-full max-w-md rounded-2xl border border-white/10 object-cover shadow-2xl"
        />
      </div>
    </section>
  )
}
