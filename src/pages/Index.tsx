<!DOCTYPE html>
<html lang="pt-BR">
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKQSFFK5');</script>
<!-- End Google Tag Manager -->
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Seu Dinheiro na Mesa</title>
<meta name="description" content="12 meses para criar intimidade com o seu dinheiro e encontrar os seus próprios caminhos."/>
<meta property="og:title" content="Seu Dinheiro na Mesa"/>
<meta property="og:description" content="12 meses para criar intimidade com o seu dinheiro e encontrar os seus próprios caminhos."/>
<meta property="og:type" content="website"/>
<meta property="og:image" content="/og-image.png"/>
<link rel="icon" href="/favicon.png" type="image/png"/>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>

.sdm-landing {
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  background: #f5f7fc;
  color: #082d60;
  line-height: 1.7;
  overflow-x: hidden;
}

/* ── HERO ─────────────────────────────────── */
.sdm-hero {
  min-height: 100vh;
  background: #082d60;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.sdm-hero::before {
  content: '';
  position: absolute;
  top: -140px; right: -140px;
  width: 560px; height: 560px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250,188,211,0.13) 0%, transparent 70%);
  pointer-events: none;
}
.sdm-hero::after {
  content: '';
  position: absolute;
  bottom: -80px; left: -80px;
  width: 360px; height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(42,77,130,0.5) 0%, transparent 70%);
  pointer-events: none;
}

.hero-accent-line {
  position: absolute;
  top: 0; left: 0;
  width: 4px; height: 100%;
  background: linear-gradient(to bottom, #fabcd3, transparent 80%);
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 1060px;
  margin: 0 auto;
  padding: 100px 60px;
  width: 100%;
}

.sdm-landing .eyebrow {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #fabcd3;
  margin-bottom: 28px;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(52px, 8vw, 90px);
  font-weight: 300;
  line-height: 1.04;
  color: #ffffff;
  margin-bottom: 10px;
}

.hero-title em {
  font-style: italic;
  color: #fabcd3;
}

.hero-sub {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(18px, 2.5vw, 26px);
  font-weight: 300;
  font-style: italic;
  color: #6a82a8;
  margin-top: 16px;
  margin-bottom: 52px;
  max-width: 560px;
  line-height: 1.65;
}

.hero-divider {
  width: 56px; height: 1px;
  background: #fabcd3;
  margin-bottom: 36px;
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #98104b;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 20px 44px;
  border: none;
  cursor: pointer;
  transition: all 0.28s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.btn-cta::before {
  content: '';
  position: absolute; inset: 0;
  background: rgba(255,255,255,0.1);
  transform: translateX(-101%);
  transition: transform 0.3s ease;
}

.btn-cta:hover::before { transform: translateX(0); }
.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 44px rgba(152,16,75,0.4);
}
.btn-cta:active { transform: translateY(0); }

.hero-note {
  margin-top: 18px;
  font-size: 12px;
  color: #6a82a8;
  letter-spacing: 0.04em;
}

/* ── TRUST BAR ────────────────────────────── */
.trust-bar {
  background: #061e40;
  padding: 30px 60px;
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(250,188,211,0.12);
}

.trust-item { text-align: center; }

.trust-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 38px;
  font-weight: 300;
  color: #fabcd3;
  line-height: 1;
}

.trust-label {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6a82a8;
  margin-top: 4px;
}

/* ── LAYOUT ───────────────────────────────── */
.wrap {
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 60px;
}

.sdm-light  { background: #ffffff; }
.sdm-cream  { background: #f5f7fc; }
.sdm-dark   { background: #082d60; }

.section-pad { padding: 92px 0; }

.sec-eyebrow {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #98104b;
  margin-bottom: 12px;
  font-weight: 400;
}

.sec-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(30px, 4vw, 46px);
  font-weight: 400;
  line-height: 1.15;
  color: #082d60;
  margin-bottom: 8px;
}

.sec-title em { font-style: italic; color: #98104b; }

.sec-title.light-title { color: #ffffff; }
.sec-title.light-title em { color: #fabcd3; }

.sec-rule {
  width: 40px; height: 2px;
  background: #fabcd3;
  margin-bottom: 32px;
  margin-top: 6px;
}

.sec-body {
  font-size: 15px;
  color: #2a4d82;
  line-height: 1.85;
  max-width: 660px;
}

/* ── PARA QUEM ────────────────────────────── */
.pq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 44px;
}

@media (max-width: 640px) { .pq-grid { grid-template-columns: 1fr; } }

.pq-card {
  background: #f5f7fc;
  border: 1px solid #dce4f0;
  border-radius: 10px;
  padding: 32px 28px;
  position: relative;
  transition: all 0.25s ease;
  overflow: hidden;
}

.pq-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 3px; height: 0;
  background: #98104b;
  border-radius: 10px 0 0 10px;
  transition: height 0.3s ease;
}

.pq-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(8,45,96,0.08); border-color: #fabcd3; }
.pq-card:hover::before { height: 100%; }

.pq-emoji { font-size: 26px; margin-bottom: 16px; }

.pq-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 600;
  color: #082d60;
  margin-bottom: 8px;
}

.pq-desc {
  font-size: 14px;
  color: #2a4d82;
  line-height: 1.75;
}

/* ── TESE / QUOTE ─────────────────────────── */
.quote-section {
  background: #082d60;
  padding: 92px 60px;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.quote-section::before {
  content: '\201C';
  font-family: 'Cormorant Garamond', serif;
  font-size: 260px;
  line-height: 1;
  color: rgba(250,188,211,0.07);
  position: absolute;
  top: -20px; left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

.quote-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(24px, 3.5vw, 38px);
  font-weight: 300;
  font-style: italic;
  color: #ffffff;
  line-height: 1.55;
  max-width: 780px;
  margin: 0 auto 28px;
  position: relative;
  z-index: 1;
}

.quote-text em { color: #fabcd3; font-style: normal; }

.quote-author {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6a82a8;
  position: relative;
  z-index: 1;
}

/* ── O PROGRAMA ───────────────────────────── */
.prog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 48px;
}

@media (max-width: 640px) { .prog-grid { grid-template-columns: 1fr; } }

.prog-card {
  background: #082d60;
  border-radius: 10px;
  padding: 36px 30px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s;
}

.prog-card:hover { transform: translateY(-3px); }

.prog-card::after {
  content: '';
  position: absolute;
  right: -24px; bottom: -24px;
  width: 100px; height: 100px;
  border: 1px solid rgba(250,188,211,0.1);
  border-radius: 50%;
}

.prog-big-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 56px;
  font-weight: 300;
  color: #fabcd3;
  opacity: 0.22;
  line-height: 1;
  margin-bottom: -8px;
}

.prog-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.2;
}

.prog-desc {
  font-size: 13px;
  color: #6a82a8;
  line-height: 1.75;
}

/* ── ECONOMIZA ────────────────────────────── */
.eco-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
}

@media (max-width: 768px) { .eco-inner { grid-template-columns: 1fr; gap: 40px; } }

.eco-features {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 36px;
}

.eco-feat {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.eco-feat-icon {
  width: 40px; height: 40px;
  background: rgba(152,16,75,0.07);
  border: 1px solid rgba(152,16,75,0.2);
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  font-size: 17px;
}

.eco-feat-text strong {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #082d60;
  margin-bottom: 2px;
}

.eco-feat-text span {
  font-size: 13px;
  color: #6a82a8;
  line-height: 1.6;
}

.eco-callout {
  background: #082d60;
  border-radius: 12px;
  padding: 48px 40px;
  position: relative;
  overflow: hidden;
}

.eco-callout::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 3px;
  background: #fabcd3;
}

.eco-callout::after {
  content: '';
  position: absolute;
  bottom: -60px; right: -60px;
  width: 200px; height: 200px;
  border: 1px solid rgba(250,188,211,0.08);
  border-radius: 50%;
}

.eco-callout-label {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #fabcd3;
  margin-bottom: 14px;
}

.eco-callout-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 16px;
}

.eco-callout-body {
  font-size: 14px;
  color: #6a82a8;
  line-height: 1.85;
  margin-bottom: 28px;
}

.eco-badge {
  display: inline-block;
  border: 1px solid rgba(250,188,211,0.3);
  background: rgba(250,188,211,0.07);
  color: #fabcd3;
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  font-style: italic;
  padding: 10px 22px;
  border-radius: 2px;
}

/* ── MÓDULOS ──────────────────────────────── */
.modulos-list {
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mod-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  background: #ffffff;
  border: 1px solid #dce4f0;
  border-left: 3px solid transparent;
  transition: all 0.2s ease;
}

.mod-item:hover {
  border-left-color: #98104b;
  transform: translateX(4px);
  box-shadow: 4px 0 20px rgba(8,45,96,0.06);
}

.mod-item.bonus { border-left-color: rgba(152,16,75,0.25); background: rgba(253,224,238,0.2); }
.mod-item.bonus:hover { border-left-color: #98104b; }

.mod-num-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 4px;
}

.mod-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 400;
  color: #98104b;
}

.mod-content {
  padding: 22px 28px;
  border-left: 1px solid #dce4f0;
}

.mod-title {
  font-weight: 500;
  font-size: 15px;
  color: #082d60;
  margin-bottom: 3px;
}

.mod-item.bonus .mod-title { color: #98104b; }

.mod-desc {
  font-size: 13px;
  color: #6a82a8;
  line-height: 1.65;
}

/* ── TRANSFORMAÇÃO ────────────────────────── */
.transform-inner { display: grid; grid-template-columns: 1fr 64px 1fr; align-items: stretch; margin-top: 52px; }
@media (max-width: 680px) { .transform-inner { grid-template-columns: 1fr; } .transform-mid { display: none; } }

.transform-col {
  padding: 40px 32px;
  border-radius: 10px;
}

.transform-col.antes {
  background: #f5f7fc;
  border: 1px solid #dce4f0;
}

.transform-col.depois {
  background: #082d60;
  border: 1px solid rgba(250,188,211,0.15);
}

.transform-mid {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #fabcd3;
}

.trans-label {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 24px;
  font-weight: 400;
}

.transform-col.antes .trans-label { color: #6a82a8; }
.transform-col.depois .trans-label { color: #fabcd3; }

.trans-item {
  display: flex;
  gap: 12px;
  align-items: baseline;
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 1.6;
}

.transform-col.antes .trans-item { color: #6a82a8; }
.transform-col.depois .trans-item { color: #c8d6ee; }

.trans-icon { flex-shrink: 0; font-size: 13px; }

/* ── OBJEÇÕES ─────────────────────────────── */
.obj-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 44px;
}

.obj-item {
  background: #ffffff;
  border: 1px solid #dce4f0;
  border-radius: 8px;
  overflow: hidden;
}

.obj-q {
  padding: 22px 28px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-weight: 400;
  font-size: 15px;
  color: #082d60;
  transition: background 0.2s;
  user-select: none;
}

.obj-q:hover { background: rgba(220,228,240,0.3); }
.obj-q.open { color: #98104b; }

.obj-q-icon { flex-shrink: 0; color: #98104b; font-size: 20px; line-height: 1; transition: transform 0.25s; }
.obj-q.open .obj-q-icon { transform: rotate(45deg); }

.obj-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.25s ease;
  padding: 0 28px;
  font-size: 14px;
  color: #2a4d82;
  line-height: 1.8;
}

.obj-a.open {
  max-height: 200px;
  padding: 0 28px 22px;
}

/* ── CTA FINAL ────────────────────────────── */
.cta-section {
  background: #082d60;
  padding: 100px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(250,188,211,0.1) 0%, transparent 70%);
}

.cta-section::after {
  content: '';
  position: absolute;
  bottom: -80px; left: -80px;
  width: 300px; height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(42,77,130,0.5) 0%, transparent 70%);
}

.cta-inner { position: relative; z-index: 2; }

.cta-eyebrow {
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #fabcd3;
  margin-bottom: 20px;
}

.cta-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(38px, 6vw, 68px);
  font-weight: 300;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 16px;
}

.cta-title em { font-style: italic; color: #fabcd3; }

.cta-sub {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(17px, 2.5vw, 22px);
  font-style: italic;
  color: #6a82a8;
  margin-bottom: 48px;
  line-height: 1.6;
}

.cta-note {
  margin-top: 20px;
  font-size: 12px;
  color: #6a82a8;
  letter-spacing: 0.05em;
}

/* ── POPUP ────────────────────────────────── */
.overlay {
  display: none;
  position: fixed; inset: 0;
  background: rgba(6,30,64,0.82);
  backdrop-filter: blur(6px);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: sdm-fadeIn 0.2s ease;
}

.overlay.active { display: flex; }

@keyframes sdm-fadeIn { from { opacity: 0; } to { opacity: 1; } }

.popup {
  background: #ffffff;
  border-radius: 14px;
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  animation: sdm-slideUp 0.3s ease;
  position: relative;
}

@keyframes sdm-slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }

.popup-header {
  background: #082d60;
  padding: 36px 40px 28px;
  position: relative;
}

.popup-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 3px;
  background: #fabcd3;
}

.popup-close {
  position: absolute;
  top: 16px; right: 18px;
  background: none;
  border: none;
  color: #6a82a8;
  font-size: 22px;
  cursor: pointer;
  line-height: 1;
  padding: 4px 8px;
  transition: color 0.2s;
}

.popup-close:hover { color: #ffffff; }

.popup-eyebrow {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #fabcd3;
  margin-bottom: 10px;
}

.popup-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.2;
}

.popup-title em { font-style: italic; color: #fabcd3; }

.popup-body { padding: 36px 40px; }

.form-group { margin-bottom: 22px; }

.form-label {
  display: block;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #6a82a8;
  margin-bottom: 8px;
  font-weight: 400;
}

.form-input {
  width: 100%;
  padding: 14px 18px;
  background: #f5f7fc;
  border: 1px solid #dce4f0;
  border-radius: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: #082d60;
  outline: none;
  transition: border-color 0.2s;
  font-weight: 300;
}

.form-input::placeholder { color: #6a82a8; opacity: 0.5; }

.form-input:focus {
  border-color: #98104b;
  background: #ffffff;
}

.form-input.error { border-color: #e53e3e; }

.form-hint {
  font-size: 12px;
  color: #6a82a8;
  margin-top: 6px;
}

.btn-submit {
  width: 100%;
  background: #98104b;
  color: #ffffff;
  border: none;
  padding: 18px 24px;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  margin-top: 4px;
}

.btn-submit:hover:not(:disabled) {
  box-shadow: 0 8px 30px rgba(152,16,75,0.4);
  transform: translateY(-2px);
}

.btn-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

.popup-footer-note {
  margin-top: 14px;
  font-size: 11px;
  color: #6a82a8;
  text-align: center;
  line-height: 1.6;
}

/* ── SUCESSO ──────────────────────────────── */
.success-state {
  display: none;
  padding: 52px 40px;
  text-align: center;
}

.success-state.active { display: block; }

.success-icon { font-size: 48px; margin-bottom: 16px; }

.success-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 400;
  color: #082d60;
  margin-bottom: 12px;
}

.success-body {
  font-size: 14px;
  color: #6a82a8;
  line-height: 1.8;
}

/* ── FOOTER ───────────────────────────────── */
.sdm-footer {
  background: #061e40;
  padding: 32px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  border-top: 1px solid rgba(250,188,211,0.1);
}

.sdm-footer .footer-brand {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: #fabcd3;
  letter-spacing: 0.08em;
}

.sdm-footer .footer-note {
  font-size: 11.5px;
  color: #6a82a8;
  letter-spacing: 0.04em;
}

/* ── RESPONSIVE ───────────────────────────── */
@media (max-width: 640px) {
  .hero-inner, .trust-bar, .quote-section, .cta-section, .sdm-footer { padding-left: 28px; padding-right: 28px; }
  .wrap { padding: 0 28px; }
  .trust-bar { gap: 32px; }
  .popup { border-radius: 10px 10px 0 0; position: fixed; bottom: 0; max-width: 100%; }
  .overlay { align-items: flex-end; padding: 0; }
  .popup-header, .popup-body { padding-left: 28px; padding-right: 28px; }
}

/* ── ANIMATIONS ───────────────────────────── */
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKQSFFK5" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="sdm-landing">

<!-- HERO -->
<section class="sdm-hero">
  <div class="hero-accent-line"></div>
  <div class="hero-inner">
    <div class="eyebrow">Primeira Turma · Vagas Limitadas</div>
    <h1 class="hero-title">Seu Dinheiro<br/><em>na Mesa</em></h1>
    <p class="hero-sub">12 meses para criar intimidade com o seu dinheiro e encontrar os seus próprios caminhos.</p>
    <div class="hero-divider"></div>
    <button class="btn-cta" onclick="openPopup()">
      Quero entrar na primeira turma
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </button>
    <p class="hero-note">Powered by HUB do Seu Dinheiro na Mesa · Programa de acompanhamento financeiro</p>
  </div>
</section>

<!-- TRUST BAR -->
<div class="trust-bar">
  <div class="trust-item"><div class="trust-num">5</div><div class="trust-label">Anos de experiência</div></div>
  <div class="trust-item"><div class="trust-num">12</div><div class="trust-label">Meses juntas</div></div>
  <div class="trust-item"><div class="trust-num">5</div><div class="trust-label">Módulos gravados</div></div>
  <div class="trust-item"><div class="trust-num">1</div><div class="trust-label">Plataforma exclusiva</div></div>
</div>

<!-- PARA QUEM -->
<section class="sdm-light section-pad">
  <div class="wrap fade-up">
    <div class="sec-eyebrow">Para quem é</div>
    <h2 class="sec-title">Este programa é <em>para você</em></h2>
    <div class="sec-rule"></div>
    <div class="pq-grid">
      <div class="pq-card"><div class="pq-emoji">💸</div><div class="pq-title">Que sente que o dinheiro escorrega</div><p class="pq-desc">Você tem renda, tem contas — e ainda assim o fim do mês chega com aquela sensação de que faltou algo. Sempre.</p></div>
      <div class="pq-card"><div class="pq-emoji">😶</div><div class="pq-title">Que evita olhar para o extrato</div><p class="pq-desc">Não por descuido — por medo. Olhar dói quando você não sabe o que vai encontrar. E aí adiamos para o mês que vem.</p></div>
      <div class="pq-card"><div class="pq-emoji">📱</div><div class="pq-title">Que já tentou antes e não sustentou</div><p class="pq-desc">Baixou o app, fez a planilha, prometeu a si mesma que esse mês ia ser diferente. E o próximo mês veio igual.</p></div>
      <div class="pq-card"><div class="pq-emoji">🌱</div><div class="pq-title">Que quer mais do que só "se organizar"</div><p class="pq-desc">Você quer construir uma relação real com o seu dinheiro. Entender, planejar, sonhar — e ter as ferramentas para chegar lá.</p></div>
    </div>
  </div>
</section>

<!-- TESE -->
<div class="quote-section">
  <p class="quote-text">A partir do momento que a gente ganha <em>intimidade</em> com o dinheiro,<br/>vamos encontrando pontes possíveis para atravessar o problema.</p>
  <div class="quote-author">— A tese que guia o programa</div>
</div>

<!-- O PROGRAMA -->
<section class="sdm-cream section-pad">
  <div class="wrap fade-up">
    <div class="sec-eyebrow">O programa</div>
    <h2 class="sec-title">Um ecossistema completo <em>de 12 meses</em></h2>
    <div class="sec-rule"></div>
    <p class="sec-body">Não é uma planilha. Não é uma fórmula. É um acompanhamento que atravessa com você todos os meses do ano — inclusive os difíceis.</p>
    <div class="prog-grid">
      <div class="prog-card"><div class="prog-big-num">5</div><div class="prog-title">Módulos gravados</div><p class="prog-desc">Aulas para assistir quando e onde puder, organizadas em uma jornada progressiva do diagnóstico à autonomia financeira.</p></div>
      <div class="prog-card"><div class="prog-big-num">12</div><div class="prog-title">Meses juntas</div><p class="prog-desc">IR, IPVA, IPTU, férias — cada mês tem seu contexto. A gente vai atravessar tudo isso juntas, sem ser pega de surpresa.</p></div>
      <div class="prog-card"><div class="prog-big-num">2×</div><div class="prog-title">Encontros ao vivo por mês</div><p class="prog-desc">Encontros quinzenais em grupo para tirar dúvidas e ver orçamentos reais sendo construídos na frente de você.</p></div>
      <div class="prog-card"><div class="prog-big-num">★</div><div class="prog-title">Acesso imediato ao HUB</div><p class="prog-desc">Na semana 1 você já está dentro da plataforma, com seus dados e primeiras metas. Não daqui a 3 meses — na semana um.</p></div>
    </div>
  </div>
</section>

<!-- PLATAFORMA -->
<section class="sdm-light section-pad">
  <div class="wrap fade-up">
    <div class="eco-inner">
      <div>
        <div class="sec-eyebrow">A plataforma exclusiva</div>
        <h2 class="sec-title">HUB do Seu Dinheiro <em>na Mesa</em></h2>
        <div class="sec-rule"></div>
        <p class="sec-body" style="margin-bottom:0">Construída do zero a partir de 5 anos de atendimento individual. O único lugar onde patrimônio, investimentos, orçamento e metas vivem juntos — e fazem sentido juntos.</p>
        <div class="eco-features">
          <div class="eco-feat"><div class="eco-feat-icon">🏦</div><div class="eco-feat-text"><strong>Patrimônio</strong><span>Visualize tudo o que você tem consolidado em um único painel.</span></div></div>
          <div class="eco-feat"><div class="eco-feat-icon">📈</div><div class="eco-feat-text"><strong>Investimentos</strong><span>Acompanhe seus aportes e evolução com clareza.</span></div></div>
          <div class="eco-feat"><div class="eco-feat-icon">📋</div><div class="eco-feat-text"><strong>Orçamento mensal</strong><span>Saiba para onde vai cada real — antes que ele vá.</span></div></div>
          <div class="eco-feat"><div class="eco-feat-icon">🎯</div><div class="eco-feat-text"><strong>Metas financeiras</strong><span>Transforme objetivos de vida em números concretos e alcançáveis.</span></div></div>
        </div>
      </div>
      <div class="eco-callout">
        <div class="eco-callout-label">Semana 1</div>
        <div class="eco-callout-title">Você começa a agir no primeiro dia</div>
        <p class="eco-callout-body">A maioria dos programas faz você estudar por meses antes de te deixar agir. Aqui não. No onboarding da semana 1 você já cadastra seus dados, enxerga seu ponto de partida real e define suas primeiras metas.</p>
        <div class="eco-badge">Não daqui a três meses. Na semana um.</div>
      </div>
    </div>
  </div>
</section>

<!-- MÓDULOS -->
<section class="sdm-cream section-pad">
  <div class="wrap fade-up">
    <div class="sec-eyebrow">Os módulos</div>
    <h2 class="sec-title">Uma jornada em <em>5 etapas</em></h2>
    <div class="sec-rule"></div>
    <p class="sec-body">Do primeiro olhar ao controle completo — cada módulo acompanha um estágio real da sua relação com o dinheiro.</p>
    <div class="modulos-list">
      <div class="mod-item"><div class="mod-num-col"><div class="mod-num">01</div></div><div class="mod-content"><div class="mod-title">Colocando Tudo na Mesa</div><div class="mod-desc">Reúna bancos, cartões e dívidas em um só lugar. Clareza total do ponto de partida — sem julgamento, só verdade.</div></div></div>
      <div class="mod-item"><div class="mod-num-col"><div class="mod-num">02</div></div><div class="mod-content"><div class="mod-title">Olhando o Dinheiro de Perto</div><div class="mod-desc">Rastreie gastos, identifique padrões e descubra para onde seu dinheiro está indo de verdade.</div></div></div>
      <div class="mod-item"><div class="mod-num-col"><div class="mod-num">03</div></div><div class="mod-content"><div class="mod-title">Reorganizando a Vida Financeira</div><div class="mod-desc">Estratégias inteligentes para ajustar gastos, metas de redução e aprenda a negociar dívidas do seu jeito.</div></div></div>
      <div class="mod-item"><div class="mod-num-col"><div class="mod-num">04</div></div><div class="mod-content"><div class="mod-title">Planos e Sonhos</div><div class="mod-desc">Alinhe suas metas financeiras com seus objetivos de vida. Defina para onde quer ir e quanto precisa poupar para chegar lá.</div></div></div>
      <div class="mod-item"><div class="mod-num-col"><div class="mod-num">05</div></div><div class="mod-content"><div class="mod-title">Autonomia e Rotina Financeira</div><div class="mod-desc">Construa uma rotina sustentável de acompanhamento para manter o controle a longo prazo — sozinha.</div></div></div>
      <div class="mod-item bonus"><div class="mod-num-col"><div class="mod-num">✦</div></div><div class="mod-content"><div class="mod-title">Encontros ao Vivo · Bônus</div><div class="mod-desc">Gravações de todos os encontros realizados durante a turma + agendamento das sessões quinzenais em grupo.</div></div></div>
    </div>
  </div>
</section>

<!-- TRANSFORMAÇÃO -->
<section class="sdm-light section-pad">
  <div class="wrap fade-up">
    <div class="sec-eyebrow">A transformação</div>
    <h2 class="sec-title">O que muda em <em>12 meses</em></h2>
    <div class="sec-rule"></div>
    <div class="transform-inner">
      <div class="transform-col antes">
        <div class="trans-label">Antes</div>
        <div class="trans-item"><span class="trans-icon">✗</span> Não sabe para onde vai o dinheiro</div>
        <div class="trans-item"><span class="trans-icon">✗</span> Evita abrir o extrato</div>
        <div class="trans-item"><span class="trans-icon">✗</span> Pega de surpresa no IR e no IPVA</div>
        <div class="trans-item"><span class="trans-icon">✗</span> Começa a organizar e não sustenta</div>
        <div class="trans-item"><span class="trans-icon">✗</span> Sensação de que nunca sobra</div>
      </div>
      <div class="transform-mid">→</div>
      <div class="transform-col depois">
        <div class="trans-label">Depois</div>
        <div class="trans-item"><span class="trans-icon">✓</span> Sabe para onde vai cada real</div>
        <div class="trans-item"><span class="trans-icon">✓</span> Olha para o dinheiro sem medo</div>
        <div class="trans-item"><span class="trans-icon">✓</span> Planeja os meses difíceis com antecedência</div>
        <div class="trans-item"><span class="trans-icon">✓</span> Tem rotina financeira sustentável</div>
        <div class="trans-item"><span class="trans-icon">✓</span> Faz escolhas conscientes, não reativas</div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="sdm-light section-pad">
  <div class="wrap fade-up">
    <div class="sec-eyebrow">Suas dúvidas</div>
    <h2 class="sec-title">Perguntas <em>frequentes</em></h2>
    <div class="sec-rule"></div>
    <div class="obj-list">
      <div class="obj-item">
        <div class="obj-q" onclick="toggleFaq(this)"><span>Meu salário é baixo. Vai adiantar?</span><span class="obj-q-icon">+</span></div>
        <div class="obj-a">O programa não é para quem tem sobra — é para quem quer entender por que não sobra. A gente começa de onde você está, não de onde você acha que deveria estar. Não existe mínimo de renda para criar uma relação saudável com o dinheiro.</div>
      </div>
      <div class="obj-item">
        <div class="obj-q" onclick="toggleFaq(this)"><span>12 meses é muito tempo.</span><span class="obj-q-icon">+</span></div>
        <div class="obj-a">O dinheiro não para em dezembro. IR em março, IPVA em fevereiro, férias em julho, IPTU no começo do ano. 12 meses é exatamente o tempo para você parar de ser pega de surpresa e atravessar todos esses momentos com planejamento.</div>
      </div>
      <div class="obj-item">
        <div class="obj-q" onclick="toggleFaq(this)"><span>Já tentei me organizar antes e não funcionou.</span><span class="obj-q-icon">+</span></div>
        <div class="obj-a">Porque organização sem acompanhamento não sustenta. Você vai ter encontros quinzenais para ajustar, rever e não ficar sozinha quando travar. O problema nunca foi você — foi a falta de suporte e continuidade.</div>
      </div>
      <div class="obj-item">
        <div class="obj-q" onclick="toggleFaq(this)"><span>Não tenho tempo para mais um programa.</span><span class="obj-q-icon">+</span></div>
        <div class="obj-a">As aulas são gravadas — você assiste quando puder. Os encontros ao vivo são quinzenais, não semanais. Foi desenhado para quem tem vida cheia e não pode se comprometer com horários fixos toda semana.</div>
      </div>
      <div class="obj-item">
        <div class="obj-q" onclick="toggleFaq(this)"><span>O que é o HUB do Seu Dinheiro na Mesa?</span><span class="obj-q-icon">+</span></div>
        <div class="obj-a">O HUB do Seu Dinheiro na Mesa é uma plataforma criada do zero a partir de 5 anos de atendimento individual, feita especificamente para o que as clientes precisavam na prática. Patrimônio, investimentos, orçamento e metas em um único lugar — algo que não existe no mercado.</div>
      </div>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-section">
  <div class="cta-inner">
    <div class="cta-eyebrow">Primeira turma · Vagas limitadas</div>
    <h2 class="cta-title">Chegou a hora de<br/>colocar o dinheiro <em>na mesa.</em></h2>
    <p class="cta-sub">12 meses. Uma plataforma exclusiva. Você, finalmente, no controle.</p>
    <button class="btn-cta" onclick="openPopup()">
      Quero entrar na primeira turma
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </button>
    <p class="cta-note">Sem compromisso. Preencha seus dados e entraremos em contato pelo WhatsApp.</p>
  </div>
</section>

<!-- FOOTER -->
<footer class="sdm-footer">
  <div class="footer-brand">Seu Dinheiro na Mesa</div>
  <div class="footer-note">HUB do Seu Dinheiro na Mesa · Acompanhamento financeiro para mulheres · 2025</div>
</footer>

<!-- POPUP -->
<div class="overlay" id="overlay" onclick="if(event.target===this)closePopup()">
  <div class="popup">
    <div class="popup-header">
      <button class="popup-close" onclick="closePopup()" aria-label="Fechar">×</button>
      <div class="popup-eyebrow">Primeira turma · Vagas limitadas</div>
      <div class="popup-title">Reserve sua <em>vaga agora</em></div>
    </div>
    <div class="popup-body">
      <div class="form-group">
        <label class="form-label" for="field-nome">Seu nome</label>
        <input class="form-input" type="text" id="field-nome" placeholder="Como prefere ser chamada?" autocomplete="given-name"/>
      </div>
      <div class="form-group">
        <label class="form-label" for="field-wpp">WhatsApp</label>
        <input class="form-input" type="tel" id="field-wpp" placeholder="(11) 91234-5678" autocomplete="tel"/>
        <div class="form-hint">Somente para entrarmos em contato sobre a turma.</div>
      </div>
      <button class="btn-submit" id="btn-submit" onclick="handleSubmit()">Quero minha vaga →</button>
      <p class="popup-footer-note">Seus dados não serão compartilhados. Entraremos em contato em até 24h.</p>
    </div>
  </div>
</div>

</div><!-- .sdm-landing -->

<script>
var WEBHOOK_URL = "https://byaohwzceyavpfodgegk.functions.supabase.co/webhook-leads-starter";

// Scroll animations
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".fade-up").forEach(function(el) { observer.observe(el); });

function openPopup() {
  document.getElementById("overlay").classList.add("active");
  document.body.style.overflow = "hidden";
  setTimeout(function() { document.getElementById("field-nome").focus(); }, 350);
}

function closePopup() {
  document.getElementById("overlay").classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function(e) { if (e.key === "Escape") closePopup(); });

// Phone formatting
document.getElementById("field-wpp").addEventListener("input", function(e) {
  var digits = e.target.value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) e.target.value = "(" + digits;
  else if (digits.length <= 7) e.target.value = "(" + digits.slice(0,2) + ") " + digits.slice(2);
  else e.target.value = "(" + digits.slice(0,2) + ") " + digits.slice(2,7) + "-" + digits.slice(7);
});

function toggleFaq(el) {
  var wasOpen = el.classList.contains("open");
  document.querySelectorAll(".obj-q.open").forEach(function(q) { q.classList.remove("open"); });
  document.querySelectorAll(".obj-a.open").forEach(function(a) { a.classList.remove("open"); });
  if (!wasOpen) {
    el.classList.add("open");
    el.nextElementSibling.classList.add("open");
  }
}

function handleSubmit() {
  var nome = document.getElementById("field-nome");
  var wpp = document.getElementById("field-wpp");
  var btn = document.getElementById("btn-submit");
  nome.classList.remove("error"); wpp.classList.remove("error");
  var valid = true;
  if (!nome.value.trim()) { nome.classList.add("error"); valid = false; }
  var digits = wpp.value.replace(/\D/g, "");
  if (digits.length < 10) { wpp.classList.add("error"); valid = false; }
  if (!valid) return;

  btn.disabled = true; btn.textContent = "Enviando...";

  var payload = {
    nome_completo: nome.value.trim(),
    telefone_whatsapp: "55" + digits,
    canal_origem: "Landing Seu Dinheiro na Mesa",
    objetivo_financeiro: "Seu Dinheiro na Mesa \u2014 Primeira Turma"
  };

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(function(res) {
    console.log("Webhook:", res.status);
  }).catch(function(err) {
    console.warn("Webhook error:", err);
  }).finally(function() {
    closePopup();
    window.location.href = "obrigada.html";
  });
}
</script>
</body>
</html>
