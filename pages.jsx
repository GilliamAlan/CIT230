// ============================================
// PAGES — Direction A
// ============================================

// ====== HOME PAGE ======

const HomePage = ({ setPage, brand }) => (
  <>
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: 24 }}>We build</div>
        <div className="hero-grid">
          <div>
            <h1>
              Kitchen, bath<br/>
              &amp; basement<br/>
              <em>remodels.</em>
            </h1>
            <p className="lede" style={{ marginTop: 32, maxWidth: 520 }}>
              Atlas Construction specializes in kitchen remodeling, basement finishing, and elegant bathroom renovations — delivering quality craftsmanship, functional design, and lasting value for your home.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); setPage("contact"); }}>
                Schedule now <span className="arrow"></span>
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); setPage("contact"); }}>
                Contact us
              </a>
            </div>
          </div>
          <div className="hero-side">
            <div className="hero-img-wrap">
              <span className="label"><span className="label-dot"></span>Recently completed · White oak galley</span>
              <Photo src="photos/kitchen/galley-tall.jpeg" alt="Custom white oak kitchen with brass faucet and farmhouse sink"/>
            </div>
            <div className="hero-quote">
              "They treated our home like it was their own — and finished a week early."
              <cite>— Mara &amp; Devon K., 2025 kitchen remodel</cite>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Ticker/>

    <section className="company">
      <div className="wrap">
        <div className="company-grid">
          <div className="company-copy">
            <div className="eyebrow" style={{ marginBottom: 20 }}>Our company</div>
            <h2>Improving homes<br/><em>for your satisfaction.</em></h2>
            <p>With years of hands-on experience, Atlas Construction is dedicated to transforming homes through expert kitchen remodeling, basement finishing, and elegant bathroom renovations. We focus on quality craftsmanship, smart design, and results that enhance both comfort and property value.</p>
            <p>We believe every home deserves thoughtful planning and precise execution. From concept to completion, our team works closely with homeowners to deliver functional spaces that reflect their style and meet their needs.</p>
            <p>Our commitment to clear communication, reliable timelines, and attention to detail sets us apart. Whether you're upgrading a kitchen, finishing a basement, or remodeling a bathroom, Atlas Construction is your trusted partner.</p>
            <a href="#about" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); setPage("about"); }} style={{ marginTop: 8 }}>
              Read more <span className="arrow"></span>
            </a>
          </div>
          <div className="company-photo">
            <img loading="lazy" src="photos/kitchen/full-wide-1.jpeg" alt="Custom white oak kitchen by Atlas Construction"/>
          </div>
        </div>
      </div>
    </section>

    <section className="mid-cta">
      <div className="wrap mid-cta-inner">
        <h2>Let's work together to <em>transform your home.</em></h2>
        <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); setPage("contact"); }}>
          Schedule now <span className="arrow"></span>
        </a>
      </div>
    </section>

    <section>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Our services</div>
            <h2>What we offer<br/><em>for quality home remodeling.</em></h2>
          </div>
          <p>We're specialists, not generalists. Kitchens, bathrooms, and basements are the rooms we know inside and out — every joist, every junction box, every joint of trim.</p>
        </div>
        <div className="services-grid">
          {[
            { id: "kitchen", num: "01", title: "Kitchens", body: "From cabinet refacing to a full down-to-the-studs renovation. Custom millwork, stone, and tile installed by our own crews.", tone: "warm", kind: "kitchen", src: "photos/kitchen/full-wide-1.jpeg" },
            { id: "bath", num: "02", title: "Bathrooms", body: "Spa-grade primary suites, efficient powder rooms, age-in-place upgrades. Waterproofing done by the book — every time.", tone: "cool", kind: "bath", src: "photos/bath/emerald/overview.jpeg" },
            { id: "basement", num: "03", title: "Basements", body: "Family rooms, home offices, in-law suites, gyms, theaters. We handle the framing, electrical, plumbing, and finishes start to finish.", tone: "deep", kind: "basement", src: "photos/basement/lounge-pingpong.jpeg" },
          ].map((s) => (
            <div key={s.id} className="service-card" onClick={() => setPage(s.id)}>
              <span className="service-num">— {s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a className="service-link" href={`#${s.id}`} onClick={(e) => { e.preventDefault(); setPage(s.id); }}>
                Explore {s.title.toLowerCase()} <span className="arrow"></span>
              </a>
              <div className="service-img-wrap">
                {s.src ? <Photo src={s.src} alt={s.title}/> : <Photo kind={s.kind} tone={s.tone}/>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="projects">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Recent work</div>
            <h2>A few favorites<br/><em>from this year.</em></h2>
          </div>
          <p>A small selection of projects we wrapped recently. Click any photo to see the full story — before/after, scope, timeline, and budget.</p>
        </div>

        <div className="projects-rail">
          <div className="project project-wide">
            <Photo src="photos/kitchen/full-wide-2.jpeg" alt="White oak kitchen with island and range hood"/>
            <div className="project-meta">
              <div className="project-meta-l">
                <h4>White Oak Custom Kitchen</h4>
                <p>Full gut renovation · 10 weeks</p>
              </div>
              <span className="project-tag">Kitchen</span>
            </div>
          </div>
          <div className="project project-tall">
            <Photo src="photos/bath/emerald/claw-tub-chandelier.jpeg" alt="Black claw-foot tub against emerald tile with beaded chandelier"/>
            <div className="project-meta">
              <div className="project-meta-l">
                <h4>The Emerald Suite</h4>
                <p>Primary bath · 9 weeks</p>
              </div>
              <span className="project-tag">Bath</span>
            </div>
          </div>
        </div>

        <div className="projects-rail-2">
          <div className="project project-tall">
            <Photo src="photos/basement/bar-memorabilia.jpeg" alt="Basement wet bar with shiplap walls and sports memorabilia"/>
            <div className="project-meta">
              <div className="project-meta-l">
                <h4>Lambeth Lane Basement</h4>
                <p>Wet bar + lounge · 11 weeks</p>
              </div>
              <span className="project-tag">Basement</span>
            </div>
          </div>
          <div className="project project-wide">
            <Photo src="photos/bath/marble/full-view.jpeg" alt="Marble primary bath with glass shower and freestanding tub"/>
            <div className="project-meta">
              <div className="project-meta-l">
                <h4>The Marble Primary</h4>
                <p>Primary bath · 7 weeks</p>
              </div>
              <span className="project-tag">Bath</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a href="#" className="btn btn-secondary" onClick={(e) => e.preventDefault()}>
            View the full portfolio <span className="arrow"></span>
          </a>
        </div>
      </div>
    </section>

    <section style={{ background: "var(--bg)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Testimonials</div>
            <h2>What our<br/><em>clients say.</em></h2>
          </div>
          <p>We don't write our own reviews. These are pulled, unedited, from Google. The full list is longer — these are the ones that capture what we try to do.</p>
        </div>
        <div className="testi-grid">
          {[
            {
              stars: 5,
              quote: "From start to finish, the team was professional, communicative, and detail-oriented. The cabinetry fits perfectly, the countertops are beautifully installed, and every finish looks high-end. They paid attention to the small details that really set their work apart.",
              name: "Bryan M.",
              role: "Kitchen remodel",
            },
            {
              stars: 5,
              quote: "I reached out due to the aftermath of a flooded master bathroom. I was able to reach a person right away and schedule an estimate a couple days later. The tile work was beautiful, the plumber was excellent. Just really happy dealing with friendly, nice, hardworking professionals.",
              name: "Susie C.",
              role: "Bathroom remodel",
            },
            {
              stars: 5,
              quote: "Just finished a basement remodel that included flooring, ceiling, lighting, and total redo of bathroom. They were great, quality work, responded quickly with any issues, and worked around our schedule.",
              name: "L. Hill",
              role: "Basement finishing",
            },
          ].map((t, i) => (
            <figure key={i} className="testi">
              <div className="testi-stars" aria-label={`${t.stars} stars`}>
                {Array.from({ length: t.stars }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <blockquote className="testi-quote">{t.quote}</blockquote>
              <figcaption className="testi-cap">
                <span className="testi-name">{t.name}</span>
                <span className="testi-role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div style={{ marginTop: 48, fontSize: 13, color: "var(--ink-mute)", textAlign: "center", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>
          Based on 184+ reviews across Google, Houzz &amp; Yelp
        </div>
      </div>
    </section>

    <CtaStrip setPage={setPage}/>
  </>
);

// ====== SERVICE DETAIL PAGES ======

const ServiceDetail = ({ kind, setPage }) => {
  const data = {
    kitchen: {
      eyebrow: "Transformative kitchen remodeling",
      title: "Create a kitchen that inspires <em>everyday living.</em>",
      lede: "At Atlas Construction, we specialize in transformative kitchen remodeling that blends functionality, style, and quality craftsmanship.",
      lede2: "Your kitchen is more than just a place to cook — it's the heart of your home. That's why we focus on layouts that improve flow, maximize storage, and elevate aesthetics while ensuring long-lasting performance.",
      img: "kitchen", tone: "warm",
      heroSrc: "photos/kitchen/galley-tall.jpeg",
      heroAlt: "Custom white oak galley kitchen with brass faucet and farmhouse sink",
      approachTitle: <>A personalized,<br/><em>step-by-step</em> remodel.</>,
      approachIntro: "We take a personalized, step-by-step approach to every kitchen remodel. From the first consultation to the final installation, we ensure clear communication, thoughtful planning, and precise execution — and an end result that is both beautiful and practical.",
      approachSteps: [
        { num: "01", title: "Understand", body: "We start by understanding your needs, style preferences, and budget — in your home, at your table." },
        { num: "02", title: "Design", body: "Custom layout and design planning, with detailed drawings and a fixed-price proposal before a single demolition day." },
        { num: "03", title: "Source", body: "High-quality materials and modern finishes, selected with you. No vague allowances or last-minute substitutions." },
        { num: "04", title: "Install", body: "Skilled installation by our own crews, with attention to every joint, joist, and finish detail." },
      ],
      approachPhoto: "photos/kitchen/full-tall-1.jpeg",
      whyChooseTitle: <>Quality you<br/><em>can trust.</em></>,
      whyChooseBody: [
        "Homeowners trust Atlas Construction for our commitment to quality, reliability, and results. We prioritize clear timelines, transparent pricing, and professional workmanship — ensuring a smooth remodeling experience from start to finish.",
        "Our goal isn't just to remodel your kitchen, but to transform how you use and enjoy your space every day.",
      ],
      gallery: [
        { src: "photos/kitchen/full-wide-1.jpeg", alt: "Full kitchen view with dark island and white oak cabinets" },
        { src: "photos/kitchen/full-tall-1.jpeg", alt: "U-shaped kitchen with farmhouse sink under window" },
        { src: "photos/kitchen/full-tall-2.jpeg", alt: "Kitchen perspective with stainless range hood" },
        { src: "photos/kitchen/island-tall.jpeg", alt: "Black island with built-in microwave and brass pulls" },
        { src: "photos/kitchen/cabinets-wide.jpeg", alt: "Detail of cabinet doors and counter run" },
        { src: "photos/kitchen/sink-wall-1.jpeg", alt: "Sink wall in white oak with vertical tile backsplash" },
        { src: "photos/kitchen/range-tall.jpeg", alt: "Stainless range hood with black marble accent" },
        { src: "photos/kitchen/sink-window-wide.jpeg", alt: "Farmhouse sink with brass faucet under the window" },
        { src: "photos/kitchen/sink-wall-2.jpeg", alt: "Galley with double farmhouse sink and brass faucet" },
        { src: "photos/kitchen/counter-detail.jpeg", alt: "Quartz counter detail showing veining" },
        { src: "photos/kitchen/full-wide-2.jpeg", alt: "Kitchen from the entry — full view" },
        { src: "photos/kitchen/sink-wide.jpeg", alt: "Sink and counter work — wide" },
      ],
      features: [
        "Custom cabinetry & millwork",
        "Quartz, granite & soapstone",
        "Tile & stone installation",
        "Lighting design & dimming",
        "Appliance specification",
        "Pantry & storage planning",
        "Hardwood & engineered floors",
        "Range hood venting",
      ],
      tiers: [
        { tag: "Refresh", title: "Surface", range: "$45–85K", desc: "Same layout, new everything you can see and touch.", feats: ["Cabinet refacing or paint", "New countertops & backsplash", "Sink, faucet, lighting", "Hardware & finishes"] },
        { tag: "Most popular", title: "Renovate", range: "$85–175K", desc: "New layout, new cabinets, full mechanical updates.", feats: ["Custom cabinetry", "Layout reconfiguration", "Electrical & plumbing updates", "Flooring & lighting design", "Appliance package"], feat: true },
        { tag: "Whole-room", title: "Reimagine", range: "$175K+", desc: "Down to the studs. Walls moved, mechanicals replaced.", feats: ["Structural changes", "All new mechanicals", "High-end appliances & finishes", "Custom millwork & built-ins", "Designer collaboration"] },
      ],
    },
    bath: {
      eyebrow: "Bathrooms",
      title: "Quiet luxury <em>worth waking up to.</em>",
      lede: "Watertight by design, calm by intention. We build bathrooms that look like a hotel and last like a fortress.",
      img: "bath", tone: "cool",
      heroSrc: "photos/bath/emerald/claw-tub-chandelier.jpeg",
      heroAlt: "Black claw-foot tub against emerald tile under a beaded chandelier",
      projects: [
        {
          tag: "Recent project · 01",
          title: "The Emerald Suite",
          meta: "Primary bath · 9 weeks",
          intro: "Moody, layered, unmistakably itself. Glossy emerald subway tile laid vertical, a cast-iron clawfoot, brass and matte black fixtures, ornate gold mirrors over a soapstone double vanity.",
          rows: [
            { kind: "2up", photos: [
              { src: "photos/bath/emerald/claw-tub-chandelier.jpeg", alt: "Claw-foot tub with beaded chandelier and emerald tile" },
              { src: "photos/bath/emerald/overview.jpeg", alt: "Overview of the primary bath with vanity, shower and tub" },
            ]},
            { kind: "3up", photos: [
              { src: "photos/bath/emerald/shower-niche.jpeg", alt: "Shower with hex-tile niche, rain head and brass hand-held" },
              { src: "photos/bath/emerald/vanity-mirrors.jpeg", alt: "Double vanity with soapstone counter and ornate gold mirrors" },
              { src: "photos/bath/emerald/shower-tub.jpeg", alt: "Shower with hex floor and the corner of the cast-iron tub" },
            ]},
            { kind: "3up", photos: [
              { src: "photos/bath/emerald/shower-full.jpeg", alt: "Curbless shower with brass rain head and emerald tile" },
              { src: "photos/bath/emerald/tub-detail.jpeg", alt: "Detail of the matte black tub filler against emerald tile" },
              { src: "photos/bath/emerald/vanity-double.jpeg", alt: "Soapstone double vanity with brass faucets" },
            ]},
            { kind: "3up", photos: [
              { src: "photos/bath/emerald/vanity-side.jpeg", alt: "Side view of the white oak vanity and gold mirror" },
              { src: "photos/bath/emerald/cabinet-detail.jpeg", alt: "Close-up of the white oak cabinetry and matte black hardware" },
              { src: "photos/bath/emerald/claw-tub.jpeg", alt: "Black clawfoot tub on hex floor against emerald tile" },
            ]},
          ],
        },
        {
          tag: "Recent project · 02",
          title: "The Marble Primary",
          meta: "Primary bath · 7 weeks",
          intro: "Bright, sculptural, sun-filled. A frameless glass shower, a freestanding tub under plantation shutters, and a custom white shaker double vanity with warm brass hardware.",
          rows: [
            { kind: "3up", photos: [
              { src: "photos/bath/marble/full-view.jpeg", alt: "Master bath overview with glass shower, freestanding tub and vanity" },
              { src: "photos/bath/marble/tub-windows.jpeg", alt: "Freestanding tub under bay of plantation shutters" },
              { src: "photos/bath/marble/shower-tub-wide.jpeg", alt: "Marble shower next to freestanding tub" },
            ]},
            { kind: "3up", photos: [
              { src: "photos/bath/marble/shower-corner.jpeg", alt: "Walk-in marble shower with brass hardware and corner bench" },
              { src: "photos/bath/marble/vanity-double.jpeg", alt: "Corner double vanity with marble counters and brass pulls" },
              { src: "photos/bath/marble/vanity-side.jpeg", alt: "Single vanity wall with brass mirror frame" },
            ]},
          ],
        },
        {
          tag: "Recent project · 03",
          title: "The Blue Onyx Bath",
          meta: "Primary bath · 6 weeks",
          intro: "Statement stone. A floor-to-ceiling blue onyx-look porcelain shower with a mosaic floor, a quiet gray vanity, and a smart toilet — calm where it should be, dramatic where it counts.",
          rows: [
            { kind: "2up", photos: [
              { src: "photos/bath/onyx/full-view.jpeg", alt: "Full bathroom with the blue onyx shower, toilet and vanity" },
              { src: "photos/bath/onyx/shower-full.jpeg", alt: "Full glass enclosure of the blue onyx shower" },
            ]},
            { kind: "2up", photos: [
              { src: "photos/bath/onyx/shower-close.jpeg", alt: "Close-up of the blue onyx shower interior" },
              { src: "photos/bath/onyx/vanity-shower.jpeg", alt: "Gray vanity next to the dramatic blue onyx shower" },
            ]},
          ],
        },
      ],
      features: [
        "Curbless & walk-in showers",
        "Heated floors & towel bars",
        "Schluter waterproofing",
        "Custom vanities",
        "Freestanding tubs",
        "Steam & sauna systems",
        "Lighting & ventilation",
        "Aging-in-place upgrades",
      ],
      tiers: [
        { tag: "Powder", title: "Powder", range: "$18–35K", desc: "Half-bath updates with high-impact finishes.", feats: ["New vanity & mirror", "Tile floor", "Lighting & fixtures", "Paint & trim"] },
        { tag: "Most popular", title: "Full Bath", range: "$45–95K", desc: "Hall or guest bathroom, top to bottom.", feats: ["Tile shower & floor", "Custom or stock vanity", "All new fixtures", "Waterproofing & vent fan", "Trim & paint"], feat: true },
        { tag: "Spa-grade", title: "Primary Suite", range: "$95K+", desc: "Heated floors, double vanities, custom shower systems.", feats: ["Curbless walk-in shower", "Freestanding soaking tub", "Heated floors", "Custom double vanity", "Steam, body sprays optional"] },
      ],
    },
    basement: {
      eyebrow: "Basements",
      title: "The square footage <em>you already own.</em>",
      lede: "A finished basement is the cheapest square footage you'll ever add. We turn raw, cold, dim spaces into the room you'll actually use every day.",
      img: "basement", tone: "deep",
      heroSrc: "photos/basement/lounge-pingpong.jpeg",
      heroAlt: "Finished basement with leather sofa, ping pong table, kitchenette and bar",
      galleryEyebrow: "Recent basements",
      galleryTitle: <>From raw concrete<br/><em>to fully lived-in.</em></>,
      galleryIntro: "Family rooms, game rooms, gyms, in-law suites — every basement we finish becomes the room the family actually spends the most time in.",
      galleryRows: [
        { kind: "row-full", photos: [
          { src: "photos/basement/lounge-pingpong.jpeg", alt: "Finished basement lounge with green leather sofa, ping pong table and kitchenette" },
        ]},
        { kind: "2up", photos: [
          { src: "photos/basement/gym.jpeg", alt: "Basement home gym with Peloton bike, mirror wall and weight rack" },
          { src: "photos/basement/bar-memorabilia.jpeg", alt: "Basement wet bar with wine rack, shiplap and sports memorabilia" },
        ]},
        { kind: "row-full", photos: [
          { src: "photos/basement/pingpong-bar.jpeg", alt: "Basement entertainment area with ping pong table and built-in bar" },
        ]},
      ],
      features: [
        "Framing & insulation",
        "Egress windows",
        "Waterproofing & sump",
        "Full bathrooms & wet bars",
        "Home theaters",
        "In-law suites & rentals",
        "Home offices & gyms",
        "HVAC & sound dampening",
      ],
      tiers: [
        { tag: "Open plan", title: "Family Room", range: "$55–95K", desc: "One big room. Drywall, flooring, lights, trim.", feats: ["Framing & insulation", "Drywall & paint", "Carpet or LVP flooring", "Recessed lighting", "Egress (if needed)"] },
        { tag: "Most popular", title: "Multi-Room", range: "$95–175K", desc: "Family room + bath + bedroom or office.", feats: ["Multiple finished rooms", "Full bathroom", "Wet bar or kitchenette", "Built-ins & storage", "Sound dampening"], feat: true },
        { tag: "Suite", title: "In-Law Suite", range: "$175K+", desc: "Full apartment with kitchen, bath, bedroom, living.", feats: ["Full kitchen", "Full bathroom", "Bedroom + living area", "Separate entry (if possible)", "Egress & code compliance"] },
      ],
    },
  }[kind];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="#home" onClick={(e) => { e.preventDefault(); setPage("home"); }}>Home</a>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span style={{ color: "var(--ink)" }}>{data.eyebrow}</span>
          </div>
          <div className="page-hero-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>{data.eyebrow}</div>
              <h1 dangerouslySetInnerHTML={{ __html: data.title }}/>
              <p className="lede" style={{ marginTop: 32, maxWidth: 520 }}>{data.lede}</p>
              {data.lede2 && <p style={{ marginTop: 18, maxWidth: 520, fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.65 }}>{data.lede2}</p>}
              {!data.approachSteps && (
                <ul className="feature-list">
                  {data.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              )}
              <div style={{ marginTop: 48, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); setPage("contact"); }}>
                  Get a free estimate <span className="arrow"></span>
                </a>
                <a href="#" className="btn btn-ghost" onClick={(e) => e.preventDefault()}>
                  See {data.eyebrow.toLowerCase()} we've built <span className="arrow"></span>
                </a>
              </div>
            </div>
            <div className="page-hero-img">
              {data.heroSrc ? <Photo src={data.heroSrc} alt={data.heroAlt}/> : <Photo kind={data.img} tone={data.tone}/>}
            </div>
          </div>
        </div>
      </section>

      {data.approachSteps && (
        <section className="approach">
          <div className="wrap">
            <div className="approach-grid">
              <div>
                <div className="eyebrow" style={{ marginBottom: 20 }}>Our approach</div>
                <h2 className="approach-title">{data.approachTitle}</h2>
                <p className="approach-intro">{data.approachIntro}</p>
                <ol className="approach-steps">
                  {data.approachSteps.map((s) => (
                    <li key={s.num}>
                      <span className="approach-num">{s.num}</span>
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="approach-photo">
                <img loading="lazy" src={data.approachPhoto} alt="Atlas Construction kitchen detail"/>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.whyChooseBody && (
        <section className="whychoose">
          <div className="wrap">
            <div className="whychoose-grid">
              <div className="whychoose-l">
                <div className="eyebrow" style={{ marginBottom: 20 }}>Why choose Atlas</div>
                <h2>{data.whyChooseTitle}</h2>
              </div>
              <div className="whychoose-r">
                {data.whyChooseBody.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.approachSteps && data.features && (
        <section className="offer">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow" style={{ marginBottom: 20 }}>What we offer</div>
                <h2>Every detail,<br/><em>handled in-house.</em></h2>
              </div>
              <p>Our kitchen remodeling services combine modern design trends with timeless craftsmanship — kitchens that remain functional and stylish for years to come.</p>
            </div>
            <ul className="offer-grid">
              {data.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </section>
      )}

      {data.galleryRows && (
        <section style={{ background: "var(--bg)", paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow" style={{ marginBottom: 20 }}>{data.galleryEyebrow || "Gallery"}</div>
                <h2>{data.galleryTitle || <>A few recent projects.<br/><em>Top to bottom.</em></>}</h2>
              </div>
              <p>{data.galleryIntro}</p>
            </div>
            <div className="kgal">
              {data.galleryRows.map((row, ri) => (
                <div key={ri} className={`kgal-row kgal-${row.kind}`}>
                  {row.photos.map((ph, pi) => (
                    <img key={pi} loading="lazy" src={ph.src} alt={ph.alt}/>
                  ))}
                </div>
              ))}
          </div>
          </div>
        </section>
      )}

      {data.gallery && (
        <section style={{ background: "var(--bg)", paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow" style={{ marginBottom: 20 }}>Gallery</div>
                <h2>A recent kitchen.<br/><em>Top to bottom.</em></h2>
              </div>
              <p>White oak shaker cabinetry, hand-laid vertical tile, quartz counters, brass and matte black fixtures. Built and installed entirely by our own crew.</p>
            </div>
            <div className="kgal">
              <div className="kgal-row kgal-row-full"><img loading="lazy" src={data.gallery[0].src} alt={data.gallery[0].alt}/></div>
              <div className="kgal-row kgal-3up">
                <img loading="lazy" src={data.gallery[1].src} alt={data.gallery[1].alt}/>
                <img loading="lazy" src={data.gallery[2].src} alt={data.gallery[2].alt}/>
                <img loading="lazy" src={data.gallery[3].src} alt={data.gallery[3].alt}/>
              </div>
              <div className="kgal-row kgal-2-1">
                <img loading="lazy" src={data.gallery[4].src} alt={data.gallery[4].alt}/>
                <img loading="lazy" src={data.gallery[5].src} alt={data.gallery[5].alt}/>
              </div>
              <div className="kgal-row kgal-1-2">
                <img loading="lazy" src={data.gallery[6].src} alt={data.gallery[6].alt}/>
                <img loading="lazy" src={data.gallery[7].src} alt={data.gallery[7].alt}/>
              </div>
              <div className="kgal-row kgal-3up">
                <img loading="lazy" src={data.gallery[8].src} alt={data.gallery[8].alt}/>
                <img loading="lazy" src={data.gallery[9].src} alt={data.gallery[9].alt}/>
                <img loading="lazy" src={data.gallery[10].src} alt={data.gallery[10].alt}/>
              </div>
              <div className="kgal-row kgal-row-full"><img loading="lazy" src={data.gallery[11].src} alt={data.gallery[11].alt}/></div>
            </div>
          </div>
        </section>
      )}

      {data.projects && (
        <section style={{ background: "var(--bg)", paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow" style={{ marginBottom: 20 }}>Gallery</div>
                <h2>Three recent baths,<br/><em>three very different homes.</em></h2>
              </div>
              <p>Bathrooms reveal a homeowner's taste fastest. These three were built within twelve months of each other — same crew, three completely different briefs.</p>
            </div>
            {data.projects.map((p, i) => (
              <div key={i} className="bproj">
                <div className="bproj-head">
                  <span className="bproj-tag">{p.tag}</span>
                  <h3 className="bproj-title">{p.title}</h3>
                  <p className="bproj-intro">{p.intro}</p>
                  <span className="bproj-meta">{p.meta}</span>
                </div>
                <div className="kgal">
                  {p.rows.map((row, ri) => (
                    <div key={ri} className={`kgal-row kgal-${row.kind}`}>
                      {row.photos.map((ph, pi) => (
                        <img key={pi} loading="lazy" src={ph.src} alt={ph.alt}/>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>How it works</div>
              <h2>Four steps.<br/><em>No surprises.</em></h2>
            </div>
            <p>Our process is the same whether you're remodeling a powder room or a whole basement. Predictable, paced, and personal.</p>
          </div>
          <div className="process-rail">
            {[
              { num: "1", title: "Listen", body: "A no-pressure conversation in your home. We ask, we measure, we listen.", meta: "Week 1" },
              { num: "2", title: "Design & price", body: "Detailed drawings and a fixed-price proposal. No vague allowances.", meta: "Weeks 2–4" },
              { num: "3", title: "Build", body: "Our crew, on site daily. Clean job site, weekly updates, no surprises.", meta: "Weeks 5–14" },
              { num: "4", title: "Hand off", body: "Final walkthrough, punch list, and a handover binder for everything we installed.", meta: "Final week" },
            ].map((s) => (
              <div key={s.num} className="process-step">
                <div className="process-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="process-step-meta">— {s.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip setPage={setPage}/>
    </>
  );
};

// ====== ABOUT PAGE ======

const AboutPage = ({ setPage }) => (
  <>
    <section className="page-hero" style={{ paddingBottom: "clamp(40px, 5vw, 72px)" }}>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="#home" onClick={(e) => { e.preventDefault(); setPage("home"); }}>Home</a>
          <span>/</span>
          <span style={{ color: "var(--ink)" }}>Company</span>
        </div>
        <div className="eyebrow" style={{ marginBottom: 24 }}>About company</div>
        <h1 style={{ maxWidth: 1100, fontSize: "clamp(48px, 7vw, 104px)", fontWeight: 350, letterSpacing: "-0.035em", lineHeight: 0.96 }}>
          Improving homes <em style={{ fontStyle: "italic", color: "var(--clay)", fontWeight: 300 }}>for your satisfaction.</em>
        </h1>
      </div>
    </section>

    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="company-grid">
          <div className="company-copy">
            <div className="eyebrow" style={{ marginBottom: 20 }}>Our company</div>
            <h2>Built to last,<br/><em>start to finish.</em></h2>
            <p>With years of hands-on experience, Atlas Construction is dedicated to transforming homes through expert kitchen remodeling, basement finishing, and elegant bathroom renovations. We focus on quality craftsmanship, smart design, and results that enhance both comfort and property value.</p>
            <p>We believe every home deserves thoughtful planning and precise execution. From concept to completion, our team works closely with homeowners to deliver functional spaces that reflect their style and meet their needs. Using high-quality materials and proven construction methods, we ensure every project is built to last.</p>
            <p>Our commitment to clear communication, reliable timelines, and attention to detail sets us apart. Whether you're upgrading a kitchen, finishing a basement, or remodeling a bathroom, Atlas Construction is your trusted partner for dependable and beautiful home improvements.</p>
          </div>
          <div className="company-photo">
            <img loading="lazy" src="photos/kitchen/full-tall-2.jpeg" alt="Custom kitchen by Atlas Construction"/>
          </div>
        </div>
      </div>
    </section>

    <section className="vmv">
      <div className="wrap">
        <div className="vmv-grid">
          {[
            { tag: "Our vision", title: "Spaces that last a lifetime.", body: "To redefine home remodeling by creating spaces that combine timeless design, modern functionality, and lasting quality — recognized for craftsmanship, reliability, and customer satisfaction." },
            { tag: "Our mission", title: "Your vision, well executed.", body: "To deliver exceptional remodeling through skilled workmanship, clear communication, and a client-focused approach — transforming each homeowner's vision into a functional, beautiful space." },
            { tag: "Our values", title: "Integrity in every detail.", body: "Quality craftsmanship, honesty, and accountability guide every project. We value strong client relationships and take pride in solutions that reflect care, precision, and respect for your home." },
          ].map((v) => (
            <div key={v.tag} className="vmv-card">
              <div className="eyebrow" style={{ marginBottom: 24 }}>{v.tag}</div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="values">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Why choose us</div>
            <h2>We build quality<br/><em>you can trust.</em></h2>
          </div>
          <p>We combine skilled craftsmanship with reliable project management to deliver exceptional kitchen, basement, and bathroom renovations. Our focus is on quality, transparency, and results that truly enhance your home.</p>
        </div>
        <div className="values-grid">
          {[
            { num: "01", title: "Experienced & skilled team.", body: "Our team brings years of hands-on experience in home remodeling. We approach every project with technical expertise, attention to detail, and a commitment to high-quality results." },
            { num: "02", title: "Professional & detail-oriented.", body: "From planning to execution, we maintain high professional standards. Every design, material choice, and finish is handled with precision to ensure a polished outcome." },
            { num: "03", title: "Reliable & transparent process.", body: "We value clear communication, accurate timelines, and honest pricing. You can count on us for dependable service and smooth project execution from start to finish." },
            { num: "04", title: "Dedicated customer support.", body: "We prioritize our clients at every stage. Our team is always available to answer questions, provide updates, and ensure your satisfaction throughout the remodel." },
          ].map((v) => (
            <div key={v.num} className="value-card">
              <span className="value-num">{v.num}</span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaStrip setPage={setPage}/>
  </>
);

// ====== CONTACT PAGE ======

const ContactPage = ({ setPage }) => {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="#home" onClick={(e) => { e.preventDefault(); setPage("home"); }}>Home</a>
            <span>/</span>
            <span style={{ color: "var(--ink)" }}>Contact</span>
          </div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Contact us today</div>
          <h1 style={{ maxWidth: 1100, fontSize: "clamp(48px, 7vw, 104px)", fontWeight: 350, letterSpacing: "-0.035em", lineHeight: 0.96 }}>
            Keep in <em style={{ fontStyle: "italic", color: "var(--clay)", fontWeight: 300 }}>touch</em> with us.
          </h1>
          <p className="lede" style={{ marginTop: 32, maxWidth: 720 }}>
            Have a question or planning a home renovation? Get in touch to discuss your kitchen, bathroom, or basement project. Our team is ready to answer your questions and help bring your vision to life.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Tell us about your project</h3>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", marginTop: -8 }}>The more you tell us, the better we can help. We'll be in touch within one business day.</p>
              {submitted ? (
                <div style={{ padding: "48px 0", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontStyle: "italic", color: "var(--clay)", marginBottom: 12 }}>Thank you.</div>
                  <p style={{ color: "var(--ink-soft)", marginBottom: 24 }}>We'll be in touch within one business day.</p>
                  <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>Send another <span className="arrow"></span></button>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/atlasconstructionslc@gmail.com"
                  method="POST"
                  style={{ display: "contents" }}
                  onSubmit={() => { setTimeout(() => setSubmitted(true), 0); }}
                >
                  <input type="hidden" name="_subject" value="New project inquiry — Atlas Construction"/>
                  <input type="hidden" name="_captcha" value="false"/>
                  <input type="hidden" name="_template" value="table"/>
                  <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off"/>

                  <div className="field-row">
                    <div className="field"><label>First name</label><input type="text" name="First Name" required/></div>
                    <div className="field"><label>Last name</label><input type="text" name="Last Name" required/></div>
                  </div>
                  <div className="field-row">
                    <div className="field"><label>Phone</label><input type="tel" name="Phone" required/></div>
                    <div className="field"><label>Email</label><input type="email" name="Email" required/></div>
                  </div>
                  <div className="field">
                    <label>City</label>
                    <input type="text" name="City" placeholder="Where's the project?"/>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>Category</label>
                      <select name="Category">
                        <option>Kitchen</option>
                        <option>Bathroom</option>
                        <option>Basement</option>
                        <option>Whole home</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Budget</label>
                      <select name="Budget">
                        <option>$10K – $30K</option>
                        <option>$30K – $100K</option>
                        <option>$100K – $500K</option>
                        <option>$500K+</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label>Timeline</label>
                    <select name="Timeline">
                      <option>Ready to start</option>
                      <option>1 – 2 months</option>
                      <option>2 – 6 months</option>
                      <option>6 – 12 months</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Brief project description<span style={{ color: "var(--clay)" }}> *</span></label>
                    <textarea rows="4" name="Project Description" placeholder="What's the scope, what's been frustrating about the space, what does done feel like?" required></textarea>
                  </div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                    <button type="submit" className="btn btn-primary">
                      Submit <span className="arrow"></span>
                    </button>
                    <a href="tel:6464083455" className="btn btn-secondary">
                      Call us now
                    </a>
                  </div>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="info-block">
                <h4>Our address</h4>
                <p style={{ fontSize: 22, fontFamily: "var(--font-body)", letterSpacing: 0, lineHeight: 1.45 }}>2148 N. Cedar Ave.<br/>Suite 200<small>By appointment — drop by to see materials &amp; samples.</small></p>
              </div>
              <div className="info-block">
                <h4>Phone number</h4>
                <p>(646) 408-3455<small>Mon – Fri · 7am – 6pm</small></p>
              </div>
              <div className="info-block">
                <h4>Email address</h4>
                <p>atlasconstructionslc@gmail.com<small>We reply within one business day.</small></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip setPage={setPage}/>
    </>
  );
};

Object.assign(window, { HomePage, ServiceDetail, AboutPage, ContactPage });
