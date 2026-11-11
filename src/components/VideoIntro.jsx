export default function VideoIntro() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#040817] via-[#081b3d] to-[#0a1128] px-8 md:px-20 border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Video <span className="text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">Perkenalan</span>
        </h2>
        <p className="text-slate-300">
          Simak perkenalan singkat mengenai pengalaman dan passion saya di dunia media kreatif.
        </p>
      </div>

      {/* Frame Video Khusus Format Vertikal */}
      <div className="max-w-sm mx-auto rounded-2xl overflow-hidden border border-[#00d2ff]/30 bg-slate-900/80 shadow-[0_0_25px_rgba(0,86,179,0.3)]">
        <video
          controls
          className="w-full h-auto object-contain max-h-[550px] mx-auto rounded-2xl"
          poster="/profile.jpg"
        >
          <source src="/intro.mp4" type="video/mp4" />
          Browser Anda tidak mendukung penayangan video.
        </video>
      </div>
    </section>
  );
}