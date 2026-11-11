export default function Clients() {
  const clientCases = [
    {
      name: 'Tskymicool indo',
      platform: 'TikTok Official Account',
      stats: '59,4 Ribu Pengikut • 6,6 Ribu Suka',
      desc: 'Pengelolaan strategi konten harian & penataan visual produk kipas portable untuk meningkatkan penjualan.',
      img: '/client-skymicool.jpg',
    },
    {
      name: 'Archia Interior (TikTok)',
      platform: 'TikTok Account',
      stats: '11,3 Ribu Pengikut • 45,4 Ribu Suka',
      desc: 'Perencanaan konten visual interior modern (PVC Wallboard, SPC Flooring, Wallpanel, & Mezzanine).',
      img: '/client-archia-tt.jpg',
    },
    {
      name: 'Archia Interior (Instagram)',
      platform: 'Instagram Account',
      stats: '18,8 Ribu Pengikut',
      desc: 'Penataan feed estetik dan publikasi portofolio pengerjaan interior ruko & rumah tinggal.',
      img: '/client-archia-ig.jpg',
    },
  ];

  return (
    <section id="clients" className="py-20 bg-[#0a1128] text-white px-8 md:px-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Klien & <span className="text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">Brand Managed</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Merek dan akun bisnis yang dipercayakan pengelolaan strategi media sosial, personal branding, dan konten visualnya.
          </p>
        </div>

        {/* Highlight Banner Logo Archia */}
        <div className="bg-slate-900/60 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0066ff]/20 text-[#00d2ff] border border-[#00d2ff]/30">
              Featured Client
            </span>
            <h3 className="text-2xl font-bold text-white">Archia Interior</h3>
            <p className="text-slate-300 text-sm max-w-lg">
              Mitra proyek desain interior & manufaktur bahan bangunan modern.
            </p>
          </div>
          
          {/* Container Logo Archia Baru (Ukuran Pas & Terbaca Jelas) */}
          <div className="w-52 h-28 rounded-xl overflow-hidden bg-white p-3 flex items-center justify-center border border-slate-700 shrink-0 shadow-md">
            <img 
              src="/logo-archia.jpeg" 
              alt="Logo Archia Interior" 
              className="w-full h-full object-contain hover:scale-105 transition duration-300" 
            />
          </div>
        </div>

        {/* Showcase Hasil Kelola Media Sosial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientCases.map((client, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-[#00d2ff]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0066ff]/20 text-[#00d2ff] border border-[#00d2ff]/30">
                  {client.platform}
                </span>
                <h3 className="text-xl font-bold text-white">{client.name}</h3>
                <p className="text-xs font-semibold text-[#00d2ff]">{client.stats}</p>
                <p className="text-slate-300 text-xs leading-relaxed">{client.desc}</p>
              </div>

              <div className="w-full h-64 bg-slate-950 p-2 overflow-hidden border-t border-slate-800">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-contain hover:scale-105 transition duration-500 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}