export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a1128] text-white px-8 md:px-20 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Judul Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tentang <span className="text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">Saya</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mengenal lebih dekat dedikasi dan perjalanan kreatif saya di industri pembuatan konten dan produksi media visual.
          </p>
        </div>

        {/* Konten Grid: Ringkasan Bio & Kemampuan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Card Deskripsi */}
          <div className="bg-slate-900/60 p-8 rounded-2xl border border-[#00d2ff]/20 shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold text-[#00d2ff]">Creative Visioner</h3>
            <p className="text-slate-300 leading-relaxed">
              Berbekal latar belakang di bidang penyiaran dan media kreatif, saya memadukan kemampuan estetika visual dengan konsep cerita (storytelling) yang kuat untuk menciptakan karya visual yang relevan dan berdampak.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Fokus utama saya meliputi pengarahan video (video directing), penyusunan alur konten strategis (content planning), hingga eksekusi editing akhir.
            </p>
          </div>

          {/* Grid Skill Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 text-center hover:border-[#00d2ff]/40 transition-all">
              <h4 className="text-2xl md:text-3xl font-bold text-[#00d2ff] mb-1">Content</h4>
              <p className="text-sm text-slate-400">Strategy & Planning</p>
            </div>
            <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 text-center hover:border-[#00d2ff]/40 transition-all">
              <h4 className="text-2xl md:text-3xl font-bold text-[#00d2ff] mb-1">Video</h4>
              <p className="text-sm text-slate-400">Directing & Editing</p>
            </div>
            <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 text-center hover:border-[#00d2ff]/40 transition-all">
              <h4 className="text-2xl md:text-3xl font-bold text-[#00d2ff] mb-1">Branding</h4>
              <p className="text-sm text-slate-400">Personal Growth</p>
            </div>
            <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 text-center hover:border-[#00d2ff]/40 transition-all">
              <h4 className="text-2xl md:text-3xl font-bold text-[#00d2ff] mb-1">Visual</h4>
              <p className="text-sm text-slate-400">Media Production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}