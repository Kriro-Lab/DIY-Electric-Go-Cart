export default function BestMotorPage() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-4">
        Best Motors for DIY Electric Go-Karts
      </h1>

      <p className="mb-6">
        Choosing the right motor is one of the most important parts of a DIY
        electric go-kart build. Below are three common options depending on
        budget, speed, and performance goals.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">1. Budget Motor Option</h2>
        <p className="mb-3">
          A good entry-level choice for simple backyard builds and lighter
          go-karts.
        </p>
        <a href="#" className="text-blue-600 underline">
          View Budget Motor
        </a>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">2. Mid-Range Motor Option</h2>
        <p className="mb-3">
          Better power and stronger acceleration for a more capable kart.
        </p>
        <a href="#" className="text-blue-600 underline">
          View Mid-Range Motor
        </a>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">3. Performance Motor Option</h2>
        <p className="mb-3">
          Best for builders wanting more speed and stronger overall performance.
        </p>
        <a href="#" className="text-blue-600 underline">
          View Performance Motor
        </a>
      </section>

      <div className="mt-10">
        <a
          href="/build-kit"
          className="bg-black text-white px-6 py-3 rounded inline-block"
        >
          Back to Build Kit
        </a>
      </div>
    </main>
  )
}
