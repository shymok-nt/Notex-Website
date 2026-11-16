import { ArrowDownToLine, ArrowRight, Check, FileText, LockKeyhole, PenLine, Home as HomeIcon, BookOpen, Search, SlidersHorizontal, List, FileUp, ChevronRight } from "lucide-react";

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
          <a className="brand" href="#" aria-label="Notex ana sayfa"><img className="notex-brand-icon" src="/notex-icon.svg" alt="" /><img className="notex-wordmark-image" src="/notex-wordmark.svg" alt="Notex" /></a>
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
          
          <h1 id="hero-title">Düşüncelerine<br/><em>alan aç.</em></h1>
          <p className="hero-copy">Fikirlerin, notların ve çizimlerin için daha sakin bir yer. Dikkatini dağıtan hiçbir şey olmadan, sadece sen ve düşüncelerin.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#indir">Windows için Notex <ArrowDownToLine size={17}/></a>
            <a className="button-secondary" href="#ozellikler">Daha fazlasını keşfet <ArrowRight size={17}/></a>
          </div>
          <p className="hero-note"><Check size={14}/> Hesap gerektirmez <span>·</span> Yerel çalışma</p>
        </div>
        <div className="showcase" id="deneyim" aria-label="Notex ana ekranını temel alan tanıtım arayüzü">
          <div className="showcase-window notex-preview">
            <div className="preview-header">
              <div className="preview-brand"><img className="preview-brand-icon" src="/notex-icon.svg" alt="" /><img className="preview-wordmark-image" src="/notex-wordmark.svg" alt="Notex" /></div>
              <div className="preview-tools"><span><FileUp size={16}/></span><span><List size={16}/></span><span className="preview-select">Seç</span><span><SlidersHorizontal size={16}/></span></div>
            </div>
            <div className="preview-content">
              <h3>Ana sayfa</h3><p className="preview-subtitle">Notların ve defterlerin, tek bir yerde.</p>
              <div className="preview-section-title"><strong>Defterlerim</strong><span>Tümü <ChevronRight size={12}/></span></div>
              <div className="preview-notebooks">{["rose","orange","teal","blue"].map((color,i)=><div className="preview-notebook" key={color}><div className={`preview-cover ${color}`}><span/></div><strong>Yeni defter</strong><small>1 sayfa</small></div>)}</div>
              <div className="preview-section-title preview-recent-title"><strong>Son açılan defterler</strong></div>
              <div className="preview-recent">{["rose","orange","teal","blue"].map(color=><div className="preview-recent-row" key={color}><div className={`preview-cover preview-cover-small ${color}`}><span/></div><div><strong>Yeni defter</strong><small>1 sayfa · Son açılma Bugün 23:12</small></div><ChevronRight size={15}/></div>)}</div>
            </div>
            <div className="preview-bottom"><span className="active"><HomeIcon size={16}/>Ana sayfa</span><span><BookOpen size={16}/>Defterler</span><span><Search size={16}/>Ara</span></div>
          </div>
          <p className="showcase-caption">Notex arayüzünü temel alan temsili tanıtım. Defter içerikleri örnektir.</p>
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

      <footer className="footer section-wrap"><a className="brand" href="#" aria-label="Notex ana sayfa"><img className="notex-brand-icon" src="/notex-icon.svg" alt="" /><img className="notex-wordmark-image" src="/notex-wordmark.svg" alt="Notex" /></a><span>© {new Date().getFullYear()} Notex. Düşüncelerine alan aç.</span><a href="https://github.com/shymok-nt/Notex" target="_blank" rel="noopener noreferrer">GitHub <ArrowRight size={14}/></a></footer>
    </main>
  );
}
