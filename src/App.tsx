import { useEffect, useMemo, useState } from 'react';

const WA_NUMBER = '6285366573886';
const WA_DISPLAY = '0853-6657-3886';
const ADDRESS = 'Jl. Karanggayam 1/54, Kec. Tambaksari, Surabaya';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/34997574/pexels-photo-34997574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    label: 'Classic French',
    tone: 'Netral Elegan'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/34885844/pexels-photo-34885844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    label: 'Floral Pink',
    tone: 'Soft & Manis'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/34871553/pexels-photo-34871553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    label: 'Red Chic',
    tone: 'Bold Glam'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/34835304/pexels-photo-34835304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    label: 'Leopard Luxe',
    tone: 'Edgy'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/34997566/pexels-photo-34997566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    label: 'Nude Gloss',
    tone: 'Clean Girl'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/3557600/pexels-photo-3557600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    label: 'Dot Play',
    tone: 'Cute Fun'
  },
];

const services = [
  {
    name: 'Nail Art Custom',
    price: 'Mulai 65k',
    desc: 'Design bebas: floral, chrome, 3D, korean, ombre. Bisa request referensi.',
    details: ['Free konsultasi design', 'Alat steril', 'Tahan 2-3 minggu'],
    tag: 'Favorit'
  },
  {
    name: 'Manicure Spa',
    price: '45k',
    desc: 'Rapikan kutikula, buffing, massage tangan & kutek Halal.',
    details: ['Cuticle care', 'Hand massage', 'Vitamin oil'],
    tag: null
  },
  {
    name: 'Pedicure Spa',
    price: '55k',
    desc: 'Perawatan kaki lengkap. Kaki halus, kuku rapi, rileks.',
    details: ['Foot soak', 'Scrub', 'Massage'],
    tag: null
  },
  {
    name: 'Gel Polish',
    price: '80k',
    desc: 'Kutek gel tahan lama, glossy, tidak mudah chip. 150+ warna.',
    details: ['UV/LED cure', 'Glossy kuat', 'Remove aman'],
    tag: 'Best Seller'
  },
  {
    name: 'Fake Nails / Extension',
    price: '120k',
    desc: 'Kuku panjang instan. Natural look, kuat untuk daily.',
    details: ['Soft gel tip', 'Bentuk request', 'Free 1x retouch*'],
    tag: null
  },
  {
    name: 'Nail Care Treatment',
    price: '35k',
    desc: 'Untuk kuku rapuh/kuning. Perawatan nutrisi & strengthening.',
    details: ['Nail repair', 'Cuticle oil', 'Buffer halus'],
    tag: null
  },
];

const packages = [
  {
    name: 'Paket Manis',
    price: 'Rp 95.000',
    items: ['Manicure Spa', 'Gel Polish 1 warna', 'Vitamin oil'],
    note: 'Cocok untuk daily / kerja.',
    accent: false
  },
  {
    name: 'Paket Glam Lengkap',
    price: 'Rp 145.000',
    items: ['Manicure + Pedicure', 'Nail Art 2 kuku', 'Gel Polish', 'Hand massage'],
    note: 'Paling banyak di-booking.',
    accent: true
  },
  {
    name: 'Paket Bride / Wisuda',
    price: 'Rp 185.000',
    items: ['Full Nail Art both hands', 'Fake nails / extension', 'Rhinestone / 3D', 'Free retouch H-1'],
    note: 'Bisa home service pagi buta.',
    accent: false
  },
];

function waLink(message = '') {
  const text = message || 'Halo Kak Heni! Saya mau booking Nail Art ya kak. Boleh info jadwal kosongnya?';
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [form, setForm] = useState({
    nama: '',
    layanan: 'Nail Art Custom',
    tanggal: '',
    jam: '',
    lokasi: 'home',
    alamat: '',
    catatan: '',
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const bookingMessage = useMemo(() => {
    const loc = form.lokasi === 'home' ? `Home Service ke: ${form.alamat || '[isi alamat]'}` : 'Datang ke studio Jl. Karanggayam 1/54';
    return `Halo Kak Heni - Heni Nail Art 💅\n\nSaya mau booking ya kak:\nNama: ${form.nama || '[nama]'}\nLayanan: ${form.layanan}\nTanggal: ${form.tanggal || '[tanggal]'}\nJam: ${form.jam || '[jam]'}\nLokasi: ${loc}\n\nCatatan: ${form.catatan || '-'}\n\nTerima kasih kak!`;
  }, [form]);

  return (
    <div className="min-h-screen bg-[#fff8f4] text-[#32252a] antialiased" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
      <style>{`
      .displayf { font-family: "Fraunces", Georgia, serif; }
      ::selection { background: #f5cfd8; }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#fff8f4]/85 border-b border-[#efd9d8]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex h-[68px] items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-[15px] bg-gradient-to-br from-[#f9b5c6] to-[#e78a98] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(209,106,125,0.32)]">
                <span className="displayf text-[19px] tracking-tight">hn</span>
              </div>
              <div>
                <div className="displayf text-[19px] leading-tight tracking-[-0.01em]">Heni Nail Art</div>
                <div className="text-[11.5px] text-[#a1696d] -mt-0.5 font-medium">Rias & Perawatan Kuku • Surabaya</div>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-9 text-[14.5px] text-[#6c4b4f]">
              <a href="#layanan" className="hover:text-[#be3f5e] transition-colors">Layanan</a>
              <a href="#galeri" className="hover:text-[#be3f5e] transition-colors">Galeri</a>
              <a href="#paket" className="hover:text-[#be3f5e] transition-colors">Paket</a>
              <a href="#home-service" className="hover:text-[#be3f5e] transition-colors">Home Service</a>
              <a href="#kontak" className="hover:text-[#be3f5e] transition-colors">Kontak</a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#d84b69] hover:bg-[#c83957] text-white px-4 py-[9px] text-[13.5px] font-semibold shadow-[0_8px_26px_rgba(204,58,90,0.28)] transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                Booking WA
              </a>
              <button onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden rounded-xl border border-[#e8c9c9] px-3 py-2 text-sm text-[#7b4650]">Menu</button>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden pb-4 text-[14.5px] text-[#69434a] grid gap-3">
              <a onClick={()=>setMenuOpen(false)} href="#layanan">Layanan</a>
              <a onClick={()=>setMenuOpen(false)} href="#galeri">Galeri</a>
              <a onClick={()=>setMenuOpen(false)} href="#paket">Paket</a>
              <a onClick={()=>setMenuOpen(false)} href="#home-service">Home Service</a>
              <a onClick={()=>setMenuOpen(false)} href="#kontak">Kontak</a>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 pt-14 sm:pt-20 pb-12 sm:pb-20">
          <div className="grid lg:grid-cols-[1.18fr_.82fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f2cfd5] bg-white px-3.5 py-1.5 text-[11.8px] font-semibold text-[#c34f68] shadow-sm">
                <span className="h-[7px] w-[7px] rounded-full bg-[#e7607c]" />
                Menerima HOME SERVICE • Surabaya
              </div>
              <h1 className="displayf mt-5 text-[46px] sm:text-[64px] lg:text-[76px] leading-[0.93] tracking-[-0.025em] text-[#2c1b21]">
                Kuku cantik,<br/>mood ikut naik.
              </h1>
              <p className="mt-5 max-w-[560px] text-[16.8px] sm:text-[18.5px] leading-relaxed text-[#705459]">
                Heni Nail Art — rias & perawatan kuku rumahan di Tambaksari, Surabaya. Nail art rapi, alat steril, warna tahan lama. Bisa panggilan ke rumah kamu, santai sambil ngeteh.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waLink()} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2.5 rounded-full bg-[#d84b69] hover:bg-[#cb3a58] text-white px-5 py-3.5 text-[14.6px] font-semibold shadow-[0_10px_30px_rgba(216,75,105,0.32)] transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  Chat WhatsApp {WA_DISPLAY}
                </a>
                <a href="#galeri" className="inline-flex items-center gap-2 rounded-full bg-white border border-[#e8c7cc] px-5 py-3.5 text-[14.2px] font-semibold text-[#743648] hover:border-[#e0abb5] transition">
                  Lihat hasil nail art
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[13.8px] text-[#8a5962]">
                <span className="flex items-center gap-2"><span className="text-[#d45573]">✦</span> Alat steril tiap klien</span>
                <span className="flex items-center gap-2"><span className="text-[#d45573]">✦</span> Kutek Halal & Gel premium</span>
                <span className="flex items-center gap-2"><span className="text-[#d45573]">✦</span> Home service Surabaya</span>
              </div>

              <div className="mt-9 flex items-center gap-6 text-[13.7px] text-[#9d6a72]">
                <div>
                  <div className="displayf text-[28px] text-[#302025]">720+</div>
                  <div>klien puas</div>
                </div>
                <div className="h-9 w-px bg-[#e8cbd0]" />
                <div>
                  <div className="displayf text-[28px] text-[#302025]">4.9/5</div>
                  <div>rating klien</div>
                </div>
                <div className="h-9 w-px bg-[#e8cbd0]" />
                <div>
                  <div className="displayf text-[28px] text-[#302025]">7 thn</div>
                  <div>pengalaman</div>
                </div>
              </div>
            </div>

            {/* Hero collage */}
            <div className="relative">
              <div className="absolute -top-10 -right-7 h-56 w-56 rounded-full bg-[#fbd8de] blur-[72px] opacity-90" />
              <div className="relative rounded-[28px] bg-gradient-to-b from-[#fff0f3] to-[#ffe5ea] p-[10px] shadow-[0_26px_60px_rgba(190,63,90,0.17)]">
                <div className="grid grid-cols-2 gap-[10px]">
                  <div className="col-span-2 overflow-hidden rounded-[20px]">
                    <img src={galleryImages[0].url} alt="Heni Nail Art" className="w-full h-[260px] object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-[20px]">
                    <img src={galleryImages[1].url} alt="Nail art pink" className="w-full h-[192px] object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-[20px]">
                    <img src={galleryImages[2].url} alt="Nail art merah" className="w-full h-[192px] object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-5 rounded-[18px] bg-white shadow-xl px-4 py-3 border border-[#f2d2d7]">
                  <div className="text-[11.7px] text-[#ad606e] font-semibold">Home Service</div>
                  <div className="displayf text-[17px] text-[#3b252a] -mt-0.5">Datang ke rumahmu</div>
                  <div className="text-[12.6px] text-[#99707a]">Surabaya & sekitar</div>
                </div>
                <div className="absolute -right-5 top-12 rounded-[16px] bg-[#fff9f8]/95 backdrop-blur px-3.5 py-2.5 border border-[#f2d2d7] shadow-lg text-[12.8px]">
                  <div className="font-semibold text-[#bb3d5b]">Slot hari ini</div>
                  <div className="text-[#7a545d]">Biasanya 2-3 slot saja</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="py-16 sm:py-20 bg-[#fff1eb] border-y border-[#f0d8d2]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[12.5px] uppercase tracking-wider text-[#c14b67] font-semibold">Layanan Heni</div>
              <h2 className="displayf text-[36px] sm:text-[46px] tracking-[-0.015em] text-[#2b1c20]">Rias & perawatan kuku</h2>
            </div>
            <p className="max-w-md text-[15.5px] text-[#7c5459]">Harga jujur, pengerjaan telaten. Bisa request desain dari Pinterest / IG. Semua alat disteril.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.name} className="relative rounded-[22px] bg-white border border-[#f0d4d7] p-6 shadow-[0_10px_32px_rgba(190,73,90,0.07)]">
                {s.tag && <div className="absolute right-4 top-4 text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#fff0f3] text-[#c63d5b] border border-[#f4ccd3]">{s.tag}</div>}
                <div className="displayf text-[22px] text-[#301b20]">{s.name}</div>
                <div className="text-[13.3px] text-[#ad6070] font-semibold mt-1">{s.price}</div>
                <p className="mt-3 text-[14.2px] text-[#7b535a] leading-relaxed">{s.desc}</p>
                <ul className="mt-3 text-[13.3px] text-[#8f6068] space-y-1">
                  {s.details.map(d => <li key={d}>• {d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[13.6px] text-[#a36b72]">* Harga nail art menyesuaikan kerumitan. Konsultasi gratis via WhatsApp ya kak.</div>
        </div>
      </section>

      {/* HOME SERVICE HIGHLIGHT */}
      <section id="home-service" className="py-16 sm:py-[84px]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-[30px] bg-gradient-to-br from-[#ffe9ee] via-[#ffe2e8] to-[#ffd7e1] border border-[#f5c9d1] p-7 sm:p-12 shadow-[0_16px_60px_rgba(208,78,106,0.13)]">
            <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[12.3px] font-semibold text-[#b83a58] bg-white/70 border border-[#f3c6cf] rounded-full px-3 py-1.5">HOME SERVICE • PANGGILAN KE RUMAH</div>
                <h3 className="displayf mt-4 text-[34px] sm:text-[45px] leading-[1.05] tracking-[-0.018em] text-[#301c20]">Mager keluar? Aku yang datang.</h3>
                <p className="mt-3 text-[16px] text-[#7b525a] max-w-xl leading-relaxed">
                  Khusus area Surabaya: Tambaksari, Gubeng, Mulyorejo, Kertajaya, Rungkut, Darmo, dan sekitarnya. 
                  Bawa koper nail art lengkap, alas bersih, lamp UV portable. Kamu tinggal duduk manis.
                </p>

                <div className="mt-6 grid sm:grid-cols-3 gap-4 text-[13.8px] text-[#82535c]">
                  <div className="rounded-[16px] bg-white/75 px-4 py-3 border border-[#f2c6ce]">Biaya transport mulai 15k</div>
                  <div className="rounded-[16px] bg-white/75 px-4 py-3 border border-[#f2c6ce]">Minimal order 85k</div>
                  <div className="rounded-[16px] bg-white/75 px-4 py-3 border border-[#f2c6ce]">Slot pagi / sore</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={waLink('Halo Kak Heni! Saya mau booking Home Service Nail Art ya kak. Lokasi saya di Surabaya.')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d84b69] text-white px-5 py-3 font-semibold text-[14.4px] shadow-[0_10px_28px_rgba(216,75,105,0.3)] hover:bg-[#cd3a58] transition">
                    Booking Home Service
                  </a>
                  <span className="text-[13.5px] text-[#a6646e] self-center">Balas cepat via WA • {WA_DISPLAY}</span>
                </div>
              </div>

              <div>
                <div className="rounded-[22px] bg-white p-5 border border-[#f1c9cf] shadow-[0_18px_48px_rgba(201,70,95,0.11)]">
                  <div className="text-[12.8px] font-semibold text-[#c44b67]">Area Home Service Surabaya</div>
                  <div className="mt-3 grid grid-cols-2 gap-y-2 text-[14.2px] text-[#79515a]">
                    <div>• Tambaksari</div>
                    <div>• Gubeng</div>
                    <div>• Kertajaya</div>
                    <div>• Mulyorejo</div>
                    <div>• Rungkut</div>
                    <div>• Darmo / Wonokromo</div>
                    <div>• Kenjeran</div>
                    <div>• Tunjungan</div>
                  </div>
                  <div className="mt-3 text-[12.8px] text-[#b06a75]">Luar area? Chat dulu, biasanya masih bisa diatur ya kak.</div>
                </div>
                <div className="mt-4 rounded-[18px] border border-[#f0cad0] bg-[#fff6f6] px-4 py-3 text-[13.5px] text-[#8e5962]">
                  Jam operasional: 09.00 – 20.00 WIB • Tutup sewaktu-waktu kalau full, jadi booking dulu ya.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="py-12 sm:py-20 bg-white border-y border-[#f0d9d9]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <div className="text-[12.5px] uppercase tracking-wider text-[#c14b67] font-semibold">Galeri Nail Art</div>
              <h2 className="displayf text-[36px] sm:text-[46px] tracking-[-0.015em] text-[#2b1c20]">Hasil karya Heni</h2>
            </div>
            <div className="text-[14.2px] text-[#8a5f67]">Klik foto untuk lihat lebih besar • Bisa request mirip ini ya.</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map(g => (
              <button key={g.id} onClick={()=>setActiveGallery(g.id)}
                className="group relative text-left overflow-hidden rounded-[24px] border border-[#efd2d5] bg-[#fff6f4] shadow-[0_10px_30px_rgba(190,84,98,0.09)]">
                <img src={g.url} alt={g.label} className="h-[350px] sm:h-[392px] w-full object-cover group-hover:scale-[1.03] transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-black/8 to-transparent"></div>
                <div className="absolute left-4 bottom-4 text-white">
                  <div className="displayf text-[20px] drop-shadow-sm">{g.label}</div>
                  <div className="text-[12.9px] text-white/90">{g.tone}</div>
                </div>
              </button>
            ))}
          </div>
          <p className="mt-5 text-[13.6px] text-[#a56a74]">Foto asli pengerjaan. Boleh bawa referensi sendiri — nanti kita sesuaikan bentuk kukumu ya kak.</p>
        </div>
      </section>

      {/* PAKET */}
      <section id="paket" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-[640px]">
            <div className="text-[12.5px] uppercase tracking-wider text-[#c14b67] font-semibold">Paket Hemat</div>
            <h2 className="displayf text-[36px] sm:text-[46px] tracking-[-0.015em] text-[#2b1c20]">Lebih hemat, sudah include semua</h2>
            <p className="mt-2 text-[15.8px] text-[#7b555a]">Paket paling sering dipilih klien Heni. Cocok untuk event, wisuda, lamaran, atau self-care rutin.</p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {packages.map(p => (
              <div key={p.name}
                className={`rounded-[24px] border px-6 py-7 shadow-[0_12px_38px_rgba(188,68,86,0.09)] ${
                  p.accent ? 'bg-[#2a1a1f] text-[#ffe7ea] border-[#3c232a]' : 'bg-white border-[#f0d1d5] text-[#38252a]'
                }`}>
                <div className={`text-[13px] ${p.accent ? 'text-[#f7b3c2]' : 'text-[#c15068]'} font-semibold`}>{p.accent ? 'Paling Favorit' : 'Paket'}</div>
                <div className="displayf text-[26px] mt-1">{p.name}</div>
                <div className={`mt-2 text-[21px] font-semibold ${p.accent ? 'text-white' : 'text-[#cf3e5c]'}`}>{p.price}</div>
                <ul className={`mt-4 text-[14.1px] leading-relaxed space-y-1.5 ${p.accent ? 'text-[#f4cfd6]' : 'text-[#76535a]'}`}>
                  {p.items.map(i => <li key={i}>• {i}</li>)}
                </ul>
                <div className={`mt-4 text-[13.2px] ${p.accent ? 'text-[#eeb5c3]' : 'text-[#a96b74]'}`}>{p.note}</div>
                <a href={waLink(`Halo Kak Heni, saya mau ambil ${p.name} - ${p.price} ya kak.`)} target="_blank" rel="noreferrer"
                   className={`mt-5 inline-flex w-full justify-center rounded-full px-4 py-3 text-[13.8px] font-semibold transition ${
                    p.accent ? 'bg-[#e95a76] hover:bg-[#dc4665] text-white' : 'bg-[#fff0f3] text-[#bc3352] border border-[#f0c3cc] hover:bg-[#ffe5ea]'
                  }`}>
                  Ambil Paket ini
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-16 sm:py-20 bg-[#fff1eb] border-y border-[#efdbd5]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-[.98fr_1.02fr] gap-10 items-start">
            <div>
              <div className="text-[12.5px] uppercase tracking-wider text-[#c14b67] font-semibold">Booking cepat</div>
              <h3 className="displayf text-[35px] sm:text-[44px] leading-[1.06] text-[#2c2023] tracking-[-0.015em]">Pilih tanggal, nanti langsung ke WhatsApp.</h3>
              <p className="mt-3 text-[#7c565b] text-[15.8px] max-w-[500px]">Isi form singkat di samping. Setelah klik “Kirim ke WhatsApp”, chat otomatis terbuka dan tinggal kamu send. Tidak ribet.</p>
              <div className="mt-6 rounded-[18px] border border-[#efc8ce] bg-white px-4 py-4 text-[14px] text-[#8d5c64]">
                Butuh cepat hari ini? Langsung WA aja ya kak → <a className="font-semibold text-[#c73c58] underline underline-offset-4" href={waLink()} target="_blank" rel="noreferrer">{WA_DISPLAY}</a>
              </div>
            </div>

            <form
              onSubmit={(e)=>{ e.preventDefault(); window.open(waLink(bookingMessage), '_blank'); }}
              className="rounded-[26px] bg-white shadow-[0_16px_56px_rgba(188,68,84,0.11)] border border-[#f0cfd3] p-6 sm:p-7"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-[13.2px] text-[#81575f]">Nama
                  <input value={form.nama} onChange={e=>setForm({...form, nama:e.target.value})} className="mt-1 w-full rounded-xl border border-[#e8c5ca] bg-[#fffaf8] px-3 py-3 outline-none focus:border-[#dd7a8d] focus:ring-2 focus:ring-[#ffd6de]" placeholder="Nama kamu" />
                </label>
                <label className="text-[13.2px] text-[#81575f]">Layanan
                  <select value={form.layanan} onChange={e=>setForm({...form, layanan:e.target.value})} className="mt-1 w-full rounded-xl border border-[#e8c5ca] bg-[#fffaf8] px-3 py-3 outline-none focus:border-[#dd7a8d] focus:ring-2 focus:ring-[#ffd6de]">
                    {services.map(s=> <option key={s.name}>{s.name}</option>)}
                    {packages.map(p=> <option key={p.name}>{p.name}</option>)}
                  </select>
                </label>
                <label className="text-[13.2px] text-[#81575f]">Tanggal
                  <input type="date" value={form.tanggal} onChange={e=>setForm({...form, tanggal:e.target.value})} className="mt-1 w-full rounded-xl border border-[#e8c5ca] bg-[#fffaf8] px-3 py-3 outline-none focus:border-[#dd7a8d] focus:ring-2 focus:ring-[#ffd6de]" />
                </label>
                <label className="text-[13.2px] text-[#81575f]">Jam
                  <input type="time" value={form.jam} onChange={e=>setForm({...form, jam:e.target.value})} className="mt-1 w-full rounded-xl border border-[#e8c5ca] bg-[#fffaf8] px-3 py-3 outline-none focus:border-[#dd7a8d] focus:ring-2 focus:ring-[#ffd6de]" />
                </label>
                <label className="sm:col-span-2 text-[13.2px] text-[#81575f]">Lokasi treatment
                  <div className="mt-1.5 flex gap-4 text-[14.2px] text-[#694249]">
                    <label className="flex items-center gap-2"><input type="radio" name="loc" checked={form.lokasi==='home'} onChange={()=>setForm({...form, lokasi:'home'})}/> Home Service</label>
                    <label className="flex items-center gap-2"><input type="radio" name="loc" checked={form.lokasi==='studio'} onChange={()=>setForm({...form, lokasi:'studio'})}/> Ke studio Heni</label>
                  </div>
                </label>
                {form.lokasi === 'home' && (
                  <label className="sm:col-span-2 text-[13.2px] text-[#81575f]">Alamat Home Service
                    <input value={form.alamat} onChange={e=>setForm({...form, alamat:e.target.value})} placeholder="Contoh: Jl. Kertajaya Indah, Surabaya" className="mt-1 w-full rounded-xl border border-[#e8c5ca] bg-[#fffaf8] px-3 py-3 outline-none focus:border-[#dd7a8d] focus:ring-2 focus:ring-[#ffd6de]" />
                  </label>
                )}
                <label className="sm:col-span-2 text-[13.2px] text-[#81575f]">Catatan / Referensi
                  <textarea value={form.catatan} onChange={e=>setForm({...form, catatan:e.target.value})} rows={3}
                    placeholder="Warna kesukaan, contoh desain, untuk wisuda, dll."
                    className="mt-1 w-full rounded-xl border border-[#e8c5ca] bg-[#fffaf8] px-3 py-3 outline-none focus:border-[#dd7a8d] focus:ring-2 focus:ring-[#ffd6de]"/>
                </label>
              </div>
              <button className="mt-4 w-full rounded-full bg-[#d84b69] hover:bg-[#c83c59] text-white py-3.5 font-semibold shadow-[0_12px_30px_rgba(213,67,96,0.3)] transition">
                Kirim ke WhatsApp
              </button>
              <div className="mt-3 text-[12.4px] text-[#a86a72] text-center">Chat otomatis terbuka ke {WA_DISPLAY}. Tinggal tekan “Send”.</div>
            </form>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <h3 className="displayf text-[34px] sm:text-[42px] text-[#2a1c20] tracking-[-0.015em]">Kata mereka yang sudah cobain</h3>
            <div className="text-[14.1px] text-[#8f5d65]">Rata-rata ⭐ 4.9 / 5 • Surabaya</div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 text-[14.6px]">
            {[
              {n:'Dinda – Mulyorejo', t:'Home service-nya nyaman banget kak, hasilnya rapi, kuteknya awet 3 minggu lebih. Udah 4x langganan.'},
              {n:'Rara – Gubeng', t:'Buat wisuda kemarin nail art-nya cantik, sesuai request. Kak Heni telaten banget, alatnya bersih.'},
              {n:'Sisca – Tambaksari', t:'Harga bersahabat tapi hasilnya salon premium. Suka! Selalu booking H-3 biar dapat slot.'},
            ].map(r=>(
              <div key={r.n} className="rounded-[20px] border border-[#efd0d3] bg-white p-5 shadow-[0_10px_30px_rgba(184,70,84,0.06)]">
                <div className="text-amber-500">★★★★★</div>
                <p className="mt-2 text-[#6d4b51] leading-relaxed">“{r.t}”</p>
                <div className="mt-3 text-[13.2px] text-[#a66d76] font-medium">{r.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK / MAP */}
      <section id="kontak" className="py-16 sm:py-20 bg-white border-t border-[#efdada]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-[12.5px] uppercase tracking-wider text-[#c14b67] font-semibold">Lokasi & Kontak</div>
              <h3 className="displayf text-[36px] sm:text-[44px] text-[#2b1c20] tracking-[-0.015em]">Heni Nail Art</h3>
              <p className="text-[16.4px] text-[#77555a] mt-2">Rias & perawatan kuku • Home Service Surabaya</p>

              <div className="mt-7 space-y-4 text-[15.2px] text-[#6e4d53]">
                <div className="flex gap-3">
                  <span className="text-[#d35571]">📍</span>
                  <div><b className="font-semibold text-[#3b2428]">Studio:</b><br/> {ADDRESS}</div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d35571]">💬</span>
                  <div><b className="font-semibold text-[#3b2428]">WhatsApp:</b><br/>
                    <a href={waLink()} target="_blank" rel="noreferrer" className="text-[#c83957] underline underline-offset-4 font-semibold">{WA_DISPLAY}</a>
                    <div className="text-[13.4px] text-[#9a686f]">Fast response 09.00 – 20.00 WIB</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d35571]">🕘</span>
                  <div><b className="font-semibold text-[#3b2428]">Jam buka:</b><br/>Senin – Minggu, 09.00 – 20.00 (by appointment)</div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#d35571]">🏠</span>
                  <div><b className="font-semibold text-[#3b2428]">Home Service:</b><br/>Ya! Surabaya kota. Biaya transport mulai 15k</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={waLink()} target="_blank" rel="noreferrer" className="rounded-full bg-[#d84b69] text-white px-5 py-3 text-[14.4px] font-semibold shadow-[0_10px_30px_rgba(214,67,96,0.26)]">Chat WhatsApp Sekarang</a>
                <a href="#booking" className="rounded-full border border-[#e1bcc2] px-5 py-3 text-[14.2px] font-semibold text-[#7b3846] bg-[#fff8f7]">Form Booking</a>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#efd2d3] overflow-hidden bg-[#fff6f4] shadow-[0_14px_44px_rgba(190,79,92,0.10)]">
              <div className="aspect-[4/3] w-full relative bg-[#ffe7ea]">
                <iframe
                  title="Heni Nail Art - Tambaksari Surabaya"
                  src="https://www.google.com/maps?q=Jl.%20Karanggayam%201%2F54%2C%20Tambaksari%2C%20Surabaya&output=embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="px-5 py-4 text-[13.7px] text-[#8a5b62] flex items-center justify-between gap-3 flex-wrap">
                <span>{ADDRESS}</span>
                <a target="_blank" rel="noreferrer"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                  className="text-[#c83a59] font-semibold underline underline-offset-4">Buka di Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-[#eed3d5] bg-[#fff5f1]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.7px] text-[#a36c74]">
          <div>© {new Date().getFullYear()} Heni Nail Art — Rias & Perawatan Kuku • Surabaya</div>
          <div className="flex gap-6">
            <a href="#layanan" className="hover:text-[#b83954]">Layanan</a>
            <a href="#paket" className="hover:text-[#b83954]">Paket</a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-[#b83954]">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Floating WA */}
      <a href={waLink()} target="_blank" rel="noreferrer"
        className="fixed right-4 bottom-4 z-50 rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(18,140,75,0.38)] px-4 py-3 flex items-center gap-2 font-semibold text-[13.8px] hover:brightness-[0.97] transition"
        aria-label="Chat WhatsApp Heni Nail Art"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.9A9.9 9.9 0 0 0 12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4A9.9 9.9 0 0 0 12 22c5.5 0 10-4.5 10-10 0-2.6-1-5-2.95-7.1ZM12 20.3a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3Zm4.6-6.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1-.6-.3-1.2-.6-1.7-1.1-.4-.4-.9-1-1.1-1.6 0-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4s1 2.8 1.2 3c.2.2 1.9 3 4.7 4 .7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.2Z"/></svg>
        WA {WA_DISPLAY}
      </a>

      {/* Gallery modal */}
      {activeGallery && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4" onClick={()=>setActiveGallery(null)}>
          <div className="relative max-w-2xl w-full" onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setActiveGallery(null)} className="absolute -top-12 right-0 text-white/90 text-[14.5px]">Tutup ✕</button>
            <img src={galleryImages.find(g=>g.id===activeGallery)?.url} alt="" className="rounded-[18px] w-full max-h-[82vh] object-contain bg-black/20" />
            <div className="mt-3 text-center text-white/90 text-[14px]">
              Suka desain ini? <a className="underline underline-offset-4 font-semibold" href={waLink(`Halo Kak Heni, saya mau nail art seperti foto galeri no ${activeGallery} ya.`)} target="_blank" rel="noreferrer">Booking via WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
