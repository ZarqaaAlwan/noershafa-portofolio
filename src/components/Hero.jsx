export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#081b3d] to-[#040817] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Teks Perkenalan */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <span className="text-[#00d2ff] font-semibold tracking-wider uppercase text-sm drop-shadow">
            Content Creator & Planner
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#0066ff]">Nurshafa Michella</span>
          </h1>
          <p className="text-slate-200 text-lg leading-relaxed">
            Kreator konten visual, pengarah video, dan perancang strategi media sosial yang berfokus pada konten kreatif dan estetis.
          </p>

          {/* Tombol Opsi Download CV */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a
              href="/CV-ATS-Nurshafa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-[#00d2ff] text-[#00d2ff] hover:bg-[#00d2ff]/10 font-semibold rounded-xl transition duration-300 shadow-md flex items-center gap-2"
            >
              📄 Unduh CV ATS (PDF)
            </a>
            <a
              href="/CV-Desain-Nurshafa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#00d2ff] text-[#0a1128] hover:bg-[#00d2ff]/80 font-bold rounded-xl transition duration-300 shadow-md flex items-center gap-2"
            >
              🎨 Unduh CV Kreatif (PDF)
            </a>
          </div>
        </div>

        {/* Frame Foto Profil */}
        <div className="mt-12 md:mt-0 relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00d2ff] via-[#0066ff] to-[#00d2ff] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
            <img
              src="/profile.jpg"
              alt="Foto Nurshafa Michella Fadlyn"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}