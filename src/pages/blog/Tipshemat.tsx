import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Calendar, User, ArrowLeft, CheckCircle2, ShieldCheck, 
  Zap, Info, MousePointer2, Target, Share2, TrendingUp, 
  AlertTriangle, Star, Search, ShieldAlert 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TipsHematRobux() {
  return (
    <Layout>
      {/* BAGIAN MATERI 2: On-Page Optimization - Menjamin konten terstruktur semantik agar ramah crawler */}
      <article className="bg-background min-h-screen text-foreground selection:bg-primary/30">
        
        {/* HERO SECTION - Padding pt-28 untuk mencegah tumpang tindih dengan Navbar */}
        <section className="relative pt-28 lg:pt-36 pb-16">
          <div className="container max-w-6xl text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow mb-8 font-bold text-sm transition-all group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
              KEMBALI KE INDEKS BLOG
            </Link>
            
            {/* BAGIAN MATERI 1: Keyword Research - Memasukkan Target Keyword utama di Heading H1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8 uppercase italic">
              Tips Hemat <span className="text-primary">Top Up Robux</span> <br className="hidden md:block" /> untuk Pemula
            </h1>

            {/* BAGIAN MATERI 2: Optimasi Gambar - Menambahkan Alt-text yang deskriptif */}
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-border">
              <img 
                src="/hemat.png" 
                alt="Strategi SEO Tips Hemat Top Up Robux Murah 2025 di Sirobux" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </section>

        <div className="container max-w-6xl pb-24">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* --- AREA KONTEN UTAMA (KIRI) --- */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* META INFO - Membangun Expertise, Authoritativeness, & Trust (E-A-T) (Materi 8) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">S</div>
                  <span className="font-bold text-foreground uppercase tracking-widest text-xs">Admin Sirobux</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" /> 
                  <span>24 Desember 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-1.5 rounded-full text-[10px] font-black uppercase border border-success/20">
                  <ShieldCheck className="h-3 w-3" /> SEO Verified
                </div>
              </div>

              {/* ISI ARTIKEL */}
              <div className="prose prose-lg prose-invert max-w-none space-y-20 leading-relaxed text-muted-foreground">
                
                {/* 01. Jangan Langsung Beli In-Game */}
                <section className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter flex items-center gap-4">
                      <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center rounded-2xl rotate-3">01</span>
                      Jangan Beli Robux di Dalam Game
                    </h2>
                    <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-4">
                      Banyak pemula langsung membeli Robux lewat menu resmi di dalam game. Padahal, harga Robux di dalam game biasanya lebih mahal dibandingkan platform top up pihak ketiga.
                    </p>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl flex items-center gap-4 group">
                    <div className="bg-primary/20 p-3 rounded-full group-hover:bg-primary transition-colors">
                      <Zap className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      💡 <strong>Tips Hemat:</strong> Gunakan website <strong>top up robux murah</strong> seperti Sirobux untuk harga lebih kompetitif dan aman.
                    </p>
                  </div>
                </section>

                {/* 02. Bandingkan Harga */}
                <section className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter flex items-center gap-4">
                      <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center rounded-2xl -rotate-3">02</span>
                      Bandingkan Harga Top Up Robux
                    </h2>
                    <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-4">
                      Sebelum membeli, biasakan untuk membandingkan harga Robux di beberapa tempat. Perbedaan harga kecil bisa terasa besar kalau kamu sering top up.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card p-6 rounded-[2rem] border border-border flex items-center gap-4 italic text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> Harga Transparan & Jujur
                    </div>
                    <div className="bg-card p-6 rounded-[2rem] border border-border flex items-center gap-4 italic text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary" /> Pilihan Paket Sesuai Budget
                    </div>
                  </div>
                </section>

                {/* 03. Pilih Jumlah Sesuai Kebutuhan */}
                <section className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter flex items-center gap-4">
                      <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center rounded-2xl rotate-3">03</span>
                      Pilih Jumlah Robux Sesuai Kebutuhan
                    </h2>
                    <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-4">
                      Kesalahan pemula adalah membeli Robux terlalu banyak padahal belum tahu akan dipakai untuk apa.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { title: "Mulai Kecil", desc: "Paket 80–400 Robux ideal untuk mencoba fitur awal.", icon: <TrendingUp className="h-5 w-5" /> },
                      { title: "Prioritas", desc: "Fokuskan saldo untuk item fungsional penunjang gameplay.", icon: <Target className="h-5 w-5" /> },
                      { title: "Upgrade", desc: "Tambah top up setelah kamu paham mekanisme game.", icon: <Zap className="h-5 w-5" /> }
                    ].map((item, i) => (
                      <div key={i} className="bg-card p-8 rounded-[2rem] border border-border group hover:border-primary/50 transition-all text-center">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-xs leading-relaxed opacity-70">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 04. Metode Pembayaran Efisien */}
                <section className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter flex items-center gap-4">
                      <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center rounded-2xl -rotate-3">04</span>
                      Gunakan Metode Pembayaran Efisien
                    </h2>
                    <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-4">
                      Pilihan metode pembayaran memengaruhi total biaya administrasi dan kecepatan proses.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: "QRIS", info: "Biaya Terendah", tag: "Tercepat" },
                      { name: "E-Wallet", info: "DANA, OVO, GoPay", tag: "Populer" },
                      { name: "Bank", info: "Otomatis 24 Jam", tag: "Stabil" }
                    ].map((method, i) => (
                      <div key={i} className="bg-card p-8 rounded-[2.5rem] border border-border text-center relative group overflow-hidden">
                        <div className="absolute top-4 right-4 text-[10px] font-black uppercase text-primary bg-primary/10 px-2 py-1 rounded-full">{method.tag}</div>
                        <Zap className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-foreground">{method.name}</h4>
                        <p className="text-[10px] text-primary font-bold mt-2 uppercase">{method.info}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 05. Pastikan Platform Aman */}
                <section className="space-y-8 py-6">
                  {/* Heading & Intro */}
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter flex items-center gap-4">
                      <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center rounded-2xl rotate-3">05</span>
                      Pastikan Platform Aman & Terpercaya
                    </h2>
                    <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-4">
                      Jangan tergiur harga murah tapi berisiko. Keamanan akun adalah investasi jangka panjang bagi setiap pemain pemula.
                    </p>
                  </div>

                  {/* Grid Keamanan */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Kartu Bahaya/Red Flags */}
                    <div className="bg-destructive/5 p-8 rounded-[2.5rem] border border-destructive/20 space-y-4">
                      <h4 className="text-xl font-bold text-destructive flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" /> Hindari Situs Yang:
                      </h4>
                      <ul className="space-y-3">
                        {["Meminta password akun", "Tidak ada CS", "Proses tidak jelas"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kartu Solusi/Sirobux Guarantee */}
                    <div className="bg-success/5 p-8 rounded-[2.5rem] border border-success/20 space-y-4">
                      <h4 className="text-xl font-bold text-success flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5" /> Sirobux Menjamin:
                      </h4>
                      <ul className="space-y-3">
                        {["Tanpa login akun Roblox", "Sistem otomatis", "CS 24/7"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 text-success" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tips Box */}
                  <div className="bg-card p-6 rounded-2xl border border-border flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0">
                      <ShieldAlert className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      <strong>Ingat:</strong> Keamanan tetap nomor satu. Pilih platform <strong>top up robux aman</strong> yang menjaga privasi data kamu.
                    </p>
                  </div>
                </section>

                {/* 06. Manfaatkan Promo & Kesimpulan */}
                <section className="space-y-8 py-6">
                  {/* Heading */}
                  <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter flex items-center gap-4">
                      <span className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center rounded-2xl -rotate-3">06</span>
                      Manfaatkan Promo & Paket Hemat
                    </h2>
                    <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-4">
                      Pantau paket <strong>best seller</strong> untuk mendapatkan harga Robux jauh di bawah standar pasar.
                    </p>
                  </div>

                  {/* Grid Promo */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card p-8 rounded-[2.5rem] border border-border group hover:border-primary/50 transition-all shadow-sm relative overflow-hidden">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                        <Star className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Pilih Paket Menengah</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">Lebih hemat dibandingkan membeli paket kecil berkali-kali.</p>
                    </div>

                    <div className="bg-card p-8 rounded-[2.5rem] border border-border group hover:border-primary/50 transition-all shadow-sm relative overflow-hidden">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Update Harga Rutin</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">Selalu cek daftar harga terbaru di Sirobux sebelum top up.</p>
                    </div>
                  </div>

                  {/* KESIMPULAN & CTA */}
                  <div className="mt-20 space-y-8">
                    <div className="p-10 bg-muted/30 rounded-[3rem] border border-border text-center space-y-6">
                      <h3 className="text-3xl font-black text-foreground uppercase tracking-tighter">Kesimpulan</h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Bagi pemula, top up Robux tidak harus mahal asal dilakukan dengan cara yang tepat.
                        Dengan memilih platform terpercaya, jumlah Robux yang sesuai, dan metode pembayaran yang efisien, kamu bisa bermain Roblox dengan lebih <strong>hemat dan aman.</strong>
                      </p>
                    </div>

                    <div className="bg-primary rounded-[3rem] p-12 text-center text-primary-foreground shadow-2xl shadow-primary/40 relative overflow-hidden group">
                      <div className="relative z-10 space-y-6">
                        <h4 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">Top Up Murah & Cepat?</h4>
                        <p className="text-lg font-medium opacity-90">Main makin seru tanpa nunggu lama. Robux otomatis masuk!</p>
                        <Link to="/top-up-robux">
                          <Button variant="secondary" size="xl" className="px-12 py-8 text-xl font-black shadow-xl hover:scale-105 transition-transform">
                            GUNAKAN SIROBUX SEKARANG <MousePointer2 className="ml-2 h-6 w-6" />
                          </Button>
                        </Link>
                      </div>
                      <Zap className="absolute -right-10 -bottom-10 h-64 w-64 opacity-10 rotate-12" />
                    </div>
                  </div>

                  {/* FOOTER KEYWORDS */}
                  <div className="pt-12 border-t border-border flex flex-wrap justify-center gap-3">
                    {[
                      "tips hemat top up robux", "top up robux untuk pemula", "top up robux murah", "harga robux", "top up robux aman"
                    ].map((keyword, i) => (
                      <span key={i} className="px-4 py-2 bg-card border border-border rounded-xl text-[10px] font-black uppercase text-muted-foreground hover:text-primary transition-colors cursor-default">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* --- SIDEBAR (KANAN) --- */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-10">
                
                {/* 1. PROMO CARD (Materi 7: SEM) */}
                <div className="bg-primary rounded-[3rem] p-10 text-primary-foreground shadow-3xl relative overflow-hidden text-center group">
                  <div className="relative z-10">
                    <TrendingUp className="h-12 w-12 mb-6 mx-auto group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-3xl font-black leading-none mb-6 italic uppercase tracking-tighter">
                      Sirobux<br/>Paket Hemat
                    </h3>
                    <p className="text-sm opacity-90 mb-10 font-medium leading-relaxed">
                      Top up Robux murah, cepat, dan terpercaya hanya dalam hitungan detik!
                    </p>
                    <Link to="/top-up-robux">
                      <Button variant="secondary" className="w-full font-black py-8 text-lg shadow-xl hover:scale-105 transition-transform duration-300">
                        TOP UP SEKARANG
                      </Button>
                    </Link>
                  </div>
                  <Zap className="absolute -right-10 -bottom-10 h-64 w-64 opacity-10 rotate-12" />
                </div>

                {/* 2. ARTIKEL REKOMENDASI (Materi 3: Link Building) */}
                <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-black text-foreground uppercase tracking-tighter">
                      Artikel Rekomendasi
                    </h4>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Cara Menghindari Scam Roblox 2025",
                        desc: "Panduan lengkap menjaga akun tetap aman.",
                        link: "/blog/aman-roblox",
                        date: "24 Des 2025"
                      },
                      {
                        title: "Perbedaan Robux Fast & Resmi",
                        desc: "Kenali jenis Robux sebelum kamu membeli.",
                        link: "/blog/perbedaan-robux",
                        date: "22 Des 2025"
                      },
                      {
                        title: "Daftar Harga Robux Termurah Hari Ini",
                        desc: "Update harga harian khusus member Sirobux.",
                        link: "/blog/harga-robux-terbaru",
                        date: "20 Des 2025"
                      }
                    ].map((article, i) => (
                      <Link 
                        key={i} 
                        to={article.link} 
                        className="group block space-y-2 border-b border-border/50 pb-4 last:border-0 last:pb-0 transition-all"
                      >
                        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">
                          {article.date}
                        </div>
                        <h5 className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {article.title}
                        </h5>
                        <p className="text-xs text-muted-foreground line-clamp-1 group-hover:text-foreground/70 transition-colors">
                          {article.desc}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link to="/blog">
                    <Button variant="ghost" className="w-full mt-6 text-xs font-black uppercase tracking-widest hover:bg-primary/10 group">
                      Lihat Semua Artikel 
                      <ArrowLeft className="h-3 w-3 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* 3. SOCIAL BOOKMARKING (Materi 5: Off-Page SEO) */}
                <div className="bg-card p-10 rounded-[2.5rem] border border-border text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-6 text-muted-foreground italic">
                    Share untuk sinyal Off-Page SEO
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-primary/20 hover:bg-primary/10 transition-all">
                      <Share2 className="h-5 w-5 text-primary" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-primary/20 hover:bg-primary/10 transition-all">
                      <Target className="h-5 w-5 text-primary" />
                    </Button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}