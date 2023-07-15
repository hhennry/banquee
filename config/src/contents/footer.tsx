import React from "react";

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <section className="_cts">
        <div>
          <h5>Institucional</h5>
          <nav>
            <a
              title="Nosso manifesto e objetivos na sociedade"
              href="/manifesto"
            >
              Manifesto
            </a>
            <a
              title="Utilidades que a Banquee oferece nas contas digitais"
              href="/#home"
            >
              Utilidades
            </a>
            <a
              title="Veja os benefícios de cada cartão da Banquee"
              href="/card/"
            >
              Cartões
            </a>
            <a
              title="Suporte 24h para clientes e investidores"
              href="/support/"
            >
              Suporte
            </a>
          </nav>
        </div>
        <div>
          <h5>Blog</h5>
          <nav>
            <a title="Ver artigos sobre Controle Financeiro" href="/blog/">
              Controle Financeiro
            </a>
            <a title="Ver artigos sobre Conta Digital" href="/blog/">
              Conta Digital
            </a>
            <a title="Ver artigos sobre Viver é Banquee" href="/blog/">
              Viver é Banquee
            </a>
            <a title="Ver todos artigos" href="/blog/">
              Ver tudo!
            </a>
          </nav>
        </div>
        <div>
          <h5>Imprensa</h5>
          <nav>
            <a title="Guia de estilização" href="/press/style">
              Style Guide
            </a>
            <a title="Licença de utilização" href="/press/license">
              Licença
            </a>
            <a title="Documentação de atualização" href="/press/logs">
              Changelog
            </a>
          </nav>
        </div>
        <div>
          <h5>Distribuição</h5>
          <nav>
            <a
              title="Github do desenvolvedor - @hhennry"
              href="https://github.com/hhennry"
            >
              Programador
            </a>
            <a
              title="Site do designer - Gola.io"
              href="https://templates.gola.io/"
            >
              Designer
            </a>
            <a title="Site do template - Webflow" href="https://webflow.com/">
              Template
            </a>
          </nav>
        </div>
      </section>
      <section className="_sub">
        <p>
          © Design by{" "}
          <a
            href="https://templates.gola.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pawel Gola
          </a>{" "}
          - Template by{" "}
          <a
            href="https://webflow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webflow
          </a>{" "}
          - Powered by{" "}
          <a
            href="https://github.com/hhennry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Henry Rodrigues
          </a>
          .
        </p>
        <nav>
          <a title="Sala da Imprenssa" href="/press/">
            Imprensa
          </a>
          <a title="Política de Privacidade" href="/press/privacy">
            Privacidade
          </a>
        </nav>
      </section>
    </footer>
  );
}
