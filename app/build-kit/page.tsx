export default function BuildKitPage() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-4">
        Electric Go-Kart Build Kit
      </h1>

      <p className="mb-6">
        Complete parts list for building a DIY electric go-kart. All
        components listed are compatible combinations — no guesswork.
      </p>

      <div className="mb-8">
        <a
          href="#essential"
          className="bg-black text-white px-6 py-3 rounded inline-block"
        >
          View Essential Parts
        </a>
      </div>

      <section id="essential" className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Essential Components</h2>

        <ul className="space-y-3">
          <li>
            <a href="#" className="text-blue-600 underline">
              48V Brushless Motor
            </a>
            <p>Reliable power for most builds.</p>
          </li>

          <li>
            <a href="#" className="text-blue-600 underline">
              48V Controller
            </a>
            <p>Matches motor for smooth control.</p>
          </li>

          <li>
            <a href="#" className="text-blue-600 underline">
              48V Battery
            </a>
            <p>Long runtime and lightweight.</p>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Drive System</h2>

        <ul className="space-y-3">
          <li>
            <a href="#" className="text-blue-600 underline">
              Chain &amp; Sprocket Kit
            </a>
          </li>

          <li>
            <a href="#" className="text-blue-600 underline">
              Rear Axle Kit
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Tools Required</h2>

        <ul className="space-y-3">
          <li>
            <a href="#" className="text-blue-600 underline">
              Welder
            </a>
          </li>

          <li>
            <a href="#" className="text-blue-600 underline">
              Angle Grinder
            </a>
          </li>

          <li>
            <a href="#" className="text-blue-600 underline">
              Drill
            </a>
          </li>
        </ul>
      </section>

      <div className="mt-10">
        <a
          href="/best-motor"
          className="bg-black text-white px-6 py-3 rounded inline-block"
        >
          Best Motors for DIY Go-Karts
        </a>
      </div>
    </main>
  )
}
 
