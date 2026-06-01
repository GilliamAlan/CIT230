// ============================================
// COMPONENTS — Direction A
// Photo placeholders + shared UI atoms
// ============================================

// ====== PLACEHOLDER PHOTO ======
// Generates a stylized SVG that suggests a kitchen/bath/basement scene
// without trying to be photoreal. Designed to be REPLACED with real photos.

const Photo = ({ kind = "kitchen", tone = "warm", src, alt = "", label }) => {
  if (src) {
    return (
      <div className="photo" style={{ position: "relative" }}>
        <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  const palettes = {
    warm:   { bg: "#E8DCC4", a: "#B5532A", b: "#8A6B45", c: "#3E2D20", d: "#F5EFE6" },
    cool:   { bg: "#D9D5CB", a: "#4F5A38", b: "#7A7565", c: "#2C2820", d: "#F0EBDF" },
    deep:   { bg: "#3E2D20", a: "#B5532A", b: "#8A6B45", c: "#1F1611", d: "#F5EFE6" },
    cream:  { bg: "#F5EFE6", a: "#B5532A", b: "#8A6B45", c: "#3E2D20", d: "#FFFFFF" },
    moss:   { bg: "#4F5A38", a: "#C68F2F", b: "#8A8260", c: "#2A2F20", d: "#F0EBDF" },
  };
  const p = palettes[tone] || palettes.warm;

  // each "kind" is a simple geometric scene suggesting the room
  const scenes = {
    kitchen: (
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill={p.bg}/>
        {/* back wall */}
        <rect x="0" y="0" width="400" height="280" fill={p.d} opacity="0.4"/>
        {/* upper cabinets */}
        <rect x="20" y="60" width="160" height="120" fill={p.c} opacity="0.85"/>
        <rect x="22" y="62" width="76" height="116" fill={p.c} opacity="0.9"/>
        <rect x="102" y="62" width="76" height="116" fill={p.c} opacity="0.95"/>
        {/* range hood */}
        <path d="M 200 60 L 200 160 L 280 160 L 280 60 Z" fill={p.c}/>
        <rect x="210" y="80" width="60" height="60" fill={p.bg} opacity="0.3"/>
        {/* shelves */}
        <rect x="300" y="80" width="80" height="2" fill={p.b}/>
        <rect x="300" y="120" width="80" height="2" fill={p.b}/>
        <rect x="300" y="160" width="80" height="2" fill={p.b}/>
        <circle cx="320" cy="70" r="8" fill={p.a}/>
        <rect x="340" y="58" width="14" height="20" fill={p.a} opacity="0.7"/>
        <circle cx="360" cy="110" r="6" fill={p.a} opacity="0.6"/>
        {/* counter */}
        <rect x="0" y="280" width="400" height="20" fill={p.d}/>
        {/* island */}
        <rect x="60" y="320" width="280" height="14" fill={p.d}/>
        <rect x="80" y="334" width="240" height="120" fill={p.c}/>
        <rect x="90" y="350" width="80" height="100" fill={p.c} opacity="0.9" stroke={p.b} strokeWidth="0.5"/>
        <rect x="180" y="350" width="80" height="100" fill={p.c} opacity="0.85" stroke={p.b} strokeWidth="0.5"/>
        <rect x="270" y="350" width="50" height="100" fill={p.c} opacity="0.9" stroke={p.b} strokeWidth="0.5"/>
        {/* pendant lights */}
        <line x1="140" y1="0" x2="140" y2="220" stroke={p.c} strokeWidth="1"/>
        <ellipse cx="140" cy="240" rx="18" ry="22" fill={p.a} opacity="0.9"/>
        <line x1="260" y1="0" x2="260" y2="220" stroke={p.c} strokeWidth="1"/>
        <ellipse cx="260" cy="240" rx="18" ry="22" fill={p.a} opacity="0.9"/>
        {/* floor */}
        <rect x="0" y="454" width="400" height="46" fill={p.b} opacity="0.4"/>
      </svg>
    ),
    bath: (
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill={p.bg}/>
        {/* tile wall pattern */}
        <pattern id={`tile-${tone}`} x="0" y="0" width="40" height="60" patternUnits="userSpaceOnUse">
          <rect width="40" height="60" fill={p.d} opacity="0.5"/>
          <rect x="0" y="0" width="40" height="60" fill="none" stroke={p.b} strokeWidth="0.5" opacity="0.5"/>
        </pattern>
        <rect x="0" y="0" width="400" height="320" fill={`url(#tile-${tone})`}/>
        {/* mirror */}
        <rect x="120" y="60" width="160" height="180" fill={p.bg} stroke={p.c} strokeWidth="2" rx="80"/>
        <rect x="130" y="80" width="140" height="140" fill={p.d} opacity="0.6" rx="70"/>
        {/* sconce */}
        <circle cx="80" cy="120" r="6" fill={p.a}/>
        <circle cx="320" cy="120" r="6" fill={p.a}/>
        {/* vanity */}
        <rect x="60" y="280" width="280" height="14" fill={p.d}/>
        <rect x="60" y="294" width="280" height="120" fill={p.c}/>
        <rect x="80" y="310" width="100" height="100" fill={p.c} opacity="0.85" stroke={p.b} strokeWidth="0.5"/>
        <rect x="220" y="310" width="100" height="100" fill={p.c} opacity="0.85" stroke={p.b} strokeWidth="0.5"/>
        <circle cx="130" cy="358" r="2" fill={p.a}/>
        <circle cx="270" cy="358" r="2" fill={p.a}/>
        {/* faucet */}
        <rect x="195" y="266" width="10" height="20" fill={p.a}/>
        <rect x="190" y="284" width="20" height="3" fill={p.a}/>
        {/* floor */}
        <rect x="0" y="414" width="400" height="86" fill={p.b} opacity="0.5"/>
        {/* freestanding tub edge */}
        <ellipse cx="60" cy="420" rx="50" ry="14" fill={p.d}/>
        <ellipse cx="60" cy="416" rx="44" ry="10" fill={p.b} opacity="0.4"/>
      </svg>
    ),
    basement: (
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill={p.bg}/>
        {/* back wall - paneling */}
        <rect x="0" y="0" width="400" height="320" fill={p.d} opacity="0.5"/>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <line key={i} x1={i * 70 + 30} y1="0" x2={i * 70 + 30} y2="320" stroke={p.b} strokeWidth="0.5" opacity="0.4"/>
        ))}
        {/* artwork */}
        <rect x="50" y="60" width="80" height="100" fill={p.a} opacity="0.7" stroke={p.c} strokeWidth="2"/>
        <rect x="160" y="80" width="60" height="80" fill={p.b} opacity="0.7" stroke={p.c} strokeWidth="2"/>
        {/* tv / fireplace */}
        <rect x="240" y="80" width="130" height="80" fill={p.c}/>
        <rect x="248" y="88" width="114" height="64" fill={p.a} opacity="0.5"/>
        {/* sectional sofa */}
        <rect x="40" y="320" width="320" height="60" fill={p.b} rx="8"/>
        <rect x="40" y="290" width="100" height="40" fill={p.b} opacity="0.85" rx="6"/>
        <rect x="150" y="290" width="100" height="40" fill={p.b} opacity="0.85" rx="6"/>
        <rect x="260" y="290" width="100" height="40" fill={p.b} opacity="0.85" rx="6"/>
        {/* throw pillows */}
        <rect x="60" y="300" width="30" height="30" fill={p.a} opacity="0.85" rx="4"/>
        <rect x="280" y="300" width="30" height="30" fill={p.d} opacity="0.6" rx="4"/>
        {/* coffee table */}
        <rect x="120" y="400" width="160" height="40" fill={p.c} opacity="0.8" rx="2"/>
        <circle cx="160" cy="420" r="6" fill={p.a}/>
        <rect x="220" y="412" width="40" height="16" fill={p.d} opacity="0.4"/>
        {/* rug */}
        <rect x="20" y="450" width="360" height="50" fill={p.a} opacity="0.4" rx="2"/>
        {/* floor lamp */}
        <line x1="380" y1="200" x2="380" y2="380" stroke={p.c} strokeWidth="2"/>
        <ellipse cx="380" cy="190" rx="14" ry="18" fill={p.a} opacity="0.9"/>
      </svg>
    ),
    portrait: (
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill={p.b} opacity="0.3"/>
        <rect width="400" height="500" fill={p.bg}/>
        {/* shoulders */}
        <path d="M 0 500 Q 100 380 200 380 Q 300 380 400 500 Z" fill={p.c}/>
        {/* neck */}
        <rect x="170" y="320" width="60" height="80" fill={p.a} opacity="0.6"/>
        {/* head */}
        <ellipse cx="200" cy="240" rx="80" ry="100" fill={p.a} opacity="0.7"/>
        {/* hair */}
        <path d="M 130 200 Q 130 130 200 130 Q 270 130 270 200 Q 270 220 260 230 L 140 230 Q 130 220 130 200 Z" fill={p.c}/>
        {/* highlight */}
        <ellipse cx="180" cy="225" rx="15" ry="6" fill={p.d} opacity="0.4"/>
        {/* background flecks */}
        <circle cx="60" cy="80" r="3" fill={p.a} opacity="0.3"/>
        <circle cx="340" cy="120" r="2" fill={p.a} opacity="0.3"/>
        <circle cx="80" cy="200" r="2" fill={p.a} opacity="0.2"/>
      </svg>
    ),
    detail: (
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill={p.bg}/>
        {/* close-up of countertop with vase */}
        <rect x="0" y="300" width="400" height="200" fill={p.d}/>
        <rect x="0" y="298" width="400" height="6" fill={p.b} opacity="0.6"/>
        {/* vase */}
        <path d="M 80 200 Q 70 240 80 280 Q 90 300 110 300 Q 130 300 140 280 Q 150 240 140 200 Q 130 180 110 180 Q 90 180 80 200 Z" fill={p.a}/>
        <ellipse cx="110" cy="180" rx="20" ry="6" fill={p.c}/>
        {/* branches */}
        <path d="M 110 180 Q 90 130 70 100 Q 65 90 70 80" stroke={p.c} strokeWidth="2" fill="none"/>
        <path d="M 110 180 Q 130 140 150 110" stroke={p.c} strokeWidth="2" fill="none"/>
        <path d="M 110 180 Q 110 130 105 90" stroke={p.c} strokeWidth="2" fill="none"/>
        <ellipse cx="68" cy="78" rx="8" ry="3" fill={p.b} opacity="0.6" transform="rotate(-30 68 78)"/>
        <ellipse cx="148" cy="108" rx="8" ry="3" fill={p.b} opacity="0.6" transform="rotate(30 148 108)"/>
        <ellipse cx="103" cy="88" rx="6" ry="3" fill={p.b} opacity="0.6"/>
        {/* book */}
        <rect x="220" y="250" width="120" height="48" fill={p.c}/>
        <rect x="225" y="255" width="110" height="38" fill={p.b} opacity="0.4"/>
        {/* candle */}
        <rect x="180" y="220" width="20" height="80" fill={p.d}/>
        <ellipse cx="190" cy="220" rx="10" ry="3" fill={p.c}/>
        <path d="M 190 220 Q 188 210 190 200 Q 192 210 190 220 Z" fill={p.a}/>
      </svg>
    ),
    arch: (
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill={p.bg}/>
        {/* archway */}
        <path d="M 60 500 L 60 200 Q 60 80 200 80 Q 340 80 340 200 L 340 500 Z" fill={p.d} opacity="0.5"/>
        <path d="M 100 500 L 100 220 Q 100 120 200 120 Q 300 120 300 220 L 300 500 Z" fill={p.bg}/>
        {/* room beyond */}
        <rect x="120" y="240" width="160" height="160" fill={p.c} opacity="0.3"/>
        <rect x="140" y="280" width="40" height="80" fill={p.a} opacity="0.8"/>
        <rect x="220" y="260" width="60" height="100" fill={p.b} opacity="0.6"/>
        {/* floor */}
        <path d="M 60 400 L 340 400 L 340 500 L 60 500 Z" fill={p.b} opacity="0.5"/>
        {/* sconces */}
        <circle cx="80" cy="180" r="5" fill={p.a}/>
        <circle cx="320" cy="180" r="5" fill={p.a}/>
      </svg>
    ),
  };

  return (
    <div className="photo">
      {scenes[kind] || scenes.kitchen}
    </div>
  );
};

// ====== NAV ======

const Nav = ({ page, setPage, brand = "Atlas Construction", tagline = "" }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["home", "Home"],
    ["kitchen", "Kitchens"],
    ["bath", "Bathrooms"],
    ["basement", "Basements"],
    ["about", "About"],
    ["contact", "Contact"],
  ];
  const navigate = (id) => { setPage(id); setMenuOpen(false); };
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}${menuOpen ? " nav-open" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); navigate("home"); }}>
          <span className="brand-mark">A</span>
          <span>
            {brand}
            {tagline && <small>{tagline}</small>}
          </span>
        </a>
        <div className="nav-links">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); navigate(id); }}
              className={`nav-link${page === id ? " active" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }} className="nav-cta">
          <span className="nav-cta-dot"></span>
          Free Estimate
        </a>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

// ====== TICKER ======

const Ticker = () => {
  const items = [
    "Family owned since 2008",
    "Licensed & insured",
    "5-star reviewed",
    "Lifetime craftsmanship warranty",
    "Local crews — no subcontractors",
    "Design-build under one roof",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item} <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// ====== TRUST BADGES ======

const Trust = () => (
  <section className="trust">
    <div className="wrap">
      <div className="trust-inner">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Trusted locally</div>
          <h3>The reviews speak for themselves — and so do our neighbors.</h3>
        </div>
        <div className="trust-badges">
          {[
            { name: "Google", num: "5.0", count: "184 reviews" },
            { name: "Houzz", num: "4.9", count: "62 reviews" },
            { name: "Yelp", num: "5.0", count: "47 reviews" },
            { name: "BBB", num: "A+", count: "Accredited" },
          ].map((b) => (
            <div key={b.name} className="trust-badge">
              <span className="trust-badge-name">{b.name}</span>
              <div className="trust-badge-rating">
                <span className="trust-badge-num">{b.num}</span>
                <span className="trust-badge-stars">★★★★★</span>
              </div>
              <span className="trust-badge-count">{b.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ====== CTA STRIP ======

const CtaStrip = ({ setPage }) => (
  <section className="cta-strip">
    <div className="wrap cta-strip-inner">
      <h2>Let's talk about <em>your home</em>.</h2>
      <div className="cta-strip-actions">
        <div className="cta-strip-meta">
          <span style={{ letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 11 }}>Call or text — we pick up</span>
          <span className="cta-strip-phone">(646) 408-3455</span>
        </div>
        <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); setPage("contact"); }}>
          Request a free estimate <span className="arrow"></span>
        </a>
      </div>
    </div>
  </section>
);

// ====== FOOTER ======

const Footer = ({ setPage, brand = "Atlas Construction" }) => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer-grid">
        <div className="footer-brand">
          <h4>Built like it's our own home.<br/><em style={{ fontStyle: "italic", color: "var(--clay-light)" }}>Because someday, it might be.</em></h4>
          <p>A family-owned remodeling company specializing in kitchens, bathrooms, and basement finishing. We take on a small number of projects each year so every one gets our full attention.</p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#kitchen" onClick={(e) => { e.preventDefault(); setPage("kitchen"); }}>Kitchen remodels</a></li>
            <li><a href="#bath" onClick={(e) => { e.preventDefault(); setPage("bath"); }}>Bathroom remodels</a></li>
            <li><a href="#basement" onClick={(e) => { e.preventDefault(); setPage("basement"); }}>Basement finishing</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); setPage("about"); }}>About us</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }}>Contact</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Reviews</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Get in touch</h5>
          <ul>
            <li><a href="tel:6464083455">(646) 408-3455</a></li>
            <li><a href="mailto:atlasconstructionslc@gmail.com">atlasconstructionslc@gmail.com</a></li>
            <li>Mon–Fri · 7am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <span>© {new Date().getFullYear()} {brand}. Licensed & insured.</span>
        <div>
          <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
          <a href="#" onClick={(e) => e.preventDefault()}>License #CB-22914</a>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Photo, Nav, Ticker, Trust, CtaStrip, Footer });
