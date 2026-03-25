import { Link } from "react-router-dom";
import "./Obrigada.css";

const Obrigada = () => {
  return (
    <div className="sdm-obrigada">
      <div className="bg-layer" />
      <div className="accent-line" />

      {/* HEADER */}
      <header className="obr-header">
        <div className="logo">Seu Dinheiro na Mesa</div>
        <div className="header-tag">Primeira Turma</div>
      </header>

      {/* MAIN */}
      <main className="obr-main">
        <div className="obr-card">
          <div className="ornament">✦</div>
          <div className="eyebrow">Recebemos seu contato</div>
          <h1 className="obr-title">
            Que bom ter<br />você <em>aqui.</em>
          </h1>
          <div className="divider" />
          <p className="body-text">
            Sua mensagem chegou. Em até <strong>24 horas</strong> entraremos em contato pelo seu WhatsApp com todos os detalhes sobre a primeira turma.
          </p>

          <div className="steps">
            <div className="steps-label">O que acontece agora</div>
            {[
              { num: "1", title: "Aguarde o WhatsApp", desc: "Entraremos em contato em até 24 horas com as informações da turma, data de início e link de pagamento." },
              { num: "2", title: "Garanta sua vaga", desc: "As vagas são limitadas. Ao confirmar no WhatsApp, sua vaga será reservada por 48 horas." },
              { num: "3", title: "Acesse o HUB na semana 1", desc: "Após a confirmação, você recebe o acesso ao HUB do Seu Dinheiro na Mesa e já começa o onboarding." },
            ].map((s, i) => (
              <div className="step-item" key={i}>
                <div className="step-num">{s.num}</div>
                <div className="step-text">
                  <strong>{s.title}</strong>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>

          <Link to="/" className="btn-back">
            ← Voltar para a página
          </Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="obr-footer">
        <div className="footer-brand">Seu Dinheiro na Mesa</div>
        <div className="footer-note">HUB do Seu Dinheiro na Mesa · Acompanhamento financeiro para mulheres · 2025</div>
      </footer>
    </div>
  );
};

export default Obrigada;
