import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Landing.css";

const WEBHOOK_URL = "https://ekyisfmxmxcwtgdwvfen.supabase.co/functions/v1/webhook-lead";

const Index = () => {
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [wpp, setWpp] = useState("");
  const [nomeError, setNomeError] = useState(false);
  const [wppError, setWppError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const nomeRef = useRef<HTMLInputElement>(null);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => nomeRef.current?.focus(), 350);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closePopup]);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 11)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    return value;
  };

  const handleSubmit = async () => {
    let valid = true;
    setNomeError(false);
    setWppError(false);

    if (!nome.trim()) { setNomeError(true); valid = false; }
    const digits = wpp.replace(/\D/g, "");
    if (digits.length < 10) { setWppError(true); valid = false; }
    if (!valid) return;

    setSubmitting(true);
    const payload = {
      nome_completo: nome.trim(),
      telefone_whatsapp: "55" + digits,
      canal_origem: "Landing Seu Dinheiro na Mesa",
      objetivo_financeiro: "Seu Dinheiro na Mesa — Primeira Turma",
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.warn("Webhook response:", res.status, await res.text());
      } else {
        console.log("Webhook enviado com sucesso:", res.status);
      }
    } catch (err) {
      console.warn("Webhook error:", err);
    }

    try {
      const leads = JSON.parse(sessionStorage.getItem("sdm_leads") || "[]");
      leads.push(payload);
      sessionStorage.setItem("sdm_leads", JSON.stringify(leads));
    } catch (_e) { /* ignore */ }

    closePopup();
    navigate("/obrigada");
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Meu salário é baixo. Vai adiantar?", a: "O programa não é para quem tem sobra — é para quem quer entender por que não sobra. A gente começa de onde você está, não de onde você acha que deveria estar. Não existe mínimo de renda para criar uma relação saudável com o dinheiro." },
    { q: "12 meses é muito tempo.", a: "O dinheiro não para em dezembro. IR em março, IPVA em fevereiro, férias em julho, IPTU no começo do ano. 12 meses é exatamente o tempo para você parar de ser pega de surpresa e atravessar todos esses momentos com planejamento." },
    { q: "Já tentei me organizar antes e não funcionou.", a: "Porque organização sem acompanhamento não sustenta. Você vai ter encontros quinzenais para ajustar, rever e não ficar sozinha quando travar. O problema nunca foi você — foi a falta de suporte e continuidade." },
    { q: "Não tenho tempo para mais um programa.", a: "As aulas são gravadas — você assiste quando puder. Os encontros ao vivo são quinzenais, não semanais. Foi desenhado para quem tem vida cheia e não pode se comprometer com horários fixos toda semana." },
    { q: "O que é o HUB do Seu Dinheiro na Mesa?", a: "O HUB do Seu Dinheiro na Mesa é uma plataforma criada do zero a partir de 5 anos de atendimento individual, feita especificamente para o que as clientes precisavam na prática. Patrimônio, investimentos, orçamento e metas em um único lugar — algo que não existe no mercado." },
  ];

  return (
    <div className="sdm-landing">
      {/* HERO */}
      <section className="sdm-hero">
        <div className="hero-accent-line" />
        <div className="hero-inner">
          <div className="eyebrow">Primeira Turma · Vagas Limitadas</div>
          <h1 className="hero-title">
            Seu Dinheiro<br /><em>na Mesa</em>
          </h1>
          <p className="hero-sub">
            12 meses para criar intimidade com o seu dinheiro e encontrar os seus próprios caminhos.
          </p>
          <div className="hero-divider" />
          <button className="btn-cta" onClick={openPopup}>
            Quero entrar na primeira turma
            <ArrowRight size={16} />
          </button>
          <p className="hero-note">Powered by HUB do Seu Dinheiro na Mesa · Programa de acompanhamento financeiro</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        {[
          { num: "5", label: "Anos de experiência" },
          { num: "12", label: "Meses juntas" },
          { num: "5", label: "Módulos gravados" },
          { num: "1", label: "Plataforma exclusiva" },
        ].map((t, i) => (
          <div className="trust-item" key={i}>
            <div className="trust-num">{t.num}</div>
            <div className="trust-label">{t.label}</div>
          </div>
        ))}
      </div>

      {/* PARA QUEM */}
      <section className="sdm-light section-pad">
        <div className="wrap fade-up">
          <div className="sec-eyebrow">Para quem é</div>
          <h2 className="sec-title">Este programa é <em>para você</em></h2>
          <div className="sec-rule" />
          <div className="pq-grid">
            {[
              { emoji: "💸", title: "Que sente que o dinheiro escorrega", desc: "Você tem renda, tem contas — e ainda assim o fim do mês chega com aquela sensação de que faltou algo. Sempre." },
              { emoji: "😶", title: "Que evita olhar para o extrato", desc: "Não por descuido — por medo. Olhar dói quando você não sabe o que vai encontrar. E aí adiamos para o mês que vem." },
              { emoji: "📱", title: "Que já tentou antes e não sustentou", desc: "Baixou o app, fez a planilha, prometeu a si mesma que esse mês ia ser diferente. E o próximo mês veio igual." },
              { emoji: "🌱", title: 'Que quer mais do que só "se organizar"', desc: "Você quer construir uma relação real com o seu dinheiro. Entender, planejar, sonhar — e ter as ferramentas para chegar lá." },
            ].map((c, i) => (
              <div className="pq-card" key={i}>
                <div className="pq-emoji">{c.emoji}</div>
                <div className="pq-title">{c.title}</div>
                <p className="pq-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESE */}
      <div className="quote-section">
        <p className="quote-text">
          A partir do momento que a gente ganha <em>intimidade</em> com o dinheiro,<br />
          vamos encontrando pontes possíveis para atravessar o problema.
        </p>
        <div className="quote-author">— A tese que guia o programa</div>
      </div>

      {/* O PROGRAMA */}
      <section className="sdm-cream section-pad">
        <div className="wrap fade-up">
          <div className="sec-eyebrow">O programa</div>
          <h2 className="sec-title">Um ecossistema completo <em>de 12 meses</em></h2>
          <div className="sec-rule" />
          <p className="sec-body">Não é uma planilha. Não é uma fórmula. É um acompanhamento que atravessa com você todos os meses do ano — inclusive os difíceis.</p>
          <div className="prog-grid">
            {[
              { num: "5", title: "Módulos gravados", desc: "Aulas para assistir quando e onde puder, organizadas em uma jornada progressiva do diagnóstico à autonomia financeira." },
              { num: "12", title: "Meses juntas", desc: "IR, IPVA, IPTU, férias — cada mês tem seu contexto. A gente vai atravessar tudo isso juntas, sem ser pega de surpresa." },
              { num: "2×", title: "Encontros ao vivo por mês", desc: "Encontros quinzenais em grupo para tirar dúvidas e ver orçamentos reais sendo construídos na frente de você." },
              { num: "★", title: "Acesso imediato ao HUB", desc: "Na semana 1 você já está dentro da plataforma, com seus dados e primeiras metas. Não daqui a 3 meses — na semana um." },
            ].map((p, i) => (
              <div className="prog-card" key={i}>
                <div className="prog-big-num">{p.num}</div>
                <div className="prog-title">{p.title}</div>
                <p className="prog-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECONOMIZA */}
      <section className="sdm-light section-pad">
        <div className="wrap fade-up">
          <div className="eco-inner">
            <div>
              <div className="sec-eyebrow">A plataforma exclusiva</div>
              <h2 className="sec-title">HUB do Seu Dinheiro <em>na Mesa</em></h2>
              <div className="sec-rule" />
              <p className="sec-body" style={{ marginBottom: 0 }}>Construída do zero a partir de 5 anos de atendimento individual. O único lugar onde patrimônio, investimentos, orçamento e metas vivem juntos — e fazem sentido juntos.</p>
              <div className="eco-features">
                {[
                  { icon: "🏦", title: "Patrimônio", desc: "Visualize tudo o que você tem consolidado em um único painel." },
                  { icon: "📈", title: "Investimentos", desc: "Acompanhe seus aportes e evolução com clareza." },
                  { icon: "📋", title: "Orçamento mensal", desc: "Saiba para onde vai cada real — antes que ele vá." },
                  { icon: "🎯", title: "Metas financeiras", desc: "Transforme objetivos de vida em números concretos e alcançáveis." },
                ].map((f, i) => (
                  <div className="eco-feat" key={i}>
                    <div className="eco-feat-icon">{f.icon}</div>
                    <div className="eco-feat-text">
                      <strong>{f.title}</strong>
                      <span>{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="eco-callout">
              <div className="eco-callout-label">Semana 1</div>
              <div className="eco-callout-title">Você começa a agir no primeiro dia</div>
              <p className="eco-callout-body">
                A maioria dos programas faz você estudar por meses antes de te deixar agir. Aqui não. No onboarding da semana 1 você já cadastra seus dados, enxerga seu ponto de partida real e define suas primeiras metas.
              </p>
              <div className="eco-badge">Não daqui a três meses. Na semana um.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="sdm-cream section-pad">
        <div className="wrap fade-up">
          <div className="sec-eyebrow">Os módulos</div>
          <h2 className="sec-title">Uma jornada em <em>5 etapas</em></h2>
          <div className="sec-rule" />
          <p className="sec-body">Do primeiro olhar ao controle completo — cada módulo acompanha um estágio real da sua relação com o dinheiro.</p>
          <div className="modulos-list">
            {[
              { num: "01", title: "Colocando Tudo na Mesa", desc: "Reúna bancos, cartões e dívidas em um só lugar. Clareza total do ponto de partida — sem julgamento, só verdade." },
              { num: "02", title: "Olhando o Dinheiro de Perto", desc: "Rastreie gastos, identifique padrões e descubra para onde seu dinheiro está indo de verdade." },
              { num: "03", title: "Reorganizando a Vida Financeira", desc: "Estratégias inteligentes para ajustar gastos, metas de redução e aprenda a negociar dívidas do seu jeito." },
              { num: "04", title: "Planos e Sonhos", desc: "Alinhe suas metas financeiras com seus objetivos de vida. Defina para onde quer ir e quanto precisa poupar para chegar lá." },
              { num: "05", title: "Autonomia e Rotina Financeira", desc: "Construa uma rotina sustentável de acompanhamento para manter o controle a longo prazo — sozinha." },
            ].map((m, i) => (
              <div className="mod-item" key={i}>
                <div className="mod-num-col"><div className="mod-num">{m.num}</div></div>
                <div className="mod-content">
                  <div className="mod-title">{m.title}</div>
                  <div className="mod-desc">{m.desc}</div>
                </div>
              </div>
            ))}
            <div className="mod-item bonus">
              <div className="mod-num-col"><div className="mod-num">✦</div></div>
              <div className="mod-content">
                <div className="mod-title">Encontros ao Vivo · Bônus</div>
                <div className="mod-desc">Gravações de todos os encontros realizados durante a turma + agendamento das sessões quinzenais em grupo.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="sdm-light section-pad">
        <div className="wrap fade-up">
          <div className="sec-eyebrow">A transformação</div>
          <h2 className="sec-title">O que muda em <em>12 meses</em></h2>
          <div className="sec-rule" />
          <div className="transform-inner">
            <div className="transform-col antes">
              <div className="trans-label">Antes</div>
              {["Não sabe para onde vai o dinheiro", "Evita abrir o extrato", "Pega de surpresa no IR e no IPVA", "Começa a organizar e não sustenta", "Sensação de que nunca sobra"].map((t, i) => (
                <div className="trans-item" key={i}><span className="trans-icon">✗</span> {t}</div>
              ))}
            </div>
            <div className="transform-mid">→</div>
            <div className="transform-col depois">
              <div className="trans-label">Depois</div>
              {["Sabe para onde vai cada real", "Olha para o dinheiro sem medo", "Planeja os meses difíceis com antecedência", "Tem rotina financeira sustentável", "Faz escolhas conscientes, não reativas"].map((t, i) => (
                <div className="trans-item" key={i}><span className="trans-icon">✓</span> {t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS - not in HTML body but CSS exists, skipping */}

      {/* OBJEÇÕES */}
      <section className="sdm-light section-pad">
        <div className="wrap fade-up">
          <div className="sec-eyebrow">Suas dúvidas</div>
          <h2 className="sec-title">Perguntas <em>frequentes</em></h2>
          <div className="sec-rule" />
          <div className="obj-list">
            {faqs.map((faq, i) => (
              <div className="obj-item" key={i}>
                <div className={`obj-q${openFaq === i ? " open" : ""}`} onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span className="obj-q-icon">+</span>
                </div>
                <div className={`obj-a${openFaq === i ? " open" : ""}`}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-eyebrow">Primeira turma · Vagas limitadas</div>
          <h2 className="cta-title">Chegou a hora de<br />colocar o dinheiro <em>na mesa.</em></h2>
          <p className="cta-sub">12 meses. Una plataforma exclusiva. Você, finalmente, no controle.</p>
          <button className="btn-cta" onClick={openPopup}>
            Quero entrar na primeira turma
            <ArrowRight size={16} />
          </button>
          <p className="cta-note">Sem compromisso. Preencha seus dados e entraremos em contato pelo WhatsApp.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sdm-footer">
        <div className="footer-brand">Seu Dinheiro na Mesa</div>
        <div className="footer-note">HUB do Seu Dinheiro na Mesa · Acompanhamento financeiro para mulheres · 2025</div>
      </footer>

      {/* POPUP */}
      <div
        className={`overlay${popupOpen ? " active" : ""}`}
        onClick={(e) => { if (e.target === e.currentTarget) closePopup(); }}
      >
        <div className="popup">
          {!success ? (
            <>
              <div className="popup-header">
                <button className="popup-close" onClick={closePopup} aria-label="Fechar">×</button>
                <div className="popup-eyebrow">Primeira turma · Vagas limitadas</div>
                <div className="popup-title">Reserve sua <em>vaga agora</em></div>
              </div>
              <div className="popup-body">
                <div className="form-group">
                  <label className="form-label" htmlFor="field-nome">Seu nome</label>
                  <input
                    className={`form-input${nomeError ? " error" : ""}`}
                    type="text"
                    id="field-nome"
                    ref={nomeRef}
                    placeholder="Como prefere ser chamada?"
                    autoComplete="given-name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="field-wpp">WhatsApp</label>
                  <input
                    className={`form-input${wppError ? " error" : ""}`}
                    type="tel"
                    id="field-wpp"
                    placeholder="(11) 91234-5678"
                    autoComplete="tel"
                    value={wpp}
                    onChange={(e) => setWpp(formatPhone(e.target.value))}
                  />
                  <div className="form-hint">Somente para entrarmos em contato sobre a turma.</div>
                </div>
                <button className="btn-submit" onClick={handleSubmit} disabled={submitting}>
                  {submitting ? "Enviando..." : "Quero minha vaga →"}
                </button>
                <p className="popup-footer-note">Seus dados não serão compartilhados. Entraremos em contato em até 24h.</p>
              </div>
            </>
          ) : (
            <div className="success-state active">
              <div className="success-icon">✦</div>
              <div className="success-title">Recebemos seu contato!</div>
              <p className="success-body">
                Obrigada por seu interesse na primeira turma.<br />
                Entraremos em contato pelo WhatsApp em até 24 horas com todos os detalhes.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
