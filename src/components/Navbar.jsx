'use client';

export default function Navbar() {
  const navItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Klien', href: '#clients' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1128]/80 backdrop-blur-md border-b border-slate-800/80 py-4 px-8 md:px-20 flex justify-between items-center">
      <a href="#hero" className="text-xl font-bold text-white tracking-wider">
        Shafa<span className="text-[#00d2ff]">.</span>
      </a>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="text-slate-300 hover:text-[#00d2ff] transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0066ff] to-[#00d2ff] text-white text-xs font-semibold shadow-md shadow-blue-500/20 hover:opacity-90 transition"
      >
        Hire Me
      </a>
    </nav>
  );
}