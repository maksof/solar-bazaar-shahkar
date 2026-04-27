const products = [
  {
    icon: "🔆",
    title: "Solar Panels",
    desc: "Mono & poly-crystalline panels from 100W to 500W+. High efficiency with 25-year warranty.",
    badge: "Most Popular",
  },
  {
    icon: "⚡",
    title: "Solar Inverters",
    desc: "Hybrid, on-grid, and off-grid inverters from top brands like Growatt, Solis, and Huawei.",
    badge: null,
  },
  {
    icon: "🔋",
    title: "Batteries",
    desc: "Lithium & AGM batteries for energy storage. Keep power running even at night or cloudy days.",
    badge: null,
  },
  {
    icon: "🏠",
    title: "Home Solar System",
    desc: "Complete 3kW to 20kW home solar systems — fully installed and ready to power your house.",
    badge: "Best Value",
  },
  {
    icon: "🏭",
    title: "Commercial Systems",
    desc: "Large-scale solar solutions for factories, shops, and offices. Reduce your business energy cost.",
    badge: null,
  },
  {
    icon: "🔌",
    title: "Accessories",
    desc: "MC4 connectors, solar cables, mounting structures, charge controllers and more.",
    badge: null,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-semibold uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Our Products & Services</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              {product.badge && (
                <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <span className="text-5xl">{product.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{product.title}</h3>
              <p className="text-gray-500 leading-relaxed">{product.desc}</p>
              <a
                href="#contact"
                className="inline-block mt-5 text-yellow-600 font-semibold hover:underline text-sm"
              >
                Enquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
