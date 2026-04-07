

export default function Archive() {
  return (
    <section id="archives" className="max-w-7xl mx-auto px-6 py-16 bg-[#EFECE5]">
      <div className="flex flex-col items-center mb-12 text-center">
        <span className="text-[10px] tracking-[0.5em] text-stone-400 uppercase mb-4">
          Traceable Narratives
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-heritage-brown italic">The Archive</h2>
        <div className="w-12 h-px bg-heritage-brown/20 mt-6 mb-8"></div>
      </div>

      <div className="relative w-full py-20 flex flex-col items-center justify-center rounded-brand bg-stone-50/50 border border-dashed border-stone-200 transition-all duration-500 overflow-hidden">
        <div className="space-y-4 text-center relative z-10 px-4">
          <p className="font-serif text-2xl text-stone-300 italic">Will be available soon...</p>
          <p className="text-[10px] tracking-[0.3em] text-stone-400 uppercase max-w-xs mx-auto leading-relaxed">
            Documenting our journey through purpose-driven collections and community impact.
          </p>
        </div>

        {/* Background Watermark Logo */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          {/* 2. Use the direct public path "/hilom.png" here */}
          <img src="/hilom.png" alt="" className="w-1/2 grayscale transition-all duration-700" />
        </div>
      </div>
    </section>
  );
}
