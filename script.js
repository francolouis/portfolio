:root {
  --bg: #0f0f13;
  --bg-soft: #17181f;
  --panel: rgba(255, 255, 255, 0.04);
  --panel-strong: #1d1f2a;
  --card: #12141b;
  --text: #f5f6fb;
  --muted: #b6bfd3;
  --line: rgba(255, 255, 255, 0.08);
  --accent: #ff6b6b;
  --accent-2: #ffd166;
  --accent-3: #6ee7d8;
  --shadow: 0 30px 60px rgba(0, 0, 0, 0.28);
  --radius: 22px;
  --container: 1180px;
}

body.light {
  --bg: #f6f4ef;
  --bg-soft: #fffefc;
  --panel: rgba(22, 24, 30, 0.04);
  --panel-strong: #ffffff;
  --card: #fffefc;
  --text: #151823;
  --muted: #525d72;
  --line: rgba(17, 19, 24, 0.08);
  --accent: #ff6b6b;
  --accent-2: #f4b942;
  --accent-3: #1bb3a4;
  --shadow: 0 25px 55px rgba(23, 19, 8, 0.1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(255, 107, 107, 0.12), transparent 30%),
    radial-gradient(circle at bottom right, rgba(110, 231, 216, 0.15), transparent 25%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, textarea {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: rgba(15, 15, 19, 0.55);
  border-bottom: 1px solid var(--line);
}

body.light .site-header {
  background: rgba(246, 244, 239, 0.7);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #111;
  font-weight: 900;
}

.brand-text {
  letter-spacing: -0.03em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 0.96rem;
}

.main-nav a {
  position: relative;
  transition: color 0.2s ease;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text);
}

.main-nav a:hover::after,
.main-nav a.active::after {
  transform: scaleX(1);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.82rem 1.4rem;
  border: 1px solid transparent;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #111;
  box-shadow: 0 18px 30px rgba(255, 107, 107, 0.22);
}

.button-secondary {
  background: transparent;
  border-color: var(--line);
  color: var(--text);
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--text);
  border-radius: 999px;
  padding: 0.68rem 0.95rem;
  cursor: pointer;
}

.theme-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-3));
}

.hero {
  padding: 86px 0 48px;
}

.hero-grid,
.about-layout,
.contact-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 42px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 14px;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-3);
  font-weight: 700;
}

h1, h2, h3 {
  margin: 0 0 14px;
  letter-spacing: -0.04em;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.97;
}

h2 {
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  line-height: 1.06;
}

h3 {
  font-size: 1.3rem;
}

.lead {
  max-width: 600px;
  color: var(--muted);
  font-size: 1.12rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 30px;
}

.mini-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  padding: 0;
  margin: 30px 0 0;
}

.mini-stats li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 110px;
}

.mini-stats strong {
  font-size: 1.8rem;
  letter-spacing: -0.05em;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-visual {
  position: relative;
  min-height: 560px;
  display: grid;
  place-items: center;
}

.visual-card {
  position: relative;
  width: min(100%, 480px);
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card-main {
  padding: 18px;
}

.visual-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
}

.video-tile {
  position: relative;
  border-radius: 18px;
  min-height: 360px;
  margin-top: 16px;
  background:
    linear-gradient(135deg, rgba(0,0,0,0.18), rgba(0,0,0,0.46)),
    url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80") center/cover no-repeat;
  display: grid;
  place-items: center;
}

.play-button {
  display: grid;
  place-items: center;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  font-size: 2rem;
  border: 1px solid rgba(255,255,255,0.22);
}

.visual-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-top: 18px;
  color: var(--muted);
}

.visual-meta strong {
  color: var(--text);
}

.floating-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--panel-strong);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 0.9rem 1.1rem;
  box-shadow: var(--shadow);
}

.floating-card span {
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.floating-card strong {
  font-size: 1.1rem;
}

.card-small.top {
  top: 44px;
  right: -10px;
}

.card-small.bottom {
  left: -6px;
  bottom: 30px;
}

.logo-strip {
  padding: 18px 0 0;
}

.logo-strip p {
  text-align: center;
  margin-bottom: 18px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.7rem;
}

.brands {
  display: grid;
  grid-template-columns: repeat(5, minmax(120px, 1fr));
  gap: 18px;
  text-align: center;
  padding: 18px 0 10px;
  color: rgba(255,255,255,0.72);
  font-weight: 600;
}

.section {
  padding: 96px 0;
}

.section-alt {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-header {
  margin-bottom: 42px;
  text-align: center;
}

.section-header.left {
  text-align: left;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
}

.showcase-card,
.value-card,
.service-card,
.contact-card,
.contact-form,
.portfolio-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.showcase-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}

.card-copy {
  padding: 20px 22px 24px;
}

.card-copy span {
  display: inline-block;
  color: var(--accent-3);
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.two-col {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 40px;
  align-items: start;
}

.process-list,
.timeline,
.values-grid,
.services-grid,
.process-steps,
.contact-layout {
  display: grid;
  gap: 18px;
}

.process-item,
.timeline-item,
.value-card,
.service-card,
.process-steps > div {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.2rem;
}

.process-item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 16px;
  align-items: start;
}

.process-item span,
.process-steps span {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--accent-2);
  font-weight: 700;
}

.process-item p,
.value-card p,
.service-card p,
.about-copy p,
.contact-card p,
.contact-form label,
.timeline-item p,
.process-steps p {
  color: var(--muted);
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.12), rgba(110, 231, 216, 0.09));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: clamp(1.5rem, 3vw, 2.5rem);
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 22px 0 42px;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: var(--muted);
}

.socials {
  display: flex;
  gap: 18px;
}

.page-hero {
  padding: 92px 0 34px;
}

.compact-hero {
  text-align: center;
}

.narrow {
  max-width: 820px;
}

.about-layout {
  grid-template-columns: 0.9fr 1.1fr;
}

.portrait-wrap img {
  width: 100%;
  height: 640px;
  object-fit: cover;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.about-copy {
  display: grid;
  gap: 18px;
  font-size: 1.04rem;
}

.values-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.timeline {
  margin-top: 20px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 20px;
  align-items: start;
}

.timeline-item span {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent-2);
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}

.filter-button {
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  cursor: pointer;
}

.filter-button.active {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #111;
  border-color: transparent;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.portfolio-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.portfolio-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.portfolio-info {
  padding: 1.1rem 1.1rem 1.2rem;
}

.portfolio-info span {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--accent-3);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
}

.portfolio-info h3 {
  margin-bottom: 8px;
}

.portfolio-info p {
  margin: 0;
  color: var(--muted);
}

.services-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-card {
  padding: 1.5rem;
}

.service-card.featured {
  border-color: rgba(255, 209, 102, 0.38);
  background: linear-gradient(180deg, rgba(255, 209, 102, 0.08), rgba(255,255,255,0.02));
}

.service-card ul {
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.service-card li::before {
  content: "✦";
  margin-right: 8px;
  color: var(--accent-2);
}

.process-steps {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 18px;
}

.contact-layout {
  grid-template-columns: 0.8fr 1.2fr;
  align-items: start;
}

.contact-card {
  padding: 1.5rem;
}

.contact-card ul {
  list-style: none;
  display: grid;
  gap: 12px;
  margin: 18px 0 0;
  padding: 0;
  color: var(--muted);
}

.contact-form {
  display: grid;
  gap: 18px;
  padding: 1.5rem;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: grid;
  gap: 10px;
  color: var(--text);
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  background: rgba(255,255,255,0.02);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 0.88rem 1rem;
  outline: none;
}

input:focus,
textarea:focus {
  border-color: rgba(255, 107, 107, 0.8);
  box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.12);
}

@media (max-width: 980px) {
  .nav-wrap,
  .main-nav,
  .nav-actions,
  .hero-grid,
  .about-layout,
  .contact-layout,
  .two-col,
  .services-grid,
  .portfolio-grid,
  .values-grid,
  .showcase-grid,
  .process-steps,
  .cta-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .nav-wrap {
    padding: 18px 0;
  }

  .main-nav {
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px 18px;
  }

  .nav-actions {
    justify-content: center;
  }

  .hero {
    padding-top: 60px;
  }

  .brands {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
}

@media (max-width: 640px) {
  .hero-copy {
    text-align: center;
  }

  .cta-row,
  .mini-stats,
  .footer-wrap,
  .socials {
    justify-content: center;
  }

  .cta-row,
  .socials, .mini-stats {
    flex-wrap: wrap;
  }

  .field-row {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }

  .card-small.top {
    right: 8px;
  }

  .card-small.bottom {
    left: 10px;
  }
}
