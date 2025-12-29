import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Tips Hemat Top Up Robux untuk Pemula",
    excerpt: "Pelajari cara-cara cerdas untuk menghemat pengeluaran saat top up Robux. Dapatkan lebih banyak Robux dengan budget yang sama!",
    category: "Tips & Tricks",
    author: "Admin sirobux",
    date: "20 Des 2024",
    readTime: "5 menit",
    image: "/hemat.png", // Path diperbaiki
    slug: "/blog/tips-hemat-robux"
  },
  {
    id: 2,
    title: "Game Roblox Terpopuler di Indonesia 2024",
    excerpt: "Cek daftar game Roblox yang paling banyak dimainkan oleh gamer Indonesia. Mana yang jadi favoritmu?",
    category: "Gaming",
    author: "Admin sirobux",
    date: "18 Des 2024",
    readTime: "7 menit",
    image: "/game-populer.png", // Path diperbaiki
    slug: "#"
  },
  {
    id: 3,
    title: "Panduan Lengkap Gamepass Blox Fruits",
    excerpt: "Mau jadi pro player Blox Fruits? Simak panduan lengkap Gamepass yang wajib kamu punya untuk meningkatkan gameplay-mu!",
    category: "Panduan",
    author: "Admin sirobux",
    date: "15 Des 2024",
    readTime: "10 menit",
    image: "/blog-blox-fruit.png", // Path diperbaiki
    slug: "#"
  },
  {
    id: 4,
    title: "Promo Akhir Tahun: Diskon 10% untuk Semua Produk!",
    excerpt: "Jangan lewatkan promo spesial akhir tahun dari sirobux! Nikmati diskon 10% untuk semua pembelian Robux dan Gamepass.",
    category: "Promo",
    author: "Admin sirobux",
    date: "10 Des 2024",
    readTime: "3 menit",
    image: "/promo.png", // Path diperbaiki
    slug: "#"
  },
  {
    id: 5,
    title: "Cara Mengamankan Akun Roblox dari Hacker",
    excerpt: "Keamanan akun adalah prioritas! Pelajari langkah-langkah penting untuk melindungi akun Roblox-mu dari ancaman hacker.",
    category: "Keamanan",
    author: "Admin sirobux",
    date: "5 Des 2024",
    readTime: "6 menit",
    image: "/hacker.png", // Path diperbaiki
    slug: "#"
  },
  {
    id: 6,
    title: "Update Terbaru Roblox: Fitur Baru yang Wajib Kamu Ketahui",
    excerpt: "Roblox terus berkembang dengan fitur-fitur baru yang menarik. Simak update terbaru yang akan mengubah cara bermainmu!",
    category: "Update",
    author: "Admin sirobux",
    date: "1 Des 2024",
    readTime: "8 menit",
    image: "/fitur-baru.png", // Path diperbaiki
    slug: "#"
  },
];

const categories = ["Semua", "Tips & Tricks", "Gaming", "Panduan", "Promo", "Keamanan", "Update"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-12 lg:py-16 text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Blog <span className="text-gradient">sirobux</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tips, panduan, dan info terbaru seputar Roblox dan gaming
            </p>
          </div>
        </div>
      </section>

      {/* Categories Sticky Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl border border-border overflow-hidden card-elevated group flex flex-col h-full"
              >
                {/* Thumbnail Image */}
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-background/90 backdrop-blur-sm text-primary rounded-full text-xs font-bold shadow-sm">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More Button with Link */}
                  <Link to={post.slug} className="mt-auto">
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary border border-transparent group-hover:border-primary/20">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Pagination */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-xl px-8">
              Muat Lebih Banyak Artikel
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-background-secondary border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dapatkan Tips Gaming Terbaru
            </h2>
            <p className="text-muted-foreground mb-8">
              Bergabunglah dengan ribuan player lain. Kami akan mengirimkan info promo dan tips hemat Robux langsung ke email kamu.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan alamat email kamu..."
                className="flex-1 px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
                required
              />
              <Button variant="cta" size="lg" className="shadow-button">
                Subscribe Sekarang
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}