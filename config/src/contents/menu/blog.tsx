import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react";
import React from "react";

export function Blog() {
  return (
    <Popover>
      <PopoverTrigger>
        <button title="Blog" className="_btn">
          Blog <CaretDown />
        </button>
      </PopoverTrigger>
      <PopoverContent className="_blog">
        <section className="_catg">
            <h4>Categorias</h4>
            <nav>
                <a className="_btn" href="/blog/tags/conbtrole-financeiro" title="Ver artigos sobre controle financeiro!">Controle financeiro</a>
                <a className="_btn" href="/blog/tags/conta-digital" title="Ver todos artigos sobre sua conta digital!">Conta digital</a>
                <a className="_btn" href="/blog/tags/viver-e-banquee" title="Veja todos artigos sobre Viver é Banquee.">Viver é Banquee.</a>
                <a className="_btn" href="/blog/tags/empreendedorismo" title="Veja os artigos de empreendedoriso!">Empreendedorismo</a>
                <a className="_btn" href="/blog/#artigos" title="Vejá todos os artigos do blog!">Ver tudo!</a>
            </nav>
        </section>
        <section className="_arts">
          <h4>Artigos populares!</h4>
          <div>
            <a className="_btn" href="/blog/2023/nalckm1Ebtd7" title="Veja o artigo Como começar a usar o Banquee para sua startup">
              <img
                width="105"
                height="105"
                src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Foto Mulher em pé e segurando smartphones"
                loading="lazy"
              />
              <span>
                <h5>Como começar a usar o Banquee para sua startup</h5>
                <p>
                  Uma plataforma financeira intuitiva que oferece controle de
                  despesas, receitas, fluxo de caixa e relatórios, facilitando a
                  gestão financeira.
                </p>
              </span>
            </a>
            <a className="_btn" title="Veja o artigo 10 coisas que ninguém lhe disse sobre o Banquee" href="/blog/2023/lLwTzc8vXEVF">
              <img
                width="105"
                height="105"
                src="https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Foto Mulher na camiseta branca do pescoço da tripulação segurando o smartphone"
                loading="lazy"
              />
              <span>
                <h5>10 coisas que ninguém lhe disse sobre o Banquee</h5>
                <p>
                  Descubra fatos surpreendentes sobre o Banquee: uma plataforma
                  descentralizada baseada em blockchain e promovendo a inclusão
                  financeira. #InclusãoFinanceira
                </p>
              </span>
            </a>
            <a className="_btn desk" title="Veja o artigo 7 maneiras de melhorar seus hábitos de poupança" href="/blog/2023/ZqqfMCTZpcKL">
              <img
                width="105"
                height="105"
                src="https://images.unsplash.com/photo-1624454003060-fc7189ed6242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Foto Bolsa de mão de couro marrom na mesa rosa"
                loading="lazy"
              />
              <span>
                <h5>7 maneiras de melhorar seus hábitos de poupança</h5>
                <p>
                  Descubra sete dicas eficazes para aprimorar seus hábitos de
                  poupança e alcançar uma vida financeira mais saudável.
                </p>
              </span>
            </a>
            <a className="_btn desk" title="Veja o artigo Por que amamos Banquee (e você também deveria!)" href="/blog/2023/qwlcdvArBe4h">
              <img
                width="105"
                height="105"
                src="https://images.unsplash.com/photo-1611680580888-d0581ee3a3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Foto Homem na camisa social preta vestindo fones de ouvido"
                loading="lazy"
              />
              <span>
                <h5>Por que amamos Banquee (e você também deveria!)</h5>
                <p>
                  Descubra por que o Banquee conquista corações: uma plataforma
                  financeira descentralizada, inclusiva e transparente. A
                  revolução financeira está aqui!
                </p>
              </span>
            </a>
          </div>
        </section>
      </PopoverContent>
    </Popover>
  );
}
