export default function Experience() {
  const experiences = [
    {
      role: "Content Creator Intern",
      company: "PT. Radar Teknologi Komputer",
      period: "Agustus - Oktober 2025",
      desc: "Menyusun ideasi konten, eksekusi pengambilan gambar, dan penyuntingan video media sosial secara profesional dengan predikat sangat baik (Good Predicate).",
      img: "/magang-radar.png",
    },
    {
      role: "Video Director & Content Planner",
      company: "BNSP Certified Content Creator & Projects",
      period: "2025 - Sekarang",
      desc: "Tersertifikasi kompetensi Pembuat Konten (Content Creator) oleh BNSP. Memimpin konsep visual, menyusun alur cerita (storyboard & scriptwriting), serta mengarahkan pengambilan gambar untuk berbagai project kreatif.",
      img: "/sertifikat-bnsp.jpeg",
    },
  ];

  const achievements = [
    {
      title: "1st Winner National Short Movie Competition",
      event: "Happiness You 2025 - BINUS @Bekasi",
      year: "Mei 2025",
      desc: "Meraih Juara 1 Nasional dalam kompetisi film pendek yang diselenggarakan oleh Universitas Bina Nusantara.",
      img: "/prestasi-binus.jpg",
    },
    {
      title: "Juara 3 Film Pendek Nasional",
      event: "Festival Media & Komunikasi UIN",
      year: "2024",
      desc: "Pencapaian skala nasional dalam kategori pengarahan dan produksi karya film pendek kreatif.",
      img: "/prestasi-uin.jpg",
    },
    {
      title: "Pelatihan Tour Guide Kampung Wisata Pecinan Glodok",
      event: "Unika Atma Jaya & Bakti BCA",
      year: "Juli 2024",
      desc: "Sertifikasi keikutsertaan pelatihan pemanduan wisata dan komunikasi publik dalam program pemberdayaan kawasan budaya Glodok.",
      img: "/sertifikat-tourguide.png",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0a1128] text-white px-8 md:px-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Bagian Riwayat Kerja & Magang */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pengalaman <span className="text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">Kerja & Magang</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Rekam jejak pengalaman profesional dan eksekusi proyek media di dunia industri.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-900/70 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-[#00d2ff]/40 transition-all duration-300 relative pl-8 md:pl-10 shadow-lg flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00d2ff] to-[#0066ff] rounded-l-2xl"></div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0066ff]/20 text-[#00d2ff] border border-[#00d2ff]/30 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#00d2ff] font-semibold">{exp.company}</p>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{exp.desc}</p>
                </div>

                {exp.img && (
  <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex-shrink-0 flex items-center justify-center">
    <img 
      src={exp.img} 
      alt={exp.role} 
      className="w-full h-full object-contain p-1 hover:scale-105 transition duration-300" 
    />
  </div>
)}
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Prestasi & Sertifikasi */}
        <div className="space-y-10 pt-10 border-t border-slate-800/60">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Prestasi & <span className="text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">Sertifikasi</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Penghargaan kompetisi film pendek tingkat nasional dan sertifikasi kompetensi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-[#00d2ff]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 p-1">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3 leading-snug">{item.title}</h3>
                    <p className="text-xs font-semibold text-slate-300 mt-1">{item.event}</p>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}