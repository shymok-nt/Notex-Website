import { ArrowDownToLine, ArrowRight, Check, FileText, Layers3, LockKeyhole, PenLine, Sparkles } from "lucide-react";

const features = [
  { icon: PenLine, title: "Özgürce yaz.", text: "Kalemle not al, çiz, fikirlerini kağıt hissiyle düzenle." },
  { icon: FileText, title: "PDF'lerin yanında.", text: "Belgelerini ve notlarını aynı çalışma alanında tut." },
  { icon: LockKeyhole, title: "Notların sana ait.", text: "Hesap zorunluluğu olmadan, yerel çalışma deneyimi." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#" aria-label="Notex ana sayfa"><span className="brand-mark">n<span>.</span></span><span>notex</span></a>
          <nav className="desktop-nav" aria-label="Ana menü">
            <a href="#ozellikler">Özellikler</a>
            <a href="#deneyim">Deneyim</a>
            <a href="#indir">İndir</a>
          </nav>
          <a className="nav-cta" href="#indir">Notex'i keşfet <ArrowRight size={14} strokeWidth={1.8}/></a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> Windows için yeni bir not alma deneyimi</div>
          <h1 id="hero-title">Düşüncelerine<br/><em>alan aç.</em></h1>
          <p className="hero-copy">Fikirlerin, notların ve çizimlerin için daha sakin bir yer. Dikkatini dağıtan hiçbir şey olmadan, sadece sen ve düşüncelerin.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#indir">Windows için Notex <ArrowDownToLine size={17}/></a>
            <a className="button-secondary" href="#ozellikler">Daha fazlasını keşfet <ArrowRight size={17}/></a>
          </div>
          <p className="hero-note"><Check size={14}/> Hesap gerektirmez <span>·</span> Yerel çalışma</p>
        </div>
        <div className="showcase" id="deneyim" aria-label="Notex çalışma alanını temsil eden tasarım illüstrasyonu">
          <div className="showcase-window">
            <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>Notex</span><div className="window-top-right">Çalışma alanın</div></div>
            <div className="window-body">
              <aside className="mock-sidebar">
                <div className="sidebar-logo">n<span>.</span></div>
                <div className="sidebar-label">KÜTÜPHANE</div>
                <div className="sidebar-link selected"><Layers3 size={15}/> Defterler</div>
                <div className="sidebar-link"><FileText size={15}/> Notlar</div>
                <div className="sidebar-divider"/>
                <div className="sidebar-label">ÇALIŞMA ALANI</div>
                <div className="sidebar-link"><Sparkles size={15}/> Fikirlerim</div>
                <div className="sidebar-foot">Düşüncelerine alan aç.</div>
              </aside>
              <div className="mock-main">
                <div className="mock-breadcrumb">Çalışma alanı <span>/</span> Not defterim</div>
                <div className="mock-paper">
                  <div className="paper-date">NOT DEFTERİ · 01</div>
                  <div className="paper-title">Bugün aklımda.</div>
                  <div className="paper-rule"/>
                  <div className="paper-script">Her büyük fikir,<br/>küçük bir notla başlar.</div>
                  <div className="paper-scribble" aria-hidden="true"><svg viewBox="0 0 330 75" fill="none"><path d="M5 50 C40 18 58 71 95 39 S155 9 180 38 S244 70 278 28 S316 21 325 32" stroke="#8E9DBB" strokeWidth="2.4" strokeLinecap="round"/><path d="M260 48 L282 28 L287 50" stroke="#8E9DBB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  <div className="paper-sticky"><span>Bir fikir<br/>daha ✳</span></div>
                </div>
              </div>
            </div>
          </div>
          <p className="showcase-caption">Notex deneyiminden ilham alan temsili görsel. Gerçek uygulama ekran görüntüsü değildir.</p>
        </div>
      </section>

      <section className="features section-wrap" id="ozellikler">
        <div className="section-kicker">DAHA AZ KARMAŞA. DAHA ÇOK ODAK.</div>
        <h2>Her şey yerli yerinde.<br/><span>Zihnin özgür.</span></h2>
        <p className="section-intro">Not almak karmaşık olmamalı. Notex, düşüncelerini yakalaman ve düzenlemen için ihtiyaç duyduğun alanı sunar.</p>
        <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={23} strokeWidth={1.6}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="download-section" id="indir">
        <div className="download-inner"><div className="section-kicker">NOTEX FOR WINDOWS</div><h2>Fikirlerin seni<br/><em>bekliyor.</em></h2><p>Notex masaüstü deneyimi Windows için hazırlanıyor. İndirme bağlantısı, doğrulanmış kurulum paketi yayınlandığında burada yer alacak.</p><span className="download-status"><span className="status-dot"/> Windows sürümü — indirme bağlantısı yakında</span></div>
      </section>

      <footer className="footer section-wrap"><a className="brand" href="#" aria-label="Notex ana sayfa"><span className="brand-mark">n<span>.</span></span><span>notex</span></a><span>© {new Date().getFullYear()} Notex. Düşüncelerine alan aç.</span><a href="https://github.com/shymok-nt/Notex" target="_blank" rel="noopener noreferrer">GitHub <ArrowRight size={14}/></a></footer>
    </main>
  );
}
