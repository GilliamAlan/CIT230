// ============================================
// APP — Direction A
// Routing + Tweaks panel
// ============================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#B5532A",
  "inkColor": "#1F1611",
  "bgColor": "#F5EFE6",
  "displayFont": "Fraunces",
  "bodyFont": "DM Sans",
  "brandName": "Atlas Construction",
  "brandTagline": ""
}/*EDITMODE-END*/;

const App = () => {
  const [page, setPage] = React.useState(() => {
    const h = window.location.hash.replace("#", "");
    return ["home", "kitchen", "bath", "basement", "about", "contact"].includes(h) ? h : "home";
  });
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (["home", "kitchen", "bath", "basement", "about", "contact"].includes(h)) {
        setPage(h);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Apply tweaks live as CSS vars
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--clay", tweaks.primaryColor);
    root.style.setProperty("--ink", tweaks.inkColor);
    root.style.setProperty("--bg-deep", tweaks.inkColor);
    root.style.setProperty("--bg", tweaks.bgColor);
    root.style.setProperty("--font-display", `"${tweaks.displayFont}", Georgia, serif`);
    root.style.setProperty("--font-body", `"${tweaks.bodyFont}", system-ui, sans-serif`);
  }, [tweaks]);

  let body;
  if (page === "home") body = <HomePage setPage={setPage} brand={tweaks.brandName}/>;
  else if (page === "kitchen") body = <ServiceDetail kind="kitchen" setPage={setPage}/>;
  else if (page === "bath") body = <ServiceDetail kind="bath" setPage={setPage}/>;
  else if (page === "basement") body = <ServiceDetail kind="basement" setPage={setPage}/>;
  else if (page === "about") body = <AboutPage setPage={setPage}/>;
  else if (page === "contact") body = <ContactPage setPage={setPage}/>;

  return (
    <>
      <Nav page={page} setPage={setPage} brand={tweaks.brandName} tagline={tweaks.brandTagline}/>
      <main key={page}>{body}</main>
      <Footer setPage={setPage} brand={tweaks.brandName}/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakText label="Business name" value={tweaks.brandName} onChange={(v) => setTweak("brandName", v)}/>
          <TweakText label="Tagline" value={tweaks.brandTagline} onChange={(v) => setTweak("brandTagline", v)}/>
        </TweakSection>
        <TweakSection title="Colors">
          <TweakColor label="Accent (clay)" value={tweaks.primaryColor} onChange={(v) => setTweak("primaryColor", v)}/>
          <TweakColor label="Ink" value={tweaks.inkColor} onChange={(v) => setTweak("inkColor", v)}/>
          <TweakColor label="Background" value={tweaks.bgColor} onChange={(v) => setTweak("bgColor", v)}/>
        </TweakSection>
        <TweakSection title="Typography">
          <TweakSelect
            label="Display font"
            value={tweaks.displayFont}
            options={["Fraunces", "Cormorant Garamond", "Instrument Serif", "Bricolage Grotesque"]}
            onChange={(v) => setTweak("displayFont", v)}
          />
          <TweakSelect
            label="Body font"
            value={tweaks.bodyFont}
            options={["DM Sans", "Inter", "Manrope"]}
            onChange={(v) => setTweak("bodyFont", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
