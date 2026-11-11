'use client';

import { useState } from 'react';

export default function Portofolio() {
  const [activePlanModal, setActivePlanModal] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const planImages = [
    '/plan1.jpeg',
    '/plan2.jpg',
    '/plan3.jpg',
    '/plan4.jpg',
    '/plan5.jpg',
  ];

  const videoList = [
    {
      title: 'Archia Interior - Showcase Project',
      category: 'Brand & Interior',
      src: '/video-archia1.mp4',
      desc: 'Video promosi visual untuk produk interior rumah & ruko modern.',
    },
    {
      title: 'Archia Interior - Office Tour & Directing',
      category: 'Company Profile',
      src: '/video-archia2.mp4',
      desc: 'Dokumentasi tur area kerja dan fasilitas kantor Archia Interior.',
    },
    {
      title: 'Joqvitech - Comedy & Trend Content',
      category: 'Creative Content',
      src: '/video-joqvitech.mp4',
      desc: 'Konten POV kreatif untuk engagement media sosial Joqvitech.',
    },
    {
      title: 'Commercial Campaign - Wardah',
      category: 'Endorsement & Beauty',
      src: '/video-wardah.mp4',
      desc: 'Eksekusi promosi produk kosmetik Wardah dengan konsep estetik.',
    },
    {
      title: 'LSP Roma Kelapa - Product Commercial',
      category: 'F&B Promotion',
      src: '/video-roma.mp4',
      desc: 'Pengarahan video komersial produk Roma Kelapa.',
    },
    {
      title: 'Edukasi & Trend - WW3 Impact',
      category: 'Edu Content',
      src: '/video-ww3.mp4',
      desc: 'Konten narasi sejarah & tren edukasi yang menguras emosi audiens.',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[#0a1128] via-[#081b3d] to-[#040817] text-white px-8 md:px-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Karya & <span className="text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">Portofolio Visual</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Eksplorasi karya perencanaan konten, pengarahan syuting, hingga hasil penyuntingan video (editing).
          </p>
        </div>

        {/* Highlight Card 1: Content Planning (Pop-up Modal 5 Dokumen) */}
        <div
          onClick={() => setActivePlanModal(true)}
          className="cursor-pointer bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-[#00d2ff]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 group"
        >
          <div className="w-full md:w-1/3 h-52 bg-slate-800 rounded-xl overflow-hidden relative shrink-0">
            <img
              src="/plan1.jpeg"
              alt="Content Planning Strategy"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
            />
            <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-[#0a1128]/80 text-[#00d2ff] border border-[#00d2ff]/30 backdrop-blur-md">
              Featured Strategy
            </span>
          </div>

          <div className="space-y-4 flex-1">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#00d2ff]">Social Media Editorial</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                Content Planning & Strategy Schedule
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dokumentasi perancangan kalender konten bulanan, alur promosi produk soft-selling, jadwal tayang harian, hingga strategi edukasi audiens.
            </p>
            <div className="pt-2 flex items-center text-xs font-semibold text-[#00d2ff] group-hover:translate-x-2 transition-transform">
              Buka 5 Dokumen Planning &rarr;
            </div>
          </div>
        </div>

        {/* Section 2: Galeri Hasil Video Editing & Directing */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Hasil Video <span className="text-[#00d2ff]">Editing & Directing</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Kumpulan video hasil eksekusi lapangan, penyuntingan ritme visual, dan pengarahan gaya narasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoList.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-[#00d2ff]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg flex flex-col justify-between group"
              >
                {/* Pemutar Video Singkat */}
                <div className="w-full h-64 bg-black relative overflow-hidden flex items-center justify-center">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  />
                  <div 
                    onClick={() => setActiveVideoModal(item)}
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition flex items-center justify-center cursor-pointer"
                  >
                    <span className="w-12 h-12 rounded-full bg-[#0066ff]/80 text-white flex items-center justify-center text-lg pl-1 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition">
                      ▶
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0a1128]/80 text-[#00d2ff] border border-[#00d2ff]/30 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#00d2ff] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>

                  <button
                    onClick={() => setActiveVideoModal(item)}
                    className="pt-3 text-left text-xs text-[#00d2ff] font-medium hover:underline flex items-center gap-1"
                  >
                    Putar Layar Penuh &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal / Popup Preview 5 Screenshot Content Planning */}
      {activePlanModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a1128] border border-[#00d2ff]/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-[#00d2ff]">
                Dokumentasi Content Planning & Editorial Schedule
              </h3>
              <button
                onClick={() => setActivePlanModal(false)}
                className="text-slate-400 hover:text-white text-2xl font-bold px-3 py-1"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-300 text-sm">
              Berikut adalah dokumentasi rancangan jadwal konten harian, alur promosi, dan ide edukasi media sosial yang dikelola secara terstruktur:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {planImages.map((imgSrc, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900/60 p-2 flex flex-col items-center">
                  <img src={imgSrc} alt={`Plan ${idx + 1}`} className="w-full max-h-[450px] object-contain rounded-lg" />
                  <p className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800/60 w-full mt-2">
                    Dokumen Planning Bagian #{idx + 1}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-right pt-4 border-t border-slate-800">
              <button
                onClick={() => setActivePlanModal(false)}
                className="px-6 py-2 bg-[#0066ff] hover:bg-blue-600 text-white rounded-lg text-sm font-semibold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Pemutar Video Fullscreen */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0a1128] border border-[#00d2ff]/40 rounded-2xl max-w-md w-full p-4 space-y-4 relative">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <h4 className="text-sm font-bold text-[#00d2ff] truncate pr-4">{activeVideoModal.title}</h4>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="text-slate-400 hover:text-white text-xl font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="w-full h-[480px] bg-black rounded-xl overflow-hidden">
              <video
                src={activeVideoModal.src}
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <p className="text-xs text-slate-400">{activeVideoModal.desc}</p>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="px-4 py-1.5 bg-[#0066ff] hover:bg-blue-600 text-white text-xs font-semibold rounded-lg"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}