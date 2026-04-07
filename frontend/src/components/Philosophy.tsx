
export default function Philosophy() {
  return (
    <>
      <section id="philosophy" className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-[#F9F7F2]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase mb-4">
            The Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-heritage-brown italic">Our Vision</h2>
          <p className="mt-6 text-stone-500 max-w-2xl font-light italic text-sm md:text-base leading-relaxed">
            Moving beyond fast-fashion cycles, our collections are released as intentional "Purpose
            Drops"—each dedicated to a specific community and social impact goal.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase block">
                Our Foundation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-heritage-brown italic leading-tight">
                Fashion as a tool for healing
              </h2>
            </div>

            <p className="text-stone-600 leading-relaxed text-sm md:text-base">
              HILOM is rooted in the belief that clothing should not cost someone their culture,
              dignity, or livelihood. We view healing as a collective process—reviving endangered
              weaving techniques and strengthening local economies.
            </p>

            <div className="pt-4">
              <blockquote className="border-l-2 border-heritage-brown/20 pl-6 py-2">
                <p className="font-serif text-xl md:text-2xl italic text-heritage-brown leading-relaxed">
                  "Every garment exists to heal something—and to honor someone."
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right Side: Image/Logo Container */}
          <div className="relative max-w-md mx-auto w-full aspect-[4/5] flex items-center justify-center bg-white rounded-brand overflow-hidden group border border-stone-100 shadow-sm">
            <img
              src="/hilom.png" 
              alt="HILOM Brand Logo"
              className="w-2/3 h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-heritage-brown/[0.02] pointer-events-none"></div>
          </div>
        </div>
      </section>

    </>
  );
}