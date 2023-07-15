import { CheckCircle } from "@phosphor-icons/react";
import React from "react";

export function BannerApp() {
  return (
    <section className="mag banner">
      <div className="cts">
        <span className="info">
          <h2>
            Tudo na palma
            <br />
            da mão.
          </h2>
          <p>
            O app da Banquee conta com tudo necessário para um controle
            financeiro e suporte 24h de qualidade para nossos clientes.
          </p>
          <div>
            <p>
              <CheckCircle weight="fill" /> Conta 100% digital e motificavel.
            </p>
            <p>
              <CheckCircle weight="fill" /> Resumo de gastos e iventismentos
              diario.
            </p>
            <p>
              <CheckCircle weight="fill" /> Suporte especializado 24h a
              disposição.
            </p>
          </div>
        </span>
        <picture>
        <source
            width="150"
            height="150"
            type="image/png"
            srcSet="./config/public/img/png/banner-app.png"
          />
          <img
            width="150"
            height="150"
            src="./config/public/img/png/banner-app.svg"
            alt="Mochup da pagina inicial do app da Banquee."
          />
        </picture>
      </div>
    </section>
  );
}
