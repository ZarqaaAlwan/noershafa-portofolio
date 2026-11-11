export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0a1128] via-[#081b3d] to-[#040817] text-white px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mari <span className="text-[#00d2ff] drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]">Bekerja Sama</span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Punya ide proyek video, perencanaan konten, atau ingin berdiskusi mengenai media kreatif? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        {/* Tombol Kontak (WhatsApp, Email, Instagram) */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          {/* Tombol WhatsApp */}
          <a
            href="https://wa.me/6289643834431?text=Halo%20Ichell,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek%20kreatif."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20ba5a] transition duration-300 shadow-lg flex items-center gap-2"
          >
            💬 WhatsApp
          </a>

          {/* Tombol Email */}
          <a
            href="mailto:shafa.michella@gmail.com"
            className="px-6 py-4 bg-[#0066ff] hover:bg-blue-600 text-white font-semibold rounded-xl transition duration-300 shadow-lg flex items-center gap-2"
          >
            ✉️ Kirim Email
          </a>

          {/* Tombol Instagram */}
          <a
            href="https://www.instagram.com/_noershafa?dlrf=MTI3eGZ0ZWk1OXJkYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 border border-[#00d2ff] text-[#00d2ff] hover:bg-[#00d2ff]/10 font-semibold rounded-xl transition duration-300 shadow-lg flex items-center gap-2"
          >
            📸 Instagram
          </a>
        </div>
      </div>
    </section>
  );
}