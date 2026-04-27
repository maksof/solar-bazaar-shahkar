export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-semibold uppercase tracking-wider text-sm">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">About Solar Shahkar</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              Solar Shahkar is a leading solar energy company based in Shahkar, dedicated to providing affordable and reliable solar solutions to homes and businesses across Pakistan.
            </p>
            <p>
              We supply and install high-quality solar panels, inverters, batteries, and complete off-grid and on-grid solar systems. Our expert team ensures professional installation and after-sale support.
            </p>
            <p>
              With over a decade of experience and hundreds of successful installations, we are committed to helping Pakistan transition to clean, sustainable energy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🏆", title: "Quality Products", desc: "Only certified, top-brand solar equipment" },
              { icon: "🔧", title: "Expert Installation", desc: "Trained engineers for every project" },
              { icon: "💰", title: "Best Prices", desc: "Competitive pricing with no compromise" },
              { icon: "📞", title: "After-Sale Support", desc: "Dedicated support after installation" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-yellow-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-gray-800 mt-3 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
